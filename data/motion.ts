export type MotionPiece = {
  slug: string;
  title: string;
  client: string;
  year: string;
  status: "Shipped" | "In Progress" | "Concept";
  shortDescription: string;
  video: string;
  poster: string;
  tags?: string[];
  // optional case study fields for /motion/[slug] later
  overview?: string;
  role?: string;
  tools?: string[];
};

export const motionPieces: MotionPiece[] = [
  {
    slug: "ted-drewes",
    title: "Ted Drewes — Concrete in Motion",
    client: "Ted Drewes Frozen Custard",
    year: "2025",
    status: "Shipped",
    shortDescription:
      "A short-form motion piece celebrating St. Louis' summer ritual — the upside-down concrete.",
    video: "/motion/ted-drewes.mp4",
    poster: "/motion/ted-drewes-poster.jpg",
    tags: ["Motion Design", "Brand", "After Effects"],
  },
  {
    slug: "nike-displayed",
    title: "Nike — Displayed",
    client: "Nike (Concept)",
    year: "2025",
    status: "Shipped",
    shortDescription:
      "A type-led motion exploration on how Nike products earn their place on the wall, not just the shelf.",
    video: "/motion/nike-displayed.mp4",
    poster: "/motion/nike-displayed-poster.jpg",
    tags: ["Motion Design", "Typography", "Concept"],
  },
  {
    slug: "mclaren-delta",
    title: "McLaren — Delta",
    client: "McLaren (Concept)",
    year: "2026",
    status: "In Progress",
    shortDescription:
      "A motion study on the unseen variable that decides Formula 1 — the delta between intent and execution.",
    video: "/motion/mclaren-delta.mp4",
    poster: "/motion/mclaren-delta-poster.jpg",
    tags: ["Motion Design", "Concept", "F1"],
  },
];