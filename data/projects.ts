export type Project = {
  slug: string;

  // Card-level content (Projects slider)
  title: string;
  shortDescription: string;
  image?: string;
  tags?: string[];
  caseStudy?: string;
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
      "A production-ready alumni engagement platform designed around clear role-based dashboards.",
    image: "/projects/slu-alumni-connect.png",
    tags: ["UX Research & User Flows","Design Systems","Next.js/React"],
    caseStudy: "/case-studies/slu-alumni-connect",
    status: "Shipped",
    year: "2024",
    demo: "https://slu-alumni-connect-main.vercel.app/",
    source: "https://github.com/Harsha-03/slu-alumni-connect-main",
    featured: true,

    overview:
      "SLU Alumni Connect is a centralized alumni engagement platform designed to replace fragmented spreadsheets and manual workflows with a clear, role-based experience for students, alumni, mentors, and administrators.",

    role: "UI/UX Designer & Frontend Engineer",
    timeframe: "3 months",
    platform: "Web",
    tools: [
      "Figma",
      "UX Research & User Flows",
      "Design Systems",
      "Next.js (App Router)",
      "Python",
      "PostgreSQL",
      "Prisma",
    ],

    problems: [
      "Alumni data was fragmented across spreadsheets and disconnected tools",
      "No clear or intuitive way for students to discover mentors",
      "Manual tracking of events and engagement created operational overhead for administrators",
    ],

    solutions: [
      "Designed a role-based alumni engagement experience tailored to distinct user needs",
      "Created dashboards that support discovery, participation, and administrative oversight",
      "Integrated analytics to surface engagement trends and mentorship activity",
    ],
  },

  {
    slug: "ai-resume-editor",
    title: "AI Resume Editor",
    shortDescription:
      "An AI-powered resume editor designed to make feedback clear and user-controlled.",
    image: "/projects/project_1.png",
    tags: ["UX Flow Design","Python", "Streamlit", "OpenAI"],
    caseStudy: "/case-studies/ai-resume-editor",
    status: "Shipped",
    year: "2024",
    demo: "https://resume-ai-editor-harsha-asapu.streamlit.app/",
    source: "https://github.com/Harsha-03/resume-ai-editor",
    featured: true,

    overview:
      "AI Resume Editor is a UX-focused productivity tool designed to help job seekers understand, improve, and tailor their resumes against job descriptions through clear feedback, transparency, and guided interactions.",

    role: "UI/UX Designer & AI Tooling",
    timeframe: "2 weeks",
    platform: "Web",
    tools: ["UX Flow Design","Python", "Streamlit", "OpenAI API", "Firebase"],

    problems: [
      "Resume tailoring was repetitive, opaque, and time-consuming",
      "Job seekers lacked clear feedback on how resumes perform against ATS systems",
    ],

    solutions: [
      "Designed a transparent resume–job matching flow that highlights gaps and alignment",
      "Built guided resume and cover-letter generation focused on clarity rather than black-box output",
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
  {
    slug: "lifeos",
    title: "LifeOS — Personal Productivity System",
    shortDescription:
      "A behavioral design project exploring how people can manage daily execution and weekly reflection without guilt or performance pressure.",
    image: "/projects/project_2.png",
    tags: ["Product Design", "Behavioral UX", "Figma", "UX Research"],
    caseStudy: "/lifeos-case-study.pdf",
    status: "In Progress",
    year: "2025",
    featured: true,

    overview:
      "LifeOS is a self-initiated product design project targeting students and early-career professionals (20–28) who struggle to align daily actions with long-term priorities. Most productivity tools track activity but don't support decision-making, reflection, or recovery from missed plans.",

    role: "Product Designer",
    timeframe: "Ongoing",
    platform: "Web / Mobile",
    tools: ["Figma", "UX Research", "Behavioral Design", "User Journey Mapping"],

    problems: [
      "Users abandon productivity tools mid-week due to guilt after falling behind",
      "Existing tools optimize for output tracking, not decision quality or recovery",
      "Overplanning and energy fluctuation cause consistent execution failure",
    ],

    solutions: [
      "Designed a weekly focus model capped at 3 priorities to reduce decision fatigue",
      "Built a reflection-first recovery flow so users re-engage without punishment",
      "Created an Insights layer surfacing behavioral patterns, not performance scores",
      "Designed flexible daily execution tied to weekly priorities without forced completion",
    ],
  },
];
