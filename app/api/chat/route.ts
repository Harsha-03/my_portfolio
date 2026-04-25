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

const EMBEDDINGS_PATH = path.join(process.cwd(), "embeddings.json");
const TOP_K = 8;

// ---------- utils ----------
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  return dot / (magA * magB);
}

/**
 * Hard clamp to max N sentences (default: 3)
 * Preserves full sentences only.
 */


// ---------- system prompt ----------
const SYSTEM_PROMPT = `
You are Harsha Asapu's portfolio assistant. Answer using ONLY the provided CONTEXT.
Always refer to Harsha in the third person. Output plain text only. No markdown.

FORMAT RULES — follow strictly based on question type:
- Simple factual (dates, tools, status): 1-2 sentences max.
- Project or experience question: 1 intro sentence + 3-4 short bullets (each under 12 words).
- "Tell me about Harsha" or overview: 4 lines — role, focus, current work, open to.
- Never exceed 100 words total.
- Never use headers. Use "•" for bullets.

CONTENT RULES:
- Use ONLY documented context. Never invent or imply experience outside context.
- If a skill or tool is not in context, say: "That hasn't been a focus in his documented work."
- Harsha is actively open to UI/UX Designer, Product Designer, and Web Designer roles (full-time, remote).
- He is OPT authorized.

Tone: calm, specific, recruiter-ready. No filler words.
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

    // Embed query
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
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

    const context = topChunks
      .map((c) => c.content)
      .join("\n\n---\n\n");

    // Ask model
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.2,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `CONTEXT:\n${context}\n\nQUESTION:\n${question}`,
        },
      ],
    });

    const rawAnswer =
      completion.choices[0]?.message?.content?.trim() ||
      "I don’t have enough information to answer that.";

    // 🔒 Final safety clamp (2–3 sentences max)
    return NextResponse.json({ answer: rawAnswer });
  } catch (err) {
    console.error("❌ Chat API crash:", err);
    return NextResponse.json(
      { answer: "Something went wrong while processing your request." },
      { status: 500 }
    );
  }
}
