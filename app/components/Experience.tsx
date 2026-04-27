"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

/* ── Timeline data ── */
const EXPERIENCES = [
  {
    id: "cdf",
    role: "UI/UX Designer",
    company: "Community Dreams Foundation",
    period: "Feb 2026 – Present",
    location: "Remote, USA",
    current: true,
    highlights: [
      "Designing end-to-end UX for the DreamStream platform — wireframes, prototypes, and high-fidelity UI in Figma",
      "Collaborating with PMs and engineers in an Agile, Slack-based workflow",
      "Conducting usability testing and iterating on user flows for accessibility and engagement",
      "Defining interaction patterns and responsive layouts for cross-device consistency",
    ],
  },
  {
    id: "builtintech",
    role: "Product Designer & Frontend Engineer",
    company: "BuiltinTech — Co-Founder",
    period: "Jan 2023 – Dec 2023",
    location: "India",
    current: false,
    highlights: [
      "Co-founded an IT services startup; led UI design and frontend implementation for 10+ paid client projects",
      "Designed user flows, responsive layouts, and scalable UI components from discovery to production",
      "Owned client relationships — cold outreach, requirement scoping, feedback iteration, and delivery",
      "Recruited and managed paid interns from KL University through real project workflows",
    ],
  },
  {
    id: "areksoft",
    role: "Frontend Developer Intern",
    company: "Areksoft Technologies",
    period: "Aug 2022 – Dec 2022",
    location: "India",
    current: false,
    highlights: [
      "Built and refined production web interfaces using HTML, CSS, JavaScript, Python, and Flask",
      "Collaborated across teams to implement UI requirements and support frontend/backend feature delivery",
      "Used Figma and Canva for UI and outreach design tasks",
      "First professional exposure to client-driven product delivery and enterprise team workflows",
    ],
  },
];

/* ── Variants ── */
const sectionVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ── Timeline dot ── */
function Dot({ current }: { current: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {current && (
        <motion.span
          className="absolute h-5 w-5 rounded-full bg-blue-500/30"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      <span
        className={`h-3 w-3 rounded-full border-2 z-10
          ${current
            ? "bg-blue-400 border-blue-400"
            : "bg-zinc-700 border-zinc-500"
          }`}
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
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 items-start">

          {/* LEFT — sticky context */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-wide text-brand/80 font-semibold">
              EXPERIENCE
            </p>
            <h2
              id="experience-heading"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Professional Experience
            </h2>
            <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed">
              From co-founding a startup to designing live products — a timeline
              of real work, shipped systems, and hands-on UX practice.
            </p>

            {/* Mini legend */}
            <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                Current role
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600 border border-zinc-500" />
                Previous role
              </div>
            </div>
          </motion.div>

          {/* RIGHT — vertical timeline */}
          <motion.div
            className="relative"
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Vertical line */}
            <motion.div
              className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            />

            <div className="flex flex-col gap-12 pl-10">
              {EXPERIENCES.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariant}
                  className="relative"
                >
                  {/* Timeline dot — positioned on the line */}
                  <div className="absolute -left-10 top-1">
                    <Dot current={exp.current} />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="rounded-2xl border border-white/8
                               bg-white/3 px-6 py-5
                               hover:border-white/15 hover:bg-white/5
                               transition-colors duration-200"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3
                          className="text-base font-semibold text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm text-blue-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="text-xs text-zinc-400">{exp.period}</p>
                        <p className="text-xs text-zinc-600 mt-0.5">{exp.location}</p>
                      </div>
                    </div>

                    {/* Current badge */}
                    {exp.current && (
                      <div className="mt-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full
                                         bg-blue-500/10 border border-blue-500/20
                                         px-2.5 py-0.5 text-[11px] text-blue-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                          Active
                        </span>
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}