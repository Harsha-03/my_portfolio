# Phoenix AI — Six Decisions in Two Weeks

## Overview

Phoenix AI is a live AI-powered health optimization platform at Community
Dreams Foundation. It uses biomarker data, wearable device signals, and
machine learning models to generate personalized health scores, supplement
recommendations, and longevity insights for users.

Harsha is the sole design owner on the platform. Owns the design system,
dashboard architecture, brand cohesion, motion system, and every visible
surface in the product.

- **Live at:** phoenix-cdreams.org
- **Role:** Sole Product & Interaction Designer
- **Timeframe:** 2 weeks intensive (February 2026)
- **Stack:** React + TypeScript + Tailwind + shadcn/ui + Supabase
- **Status:** Live in production

---

## The Working Context

Every ticket landed with either no spec or a one-line brief: "your call, do
whatever you think is best." No PMs in the loop. No wireframes handed down.
Direct ship authority to production. No approval gates.

The thesis of the case study: **ambiguity in tickets is not a blocker — it's
a design opportunity.** Every judgment call, every subtraction, every
reframing is documented as evidence.

---

## Decision 1 — Badge Request Became an IA Overhaul

The product lead requested a small badge on the Biomarkers page showing which
markers fed the overall health score. One-line Slack message.

Harsha shipped the badge — "Used for Score" — but sitting with the page,
realized the ticket was misdiagnosing the actual user problem. Users weren't
confused about _which_ markers were scored. They were confused about _why_.

Redesign shipped:

- Grouped all 14 biomarkers by domain (Metabolic, Cardiovascular, Inflammation)
  so the categorization taught users the health-scoring model
- Added a summary at the top: "8 of 14 used for your score"
- Added an info popover explaining why some markers aren't scored (model
  validation gaps, missing reference ranges)
- Killed the full-row colored status washes and replaced them with a 3px
  colored left border + small status pill on the right — same status
  information, five times more scannable

The ticket said "add a badge." What shipped was an information hierarchy
that solved the actual user question.

---

## Decision 2 — Reconciled Two Conflicting Brand Palettes Without Escalation

The branding lead provided a brand hex palette. The engineering team had a
different HSL-based palette already in production. Two competing color systems
from people senior to Harsha, with no reconciliation process in place.

Harsha's call: derived the entire dark mode from the branding lead's navy.
Mapped background, card, popover, muted, accent, and sidebar-background to
layered navy tokens in index.css. Preserved existing accent tokens where they
aligned. Shipped. Documented reasoning in a follow-up message: "This is what
I did. Here's why. Assume shipping unless you flag a blocker."

Nobody flagged it. The reconciliation is now the standard.

---

## Decision 3 — Diagnosed a Layout Bug That Looked Like a State Bug

Users reported that clicking "View details" on any one domain card visually
expanded every card in the row. Standard React assumption: shared state
across card instances. But the local useState was correctly scoped per-card.

The actual cause: the grid used Tailwind's auto-rows-fr for equal row heights.
When one card expanded, its row stretched, and every card in that row
visually grew with it. **Not a state bug — a layout bug pretending to be a
state bug.**

The fix wasn't a state fix. It was an interaction pattern redesign:

- Replaced the inline Collapsible with a shadcn Sheet component
- Side sheet on desktop (right slide-in), bottom sheet on mobile
- Auto-switches via window.matchMedia("(min-width: 768px)")
- Card stays fixed size. Grid never breaks. Users get more room to read
- Added staggered entrance animations: header → metadata pills (80ms delay) →
  insight body (160ms) → trend chart (240ms)

Matches the drill-down pattern used by Apple Health, Whoop, and Oura.

---

## Decision 4 — Aggressive Navigation Subtraction

Original state: dashboard had five nav items in a top tab row (Data / Labs /
Supplements / Upload / Profile) AND a sidebar with the same five items
(except Labs) AND a mobile bottom pill nav with the same items again. Three
navigation systems for the same destinations.

Harsha's audit revealed most items were duplicated across systems; Labs was
the only genuine gap in the sidebar.

Actions taken:

- Deleted the top tab row from Dashboard.tsx
- Added Labs to the sidebar under Health Data
- Deleted MobileBottomNav from the mobile layout
- Sidebar drawer (via shadcn SidebarTrigger) became the single mobile nav

Result: one navigation system across desktop and mobile, no items lost,
dashboard hero content earned back significant vertical space. Navigation
surface reduced by 60%.

---

## Decision 5 — Progressive Disclosure on the Mobile Hamburger

After deleting the mobile bottom nav, the hamburger became the only entry
point to navigation on mobile. But first-time users often miss the standard
shadcn SidebarTrigger icon.

Solutions considered and rejected:

- Making the icon larger (nags returning users)
- Adding a persistent label (adds visual weight)
- Making the sidebar visible by default on mobile (defeats the purpose of a drawer)

Solution shipped: three stacked discoverability signals, all disappearing
after first tap:

- Swapped the shadcn panel icon for a standard 3-line Menu icon (universal recognition)
- Added a small primary-color dot indicator on the top-right corner (unread-notification pattern)
- Layered a 2-second breathing pulse on the dot + an 8-second nudge animation on the whole icon
- All three signals removed permanently after first hamburger tap, persisted via localStorage

Discoverable for new users. Invisible for returning users. Zero permanent UI noise.

---

## Decision 6 — Motion System Anchored to Health Metaphors

The platform felt visually static. The brief was "add subtle premium animations."
Harsha declined to add generic hover effects and instead built a small named
motion vocabulary tied to health metaphors:

- **phoenixFadeUp** — content rises 8px on entrance with cubic-bezier(0.2, 0.8, 0.2, 1) (natural deceleration)
- **phoenixBreathe** — 3s ease-in-out scale + opacity cycle on the score card sparkle icon (breathing metaphor for a health app)
- **phoenixDrawIn** — 0.9s left-anchored scaleX on progress bars (fills in like a measurement completing)
- **phoenixHamburgerHint** — 8s translate + glow cycle on the hamburger until first tap
- **phoenixDotPulse** — 2s scale/opacity pulse on the dot indicator

All animations respect prefers-reduced-motion via a shared media query.
Staggered animation-delays applied via inline styles for entrance sequences.

The system is small, named, and semantically meaningful. Not a decoration
layer.

---

## Cross-Platform and Accessibility Details

- Three-tier light-mode surface hierarchy: canvas (systemGroupedBackground gray) → card (white) → elevated (white + shadow). Cards visibly lift off canvas.
- Chat FAB positioned with env(safe-area-inset-bottom, 0px) for iOS home indicator handling.
- Sheet component's side-switching uses matchMedia at the same 768px breakpoint as the rest of the layout to avoid rendering inconsistencies.
- Score domain cards use Apple Health's category-identity pattern: card border-left color = domain identity, not domain score. Score is communicated through the ring + number, not through card wash.

---

## What Shipped in Two Weeks

- Full brand alignment shipped across the dashboard in dark and light mode
- Navigation surface area reduced by 60% (three nav systems → one)
- Biomarkers page redesigned with grouped hierarchy + scoring transparency
- Motion system introduced with semantic naming and reduced-motion support
- All work shipped directly to production via Lovable with ship authority.
  No approval gates. No design reviews. Judgment calls made and defended.

---

## What I'd Do Differently

The initial dark mode palette went through two iterations before landing on
the branding lead's navy. Should have gotten brand clarity earlier — a single
30-minute conversation with the branding lead in week one would have saved
the first iteration entirely. Lesson: when two token systems are visibly in
conflict, get the reconciliation conversation on the calendar before shipping
anything against either one.
