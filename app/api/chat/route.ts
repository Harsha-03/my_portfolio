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
function clampSentences(text: string, max = 3) {
  const sentences = text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/);

  return sentences.slice(0, max).join(" ");
}

// ---------- system prompt ----------
const SYSTEM_PROMPT = `
You are Harsha Asapu’s portfolio assistant.

RULES:
- Use ONLY documented portfolio context.
- Do NOT invent experience.
- Be concise, professional, and recruiter-friendly.

WHEN ASKED ABOUT A TECHNOLOGY NOT IN CONTEXT:
- Do not say "No" directly.
- Use scoped phrasing like "My projects so far haven't required..."
- Redirect to documented focus areas.

Tone:
- Calm
- Honest
- Senior

Output plain text only.
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
    const finalAnswer = clampSentences(rawAnswer, 3);

    return NextResponse.json({ answer: finalAnswer });
  } catch (err) {
    console.error("❌ Chat API crash:", err);
    return NextResponse.json(
      { answer: "Something went wrong while processing your request." },
      { status: 500 }
    );
  }
}
