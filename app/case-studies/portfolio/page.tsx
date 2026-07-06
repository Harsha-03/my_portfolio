import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio UX Case Study — Harsha Asapu",
  description:
    "How I designed and built my own portfolio across three phases — from a static site to an AI-powered, mobile-first product design showcase.",
};

export default function PortfolioCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 text-zinc-200">
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
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
          Case Study &middot; 2024&ndash;2025
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Portfolio
          <br />
          <span className="text-zinc-500">Three phases.</span>
          <br />
          One signal.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          Designing your own portfolio is the hardest brief. No client, no
          constraints, no deadline. This is how I went from a static page to a
          production system with a live AI chatbot, draggable UI, and a design
          language built from scratch.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
          {[
            { label: "Role", value: "Designer + Engineer" },
            { label: "Stack", value: "Next.js · TypeScript · Framer Motion · OpenAI" },
            { label: "Timeline", value: "2024 – Present" },
            { label: "Status", value: "Phase 3 — Live" },
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

      {/* PHASE OVERVIEW */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              phase: "Phase 1",
              title: "Ship something",
              year: "2024",
              color: "text-zinc-400",
              border: "border-white/10",
              body: "Static Next.js site. Standard layout. Projects listed, no interactions, no personality. A resume in webpage form.",
            },
            {
              phase: "Phase 2",
              title: "Build the identity",
              year: "2024",
              color: "text-blue-400",
              border: "border-blue-500/20",
              body: "Dark theme, Framer Motion animations, starfield background. RAG chatbot introduced — the differentiator that made recruiters stop and ask questions.",
            },
            {
              phase: "Phase 3",
              title: "Make it a product",
              year: "2025",
              color: "text-emerald-400",
              border: "border-emerald-500/20",
              body: "Full mobile redesign. Draggable chat widget. Editorial typography system. Deep case studies. Skills pipeline. Every component rebuilt from first principles.",
            },
          ].map((p) => (
            <div
              key={p.phase}
              className={"rounded-2xl border bg-white/[0.02] p-6 " + p.border}
            >
              <div className="flex items-center justify-between mb-4">
                <p className={"text-[10px] tracking-widest font-semibold uppercase " + p.color}>
                  {p.phase}
                </p>
                <p className="text-[10px] text-zinc-600">{p.year}</p>
              </div>
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 01 — THE PROBLEM WITH PORTFOLIOS */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 01
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The brief nobody gives you
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            Most portfolios are a list of projects with screenshots. They answer
            the question &ldquo;what did you work on?&rdquo; but not &ldquo;how
            do you think?&rdquo; or &ldquo;can you actually build things?&rdquo;
          </p>
          <p>
            My positioning — Product Designer who codes — needed a portfolio
            that proved both halves of that claim without saying either out loud.
            The site had to be the evidence, not the assertion.
          </p>
          <p>
            Phase 1 shipped something. It didn&apos;t say anything. By the time
            I was in my final semester at SLU, I knew the site needed to do more
            than list work &mdash; it needed to be work.
          </p>
          <p className="text-zinc-400 italic">
            The constraint that focused everything: a recruiter should be able to
            understand my design thinking in under 90 seconds, without reading a
            word of copy.
          </p>
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 02 — PHASE 1 */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
          Chapter 02 &mdash; Phase 1
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ship something.
          <span className="block text-zinc-600">Anything.</span>
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
          <p>
            Phase 1 was a standard Next.js portfolio. Light theme, projects
            listed in a grid, a contact form, a resume download. Nothing wrong
            with it. Nothing memorable about it either.
          </p>
          <p>
            The problem wasn&apos;t technical — it was positional. The site
            looked like every other designer&apos;s portfolio. Inter font, white
            background, subtle shadows. It communicated &ldquo;I know
            Figma&rdquo; and stopped there.
          </p>
        </div>

        {/* What was wrong */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase mb-5">
            What Phase 1 didn&apos;t do
          </p>
          <div className="space-y-3">
            {[
              "No personality — could have been anyone's portfolio",
              "No proof of frontend capability — just a list of claims",
              "No differentiation — identical visual language to 10,000 other portfolios",
              "No memorable moment — nothing a recruiter would screenshot or share",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-4 w-4 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 text-[9px]">
                  &times;
                </span>
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 03 — PHASE 2 */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-blue-400/80 font-semibold uppercase mb-4">
          Chapter 03 &mdash; Phase 2
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Build the identity.
          <span className="block text-zinc-600">Find the signal.</span>
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-16">
          <p>
            Phase 2 started with a single decision: dark canvas, because it
            forces every element to earn its place. Light themes hide weak
            design behind whitespace. Dark themes expose it.
          </p>
          <p>
            The starfield background came next &mdash; not as decoration but as
            a statement about depth. Shooting stars on scroll. A site that
            moves the moment you land on it communicates interaction design
            before you&apos;ve read a word.
          </p>
          <p>
            The RAG chatbot was the real Phase 2 decision. I built a custom AI
            assistant trained on my portfolio content &mdash; projects, process,
            experience &mdash; using OpenAI embeddings and GPT-4.1-mini. Ask it
            &ldquo;what&apos;s his strongest project&rdquo; and it answers from
            the case studies. Ask it &ldquo;can he code&rdquo; and it explains
            the stack.
          </p>
          <p className="text-zinc-400 italic pl-6 border-l-2 border-blue-500/30">
            The chatbot became the most-mentioned feature in every recruiter
            conversation. It proved the technical claim without requiring anyone
            to read a skills list.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              label: "Typography",
              value: "Bricolage Grotesque for headings — editorial weight without aggression. Pinyon Script for the name signature — the one moment of personality that contrasts everything else.",
            },
            {
              label: "Motion system",
              value: "Framer Motion throughout. Scroll-tied parallax on motion pieces. Staggered entrance animations on every section. Nothing decorative — every animation carries meaning.",
            },
            {
              label: "RAG chatbot",
              value: "8 markdown knowledge files covering full career narrative, case studies, and UX process. Embeddings via OpenAI text-embedding-3-small. GPT-4.1-mini as the model.",
            },
            {
              label: "Design language",
              value: "Dark Depth: #0a0a0a canvas, indigo accents, hairlines not shadows. Editorial restraint over maximalism. Every spacing decision made deliberately.",
            },
          ].map((d) => (
            <div
              key={d.label}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <p className="text-[10px] tracking-widest text-blue-400/80 font-semibold uppercase mb-2">
                {d.label}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">{d.value}</p>
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 04 — PHASE 3 */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 04 &mdash; Phase 3
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Make it a product.
          <span className="block text-zinc-600">Treat every pixel as shipped.</span>
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-16">
          <p>
            Phase 3 started when I realized the site worked on desktop and
            broke on mobile. Not visually — functionally. The chat widget
            blocked tap targets. The project cards didn&apos;t scroll. The
            navigation didn&apos;t account for thumb reach zones.
          </p>
          <p>
            Mobile-first meant rebuilding every component from scratch with
            375px as the primary viewport. Not adding responsive overrides to a
            desktop design &mdash; actually designing mobile first, then
            extending upward.
          </p>
          <p>
            The draggable chat widget came from a real UX problem: the FAB was
            covering content on certain screen sizes. The solution &mdash; let
            the user move it &mdash; was also a demonstration of Framer Motion
            capability. Corner-snap on release. Position persists in
            localStorage. Chat panel repositions based on which corner the FAB
            sits in so it never clips off-screen.
          </p>
          <p className="text-zinc-400 italic pl-6 border-l-2 border-emerald-500/30">
            Every component in Phase 3 was written as if it would ship in a
            production product. Not portfolio code. Product code.
          </p>
        </div>

        {/* Phase 3 component list */}
        <div className="space-y-4">
          <p className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase mb-6">
            What was rebuilt in Phase 3
          </p>
          {[
            {
              component: "ChatWidget",
              detail: "Draggable with corner-snap. Position persists in localStorage. Panel repositions based on FAB corner. All original animations preserved — shimmer, pulse rings, sparkle, alive thoughts.",
            },
            {
              component: "MobileNav",
              detail: "Full-depth drawer with profile photo, Pinyon Script signature, open-to-work pill, live time, and social row. z-[60] to stay above chatbot.",
            },
            {
              component: "Projects",
              detail: "Desktop: 2-column Starbucks-style hero cards stacked vertically. Mobile: 85vh tall Tinder-style scroll cards. Single action row — no duplicate CTA buttons.",
            },
            {
              component: "Skills",
              detail: "Desktop horizontal carousel with hover-to-reveal project context. Mobile vertical stacked phases with 2-col chip grid. Framer Motion color animation bug fixed.",
            },
            {
              component: "Experience",
              detail: "Scroll-tied vertical timeline. Sticky left context panel on desktop. Current role animated dot pulse. Spring-physics card hover.",
            },
            {
              component: "SplashLoader",
              detail: "First-visit gate with Pinyon Script name reveal and portal transition into the main site.",
            },
          ].map((c, i) => (
            <div key={i} className="flex gap-5 border-t border-white/8 pt-5">
              <div className="flex-shrink-0 w-32">
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {c.component}
                </p>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 05 — DECISIONS */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 05
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
              title: "Restraint signals seniority",
              body: "Every time I was tempted to add another animation, another gradient, another feature — I asked whether it served the content or served my ego. Maximalism signals effort. Restraint signals judgment. The portfolio is an argument for the latter.",
            },
            {
              title: "The chatbot is the portfolio",
              body: "Most portfolios ask recruiters to read. The RAG chatbot lets them ask. &ldquo;What&apos;s his strongest project?&rdquo; &ldquo;Can he work in a design system?&rdquo; &ldquo;Is he available?&rdquo; Every answer is grounded in real content, not hallucination. That&apos;s a product decision, not a gimmick.",
            },
            {
              title: "Mobile-first isn&apos;t a checkbox",
              body: "Phase 2 had responsive classes applied to a desktop design. Phase 3 started at 375px and built up. The difference is not cosmetic — it&apos;s structural. The project cards are entirely different components on mobile vs desktop, not the same component with overrides.",
            },
            {
              title: "The draggable widget is a UX proof",
              body: "A fixed FAB covering content is a UX failure. Letting the user relocate it is the correct solution. The implementation &mdash; Framer Motion drag with corner-snap and localStorage persistence &mdash; is also a live demonstration of interaction design capability. One feature, two jobs.",
            },
          ].map((d, i) => (
            <div key={i}>
              <h3
                className="text-xl md:text-2xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
                dangerouslySetInnerHTML={{ __html: d.title }}
              />
              <p
                className="text-lg text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: d.body }}
              />
            </div>
          ))}
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 06 — WHAT'S NEXT */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 06
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What&apos;s next
        </h2>

        <div className="space-y-8">
          {[
            "High-fidelity Figma wireframes for each case study — replacing the current image placeholders with screens designed to the same editorial standard as the case study writing.",
            "SLU Alumni Connect and AI Resume Editor case study screens — both projects have live deployments that deserve proper visual documentation.",
            "RAG bot voice refinement — the system prompt needs tightening so the bot responds in my voice, not a generic assistant voice.",
            "Phase 4 will be defined by whatever problem Phase 3 reveals. The portfolio is a product. Products iterate.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 text-emerald-400/60 text-2xl leading-none">
                &rarr;
              </span>
              <p className="text-lg text-zinc-400 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
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
