import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

type Post = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string | null;
  readTime: string | null;
};

function extract(source: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const m = source.match(re);
  if (!m) return null;
  return m[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim();
}

function firstImage(html: string): string | null {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 220));
  return `${mins} min read`;
}

export async function GET() {
  try {
    const feedUrl = "https://medium.com/feed/@harshaasapu.b";
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("RSS fetch failed: " + res.status);
    const xml = await res.text();

    const items = xml.split("<item>").slice(1).map((chunk) => "<item>" + chunk.split("</item>")[0] + "</item>");

    const posts: Post[] = items.slice(0, 12).map((item) => {
      const title = extract(item, "title") ?? "Untitled";
      const link = extract(item, "link") ?? "#";
      const pubDate = extract(item, "pubDate") ?? "";
      const content = extract(item, "content:encoded") ?? extract(item, "description") ?? "";
      const thumbnail = firstImage(content);
      const readTime = estimateReadTime(content);
      return { title, link, pubDate, thumbnail, readTime };
    });

    return NextResponse.json({ posts });
  } catch (err) {
    console.error("[medium-posts] error:", err);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}