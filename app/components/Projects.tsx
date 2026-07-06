"use client";

import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";

import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, type Project } from "@/data/projects";
import { RevealBlock, SectionLabel } from "./MotionPattern";

const CASE_STUDY_ORDER = [
  "starbucks-mobile-order",
  "lifeos",
  "slu-alumni-connect",
  "resume-tailor",
  "airline-performance-tracker",
  "portfolio",
];

const CARD_COLORS: Record<string, { bg: string; accent: string }> = {
  "starbucks-mobile-order": { bg: "#1E3932", accent: "#8FD6BD" },
  lifeos: { bg: "#1E1B4B", accent: "#A5B4FC" },
  "slu-alumni-connect": { bg: "#13294B", accent: "#93C5FD" },
  "resume-tailor": { bg: "#292524", accent: "#FCD34D" },
  "airline-performance-tracker": { bg: "#1E293B", accent: "#7DD3FC" },
  portfolio: { bg: "#0B0F1A", accent: "#93C5FD" },
};

const FALLBACK_COLORS = { bg: "#18181B", accent: "#93C5FD" };

type CaseCopy = {
  eyebrow: string;
  hook: string;
  detail: string;
  decision: string;
  outcome: string;
  signal: string;
};

const CASE_COPY: Record<string, CaseCopy> = {
  "starbucks-mobile-order": {
    eyebrow: "Mobile order",
    hook: "Replacing a vague pickup status with visible truth.",
    detail:
      "The wait was not the real problem. The anxiety came from not knowing whether the drink was queued, being made, ready, or forgotten.",
    decision: "Four real states, tied to the pickup moment.",
    outcome: "More trust between order, wait, and handoff.",
    signal: "hidden wait → visible state",
  },
  lifeos: {
    eyebrow: "Behavioral productivity",
    hook: "A productivity system built around recovery, not guilt.",
    detail:
      "Most tools punish people when plans break. LifeOS assumes the week will change and turns that gap into feedback instead of failure.",
    decision: "Cap priorities and make reflection part of the loop.",
    outcome: "A calmer system for adapting without overcorrecting.",
    signal: "broken plan → useful feedback",
  },
  "slu-alumni-connect": {
    eyebrow: "Alumni platform",
    hook: "Role-based dashboards for fragmented alumni workflows.",
    detail:
      "Students, alumni, mentors, and admins needed different answers from the same system. The design challenge was clarity by role.",
    decision: "Separate user paths before polishing screens.",
    outcome: "A cleaner platform for discovery, engagement, and admin visibility.",
    signal: "fragmented data → role clarity",
  },
  "resume-tailor": {
    eyebrow: "AI career tool",
    hook: "An AI resume product rebuilt around trust and control.",
    detail:
      "AI resume tools lose credibility when they over-flatter or fabricate. This product makes the gap visible before it rewrites anything.",
    decision: "Show covered and missing keywords separately.",
    outcome: "A guided workflow that improves resumes without inventing experience.",
    signal: "unclear fit → honest score",
  },
  "airline-performance-tracker": {
    eyebrow: "Decision dashboard",
    hook: "Turning raw flight data into operational answers.",
    detail:
      "The goal was not more charts. It was helping someone understand reliability, delay patterns, and bottlenecks without fighting the data first.",
    decision: "Overview first, trends second, details when needed.",
    outcome: "A dashboard that supports faster operational decisions.",
    signal: "raw data → decision surface",
  },
  portfolio: {
    eyebrow: "Portfolio system",
    hook: "A portfolio treated as a product, not a static page.",
    detail:
      "Recruiters scan fast. The site has to prove role, judgment, shipped work, and credibility before asking anyone to dig deeper.",
    decision: "Clear IA, restrained motion, shipped proof, and a grounded AI assistant.",
    outcome: "A portfolio that can be browsed, questioned, and verified.",
    signal: "scattered proof → askable system",
  },
};

function isInternalCaseStudy(url?: string) {
  return Boolean(url && url.startsWith("/") && !url.endsWith(".pdf"));
}

function displayTitle(project: Project) {
  return project.slug === "resume-tailor" ? "Resume Tailor" : project.title;
}

function getCopy(project: Project) {
  return (
    CASE_COPY[project.slug] ?? {
      eyebrow: "Case study",
      hook: project.shortDescription,
      detail:
        "A focused product decision designed around clarity, momentum, and real user behavior.",
      decision: "Reduce ambiguity and make the next step easier to understand.",
      outcome: "A clearer path from problem to usable product.",
      signal: "friction → clarity",
    }
  );
}

function getColors(project: Project) {
  return CARD_COLORS[project.slug] ?? FALLBACK_COLORS;
}

function projectInitial(project: Project) {
  if (project.slug === "starbucks-mobile-order") return "S";
  if (project.slug === "slu-alumni-connect") return "SLU";
  if (project.slug === "resume-tailor") return "RT";
  if (project.slug === "airline-performance-tracker") return "A";
  if (project.slug === "portfolio") return "H";
  return displayTitle(project).slice(0, 1);
}

function StatusPill({ status, accent }: { status?: string; accent: string }) {
  if (!status) return null;

  const shipped = status.toLowerCase() === "shipped";

  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[9px] font-medium backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[10px] " +
        (shipped
          ? "border-white/15 bg-black/40 text-white/80"
          : "border-amber-400/30 bg-amber-950 text-amber-300")
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full " +
          (shipped ? "" : "bg-amber-300 animate-pulse")
        }
        style={shipped ? { backgroundColor: accent } : undefined}
      />
      {status}
    </span>
  );
}

function ActionLink({
  href,
  icon,
  label,
}: {
  href?: string;
  icon: ReactNode;
  label: string;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1.5 text-[11px] font-medium text-white/75 transition-colors hover:border-white/30 hover:bg-black/45 hover:text-white sm:px-3 sm:text-xs"
    >
      {icon}
      {label}
    </a>
  );
}

function DesktopProjectIdentity({
  project,
  accent,
}: {
  project: Project;
  accent: string;
}) {
  const copy = getCopy(project);

  return (
    <div className="pointer-events-none absolute left-5 top-4 z-30 hidden max-w-[calc(100%-11rem)] items-center md:flex">
      <div className="min-w-0 rounded-full border border-white/15 bg-black/45 px-4 py-1.5 text-[11px] text-white/70 backdrop-blur-md">
        <span className="font-semibold text-white/90">
          {displayTitle(project)}
        </span>
        <span className="mx-2 text-white/30">/</span>
        <span style={{ color: accent, opacity: 0.85 }}>{copy.signal}</span>
      </div>
    </div>
  );
}

function MobileProjectIdentity({
  project,
  accent,
}: {
  project: Project;
  accent: string;
}) {
  const copy = getCopy(project);

  return (
    <div className="pointer-events-none absolute left-4 right-4 top-14 z-20 flex items-center gap-2 md:hidden">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[10px] font-bold text-white backdrop-blur-md"
        style={{ color: accent }}
      >
        {projectInitial(project)}
      </span>

      <div className="min-w-0 flex-1 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-md">
        <p className="truncate text-[11px] font-semibold leading-none text-white/90">
          {displayTitle(project)}
        </p>
        <p className="mt-1 truncate text-[9px] leading-none text-white/45">
          {copy.eyebrow} · {copy.signal}
        </p>
      </div>
    </div>
  );
}

function CaseStudyCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLead = index === 0;
  const hasCaseStudy = isInternalCaseStudy(project.caseStudy);
  const copy = getCopy(project);
  const colors = getColors(project);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 18%"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2, 0.62, 1], [120, 0, 0, -64]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.62, 1],
    [0.97, 1, 1, 0.94],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.72, 1],
    [0, 1, 1, 0.9],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [3, 0, 0, -2],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [1.06, 1, 1.025],
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [18, 0, 0, -6],
  );
  const dim = useTransform(
    scrollYProgress,
    [0, 0.22, 0.72, 1],
    [0.8, 0.64, 0.64, 0.52],
  );
  const cardFilter = useTransform(
    scrollYProgress,
    [0, 0.2, 0.72, 1],
    [
      "blur(7px) brightness(0.78)",
      "blur(0px) brightness(0.96)",
      "blur(0px) brightness(0.96)",
      "blur(1.25px) brightness(1.08)",
    ],
  );

  function handleOpen() {
    onOpen(project);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  }

  return (
    <div
      id={`case-card-${project.slug}`}
      ref={ref}
      className={
        "relative min-h-[104svh] scroll-mt-24 md:min-h-[118vh] md:scroll-mt-28 " +
        (index === 0 ? "mt-10" : "-mt-[16vh] md:-mt-[42vh]")
      }
      style={{ position: "relative", perspective: "1200px" }}
    >
      <motion.article
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        style={{
          y,
          scale,
          opacity,
          rotateX,
          filter: cardFilter,
          top: `calc(var(--case-card-top) + ${Math.min(index, 5) * 10}px)`,
          zIndex: 20 + index,
          transformStyle: "preserve-3d",
          backgroundColor: colors.bg,
          borderColor: `${colors.accent}${isLead ? "40" : "26"}`,
        }}
        className="group sticky h-[72svh] min-h-[520px] max-h-[640px] overflow-hidden rounded-[1.65rem] border outline-none shadow-2xl shadow-black/55 transition-[box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-white/30 [--case-card-top:4.75rem] md:h-[78vh] md:min-h-[620px] md:max-h-none md:rounded-[2rem] md:[--case-card-top:6.15rem]"
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.bg }}>
          {project.image ? (
            <motion.img
              src={project.image}
              alt={displayTitle(project)}
              style={{ scale: imageScale }}
              className="absolute inset-0 h-full w-full object-cover opacity-70 md:opacity-100"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 70% 30%, ${colors.accent}22, transparent 45%)`,
              }}
            />
          )}

          <motion.div
            style={{ opacity: dim, backgroundColor: colors.bg }}
            className="absolute inset-0"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${colors.bg} 0%, ${colors.bg}D9 52%, ${colors.bg}45 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${colors.bg}E6 0%, transparent 58%, ${colors.bg}38 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 78% 35%, ${colors.accent}24, transparent 36%)`,
            }}
          />
        </div>

        <DesktopProjectIdentity project={project} accent={colors.accent} />

        <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between gap-3 md:left-auto md:right-8 md:top-8">
          <StatusPill status={project.status} accent={colors.accent} />
        </div>

        <MobileProjectIdentity project={project} accent={colors.accent} />

        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex h-full items-center p-4 md:items-end md:p-8 lg:p-10"
        >
          <div
            className={
              (isLead
                ? "max-w-[21rem] sm:max-w-3xl"
                : "max-w-[21rem] sm:max-w-2xl") +
              " w-full rounded-[1.25rem] border border-white/10 bg-black/38 p-4 shadow-2xl shadow-black/45 backdrop-blur-md sm:p-5 md:rounded-[1.65rem] md:p-8 lg:p-10"
            }
          >
            <div className="mb-3 flex flex-wrap items-center gap-1.5 md:mb-5 md:gap-2">
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.2em] md:text-[11px] md:tracking-[0.24em]"
                style={{ color: colors.accent }}
              >
                Case Study
              </p>
              <span className="text-[10px] text-white/30 md:text-xs">
                &middot;
              </span>
              <p className="text-[10px] text-white/55 md:text-xs">
                {copy.eyebrow}
              </p>
              <span className="hidden text-xs text-white/30 sm:inline">
                &middot;
              </span>
              <p className="hidden text-xs text-white/55 sm:block">
                {copy.signal}
              </p>
            </div>

            <h3
              className={
                (isLead
                  ? "text-[1.55rem] sm:text-4xl md:text-5xl lg:text-6xl"
                  : "text-[1.45rem] sm:text-3xl md:text-4xl lg:text-5xl") +
                " font-extrabold leading-[1.03] tracking-tight text-white"
              }
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {displayTitle(project)}
            </h3>

            <div className="mt-3 h-px w-full bg-white/10 md:mt-6" />

            <div className="mt-3 flex flex-wrap gap-1.5 md:mt-5 md:gap-2">
              {project.tags?.slice(0, isLead ? 5 : 4).map((tag, tagIndex) => (
                <span
                  key={tag}
                  className={
                    (tagIndex >= 3 ? "hidden sm:inline-flex " : "inline-flex ") +
                    "rounded-full border border-white/12 bg-white/[0.07] px-2 py-1 text-[10px] text-white/80 md:px-3 md:py-1.5 md:text-xs"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className={
                (isLead
                  ? "text-sm text-white/90 md:text-lg"
                  : "text-sm text-white/85 md:text-base") +
                " mt-3 max-w-2xl font-medium leading-relaxed md:mt-5"
              }
            >
              {copy.hook}
            </p>

            <p className="mt-2 line-clamp-3 max-w-2xl text-[12px] leading-relaxed text-white/55 md:mt-3 md:line-clamp-none md:text-sm">
              {copy.detail}
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2 md:mt-7 md:gap-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-3 md:rounded-2xl md:p-4">
                <p
                  className="text-[9px] font-semibold uppercase tracking-[0.16em] md:text-[10px] md:tracking-[0.18em]"
                  style={{ color: colors.accent, opacity: 0.85 }}
                >
                  Decision
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-white/60 md:mt-2 md:text-xs">
                  {copy.decision}
                </p>
              </div>

              <div className="hidden rounded-xl border border-white/10 bg-black/25 p-3 sm:block md:rounded-2xl md:p-4">
                <p
                  className="text-[9px] font-semibold uppercase tracking-[0.16em] md:text-[10px] md:tracking-[0.18em]"
                  style={{ color: colors.accent, opacity: 0.85 }}
                >
                  Result
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-white/60 md:mt-2 md:text-xs">
                  {copy.outcome}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:mt-8 md:gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <ActionLink
                  href={project.demo}
                  icon={<ExternalLink size={12} />}
                  label="Live"
                />
                <ActionLink
                  href={project.source}
                  icon={<Github size={12} />}
                  label="Code"
                />
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleOpen();
                }}
                className="group/cta inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white px-3 py-2 text-xs font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98] md:gap-3 md:px-4 md:py-2.5 md:text-sm"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform group-hover/cta:translate-x-0.5 md:h-7 md:w-7">
                  {hasCaseStudy ? <ArrowRight size={13} /> : <Lock size={12} />}
                </span>
                {hasCaseStudy ? "View Case Study" : "View Details"}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const router = useRouter();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const caseStudies = useMemo(
    () =>
      CASE_STUDY_ORDER.map((slug) =>
        projects.find((project) => project.slug === slug),
      ).filter((project): project is Project => Boolean(project)),
    [],
  );

  function openProject(project: Project) {
    if (isInternalCaseStudy(project.caseStudy)) {
      router.push(project.caseStudy as string);
      return;
    }

    setActiveProject(project);
  }

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32"
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealBlock className="mx-auto max-w-6xl">
          <SectionLabel>Case Studies</SectionLabel>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="max-w-4xl text-[2.55rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Making hidden friction visible.
            </h2>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-500 md:text-base">
              Solid file cards for the work that shaped my product decisions —
              readable first, layered second.
            </p>
          </div>
        </RevealBlock>

        <div className="mt-16 md:mt-24">
          {caseStudies.map((project, index) => (
            <CaseStudyCard
              key={project.slug}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectCaseStudy
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
