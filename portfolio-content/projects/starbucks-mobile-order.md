# Starbucks Mobile Order Redesign — UX Case Study

## Overview

A self-initiated 2-week UX redesign project targeting the moment between placing a mobile order and picking it up. The core intervention: replace the single ambiguous "Preparing" status with a four-state model tied to real barista actions.

Published on Behance: behance.net/gallery/250629345/Starbucks-Mobile-Order-Redesign

---

## Timeline

- **Period:** April 2026
- **Duration:** 2 weeks
- **Type:** Self-initiated case study
- **Tools:** Figma, Smart Animate, FigJam

---

## The Problem

The Starbucks app shows "Preparing" — a single state that hides everything happening behind the counter. It looks the same at minute one as it does at minute ten.

In October 2024, incoming Starbucks CEO Brian Niccol named mobile order pickup a turnaround priority on his first earnings call, citing inaccurate wait times and store congestion. Within weeks, the item limit was cut from 15 to 12, and Niccol called the barista-to-customer handoff "the moment of truth."

The user-facing version of that problem: no visibility into whether your drink is queued, being made, sitting cold on the counter, or hasn't started yet.

---

## The Insight

Users don't want a faster app. They want accurate truth about a specific moment — when the barista actually starts their drink.

That moment doesn't exist in the current product. The redesign builds it.

---

## Rejected Ideas

Three ideas were killed before designing:

1. **GPS-triggered pickup notification** — defeats mobile ordering entirely. The drink only starts when you're near the store, which means you're back in the queue.

2. **Queue position counter (Domino's-style)** — Starbucks operations are parallel, not single-file. A barista works three drinks simultaneously across two espresso machines. A literal queue counter would lie.

3. **Live barista cam** — over-engineered, privacy-violating, and the camera doesn't tell you when your drink starts.

---

## The Four-State Model

### State 01: In Queue
Real context: "2 drinks ahead of yours." Progress bar at 25%. No urgency — just confidence.

### State 02: Being Made Now
The screen that didn't exist before. "Maya started your macchiato." Live ripple animation around the drink card. The brewing moment, named and humanized.

### State 03: Ready to Pick Up
Mint accent confirms readiness. Peak-freshness timer. Walking time from user's location.

### State 04: Waiting on the Counter
Amber, not red. Gentle nudge. Free remake offer. The app's job is to keep the customer on Starbucks' side even when something goes wrong.

---

## Design Decisions

- **Inter as Sodo Sans stand-in:** Starbucks' proprietary typeface isn't public. Inter holds the same humanist warmth.
- **Cream backgrounds (#F2F0EB):** Warms the entire app. Editorial restraint over digital sterility.
- **Hairlines, not shadows:** Every card sits on a 1px black-at-6% border.
- **Soft state language:** "Waiting on the counter" not "Order late." Amber, not red.
- **Single state card:** One reusable component carries the status story across four screens. Layout never changes — only the eyebrow, headline, and accent color.

---

## The Motion Moment

Frame 2 → Frame 3 is the only transition that earns animation. When the barista taps "started," the screen morphs: eyebrow rewrites from IN QUEUE to BEING MADE NOW, the progress bar fills, and three concentric green rings pulse outward. Smart Animate handles all of it.

Every other transition is a quiet fade. The brewing moment is the only one that moves — because it's the only one that matters.

---

## What I'd Test Next

- Real barista hardware latency — does the POS event fire in under 5 seconds?
- Sentiment when the Waiting state hits — amber has to feel like Starbucks cares, not like a grade
- Whether the four-state model holds for drive-thru and in-store orders

---

## Industry Validation

Niccol, B. Starbucks Q4 2024 earnings call (Oct 30, 2024). GeekWire.
Niccol, B. Starbucks Q1 2025 earnings call (Jan 28, 2025). Reuters.
Starbucks mobile order item limit reduced from 15 to 12 (Oct 2024). The Independent.
