"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, Project } from "@/data/projects";

/* ──────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────*/

function isInternalCS(url?: string) {
  return !!url && url.startsWith("/") && !url.endsWith(".pdf");
}

/* ──────────────────────────────────────────────
   Action button — colored icon, subtle pill
   ──────────────────────────────────────────────*/
type ActionTone = "blue" | "neutral";

function ActionButton({
  tone,
  icon,
  label,
  href,
  onClick,
}: {
  tone: ActionTone;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const toneClasses: Record<ActionTone, string> = {
    blue:    "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/15 hover:border-blue-500/45",
    neutral: "bg-white/5     border-white/15    text-zinc-300 hover:bg-white/10    hover:border-white/25",
  };

  const cls =
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors " +
    toneClasses[tone];

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={cls}
      >
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls} type="button">
      {icon}
      {label}
    </button>
  );
}

/* ──────────────────────────────────────────────
   MOBILE: tall portrait card (Tinder-style)
   ──────────────────────────────────────────────*/
function MobileTallCard({
  project,
  index,
  total,
  onSelect,
}: {
  project: Project;
  index: number;
  total: number;
  onSelect: (p: Project) => void;
}) {
  const hasCS = !!project.caseStudy;
  const hasDemo = !!project.demo;
  const hasSource = !!project.source;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const }}
      onClick={() => onSelect(project)}
      className="relative h-[85vh] min-h-[560px] w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer flex flex-col"
    >
      {/* Card index */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 border border-white/10">
        <span className="text-[10px] tabular-nums text-zinc-400 font-semibold">
          0{index + 1}
        </span>
        <span className="text-[10px] text-zinc-600">/</span>
        <span className="text-[10px] tabular-nums text-zinc-600">
          0{total}
        </span>
      </div>

      {/* Status pill */}
      {project.status && (
        <div className="absolute top-4 left-4 z-20">
          <span
            className={
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium backdrop-blur-md " +
              (project.status === "Shipped"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30")
            }
          >
            <span
              className={
                "h-1.5 w-1.5 rounded-full " +
                (project.status === "Shipped"
                  ? "bg-emerald-400"
                  : "bg-amber-400 animate-pulse")
              }
            />
            {project.status}
          </span>
        </div>
      )}

      {/* Image */}
      {project.image && (
        <div className="relative h-[55%] overflow-hidden bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-zinc-900" />
        </div>
      )}

      {/* Content */}
      <div className="relative flex-1 px-6 pt-5 pb-6 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[10px] tracking-widest text-emerald-400/90 font-semibold uppercase">
            {index === 0 ? "Featured Case Study" : "Case Study"}
          </p>
          {project.year && (
            <span className="text-[10px] text-zinc-600">&middot; {project.year}</span>
          )}
        </div>

        <h3
          className="text-2xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400 border border-white/8"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action row */}
        <div className="mt-auto pt-4 flex items-center justify-between flex-wrap gap-2">
          <div
            className="flex items-center gap-1.5 flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="h-8 w-8 flex items-center justify-center rounded-lg text-blue-400 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/15 transition-colors"
              >
                <ExternalLink size={13} />
              </a>
            )}
            {hasSource && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="h-8 w-8 flex items-center justify-center rounded-lg text-zinc-300 bg-white/5 border border-white/15 hover:bg-white/10 transition-colors"
              >
                <Github size={13} />
              </a>
            )}
          </div>

          {hasCS && (
            <div className="flex items-center gap-1.5 text-sm font-medium text-red-400">
              <span>Read case study</span>
              <ArrowRight size={13} />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ──────────────────────────────────────────────
   DESKTOP: Starbucks-style 2-column hero card
   ──────────────────────────────────────────────*/
function DesktopHeroCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const hasCS = !!project.caseStudy;
  const hasDemo = !!project.demo;
  const hasSource = !!project.source;
  const eyebrow = index === 0 ? "Featured Case Study" : "Case Study";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={() => onSelect(project)}
      className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl hover:border-white/25 hover:shadow-2xl hover:shadow-black/50 transition-[border-color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image side */}
        {project.image && (
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px] overflow-hidden bg-zinc-900">
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-transparent to-transparent" />

            {/* Status pill */}
            {project.status && (
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium backdrop-blur-md " +
                    (project.status === "Shipped"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30")
                  }
                >
                  <span
                    className={
                      "h-1.5 w-1.5 rounded-full " +
                      (project.status === "Shipped"
                        ? "bg-emerald-400"
                        : "bg-amber-400 animate-pulse")
                    }
                  />
                  {project.status}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Content side */}
        <div className="p-8 md:p-10 flex flex-col">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <p className="text-[11px] tracking-widest text-emerald-400/80 font-semibold uppercase">
              {eyebrow}
            </p>
            {project.year && (
              <span className="text-xs text-zinc-600">&middot; {project.year}</span>
            )}
          </div>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tags */}
          {project.tags && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400 border border-white/8"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action row */}
          <div className="mt-auto pt-8 flex items-end justify-between flex-wrap gap-3">
            {/* Left: Live + Code only (Case Study pill removed — "Read case study →" on right is sufficient) */}
            <div className="flex items-center gap-2 flex-wrap">
              {hasDemo && (
                <ActionButton
                  tone="blue"
                  icon={<ExternalLink size={13} />}
                  label="Live"
                  href={project.demo}
                />
              )}
              {hasSource && (
                <ActionButton
                  tone="neutral"
                  icon={<Github size={13} />}
                  label="Code"
                  href={project.source}
                />
              )}
            </div>

            {/* Right: red text link */}
            {hasCS && (
              <div className="flex items-center gap-1.5 text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors">
                <span>Read case study</span>
                <motion.span
                  className="inline-flex"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight size={14} />
                </motion.span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ──────────────────────────────────────────────
   Main Projects section
   ──────────────────────────────────────────────*/
export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const router = useRouter();
  const featured = projects.filter((p) => p.featured);

  const openProject = (project: Project) => {
    if (isInternalCS(project.caseStudy)) {
      router.push(project.caseStudy as string);
    } else {
      setActiveProject(project);
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-widest text-brand/80 font-semibold">PROJECTS</p>
          <h2
            className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Selected Work
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed">
            Product and design projects shipped with UX-first thinking &mdash; research, decisions, and outcomes.
          </p>

          <p className="md:hidden mt-3 text-[10px] tracking-widest text-zinc-600 uppercase flex items-center gap-1.5">
            <span className="h-px w-6 bg-zinc-700" />
            Scroll to explore
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="md:hidden mt-8 flex flex-col gap-5">
          {featured.map((project, i) => (
            <MobileTallCard
              key={project.slug}
              project={project}
              index={i}
              total={featured.length}
              onSelect={openProject}
            />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block space-y-10 mt-10">
          {featured.map((project, i) => (
            <DesktopHeroCard
              key={project.slug}
              project={project}
              index={i}
              onSelect={openProject}
            />
          ))}
        </div>
      </div>

      <ProjectCaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
