"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealBlock, ScrollSentence, SectionLabel, smoothEase } from "./MotionPattern";

const SKILLS = [
  "Figma",
  "Design Systems",
  "Interaction Design",
  "UX Research",
  "Usability Testing",
  "Information Architecture",
  "Journey Mapping",
  "Behavioral Design",
  "Prototyping",
  "AI Product Design",
  "Accessibility",
  "Responsive Design",
];

const TOOLS = [
  { name: "Figma", role: "Product design" },
  { name: "Framer", role: "Motion & prototyping" },
  { name: "Cursor", role: "AI code editor" },
  { name: "Claude", role: "Research & writing" },
  { name: "Next.js", role: "Frontend" },
  { name: "Tailwind", role: "Styling" },
  { name: "Vercel", role: "Deployment" },
  { name: "OpenAI API", role: "RAG systems" },
  { name: "Notion", role: "Documentation" },
  { name: "Jira", role: "Agile workflow" },
  { name: "GitHub", role: "Version control" },
  { name: "Power BI", role: "Data & dashboards" },
];

function SkillChip({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.025, ease: smoothEase }}
      whileHover={{ y: -3, scale: 1.04, borderColor: "rgba(59,130,246,0.5)", color: "#fff" }}
      className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-zinc-300 backdrop-blur-sm md:text-sm"
    >
      {skill}
    </motion.span>
  );
}

function ToolCard({ tool, index }: { tool: (typeof TOOLS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.035, ease: smoothEase }}
      whileHover={{ y: -4, scale: 1.015, borderColor: "rgba(59,130,246,0.4)" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/45 p-4 backdrop-blur-sm transition-colors hover:bg-zinc-900/70"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.12),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <p className="relative text-sm font-semibold text-white md:text-base" style={{ fontFamily: "var(--font-heading)" }}>
        {tool.name}
      </p>
      <p className="relative mt-1 text-[11px] text-zinc-500 md:text-xs">{tool.role}</p>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 25%"],
  });

  const proofX = useTransform(scrollYProgress, [0.05, 0.32], ["-1.4rem", "0rem"]);
  const proofOpacity = useTransform(scrollYProgress, [0.05, 0.32], [0.3, 1]);
  const stackLineScale = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  return (
    <section ref={sectionRef} id="skills" className="relative py-20 md:py-32" style={{ position: "relative" }}>
      <div className="mx-auto w-full max-w-6xl">
        <RevealBlock>
          <SectionLabel>How I Work</SectionLabel>

          <h2
            className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <ScrollSentence text="Design craft, held together with" />{" "}
            <motion.span
              style={{ x: proofX, opacity: proofOpacity, fontFamily: "var(--font-serif)", fontWeight: 400 }}
              className="inline-block italic text-emerald-400"
            >
              proof.
            </motion.span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 md:text-base">
            <ScrollSentence text="The pattern is simple: find the unclear moment, structure it, test it, and make the next action easier to understand." />
          </p>
        </RevealBlock>

        <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
          {SKILLS.map((skill, index) => (
            <SkillChip key={skill} skill={skill} index={index} />
          ))}
        </div>

        <div className="relative mt-16 md:mt-24">
          <motion.div style={{ scaleX: stackLineScale, transformOrigin: "left" }} className="absolute -top-6 left-0 h-px w-full bg-blue-400/20" />

          <RevealBlock>
            <SectionLabel>The Stack</SectionLabel>
            <h3
              className="mb-8 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <ScrollSentence text="Tools I actually use." />
            </h3>
          </RevealBlock>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {TOOLS.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
