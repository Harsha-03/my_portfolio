# Community Dreams Foundation: UI/UX Designer

## Overview

Harsha is the sole design owner on Phoenix AI at Community Dreams Foundation.
Phoenix AI is a live AI-powered health optimization platform that uses biomarker
data, wearable device signals, and machine learning models to generate
personalized health scores, supplement recommendations, and longevity insights.

Live at phoenix-cdreams.org. Built on React + TypeScript + Tailwind + shadcn/ui,
with a Supabase backend for auth, real-time data, and biomarker storage.

This is his current active role.

---

## Timeline and Context

- **Period:** February 2026 – Present
- **Location:** Remote, USA
- **Role:** UI/UX Designer (sole design owner)
- **Product:** Phoenix AI (phoenix-cdreams.org)

---

## The Working Context

Every ticket lands with either no spec or a one-line brief: "your call, do
whatever you think is best." No PMs in the loop. No wireframes handed down.
Direct ship authority to production. No approval gates.

Two weeks in, Harsha had shipped a full dashboard redesign, brand cohesion
overhaul, and cross-platform navigation consolidation on a live product with
real users.

The thesis of the role: ambiguity in tickets is not a blocker. It's a design
opportunity. Every judgment call, every subtraction, every reframing gets
documented and defended.

---

## Six Documented Reframes (Two Weeks)

### 1. Badge request became an information architecture overhaul

The product lead requested a small badge on the Biomarkers page showing which
markers fed the overall health score. Harsha shipped the badge ("Used for
Score"), but sitting with the page, realized the ticket was misdiagnosing the
actual user problem. Users weren't confused about _which_ markers were scored.
They were confused about _why_.

Redesign shipped: grouped all 14 biomarkers by domain (Metabolic,
Cardiovascular, Inflammation), added a summary at the top ("8 of 14 used for
your score"), added an info popover explaining why some markers aren't scored,
and killed the full-row colored status washes in favor of a 3px colored left
border + small status pill on the right: five times more scannable.

### 2. Reconciled two conflicting brand palettes without escalation

The branding lead provided a brand hex palette. The engineering team had a
different HSL-based palette already in production. Two competing color systems
from people senior to Harsha, no reconciliation process in place.

Harsha's call: derived the entire dark mode from the branding lead's navy.
Mapped all tokens in index.css. Preserved existing accent tokens where they
aligned. Shipped. Documented reasoning after: "This is what I did. Here's why.
Assume shipping unless you flag a blocker." Nobody flagged it. The
reconciliation is now the standard.

### 3. Diagnosed a layout bug that looked like a state bug

Users reported that clicking "View details" on any one domain card visually
expanded every card in the row. Standard React assumption: shared state across
card instances. But the local useState was correctly scoped per-card.

The actual cause: the grid used Tailwind's auto-rows-fr for equal row heights.
When one card expanded, its row stretched, and every card in that row visually
grew with it. Not a state bug. A layout bug pretending to be one.

The fix wasn't a state fix. It was an interaction pattern redesign: replaced
the inline Collapsible with a shadcn Sheet component (side sheet on desktop,
bottom sheet on mobile), auto-switching via matchMedia. Card stays fixed size.
Grid never breaks. Matches the drill-down pattern used by Apple Health, Whoop,
and Oura.

### 4. Aggressive navigation subtraction

Original state: dashboard had five nav items in a top tab row AND a sidebar
with the same five items AND a mobile bottom pill nav with the same items
again. Three navigation systems for the same destinations.

Actions: deleted the top tab row from Dashboard, added the one truly missing
item (Labs) to the sidebar, deleted MobileBottomNav from the mobile layout.
Sidebar drawer became the single mobile nav. Result: one navigation system
across desktop and mobile, no items lost, navigation surface reduced by 60%.

### 5. Progressive disclosure on the mobile hamburger

After deleting the mobile bottom nav, the hamburger became the only entry
point to navigation on mobile. But first-time users often miss the standard
sidebar trigger icon.

Solution shipped: three stacked discoverability signals, all disappearing
after first tap: swapped the icon for a standard 3-line Menu icon, added a
primary-color dot indicator (unread-notification pattern), layered a 2-second
breathing pulse on the dot + an 8-second nudge animation on the whole icon.
All three signals removed permanently after first tap, persisted via
localStorage. Discoverable for new users. Invisible for returning users. Zero
permanent UI noise.

### 6. Motion system anchored to health metaphors, not decoration

The brief was "add subtle premium animations." Harsha declined to add generic
hover effects and instead built a small named motion vocabulary:

- **phoenixFadeUp**: content rises 8px on entrance with cubic-bezier(0.2, 0.8, 0.2, 1)
- **phoenixBreathe**: 3s ease-in-out scale + opacity cycle on the score card sparkle (breathing metaphor for a health app)
- **phoenixDrawIn**: 0.9s left-anchored scaleX on progress bars (fills like a measurement completing)
- **phoenixHamburgerHint**: 8s translate + glow cycle on the hamburger until first tap
- **phoenixDotPulse**: 2s scale/opacity pulse on the dot indicator

All animations respect prefers-reduced-motion. The system is small, named,
and semantically meaningful. Not a decoration layer.

---

## Cross-Platform and Accessibility Details

- Three-tier light-mode surface hierarchy: canvas → card → elevated
- Chat FAB positioned with env(safe-area-inset-bottom) for iOS home indicator
- Sheet component's side-switching uses matchMedia at the same 768px breakpoint as the rest of the layout
- Score domain cards use Apple Health's category-identity pattern: card border-left color = domain identity, not domain score

---

## What Shipped in Two Weeks

- Full brand alignment across dashboard in dark and light mode
- Navigation surface area reduced by 60% (three nav systems → one)
- Biomarkers page redesigned with grouped hierarchy + scoring transparency
- Motion system introduced with semantic naming and reduced-motion support
- All work shipped directly to production. No approval gates. No design reviews.

---

## Why This Role Matters

This role demonstrates senior IC design behavior in a real production context:
judgment under ambiguity, ship authority earned and defended, reframing tickets
instead of executing them literally, cross-platform consistency, motion as a
named system, and diagnostic thinking (the layout bug that looked like a state
bug).
