"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { motionPieces, type MotionPiece } from "@/data/motion";

function visibleTags(tags?: string[]) {
  if (!tags) return [];
  return tags.filter((t) => t.toLowerCase() !== "after effects");
}

function StatusPill({ status }: { status: MotionPiece["status"] }) {
  if (status === "Shipped") return null;
  const isProgress = status === "In Progress";
  const label = isProgress ? "Currently Building" : "Concept";
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium backdrop-blur-md " +
        (isProgress
          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
          : "bg-sky-500/20 text-sky-300 border border-sky-500/30")
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full " +
          (isProgress ? "bg-amber-400 animate-pulse" : "bg-sky-400")
        }
      />
      {label}
    </span>
  );
}

function PieceBlock({ piece, index }: { piece: MotionPiece; index: number }) {
  return (
    <motion.article
      id={piece.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="group scroll-mt-24"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 aspect-[16/9]">
        <video
          src={piece.video}
          poster={piece.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {piece.status !== "Shipped" && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
        )}

        {piece.status !== "Shipped" && (
          <div className="absolute top-4 left-4">
            <StatusPill status={piece.status} />
          </div>
        )}
      </div>

      <div className="mt-6 max-w-3xl">
        <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-medium">
          {piece.client} &middot; {piece.year}
        </p>
        <h3
          className="mt-2 font-bold text-white leading-tight text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {piece.title}
        </h3>
        <p className="mt-3 text-zinc-400 leading-relaxed text-base md:text-lg">
          {piece.shortDescription}
        </p>

        {visibleTags(piece.tags).length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {visibleTags(piece.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400 border border-white/8"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function MotionGalleryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200 md:pl-[300px]">
      <div className="sticky top-0 z-30 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#motion"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase font-medium">
            Motion / Gallery
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs tracking-[0.2em] text-brand/80 font-semibold uppercase mb-6">
          Motion Design
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Motion that
          <br />
          earns its place.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          Short-form motion pieces &mdash; type, brand, and concept work where
          timing carries the idea. Each piece is a study in what moves, what
          stays still, and why.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="space-y-32">
          {motionPieces.map((piece, i) => (
            <PieceBlock key={piece.slug} piece={piece} index={i} />
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32 pt-16 border-t border-white/10">
        <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
          More in motion
        </p>
        <p className="text-lg text-zinc-400 leading-relaxed mb-8">
          New pieces are added as concepts finish. If you&apos;re curious about
          process or commissioning work, the contact section is below.
        </p>
        <Link href="/#contactfancy" className="group inline-block">
          <p
            className="text-3xl md:text-4xl font-bold text-zinc-300 group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in touch &rarr;
          </p>
        </Link>
      </section>
    </main>
  );
}
