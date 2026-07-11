import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { RevealBlock } from "../../components/MotionPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuiltinTech Client Delivery System — Harsha Asapu",
  description:
    "Cofounded BuiltinTech and delivered 10+ paid client products in 12 months across four verticals. The scale came from a repeatable delivery pattern, not one off custom work.",
};

export default function BuiltinTechCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 text-zinc-200">
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
            href="https://www.dharaniminerals.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <span>Featured client</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <RevealBlock>
        <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-10 md:pb-12">
          <p className="text-xs tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-6">
            Case Study · 2023
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BuiltinTech Client Delivery System
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
            Shipped 10+ client products in 12 months. Same intake to ship
            pattern across construction, minerals, fitness, and infrastructure.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-white/10">
            {[
              {
                label: "Role",
                value: "Cofounder, Product Designer & Frontend Engineer",
              },
              { label: "Timeframe", value: "Jan 2023 – Dec 2023" },
              { label: "Platform", value: "Web" },
              { label: "Stack", value: "Figma · HTML/CSS/JS · Flask · Vercel" },
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
        <section className="max-w-5xl mx-auto px-6 mb-20 md:mb-24">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/projects/builtintech-cover.png"
              alt="BuiltinTech featured client Dharani Minerals homepage"
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
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-4">
            Chapter 01
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The setup
          </h2>
          <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              Cofounded BuiltinTech in January 2023 with a technical partner.
              Local business clients. Cold outreach: storefront visits, cold
              calls, requirement discovery in the client's own words. Closed
              on trust, not decks.
            </p>
            <p>
              Drove 80% of new client acquisition. Delivered 10+ paid products
              in 12 months. Recruited paid interns from KL University to keep
              delivery moving as volume grew.
            </p>
            <p className="text-zinc-400 italic">
              The design work was mine. The delivery system was mine to figure
              out.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 02 */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-4">
            Chapter 02
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why the pattern mattered
          </h2>
          <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              Every client was different. Construction, minerals, fitness,
              infrastructure. Different services, different customers,
              different vocabularies.
            </p>
            <p>
              What kept repeating was the delivery. Same first meeting shape.
              Same discovery gaps. Same IA problems. Same launch surprises.
            </p>
            <p>
              By the third project I stopped starting from scratch. By the
              sixth, the delivery had a shape. The pattern is what let 10+
              ship in 12 months without a second designer.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 03 — Delivery pattern */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-4">
            Chapter 03
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The delivery pattern
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mb-6 md:mb-8">
            Six steps. Fixed order. The pattern was the deliverable. Each
            project got one.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                num: "01",
                title: "Intake",
                body: "Client meeting in their language, not mine. Get the business words for what they sold. Get the customer words for what customers asked.",
              },
              {
                num: "02",
                title: "Information architecture",
                body: "Turned the service list into a website structure. Service first, not company first. First time visitors needed to find the right offering, not read the company story.",
              },
              {
                num: "03",
                title: "Design",
                body: "Wireframes to high fidelity. Responsive from the first frame. Client review at wireframe, not at hi fi. Cheaper to change.",
              },
              {
                num: "04",
                title: "Build",
                body: "Frontend implementation. HTML, CSS, JavaScript for static sites. Flask when the client needed a contact form or admin surface.",
              },
              {
                num: "05",
                title: "Deploy",
                body: "Host, DNS, contact form live. Client kept the credentials. No dependency on us for future edits.",
              },
              {
                num: "06",
                title: "Handoff",
                body: "Walked the client through the site. Showed them how to update copy. Answered questions live, not by email.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-8">
                <div className="flex-shrink-0 w-12 text-right">
                  <p className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">
                    {step.num}
                  </p>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-white mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 04 — Featured client */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-12 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-4">
            Chapter 04
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured client: Dharani Minerals
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Live at{" "}
            <a
              href="https://www.dharaniminerals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              dharaniminerals.com
            </a>
            .
          </p>
        </section>
      </RevealBlock>

      {/* Video placeholder */}
      <RevealBlock>
        <section className="max-w-4xl mx-auto px-6 mb-12 md:mb-14">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video flex items-center justify-center">
            <p className="text-zinc-500 text-sm">
              [ 90 second walkthrough video ]
            </p>
          </div>
          <p className="mt-4 text-sm text-zinc-500 italic text-center">
            Dharani Minerals walkthrough. Service first homepage, reusable
            product cards, contact on every page.
          </p>
        </section>
      </RevealBlock>

      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              B2B minerals company. Multiple product categories. Needed a site
              that helped buyers understand product range and contact fast.
            </p>
            <ul className="space-y-3 mt-6 pl-6 list-disc marker:text-amber-400/60">
              <li>
                Service first homepage. Products above the fold, company story
                below.
              </li>
              <li>
                One category card that carried every product type. Would scale
                to 40+ SKUs without new components.
              </li>
              <li>
                Contact form on every page. B2B buyers don't scroll to find
                the phone number.
              </li>
            </ul>
            <p className="text-zinc-400 italic pt-4">
              Delivered end to end in 2023. Client kept the site in
              production.
            </p>
          </div>
        </section>
      </RevealBlock>

      {/* CHAPTER 05 — Other client work */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-4">
            Chapter 05
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Other client work
          </h2>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                name: "SP Infratech",
                body: "Construction services. 12 pages across commercial, industrial, warehouse, hospitality. Migrated from a Flask + Yagmail contact stack to Vercel + Resend for reliability.",
              },
              {
                name: "Sridevi Constructions",
                body: "Construction firm. Flask app with gallery, projects, and services surfaces. Homepage built around portfolio proof.",
              },
              {
                name: "SSR Happy Fitness",
                body: "Fitness studio. Six pages structured around courses, training, and reviews. Homepage led with class schedule and instructor credibility.",
              },
            ].map((c) => (
              <div key={c.name}>
                <h3
                  className="text-xl md:text-2xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {c.name}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-zinc-500 italic">
            Plus 6+ additional client products delivered in the same period
            without preserved artifacts.
          </p>
        </section>
      </RevealBlock>

      {/* CHAPTER 06 — What this shows */}
      <RevealBlock>
        <section className="max-w-3xl mx-auto px-6 mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-amber-400/80 font-semibold uppercase mb-4">
            Chapter 06
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What this shows
          </h2>
          <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              The scale story is not one client. It is the pattern that
              shipped 10+ across 4 verticals in 12 months.
            </p>
            <p>
              The question for any system is whether it would survive 10x.
              Ten more clients. Twice as many verticals. Different countries.
              The BuiltinTech pattern was designed for 10x because I was
              living 10x from month three.
            </p>
            <p className="text-zinc-400 italic">
              I stopped designing individual sites. I started designing a
              pipeline. That is the move that transfers.
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
              href="https://www.dharaniminerals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Visit Dharani Minerals</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </section>
      </RevealBlock>
    </main>
  );
}
