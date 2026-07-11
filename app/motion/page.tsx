"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealBlock, smoothEase } from "../components/MotionPattern";
import { ArrowLeft, Play } from "lucide-react";
import { motionPieces, type MotionPiece } from "@/data/motion";

function visibleTags(tags?: string[]) {
  if (!tags) return [];
  return tags.filter((tag) => tag.toLowerCase() !== "after effects");
}

function StatusPill({ status }: { status: MotionPiece["status"] }) {
  if (status === "Shipped") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-300 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
        Shipped
      </span>
    );
  }

  const isProgress = status === "In Progress";

  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur-md " +
        (isProgress
          ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
          : "border-white/10 bg-white/10 text-zinc-300")
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full " +
          (isProgress ? "animate-pulse bg-amber-300" : "bg-zinc-300")
        }
      />
      {isProgress ? "Currently Building" : "Concept"}
    </span>
  );
}

function MotionPieceCard({
  piece,
  index,
}: {
  piece: MotionPiece;
  index: number;
}) {
  return (
    <motion.article
      id={piece.slug}
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      transition={{
        duration: 0.52,
        delay: index * 0.025,
        ease: smoothEase,
      }}
      className="scroll-mt-32"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-end">
        <motion.div
          whileHover={{ y: -4, scale: 1.006 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          className="group relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/30"
        >
          <video
            src={piece.video}
            poster={piece.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/18 to-transparent" />

          <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-zinc-300 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")} / {String(motionPieces.length).padStart(2, "0")}
            </span>
            <StatusPill status={piece.status} />
          </div>

          <div className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white text-zinc-950 opacity-0 shadow-xl shadow-black/20 transition-opacity duration-300 group-hover:opacity-100">
            <Play size={15} fill="currentColor" />
          </div>
        </motion.div>

        <div className="lg:pb-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300/85">
            {piece.client} · {piece.year}
          </p>

          <h2
            className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {piece.title}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            {piece.shortDescription}
          </p>

          {visibleTags(piece.tags).length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {visibleTags(piece.tags).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function MotionGalleryPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-200">
      {/* Page controls: same idea as case-study pages, but centered to the current global navbar */}
      <RevealBlock className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pb-6 pt-24 sm:px-6 lg:px-8">
        <Link
          href="/#motion"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2 text-sm text-zinc-400 shadow-xl shadow-black/20 backdrop-blur-md transition-colors hover:border-blue-400/30 hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="hidden rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 shadow-xl shadow-black/20 backdrop-blur-md sm:block">
          Motion / Gallery
        </div>
      </RevealBlock>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-blue-400/85">
            Motion Design
          </p>

          <h1
            className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Motion that earns its place.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-400">
            Short-form motion pieces — type, brand, and concept work where timing
            carries the idea. Each piece is a study in what moves, what stays
            still, and why.
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-6 lg:px-8">
        <div className="space-y-16 md:space-y-20">
          {motionPieces.map((piece, index) => (
            <MotionPieceCard
              key={piece.slug}
              piece={piece}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "0px", amount: 0.06 }}
          transition={{ duration: 0.52, ease: smoothEase }}
          className="border-t border-white/10 pt-8 md:pt-10 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            More in motion
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-400">
            New pieces are added as concepts finish. If you&apos;re curious about
            the process, the contact section is right below.
          </p>

          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-blue-400/30 hover:text-white"
          >
            Get in touch →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
