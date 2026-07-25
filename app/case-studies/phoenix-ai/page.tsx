import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix AI — Six Decisions in Two Weeks — Harsha Asapu",
  description:
    "Sole design owner on a live AI health platform. Every ticket said 'your call.' Six documented reframes, shipped to production, no approval gates.",
};

export default function PhoenixAICaseStudy() {
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

      <div className="fixed right-4 top-4 z-50">
        <div className="flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-zinc-950/88 px-2 py-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
          <a
            href="https://phoenix-cdreams.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <span>Live at phoenix-cdreams.org</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <RevealBlock>
        <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-10 md:pb-12">
          <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
            Case Study · 2026 · Live Product
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Phoenix AI
            <br />
            <span className="text-emerald-400/90">Six decisions</span> in two weeks.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
            Sole design owner on a live AI health platform. Every ticket came
            in with either no spec or a one-line brief: &quot;your call, do
            whatever you think is best.&quot; Direct ship authority to
            production. No PMs. No approval gates. Six documented reframes.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-white/10">
            {[
              { label: "Role", value: "Sole Design Owner" },
              { label: "Timeframe", value: "2 weeks intensive" },
              { label: "Platform", value: "Web · Mobile" },
              { label: "Stack", value: "React · TypeScript · Tailwind · shadcn/ui · Supabase" },
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

      {/* CHAPTER 01 — THE BRIEF */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 01
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The brief was &quot;your call.&quot;
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              Phoenix is a live AI health optimization platform. Biomarker
              data, wearable signals, machine-learning models feeding
              personalized health scores, supplement recommendations, and
              longevity insights. Real users. Production traffic.
            </p>
            <p>
              I own the design system, dashboard architecture, brand
              cohesion, motion system, and every visible surface. Two weeks
              in, tickets stopped arriving as specs. They started arriving as
              one-line Slack messages: <em>add a badge</em>,{" "}
              <em>make it feel more premium</em>, <em>fix the card
              expansion</em>. No wireframes handed down. No PM in the loop.
            </p>
            <p className="text-emerald-400/90 font-medium">
              The thesis: ambiguity in tickets is not a blocker. It is a
              design opportunity to diagnose what the ticket is really asking
              for.
            </p>
            <p>
              Every judgment call below is documented as evidence. What the
              ticket said. What the actual user problem was. What I shipped.
              Why it was the right call.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 02 — DECISION 1 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 02 · Decision 1
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A badge request became an information architecture overhaul.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              <span className="text-zinc-500">Ticket:</span> Add a small
              badge on the Biomarkers page showing which markers fed the
              overall health score. One-line Slack message.
            </p>
            <p>
              I shipped the badge — <em>&quot;Used for Score&quot;</em> — but
              sitting with the page, the ticket was misdiagnosing the actual
              user problem. Users weren&apos;t confused about <em>which</em>{" "}
              markers were scored. They were confused about{" "}
              <em>why</em>.
            </p>
            <p className="text-zinc-400 font-medium">What shipped:</p>
            <ul className="space-y-3 pl-5 list-disc marker:text-emerald-400/60">
              <li>
                Grouped all 14 biomarkers by domain — Metabolic,
                Cardiovascular, Inflammation — so the categorization itself
                taught users the health-scoring model.
              </li>
              <li>
                Added a summary at the top of the page:{" "}
                <em>&quot;8 of 14 used for your score.&quot;</em>
              </li>
              <li>
                Added an info popover next to the summary explaining why
                some markers aren&apos;t scored: model validation gaps,
                missing reference ranges.
              </li>
              <li>
                Killed the full-row colored status washes. Replaced them
                with a 3px colored left border and a small status pill on
                the right. Same status information. Five times more
                scannable.
              </li>
            </ul>
            <p className="text-emerald-400/90 font-medium pt-2">
              The ticket said &quot;add a badge.&quot; What shipped was an
              information hierarchy that answered the actual user question.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 03 — DECISION 2 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 03 · Decision 2
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Two conflicting brand palettes. Reconciled without escalation.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              The branding lead provided a brand hex palette:{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">#1C2836</code>{" "}
              deep navy,{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">#0CAFFF</code>{" "}
              primary accent,{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">#1E90FF</code>{" "}
              secondary. Engineering had a different HSL-based palette
              already in production. Two competing color systems from people
              senior to me, no reconciliation process in place.
            </p>
            <p className="text-zinc-400 font-medium">The call:</p>
            <p>
              Derived the entire dark mode from the branding lead&apos;s
              navy. Mapped{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">--background</code>,{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">--card</code>,{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">--popover</code>,{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">--sidebar-background</code>{" "}
              to layered navy tokens in{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">index.css</code>. Preserved existing
              accent tokens where they aligned. Shipped. Documented the
              reasoning in a follow-up message.
            </p>
            <p className="text-emerald-400/90 font-medium pt-2">
              &quot;This is what I did. Here&apos;s why. Assume shipping
              unless you flag a blocker.&quot;
            </p>
            <p>Nobody flagged it. The reconciliation is now the standard.</p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 04 — DECISION 3 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 04 · Decision 3
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A layout bug pretending to be a state bug.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              Users reported that clicking &quot;View details&quot; on any
              one domain card visually expanded every card in the row.
              Standard React assumption: shared state across card instances.
              But the local{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">
                useState
              </code>{" "}
              was correctly scoped per-card.
            </p>
            <p>
              The actual cause: the grid used Tailwind&apos;s{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">
                auto-rows-fr
              </code>{" "}
              for equal row heights. When one card expanded, its row
              stretched, and every card in that row visually grew with it.
              Not a state bug. A layout bug wearing a state bug&apos;s
              clothes.
            </p>
            <p className="text-zinc-400 font-medium">
              Fix wasn&apos;t a state fix. Fix was an interaction pattern
              redesign:
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-emerald-400/60">
              <li>
                Replaced the inline{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1 py-0.5 rounded">&lt;Collapsible&gt;</code>{" "}
                with a shadcn{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1 py-0.5 rounded">&lt;Sheet&gt;</code>{" "}
                component.
              </li>
              <li>
                Side sheet on desktop (right slide-in). Bottom sheet on
                mobile. Auto-switches via{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1 py-0.5 rounded">
                  window.matchMedia(&quot;(min-width: 768px)&quot;)
                </code>
                .
              </li>
              <li>
                Card stays fixed size. Grid never breaks. Users get more room
                to read the detail content.
              </li>
              <li>
                Staggered entrance animations: header → metadata pills (80ms
                delay) → insight body (160ms) → trend chart (240ms).
              </li>
            </ul>
            <p className="text-emerald-400/90 font-medium pt-2">
              Matches the drill-down pattern users already know from Apple
              Health, Whoop, and Oura. The interaction language was already
              in the room. I just used it.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 05 — DECISION 4 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 05 · Decision 4
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Three navigation systems became one.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              Original state: a top tab row (Data / Labs / Supplements /
              Upload / Profile),{" "}
              <em>and</em> a sidebar with almost the same items,{" "}
              <em>and</em> a mobile bottom pill nav with the same items
              again. Three navigation systems pointing at the same
              destinations.
            </p>
            <p className="text-zinc-400 font-medium">Audit:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-emerald-400/60">
              <li>Data → duplicate of Dashboard in sidebar</li>
              <li>Supplements → duplicate of sidebar</li>
              <li>Upload → duplicate of Data Upload in sidebar</li>
              <li>Profile → duplicate of sidebar footer button</li>
              <li>
                Labs → not in sidebar. Actual gap.
              </li>
            </ul>
            <p className="text-zinc-400 font-medium pt-2">Actions:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-emerald-400/60">
              <li>Deleted the top tab row from Dashboard.tsx.</li>
              <li>Added Labs to the sidebar under Health Data.</li>
              <li>Deleted MobileBottomNav from the mobile layout.</li>
              <li>
                Sidebar drawer became the single mobile nav via shadcn&apos;s
                SidebarTrigger.
              </li>
            </ul>
            <p className="text-emerald-400/90 font-medium pt-2">
              One navigation system across desktop and mobile. No items lost.
              Dashboard hero content earned back significant vertical space.
              Navigation surface area reduced by roughly 60%.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 06 — DECISION 5 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 06 · Decision 5
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discoverable for new users. Invisible for returning ones.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              After deleting the mobile bottom nav, the hamburger became the
              only entry point to navigation on mobile. But first-time users
              often miss the standard shadcn SidebarTrigger icon.
            </p>
            <p className="text-zinc-400 font-medium">
              Rejected solutions:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-red-400/60">
              <li>Making the icon larger — nags returning users.</li>
              <li>Adding a persistent label — adds visual weight.</li>
              <li>
                Making the sidebar visible by default — defeats the purpose
                of a drawer.
              </li>
            </ul>
            <p className="text-zinc-400 font-medium pt-2">Shipped:</p>
            <p>
              Three stacked discoverability signals. All disappear
              permanently after first tap.
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-emerald-400/60">
              <li>
                Swapped the shadcn panel icon for a standard 3-line{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1 py-0.5 rounded">
                  &lt;Menu /&gt;
                </code>{" "}
                icon (universal recognition).
              </li>
              <li>
                Small primary-color dot on the top-right corner of the
                hamburger — borrowing the unread-notification pattern.
              </li>
              <li>
                Two-second breathing pulse on the dot plus an eight-second
                nudge on the whole icon (small translate + glow).
              </li>
              <li>
                All three signals removed permanently after first tap,
                persisted via{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1 py-0.5 rounded">
                  localStorage.setItem(&quot;phoenix.hamburger.tapped&quot;, &quot;1&quot;)
                </code>
                .
              </li>
            </ul>
            <p className="text-emerald-400/90 font-medium pt-2">
              Discoverability without permanent UI noise. The signal has a
              lifetime. That&apos;s the whole idea.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 07 — DECISION 6 — MOTION SYSTEM */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 07 · Decision 6
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A motion system anchored to health metaphors, not decoration.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              The platform felt visually static. The brief was{" "}
              <em>&quot;add subtle premium animations.&quot;</em> I declined
              to add generic hover effects and instead built a small named
              motion vocabulary tied to what the product actually is: a
              health app.
            </p>
            <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
              <div>
                <h3 className="text-sm font-semibold text-emerald-400/90 mb-1">
                  phoenixFadeUp
                </h3>
                <p className="text-sm text-zinc-400">
                  Content rises 8px on entrance. Cubic-bezier(0.2, 0.8, 0.2, 1).
                  Natural deceleration, not a bounce.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400/90 mb-1">
                  phoenixBreathe
                </h3>
                <p className="text-sm text-zinc-400">
                  3-second ease-in-out scale + opacity cycle on the score
                  card sparkle. A breathing metaphor for a health app.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400/90 mb-1">
                  phoenixDrawIn
                </h3>
                <p className="text-sm text-zinc-400">
                  0.9-second left-anchored scaleX on progress bars. Fills in
                  like a measurement completing.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400/90 mb-1">
                  phoenixHamburgerHint
                </h3>
                <p className="text-sm text-zinc-400">
                  8-second translate + glow cycle on the hamburger until
                  first tap. Then off, forever.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400/90 mb-1">
                  phoenixDotPulse
                </h3>
                <p className="text-sm text-zinc-400">
                  2-second scale + opacity pulse on the dot indicator.
                </p>
              </div>
            </div>
            <p>
              All animations respect{" "}
              <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">
                prefers-reduced-motion
              </code>{" "}
              via a shared media query. Entrance sequences use staggered
              animation-delays applied via inline styles.
            </p>
            <p className="text-emerald-400/90 font-medium pt-2">
              Small. Named. Semantically meaningful. Not a decoration layer.
              A motion vocabulary that has a reason to exist.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 08 — CRAFT DETAILS */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 08
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Craft details.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <ul className="space-y-3 pl-5 list-disc marker:text-emerald-400/60">
              <li>
                Three-tier light-mode surface hierarchy: canvas (system
                grouped background gray) → card (white) → elevated (white +
                shadow). Cards visibly lift off canvas.
              </li>
              <li>
                Chat FAB positioned with{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">
                  env(safe-area-inset-bottom, 0px)
                </code>{" "}
                for iOS home indicator handling.
              </li>
              <li>
                Sheet side-switching (right on desktop, bottom on mobile)
                uses{" "}
                <code className="text-emerald-400/90 text-sm bg-white/5 px-1.5 py-0.5 rounded">
                  matchMedia
                </code>{" "}
                at the same breakpoint (768px) as the rest of the layout to
                avoid rendering inconsistencies.
              </li>
              <li>
                Score domain cards use Apple Health&apos;s category-identity
                pattern: card border-left color is domain{" "}
                <em>identity</em>, not domain score. Score is communicated
                through the ring + number, not through card wash.
              </li>
            </ul>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 09 — WHAT SHIPPED */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 09
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What shipped.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-zinc-300 leading-relaxed">
            <ul className="space-y-3 pl-5 list-disc marker:text-emerald-400/60">
              <li>
                Full brand alignment across the dashboard in dark and light
                mode.
              </li>
              <li>
                Navigation surface area reduced by ~60% — three systems
                collapsed into one.
              </li>
              <li>
                Biomarkers page redesigned with grouped hierarchy and scoring
                transparency.
              </li>
              <li>
                Motion system introduced with semantic naming and
                reduced-motion support.
              </li>
              <li>
                All work shipped directly to production via Lovable with ship
                authority. No approval gates. No design reviews. Judgment
                calls made and defended.
              </li>
            </ul>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 10 — WHAT I'D DO DIFFERENTLY */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-24 md:mb-32">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 10
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What I&apos;d do differently.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              The initial dark mode palette went through two iterations
              before landing on the branding lead&apos;s navy. I should have
              asked for brand-token clarity on day one instead of deriving,
              shipping, and re-deriving.
            </p>
            <p>
              Ship authority is a real gift. The cost of using it well is
              spending five extra minutes upfront asking the question that
              would have saved the second iteration.
            </p>
            <p className="text-emerald-400/90 font-medium pt-2">
              Faster isn&apos;t the point. Deciding once is.
            </p>
          </div>
        </section>
      </RevealBlock>
    </main>
  );
}