"use client";

import { motion } from "framer-motion";
import {
  Search,
  ListChecks,
  Code2,
  CheckCircle2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  SiFigma,
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiNotion,
  SiJira,
  SiGithub,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import {
  RevealBlock,
  SectionLabel,
  smoothEase,
} from "./MotionPattern";
import LogoLoop from "./LogoLoop";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
};

const STEPS: Step[] = [
  {
    num: "01",
    icon: Search,
    title: "Research & synthesis",
    description:
      "Talk to users. Analyze data. Find the real problem, not the surface bug.",
    tools: ["Claude", "Notion"],
  },
  {
    num: "02",
    icon: ListChecks,
    title: "Prioritize with stakeholders",
    description:
      "Align business and user needs. Decide what to build first and why.",
    tools: ["Notion", "Jira"],
  },
  {
    num: "03",
    icon: Code2,
    title: "Design & prototype",
    description:
      "End to end flows. Then a functional prototype in code, not just Figma. Validate ideas fast.",
    tools: ["Figma", "Framer", "Claude"],
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Test & iterate",
    description:
      "Validate with real users and stakeholders. Iterate until the solution is right.",
    tools: ["Teams", "Figma", "Claude"],
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Ship & measure",
    description:
      "Dev collab or own the build. Track adoption, task completion, NPS delta. Close the loop.",
    tools: ["Vercel", "GitHub", "Mixpanel", "Claude"],
  },
];

const STACK_LOGOS = [
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiFramer />, title: "Framer", href: "https://framer.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNotion />, title: "Notion", href: "https://notion.so" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

function ToolBadge({ name }: { name: string }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-medium text-zinc-400">
      {name}
    </span>
  );
}

function StepMarker({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: smoothEase }}
      className="relative z-10 flex flex-col items-center gap-1 bg-black px-1.5 py-1 md:gap-1.5 md:px-2 md:py-1.5"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm md:h-12 md:w-12">
        <Icon className="h-3.5 w-3.5 text-zinc-300 md:h-5 md:w-5" />
      </div>
      <div className="font-mono text-[8px] tracking-widest text-zinc-500 md:text-[10px]">
        {step.num}
      </div>
    </motion.div>
  );
}

function StepContent({
  step,
  align,
}: {
  step: Step;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <h3
        className="text-[11px] font-bold leading-tight text-white md:text-base"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {step.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-[9px] leading-tight text-zinc-400 md:mt-1.5 md:text-xs md:leading-relaxed md:line-clamp-none">
        {step.description}
      </p>
      <div
        className={`mt-1.5 hidden flex-wrap gap-1 md:flex ${align === "right" ? "md:justify-end" : ""}`}
      >
        {step.tools.map((tool) => (
          <ToolBadge key={tool} name={tool} />
        ))}
      </div>
    </div>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const isLeftSide = index % 2 === 0;

  return (
    <RevealBlock>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-6">
        <div>
          {isLeftSide && <StepContent step={step} align="right" />}
        </div>

        <div className="flex items-start justify-center">
          <StepMarker step={step} />
        </div>

        <div>
          {!isLeftSide && <StepContent step={step} align="left" />}
        </div>
      </div>
    </RevealBlock>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24"
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* THE STACK — LogoLoop */}
        <div>
          <RevealBlock>
            <SectionLabel>The Stack</SectionLabel>
          </RevealBlock>

          <div className="mt-6 md:mt-8">
            <LogoLoop
              logos={STACK_LOGOS}
              speed={35}
              direction="left"
              logoHeight={36}
              gap={64}
              fadeOut
              fadeOutColor="#000000"
              fadeWidth={80}
              scaleOnHover
              ariaLabel="Tools I actually use"
            />
          </div>
        </div>

        {/* HOW I WORK Header */}
        <div className="mt-20 md:mt-28">
          <RevealBlock>
            <SectionLabel>How I Work</SectionLabel>

            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2
                className="max-w-2xl text-2xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Research to reality{" "}
                <span
                  className="italic text-emerald-400"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                >
                  no handoff gap.
                </span>
              </h2>

              <p className="max-w-xs text-xs leading-relaxed text-zinc-500 md:text-sm">
                Research feeds design. Design feeds build. Build feeds ship.
                Every step visible, every handoff owned.
              </p>
            </div>
          </RevealBlock>

          {/* Timeline */}
          <div className="relative mt-10 md:mt-14">
            <div className="pointer-events-none absolute left-1/2 top-6 bottom-6 w-px -translate-x-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />

            <div className="space-y-4 md:space-y-14">
              {STEPS.map((step, i) => (
                <StepRow key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
