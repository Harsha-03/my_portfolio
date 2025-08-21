"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Github, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryLink = project.demo || project.source || "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="
        group
        rounded-3xl border border-zinc-200/30 dark:border-white/10
        bg-white/60 dark:bg-zinc-900/50
        backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)]
        overflow-hidden flex flex-col
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0_28px_80px_-24px_rgba(0,0,0,0.55)]
        hover:border-brand/40
      "
    >
      {/* Image with hover zoom + centered overlay CTA */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-zinc-200/20 to-zinc-500/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            priority={index < 3}
          />
        ) : (
          <div className="absolute inset-0" />
        )}

        {primaryLink !== "#" && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Open project"
          >
            <span className="rounded-2xl px-3.5 py-1.5 text-xs font-semibold bg-zinc-900/80 text-white dark:bg-zinc-100/90 dark:text-zinc-900 ring-1 ring-white/20 backdrop-blur-md">
              Visit Website
            </span>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg md:text-xl font-semibold leading-snug">{project.title}</h3>

          {project.featured && (
            <span className="shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-brand/15 text-brand ring-1 ring-inset ring-brand/30">
              Featured
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Tech pills: force single row (scroll if overflow) */}
        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 -mx-1 px-1 flex flex-nowrap gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
            {project.tags.map((t, i) => (
              <li
                key={i}
                className="
                  inline-flex items-center
                  text-[11px] px-2 py-0.5 rounded-full border
                  border-zinc-300/40 dark:border-white/10
                  text-zinc-700 dark:text-zinc-300
                "
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTAs */}
      <div className="px-6 pb-6 pt-0 flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/40 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-zinc-100/50 dark:hover:bg-white/5 transition"
          >
            <Globe className="h-4 w-4" />
            <span className="text-[13px]">Visit Site</span>
          </a>
        )}

        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/40 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-zinc-100/50 dark:hover:bg_white/5 transition"
          >
            <Github className="h-4 w-4" />
            <span className="text-[13px]">View Code</span>
          </a>
        )}

        {project.learn && (
          <a
            href={project.learn}
            target="_blank"
            rel="noopener"
            className="ml-auto inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-1.5 text-sm font-semibold bg-brand text-white hover:brightness-110 transition"
          >
            <span className="text-[13px]">Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
