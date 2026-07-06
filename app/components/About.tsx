"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { RevealBlock, ScrollSentence, SectionLabel, smoothEase } from "./MotionPattern";

const EMAIL = "sriharshaasapu48@gmail.com";

function RagArrow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-5 right-8 hidden h-24 w-44 md:block"
    >
      <motion.svg
        viewBox="0 0 180 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.path
          d="M18 76 C48 92, 88 74, 111 45 C124 28, 139 20, 157 18"
          fill="none"
          stroke="rgba(52, 211, 153, 0.85)"
          strokeWidth="2.2"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.15, ease: smoothEase, delay: 0.18 },
            },
          }}
        />
        <motion.path
          d="M145 11 L160 18 L148 29"
          fill="none"
          stroke="rgba(52, 211, 153, 0.85)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 0.55, ease: smoothEase, delay: 1.05 },
            },
          }}
        />
      </motion.svg>

      <motion.span
        initial={{ opacity: 0, y: 8, rotate: -4, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, rotate: -4, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: smoothEase, delay: 0.65 }}
        className="font-caveat absolute bottom-0 left-1 text-3xl text-emerald-300"
      >
        RAG
      </motion.span>

      <motion.span
        initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: smoothEase, delay: 0.78 }}
        className="absolute bottom-1 left-16 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/75"
      >
        trained here
      </motion.span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32" style={{ position: "relative" }}>
      <div className="mx-auto w-full max-w-6xl">
        <RevealBlock>
          <SectionLabel>About</SectionLabel>

          <h2
            className="max-w-4xl text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <ScrollSentence text="I don't just design screens. I design" />{" "}
            <motion.span
              initial={{ opacity: 0, y: 14, filter: "blur(9px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-90px", amount: 0.25 }}
              transition={{ duration: 0.78, delay: 0.2, ease: smoothEase }}
              className="inline-block italic text-emerald-400"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              decisions.
            </motion.span>
          </h2>
        </RevealBlock>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-12">
          <RevealBlock delay={0.08} className="md:col-span-5">
            <motion.div
              whileHover={{ scale: 1.012 }}
              transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.9 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10"
            >
              <img src="/images/harsha-stlouis.jpg" alt="Harsha in St. Louis" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
            </motion.div>

            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, delay: 0.35, ease: smoothEase }}
              whileHover={{ x: 5 }}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-mono font-semibold tracking-[0.14em] text-rose-400 transition-colors hover:text-rose-300"
            >
              <span className="text-rose-400/60">{"//"}</span>
              HIRE ME
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <p className="mt-2 text-[11px] font-mono text-zinc-500">↑ that guy right there</p>
          </RevealBlock>

          <div className="space-y-6 md:col-span-7">
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              <ScrollSentence text="I'm a UX Designer based in Reno, Nevada. I finished my MS in Information Systems at Saint Louis University in December 2025, and I'm currently on OPT looking for my next role." />
            </p>

            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              <ScrollSentence text="My path went from building client products at a startup I co-founded in India, through graduate systems work at SLU, to UX design at a nonprofit. Across all of it, the pattern was the same: find where the experience actually breaks, define the problem clearly, design a solution, ship it, keep going." />
            </p>

            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              <ScrollSentence text="Right now I'm the UI/UX Designer at Community Dreams Foundation. Alongside that, I ship self-initiated product work: Starbucks Mobile Order, LifeOS, and Resume Tailor." />
            </p>

            <motion.blockquote
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-90px", amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.18, ease: smoothEase }}
              className="mt-8 border-l-2 border-blue-400/40 pl-5"
            >
              <p className="text-lg italic leading-relaxed text-zinc-300 md:text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                Design doesn&apos;t ship perfect. It ships, gets used, reveals what&apos;s wrong, and improves.
              </p>
            </motion.blockquote>
          </div>
        </div>

        <RevealBlock delay={0.1} className="mt-16 md:mt-24">
          <motion.div
            whileHover={{ scale: 1.003 }}
            transition={{ type: "spring", stiffness: 180, damping: 28, mass: 1 }}
            className="relative overflow-hidden rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/8 via-zinc-900/40 to-zinc-900/40 p-6 backdrop-blur-sm md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_48%,rgba(52,211,153,0.08),transparent_30%)]" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="flex-1">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400/80">Ask my portfolio</p>
                <h3 className="text-2xl font-bold leading-tight md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Or just <span className="italic text-emerald-400" style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>ask.</span>
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                  This site is trained on every project, every role, and every design decision I could remember. Ask it anything.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.012, borderColor: "rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.85 }}
                onClick={() => {
                  const ev = new CustomEvent("open-chat-widget");
                  window.dispatchEvent(ev);
                }}
                className="group inline-flex w-full shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 px-5 py-4 backdrop-blur-md transition-colors hover:bg-blue-500/5 md:w-auto md:min-w-[360px]"
              >
                <span className="flex-1 text-left text-sm text-zinc-500 transition-colors group-hover:text-zinc-400">
                  Why the four-state model on Starbucks?
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/15 text-blue-300 transition-colors group-hover:bg-blue-500/25">
                  <Send size={14} />
                </span>
              </motion.button>
            </div>

            <RagArrow />
          </motion.div>
        </RevealBlock>
      </div>
    </section>
  );
}
