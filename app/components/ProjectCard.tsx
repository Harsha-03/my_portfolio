"use client";

import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onOpen?: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <article
      onClick={() => onOpen?.(project)}
      className="
        group cursor-pointer
        rounded-2xl bg-zinc-800/70 backdrop-blur
        border border-white/10
        overflow-hidden
        transition-transform duration-300 ease-out
        hover:-translate-y-1
        hover:border-white/20
      "
    >
      {/* Image */}
      {project.image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-[1.04]
            "
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.status && (
            <span className="text-xs text-green-400">
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
          {project.shortDescription}
        </p>

        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div
          className="mt-5 flex gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-brand hover:underline"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
