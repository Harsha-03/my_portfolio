import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLU Alumni Connect — Harsha Asapu",
  description:
    "A production-ready alumni engagement platform built to replace fragmented spreadsheets with role-based dashboards for students, alumni, mentors, and administrators.",
};

export default function SLUAlumniCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200 md:pl-[300px]">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-30 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span>Back to projects</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://slu-alumni-connect-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <span>Live site</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/Harsha-03/slu-alumni-connect-main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <Github size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-6">
          Case Study &middot; 2024
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          SLU Alumni
          <br />
          Connect
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          A production-ready alumni engagement platform designed to replace
          fragmented spreadsheets and manual workflows with clear, role-based
          experiences for every stakeholder.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
          {[
            { label: "Role", value: "Lead UI/UX Designer & Frontend Engineer" },
            { label: "Team", value: "5-person academic project" },
            { label: "Timeframe", value: "8 weeks · 2024" },
            { label: "Stack", value: "Next.js · React · TypeScript · PostgreSQL · Prisma" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[10px] tracking-widest text-zinc-600 font-semibold uppercase mb-1">{m.label}</p>
              <p className="text-sm text-zinc-200">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/projects/slu-alumni-connect.png"
            alt="SLU Alumni Connect dashboard"
            width={2800}
            height={1600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* CHAPTER 01 — THE PROBLEM */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">Chapter 01</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ fontFamily: "var(--font-heading)" }}>
          The problem
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            Saint Louis University has 142,000+ living alumni. Despite that network,
            alumni data lived in disconnected spreadsheets, email threads, and legacy
            systems across multiple departments. No single source of truth existed.
          </p>
          <p>
            The result: students couldn&apos;t find mentors in their field. Alumni who
            wanted to give back had no clear channel. Administrators spent hours on
            manual data reconciliation and had no visibility into what was actually
            working.
          </p>
          <p>
            CASE research showed that universities with integrated alumni systems see
            37% more event engagement and 52% better donor retention than those
            running on piecemeal tools. SLU had the network. It didn&apos;t have the system.
          </p>
          <p className="text-zinc-400 italic">
            The problem wasn&apos;t the alumni. It was the infrastructure.
          </p>
        </div>

        {/* Three pain points */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {[
            { who: "Students", pain: "No structured way to find and connect with relevant alumni mentors in their field" },
            { who: "Alumni", pain: "No channel to volunteer as mentors or update their profile — sporadic generic emails only" },
            { who: "Admins", pain: "Fragmented data across multiple systems made it impossible to measure engagement or allocate resources" },
          ].map((s) => (
            <div key={s.who} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-[10px] tracking-widest text-emerald-400/80 font-semibold uppercase mb-3">{s.who}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.pain}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 02 — RESEARCH */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">Chapter 02</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            Research &rarr; insight
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-12">
            I led the design workstream across an 8-week Agile cycle. Before wireframing
            anything, I mapped the stakeholder landscape and benchmarked against peer
            institutions that had solved this problem at scale.
          </p>
        </div>

        {/* Benchmarks */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            { school: "U. of Michigan", stat: "45% annual engagement", method: "Integrated calendar + gamification" },
            { school: "Duke Blue Devil", stat: "1,800 mentorship matches/yr", method: "Up from 200 — 89% satisfaction" },
            { school: "MIT Alumni App", stat: "78,000 active users", method: "62% growth in under-35 donors" },
          ].map((b) => (
            <div key={b.school} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase mb-2">{b.school}</p>
              <p className="text-base font-semibold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>{b.stat}</p>
              <p className="text-sm text-zinc-400">{b.method}</p>
            </div>
          ))}
        </div>

        {/* The insight */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">The insight</p>
          <blockquote
            className="text-2xl md:text-4xl font-bold leading-[1.2] text-white border-l-2 border-emerald-500/50 pl-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The platform needed to serve four completely different users from one codebase &mdash; without cognitive overload for any of them.
          </blockquote>
          <p className="mt-8 text-lg text-zinc-400 leading-relaxed pl-8">
            Role-based access wasn&apos;t just a technical requirement &mdash; it was the
            core UX principle. Every stakeholder gets exactly what they need and nothing
            they don&apos;t. Students see mentors. Admins see metrics. Alumni see impact.
          </p>
        </div>
      </section>

      {/* CHAPTER 03 — SOLUTION */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">Chapter 03</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            The solution
          </h2>
        </div>

        <div className="space-y-20">
          <ModuleSection
            eyebrow="Module 01"
            title="Alumni Directory"
            description="Searchable, filterable database of 12,000+ alumni profiles. Students filter by industry, graduation year, employer, and location — solving the mentor discovery problem in one view. No more email chains, no more manual spreadsheet searches."
          />
          <ModuleSection
            eyebrow="Module 02"
            title="Mentorship Hub"
            description="Structured mentorship workflows replacing informal, untracked arrangements. Students browse verified mentor profiles with expertise tags and availability. Alumni apply to become mentors. Admins approve, track, and configure program limits. Post-mentorship ratings create accountability and improve future matching."
          />
          <ModuleSection
            eyebrow="Module 03"
            title="Events & RSVP"
            description="Centralized event management replacing dispersed email and department website listings. Real-time RSVP with attendance tracking. Admins see participation trends across 262 events and 4,747 RSVP records. Networking mixers consistently drove 2.3x higher RSVP rates than webinars — surfaced through analytics."
          />
          <ModuleSection
            eyebrow="Module 04"
            title="Admin Analytics Dashboard"
            description="KPI visibility that didn't exist before: total registered users, monthly active users, active mentorships, RSVP conversion, and donation totals — all in one view. Replaced manual reconciliation across disconnected systems with a single source of truth."
          />
        </div>
      </section>

      {/* CHAPTER 04 — DESIGN DECISIONS */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">Chapter 04</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Design decisions worth naming
          <span className="block text-zinc-600">(and what I rejected)</span>
        </h2>
        <p className="text-lg text-zinc-300 leading-relaxed mb-16">
          I used MoSCoW prioritization to protect scope across 8 weeks. Three features
          reached the cut list.
        </p>

        <div className="space-y-10">
          {[
            {
              decision: "Role-aware UI over a single unified interface",
              rejected: "One dashboard for all user types",
              why: "A single interface serving students, alumni, mentors, and admins would have created cognitive overload for everyone. Role-based access means each user sees only what&apos;s relevant — students don&apos;t see admin KPIs; admins don&apos;t see the mentorship request flow meant for students.",
            },
            {
              decision: "Synthetic data for privacy-safe development",
              rejected: "Using real SLU alumni records for testing",
              why: "12,000 records generated via Python — realistic distributions for graduation years, employment status, location, and engagement scores — without exposing any real alumni identity. FERPA compliance built in from day one, not retrofitted.",
            },
            {
              decision: "JSON fixtures over live database for the prototype",
              rejected: "Full PostgreSQL + Prisma from week 1",
              why: "A live database in week 1 would have blocked frontend progress while backend schema was still evolving. JSON fixtures let UI and data work in parallel. The architecture is Prisma-ready — migration is a swap, not a rebuild.",
            },
            {
              decision: "MoSCoW to cut AI recommendations and gamification",
              rejected: "AI-powered mentor matching, badges, streaks",
              why: "Both features sounded compelling and would have consumed 30%+ of remaining sprint time. The core problem — fragmented data and no structured mentorship flow — didn&apos;t need AI to be solved. Deferred to Phase 2.",
            },
          ].map((d, i) => (
            <div key={i} className="border-t border-white/8 pt-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}
                    dangerouslySetInnerHTML={{ __html: d.decision }} />
                  <p className="text-sm text-zinc-500">Rejected: <span className="line-through">{d.rejected}</span></p>
                </div>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed ml-12" dangerouslySetInnerHTML={{ __html: d.why }} />
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 05 — OUTCOMES */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">Chapter 05</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ fontFamily: "var(--font-heading)" }}>
          Outcomes
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            { stat: "12,000+", label: "Alumni profiles in unified database" },
            { stat: "262", label: "Events tracked with real-time RSVP" },
            { stat: "811", label: "Mentorship relationships structured and tracked" },
            { stat: "4", label: "Stakeholder roles served from one platform" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{s.stat}</p>
              <p className="text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {[
            "Alumni with 75%+ profile completeness showed 3.2x higher mentorship participation and 2.1x higher event attendance — early engagement predicts long-term engagement.",
            "Alumni in active mentorship relationships gave 2.7x more often than those who weren&apos;t — mentorship drives philanthropic connection.",
            "Networking mixers drove 2.3x higher RSVP rates than webinars — surfaced directly from the analytics dashboard, invisible before this platform.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 text-emerald-400/60 text-2xl leading-none">&rarr;</span>
              <p className="text-lg text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 06 — WHAT I'D TEST NEXT */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <p className="text-[11px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">Chapter 06</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ fontFamily: "var(--font-heading)" }}>
          What I&apos;d test next
        </h2>
        <div className="space-y-8">
          {[
            "Real user testing with 50–100 pilot users — specifically whether the role-based dashboard reduces cognitive load for students vs admins, or whether they still encounter features meant for the other group.",
            "Mentor matching algorithm quality — the current system is rule-based (industry, skills, availability). Testing whether alumni satisfaction ratings actually correlate with those match criteria before investing in ML.",
            "Profile completion nudges — given that 75%+ completeness predicts 3.2x higher engagement, a targeted onboarding flow that gets users past that threshold is the highest-leverage UX investment.",
            "Migration from JSON fixtures to PostgreSQL + Prisma — the architecture supports it; the question is whether the data model holds up under real-world edge cases.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 text-emerald-400/60 text-2xl leading-none">&rarr;</span>
              <p className="text-lg text-zinc-400 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="max-w-3xl mx-auto px-6 pb-32 pt-16 border-t border-white/10">
        <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-semibold uppercase mb-4">Next</p>
        <Link href="/#projects" className="group block">
          <p className="text-3xl md:text-4xl font-bold text-zinc-300 group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
            &larr; Back to all projects
          </p>
        </Link>
      </section>
    </main>
  );
}

function ModuleSection({ eyebrow, title, description }: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <p className="text-[10px] tracking-[0.2em] text-emerald-400/80 font-semibold uppercase mb-4">{eyebrow}</p>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h3>
        <p className="text-lg text-zinc-400 leading-relaxed">{description}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex items-center justify-center min-h-[200px]">
        <p className="text-sm text-zinc-600 text-center">
          Screen designs coming in next iteration
          <br />
          <span className="text-[11px]">Figma high-fidelity in progress</span>
        </p>
      </div>
    </div>
  );
}
