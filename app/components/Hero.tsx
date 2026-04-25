"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

/* ── Cycling descriptors ── */
const CYCLING_TAGS = [
  "Interaction Design",
  "Product Thinking",
  "UX Research",
  "Design Systems",
  "Frontend Engineering",
  "AI Integration",
];

const FADE = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

/* ── Stagger container ── */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ════════════════════════════════
   COMPONENT
════════════════════════════════ */
export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  /* cycle tags every 2.2s */
  useEffect(() => {
    const t = setInterval(
      () => setTagIndex((i) => (i + 1) % CYCLING_TAGS.length),
      2200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="section relative">
      <div className="container relative">

        {/* Open to work badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="absolute top-0 right-0"
        >
          <span className="relative flex items-center gap-2 rounded-full
                           bg-green-500/10 px-3 py-1 text-xs text-green-400">
            <motion.span
              className="h-2 w-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Open to work
          </span>
        </motion.div>

        {/* Hero content — staggered */}
        <motion.div
          className="pt-24 max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Name + headline */}
          <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
            <span className="block">
              Hello, I'm{" "}
              <span className="text-brand">Harsha Asapu</span>.
            </span>

            <span className="block mt-1">
              I design clear, usable,
            </span>

            <span className="block text-zinc-400">
              production-ready digital experiences.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-sm md:text-base lg:text-lg text-zinc-400"
          >
            UI/UX designer with a frontend foundation — focused on clarity,
            usability, and interaction systems that translate directly into
            shipped, production-ready products.
          </motion.p>

          {/* Static tags + cycling tag */}
          <motion.div
            variants={item}
            className="mt-4 flex flex-wrap items-center gap-2 text-sm"
          >
            {["UI Design", "UX Design", "Frontend Development"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1
                           ring-1 ring-white/30 text-white/90"
              >
                {tag}
              </span>
            ))}

            {/* Animated cycling tag */}
            <span className="relative rounded-full bg-blue-500/15 px-3 py-1
                             ring-1 ring-blue-400/40 text-blue-300
                             min-w-[160px] h-[30px]
                             flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={tagIndex}
                  variants={FADE}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="absolute whitespace-nowrap text-xs font-medium"
                >
                  + {CYCLING_TAGS[tagIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-xl
                         bg-red-500 px-5 py-3 text-sm font-semibold
                         text-white hover:bg-red-600 transition-colors"
            >
              Explore Projects
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.a>

            <motion.a
              href="https://github.com/Harsha-03"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 flex items-center justify-center
                         rounded-xl bg-zinc-900 ring-1 ring-white/10 transition-colors"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/baba-sriharsha-asapu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="h-11 w-11 flex items-center justify-center
                         rounded-xl bg-[#0A66C2] hover:bg-[#004182] transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-col items-center gap-2 text-zinc-500"
          >
            <span className="text-xs tracking-wide">Scroll</span>
            <div className="flex h-10 w-6 items-start justify-center
                            rounded-full border border-white/20">
              <motion.span
                className="mt-2 h-2 w-2 rounded-full bg-white/60"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}