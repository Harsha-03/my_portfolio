"use client";

import { useMemo, useState } from "react";
import {
  Code2,
  Brain,
  Database,
  MonitorSmartphone,
  Cloud,
  Cog,
  Server,
  Terminal,
  BarChart3,
} from "lucide-react";

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFlask,
  SiOpenai,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiTableau,
  SiFirebase,
  SiVercel,
  SiGit,
  SiGithub,
  SiPycharm,
  SiFigma,
  SiNotion,
  SiCanva,
  SiFramer,
  SiAdobe,
} from "react-icons/si";

/* ---------------- TYPES ---------------- */

type Cat = {
  key: string;
  label: string;
  icon: React.ReactNode;
  items: string[];
};

/* ---------------- ICON MAP ---------------- */

const ICONS: Record<string, JSX.Element> = {
  Python: <SiPython />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  SQL: <SiMysql />,
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  Flask: <SiFlask />,
  "OpenAI API": <SiOpenai />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  "Scikit-learn": <SiScikitlearn />,
  Streamlit: <SiStreamlit />,
  Tableau: <SiTableau />,
  Firebase: <SiFirebase />,
  Vercel: <SiVercel />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  PyCharm: <SiPycharm />,
  Figma: <SiFigma />,
  Notion: <SiNotion />,
  Canva: <SiCanva />,
  Framer: <SiFramer />,
  "Adobe XD": <SiAdobe />,

  // Neutral / system icons
  "Power BI": <BarChart3 />,
  "AWS (basics)": <Server />,
  "Azure DevOps": <Cloud />,
  "VS Code": <Terminal />,
};

/* ---------------- CATEGORIES ---------------- */

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
    items: ["OpenAI API", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
  },
  {
    key: "data",
    label: "Data & Visualization",
    icon: <Database className="w-4 h-4" />,
    items: ["Power BI", "Tableau"],
  },
  {
    key: "web",
    label: "Web & App Development",
    icon: <MonitorSmartphone className="w-4 h-4" />,
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Bootstrap",
      "Flask",
    ],
  },
  {
    key: "cloud",
    label: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    items: ["Firebase", "Vercel", "AWS (basics)", "Azure DevOps"],
  },
  {
    key: "tools",
    label: "Tools & Platforms",
    icon: <Cog className="w-4 h-4" />,
    items: [
      "Figma",
      "Framer",
      "Canva",
      "Notion",
      "Adobe XD",
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
    ],
  },
];

const buildCategories = (raw: Cat[]) =>
  raw.map((c) => ({
    ...c,
    labelWithCount: `${c.label} (${c.items.length})`,
  }));

/* ---------------- COMPONENT ---------------- */

export default function Skills() {
  const CATS = useMemo(() => buildCategories(RAW_CATS), []);
  const [active, setActive] = useState("lang");
  const current = CATS.find((c) => c.key === active)!;

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="text-center text-sm tracking-widest text-blue-500 font-semibold">
          SKILLS
        </p>
        <h2 className="text-center text-3xl font-extrabold mt-2">
          Technical Expertise
        </h2>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {CATS.map((cat) => {
            const selected = cat.key === active;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] ring-1 transition ${
                  selected
                    ? "bg-blue-600 text-white ring-blue-500 shadow-[0_0_0_3px_rgba(37,99,235,.25)]"
                    : "text-zinc-300 bg-white/10 ring-white/10 hover:bg-white/15"
                }`}
              >
                {cat.icon}
                {cat.labelWithCount}
              </button>
            );
          })}
        </div>

        {/* Skills */}
        <div className="mt-14 flex justify-center">
          <div
            key={active}
            className="skills-fade grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20 w-fit"
          >
            {current.items.map((item, i) => (
              <div
                key={item}
                className="skill-orbit flex items-center gap-6"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <span className="skill-icon text-blue-500 text-xl">
                  {ICONS[item] ?? <Code2 />}
                </span>
                <span className="skill-text font-medium whitespace-nowrap text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        /* Fade on category switch */
        .skills-fade {
          animation: fade 0.35s ease both;
        }

        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Orbital drift (icons only) */
        .skill-orbit {
          animation: orbit 7s ease-in-out infinite;
        }

        @keyframes orbit {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(6px, -4px);
          }
          50% {
            transform: translate(0px, -8px);
          }
          75% {
            transform: translate(-6px, -4px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }

        /* Soft glow breathing */
        .skill-icon {
          animation: glow 6s ease-in-out infinite;
        }

        @keyframes glow {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(59, 130, 246, 0));
          }
          50% {
            transform: scale(1.18);
            filter: drop-shadow(0 0 22px rgba(59, 130, 246, 0.65));
          }
        }
      `}</style>
    </section>
  );
}
