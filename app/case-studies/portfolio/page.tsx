import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio v3 — Harsha Asapu",
  description:
    "v3 was not a redesign. It was a response to specific hiring signal feedback. How restraint, motion hierarchy, and mobile-first structure reshaped the site.",
};

const CHAPTERS = [
  { num: "01", label: "The pattern break" },
  { num: "02", label: "Restraint" },
  { num: "03", label: "Motion" },
  { num: "04", label: "Mobile first" },
  { num: "05", label: "The site as a tool" },
  { num: "06", label: "What people said" },
  { num: "07", label: "What shifted" },
];

export default function PortfolioCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 text-zinc-200">
      {/* Fixed back button */}
      <div className="fixed left-4 top-4 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/88 px-4 py-2.5 text-xs font-medium text-zinc-300 shadow-2xl shadow-black/35 backdrop-blur-xl transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft size={14} />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* Fixed chapter chip (top-right) — desktop only, so mobile nav owns bottom-right */}
      <div className="fixed right-4 top-4 z-50 hidden md:block">
        <div className="rounded-full border border-white/10 bg-zinc-950/88 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80 shadow-2xl shadow-black/35 backdrop-blur-xl">
          Portfolio · v3
        </div>
      </div>

      {/* HERO */}
      <RevealBlock>
        <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-10 md:pb-12">
          <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
            Case Study · v3
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The rebuild
            <br />
            that answered{" "}
            <span
              className="italic text-emerald-400"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              specific
            </span>{" "}
            feedback.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
            v2 shipped and worked. Then two signals came in. Hiring managers
            filter on quantified real impact and systems thinking. Portfolio
            reviewers said the site read like every other designer&apos;s. v3
            was a response, not a refresh.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-white/10">
            {[
              { label: "Role", value: "Designer + Engineer" },
              {
                label: "Stack",
                value: "Next.js · TypeScript · Framer Motion · OpenAI",
              },
              { label: "Timeline", value: "Nov 2025 – Present" },
              { label: "Status", value: "v3 — Live" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] tracking-widest text-zinc-600 font-semibold uppercase mb-1">
                  {m.label}
                </p>
                <p className="text-sm text-zinc-200">{m.value}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER MAP — reader orientation, replaces the phase grid */}
      <RevealBlock>
        <section className="max-w-5xl mx-auto px-6 mb-16 md:mb-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <p className="text-[10px] tracking-widest text-emerald-400/80 font-semibold uppercase mb-4">
              What&apos;s in this case study
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
              {CHAPTERS.map((c) => (
                <a
                  key={c.num}
                  href={`#chapter-${c.num}`}
                  className="group flex items-baseline gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <span className="text-[10px] font-mono text-emerald-400/60 group-hover:text-emerald-300">
                    {c.num}
                  </span>
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-zinc-500 italic leading-relaxed">
            v3 is not the third redesign. It is the first version built around
            external hiring signal instead of internal taste.
          </p>
        </section>
      </RevealBlock>

      {/* CHAPTER 01 — THE PATTERN BREAK */}
      <RevealBlock>
        <section
          id="chapter-01"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 01
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The pattern break
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              v2 already had the dark canvas. Already had the RAG chatbot.
              Already had motion. It shipped. It read fine.
            </p>
            <p>
              Then real feedback arrived. Chris Vitas, formerly Amazon, wrote
              back with a diagnosis. Hiring managers filter on two things.
              Quantified real world impact. Systems thinking that scales.
              Speculative case studies pattern match to didn&apos;t ship, risky
              hire.
            </p>
            <p>
              A separate round of portfolio reviews said the site felt
              indistinguishable from every other designer&apos;s dark themed
              portfolio. External pattern match risk. Internal
              indistinguishability. Two problems, one diagnosis. The site was
              decorated, not designed.
            </p>
            <p className="text-zinc-400 italic">
              v3 was a response to a specific hiring signal problem. Not a
              taste refresh.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 02 — RESTRAINT */}
      <RevealBlock>
        <section
          id="chapter-02"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 02
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Restraint as the senior signal
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed mb-10">
            <p>
              The bar was never make it prettier. The bar was read as someone
              already thinking at the level of the role.
            </p>
            <p>
              That meant restraint over decoration. Hierarchy over surface.
              Every motion earning its place. Every visual element defensible
              under a senior review.
            </p>
            <p>
              Concretely. Compact typography scale, one step down at every
              breakpoint. Section spacing tightened by twenty five percent.
              One visual anchor per section instead of five. Copy compressed to
              the shortest form that still carried the idea. Cover images
              shrunk from full width to hero width. Nothing full bleed unless
              the content demanded it.
            </p>
            <p className="text-zinc-400 italic">
              The site got smaller. It communicated more.
            </p>
          </div>

          {/* Metric callouts */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { value: "25%", label: "Tighter section rhythm" },
              { value: "1 step", label: "Down on every H1 breakpoint" },
              { value: "0", label: "New features added" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.02] p-4 md:p-5"
              >
                <p className="text-lg md:text-2xl font-bold text-emerald-300 leading-none">
                  {m.value}
                </p>
                <p className="mt-2 text-[10px] md:text-xs text-zinc-500 leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 03 — MOTION */}
      <RevealBlock>
        <section
          id="chapter-03"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 03
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Motion as hierarchy signal
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed mb-10">
            <p>
              Eight seconds. That is what a recruiter gives before deciding
              whether to keep reading.
            </p>
            <p>
              v2 treated every section equally in motion. Every card pulsed.
              Every arrow nudged. Every accent shimmered. Ambient decoration
              everywhere, meaning nowhere.
            </p>
            <p>v3 gates motion by role.</p>
            <p>
              Shipped cards pulse. Live status signal, real work. Concept cards
              sit still. Arrows nudge once on scroll entry, then quiet. Never
              on loop. Never competing.
            </p>
            <p>
              The resume icon in the mobile nav is the only elevated element
              in the whole navigation. Rose accent, one pulse on page load,
              then rest. One next action, not five competing ones.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <p className="text-[10px] tracking-widest text-emerald-400/80 font-semibold uppercase mb-3">
              The single question every motion decision now answers
            </p>
            <p
              className="text-base md:text-lg text-zinc-200 leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What does this communicate that the still frame cannot?
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 04 — MOBILE FIRST */}
      <RevealBlock>
        <section
          id="chapter-04"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 04
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mobile first, inverted
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed mb-10">
            <p>
              Most designers design on desktop and squish to mobile. That is a
              tell.
            </p>
            <p>
              v3 inverted the flow. Every compact rule was written for mobile
              first. Desktop inherited what mobile could carry.
            </p>
          </div>

          {/* What changed on mobile — grid */}
          <div className="space-y-3">
            {[
              {
                area: "Case study cards",
                change:
                  "Tall vertical tiles rebuilt as short wide horizontal ones. Two to three fit on a phone screen. Thumb reach respected.",
              },
              {
                area: "MobileNav",
                change:
                  "Resume icon moved to guided left position. RAG chatbot moved right. Active state glow matched the desktop nav exactly so both read as one product.",
              },
              {
                area: "Hero centering",
                change:
                  "Rewritten to respect the fixed mobile nav overlay. Section min height minus nav footprint. No dead scroll space below the socials.",
              },
              {
                area: "Cover images",
                change:
                  "Shrunk to match hero text width. What felt full bleed and heavy on desktop now reads as intentional.",
              },
            ].map((row) => (
              <div
                key={row.area}
                className="grid grid-cols-[110px_1fr] gap-4 border-t border-white/8 pt-4 md:grid-cols-[160px_1fr]"
              >
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {row.area}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {row.change}
                </p>
              </div>
            ))}
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 05 — THE SITE AS A TOOL */}
      <RevealBlock>
        <section
          id="chapter-05"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 05
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The site as a tool
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              The RAG chatbot is the strongest single feature. It absorbs what
              the About section cannot. Follow up questions.
            </p>
            <p>
              v2&apos;s About chips opened the chatbot. But the input stayed
              empty. The recruiter had to retype the question. Curiosity died
              in the gap.
            </p>
            <p>
              v3 wires the chips to pre fill the input. One tap goes from
              About to a loaded question. The recruiter edits or hits enter.
            </p>
            <p>
              The chat bubble itself drags anywhere on the screen. Not corner
              only. iOS AssistiveTouch behavior. Snap to the nearest edge, keep
              the other axis wherever you dropped it. Position persists across
              reloads.
            </p>
            <p className="text-zinc-400 italic">
              Because a recruiter reading a long form case study should not
              have to reach for a button stuck in the wrong corner.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 06 — WHAT PEOPLE SAID */}
      <RevealBlock>
        <section
          id="chapter-06"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 06
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What people said
          </h2>
          <p className="mb-10 text-base md:text-lg text-zinc-300 leading-relaxed">
            v3 was not self directed. Every structural decision traces back to
            specific feedback from people whose opinion moves hiring outcomes.
          </p>

          {/* Quote block 1 */}
          <figure className="mb-8 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-6 md:p-8">
            <Quote
              size={20}
              className="mb-4 text-emerald-400/50"
              aria-hidden
            />
            <blockquote
              className="text-lg md:text-xl leading-relaxed text-zinc-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              A flashy case study for a brand like Starbucks isn&apos;t going
              to be as interesting to an Amazon hiring manager as real work
              for a smaller client that had a meaningful impact on their
              business.
            </blockquote>
            <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
              Chris Vitas, Principal UX Designer, formerly Amazon
            </figcaption>
          </figure>

          {/* Quote block 2 — Vasudha */}
          <figure className="mb-10 rounded-2xl border border-blue-500/15 bg-blue-500/[0.03] p-6 md:p-8">
            <Quote
              size={20}
              className="mb-4 text-blue-400/50"
              aria-hidden
            />
            <blockquote
              className="text-lg md:text-xl leading-relaxed text-zinc-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Designers do everything end to end here, so showing all the
              things would be beneficial.
            </blockquote>
            <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/80">
              Vasudha Singh, UX Designer at AWS Solutions
            </figcaption>
          </figure>

          <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
            Every case study was reordered around this feedback. Real shipped
            work leads. BuiltinTech, NRI Wellbeing, Resume Tailor, and this
            portfolio itself sit in positions one through four. Speculative
            work is present but ranked below.
          </p>
        </section>
      </RevealBlock>

      {/* CHAPTER 07 — WHAT SHIFTED */}
      <RevealBlock>
        <section
          id="chapter-07"
          className="max-w-3xl mx-auto px-6 mb-20 md:mb-24 scroll-mt-32"
        >
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 07
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What shifted
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              v3 shipped in November 2025. Too early to claim causal outcomes
              on interview volume or offer velocity.
            </p>
            <p>What is measurable now.</p>
          </div>

          <ul className="mt-6 space-y-3">
            {[
              "Three new real client case studies added to shipped work.",
              "Every section on mobile fits its content without dead scroll space.",
              "Every design decision from v2 to v3 is documented and defensible under senior review.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base md:text-lg text-zinc-300 leading-relaxed"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base md:text-lg text-zinc-400 leading-relaxed italic">
            The rest of the signal — interviews, referrals, offers — is what
            v3 is now watching for.
          </p>
        </section>
      </RevealBlock>

      {/* CLOSING */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 pb-32 pt-16 border-t border-white/10">
          <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
            Live
          </p>
          <a
            href="https://harshaasapu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p
              className="text-3xl md:text-4xl font-bold text-zinc-300 group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              harshaasapu.com &rarr;
            </p>
          </a>
        </section>
      </RevealBlock>
    </main>
  );
}
