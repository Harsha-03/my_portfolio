"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectCaseStudy({ project, onClose }: Props) {
  // Lock body scroll only while modal is open
  useEffect(() => {
    if (!project) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original || "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative mt-12 mb-12
          w-full max-w-4xl
          max-h-[85vh]
          overflow-y-auto overscroll-contain
          rounded-2xl bg-zinc-900
          p-8
          animate-in fade-in zoom-in-95
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-zinc-400 hover:text-white transition"
          aria-label="Close case study"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {project.title}
        </h2>

        <div className="mt-2 flex flex-wrap gap-3 text-sm text-zinc-400">
          {project.role && <span>{project.role}</span>}
          {project.timeframe && <span>• {project.timeframe}</span>}
          {project.platform && <span>• {project.platform}</span>}
          {project.year && <span>• {project.year}</span>}
        </div>

        {/* Overview */}
        {project.overview && (
          <section className="mt-10 space-y-2">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p className="text-zinc-400 leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* Problems */}
        {project.problems?.length ? (
          <section className="mt-10 space-y-3">
            <h3 className="text-lg font-semibold">Problems</h3>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              {project.problems.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Solutions */}
        {project.solutions?.length ? (
          <section className="mt-10 space-y-3">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              {project.solutions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Tools */}
        {project.tools?.length ? (
          <section className="mt-10 space-y-3">
            <h3 className="text-lg font-semibold">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
