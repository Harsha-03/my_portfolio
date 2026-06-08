"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = { project: Project; onOpen?: (project: Project) => void };

export default function ProjectCard({ project, onOpen }: Props) {
  const router = useRouter();

  const isInternalCaseStudy =
    !!project.caseStudy &&
    project.caseStudy.startsWith("/") &&
    !project.caseStudy.endsWith(".pdf");

  const handleCardClick = () => {
    if (isInternalCaseStudy && project.caseStudy) {
      router.push(project.caseStudy);
    } else {
      onOpen?.(project);
    }
  };

  return (
    <motion.article
      onClick={handleCardClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group cursor-pointer rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 flex flex-col h-full"
    >
      {project.image && (
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          {project.status && (
            <div className="absolute top-3 right-3">
              <span
                className={
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur " +
                  (project.status === "Shipped"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/15 text-amber-400 border border-amber-500/20")
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

      <div className="p-6 flex flex-col flex-1">
        {/* Eyebrow row matches Starbucks card style */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <p className="text-[10px] tracking-widest text-emerald-400/80 font-semibold uppercase">
            Case Study
          </p>
          {project.year && (
            <span className="text-[10px] text-zinc-600">&middot; {project.year}</span>
          )}
        </div>

        <h3
          className="text-xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>

        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
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

        {/* Push CTA row to bottom — matches Starbucks card pattern */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          {/* Primary CTA: "Read case study →" (mirrors Starbucks hero card) */}
          <div className="flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition-colors">
            <span>Read case study</span>
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              className="inline-flex"
            >
              <ArrowRight size={14} />
            </motion.span>
          </div>

          {/* Secondary external icons — small, no labels, no overlap with primary */}
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="h-7 w-7 flex items-center justify-center rounded-md text-zinc-500 hover:text-blue-400 hover:bg-white/5 transition-colors"
              >
                <ExternalLink size={13} />
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="h-7 w-7 flex items-center justify-center rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Github size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
