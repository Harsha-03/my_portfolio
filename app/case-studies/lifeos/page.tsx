import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LifeOS — Harsha Asapu",
  description:
    "A productivity system built on adaptation, not motivation. Four layers that turn reflection into the input — not the failure.",
};

export default function LifeOSCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 text-zinc-200">
      {/* Case-study actions */}
      <div className="fixed left-4 top-4 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/88 px-4 py-2.5 text-xs font-medium text-zinc-300 shadow-2xl shadow-black/35 backdrop-blur-xl transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft size={14} />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* HERO */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-10 md:pb-12">
        <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
          Case Study &middot; 2025
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          LifeOS
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
          A productivity system built on adaptation, not motivation. Four layers
          that turn reflection into the input &mdash; not the failure.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-white/10">
          {[
            { label: "Role", value: "Product Designer" },
            { label: "Type", value: "Self-initiated" },
            { label: "Year", value: "2025" },
            { label: "Tools", value: "Figma · Behavioral Design · UX Research" },
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

      {/* COVER IMAGE */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-20 md:mb-24">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/case-studies/lifeos/cover.png"
            alt="LifeOS case study cover"
            width={2800}
            height={2100}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 01 — THE PROBLEM */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 01
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The problem
        </h2>
        <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed">
          <p>
            Every productivity app I tried made the same implicit assumption:
            that if I just had the right system, I&apos;d follow through. Notion
            boards with 40 tasks. Apple Reminders with color codes. Google
            Calendar blocks that looked optimistic on Sunday and laughable by
            Wednesday.
          </p>
          <p>
            The app wasn&apos;t the problem. The frame was wrong. These tools
            track activity. They don&apos;t help you decide what matters,
            recover when plans break, or learn from the gap between what you
            planned and what actually happened.
          </p>
          <p>
            Research backed this up. Every user I interviewed had the same
            pattern: motivated Sunday planning, mid-week abandonment, and guilt
            that made them stop opening the app entirely.
          </p>
          <p className="text-zinc-400 italic">
            The problem isn&apos;t motivation. It&apos;s that existing tools
            have no recovery mechanism.
          </p>
        </div>

        {/* Non-goals */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase mb-5">
            What LifeOS is not
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Not a habit tracker",
              "Not a to-do list",
              "Not a calendar replacement",
              "Not a Notion replacement",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex-shrink-0 h-5 w-5 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 text-[10px]">
                  &times;
                </span>
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 02 — RESEARCH */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-20 md:mb-24">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 02
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Research &rarr; insight
          </h2>
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-8 md:mb-10">
            I interviewed early-career professionals and graduate students aged
            20&ndash;28. All of them used at least two productivity tools. None
            of them felt like their tools were helping them get the right things
            done.
          </p>
        </div>

        {/* Research patterns */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {[
            {
              num: "01",
              title: "Planning abandonment mid-week",
              body: "Users plan with motivation at the start of the week but disengage once plans break. The trigger is usually a missed day, not a missing feature.",
            },
            {
              num: "02",
              title: "Guilt-driven avoidance",
              body: "Missing planned tasks leads to guilt, which causes users to stop opening the tool entirely. The app becomes a record of failure.",
            },
            {
              num: "03",
              title: "Overplanning vs execution gap",
              body: "Users create more plans than they can realistically execute alongside work, study, and personal life. Long lists feel productive to write and demoralizing to face.",
            },
            {
              num: "04",
              title: "Lack of reflection",
              body: "Users rarely review past weeks, losing learning opportunities and repeating the same planning mistakes. There&apos;s no feedback loop.",
            },
          ].map((p) => (
            <div
              key={p.num}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[10px] tracking-widest text-zinc-600 font-semibold mb-3">
                PATTERN {p.num}
              </p>
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>

        {/* The insight */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
            The insight
          </p>
          <blockquote
            className="text-2xl md:text-4xl font-bold leading-[1.2] text-white border-l-2 border-emerald-500/50 pl-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Continued engagement comes from adaptation, not motivation.
          </blockquote>
          <p className="mt-8 text-lg text-zinc-400 leading-relaxed pl-8">
            Users don&apos;t need more features. They need a system that expects
            plans to break and treats that as normal data &mdash; not failure.
            The insight reframed the design challenge: stop optimizing for
            completion, start designing for recovery.
          </p>
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 03 — SYSTEM ARCHITECTURE */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-20 md:mb-24">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 03
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Four layers, one loop
          </h2>
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-8 md:mb-10">
            The system is built around a closed loop. Each layer feeds the next.
            Insights from past weeks reshape future planning &mdash; so the
            system adapts as you do.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-12 md:mb-14">
          <Image
            src="/case-studies/lifeos/system-architecture.png"
            alt="LifeOS four-layer system architecture diagram"
            width={2800}
            height={1600}
            className="w-full h-auto"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              num: "01",
              layer: "Decision Layer",
              title: "Weekly Review",
              body: "Reflect on last week. Set 1&ndash;3 priorities for the next. Adjust without guilt.",
            },
            {
              num: "02",
              layer: "Action Layer",
              title: "Daily Execution",
              body: "Today&apos;s actions, tied to weekly priorities. Defer freely. No punishment.",
            },
            {
              num: "03",
              layer: "Feedback Layer",
              title: "Reflection",
              body: "Lightweight check-ins capture friction, energy, and blockers as data &mdash; not failure.",
            },
            {
              num: "04",
              layer: "Learning Layer",
              title: "Insights",
              body: "Patterns surface over time. They reshape how you plan the next cycle.",
            },
          ].map((l) => (
            <div
              key={l.num}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-3xl font-bold text-zinc-800 mb-3">{l.num}</p>
              <p className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase mb-2">
                {l.layer}
              </p>
              <h3
                className="text-base font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {l.title}
              </h3>
              <p
                className="text-sm text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: l.body }}
              />
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 04 — THE SCREENS */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-20 md:mb-24">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 04
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The screens
          </h2>
        </div>

        <ScreenSection
          eyebrow="Daily Execution &mdash; Desktop"
          eyebrowColor="text-emerald-400"
          title="Today&apos;s focus, not today&apos;s list"
          description="The Daily Execution view shows weekly priorities at the top at all times. Every task must be linked to one of them &mdash; no orphan to-dos. Skipping a task marks it deferred, not failed. The system records the signal for the weekly review."
          image="/case-studies/lifeos/daily-execution-desktop.png"
          imageWidth={2800}
          imageHeight={1800}
        />

        <ScreenSection
          eyebrow="Daily Execution &mdash; Mobile"
          eyebrowColor="text-emerald-400"
          title="Same logic, smaller surface"
          description="The mobile view condenses the same priority-linked structure into a scannable format. Weekly focus stays pinned at the top. The date and day are large &mdash; grounding the user in the present moment rather than the full backlog."
          image="/case-studies/lifeos/daily-execution-mobile.png"
          imageWidth={750}
          imageHeight={1624}
          portraitMode
        />

        <ScreenSection
          eyebrow="Weekly Review"
          eyebrowColor="text-emerald-400"
          title="The recovery mechanism"
          description="Last week&apos;s priorities show neutral status: Completed, Partial, or Skipped &mdash; no streaks, no red warnings. Reflection prompts are intentionally open: what worked, what didn&apos;t, what got in the way. The Reality Check field reframes missed goals as context, not failure. Then: set next week&apos;s 1&ndash;3 priorities and commit."
          image="/case-studies/lifeos/weekly-review.png"
          imageWidth={2800}
          imageHeight={3600}
          featured
        />

        <ScreenSection
          eyebrow="Insights &mdash; Patterns"
          eyebrowColor="text-emerald-400"
          title="Behavioral patterns, not performance scores"
          description="Insights surface recurring friction points &mdash; midweek overload, low energy after late nights, health goals skipped first during busy weeks. These are qualitative pattern cards, not charts or completion percentages. Suggested Adjustments recommend without overriding. The user keeps full agency."
          image="/case-studies/lifeos/insights-patterns.png"
          imageWidth={2800}
          imageHeight={2200}
        />

        <ScreenSection
          eyebrow="Insights &mdash; Empty State"
          eyebrowColor="text-zinc-500"
          title="Honest before it&apos;s useful"
          description="The empty state doesn&apos;t fake intelligence. It tells you directly: patterns emerge after 3&ndash;4 weeks of weekly reviews. Until then, focus on the work &mdash; the data will follow. No placeholder cards, no artificial encouragement. Just honest design."
          image="/case-studies/lifeos/insights-empty.png"
          imageWidth={2800}
          imageHeight={1800}
        />
      </section>
      </RevealBlock>

      {/* CHAPTER 05 — DESIGN DECISIONS */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 05
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Design decisions worth naming
          <span className="block text-zinc-600">(and what I rejected)</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-12 md:mb-14">
          Every design decision has a rejected alternative. Here are the four
          that shaped the product.
        </p>

        <div className="space-y-12">
          {[
            {
              decision: "Weekly focus capped at 1&ndash;3 priorities",
              rejected: "Full task list or Eisenhower matrix",
              why: "Users experience decision fatigue and guilt with long lists. The hard cap isn&apos;t a limitation &mdash; it&apos;s the product. If everything matters, nothing does.",
              risk: "May oversimplify genuinely complex weeks.",
            },
            {
              decision: "Reflection-first recovery before next week&apos;s planning",
              rejected: "Streak-based tracking or automatic task rescheduling",
              why: "Research shows guilt and avoidance are the primary reasons users abandon tools. Reflection normalizes missed plans before asking users to set new ones. Streaks punish; reflection recovers.",
              risk: "Users may skip reflection if it feels time-consuming.",
            },
            {
              decision: "Capacity-based daily planning, not fixed task quotas",
              rejected: "Time-blocking only or fixed daily completion requirements",
              why: "Users described difficulty executing plans due to work shifts, classes, and mental fatigue &mdash; not lack of motivation. The system needed to bend around real life, not against it.",
              risk: "Capacity estimation may feel subjective to some users.",
            },
            {
              decision: "Insights require 3&ndash;4 weeks before surfacing",
              rejected: "Showing placeholder insights or AI-generated suggestions from day one",
              why: "Fake patterns on day one erode trust. An honest empty state that explains the delay is better than intelligence that isn&apos;t grounded in real data yet.",
              risk: "New users may feel the insights feature is broken before they reach the threshold.",
            },
          ].map((d, i) => (
            <div key={i} className="border-t border-white/8 pt-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-semibold text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                    dangerouslySetInnerHTML={{ __html: d.decision }}
                  />
                  <p className="text-sm text-zinc-500">
                    Rejected:{" "}
                    <span
                      className="line-through"
                      dangerouslySetInnerHTML={{ __html: d.rejected }}
                    />
                  </p>
                </div>
              </div>
              <p
                className="text-lg text-zinc-400 leading-relaxed mb-4 ml-12"
                dangerouslySetInnerHTML={{ __html: d.why }}
              />
              <p className="text-sm text-zinc-600 ml-12 italic">
                Risk: {d.risk}
              </p>
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 06 — WHAT I'D TEST NEXT */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 06
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What I&apos;d test next
        </h2>

        <div className="space-y-8">
          {[
            "Whether users find the weekly review helpful or burdensome. The current flow has five steps — testing whether users want to skip reflection when busy is critical before shipping.",
            "Capacity-based framing in daily planning. Does &ldquo;how much capacity do you have today?&rdquo; land as useful, or does it feel too abstract for daily use?",
            "The 3–4 week threshold for Insights. Does the honest empty state retain users through that window, or does it read as broken? A progress indicator might bridge the gap.",
            "Whether the 1–3 priority cap creates enough constraint without feeling limiting. Some weeks are genuinely complex — the system needs a release valve or a clear rationale for power users.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 text-emerald-400/60 text-2xl leading-none">
                &rarr;
              </span>
              <p
                className="text-lg text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CLOSING */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 pb-32 pt-16 border-t border-white/10">
        <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
          Next
        </p>
        <Link href="/#projects" className="group block">
          <p
            className="text-3xl md:text-4xl font-bold text-zinc-300 group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &larr; Back to all projects
          </p>
        </Link>
      </section>
      </RevealBlock>
    </main>
  );
}

/* ──────────────────────────────────────────────
   Reusable screen section
   ──────────────────────────────────────────────*/
function ScreenSection({
  eyebrow,
  eyebrowColor,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  featured = false,
  portraitMode = false,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  featured?: boolean;
  portraitMode?: boolean;
}) {
  return (
    <div className="mb-16 md:mb-20">
      <div className={portraitMode ? "grid md:grid-cols-2 gap-12 items-center" : "grid md:grid-cols-2 gap-12 items-center"}>
        <div>
          <p
            className={"text-[10px] tracking-[0.2em] font-semibold uppercase mb-4 " + eyebrowColor}
            dangerouslySetInnerHTML={{ __html: eyebrow }}
          />
          <h3
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="text-lg text-zinc-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {featured && (
            <p className="mt-6 text-sm text-emerald-400/80 italic">
              The core recovery mechanism. This screen is why the system works.
            </p>
          )}
        </div>

        <div
          className={
            "rounded-2xl overflow-hidden " +
            (featured
              ? "ring-2 ring-emerald-500/20 shadow-2xl shadow-emerald-500/10"
              : "border border-white/10")
          }
        >
          <Image
            src={image}
            alt={title.replace(/&apos;/g, "'")}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
