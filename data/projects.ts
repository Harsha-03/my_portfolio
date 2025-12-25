export type Project = {
  slug: string;

  // Card-level content (Projects slider)
  title: string;
  shortDescription: string;
  image?: string;
  tags?: string[];
  status?: "Shipped" | "In Progress";
  year?: string;

  // External links
  demo?: string;
  source?: string;

  // Case study content (modal overlay)
  overview?: string;
  role?: string;
  timeframe?: string;
  platform?: string;
  tools?: string[];

  problems?: string[];
  solutions?: string[];

  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "slu-alumni-connect",
    title: "SLU Alumni Connect",
    shortDescription:
      "A full-stack alumni engagement platform enabling students, alumni, mentors, and administrators to connect through role-based dashboards and analytics.",
    image: "/projects/slu-alumni-connect.png",
    tags: ["Next.js", "React", "Node.js", "Python", "PostgreSQL"],
    status: "Shipped",
    year: "2024",
    demo: "https://slu-alumni-connect-main.vercel.app/",
    source: "https://github.com/Harsha-03/slu-alumni-connect-main",
    featured: true,

    overview:
      "SLU Alumni Connect is a centralized alumni engagement platform built for Saint Louis University. It replaces fragmented spreadsheets and manual workflows with a role-based system for mentorship, events, and analytics.",

    role: "Full-Stack Developer",
    timeframe: "3 months",
    platform: "Web",
    tools: [
      "Next.js (App Router)",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Prisma",
    ],

    problems: [
      "Alumni data was fragmented across spreadsheets and disconnected tools",
      "No structured way for students to discover mentors",
      "Manual tracking of events and engagement by administrators",
    ],

    solutions: [
      "Designed a role-based alumni engagement platform",
      "Built dashboards for students, alumni, and administrators",
      "Implemented analytics to track mentorship and participation",
    ],
  },

  {
    slug: "ai-resume-editor",
    title: "AI Resume Editor",
    shortDescription:
      "An AI-powered resume optimization tool that scores resumes against job descriptions and generates tailored content.",
    image: "/projects/project_1.png",
    tags: ["Python", "Streamlit", "OpenAI", "Firebase"],
    status: "Shipped",
    year: "2024",
    demo: "https://resume-ai-editor-harsha-asapu.streamlit.app/",
    source: "https://github.com/Harsha-03/resume-ai-editor",
    featured: true,

    overview:
      "AI Resume Editor helps job seekers tailor resumes more effectively by matching them against job descriptions and generating optimized content using LLMs.",

    role: "AI Application Developer",
    timeframe: "2 weeks",
    platform: "Web",
    tools: ["Python", "Streamlit", "OpenAI API", "Firebase"],

    problems: [
      "Manual resume tailoring was repetitive and time-consuming",
      "Applicants struggled to optimize resumes for ATS systems",
    ],

    solutions: [
      "Implemented resume–job matching using NLP techniques",
      "Automated resume and cover letter generation using LLMs",
    ],
  },

  {
    slug: "airline-performance-tracker",
    title: "Airline Performance Tracker",
    shortDescription:
      "An interactive Power BI dashboard analyzing flight delays, carrier performance, and on-time metrics using DAX.",
    image: "/projects/project_2.png",
    tags: ["Power BI", "DAX", "SQL", "Data Modeling"],
    status: "Shipped",
    year: "2023",
    source: "https://github.com/Harsha-03/Airplane-Performance-Tracker-PowerBI",
    featured: true,

    overview:
      "This project visualizes airline performance metrics to uncover trends in delays, route efficiency, and carrier reliability.",

    role: "Data Analyst",
    timeframe: "2 weeks",
    platform: "Power BI",
    tools: ["Power BI", "DAX", "SQL"],

    problems: [
      "Raw flight data was difficult to interpret",
      "No consolidated performance view across airlines",
    ],

    solutions: [
      "Built interactive dashboards with drill-down analysis",
      "Created DAX measures for on-time and delay performance",
    ],
  },

  {
    slug: "coming-soon",
    title: "Next Project — Coming Soon",
    shortDescription:
      "A new project is currently in progress. Details will be released soon.",
    image: "/projects/coming_soon.jpg",
    tags: ["In Progress"],
    status: "In Progress",
  },
];
