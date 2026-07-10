"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Lock,
  Zap,
  Clock,
  Layers,
  Rocket,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";

import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, type Project } from "@/data/projects";
import { RevealBlock, SectionLabel } from "./MotionPattern";

/* — Card display order (top to bottom) — */
const CASE_STUDY_ORDER = [
  "builtintech-delivery",
  "nri-wellbeing",
  "resume-tailor",
  "portfolio",
  "starbucks-mobile-order",
  "lifeos",
  "slu-alumni-connect",
];

type IconName = "zap" | "clock" | "layers" | "rocket" | "check" | "badge";

type CardData = {
  wordmark: string;
  tags: string[];
  headline: string;
  description: string;
  metrics: { value: string; label: string; icon: IconName }[];
  bg: string;
  accent: string;
  isConcept?: boolean;
};

const CARD_COPY: Record<string, CardData> = {
  "builtintech-delivery": {
    wordmark: "BuiltinTech",
    tags: ["Client Work", "Systems Design", "Delivery"],
    headline: "10+ client products, 4 verticals, one delivery pattern.",
    description:
      "Cofounded BuiltinTech in 2023. Drove 80% of client acquisition. Built a repeatable intake to ship pipeline across construction, minerals, fitness, and infrastructure clients.",
    metrics: [
      { value: "10+", label: "Products shipped", icon: "rocket" },
      { value: "4", label: "Verticals delivered", icon: "layers" },
    ],
    bg: "#1A1512",
    accent: "#F59E0B",
  },
  "nri-wellbeing": {
    wordmark: "NRI Wellbeing",
    tags: ["Service Site", "IA", "Frontend"],
    headline: "Services above the fold. Company story below.",
    description:
      "ISO certified services company with 10+ categories. First time visitors needed to find the right service in 30 seconds without reading company history first. Live at nriwellbeing.com since 2022.",
    metrics: [
      { value: "Since 2022", label: "Live 4+ years", icon: "badge" },
      { value: "10+", label: "Service categories", icon: "layers" },
    ],
    bg: "#0F1F26",
    accent: "#22D3EE",
  },
  "resume-tailor": {
    wordmark: "Resume Tailor",
    tags: ["AI Product", "UX", "Shipped"],
    headline: "A tool for people who write their own resumes.",
    description:
      "AI resume tools lose credibility when they over flatter or fabricate. This product makes the gap visible before it rewrites anything. Honest scoring, real ATS checks, files never leave the browser.",
    metrics: [
      { value: "8", label: "Deterministic ATS checks", icon: "check" },
      { value: "Local first", label: "Files never leave browser", icon: "zap" },
    ],
    bg: "#292524",
    accent: "#FCD34D",
  },
  portfolio: {
    wordmark: "harshaasapu.com",
    tags: ["Product", "RAG", "Interaction Design"],
    headline: "A portfolio treated as a product, not a static page.",
    description:
      "Recruiters scan fast. The site has to prove role, judgment, shipped work, and credibility before asking anyone to dig deeper. Grounded RAG assistant, restrained motion, shipped proof.",
    metrics: [
      { value: "8", label: "RAG knowledge files", icon: "layers" },
      { value: "3", label: "Shipped iterations", icon: "rocket" },
    ],
    bg: "#0B0F1A",
    accent: "#93C5FD",
  },
  "starbucks-mobile-order": {
    wordmark: "Starbucks",
    tags: ["Concept", "Interaction", "State Design"],
    headline: "One reusable state card, four downstream surfaces.",
    description:
      "The wait was not the real problem. The anxiety came from not knowing whether the drink was queued, being made, ready, or forgotten. A single reusable state card absorbed all four surfaces. CEO independently named mobile pickup a priority in the Oct 2024 earnings call.",
    metrics: [
      { value: "1", label: "Reusable state card", icon: "layers" },
      { value: "4", label: "Downstream surfaces", icon: "clock" },
    ],
    bg: "#1E3932",
    accent: "#8FD6BD",
    isConcept: true,
  },
  lifeos: {
    wordmark: "LifeOS",
    tags: ["Concept", "Behavioral UX", "Product"],
    headline: "One dashboard scales 1 to 30 habits, no UI re architecture.",
    description:
      "Most tools punish people when plans break. LifeOS assumes the week will change and turns that gap into feedback instead of failure. The interaction pattern absorbs volume without new components.",
    metrics: [
      { value: "1 to 30", label: "Habits, same UI", icon: "layers" },
      { value: "4", label: "Layer behavioral loop", icon: "zap" },
    ],
    bg: "#1E1B4B",
    accent: "#A5B4FC",
    isConcept: true,
  },
  "slu-alumni-connect": {
    wordmark: "SLU Alumni Connect",
    tags: ["Concept", "Multi Role", "Platform"],
    headline: "Four user roles, one platform, no confusion.",
    description:
      "Students, alumni, mentors, and admins needed different answers from the same system. The design challenge was clarity by role. FERPA compliant scope, role based dashboards.",
    metrics: [
      { value: "4", label: "User roles", icon: "layers" },
      { value: "FERPA", label: "Compliant scope", icon: "badge" },
    ],
    bg: "#13294B",
    accent: "#93C5FD",
    isConcept: true,
  },
};

function isInternalCaseStudy(url?: string) {
  return Boolean(url && url.startsWith("/") && !url.endsWith(".pdf"));
}

function iconFor(name: IconName, className = "h-4 w-4") {
  switch (name) {
    case "zap":
      return <Zap className={className} />;
    case "clock":
      return <Clock className={className} />;
    case "layers":
      return <Layers className={className} />;
    case "rocket":
      return <Rocket className={className} />;
    case "check":
      return <CheckCircle className={className} />;
    case "badge":
      return <BadgeCheck className={className} />;
  }
}


function ProjectMedia({
  project,
  wordmark,
  accent,
  sizes,
  className,
  mediaQuery,
}: {
  project: Project;
  wordmark: string;
  accent: string;
  sizes: string;
  className: string;
  mediaQuery: string;
}) {
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const [matchesViewport, setMatchesViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    const updateMatch = () => setMatchesViewport(media.matches);

    updateMatch();
    media.addEventListener("change", updateMatch);

    return () => media.removeEventListener("change", updateMatch);
  }, [mediaQuery]);

  if (project.video && matchesViewport && !videoFailed) {
    return (
      <video
        key={project.video}
        autoPlay={!reduceMotion}
        muted
        loop={!reduceMotion}
        playsInline
        preload="metadata"
        poster={project.image}
        aria-label={`${project.title} website preview`}
        className={className}
        onError={() => setVideoFailed(true)}
      >
        <source src={project.video} type="video/mp4" />
      </video>
    );
  }

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={sizes}
        className={className}
        priority={false}
      />
    );
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center text-sm font-semibold"
      style={{ color: accent }}
    >
      {wordmark}
    </div>
  );
}

/* — Individual card — */
function CaseStudyCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const copy = CARD_COPY[project.slug];
  const hasCaseStudy = isInternalCaseStudy(project.caseStudy);
  const isShipped = project.status === "Shipped";

  if (!copy) return null;

  function handleOpen() {
    onOpen(project);
  }

  const revealDelay = index * 0.09;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{
        duration: 0.55,
        delay: revealDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.article
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Open case study: ${project.title}`}
        initial={{ y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
        whileHover={{
          y: -4,
          boxShadow: `0 24px 48px -24px ${copy.accent}33`,
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
        style={{ willChange: "transform" }}
        className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/60 p-2.5 outline-none transition-colors duration-300 hover:border-white/20 hover:bg-zinc-950/80 focus-visible:ring-2 focus-visible:ring-white/30 cursor-pointer md:p-4"
      >
        {/* — MOBILE: short-wide horizontal layout — */}
        <div className="flex items-stretch gap-3 md:hidden">
          {/* Thumbnail — left */}
          <div
            className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-lg"
            style={{ backgroundColor: copy.bg }}
          >
            <ProjectMedia
              project={project}
              wordmark={copy.wordmark}
              accent={copy.accent}
              sizes="96px"
              className="h-full w-full object-cover transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              mediaQuery="(max-width: 767px)"
            />
          </div>

          {/* Content — right */}
          <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
            {/* Wordmark row */}
            <div className="flex items-center gap-1.5">
              {isShipped ? (
                <motion.span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: copy.accent }}
                  aria-hidden
                  animate={{ opacity: [1, 0.45, 1], scale: [1, 1.35, 1] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ) : (
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full opacity-60"
                  style={{ backgroundColor: copy.accent }}
                  aria-hidden
                />
              )}
              <span className="truncate text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                {copy.wordmark}
              </span>
            </div>

            {/* Headline */}
            <h3
              className="mt-1 line-clamp-2 text-[13px] font-bold leading-snug text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {copy.headline}
            </h3>

            {/* Description + arrow */}
            <div className="mt-1 flex items-end justify-between gap-2">
              <p className="line-clamp-1 flex-1 text-[10px] leading-relaxed text-zinc-500">
                {copy.description}
              </p>
              <motion.span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-zinc-300"
                aria-hidden
                initial={{ x: 0 }}
                whileInView={hasCaseStudy ? { x: [0, 5, 0] } : {}}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: revealDelay + 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {hasCaseStudy ? <ArrowRight size={11} /> : <Lock size={10} />}
              </motion.span>
            </div>
          </div>
        </div>

        {/* — DESKTOP: existing vertical layout — */}
        <div className="hidden md:block">
          {/* Header row — wordmark left, tags right */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              {isShipped ? (
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: copy.accent }}
                  aria-hidden
                  animate={{ opacity: [1, 0.45, 1], scale: [1, 1.35, 1] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ) : (
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full opacity-60"
                  style={{ backgroundColor: copy.accent }}
                  aria-hidden
                />
              )}
              {copy.wordmark}
            </div>

            <div className="flex flex-wrap gap-1">
              {copy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[9px] font-medium tracking-wide text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-lg mb-4"
            style={{ backgroundColor: copy.bg }}
          >
            <ProjectMedia
              project={project}
              wordmark={copy.wordmark}
              accent={copy.accent}
              sizes="45vw"
              className="h-full w-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:brightness-105"
              mediaQuery="(min-width: 768px)"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h3
              className="text-base font-bold leading-snug text-white md:text-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {copy.headline}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-3">
              {copy.description}
            </p>

            <div className="my-4 border-t border-white/10" />

            <div className="grid grid-cols-2 gap-3">
              {copy.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div style={{ color: copy.accent }}>
                    {iconFor(metric.icon, "h-3.5 w-3.5")}
                  </div>
                  <div
                    className="text-sm font-bold leading-tight"
                    style={{ color: copy.accent }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-[10px] leading-tight text-zinc-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-1.5">
                <ActionLink
                  href={project.demo}
                  icon={<ExternalLink size={10} />}
                  label="Live"
                />
                <ActionLink
                  href={project.source}
                  icon={<Github size={10} />}
                  label="Code"
                />
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleOpen();
                }}
                className="group/cta inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white px-3 py-1.5 text-[11px] font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {hasCaseStudy ? "View Case Study" : "View Details"}
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform group-hover/cta:translate-x-0.5">
                  {hasCaseStudy ? <ArrowRight size={11} /> : <Lock size={10} />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ActionLink({
  href,
  icon,
  label,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

/* — Main export — */
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
    <section id="projects" className="relative py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <SectionLabel>Case Studies</SectionLabel>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2
              className="max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Making hidden friction visible.
            </h2>

            <p className="max-w-xs text-xs leading-relaxed text-zinc-500 md:text-sm">
              Real shipped work first. Concepts second. Every card built to
              read without a click.
            </p>
          </div>
        </RevealBlock>

        <div className="mt-8 grid gap-3 md:mt-14 md:grid-cols-2 md:gap-5">
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