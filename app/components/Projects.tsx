"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Overline */}
        <p className="text-center text-xs md:text-sm tracking-wide text-brand/80 font-semibold">
          PROJECTS
        </p>

        {/* Title + subtitle */}
        <h2 className="mt-1 text-center text-3xl md:text-4xl font-extrabold">
          Live Projects Portfolio
        </h2>
        <p className="mt-2 text-center text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          All projects are deployed and ready to explore
        </p>

        {/* Grid: 3 per row on large screens */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
