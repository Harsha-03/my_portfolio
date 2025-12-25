"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ComingSoonCard from "./ComingSoonCard";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="text-center text-xs tracking-wide text-brand/80 font-semibold">
          PROJECTS
        </p>

        <h2 className="mt-1 text-center text-3xl md:text-4xl font-extrabold">
          Live Projects Portfolio
        </h2>

        <p className="mt-2 text-center text-sm text-zinc-400 max-w-2xl mx-auto">
          Selected products I’ve designed, built, and shipped.
        </p>

        {/* Horizontal scroll */}
        <div className="mt-12 relative">
          <div className="flex gap-8 overflow-x-auto pb-6">
            {featured.map((project) => (
              <div
                key={project.slug}
                className="shrink-0 w-[85%] sm:w-[70%] md:w-[420px]"
              >
                <ProjectCard
                  project={project}
                  onOpen={setActiveProject}
                />
              </div>
            ))}

            <div className="shrink-0 w-[85%] sm:w-[70%] md:w-[420px]">
              <ComingSoonCard />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectCaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
