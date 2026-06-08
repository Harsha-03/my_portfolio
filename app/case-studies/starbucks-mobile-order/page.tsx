import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starbucks Mobile Order Redesign — Harsha Asapu",
  description:
    'A four-state model that replaces "Preparing" with real-time visibility tied to actual barista actions.',
};

export default function StarbucksCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200 md:pl-[300px]">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-30 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to projects</span>
          </Link>
          <a
            href="https://www.behance.net/gallery/250629345/Starbucks-Mobile-Order-Redesign"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <span>View on Behance</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
          Case Study · 2025
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Starbucks Mobile
          <br />
          Order Redesign
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          A four-state model that replaces &quot;Preparing&quot; with real-time
          visibility tied to actual barista actions. The black box, opened.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
          {[
            { label: "Role", value: "Product Designer" },
            { label: "Timeframe", value: "2 weeks" },
            { label: "Platform", value: "Mobile · iOS" },
            { label: "Tools", value: "Figma · FigJam · Smart Animate" },
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

      {/* COVER IMAGE */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/projects/starbucks-cover.png"
            alt="Starbucks Mobile Order Redesign cover"
            width={3840}
            height={2160}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* CHAPTER 01 — THE PROBLEM */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 01
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The problem
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            In October 2024, on his first earnings call as Starbucks CEO, Brian
            Niccol laid out three near-term initiatives for the mobile ordering
            system, including a new algorithm to enable accurate pickup times.
            He named mobile order pickup as a priority for the turnaround —
            citing inaccurate wait times and the congestion mobile orders
            create inside stores.
          </p>
          <p>
            Within weeks, Starbucks cut its U.S. mobile order item limit from
            15 to 12, with Niccol calling the barista-to-customer handoff
            &quot;the moment of truth.&quot;
          </p>
          <p>
            The user-facing version of that problem is a single ambiguous state
            in the Starbucks app:{" "}
            <strong className="text-white">Preparing</strong>. It hides
            everything — whether your drink is queued behind two others, being
            made right now, sitting cold on the counter, or about to be started.
            The status looks the same at minute one as it does at minute ten.
          </p>
          <p className="text-zinc-400 italic">
            That black box is what this redesign opens up.
          </p>
        </div>
      </section>

      {/* CHAPTER 02 — RESEARCH → INSIGHT */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 02
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Research → insight
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-12">
            I shadowed three Starbucks pickup experiences and walked through
            the existing flow with friction in mind: when do users open the
            app, what do they look for, what don&apos;t they find?
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
          <Image
            src="/case-studies/starbucks/figjam.png"
            alt="FigJam research board — current journey, pain points, and rejected ideas"
            width={2880}
            height={1620}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-zinc-500 italic max-w-3xl">
          Problem framing in FigJam — current user journey, pain points across
          the mobile order experience, and the four ideas considered (three
          rejected, one kept).
        </p>

        {/* The insight pull quote */}
        <div className="mt-20 max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
            The insight
          </p>
          <blockquote
            className="text-2xl md:text-4xl font-bold leading-[1.2] text-white border-l-2 border-emerald-500/50 pl-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Users don&apos;t want a faster app. They want accurate truth about
            a specific moment — when the barista actually starts their drink.
          </blockquote>
          <p className="mt-8 text-lg text-zinc-400 leading-relaxed pl-8">
            That moment doesn&apos;t exist in the current product. So the
            redesign builds it — replacing the single &quot;Preparing&quot;
            state with four discrete states tied to real barista actions.
          </p>
        </div>

        {/* 4-state model */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "01", label: "In Queue", color: "emerald" },
              { num: "02", label: "Being Made", color: "emerald" },
              { num: "03", label: "Ready", color: "emerald" },
              { num: "04", label: "Waiting", color: "amber" },
            ].map((state) => (
              <div
                key={state.num}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p
                  className={
                    "text-[10px] tracking-widest font-semibold uppercase mb-2 " +
                    (state.color === "amber"
                      ? "text-amber-400"
                      : "text-emerald-400")
                  }
                >
                  State {state.num}
                </p>
                <p
                  className="text-lg font-semibold text-white leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {state.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 03 — REJECTED IDEAS */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 03
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ideas I rejected
          <span className="block text-zinc-600">(and why)</span>
        </h2>
        <p className="text-lg text-zinc-300 leading-relaxed mb-16">
          The first job after defining the insight was protecting it from
          over-engineering. Three ideas reached the rejection pile in the first
          hour.
        </p>

        <div className="space-y-12">
          {[
            {
              title: "GPS-triggered pickup notification",
              reason:
                'Tempting because it sounds smart. Killed because it defeats the entire premise of mobile ordering — "skip the line." If the drink only starts when you\'re near the store, you\'re back in the queue.',
            },
            {
              title: "Queue position counter, Domino's-tracker style",
              reason:
                "Killed because Starbucks operations are parallel, not single-file. A barista isn't working ticket #4 of the day; they're working three drinks simultaneously across two espresso machines. A literal queue counter would lie.",
            },
            {
              title: "Live barista cam",
              reason:
                "Killed in 90 seconds. Over-engineered, privacy-violating, and the camera doesn't tell you when your drink starts — it just looks busy.",
            },
          ].map((idea, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 text-lg">✕</span>
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {idea.title}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {idea.reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-lg text-zinc-400 italic">
          The discipline of saying no to these moved the design toward
          restraint.
        </p>
      </section>

      {/* CHAPTER 04 — THE 5 SCREENS */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 04
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The new mental model
          </h2>
        </div>

        <ScreenSection
          eyebrow="State 0 — Before"
          eyebrowColor="text-zinc-500"
          title="Current (Broken)"
          description='A faithful rebuild of the existing Starbucks state. One progress bar, three steps, a single ambiguous "Preparing" status that hides everything happening behind the counter.'
          image="/case-studies/starbucks/screen-1-current-broken.png"
        />
        <ScreenSection
          eyebrow="State 1 of 4"
          eyebrowColor="text-emerald-400"
          title="In Queue"
          description='Real context: "2 drinks ahead of yours." The progress bar fills one of four segments. No urgency, just confidence.'
          image="/case-studies/starbucks/screen-2-in-queue.png"
        />
        <ScreenSection
          eyebrow="State 2 of 4"
          eyebrowColor="text-emerald-400"
          title="Being Made Now"
          description='The screen that didn&rsquo;t exist before. "Maya started your macchiato." A live ripple animates around the drink card. The brewing moment, named and humanized.'
          image="/case-studies/starbucks/screen-3-being-made.png"
          featured
        />
        <ScreenSection
          eyebrow="State 3 of 4"
          eyebrowColor="text-emerald-400"
          title="Ready to Pick Up"
          description="Mint accent confirms readiness. A peak-freshness timer sits where a generic pickup code used to live, with walking time from the user&rsquo;s location alongside."
          image="/case-studies/starbucks/screen-4-ready.png"
        />
        <ScreenSection
          eyebrow="State 4 of 4"
          eyebrowColor="text-amber-400"
          title="Waiting on the Counter"
          description="Amber accent, not red. A gentle nudge with a free remake offer. The app&rsquo;s job is to keep the customer on Starbucks&rsquo; side even when something goes wrong."
          image="/case-studies/starbucks/screen-5-waiting.png"
        />
      </section>

      {/* CHAPTER 05 — THE MOTION MOMENT */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 05
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The motion moment
        </h2>

        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            Frame 2 → Frame 3 is the only transition that earns animation in
            this case study.
          </p>
          <p>
            When the barista taps &quot;started&quot; on their POS, the screen
            morphs: eyebrow text rewrites from{" "}
            <strong className="text-white">IN QUEUE</strong> to{" "}
            <strong className="text-white">BEING MADE NOW</strong>, the progress
            bar&apos;s second segment fills, and three concentric green rings
            pulse outward from the drink card. Smart Animate handles all of it.
          </p>
          <p className="text-zinc-400 italic pl-6 border-l-2 border-emerald-500/30">
            Every other transition is a quiet fade. The brewing moment is the
            only one that gets to move, because it&apos;s the only one that
            matters.
          </p>
        </div>

        <a
          href="https://www.behance.net/gallery/250629345/Starbucks-Mobile-Order-Redesign"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors group"
        >
          <span className="text-sm text-zinc-200">
            View animated prototype on Behance
          </span>
          <ExternalLink
            size={14}
            className="text-zinc-400 group-hover:text-white transition-colors"
          />
        </a>
      </section>

      {/* CHAPTER 06 — DESIGN DECISIONS */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 06
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Design decisions worth naming
        </h2>

        <div className="space-y-10">
          {[
            {
              title: "Inter as a stand-in for Sodo Sans",
              body: "Starbucks&rsquo; proprietary typeface isn&rsquo;t publicly available. Inter holds the same humanist warmth at the weights this design needs. Called out here so the substitution reads as intentional.",
            },
            {
              title: "Cream backgrounds, not white",
              body: "#F2F0EB warms the entire app. Editorial restraint over digital sterility.",
            },
            {
              title: "Hairlines, not shadows",
              body: "Every card sits on a 1px black-at-6% border. Shadows would have made this feel like a Material Design app from 2017.",
            },
            {
              title: "Soft state language",
              body: '"Waiting on the counter" instead of "Order late." Amber (#9D5116), not red. The app&rsquo;s job is to keep the customer on Starbucks&rsquo; side even when something goes wrong.',
            },
            {
              title: "A single state card",
              body: "One reusable component carries the status story across four screens. The eyebrow, headline, and accent color shift — the layout doesn&rsquo;t. Information design through restraint, not through new features.",
            },
          ].map((d, i) => (
            <div key={i}>
              <h3
                className="text-xl md:text-2xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {d.title}
              </h3>
              <p
                className="text-lg text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: d.body }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 07 — WHAT I'D TEST NEXT */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 07
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What I&apos;d test next
        </h2>

        <div className="space-y-8">
          {[
            "Real barista hardware. This design assumes a POS event fires the moment a drink starts. Is that latency under 5 seconds? Worth measuring before shipping.",
            'Sentiment when "Waiting" hits. The amber state has to feel like Starbucks cares — not like Starbucks is grading the customer\'s punctuality.',
            "Whether the four-state model holds for drive-thru and in-store orders, or whether it's mobile-only.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 text-emerald-400/60 text-2xl leading-none">
                →
              </span>
              <p className="text-lg text-zinc-400 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCES */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[10px] tracking-[0.2em] text-zinc-600 font-semibold uppercase mb-4">
          Sources
        </p>
        <div className="space-y-3 text-sm text-zinc-500">
          <p>
            Niccol, B. <em>Starbucks Q4 2024 earnings call</em> (Oct 30, 2024).
            GeekWire.
          </p>
          <p>
            Niccol, B. <em>Starbucks Q1 2025 earnings call</em> (Jan 28, 2025).
            Reuters.
          </p>
          <p>
            <em>Starbucks mobile order item limit reduced from 15 to 12</em>{" "}
            (Oct 2024). The Independent.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="max-w-3xl mx-auto px-6 pb-32 pt-16 border-t border-white/10">
        <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
          Next
        </p>
        <Link href="/#projects" className="group block">
          <p
            className="text-3xl md:text-4xl font-bold text-zinc-300 group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ← Back to all projects
          </p>
        </Link>
      </section>
    </main>
  );
}

/* Reusable screen section */
function ScreenSection({
  eyebrow,
  eyebrowColor,
  title,
  description,
  image,
  featured = false,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}) {
  return (
    <div className="mb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className={
              "text-[10px] tracking-[0.2em] font-semibold uppercase mb-4 " +
              eyebrowColor
            }
          >
            {eyebrow}
          </p>
          <h3
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>
          <p
            className="text-lg text-zinc-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {featured && (
            <p className="mt-6 text-sm text-emerald-400/80 italic">
              The hero moment. This screen is the case study&apos;s reason to
              exist.
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
            alt={title}
            width={786}
            height={1704}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
