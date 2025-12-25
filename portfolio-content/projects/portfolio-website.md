# Personal Portfolio Website — Frontend System with RAG Integration

## Overview

This portfolio was designed as a transparent, structured representation of my work—not a static gallery. The site includes an AI assistant that answers questions strictly from documented portfolio content, preventing timeline drift, exaggeration, or hallucinated claims.

---

## Timeline and Context

- **Period:** July 2025 – August 2025
- **Location:** United States
- **Context:** Master’s in Information Systems
- **Status:** Actively maintained

---

## Problem Statement

Traditional portfolios force visitors to infer context from scattered descriptions. That leads to:

- misinterpretation of experience
- timeline confusion
- shallow “buzzword” impressions
- unclear ownership and contribution

The goal was to build a portfolio that explains work **accurately and contextually**, not through marketing.

---

## My Role and Ownership

Full ownership across the system:

- frontend architecture and UI implementation
- content structure and documentation
- AI assistant design and integration (RAG)
- deployment and iteration

---

## Frontend Architecture

- React + Next.js (App Router)
- component-driven layout
- responsive and theme-aware UI
- clear separation between UI and content

Visual design supports usability and clarity rather than being the core product.

---

## RAG Assistant (Generation Control by Design)

The AI assistant uses Retrieval-Augmented Generation (RAG) to avoid hallucinations and keep answers timeline-safe.

Key decisions:

- portfolio knowledge is stored as markdown files
- content is chunked deterministically and embedded
- relevant context is retrieved per question
- the assistant answers strictly from retrieved content (controlled generation)

Outcome:

- accurate, defensible answers
- no fabricated projects or roles
- recruiter-friendly clarity without overclaiming

---

## Deployment and Workflow

- deployed on Vercel
- version-controlled via GitHub
- iterated as projects and experience evolve

---

## Scope Clarification

This is a frontend system + applied AI integration project.
It is not:

- a general-purpose chatbot
- an AI research project
