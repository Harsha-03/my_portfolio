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
    title: "SLU Alumni Connect",
    description:
      "A full-stack alumni engagement platform built for Saint Louis University, enabling students, alumni, mentors, and administrators to connect through role-based dashboards, events, mentorship programs, and analytics.",
    image: "/projects/slu-alumni-connect.png",
    tags: [
      "Next.js (React, App Router)",
      "Python Libraries",
      "NextJS API Routes",
      "Node.js",
    ],
    demo: "https://slu-alumni-connect-main.vercel.app/",
    source: "https://github.com/Harsha-03/slu-alumni-connect",
    featured: true,
  },
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