"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { motionPieces, type MotionPiece } from "@/data/motion";
import { RevealBlock, SectionLabel, smoothEase } from "./MotionPattern";

function MotionTile({
  piece,
  index,
  total,
  large = false,
  active,
  onHover,
}: {
  piece: MotionPiece;
  index: number;
  total: number;
  large?: boolean;
  active: boolean;
  onHover: (slug: string | null) => void;
}) {
  return (
    <Link
      href={`/motion#${piece.slug}`}
      onMouseEnter={() => onHover(piece.slug)}
      onMouseLeave={() => onHover(null)}
      className={
        "group relative block w-full transform-gpu overflow-hidden rounded-[1.65rem] border bg-zinc-950 shadow-2xl shadow-black/35 transition-[border-color,transform] duration-300 hover:-translate-y-1 " +
        (active ? "border-blue-400/40" : "border-white/10 hover:border-white/25") +
        (large ? " h-[460px] xl:h-[520px]" : " h-[235px]")
      }
    >
      <motion.video
        src={piece.video}
        poster={piece.poster}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/44 to-zinc-950/5" />

      <div className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-zinc-950/90 px-4 py-2 text-sm font-bold tracking-[0.12em] text-zinc-200 shadow-xl shadow-black/25">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      <motion.div
        initial={false}
        animate={{ y: active ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 26, mass: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300/80">
          {piece.client} {piece.year ? `· ${piece.year}` : ""}
        </p>

        <h3
          className={
            (large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl") +
            " mt-2 font-extrabold leading-tight text-white"
          }
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {piece.title}
        </h3>

        <p
          className={
            (large ? "max-w-2xl" : "max-w-sm") +
            " mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400"
          }
        >
          {piece.shortDescription}
        </p>

        {large && (
          <div className="mt-4 flex flex-wrap gap-2 opacity-85 transition-opacity duration-300 group-hover:opacity-100">
            {piece.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      <motion.span
        initial={false}
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.94 }}
        transition={{ duration: 0.2 }}
        className="absolute right-5 top-16 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white text-zinc-950 shadow-xl shadow-black/20"
      >
        <Play size={14} fill="currentColor" />
      </motion.span>
    </Link>
  );
}

export default function MotionPreview() {
  const [hovered, setHovered] = useState<string | null>(null);
  const pieces = motionPieces.slice(0, 3);

  const lead = pieces[0];
  const second = pieces[1];
  const third = pieces[2];

  return (
    <section
      id="motion"
      className="relative overflow-hidden py-20 md:py-32"
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <RevealBlock className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Motion</SectionLabel>
              <h2
                className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Motion Design
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
                Short-form motion pieces — type, brand, and concept work where timing earns its place.
              </p>
            </div>

            <Link
              href="/motion"
              className="group inline-flex items-center gap-2 text-base font-medium text-zinc-300 transition-colors hover:text-blue-300"
            >
              Explore all motion work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </RevealBlock>

        <div className="relative mt-14 flex flex-col gap-7 xl:flex-row xl:items-start xl:gap-8">
          {lead && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.58, ease: smoothEase }}
              className="min-w-0 flex-1 xl:max-w-[820px]"
            >
              <MotionTile
                piece={lead}
                index={0}
                total={pieces.length}
                large
                active={hovered === lead.slug}
                onHover={setHovered}
              />
            </motion.div>
          )}

          <div className="grid min-w-0 shrink-0 gap-7 xl:w-[420px]">
            {second && (
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.58, delay: 0.06, ease: smoothEase }}
              >
                <MotionTile
                  piece={second}
                  index={1}
                  total={pieces.length}
                  active={hovered === second.slug}
                  onHover={setHovered}
                />
              </motion.div>
            )}

            {third && (
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.58, delay: 0.12, ease: smoothEase }}
              >
                <MotionTile
                  piece={third}
                  index={2}
                  total={pieces.length}
                  active={hovered === third.slug}
                  onHover={setHovered}
                />
              </motion.div>
            )}
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_46%_42%,rgba(59,130,246,0.07),transparent_38%)]" />
        </div>
      </div>
    </section>
  );
}
