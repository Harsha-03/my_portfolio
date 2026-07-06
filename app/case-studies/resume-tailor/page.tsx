import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Tailor — Harsha Asapu",
  description:
    "Rebuilding an AI resume tool from a Streamlit prototype into a real product. The story of what survived the rewrite, what didn't, and why.",
};

export default function ResumeTailorCaseStudy() {
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

      <div className="fixed right-4 top-4 z-50">
        <div className="flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-zinc-950/88 px-2 py-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
<a
            href="https://github.com/Harsha-03/resume-tailor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Github size={13} />
            <span>Source</span>
          </a>

          <a
            href="https://resumetailor-liart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <span>Live demo</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
          Case Study · 2026
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Resume Tailor
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          An AI resume tool rebuilt from a Streamlit prototype into a real
          product. The story of what survived the rewrite, what didn&apos;t,
          and why.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
          {[
            { label: "Role", value: "Product Designer & Frontend Engineer" },
            { label: "Timeframe", value: "2 weeks" },
            { label: "Platform", value: "Web" },
            {
              label: "Stack",
              value: "Next.js · TypeScript · OpenAI · jsPDF · Vercel",
            },
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
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/projects/resume-tailor-cover.png"
            alt="Resume Tailor landing screen"
            width={3840}
            height={2160}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 01 — THE PROBLEM */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 01
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Identified the real break
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            The original AI Resume Editor was a Streamlit prototype. It worked.
            It matched resumes to job descriptions, generated tailored bullets,
            wrote cover letters. The AI quality was fine.
          </p>
          <p>
            The break wasn&apos;t in the model. It was in the moment between a
            recruiter clicking the portfolio link and the app actually
            responding.
          </p>
          <p>
            Streamlit Cloud puts free-tier apps to sleep after 24 hours of
            inactivity. The next visitor sees a wake-up screen, a paper crown
            emoji, and twenty seconds of nothing.
          </p>
        </div>
      </section>
      </RevealBlock>

      {/* COLD-START IMAGE */}
      <RevealBlock>
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
          <Image
            src="/case-studies/resume-tailor/cold-start.png"
            alt="Streamlit cold-start screen showing 'Your app is waking up'"
            width={2880}
            height={1620}
            className="w-full h-auto"
          />
        </div>
        <p className="mt-6 text-sm text-zinc-500 italic max-w-2xl mx-auto text-center">
          The single screen that decided the rewrite. A tool that isn&apos;t
          available when it&apos;s needed isn&apos;t a tool.
        </p>
      </section>
      </RevealBlock>

      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            Job seekers don&apos;t bookmark a tool for later. They open it
            once, in the middle of an application, with a JD open in another
            tab. If the app takes twenty seconds to wake up, they close the
            tab. A cold start is a closed loop.
          </p>
          <p className="text-zinc-400 italic">
            The product was good. The platform betrayed it. The fix was to
            move.
          </p>
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 02 — WHAT SURVIVED */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 02
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What survived the rewrite
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-12">
            A rewrite is a chance to throw away the parts that were only there
            because they were easy. I went through the old app and asked one
            question of every feature: would I add this again from scratch?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/case-studies/resume-tailor/old-mvp.png"
              alt="The original Streamlit AI Resume Editor MVP"
              width={1440}
              height={810}
              className="w-full h-auto"
            />
            <p className="text-xs text-zinc-500 italic p-4 bg-white/[0.02]">
              Old: brain emoji, &quot;MVP&quot; in the title, exposed API key
              field, three tabs for one workflow.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/case-studies/resume-tailor/old-buttons.png"
              alt="The old Streamlit interface with separate Analyze, Rewrite, and Generate buttons"
              width={1440}
              height={810}
              className="w-full h-auto"
            />
            <p className="text-xs text-zinc-500 italic p-4 bg-white/[0.02]">
              Old: three buttons for three modes. The user had to know which
              order to press them in.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase mb-4">
              Kept
            </p>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>
                  TF-IDF matching against the JD, augmented by GPT analysis
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Cover letter generation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>DOCX and PDF export</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Tone and seniority controls</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-widest text-red-400 font-semibold uppercase mb-4">
              Cut
            </p>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>The user-facing API key field</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>The &quot;Setup&quot; panel and its mode toggles</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Three separate tabs for one continuous workflow</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>The brain emoji and &quot;MVP&quot; framing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Streamlit itself</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-lg text-zinc-400 italic max-w-3xl mx-auto text-center">
          A rewrite isn&apos;t a port. It&apos;s a chance to delete.
        </p>
      </section>
      </RevealBlock>

      {/* CHAPTER 03 — DECISIONS */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 03
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Decisions that earned
          <br />
          their keep
        </h2>

        <div className="space-y-16">
          <Decision
            number="01"
            title="One template, not three"
            body='The first build had Minimal, Modern, and Classic templates with a chooser at the top of the export panel. They all looked basically the same. Three templates that feel identical is worse than one that feels intentional. Pulled the chooser, kept the cleanest of the three, deleted 280 lines of code.'
          />
          <Decision
            number="02"
            title="No em dashes anywhere"
            body="Em dashes are the fastest visual tell that AI wrote something. I built three layers of defense: a prompt rule telling the model never to use them, a server-side post-process that strips any em or en dashes from generated text, and a renderer that uses a pipe character between job title and company instead of the AI&apos;s default dash. The output reads like a person wrote it."
          />
          <Decision
            number="03"
            title="Honest scoring, not flattering scoring"
            body="The instinct with a tailoring tool is to make the after-score bigger than the before-score so users feel good. I refused that. The AI is instructed to reframe real work using JD vocabulary, not to fabricate skills the candidate doesn&apos;t have. A 55-to-68 jump on an honest analysis is more useful than a 75-to-95 jump on a lie that gets caught in the interview."
          />
          <Decision
            number="04"
            title="URLs come from the resume, never invented"
            body='The PDF parser extracts hyperlink annotations from the source file, so &quot;Portfolio-website&quot; in the resume becomes the actual URL it linked to. On the server, every URL the AI returns is validated against the source text. If it isn&apos;t there, it gets stripped. Placeholder patterns like linkedin.com/in/username are blocked outright. Either the link is real or it doesn&apos;t appear.'
          />
          <Decision
            number="05"
            title="Local-first parsing"
            body='Resume parsing runs in the browser using pdfjs. The file never touches a server until the user clicks Tailor. The export panel even shows a small &quot;Local only&quot; badge next to the upload zone. Privacy isn&apos;t a feature page, it&apos;s built into where the work happens.'
          />
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 04 — THE MATCH MOMENT */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 04
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The match moment
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-12">
            The single screen that justifies the whole product. Score on the
            left, covered keywords in green, missing keywords in amber,
            specific suggestions below. The recruiter&apos;s brain rendered as
            a UI, before the recruiter ever opens the resume.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden ring-2 ring-emerald-500/20 shadow-2xl shadow-emerald-500/10">
          <Image
            src="/case-studies/resume-tailor/match-results.png"
            alt="Match results showing 78/100 score, covered keywords, missing keywords, and suggestions"
            width={2880}
            height={1620}
            className="w-full h-auto"
          />
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">
            The insight
          </p>
          <blockquote
            className="text-2xl md:text-4xl font-bold leading-[1.2] text-white border-l-2 border-emerald-500/50 pl-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The honest gap is more useful than a flattering score. The product
            is built around showing what&apos;s actually missing.
          </blockquote>
          <p className="mt-8 text-lg text-zinc-400 leading-relaxed pl-8">
            A user looking at this screen sees exactly which JD concepts they
            can claim, which ones they need to reframe, and which ones are
            real gaps to address before applying. No false confidence.
          </p>
        </div>
      </section>
      </RevealBlock>

      {/* CHAPTER 05 — THE BUILD JOURNEY */}
      <RevealBlock>
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
          Chapter 05
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The build journey
          <span className="block text-zinc-600">(with the bruises)</span>
        </h2>
        <p className="text-lg text-zinc-300 leading-relaxed mb-16">
          Most designer case studies show the polished frames and hide the
          debugging. The honest version of shipping a real product is that
          half the time goes into infrastructure problems that have nothing
          to do with the design. Including them here because the lesson from
          each one shaped what the product is.
        </p>

        <div className="space-y-12">
          <BuildStep
            num="01"
            title="React-PDF crashed with Next.js 16 + React 19"
            body="The first PDF library I reached for, @react-pdf/renderer, threw a minified React error #31 on every export. Spent hours on JSX-vs-createElement workarounds, library upgrades, cache clears. The library has known compatibility gaps with React 19. Lesson: a working library on paper isn&apos;t a working library in your specific stack. Move on faster."
          />
          <BuildStep
            num="02"
            title="Pdfkit failed in Turbopack&apos;s virtual file system"
            body="Switched to pdfkit. It loads font metric files from disk at runtime. Turbopack bundles serverless functions through a virtual root that pdfkit can&apos;t resolve, even with serverExternalPackages configured. The font file simply wasn&apos;t findable at the path the library expected."
          />
          <BuildStep
            num="03"
            title="jsPDF was the answer"
            body='Third library, jsPDF, embeds Helvetica directly into its binary. No filesystem access. Works the same in Node, browser, edge, and serverless. Layout had to be rewritten imperatively (cursor tracking, manual pagination, manual link annotations) but the PDF never crashes again. Sometimes the right library is the one with the smallest contract with the environment.'
          />
          <BuildStep
            num="04"
            title="Vercel Hobby&apos;s 10-second timeout"
            body="Deployed to Vercel. Analyze endpoint died at 504 every time. The maxDuration export in the code said 30 seconds; Vercel ignored it because Hobby tier was capped at 10. Discovered Fluid Compute, which unlocks 300-second functions on Hobby for free. One toggle in the project settings. Months of search results from before that feature shipped sent me down dead ends."
          />
          <BuildStep
            num="05"
            title="gpt-5-mini was slow, gpt-5-nano was honest"
            body='Even with longer timeouts, gpt-5-mini took 30+ seconds per tailor. Switched to gpt-5-nano. It&apos;s 5x faster and roughly as good for structured JSON output. Cost dropped to about half a cent per tailored resume.'
          />
        </div>

        <p className="mt-16 text-lg text-zinc-400 italic">
          None of these problems were design problems. All of them shaped what
          the product became. That&apos;s why they&apos;re in the case study.
        </p>
      </section>
      </RevealBlock>

      {/* CHAPTER 06 — WHAT SHIPS */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">
            Chapter 06
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What ships
          </h2>
        </div>

        <ScreenSection
          eyebrow="Trust layer"
          eyebrowColor="text-emerald-400"
          title="ATS validation, with the receipts"
          description="Eight deterministic checks run locally on every tailored resume: name present, contact fields, summary length, skill count, bullet coverage, education present, no decorative emoji, parseable dates. Each check shows its detail (&quot;353 chars, need 50+&quot;) so the user understands what passed and why. No black-box ATS score."
          image="/case-studies/resume-tailor/ats-validated.png"
        />
        <ScreenSection
          eyebrow="Output"
          eyebrowColor="text-emerald-400"
          title="The tailored resume, readable"
          description='The download preview renders in the same minimal template the DOCX and PDF exports use. Contact line on top with real, clickable URLs extracted from the original PDF. Sections preserved in the same order they appeared in the source. Bullets reframed in JD vocabulary where the underlying work supports it.'
          image="/case-studies/resume-tailor/tailored-preview.png"
          featured
        />
        <ScreenSection
          eyebrow="Optional"
          eyebrowColor="text-zinc-400"
          title="Cover letter, under 300 words"
          description="One click, one paragraph of context, three short paragraphs of why-you-fit. Personalized to the specific JD and company name. No filler, no &quot;passionate about&quot;, no em dashes. Downloads in the same two formats."
          image="/case-studies/resume-tailor/cover-letter.png"
        />
      </section>
      </RevealBlock>

      {/* CHAPTER 07 — WHAT'S NEXT */}
      <RevealBlock>
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

        <div className="space-y-8 text-lg text-zinc-300 leading-relaxed">
          <p>
            <strong className="text-white">Telemetry on bridgeable gaps.</strong>{" "}
            Across many users, which JD keywords are most often legitimately
            covered by existing work the candidate hasn&apos;t framed that
            way? That data could turn into pre-built reframing suggestions.
          </p>
          <p>
            <strong className="text-white">
              A/B test reframing depth.
            </strong>{" "}
            How much vocabulary substitution feels honest before it starts
            feeling slick? Test conservative versus aggressive reframings
            against actual interview-pass rates.
          </p>
          <p>
            <strong className="text-white">
              Recruiter-side preview.
            </strong>{" "}
            The product is currently optimizing for an ATS the candidate
            never sees. A side panel that shows what the ATS-parsed version
            of the resume actually looks like would close that loop.
          </p>
          <p>
            <strong className="text-white">
              Cover letter quality measurement.
            </strong>{" "}
            Right now there&apos;s no signal on whether a generated cover
            letter landed. A short post-application feedback prompt (&quot;did
            you get a reply?&quot;) would create the only honest training
            signal that matters.
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-lg text-zinc-300 leading-relaxed italic">
            Design doesn&apos;t ship perfect. It ships, gets used, reveals
            what&apos;s wrong, and improves. Resume Tailor is one rewrite
            into that loop and ready for the next.
          </p>
        </div>
      </section>
      </RevealBlock>

      {/* FOOTER NAV */}
      <RevealBlock>
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pt-12 border-t border-white/10">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to projects</span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Harsha-03/resume-tailor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={14} />
              <span>View source</span>
            </a>
            <a
              href="https://resumetailor-liart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Try Resume Tailor</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
      </RevealBlock>
    </main>
  );
}

/* — Subcomponents — */

function Decision({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-8">
      <div className="flex-shrink-0 w-12 text-right">
        <p className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase">
          {number}
        </p>
      </div>
      <div className="flex-1">
        <h3
          className="text-xl md:text-2xl font-semibold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p
          className="text-lg text-zinc-400 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
}

function BuildStep({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center">
        <span className="text-emerald-400 text-sm font-semibold">{num}</span>
      </div>
      <div className="flex-1">
        <h3
          className="text-xl md:text-2xl font-semibold text-white mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-lg text-zinc-400 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
}

function ScreenSection({
  eyebrow,
  eyebrowColor,
  title,
  description,
  image,
  featured,
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
              The hero moment. The reason the product exists.
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
            width={2880}
            height={1620}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
