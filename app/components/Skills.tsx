"use client";

import { useMemo, useState } from "react";
import { Code2, Brain, Database, MonitorSmartphone, Cloud, Cog } from "lucide-react";

type Cat = {
  key: string;
  label: string; // base label without count
  icon: React.ReactNode;
  items: string[];
};

const RAW_CATS: Cat[] = [
  {
    key: "lang",
    label: "Programming Languages",
    icon: <Code2 className="w-4 h-4" />,
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    key: "ai",
    label: "AI & Machine Learning",
    icon: <Brain className="w-4 h-4" />,
    items: [
      "OpenAI API",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "IBM SPSS",
      "Prompt Engineering",
      // (User list included Flask here too, but we keep it only in Web to avoid repeats)
    ],
  },
  {
    key: "data",
    label: "Data & Visualization",
    icon: <Database className="w-4 h-4" />,
    items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    key: "web",
    label: "Web & App Development",
    icon: <MonitorSmartphone className="w-4 h-4" />,
    items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Bootstrap", "REST APIs", "Flask"],
  },
  {
    key: "cloud",
    label: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    items: ["Firebase", "Vercel", "AWS (basics)", "Azure DevOps", "MySQL"],
  },
  {
    key: "tools",
    label: "Tools & Platforms",
    icon: <Cog className="w-4 h-4" />,
    items: ["Git", "GitHub", "VS Code", "PyCharm", "Trello / JIRA", "Figma (UI/UX design)"],
  },
];

/** Build final categories:
 *  - Dedupe within each category
 *  - Prevent duplicates across categories (first occurrence wins)
 *  - Compute label counts dynamically
 */
const buildCategories = (raw: Cat[]) => {
  const seen = new Set<string>();
  return raw.map((c) => {
    const deduped = Array.from(new Set(c.items)).filter((item) => {
      if (seen.has(item)) return false;
      seen.add(item);
      return true;
    });
    return {
      ...c,
      items: deduped,
      labelWithCount: `${c.label} (${deduped.length})`,
    };
  });
};

export default function Skills() {
  const CATS = useMemo(() => buildCategories(RAW_CATS), []);
  const [active, setActive] = useState<Cat["key"]>("lang");
  const current = CATS.find((c) => c.key === active)!;

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="text-center text-sm tracking-widest text-blue-500 font-semibold">SKILLS</p>
        <h2 className="text-center text-3xl font-extrabold mt-2">Technical Expertise</h2>

        {/* Category chips */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-2.5"
          role="tablist"
          aria-label="Skill categories"
        >
          {CATS.map((cat) => {
            const selected = cat.key === active;
            return (
              <button
                key={cat.key}
                id={`tab-${cat.key}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${cat.key}`}
                onClick={() => setActive(cat.key)}
                className={[
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full transition text-[13px]",
                  "ring-1",
                  selected
                    ? "bg-blue-600 text-white ring-blue-500 shadow-[0_0_0_3px_rgba(37,99,235,.25)]"
                    : "text-zinc-700 dark:text-zinc-300 bg-zinc-900/10 dark:bg-white/10 ring-black/10 dark:ring-white/10 hover:bg-zinc-900/15 dark:hover:bg-white/15",
                ].join(" ")}
              >
                {cat.icon}
                <span className="whitespace-nowrap">{cat.labelWithCount}</span>
              </button>
            );
          })}
        </div>

        {/* Panel container */}
        <div
          id={`panel-${current.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.key}`}
          className="mt-8 rounded-3xl p-5 sm:p-6 bg-white/6 dark:bg-zinc-900/60 backdrop-blur ring-1 ring-black/10 dark:ring-white/10"
        >
          {/* Grid of pill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {current.items.map((item) => (
              <div
                key={`${current.key}-${item}`}
                className="
                  group rounded-2xl
                  px-5 py-4
                  bg-zinc-900/35 dark:bg-white/5
                  ring-1 ring-white/10
                  shadow-[inset_0_1px_0_rgba(255,255,255,.04)]
                  hover:ring-white/20 hover:-translate-y-0.5
                  transition
                "
              >
                <div className="flex items-center gap-3 text-zinc-100">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.15)]" />
                  <span className="font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
