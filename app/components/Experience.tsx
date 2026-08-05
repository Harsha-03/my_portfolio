"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ── Timeline data ── */
const EXPERIENCES = [
  {
    id: "phoenix-ai-cdf",
    role: "UI/UX Designer",
    company: "Phoenix AI · Community Dreams Foundation",
    period: "Feb 2026 – Present",
    location: "Remote, USA",
    current: true,
    highlights: [
      "Sole design owner on Phoenix AI, a live AI-powered health platform (biomarker data, wearable signals, ML-driven health scores and longevity insights) with direct ship authority to production.",
      "Two weeks in: shipped a full dashboard redesign, brand cohesion overhaul, and cross-platform navigation consolidation, every ticket landed with either no spec or a one-line brief.",
      "Built a named motion vocabulary tied to health metaphors (phoenixFadeUp, phoenixBreathe, phoenixDrawIn) all respect prefers-reduced-motion instead of adding generic hover decoration.",
      "Reconciled two conflicting brand palettes (branding lead vs. engineering) into a single navy-anchored dark-mode token system in index.css, without escalation. Reconciliation is now the standard.",
      "Design leadership across three healthcare products: Figma flows, prototypes, motion/interaction system, and async reviews through Slack. No PMs in the loop. No approval gates.",
    ],
  },
  {
    id: "builtintech",
    role: "Co-Founder, UI/UX Designer",
    company: "BuiltinTech",
    period: "Jan 2023 – Dec 2023",
    location: "India",
    current: false,
    highlights: [
      "Shipped 10+ consumer web products in 12 months across four verticals (construction, minerals, fitness, infrastructure) same designer, discovery through post-launch, no handoff friction.",
      "3–4 week ship cycles as the norm, not the exception. A repeatable intake → IA → design → build → deploy → handoff pattern replaced one-off custom work.",
      "Translated ambiguous briefs into interaction models and reusable component libraries, second and third projects in the same vertical shipped faster than the first.",
      "Drove 80% of new client acquisition through direct outreach and scoping before design work started; recruited and mentored 12 KL University interns on live client workflows.",
    ],
  },
  {
    id: "areksoft",
    role: "UI Designer & Frontend Developer",
    company: "Areksoft Technologies",
    period: "Aug 2022 – Dec 2022",
    location: "India",
    current: false,
    highlights: [
      "Designed and built responsive web interfaces in a production environment, gaining early exposure to how engineering teams turn requirements into working screens.",
      "Worked with HTML, CSS, JavaScript, Python, and Flask while learning how frontend decisions connect with backend request-response flows.",
      "Supported brand and digital campaign work through Figma, Canva, and social asset design, giving me a stronger understanding of visual consistency beyond the product screen.",
      "Learned how client requests, business expectations, feasibility, and delivery pressure shape the final user experience.",
    ],
  },
  {
    id: "nri-wellbeing",
    role: "UI/UX Designer & Frontend Developer Intern",
    company: "NRI Wellbeing Services",
    period: "Jan 2022 – Jul 2022",
    location: "India",
    current: false,
    highlights: [
      "Designed and shipped nriwellbeing.com end-to-end for an ISO-certified services company. Still in production 4+ years later. Zero redesigns needed, the IA decisions held.",
      "Owned information architecture across 10+ service categories (property, healthcare, logistics, financial, NRI support services), with contact routing to the right team on each page.",
      "Service-first homepage hierarchy: category cards in the customer's language above the fold, company story below. First-time visitors often family members finding services for parents in India could identify the right offering in under 30 seconds.",
      "First zero-to-one production project. Confirmed that IA decisions made early determine whether a site needs redesigning every 18 months, or runs unchanged for years.",
    ],
  },
];

/* ── Variants ── */
const sectionVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const bulletVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ── Timeline dot ── */
function Dot({ current }: { current: boolean }) {
  return (
    <div className="relative flex h-5 w-5 items-center justify-center">
      {current && (
        <motion.span
          className="absolute h-6 w-6 rounded-full bg-blue-500/30"
          animate={{
            scale: [1, 1.65, 1],
            opacity: [0.55, 0, 0.55],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <motion.span
        className={`relative z-10 h-3.5 w-3.5 rounded-full border-2 ${
          current
            ? "border-blue-200 bg-blue-400 shadow-[0_0_22px_rgba(96,165,250,0.55)]"
            : "border-zinc-500 bg-zinc-700"
        }`}
        whileHover={{ scale: 1.25 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      />
    </div>
  );
}

/* ════════════════════════════════
   COMPONENT
════════════════════════════════ */
export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="experience-grid grid grid-cols-1 gap-8 items-start md:gap-10">
          {/* LEFT — sticky context */}
          <motion.div
            className="experience-left"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.p
              className="text-xs tracking-wide text-blue-400/80 font-semibold"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              EXPERIENCE
            </motion.p>

            <motion.h2
              id="experience-heading"
              className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              Professional Experience
            </motion.h2>

            <motion.p
              className="mt-3 max-w-xl text-sm text-zinc-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              From healthcare product work at Phoenix AI to co-founding a startup,
              client delivery, and production websites — a timeline of real work,
              shipped systems, and hands-on UX practice.
            </motion.p>

            {/* Mini legend */}
            <motion.div
              className="mt-6 flex flex-col gap-2 text-xs text-zinc-500"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 }}
            >
              <div className="flex items-center gap-2">
                <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-full bg-blue-400 ring-4 ring-blue-400/15 shadow-[0_0_18px_rgba(96,165,250,0.65)]" />
                Current role
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-zinc-500 bg-zinc-600 ring-4 ring-white/5" />
                Previous role
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — vertical timeline */}
          <motion.div
            className="experience-right relative pb-32 md:pb-0"
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="experience-track"
              variants={sectionVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {EXPERIENCES.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariant}
                  className="experience-row"
                >
                  {/* Timeline dot */}
                  <div className="experience-dot">
                    <Dot current={exp.current} />
                  </div>

                  {/* Card */}
                  <motion.article
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      borderColor: "rgba(96, 165, 250, 0.35)",
                      backgroundColor: "rgba(255, 255, 255, 0.045)",
                      boxShadow: "0 24px 80px rgba(37, 99, 235, 0.10)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    className="rounded-2xl border border-white/[0.08]
                               bg-white/[0.03] px-3.5 py-3.5 sm:px-5 sm:py-5 md:px-6
                               transition-colors duration-200"
                  >
                    {/* Header */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3
                          className="text-base font-semibold text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {exp.role}
                        </h3>

                        <p className="text-sm text-blue-400 mt-0.5 leading-relaxed">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-left sm:text-right shrink-0">
                        <p className="text-xs text-zinc-400">{exp.period}</p>
                        <p className="text-xs text-zinc-600 mt-0.5">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Current badge */}
                    {exp.current && (
                      <motion.div
                        className="mt-2"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                      >
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full
                                     bg-blue-500/10 border border-blue-500/20
                                     px-2.5 py-0.5 text-[11px] text-blue-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                          Active
                        </span>
                      </motion.div>
                    )}

                    {/* Highlights */}
                    <motion.ul
                      className="mt-3 space-y-1.5 md:space-y-2"
                      variants={sectionVariant}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      {exp.highlights.map((point, i) => (
                        <motion.li
                          key={i}
                          variants={bulletVariant}
                          className="flex gap-2 text-[13px] sm:text-sm text-zinc-400 leading-relaxed"
                        >
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.article>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .experience-grid {
            display: grid;
            grid-template-columns: 360px minmax(0, 1fr);
            column-gap: 3.5rem;
            align-items: start;
          }

          .experience-left {
            position: sticky;
            top: 7rem;
            align-self: start;
            min-width: 0;
          }

          .experience-right {
            min-width: 0;
          }
        }

        .experience-track {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .experience-track::before {
          content: "";
          position: absolute;
          left: 9px;
          top: 10px;
          bottom: 10px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            rgba(96, 165, 250, 0.55),
            rgba(255, 255, 255, 0.16) 22%,
            rgba(255, 255, 255, 0.14) 72%,
            rgba(255, 255, 255, 0.08)
          );
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.12);
          transform-origin: top;
        }

        .experience-row {
          position: relative;
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          column-gap: 0.85rem;
          align-items: start;
        }

        .experience-dot {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          padding-top: 0.25rem;
        }

        @media (min-width: 640px) {
          .experience-track {
            gap: 2.75rem;
          }

          .experience-row {
            grid-template-columns: 22px minmax(0, 1fr);
            column-gap: 1.25rem;
          }

          .experience-track::before {
            left: 10px;
          }
        }

        @media (min-width: 900px) {
          .experience-track {
            gap: 3rem;
          }

          .experience-row {
            grid-template-columns: 22px minmax(0, 1fr);
            column-gap: 1.55rem;
          }

          .experience-track::before {
            left: 10px;
          }
        }
      `}</style>
    </section>
  );
}