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
    <section id="about" className="relative py-6 md:py-24" style={{ position: "relative" }}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <SectionLabel>About</SectionLabel>

          <h2
            className="max-w-3xl text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
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

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-12 md:gap-10">
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
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              <ScrollSentence text="I'm a UX Designer based in Reno, Nevada. I finished my MS in Information Systems at Saint Louis University in December 2025, and I'm currently on OPT looking for my next role." />
            </p>

            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
              <ScrollSentence text="My path went from building client products at a startup I co-founded in India, through graduate systems work at SLU, to UX design at a nonprofit. Across all of it, the pattern was the same: find where the experience actually breaks, define the problem clearly, design a solution, ship it, keep going." />
            </p>

            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
              <ScrollSentence text="Right now I'm the UI/UX Designer at Community Dreams Foundation. Alongside that, I ship self-initiated product work: Starbucks Mobile Order, LifeOS, and Resume Tailor." />
            </p>

            <motion.blockquote
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-90px", amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.18, ease: smoothEase }}
              className="mt-8 border-l-2 border-blue-400/40 pl-5"
            >
              <p className="text-base italic leading-relaxed text-zinc-300 md:text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                Design doesn&apos;t ship perfect. It ships, gets used, reveals what&apos;s wrong, and improves.
              </p>
            </motion.blockquote>
          </div>
        </div>

        <RevealBlock delay={0.1} className="mt-12 md:mt-16">
          <motion.div
            whileHover={{ scale: 1.003 }}
            transition={{ type: "spring", stiffness: 180, damping: 28, mass: 1 }}
            className="relative overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/8 via-zinc-900/40 to-zinc-900/40 p-5 backdrop-blur-sm md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_48%,rgba(52,211,153,0.08),transparent_30%)]" />
            <div className="relative z-10">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400/80">Ask my portfolio</p>
              <h3 className="text-xl font-bold leading-tight md:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                Or just <span className="italic text-emerald-400" style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>ask.</span>
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                This site is trained on every project, every role, and every design decision I could remember. Ask it anything.
              </p>

              {/* Chip buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "What's your design process?",
                  "Tell me about BuiltinTech",
                  "Why the four-state Starbucks model?",
                  "What tools do you use?",
                  "What roles are you targeting?",
                ].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      const ev = new CustomEvent("open-chat-widget", {
                        detail: { prompt: q },
                      });
                      window.dispatchEvent(ev);
                    }}
                    className="group/chip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-zinc-400 transition-colors hover:border-emerald-400/40 hover:bg-emerald-500/5 hover:text-emerald-300 md:px-3.5 md:text-xs"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/60 transition-transform group-hover/chip:scale-125" />
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </RevealBlock>
      </div>
    </section>
  );
}
