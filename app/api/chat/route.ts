import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

type EmbeddedChunk = {
  id?: string;
  embedding: number[];
  content: string;
  metadata: {
    source: string;
    chunk: number;
  };
};

const EMBEDDINGS_PATH = path.join(process.cwd(), "embeddings.json");
const TOP_K = 10;
const PRESELECT_K = 6;

// ---------- similarity ----------
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

// ---------- normalization + doc resolver (typo-proof) ----------
function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type CanonicalDoc = {
  key: string;
  fileHint: string; // must match metadata.source (normalized)
  aliases: string[];
};

const DOCS: CanonicalDoc[] = [
  {
    key: "airline-performance-tracker",
    fileHint: "projects/airline-performance-tracker.md",
    aliases: [
      "airline performance",
      "airline tracker",
      "flight performance",
      "flight tracker",
      "aviation dashboard",
      "delay dashboard",
      "cancellation dashboard",
      "power bi airline",
      "powerbi airline",
      "airport delays",
    ],
  },
  {
    key: "ai-resume-editor",
    fileHint: "projects/ai-resume-editor.md",
    aliases: [
      "resume editor",
      "ai resume",
      "resume ai",
      "resume tailoring",
      "job match",
      "resume matcher",
      "streamlit resume",
      "resume suggestions",
    ],
  },
  {
    key: "portfolio-website",
    fileHint: "projects/portfolio-website.md",
    aliases: [
      "portfolio website",
      "rag portfolio",
      "portfolio rag",
      "rag assistant",
      "portfolio assistant",
      "nextjs portfolio",
      "this website",
    ],
  },
  {
    key: "slu-alumni-connect",
    fileHint: "projects/slu-alumni-connect.md",
    aliases: [
      "slu alumni",
      "alumni connect",
      "alumni platform",
      "mentorship platform",
      "role based dashboard",
      "role-based dashboard",
    ],
  },
  {
    key: "builtintech",
    fileHint: "experience/builtintech.md",
    aliases: ["builtintech", "co founder", "cofounder", "it services", "client projects india"],
  },
  {
    key: "areksoft-technologies",
    fileHint: "experience/areksoft-technologies.md",
    aliases: ["areksoft", "areksoft technologies", "early engineering experience", "early experience"],
  },
  {
    key: "timeline",
    fileHint: "about/timeline.md",
    aliases: ["timeline", "time line", "dates", "when did", "time period", "what period"],
  },
];

function resolveDoc(question: string): CanonicalDoc | null {
  const q = normalize(question);

  // direct alias match
  for (const doc of DOCS) {
    for (const a of doc.aliases) {
      if (q.includes(normalize(a))) return doc;
    }
  }

  // heuristic (helps with vague recruiter wording)
  if (q.includes("power bi") && (q.includes("airline") || q.includes("flight") || q.includes("delay"))) {
    return DOCS.find((d) => d.key === "airline-performance-tracker") || null;
  }

  if ((q.includes("resume") || q.includes("cv")) && (q.includes("ai") || q.includes("tailor") || q.includes("job"))) {
    return DOCS.find((d) => d.key === "ai-resume-editor") || null;
  }

  return null;
}

function normSource(source: string) {
  return (source || "").replace(/\\/g, "/");
}

// ---------- system prompt ----------
const SYSTEM_PROMPT = `
You are Harsha Asapu’s portfolio assistant.

NON-NEGOTIABLE RULES:
- Use ONLY the provided CONTEXT.
- Do NOT invent projects, roles, timelines, or tools.
- Do NOT generalize or add filler language.
- Answer ONLY what the CONTEXT explicitly supports.
- Output JSON ONLY.

OUTPUT FORMAT:
{
  "answer": "string",
  "follow_up_question": "string | null"
}

If the question cannot be answered from the CONTEXT, return:
- answer: ""
- follow_up_question: a single clarifying question.
`.trim();

// ---------- POST ----------
export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const debug = searchParams.get("debug") === "1";

    const body = await req.json().catch(() => ({}));
    const question = body?.question;

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    // Load embeddings
    const raw = fs.readFileSync(EMBEDDINGS_PATH, "utf8");
    const chunks: EmbeddedChunk[] = JSON.parse(raw);

    // Embed question
    const queryEmbedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
    });

    const queryVector = queryEmbedding.data[0].embedding;

    // Rank chunks by similarity
    const ranked = chunks
      .map((chunk) => ({
        ...chunk,
        score: cosineSimilarity(queryVector, chunk.embedding),
      }))
      .sort((a: any, b: any) => b.score - a.score)
      .slice(0, TOP_K);

    // Resolver: if user likely meant a specific doc, force-include some chunks from that doc
    const resolved = resolveDoc(question);

    let preselected: any[] = [];
    if (resolved) {
      preselected = chunks
        .filter((c) => normSource(c.metadata?.source) === resolved.fileHint)
        .slice(0, PRESELECT_K)
        .map((c) => ({ ...c, score: 999 })); // score only for debugging visibility
    }

    // Merge + dedupe by chunk id
    const seen = new Set<string>();
    const merged = [...preselected, ...ranked]
      .filter((r: any) => {
        const id = r.id || `${r.metadata.source}::${r.metadata.chunk}`;
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      })
      .slice(0, TOP_K);

    // Build CONTEXT with CHUNK_ID anchors
    const context = merged
      .map((r: any) => {
        const chunkId = r.id || `${r.metadata.source}::${r.metadata.chunk}`;

        const sourceLabel = normSource(r.metadata?.source || "unknown")
          .replace(".md", "")
          .replace(/[-_]/g, " ");

        return `
CHUNK_ID: ${chunkId}
SOURCE: ${sourceLabel}
CONTENT:
${r.content}
`.trim();
      })
      .join("\n\n---\n\n");

    // Ask model (force JSON output)
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.1,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `CONTEXT:\n${context}\n\nQUESTION:\n${question}` },
      ],
    });

    // Parse JSON safely
    let result: any = {};
    try {
      result = JSON.parse(completion.choices[0].message.content || "{}");
    } catch {
      result = {};
    }

    const answer =
      typeof result.answer === "string" && result.answer.trim().length > 0
        ? result.answer.trim()
        : "";

    const followUp =
      typeof result.follow_up_question === "string" && result.follow_up_question.trim().length > 0
        ? result.follow_up_question.trim()
        : "Which specific project or experience are you asking about?";

    const payload: any = answer
      ? { answer }
      : { answer: "", follow_up_question: followUp };

    if (debug) {
      payload.resolved = resolved ? resolved.key : null;
      payload.retrieved = merged.map((r: any) => ({
        id: r.id || `${r.metadata.source}::${r.metadata.chunk}`,
        source: normSource(r.metadata?.source || ""),
        chunk: r.metadata?.chunk,
        score: typeof r.score === "number" ? Number(r.score.toFixed(4)) : null,
      }));
    }

    return NextResponse.json(payload);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
