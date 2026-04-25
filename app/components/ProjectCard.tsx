"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = { project: Project; onOpen?: (project: Project) => void };

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.article
      onClick={() => onOpen?.(project)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group cursor-pointer rounded-2xl
                 bg-zinc-800/70 backdrop-blur
                 border border-white/10
                 overflow-hidden
                 hover:border-white/20
                 transition-colors duration-300"
    >
      {/* Image */}
      {project.image && (
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          {/* Status badge over image */}
          {project.status && (
            <div className="absolute top-3 right-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full
                               px-2.5 py-1 text-[11px] font-medium backdrop-blur
                               ${project.status === "Shipped"
                                 ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                                 : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                               }`}>
                <span className={`h-1.5 w-1.5 rounded-full
                  ${project.status === "Shipped" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`}
                />
                {project.status}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>
          {project.year && (
            <span className="text-xs text-zinc-600 shrink-0">{project.year}</span>
          )}
        </div>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag}
                className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-400
                           border border-white/8">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA row */}
        <div className="mt-5 flex items-center justify-between">
          <div
            className="flex gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {project.caseStudy && (
              <a href={project.caseStudy} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium
                           text-red-400 hover:text-red-300 transition-colors">
                <FileText size={13} /> Case Study
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-blue-400
                           hover:text-blue-300 transition-colors">
                <ExternalLink size={13} /> Live
              </a>
            )}
            {project.source && (
              <a href={project.source} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-400
                           hover:text-white transition-colors">
                <Github size={13} /> Code
              </a>
            )}
          </div>

          {/* Explore CTA */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); onOpen?.(project); }}
            className="flex items-center gap-1 text-xs text-zinc-500
                       hover:text-white transition-colors group/btn"
            whileHover="hovered"
          >
            Explore
            <motion.span
              variants={{ hovered: { x: 3 } }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={12} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}