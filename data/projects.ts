export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  metric?: string;
  image?: string;
  video?: string;
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
    slug: "phoenix-ai",
    title: "Phoenix AI",
    shortDescription:
      "Biomarker users couldn't tell which of 14 markers drove their score. Now they can, in one glance. Live at phoenix-cdreams.org.",
    metric: "60% reduction in navigation surface area, no items lost",
    image: "/projects/phoenix-ai-cover.webp",
    video: "/projects/phoenix-ai-preview.mp4",
    tags: ["Live Product", "AI Health", "Design System", "Interaction Design"],
    caseStudy: "/case-studies/phoenix-ai",
    demo: "https://phoenix-cdreams.org",
    status: "Live",
    year: "2026",
    featured: true,
    overview:
      "Sole design owner on Phoenix AI, an AI-powered health optimization platform (biomarker data, wearable signals, ML-driven health scores and longevity insights). Over two weeks, shipped a full dashboard redesign, brand cohesion overhaul, and cross-platform navigation consolidation to production. Every ticket came in with either no spec or a one-line brief: 'your call, do whatever you think is best.' Ship authority direct to production. No PMs. No approval gates.",
    role: "Sole Product & Interaction Designer",
    timeframe: "2 weeks intensive · Feb 2026",
    platform: "Web + Mobile",
    tools: ["Figma", "React", "TypeScript", "Tailwind", "shadcn/ui", "Supabase"],
    problems: [
      "Every ticket landed with either no spec or one line of context; every judgment call was mine",
      "Two conflicting brand palettes in production from people senior to me, no reconciliation process",
      "Three overlapping navigation systems across desktop and mobile pointing to the same destinations",
      "Layout bug misdiagnosed as a state bug; users reported cards visually expanding in sync",
      "Platform felt visually static; motion brief was 'add subtle premium animations'",
    ],
    solutions: [
      "Reframed a badge request into an IA overhaul: grouped 14 biomarkers by domain, added scoring transparency summary and popover, killed full-row status washes for a 3px left border + status pill",
      "Reconciled brand palettes without escalation: derived the entire dark mode from the branding lead's navy, mapped all tokens in index.css, documented reasoning after shipping",
      "Diagnosed auto-rows-fr as the real cause of the 'shared state' bug; replaced inline Collapsible with a shadcn Sheet (side sheet desktop, bottom sheet mobile) with staggered entrance animations",
      "Deleted the top tab row and mobile bottom nav, consolidated into a single sidebar system. Navigation surface reduced by 60%. No items lost",
      "Built a named motion vocabulary tied to health metaphors: phoenixFadeUp, phoenixBreathe, phoenixDrawIn, phoenixHamburgerHint, phoenixDotPulse — all respect prefers-reduced-motion",
      "Three stacked discoverability signals on the mobile hamburger (Menu icon swap, primary-color dot, breathing pulse + nudge) all removed permanently after first tap via localStorage",
    ],
  },

  {
    slug: "builtintech-delivery",
    title: "BuiltinTech Client Delivery System",
    shortDescription:
      "Local businesses needed real sites fast, without agency budgets. We delivered 10+ across four verticals in 12 months.",
    metric: "10+ products shipped in 12 months, 80% client acquisition driven",
    image: "/projects/builtintech-cover.webp",
    video: "/projects/builtintech-preview.mp4",
    tags: ["Client Work", "Systems Design", "Delivery", "Frontend"],
    caseStudy: "/case-studies/builtintech-delivery",
    status: "Shipped",
    year: "2023",
    featured: true,
    overview:
      "Cofounded BuiltinTech in January 2023 and delivered 10+ paid client products in 12 months across four verticals. Drove 80% of new client acquisition. The scale came from a repeatable intake to ship pattern, not one off custom work.",
    role: "Cofounder, Product Designer & Frontend Engineer",
    timeframe: "Jan 2023 – Dec 2023",
    platform: "Web",
    tools: ["Figma", "HTML/CSS/JS", "Flask", "Vercel"],
    problems: [
      "Local business clients needed real sites fast, without agency budgets or timelines",
      "Every project starting from scratch would have capped delivery at 3 to 4 clients per year",
      "Different verticals needed the same underlying delivery discipline",
    ],
    solutions: [
      "Designed a six step delivery pattern: intake, IA, design, build, deploy, handoff",
      "Service first IA as the default, applied across every vertical",
      "Reusable component patterns so second and third projects in the same vertical shipped faster",
      "Featured client Dharani Minerals shipped end to end in 2023",
    ],
  },

  {
    slug: "nri-wellbeing",
    title: "NRI Wellbeing Services",
    shortDescription:
      "Family members had 30 seconds to find the right service for a parent in India. So services went above the fold, not company history.",
    metric: "Live since 2022, unchanged",
    image: "/projects/nri-wellbeing-cover.webp",
    video: "/projects/nri-wellbeing-preview.mp4",
    tags: ["UI/UX", "IA", "Service Website", "Frontend"],
    caseStudy: "/case-studies/nri-wellbeing",
    status: "Shipped",
    year: "2022",
    demo: "https://nriwellbeing.com/",
    featured: true,
    overview:
      "First end to end production project. Designed and built nriwellbeing.com for an ISO certified services company serving Non Resident Indians across property, healthcare, logistics, financial, and support services. The IA decision was simple: services above the fold, company story below.",
    role: "UI/UX Designer & Frontend Developer",
    timeframe: "Jan 2022 – Jul 2022",
    platform: "Web",
    tools: ["Figma", "HTML/CSS/JS"],
    problems: [
      "10+ service categories buried behind company history",
      "First time visitors had 30 seconds and a specific need, not time to read who the company was",
      "Cold traffic often family members finding services for parents in India needed to identify the right offering fast",
    ],
    solutions: [
      "Service first homepage with 10+ category cards, one line each in the customer's language",
      "Each category got a dedicated page with contact routing to the right team",
      "Site has run unchanged since 2022",
    ],
  },

  {
    slug: "resume-tailor",
    title: "Resume Tailor",
    shortDescription:
      "AI resume tools over-flatter and hide the real gap. This one shows it before rewriting a word. Files never leave the browser.",
    metric: "Shipped in 2 weeks, local-first parsing",
    image: "/projects/resume-tailor-cover.webp",
    video: "/projects/resume-tailor-preview.mp4",
    tags: ["AI Product", "UX", "Shipped"],
    caseStudy: "/case-studies/resume-tailor",
    demo: "https://resumetailor-liart.vercel.app/",
    source: "https://github.com/Harsha-03/resume-tailor",
    status: "Shipped",
    year: "2026",
    featured: true,
    overview:
      "AI resume tools lose credibility when they over flatter or fabricate. This product makes the gap visible before it rewrites anything. Rebuilt from a Streamlit prototype into a real product around honest scoring, user control, and files that never leave the browser.",
    role: "Product Designer & Frontend Engineer",
    timeframe: "2 weeks",
    platform: "Web",
    tools: ["Next.js", "TypeScript", "OpenAI API", "jsPDF", "Vercel"],
    problems: [
      "Streamlit prototype had a 20 second cold start that killed usage",
      "AI resume tools default to over flattering scores that hide the real gap",
      "Users need honest signal, not fake confidence",
    ],
    solutions: [
      "Rebuilt as a Next.js product with instant load",
      "Honest scoring: covered keywords green, missing keywords amber, never red",
      "8 deterministic ATS checks with visible detail",
      "Local first parsing, files never leave the browser until commit",
    ],
  },

  {
    slug: "portfolio",
    title: "Portfolio",
    shortDescription:
      "A portfolio treated as a product, not a static page. RAG chatbot trained on 8 knowledge files answers recruiter questions inline.",
    image: "/projects/portfolio-cover.webp",
    video: "/projects/portfolio-preview.mp4",
    tags: ["Product", "RAG", "Interaction Design"],
    caseStudy: "/case-studies/portfolio",
    demo: "https://harshaasapu.com",
    status: "Shipped",
    year: "2025",
    featured: true,
    overview:
      "Recruiters scan fast. The site had to prove role, judgment, shipped work, and credibility before asking anyone to dig deeper. Grounded RAG assistant, restrained motion, shipped proof.",
    role: "Product Designer & Frontend Engineer",
    timeframe: "Jul 2025 – ongoing",
    platform: "Web",
    tools: ["Next.js", "TypeScript", "Framer Motion", "OpenAI API", "Vercel"],
    problems: [
      "Recruiters spend seconds on a portfolio, not minutes",
      "Scattered proof across LinkedIn, Behance, Medium, GitHub is not askable",
      "A static page can't answer follow up questions",
    ],
    solutions: [
      "Clear IA, restrained motion, shipped proof visible on landing",
      "Recruiter facing RAG chatbot trained on 8 knowledge files",
      "3 shipped iterations with real usage data",
    ],
  },

  {
    slug: "starbucks-mobile-order",
    title: "Starbucks Mobile Order Redesign",
    shortDescription:
      "The Starbucks app shows a single 'Preparing' state that hides everything. Four discrete states tied to real barista actions replace it. One reusable state card across four surfaces.",
    metric: "Concept — Starbucks CEO named mobile pickup a priority in Oct 2024 earnings call",
    image: "/projects/starbucks-cover.png",
    tags: ["Concept", "Interaction", "State Design"],
    caseStudy: "/case-studies/starbucks-mobile-order",
    status: "Concept",
    year: "2025",
    featured: true,
    overview:
      "The Starbucks app shows a single 'Preparing' state that hides everything. This redesign replaces it with four discrete states tied to real barista actions: In Queue, Being Made, Ready, and Waiting. One reusable state card carried all four surfaces.",
    role: "Product Designer",
    timeframe: "2 weeks",
    platform: "Mobile",
    tools: ["Figma", "Smart Animate", "FigJam"],
    problems: [
      "A single 'Preparing' state hides whether the drink is queued, being made, or sitting cold on the counter",
      "Generic 8 to 12 minute timers detached from real barista actions",
      "No graceful recovery state when drinks sit too long on the counter",
    ],
    solutions: [
      "Four discrete states tied to actual barista actions",
      "A single reusable state card that carries the status story across four screens",
      "Soft state language with amber, not red",
      "Independently validated: Starbucks CEO named mobile order pickup a priority in Oct 2024 earnings call",
    ],
  },

  {
    slug: "lifeos",
    title: "LifeOS",
    shortDescription:
      "Productivity tools treat users as the problem. LifeOS treats reflection as the input, not the failure. One dashboard scales 1 to 30 habits.",
    metric: "Concept — four-layer behavioral loop for the 20-28 age cohort",
    image: "/projects/lifeos-cover.png",
    tags: ["Concept", "Behavioral UX", "Product"],
    caseStudy: "/case-studies/lifeos",
    status: "Concept",
    year: "2025",
    featured: true,
    overview:
      "LifeOS targets students and early career professionals (20–28) who struggle to align daily actions with long term priorities. Built around a four layer loop: Decision, Action, Feedback, Learning. Reflection is the input, not the failure.",
    role: "Product Designer",
    timeframe: "Self initiated, 2025",
    platform: "Web / Mobile",
    tools: ["Figma", "Behavioral Design", "UX Research", "Systems Design"],
    problems: [
      "Productivity tools treat users as the problem",
      "Plans don't survive contact with the week",
      "Existing apps track activity but don't help decide what matters",
    ],
    solutions: [
      "Hard cap of 1 to 3 weekly priorities forces clarity",
      "Every task must link to a priority",
      "Reality Check field reframes missed goals as data",
      "Insights surface only after 3 to 4 weeks, honest empty state instead of fake intelligence",
    ],
  },

  {
    slug: "slu-alumni-connect",
    title: "SLU Alumni Connect",
    shortDescription:
      "Students, alumni, mentors, and admins needed different answers from the same platform. Role-based clarity solved for all four.",
    metric: "Designed for 12k+ alumni ecosystem, FERPA compliant",
    image: "/projects/slu-alumni-connect-cover.webp",
    video: "/projects/slu-alumni-connect-preview.mp4",
    tags: ["Concept", "Multi Role", "Platform"],
    caseStudy: "/case-studies/slu-alumni-connect",
    demo: "https://slu-alumni-connect-main.vercel.app/",
    status: "Live",
    year: "2025",
    featured: true,
    overview:
      "Students, alumni, mentors, and admins needed different answers from the same system. The design challenge was clarity by role. FERPA compliant scope, role based dashboards, designed platform architecture.",
    role: "Product Designer",
    timeframe: "Aug 2025 – Dec 2025",
    platform: "Web",
    tools: ["Figma", "Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    problems: [
      "Students, alumni, mentors, and admins needed different answers from the same platform",
      "Fragmented data across four user types",
      "FERPA compliance required from the start",
    ],
    solutions: [
      "Separate user paths before polishing screens",
      "Role based dashboards with clarity by role",
      "Platform architecture designed for a 12k+ alumni ecosystem",
    ],
  },
];