import fs from "fs";
import path from "path";
import matter from "gray-matter";
import OpenAI from "openai";

console.log("🚀 Ingest script started");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CONTENT_DIR = path.join(process.cwd(), "./portfolio-content");

function getMarkdownFiles(dir) {
  return fs.readdirSync(dir).flatMap((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      return getMarkdownFiles(fullPath);
    }
    return item.endsWith(".md") ? [fullPath] : [];
  });
}

function chunkText(text, maxLength = 900) {
  const chunks = [];
  let current = "";

  for (const line of text.split("\n")) {
    if ((current + line).length > maxLength) {
      chunks.push(current.trim());
      current = "";
    }
    current += line + "\n";
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

async function ingest() {
  const files = getMarkdownFiles(CONTENT_DIR);
  const results = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const { content } = matter(raw);
    const relativePath = path.relative(CONTENT_DIR, file).replace(/\\/g, "/");

    const chunks = chunkText(content);

    for (let i = 0; i < chunks.length; i++) {
      const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunks[i],
      });

      const chunkId = `${relativePath}::${i}`;
        results.push({
        id: chunkId,
        embedding: embedding.data[0].embedding,
        content: chunks[i],
        metadata: {
            source: relativePath,
            chunk: i,
        },
    });
    }
  }

  fs.writeFileSync(
    "embeddings.json",
    JSON.stringify(results, null, 2),
    "utf8"
  );

  console.log("✅ Portfolio content successfully embedded.");
}

ingest();
