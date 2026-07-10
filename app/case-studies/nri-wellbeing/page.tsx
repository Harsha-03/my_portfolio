import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRI Wellbeing Services — Harsha Asapu",
  description:
    "ISO certified services company. 10+ service categories organized around a service first IA that lets first time visitors find the right offering in 30 seconds. Live at nriwellbeing.com since 2022.",
};

export default function NRIWellbeingCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 text-zinc-200">
      {/* Top actions */}
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
            href="https://nriwellbeing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <span>Live site</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <RevealBlock>
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <p className="text-xs tracking-[0.2em] text-cyan-400/80 font-semibold uppercase mb-6">
            Case Study · 2022
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NRI Wellbeing Services
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
            Service first IA for 10+ service categories at an ISO certified
            company. Live at nriwellbeing.com since 2022.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
            {[
              { label: "Role", value: "UI/UX Designer & Frontend Developer" },
              { label: "Timeframe", value: "Jan 2022 – Jul 2022" },
              { label: "Platform", value: "Web" },
              { label: "Stack", value: "Figma · HTML/CSS/JS" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] tracking-widest text-zinc-600 font-semibold uppercase mb-1">
                  {m.label}
                </p>
                <p className="text-sm text-zinc-300">{m.value}</p>
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
              src="/projects/nri-wellbeing-cover.png"
              alt="NRI Wellbeing Services homepage with service first grid"
              width={3840}
              height={2160}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 01 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-32">
          <p className="text-[11px] tracking-[0.2em] text-cyan-400/80 font-semibold uppercase mb-4">
            Chapter 01
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The client
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              ISO certified services company serving Non Resident Indians with
              property, healthcare, logistics, financial, and general support
              services in India.
            </p>
            <p>
              They had 10+ service categories and a first time visitor
              problem. The site needed to help a stranger find the right
              offering fast, without reading company history first.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 02 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-32">
          <p className="text-[11px] tracking-[0.2em] text-cyan-400/80 font-semibold uppercase mb-4">
            Chapter 02
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The IA problem
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Every service business site defaults to company first. Who we
              are. What we believe. Then the services buried deep.
            </p>
            <p>
              That structure works if the visitor already knows you. It fails
              for cold traffic.
            </p>
            <p>
              NRI visitors were often family members of the actual service
              user. Somebody in the US trying to find help for a parent back
              home in India. They had 30 seconds and a specific need. Company
              history was noise.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 03 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-32">
          <p className="text-[11px] tracking-[0.2em] text-cyan-400/80 font-semibold uppercase mb-4">
            Chapter 03
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The service first decision
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>Move services above the fold. Company story below.</p>
            <p>
              The homepage led with a service grid. Each category was one
              card. Each card said what the service was in the customer's
              language, not the company's. The user scanned five cards, found
              the one, clicked, got the specific page.
            </p>
            <p className="text-zinc-400 italic">
              Company story stayed on the site. Just not in the way.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 04 — What shipped */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <p className="text-[11px] tracking-[0.2em] text-cyan-400/80 font-semibold uppercase mb-4">
            Chapter 04
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What shipped
          </h2>
          <ul className="space-y-3 text-lg text-zinc-300 pl-6 list-disc marker:text-cyan-400/60">
            <li>Service first homepage with 10+ category cards</li>
            <li>Individual pages for each service category</li>
            <li>Responsive layouts for desktop and mobile</li>
            <li>Contact routing to the right service team</li>
            <li>Frontend implementation, not just design handoff</li>
          </ul>
          <p className="mt-8 text-lg text-zinc-400">
            Live at{" "}
            <a
              href="https://nriwellbeing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              nriwellbeing.com
            </a>
            . Deployed 2022.
          </p>
        </section>
      </RevealBlock>

      {/* Video placeholder */}
      <RevealBlock>
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video flex items-center justify-center">
            <p className="text-zinc-500 text-sm">
              [ 90 second walkthrough video ]
            </p>
          </div>
          <p className="mt-4 text-sm text-zinc-500 italic text-center">
            nriwellbeing.com walkthrough. Service first grid, category pages,
            routed contact.
          </p>
        </section>
      </RevealBlock>

      {/* CHAPTER 05 — What this shows */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-32">
          <p className="text-[11px] tracking-[0.2em] text-cyan-400/80 font-semibold uppercase mb-4">
            Chapter 05
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What this shows
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              The IA decision was small on paper. Move one section above
              another. In practice it changed who could use the site.
            </p>
            <p>
              The same pattern would work for any multi service business.
              Healthcare group. Legal firm. Consulting shop. The service first
              move is not a design opinion. It is a scale pattern that works
              when the visitor does not already know you.
            </p>
            <p className="text-zinc-400 italic">
              I still use this pattern. It is in Resume Tailor. It is in the
              SLU Alumni Connect flow. Every product where a stranger has to
              find their path before they trust the brand.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* Footer */}
      <RevealBlock>
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to projects</span>
            </Link>
            <a
              href="https://nriwellbeing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Visit nriwellbeing.com</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </section>
      </RevealBlock>
    </main>
  );
}
