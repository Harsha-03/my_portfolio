"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search, Target, PenTool,
  Play, Code2, Rocket, ArrowRight,
} from "lucide-react";
import {
  SiFigma, SiNextdotjs,
  SiTailwindcss, SiFramer, SiJira,
  SiVercel, SiGithub,
} from "react-icons/si";
import {
  Layers, Route, Wand2, MonitorSmartphone,
  Accessibility, Brain, BarChart3, Layout,
  ClipboardList, Compass, Eye, Users,
  Component, MousePointer2, Smartphone, LineChart,
  GitBranch, Sparkles,
} from "lucide-react";

/* Types */
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

const PIPELINE: Phase[] = [
  {
    id: "discover",
    phase: "Discover",
    icon: <Search size={15} />,
    color: "text-violet-400",
    glow: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.25)",
    skills: [
      { name: "User Research",     icon: <Brain className="w-4 h-4" />,        usedIn: "LifeOS",              primary: true },
      { name: "Usability Testing", icon: <Target className="w-4 h-4" />,       usedIn: "Portfolio AI",        primary: true },
      { name: "User Flows",        icon: <Route className="w-4 h-4" />,        usedIn: "SLU Alumni Connect" },
      { name: "Heuristic Eval",    icon: <Eye className="w-4 h-4" />,          usedIn: "Starbucks" },
      { name: "Competitive Audit", icon: <Compass className="w-4 h-4" />,      usedIn: "Starbucks" },
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
      { name: "Info Architecture", icon: <Layers className="w-4 h-4" />,        usedIn: "SLU Alumni Connect",  primary: true },
      { name: "Design Systems",    icon: <Layout className="w-4 h-4" />,        usedIn: "CDF",                 primary: true },
      { name: "Personas",          icon: <Users className="w-4 h-4" />,         usedIn: "LifeOS" },
      { name: "Journey Mapping",   icon: <ClipboardList className="w-4 h-4" />, usedIn: "Starbucks" },
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
      { name: "Figma",             icon: <SiFigma className="w-4 h-4" />,           usedIn: "All projects",  primary: true },
      { name: "Wireframing",       icon: <Component className="w-4 h-4" />,         usedIn: "All projects",  primary: true },
      { name: "Auto Layout",       icon: <Layout className="w-4 h-4" />,            usedIn: "CDF" },
      { name: "Design Tokens",     icon: <Sparkles className="w-4 h-4" />,          usedIn: "Starbucks" },
      { name: "Responsive UI",     icon: <MonitorSmartphone className="w-4 h-4" />, usedIn: "Portfolio" },
      { name: "Accessibility",     icon: <Accessibility className="w-4 h-4" />,     usedIn: "CDF" },
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
      { name: "Figma Prototype",    icon: <Wand2 className="w-4 h-4" />,         usedIn: "LifeOS",         primary: true },
      { name: "Smart Animate",      icon: <Sparkles className="w-4 h-4" />,      usedIn: "Starbucks",      primary: true },
      { name: "Interaction Design", icon: <MousePointer2 className="w-4 h-4" />, usedIn: "Starbucks" },
      { name: "Framer Motion",      icon: <SiFramer className="w-4 h-4" />,      usedIn: "Portfolio" },
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
      { name: "React / Next.js",   icon: <SiNextdotjs className="w-4 h-4" />,    usedIn: "SLU Alumni Connect", primary: true },
      { name: "Tailwind CSS",      icon: <SiTailwindcss className="w-4 h-4" />,  usedIn: "Portfolio" },
      { name: "TypeScript",        icon: <Code2 className="w-4 h-4" />,          usedIn: "Portfolio" },
      { name: "Responsive Build",  icon: <Smartphone className="w-4 h-4" />,     usedIn: "Portfolio" },
      { name: "Git / Versioning",  icon: <GitBranch className="w-4 h-4" />,      usedIn: "All projects" },
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
      { name: "Vercel",            icon: <SiVercel className="w-4 h-4" />,  usedIn: "Portfolio & SLU",  primary: true },
      { name: "GitHub",            icon: <SiGithub className="w-4 h-4" />,  usedIn: "All projects" },
      { name: "Analytics",         icon: <LineChart className="w-4 h-4" />, usedIn: "Portfolio" },
      { name: "Power BI",          icon: <BarChart3 className="w-4 h-4" />, usedIn: "Airline Tracker" },
    ],
  },
];

/* ──────────────────────────────────────────────
   SkillCard — FIX: motion.div handles transform only.
   Background/border color lives on a plain div with
   CSS transition so Framer Motion never touches color.
   ──────────────────────────────────────────────*/
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
      className="relative cursor-default"
    >
      {/* Color shell — plain div, CSS transition only, never touched by Framer */}
      <div
        className="rounded-xl px-3 py-2.5 overflow-hidden"
        style={{
          background: hovered ? glow : "rgba(255,255,255,0.04)",
          border: "1px solid " + (hovered ? border : "rgba(255,255,255,0.08)"),
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className={color + " shrink-0"}>{skill.icon}</span>
          <span className="text-[13px] font-medium text-zinc-300 leading-tight">
            {skill.name}
          </span>
          {skill.primary && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-current opacity-60 shrink-0" />
          )}
        </div>

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
      </div>
    </motion.div>
  );
}

/* Mobile skill chip */
function MobileSkillChip({ skill, color }: { skill: Skill; color: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 bg-white/[0.03] border border-white/[0.06]">
      <span className={color + " shrink-0"}>{skill.icon}</span>
      <span className="text-[12px] font-medium text-zinc-300 leading-tight truncate">
        {skill.name}
      </span>
      {skill.primary && (
        <span className="ml-auto h-1 w-1 rounded-full bg-current opacity-50 shrink-0" />
      )}
    </div>
  );
}

function PhaseColumn({ phase, index }: { phase: Phase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="flex flex-col gap-2 min-w-[170px]"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={phase.color}>{phase.icon}</span>
        <span className={"text-xs font-semibold tracking-wide " + phase.color}>
          {phase.phase}
        </span>
      </div>

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

/* Mobile phase row */
function MobilePhaseRow({ phase, index }: { phase: Phase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="block h-5 w-[3px] rounded-full"
          style={{ background: phase.glow.replace("0.15", "0.8") }}
        />
        <span className={phase.color}>{phase.icon}</span>
        <span className={"text-sm font-semibold tracking-wide " + phase.color}>
          {phase.phase}
        </span>
        <span className="ml-auto text-[10px] text-zinc-600 tabular-nums">
          0{index + 1} / 0{6}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 pl-4">
        {phase.skills.map((skill) => (
          <MobileSkillChip key={skill.name} skill={skill} color={phase.color} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-widest text-blue-500 font-semibold">
            SKILLS &amp; PROCESS
          </p>
          <h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How I work, end to end.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-500 max-w-lg leading-relaxed">
            Skills aren&apos;t a list &mdash; they&apos;re a workflow. Each phase maps to how
            I actually move from problem to shipped product.
            <span className="text-zinc-600 hidden md:inline"> Hover a skill to see where it was used.</span>
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="md:hidden mt-10 flex flex-col gap-7">
          {PIPELINE.map((phase, i) => (
            <MobilePhaseRow key={phase.id} phase={phase} index={i} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block mt-12 relative">
          <motion.div
            className="absolute top-[18px] left-0 h-px bg-gradient-to-r from-violet-500/40 via-pink-500/30 via-amber-500/30 via-emerald-500/30 to-cyan-500/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            style={{ width: "100%" }}
          />

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

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex mt-8 items-center gap-6 text-[11px] text-zinc-600"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Core skill &mdash; used across multiple projects
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
