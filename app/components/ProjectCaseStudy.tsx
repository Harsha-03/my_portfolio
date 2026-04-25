"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, FileText } from "lucide-react";
import { Project } from "@/data/projects";

type Props = { project: Project | null; onClose: () => void };

export default function ProjectCaseStudy({ project, onClose }: Props) {
  /* lock scroll + ESC */
  useEffect(() => {
    if (!project) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = orig || "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-start justify-center
                       pointer-events-none"
          >
            <div className="pointer-events-auto relative mt-12 mb-12
                            w-full max-w-4xl max-h-[85vh]
                            overflow-y-auto overscroll-contain
                            rounded-2xl bg-zinc-900
                            border border-white/10
                            shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

              {/* Close */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-5 top-5 z-10
                           h-8 w-8 flex items-center justify-center
                           rounded-full bg-white/8 text-zinc-400
                           hover:text-white hover:bg-white/15 transition-colors"
              >
                <X size={15} />
              </motion.button>

              {/* Hero image */}
              {project.image && (
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t
                                  from-zinc-900 via-zinc-900/40 to-transparent" />
                </div>
              )}

              <div className="px-8 pb-10 pt-6">

                {/* Title + meta */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.status && (
                      <span className={`inline-flex items-center gap-1.5 rounded-full
                                       px-2.5 py-0.5 text-[11px] font-medium
                                       ${project.status === "Shipped"
                                         ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                                         : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                                       }`}>
                        <span className={`h-1.5 w-1.5 rounded-full
                          ${project.status === "Shipped" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`} />
                        {project.status}
                      </span>
                    )}
                    {project.year && (
                      <span className="text-xs text-zinc-600">{project.year}</span>
                    )}
                  </div>

                  <h2
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-500">
                    {project.role      && <span>{project.role}</span>}
                    {project.timeframe && <span>· {project.timeframe}</span>}
                    {project.platform  && <span>· {project.platform}</span>}
                  </div>

                  {/* Quick links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.caseStudy && (
                      <a href={project.caseStudy} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium
                                   text-red-400 hover:text-red-300 transition-colors">
                        <FileText size={14} /> Case Study
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm
                                   text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.source && (
                      <a href={project.source} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm
                                   text-zinc-400 hover:text-white transition-colors">
                        <Github size={14} /> Source Code
                      </a>
                    )}
                  </div>
                </motion.div>

                <div className="mt-8 h-px bg-white/8" />

                {/* Overview */}
                {project.overview && (
                  <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-8"
                  >
                    <h3 className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                      Overview
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {project.overview}
                    </p>
                  </motion.section>
                )}

                {/* Problems + Solutions side by side */}
                {(project.problems?.length || project.solutions?.length) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {project.problems?.length ? (
                      <div>
                        <h3 className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                          Problems
                        </h3>
                        <ul className="space-y-2.5">
                          {project.problems.map((p, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                              <span className="mt-[6px] h-1.5 w-1.5 shrink-0
                                               rounded-full bg-red-500/60" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {project.solutions?.length ? (
                      <div>
                        <h3 className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                          Solutions
                        </h3>
                        <ul className="space-y-2.5">
                          {project.solutions.map((s, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                              <span className="mt-[6px] h-1.5 w-1.5 shrink-0
                                               rounded-full bg-emerald-500/60" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </motion.div>
                )}

                {/* Tools */}
                {project.tools?.length ? (
                  <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-8"
                  >
                    <h3 className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                      Tools & Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool}
                          className="rounded-full bg-white/5 border border-white/8
                                     px-3 py-1 text-xs text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.section>
                ) : null}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}