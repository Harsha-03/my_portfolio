"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { motionPieces, type MotionPiece } from "@/data/motion";

function LoopVideo({
  piece,
  index,
  total,
  large = false,
}: {
  piece: MotionPiece;
  index: number;
  total: number;
  large?: boolean;
}) {
  const numberLabel = "0" + (index + 1) + " / 0" + total;

  return (
    <Link href={"/motion#" + piece.slug} className="relative block group">
      <div
        className={
          "relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 hover:border-white/25 transition-colors duration-300 " +
          (large ? "aspect-[16/10]" : "aspect-video")
        }
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <video
            src={piece.video}
            poster={piece.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover scale-105"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 border border-white/10">
          <span className="text-[10px] tracking-widest text-zinc-300 tabular-nums font-semibold">
            {numberLabel}
          </span>
        </div>

        {piece.status !== "Shipped" && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium backdrop-blur-md " +
                (piece.status === "In Progress"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-sky-500/20 text-sky-300 border border-sky-500/30")
              }
            >
              <span
                className={
                  "h-1.5 w-1.5 rounded-full " +
                  (piece.status === "In Progress"
                    ? "bg-amber-400 animate-pulse"
                    : "bg-sky-400")
                }
              />
              {piece.status === "In Progress" ? "Currently Building" : "Concept"}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">
            {piece.client}
          </p>

          <h3
            className={
              "mt-1 font-semibold leading-tight text-zinc-200 group-hover:text-white transition-colors duration-300 " +
              (large ? "text-2xl md:text-3xl" : "text-lg")
            }
          >
            {piece.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default function MotionPreview() {
  const nike = motionPieces.find((p) => p.slug === "nike-displayed");
  const others = motionPieces
    .filter((p) => p.slug !== "nike-displayed")
    .slice(0, 2);

  const total = motionPieces.length;

  return (
    <section id="motion" className="section relative">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs tracking-widest text-brand/80 font-semibold">
              MOTION
            </p>

            <h2
              className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Motion Design
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Short-form motion pieces &mdash; type, brand, and concept work
              where timing earns its place.
            </p>
          </div>

          <Link
            href="/motion"
            className="group flex items-center gap-2 text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors"
          >
            <span>Explore all motion work</span>

            <motion.span
              className="inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <ArrowUpRight size={15} />
            </motion.span>
          </Link>
        </motion.div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {nike && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 relative"
            >
              <LoopVideo piece={nike} index={0} total={total} large />
            </motion.div>
          )}

          <div className="flex flex-col gap-5">
            {others.map((piece, i) => (
              <motion.div
                key={piece.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="flex-1 relative"
              >
                <LoopVideo piece={piece} index={i + 1} total={total} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}