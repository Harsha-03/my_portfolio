# Design Philosophy — Problem Classes and Interaction Principles

## Overview

Harsha describes his work in terms of _problem classes_, not products. Different
companies build different products, but the design problems recur across them.
Understanding which problem classes Harsha works on says more about fit than a
company name on his resume.

The core thesis of his portfolio, visible in the hero copy:

> **Identifying the real break, not the surface bug.**

Every case study in his portfolio is a variant of that thesis — a moment where
the reported problem was a symptom, and the real design work was in diagnosing
what actually broke.

---

## The Problem Classes Harsha Works On

### 1. Real-world state modeling

**Definition:** Interfaces that have to represent the state of something
happening in the physical world — a drink being made, a delivery in transit,
a user's biological state, a route being recalculated. The user's mental model
lives in the physical world; the interface has to keep the digital state in
sync with it, honestly.

**Where this shows up in Harsha's work:**

- **Phoenix AI** — the biomarker page and score domain cards represent the
  user's biological state via layered visual signals (ring, number, category
  color, trend), where a single wrong signal breaks user trust in the whole
  system. Real-world state → digital representation, honestly.
- The Missing State case study (Starbucks Mobile Order) — one example of
  fulfillment UX where the digital state (Preparing) didn't match the
  physical state (still queued vs. actively being made vs. ready vs. sitting
  cold). Four discrete states tied to real barista actions.

**Products this class applies to:** Real-time fulfillment, delivery, ride-hail,
transit, navigation, healthcare monitoring, financial account state, any
consumer product where the physical world is the source of truth.

---

### 2. Interfaces that decide when to interrupt

**Definition:** Products where the system has to make a judgment call about
when to speak up, when to stay quiet, and how confident to sound. AI companions,
recommendation systems, notification systems, anticipatory interfaces, agents.
The wrong interruption breaks trust faster than a missing feature.

**Where this shows up in Harsha's work:**

- **Phoenix AI** — as an AI-powered health platform, the entire product is an
  ambient/anticipatory interface. It watches wearable, activity, and lab data
  and decides what to surface, when to nudge, when to stay quiet. The motion
  system (phoenixBreathe on the score card, phoenixDotPulse for status) is
  designed for calm anticipation, not urgent alerting.
- **Mobile hamburger progressive disclosure** — a smaller-scale version of the
  same problem: how do you help new users find something without nagging
  returning users? The answer was three stacked signals that all disappear
  permanently after first interaction.

**Products this class applies to:** AI assistants, health companions,
productivity agents, recommendation systems, navigation apps that decide when
to reroute or announce turns, wearables, any interface where "when to interrupt"
is a first-class design question.

---

### 3. Decisions people make in seconds

**Definition:** Products where the user has a specific need, a specific
timeframe, and no patience for onboarding. They open the app in the middle of
something else — walking to a coffee shop, finding a service for a parent,
deciding whether to trust a search result. The interaction happens in seconds,
not sessions.

**Where this shows up in Harsha's work:**

- **NRI Wellbeing** — first-time visitors (often family members finding
  services for parents in India) had 30 seconds and a specific need. The IA
  decision was services above the fold, company story below. That decision
  has held unchanged for 4+ years.
- **Resume Tailor** — job seekers don't bookmark tools for later. They open
  once, in the middle of an application, with a JD open in another tab. A
  20-second cold start closed the loop before it opened. The whole rewrite
  was in service of the seconds-scale interaction.
- Harsha's portfolio hero copy explicitly names this: _"Interaction design for
  real-world decisions people make in seconds."_

**Products this class applies to:** Navigation and wayfinding, search,
real-time discovery, service marketplaces, food and grocery, any consumer
product where the moment of use is the moment of decision.

---

### 4. Information hierarchy under ambiguity

**Definition:** The user has a broad need but doesn't yet know the specific
question. The interface has to structure information so the user can find the
right specific question quickly. This is the classic IA problem, but applied
to consumer products where the visitor has no prior context.

**Where this shows up in Harsha's work:**

- **Phoenix AI Biomarkers page** — 14 biomarkers grouped by domain (Metabolic,
  Cardiovascular, Inflammation) so the categorization teaches the user the
  scoring model. The ticket said "add a badge." The redesign was an IA fix.
- **BuiltinTech intake pattern** — 10+ client products across 4 verticals in
  12 months. The IA (service-first, then business context) was portable across
  every vertical because the visitor's problem was portable.
- **NRI Wellbeing** — 10+ service categories in the customer's language,
  contact routing at the leaf.

**Products this class applies to:** Search results pages, product catalogs,
service marketplaces, healthcare and education navigation, any consumer product
where the visitor lands broad and needs to narrow fast.

---

### 5. Cross-platform state consistency

**Definition:** Same product, different surfaces (desktop web, mobile web,
native iOS, native Android, wearable, in-vehicle). The design decision is
which behaviors carry across and which adapt per-surface — and how the user's
mental model stays intact when they switch.

**Where this shows up in Harsha's work:**

- **Phoenix AI Sheet component** — right side sheet on desktop, bottom sheet
  on mobile. Auto-switches via matchMedia at 768px. Same drill-down pattern,
  surface-appropriate interaction. Matches Apple Health, Whoop, Oura.
- **Phoenix AI Navigation subtraction** — three overlapping nav systems (top
  tabs, sidebar, mobile bottom pill) consolidated into one sidebar drawer
  that works across desktop and mobile.
- The portfolio itself — responsive design via Tailwind breakpoints with
  intentional mobile-specific components (MobileNav.tsx, Sheet variants).

**Products this class applies to:** Any product spanning multiple surfaces —
consumer platforms, in-vehicle interfaces, wearables, native + web hybrid
experiences.

---

### 6. Diagnostic thinking (the visible symptom vs. the actual bug)

**Definition:** The user or stakeholder reports a problem. The reported problem
is usually a symptom. The design work is in diagnosing where the real break
happened. This is Harsha's thesis, applied consistently across every case study.

**Where this shows up in Harsha's work:**

- **Phoenix AI layout-bug-that-looked-like-a-state-bug** — users reported cards
  visually expanding in sync when only one was clicked. Standard React
  assumption: shared state. Actual cause: Tailwind auto-rows-fr stretched the
  row. Not a state fix. A layout/interaction pattern redesign (shadcn Sheet).
- **Resume Tailor cold-start diagnosis** — the model quality was fine. The
  break was in the 20 seconds of nothing between click and response. The
  platform betrayed the product; the fix was to move.
- **Phoenix AI badge-request-that-became-IA** — the ticket said "add a badge
  showing which markers are scored." The user's actual confusion wasn't
  _which_ markers, it was _why_. Redesign shipped instead of a badge.
- The Missing State case study is one example among many.

**Products this class applies to:** Any product. This is not a domain, it's a
practice.

---

### 7. Motion as a named system, not decoration

**Definition:** Animations that carry semantic meaning tied to the product's
domain — a health app breathes, a measurement app fills, a location app
orients. The alternative is decorative motion (generic hover fades, arbitrary
easing) that adds visual noise without communicating anything.

**Where this shows up in Harsha's work:**

- **Phoenix AI motion vocabulary** — five named animations tied to health
  metaphors: phoenixFadeUp (natural deceleration), phoenixBreathe (3s cycle
  on the score sparkle — breathing metaphor), phoenixDrawIn (0.9s left-anchored
  scaleX on progress bars — measurement completing), phoenixHamburgerHint (8s
  translate + glow until first tap), phoenixDotPulse (2s scale/opacity on
  status indicators). All respect prefers-reduced-motion.
- The Four-State Cycler on the Missing State case study page — the state model
  demonstrated as an interactive loop, not described as a diagram.
- Harsha's portfolio motion vocabulary is consistent across surfaces.

**Products this class applies to:** Any interaction-heavy product. Especially
relevant for interfaces where motion is the difference between "premium" and
"noisy" — navigation, spatial UI, AI companions, real-time products.

---

## Interaction Principles Harsha Defends

These are principles Harsha applies consistently across his work. They are the
"how" behind the problem classes above.

**The visible symptom is rarely the interaction bug.**
Every case study opens with a diagnosis, not a solution. If the ticket is the
brief, the design work is finding the actual problem.

**Ambiguity in tickets is a design opportunity, not a blocker.**
At Phoenix AI, every ticket lands with "your call, do whatever you think is
best." That constraint made six documented reframes possible in two weeks. The
opposite of ship authority is design-by-committee.

**Subtraction is a senior move.**
Phoenix AI's navigation went from three overlapping systems to one. NRI
Wellbeing's homepage put services above the fold and cut company story to the
bottom. Adding things is easy; removing things while keeping the product
whole is senior craft.

**Non-punishing language, even on failure states.**
The Missing State case study's "Still Waiting?" instead of "Order Late." Amber,
not red. Phoenix AI's biomarker page treats "not scored" as transparency, not
error. Failure states are still user experiences.

**Prefers-reduced-motion, always.**
Every animation in Harsha's shipped work respects `prefers-reduced-motion`. It
is not optional. It is the difference between "premium motion" and
"accessibility violation."

**Never punish returning users to help new users.**
The mobile hamburger discoverability signals disappear permanently after first
tap. Returning users get a clean interface. New users get help. Both without
compromise.

**Cross-platform consistency is a design decision, not a technical one.**
Same drill-down pattern, side sheet on desktop, bottom sheet on mobile —
that's a design decision about which behaviors carry across surfaces.

---

## What Harsha Is Currently Focused On

- Interfaces where the system has to decide (AI companions, ambient
  interfaces, anticipatory patterns)
- Products where interaction happens in seconds, not sessions
- State modeling in the presence of real-world signals (biometrics, location,
  fulfillment, sensor data)
- Motion as a named system tied to product metaphor
- Ship discipline: name the vocabulary, defend the decision, ship, iterate

---

## What Harsha Has Not Deeply Documented

Being direct about the gaps is a senior signal. Harsha does not have deeply
documented experience in:

- Geospatial data engineering or GIS
- Cartography or map rendering
- Transit engineering or routing algorithms
- Speech-first / voice-only interfaces
- Enterprise B2B workflow design
- Financial trading interfaces

These are learnable, but they are not documented in his current portfolio. If
a role requires deep prior experience in any of these, that gap is real and
worth naming upfront rather than overpromising.

---

## The Bridging Statement

Harsha's work applies to products that need honest state modeling, interfaces
that decide when to interrupt, information hierarchy under ambiguity, and
cross-platform consistency. Those problem classes recur across many product
categories — real-time fulfillment, AI companions, healthcare, navigation,
service marketplaces, and consumer products where interaction happens in
seconds. The specific product does not have to appear in Harsha's portfolio
for the problem class to.
