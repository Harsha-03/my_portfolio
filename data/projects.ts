export type Project = {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  demo?: string;
  source?: string;
  learn?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Resume Editor",
    description:
      "Tailors resumes to job descriptions, scores matches, and generates cover letters using LLMs.",
    image: "/projects/project_1.png",
    tags: ["Python", "Streamlit", "OpenAI", "Firebase"],
    demo: "https://resume-ai-editor-harsha-asapu.streamlit.app/",
    source: "https://github.com/Harsha-03/resume-ai-editor",
    featured: true,
  },
  {
    title: "Airline Performance Tracker (Power BI)",
    description:
      "Interactive Power BI dashboard analyzing flights, delays, carriers, and on‑time performance with DAX measures.",
    image: "/projects/project_2.png",
    tags: ["Power BI", "DAX", "Data Modeling", "SQL"],
    source: "https://github.com/Harsha-03/Airplane-Performance-Tracker-PowerBI",
    featured: true,
  },
  {
    title: "Next Project — Coming Soon",
    description:
      "A new build is in the works. Check back soon for the live demo and code.",
    image: "/projects/coming_soon.jpg",
    tags: ["In Progress"],
  },
];