import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./data/**/*.{ts,tsx,js,json}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6", // electric blue
          green: "#22d3ee",   // cyan/green accent
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 10% 10%, rgba(59,130,246,0.15), transparent), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.12), transparent)",
      },
      fontFamily: {
        // Uses the CSS variable from layout.tsx
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
