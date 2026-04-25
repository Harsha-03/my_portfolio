"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = projects.filter((p) => p.featured);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 440 : -440, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs tracking-widest text-brand/80 font-semibold">
              PROJECTS
            </p>
            <h2
              className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Live Projects Portfolio
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg">
              Selected products designed with UX-first thinking and shipped to production.
            </p>
          </div>

          {/* Scroll arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <motion.button
              onClick={() => scroll("left")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="h-9 w-9 flex items-center justify-center
                         rounded-xl border border-white/10 bg-white/5
                         text-zinc-400 hover:text-white hover:bg-white/10
                         transition-colors"
            >
              <ChevronLeft size={16} />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="h-9 w-9 flex items-center justify-center
                         rounded-xl border border-white/10 bg-white/5
                         text-zinc-400 hover:text-white hover:bg-white/10
                         transition-colors"
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Cards — draggable + scrollable */}
        <motion.div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-6
                     cursor-grab active:cursor-grabbing
                     scroll-smooth
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          drag="x"
          dragConstraints={{ right: 0, left: -((featured.length - 1) * 440) }}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[420px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
            >
              <ProjectCard
                project={project}
                onOpen={setActiveProject}
              />
            </motion.div>
          ))}

          {/* Coming soon */}
          <motion.div
            className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[420px]
                       rounded-2xl border border-dashed border-white/15
                       bg-white/3 flex flex-col items-center
                       justify-center text-center px-6 min-h-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: featured.length * 0.1 }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-12 rounded-full border border-white/10
                         bg-white/5 flex items-center justify-center
                         text-zinc-600 text-xl mb-4"
            >
              ✦
            </motion.div>
            <p className="text-xs tracking-widest text-zinc-600 uppercase">Next Project</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-400">Coming Soon</h3>
            <p className="mt-2 text-sm text-zinc-600 max-w-[200px]">
              Actively building. Check back soon.
            </p>
          </motion.div>
        </motion.div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-center text-xs text-zinc-700"
        >
          Drag to explore · or use arrows above
        </motion.p>

      </div>

      {/* Modal */}
      <ProjectCaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}