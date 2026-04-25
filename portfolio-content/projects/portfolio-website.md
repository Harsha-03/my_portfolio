# Portfolio Website — UX Case Study

## Overview

Harsha designed and shipped his personal portfolio as a production-ready product,
then documented the design decisions as a formal UX case study in Figma.
The case study covers five areas: context, design goals, information architecture,
interaction design, and visual system.

The portfolio itself is a live, shipped product and his primary UX case study.

---

## Context

The portfolio is visited by users under time pressure — hiring managers, designers,
engineers, and collaborators who need to quickly understand who Harsha is,
what he does, and what he has built.

Earlier versions prioritized visual exploration and motion-heavy interactions.
While engaging, this increased cognitive load and made it harder for users to
quickly verify relevance and credibility.

Key mindset shift: designing for comprehension, not impressing.

---

## Problem

Users struggled to quickly understand Harsha's role, experience, and credibility due to:

- Excessive visual noise and animation
- Unclear hierarchy of information
- Limited immediate proof of shipped work
- Friction for users who wanted fast answers before deciding to explore deeper

---

## Design Goals

- Help users understand role and focus within the first 10 seconds
- Reduce cognitive load by simplifying layout, motion, and hierarchy
- Present projects as shipped, verifiable work — not concepts
- Balance personality with clarity, avoiding visual gimmicks

---

## Success Criteria

- Users can quickly identify: what Harsha does, what he has built, what to explore next
- Navigation feels predictable and easy to scan
- Projects communicate outcomes and responsibility, not just visuals
- The portfolio feels stable, intentional, and trustworthy

---

## Information Architecture

Single-page experience with a persistent sidebar for fast scanning and predictable navigation.
Structure: Home (role + positioning) → Projects (shipped work with live proof) →
Experience (background and context) → Skills (grouped and scannable) → Contact (clear CTA).

Single-page navigation chosen to:

- Align with natural scrolling behavior
- Avoid unnecessary page loads and context switching
- Keep users oriented at all times
- Support both quick skims and deeper exploration

---

## Interaction Design — Trust & Verification

**Interaction Problem:** Traditional portfolios rely on self-written descriptions,
forcing users to hunt through sections to verify claims.

**Design Decision:** A conversational RAG assistant that allows users to ask natural
questions about Harsha's work, experience, and background. Responses are strictly
grounded in documented project content to ensure accuracy.

**Why this builds trust:**

- Reduces need to hunt through sections
- Prevents exaggerated or hallucinated answers
- Aligns responses with visible proof
- Supports both quick checks and deeper exploration

---

## Visual System & Restraint

Visual direction intentionally prioritizes clarity, contrast, and restraint over decoration.

Key decisions:

- Dark-first interface for reduced glare and focus
- Limited color palette to reinforce hierarchy
- Subtle motion only where it supports meaning
- Typography chosen for readability over personality

What was removed after deployment:

- Animated backgrounds and glowing elements
- Continuous motion effects
  Reason: they competed with content, increased cognitive load, and distracted from the work.

---

## Tools

- Figma (5-page case study document)
- Next.js, React, Tailwind CSS, TypeScript (implementation)
- OpenAI API + RAG system (portfolio assistant)
- Vercel (deployment)

---

## Status

Live and deployed at harshaasapu.com.
Case study documented in Figma across 5 structured pages.
