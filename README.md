# Harsha Asapu — Portfolio

**Live:** [harshaasapu.com](https://harshaasapu.com)

A production-deployed personal portfolio and design showcase. Built as a product, not a template — every component was designed and engineered from scratch.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion
- **Icons:** Lucide React + React Icons
- **AI / Chat:** RAG system — OpenAI GPT-4.1-mini + text-embedding-3-small, custom knowledge base
- **Deployment:** Vercel (GitHub → CI/CD)

---

## Features

### RAG-Powered Portfolio Chatbot
Custom AI assistant trained on 8 markdown knowledge files covering career history, projects, UX process, and open-to-work status. Answers are grounded in real content — no hallucination. The chatbot is a draggable widget that corner-snaps on release and persists position in localStorage.

### Case Studies
Deep, chapter-structured case studies for each project — research, decisions, rejected ideas, and what to test next. Currently live:
- Starbucks Mobile Order Redesign
- LifeOS
- SLU Alumni Connect
- This Portfolio

### Motion System
Framer Motion throughout — scroll-tied parallax, staggered entrance animations, spring-physics interactions. Skills section uses a horizontal carousel (desktop) and vertical stacked phases (mobile) with hover-to-reveal project context.

### Mobile-First Architecture
Full mobile redesign at 375px as primary viewport. Mobile and desktop project cards are distinct components, not the same component with responsive overrides. MobileNav drawer with profile photo, signature font, open-to-work pill, live time, and social links.

### Design Language
Dark Depth: `#0a0a0a` canvas, indigo accents, hairline borders. Typography: Bricolage Grotesque (headings), Figtree (body), Instrument Serif (editorial), Pinyon Script (signature). Editorial restraint over maximalism.

---

## Project Structure

```
app/
  components/       # All UI components
  case-studies/     # Deep case study pages
  motion/           # Motion design gallery
  api/chat/         # RAG chat API route
data/
  projects.ts       # Project data
  motion.ts         # Motion piece data
portfolio-content/  # Markdown knowledge base for RAG
public/
  case-studies/     # Screen images per project
  projects/         # Project cover images
  images/           # Profile, AI agent, OG image
```

---

## Local Development

```bash
npm install
npm run dev
```

Requires `.env.local` with:
```
OPENAI_API_KEY=your_key
```

To re-ingest RAG embeddings after updating portfolio-content:
```bash
node scripts/ingest-portfolio.js
```

---

## Positioning

Product Designer who codes. Junior/associate level. Open to full-time remote roles — UI/UX Design, Product Design, Web Design. OPT authorized, Reno Nevada.
