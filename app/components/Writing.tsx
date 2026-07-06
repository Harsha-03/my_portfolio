"use client";

import { motion, useMotionValue, useAnimationFrame, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Post = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string | null;
  readTime: string | null;
};

const BASE_PX_PER_SEC = 95;

export default function Writing() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const x = useMotionValue(0);
  const speed = useSpring(1, { stiffness: 130, damping: 22 });

  useEffect(() => {
    fetch("/api/medium-posts")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const measure = () => { halfWidthRef.current = el.scrollWidth / 2; };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [posts]);

  useAnimationFrame((_, delta) => {
    if (halfWidthRef.current === 0) return;
    const moveBy = (delta / 1000) * speed.get() * BASE_PX_PER_SEC * -1;
    let newX = x.get() + moveBy;
    if (Math.abs(newX) >= halfWidthRef.current) {
      newX = newX + halfWidthRef.current;
    }
    x.set(newX);
  });

  const doubled = posts.length > 0 ? [...posts, ...posts] : [];

  return (
    <section id="writing" className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl mb-10 md:mb-14">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="text-[11px] tracking-[0.24em] text-blue-400/80 font-semibold uppercase mb-4 flex items-center gap-2">
          <span className="h-px w-8 bg-blue-400/40" />
          Writing
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.05 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
            Notes on design, mostly on{" "}
            <span className="italic text-blue-400" style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>Bootcamp.</span>
          </motion.h2>

          <a href="https://medium.com/@harshaasapu.b" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-blue-300 transition-colors whitespace-nowrap">
            All posts on Medium
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="relative" onMouseEnter={() => speed.set(0.22)} onMouseLeave={() => speed.set(1)}>
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        {loading && (
          <div className="flex gap-4 px-4 opacity-40">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-56 w-72 shrink-0 rounded-2xl border border-white/10 bg-zinc-900/40 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center text-sm text-zinc-500 py-10">
            Couldn&apos;t reach Medium right now. Try refreshing.
          </div>
        )}

        {!loading && posts.length > 0 && (
          <motion.div ref={trackRef} style={{ x }} className="flex gap-4 will-change-transform">
            {doubled.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="group shrink-0 w-72 md:w-80 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden hover:border-blue-400/40 hover:bg-zinc-900/80 transition-colors">
                <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden">
                  {p.thumbnail ? (
                    <img src={p.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-zinc-900">
                      <span className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>H.</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-blue-400/80 mb-2">
                    Bootcamp · {p.readTime}
                  </p>
                  <p className="text-sm md:text-base font-semibold text-white leading-tight line-clamp-3 group-hover:text-blue-300 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {p.title}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}