import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type EmbeddedChunk = {
  embedding: number[];
  content: string;
  metadata: {
    source: string;
    chunk: number;
  };
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const EMBEDDINGS_PATH = path.join(process.cwd(), "embeddings.json");
const TOP_K = 8;
const HISTORY_TURNS = 6; // last N user+assistant turns passed as context

// ---------- utils ----------
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  return dot / (magA * magB);
}

// ---------- system prompt ----------
const SYSTEM_PROMPT = `
You are Harsha Asapu's portfolio assistant. Answer using ONLY the provided CONTEXT
and any prior turns of the conversation.

Always refer to Harsha in the third person. Output plain text only. No markdown.

FORMAT RULES — follow strictly based on question type:
- Simple factual (dates, tools, status): 1-2 sentences max.
- Project or experience question: 1 intro sentence + 3-4 short bullets (each under 12 words).
- "Tell me about Harsha" or overview: 4 lines — role, focus, current work, open to.
- Follow-up questions ("compared to X?", "any experience?", "what about Y?"): use conversation history to resolve what the user is referring to. Never restart the reasoning.
- Never exceed 120 words total.
- Never use headers. Use "•" for bullets.

CONTENT RULES:
- Use ONLY documented context. Never invent or imply experience outside context.
- If a skill or product is not explicitly in context, DO NOT say "not documented" flatly.
  Instead, bridge to the closest documented problem class from Harsha's design philosophy.
  Example: for "any experience with Google Maps?" — bridge to real-world state modeling,
  decisions people make in seconds, cross-platform state consistency, or interfaces that
  decide when to interrupt. Reference Phoenix AI as the primary current-work example.
- Harsha's primary preferred role is INTERACTION DESIGNER. Also open to Product Designer,
  UI/UX Designer, and Design Engineer roles with a strong design core.
- Harsha's current work is Phoenix AI at Community Dreams Foundation — sole design owner,
  live at phoenix-cdreams.org, direct ship authority, six documented reframes in two weeks.
- Harsha is based in Reno, NV, OPT authorized, open to relocation.

BRIDGING PRIORITY (when a query mentions a specific product Harsha hasn't documented):
1. Identify the problem class the product represents (state modeling, ambient interfaces,
   decisions in seconds, IA under ambiguity, cross-platform consistency, etc.)
2. Reference Harsha's documented work in that problem class, leading with Phoenix AI
3. Only after that, if space allows, briefly acknowledge the specific product wasn't
   directly built in his portfolio

DO NOT LEAD ANSWERS WITH THE STARBUCKS CASE STUDY. Phoenix AI is the primary current-work
example. Starbucks (referred to as "the Missing State case study") is one example of
fulfillment state modeling — mention only when the specific problem class is fulfillment
UX or state visibility, never as a general "flagship" project.

Tone: calm, specific, recruiter-ready. No filler words. No hedging.
`.trim();

// ---------- POST ----------
export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ Missing OPENAI_API_KEY");
      return NextResponse.json(
        { answer: "The assistant is temporarily unavailable." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const question = body?.question;
    const history: ChatMessage[] = Array.isArray(body?.history) ? body.history : [];

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { answer: "Please ask a valid question." },
        { status: 400 }
      );
    }

    if (!fs.existsSync(EMBEDDINGS_PATH)) {
      console.error("❌ embeddings.json not found");
      return NextResponse.json(
        {
          answer:
            "My portfolio knowledge base is still initializing. Please check back shortly.",
        },
        { status: 200 }
      );
    }

    const raw = fs.readFileSync(EMBEDDINGS_PATH, "utf8");
    const chunks: EmbeddedChunk[] = JSON.parse(raw);

    // Build the retrieval query — combine current question with recent history
    // so follow-ups like "compared to X?" retrieve relevant chunks.
    const recentHistoryText = history
      .slice(-4)
      .map((m) => m.content)
      .join(" ");
    const retrievalQuery = recentHistoryText
      ? `${recentHistoryText} ${question}`
      : question;

    // Embed the retrieval query
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: retrievalQuery,
    });

    const queryVector = embeddingRes.data[0].embedding;

    // Rank chunks
    const topChunks = chunks
      .map((c) => ({
        ...c,
        score: cosineSimilarity(queryVector, c.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, TOP_K);

    const context = topChunks.map((c) => c.content).join("\n\n---\n\n");

    // Build message array with prior turns for memory
    const trimmedHistory = history
      .slice(-HISTORY_TURNS * 2) // user + assistant pairs
      .filter(
        (m) =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      );

    const messages: {
      role: "system" | "user" | "assistant";
      content: string;
    }[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...trimmedHistory,
      {
        role: "user",
        content: `CONTEXT:\n${context}\n\nQUESTION:\n${question}`,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.2,
      messages,
    });

    const rawAnswer =
      completion.choices[0]?.message?.content?.trim() ||
      "I don't have enough information to answer that.";

    return NextResponse.json({ answer: rawAnswer });
  } catch (err) {
    console.error("❌ Chat API crash:", err);
    return NextResponse.json(
      { answer: "Something went wrong while processing your request." },
      { status: 500 }
    );
  }
}