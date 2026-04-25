"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search, Target, PenTool,
  Play, Code2, Rocket, ArrowRight,
} from "lucide-react";
import {
  SiFigma, SiReact, SiNextdotjs,
  SiTailwindcss, SiFramer, SiJira,
  SiVercel, SiGithub,
} from "react-icons/si";
import {
  Layers, Route, Wand2, MonitorSmartphone,
  Accessibility, Brain, BarChart3, Layout,
} from "lucide-react";

/* ── Types ── */
type Skill = {
  name: string;
  icon: React.ReactNode;
  usedIn?: string;
  primary?: boolean;
};

type Phase = {
  id: string;
  phase: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
  border: string;
  skills: Skill[];
};

/* ── Pipeline data ── */
const PIPELINE: Phase[] = [
  {
    id: "discover",
    phase: "Discover",
    icon: <Search size={15} />,
    color: "text-violet-400",
    glow: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.25)",
    skills: [
      { name: "User Research",    icon: <Brain className="w-4 h-4" />,   usedIn: "LifeOS",            primary: true },
      { name: "Usability Testing",icon: <Target className="w-4 h-4" />,  usedIn: "Portfolio AI",       primary: true },
      { name: "User Flows",       icon: <Route className="w-4 h-4" />,   usedIn: "SLU Alumni Connect" },
    ],
  },
  {
    id: "define",
    phase: "Define",
    icon: <Target size={15} />,
    color: "text-blue-400",
    glow: "rgba(96,165,250,0.15)",
    border: "rgba(96,165,250,0.25)",
    skills: [
      { name: "Info Architecture", icon: <Layers className="w-4 h-4" />,        usedIn: "SLU Alumni Connect", primary: true },
      { name: "Design Systems",    icon: <Layout className="w-4 h-4" />,         usedIn: "CDF" },
      { name: "Jira & Agile",      icon: <SiJira className="w-4 h-4" />,        usedIn: "CDF" },
    ],
  },
  {
    id: "design",
    phase: "Design",
    icon: <PenTool size={15} />,
    color: "text-pink-400",
    glow: "rgba(244,114,182,0.15)",
    border: "rgba(244,114,182,0.25)",
    skills: [
      { name: "Figma",         icon: <SiFigma className="w-4 h-4" />,          usedIn: "All projects",       primary: true },
      { name: "Auto Layout",   icon: <Layout className="w-4 h-4" />,            usedIn: "CDF" },
      { name: "Responsive UI", icon: <MonitorSmartphone className="w-4 h-4" />, usedIn: "Portfolio" },
      { name: "Accessibility", icon: <Accessibility className="w-4 h-4" />,     usedIn: "CDF" },
    ],
  },
  {
    id: "prototype",
    phase: "Prototype",
    icon: <Play size={15} />,
    color: "text-amber-400",
    glow: "rgba(251,191,36,0.15)",
    border: "rgba(251,191,36,0.25)",
    skills: [
      { name: "Figma Prototype", icon: <Wand2 className="w-4 h-4" />,    usedIn: "LifeOS",      primary: true },
      { name: "Framer Motion",   icon: <SiFramer className="w-4 h-4" />, usedIn: "Portfolio" },
    ],
  },
  {
    id: "build",
    phase: "Build",
    icon: <Code2 size={15} />,
    color: "text-emerald-400",
    glow: "rgba(52,211,153,0.15)",
    border: "rgba(52,211,153,0.25)",
    skills: [
      { name: "React / Next.js",  icon: <SiNextdotjs className="w-4 h-4" />,    usedIn: "SLU Alumni Connect", primary: true },
      { name: "Tailwind CSS",     icon: <SiTailwindcss className="w-4 h-4" />,  usedIn: "Portfolio" },
      { name: "TypeScript",       icon: <Code2 className="w-4 h-4" />,          usedIn: "Portfolio" },
    ],
  },
  {
    id: "ship",
    phase: "Ship",
    icon: <Rocket size={15} />,
    color: "text-cyan-400",
    glow: "rgba(34,211,238,0.15)",
    border: "rgba(34,211,238,0.25)",
    skills: [
      { name: "Vercel",   icon: <SiVercel className="w-4 h-4" />,  usedIn: "Portfolio & SLU", primary: true },
      { name: "GitHub",   icon: <SiGithub className="w-4 h-4" />,  usedIn: "All projects" },
      { name: "Power BI", icon: <BarChart3 className="w-4 h-4" />, usedIn: "Airline Tracker" },
    ],
  },
];

/* ── Skill card ── */
function SkillCard({ skill, color, glow, border }: {
  skill: Skill;
  color: string;
  glow: string;
  border: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="relative rounded-xl px-3 py-2.5 cursor-default overflow-hidden"
      style={{
        background: hovered ? glow : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? border : "rgba(255,255,255,0.08)"}`,
        transition: "background 0.2s, border 0.2s",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span className={`${color} shrink-0`}>{skill.icon}</span>
        <span className="text-[13px] font-medium text-zinc-300 leading-tight">
          {skill.name}
        </span>
        {skill.primary && (
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-current opacity-60 shrink-0"
                style={{ color: color.replace("text-", "") }} />
        )}
      </div>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {hovered && skill.usedIn && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="mt-1.5 flex items-center gap-1 text-[11px] text-zinc-500"
          >
            <ArrowRight size={9} />
            {skill.usedIn}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Phase column ── */
function PhaseColumn({ phase, index }: { phase: Phase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col gap-2 min-w-[160px]"
    >
      {/* Phase header */}
      <div className="flex items-center gap-2 mb-1">
        <span className={phase.color}>{phase.icon}</span>
        <span className={`text-xs font-semibold tracking-wide ${phase.color}`}>
          {phase.phase}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-2">
        {phase.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            color={phase.color}
            glow={phase.glow}
            border={phase.border}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════
   MAIN COMPONENT
════════════════════════════════ */
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-widest text-blue-500 font-semibold">
            SKILLS & PROCESS
          </p>
          <h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How I work, end to end.
          </h2>
          <p className="mt-3 text-sm text-zinc-500 max-w-lg">
            Skills aren't a list — they're a workflow. Each phase maps to how
            I actually move from problem to shipped product.
            <span className="text-zinc-600"> Hover a skill to see where it was used.</span>
          </p>
        </motion.div>

        {/* Pipeline — horizontal scroll on mobile */}
        <div className="mt-12 relative">

          {/* Connecting line */}
          <motion.div
            className="absolute top-[18px] left-0 h-px bg-gradient-to-r
                       from-violet-500/40 via-pink-500/30 via-amber-500/30
                       via-emerald-500/30 to-cyan-500/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            style={{ width: "100%" }}
          />

          {/* Phase columns */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {PIPELINE.map((phase, i) => (
                <div key={phase.id} className="flex items-start gap-4">
                  <PhaseColumn phase={phase} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center gap-6 text-[11px] text-zinc-600"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Core skill — used across multiple projects
          </div>
          <div className="flex items-center gap-1.5">
            <ArrowRight size={9} />
            Hover to see project context
          </div>
        </motion.div>

      </div>
    </section>
  );
}