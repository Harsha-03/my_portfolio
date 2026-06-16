export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;
  tags?: string[];
  caseStudy?: string;
  status?: string;
  year?: string;
  demo?: string;
  source?: string;
  featured?: boolean;
  overview?: string;
  role?: string;
  timeframe?: string;
  platform?: string;
  tools?: string[];
  problems?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    slug: "starbucks-mobile-order",
    title: "Starbucks Mobile Order Redesign",
    shortDescription:
      "Replacing \"Preparing\" with state visibility tied to real barista actions. A four-state model for the moment between order and pickup.",
    image: "/projects/starbucks-cover.png",
    tags: ["UX", "Product Design", "Mobile App", "Smart Animate"],
    caseStudy: "/case-studies/starbucks-mobile-order",
    status: "Shipped",
    year: "2025",
    featured: true,
    overview:
      "The Starbucks app shows \"Preparing\" — a single state that hides everything. This redesign replaces it with four discrete states tied to real barista actions: In Queue, Being Made, Ready, and Waiting.",
    role: "Product Designer",
    timeframe: "2 weeks",
    platform: "Mobile",
    tools: ["Figma", "Smart Animate", "FigJam"],
    problems: [
      "A single 'Preparing' state hides whether the drink is queued, being made, or sitting cold on the counter",
      "Generic 8–12 minute timers detached from real barista actions",
      "No graceful recovery state when drinks sit too long on the counter",
    ],
    solutions: [
      "Four discrete states tied to actual barista actions (Queue → Started → Ready → Waiting)",
      "A single reusable state card that carries the status story across four screens",
      "Soft state language with amber, not red — a free remake offer instead of a guilt trip",
    ],
  },

  {
    slug: "lifeos",
    title: "LifeOS",
    shortDescription:
      "A productivity system built on adaptation, not motivation. Four layers that turn reflection into the input — not the failure.",
    image: "/projects/lifeos-cover.png",
    tags: ["Product Design", "Behavioral UX", "Web App", "Figma"],
    caseStudy: "/case-studies/lifeos",
    status: "Shipped",
    year: "2025",
    featured: true,
    overview:
      "LifeOS targets students and early-career professionals (20–28) who struggle to align daily actions with long-term priorities. Built around a four-layer loop — Decision, Action, Feedback, Learning — where reflection is the input, not the failure.",
    role: "Product Designer",
    timeframe: "Self-initiated, 2025",
    platform: "Web / Mobile",
    tools: ["Figma", "Behavioral Design", "UX Research", "Systems Design"],
    problems: [
      "Productivity tools treat users as the problem — adding streaks and pressure instead of adapting to reality",
      "Plans don't survive contact with the week — workload changes, energy dips, meetings appear",
      "Existing apps track activity but don't help decide what matters or adapt across cycles",
    ],
    solutions: [
      "Hard cap of 1–3 weekly priorities forces clarity and prevents overcommitment",
      "Every task must link to a priority — no orphan to-dos, no decoupled lists",
      "\"Reality Check\" field reframes missed goals as data: workload, meetings, energy",
      "Insights surface only after 3–4 weeks — honest empty state instead of fake intelligence on day one",
    ],
  },

  {
    slug: "slu-alumni-connect",
    title: "SLU Alumni Connect",
    shortDescription:
      "A production-ready alumni engagement platform designed around clear role-based dashboards.",
    image: "/projects/slu-alumni-connect.png",
    tags: ["UX Research & User Flows", "Design Systems", "Next.js/React"],
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
    tools: ["Figma", "UX Research & User Flows", "Design Systems", "Next.js (App Router)", "Python", "PostgreSQL", "Prisma"],
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
    slug: "resume-tailor",
    title: "Resume Tailor",
    shortDescription:
      "An AI resume tool rebuilt from a Streamlit prototype into a real product, with honest scoring and an output that doesn't read like AI wrote it.",
    image: "/projects/resume-tailor-cover.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "Product Design"],
    caseStudy: "/case-studies/resume-tailor",
    status: "Shipped",
    year: "2026",
    demo: "https://resumetailor-liart.vercel.app/",
    source: "https://github.com/Harsha-03/resume-tailor",
    featured: true,
    overview:
      "Resume Tailor is an AI-powered resume tailoring product, rebuilt from a sleeping Streamlit prototype into a Next.js product on Vercel. It matches resumes to job descriptions honestly, surfaces real gaps instead of flattering scores, and exports tailored DOCX and PDF files that read like a person wrote them.",
    role: "Product Designer & Builder",
    timeframe: "2 weeks",
    platform: "Web",
    tools: ["Next.js", "TypeScript", "Tailwind", "OpenAI", "Upstash Redis", "jsPDF", "Vercel"],
    problems: [
      "The original Streamlit prototype slept after 24 hours and broke trust on first click",
      "Existing AI resume tools either fabricated keywords or hid the real gap behind a flattering score",
      "AI-generated resumes carried visual tells (em dashes, generic phrasing) that recruiters now filter on",
    ],
    solutions: [
      "Rebuilt on Next.js + Vercel with serverless functions, eliminating cold-start failure entirely",
      "Designed honest scoring with legitimate reframing: bridge JD vocabulary gaps without inventing skills",
      "Built three layers of em-dash defense (prompt + post-process + renderer) so output reads human-written",
      "Local-first PDF parsing so the resume never leaves the browser until the user clicks Tailor",
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
    slug: "portfolio",
    title: "This Portfolio",
    shortDescription:
      "Three phases from a static page to a production-grade AI-powered design showcase. RAG chatbot, draggable UI, and a design language built from scratch.",
    image: "/og-image.png",
    tags: ["Product Design", "Next.js", "Framer Motion", "RAG / OpenAI"],
    caseStudy: "/case-studies/portfolio",
    status: "Shipped",
    year: "2025",
    demo: "https://harshaasapu.com",
    source: "https://github.com/Harsha-03",
    featured: true,
    overview:
      "Designing your own portfolio is the hardest brief. This is how I went from a static page to a production system with a live AI chatbot, draggable UI, and an editorial design language — across three distinct phases.",
    role: "Designer + Engineer",
    timeframe: "2024 – Present",
    platform: "Web",
    tools: ["Next.js", "TypeScript", "Framer Motion", "OpenAI", "Tailwind CSS", "Vercel"],
    problems: [
      "Phase 1 shipped something but said nothing — no personality, no proof of capability",
      "Phase 2 worked on desktop and broke on mobile — functionally, not just visually",
      "The RAG chatbot covered content on certain screen sizes with no way to move it",
    ],
    solutions: [
      "Dark editorial design language built from first principles — restraint over maximalism",
      "Custom RAG chatbot trained on portfolio content — proves technical capability without a skills list",
      "Draggable corner-snapping chat widget with localStorage persistence",
      "Full mobile-first rebuild at 375px — different components for mobile and desktop, not overrides",
    ],
  },
];
