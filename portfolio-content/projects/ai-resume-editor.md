# Resume Tailor — AI Resume Tailoring Product

## Overview

Resume Tailor is an AI-powered resume tailoring product built by Harsha Asapu.

The project started as an earlier Streamlit prototype called AI Resume Editor, but was later rebuilt into a polished Next.js product because the original version solved the functional problem but not the product experience problem.

The current version is Resume Tailor: a faster, more refined, production-ready job-hunting tool that helps users compare a resume against a job description, understand alignment gaps, rewrite content responsibly, and export clean DOCX/PDF resumes.

---

## Current Product

* **Name:** Resume Tailor
* **Live app:** https://resumetailor-liart.vercel.app/
* **Role:** Product Designer + Builder
* **Platform:** Web
* **Status:** Shipped
* **Stack:** Next.js, TypeScript, Tailwind CSS, OpenAI API, jsPDF, docx, Vercel
* **Original prototype:** AI Resume Editor built in Streamlit

---

## Why It Was Rebuilt

The old AI Resume Editor worked as a prototype, but it had major product limitations.

The original Streamlit version could analyze resumes and generate AI suggestions, but it felt like a tool demo rather than a polished product. It also had cold-start issues where the app could sleep before a recruiter or job seeker opened it.

That created a trust problem.

A resume tool needs to be available exactly when the user is applying to a job. If the first interaction is a delay, a wake-up screen, or an MVP-looking interface, the product loses credibility before the user even starts.

Harsha rebuilt the product from the ground up as Resume Tailor to improve speed, trust, structure, visual quality, and the overall user experience.

---

## Problem Statement

Most AI resume tools either give generic advice, over-flatter users with inflated scores, or rewrite resumes in a way that sounds obviously AI-generated.

The real problem is not just resume rewriting. The real problem is helping users understand the gap between their current resume and the job they are applying for without inventing experience they do not have.

Resume Tailor was designed around honest alignment, user control, and clean output.

---

## Product Design Goals

The main design goals were:

* make resume tailoring feel guided instead of overwhelming
* show honest match results instead of fake confidence
* identify covered and missing keywords clearly
* help users reframe existing experience without fabricating skills
* make AI output feel human-written, not obviously AI-generated
* support downloadable DOCX and PDF exports
* create a product-quality interface instead of a prototype-looking tool
* align the tool with Harsha's portfolio visual and technical standard

---

## Core User Flow

The Resume Tailor workflow follows a clear sequence:

1. Upload resume
2. Paste job description
3. Analyze resume-to-job alignment
4. View match score, covered keywords, missing keywords, and suggestions
5. Generate tailored resume content
6. Validate output with ATS-style checks
7. Preview tailored resume
8. Download DOCX or PDF
9. Optionally generate a cover letter

The flow is designed to reduce decision fatigue. The user should always know what to do next.

---

## Key Design Decisions

### Honest Scoring

Resume Tailor does not exist to make users feel artificially qualified.

The product shows real alignment gaps between the resume and the job description. A smaller honest improvement is more useful than a dramatic score jump based on fabricated keywords.

The AI is guided to reframe real experience using job-description language, not invent skills the user does not have.

### Covered vs Missing Keywords

The match results separate covered keywords from missing keywords.

This helps users quickly understand:

* what their resume already communicates well
* what the job description expects
* which concepts can be reframed honestly
* which gaps are real and should not be faked

### Human-Written Output

A major product decision was removing obvious AI writing patterns.

Resume Tailor avoids em dashes, generic phrasing, and over-polished language that makes a resume feel machine-generated.

The system uses prompt rules, post-processing, and rendering decisions to keep the output clean and natural.

### Local-First Resume Parsing

Resume parsing happens locally in the browser before the user clicks Tailor.

This creates a better privacy posture and makes the upload step feel safer. The resume does not need to leave the browser immediately just because the user selected a file.

### Export Quality

Resume Tailor supports DOCX and PDF export.

The goal was not only to generate content, but to create usable documents that a job seeker can actually download, review, and submit.

---

## What Changed From AI Resume Editor

The old AI Resume Editor was a Streamlit MVP.

The new Resume Tailor is a product-grade rebuild.

Key changes:

* moved from Streamlit to Next.js
* moved from prototype UI to a polished product interface
* removed cold-start friction
* improved the flow from upload to analysis to export
* added stronger resume preview and export handling
* improved AI instruction quality
* added clearer match results
* added ATS-style validation checks
* added better visual hierarchy and interaction design
* made the product fit Harsha's portfolio positioning as a Product Designer + Builder

---

## Features

Resume Tailor includes:

* resume upload
* job description input
* resume-to-job match scoring
* covered keyword detection
* missing keyword detection
* tailored resume rewriting
* ATS-style validation checks
* tailored resume preview
* DOCX export
* PDF export
* optional cover letter generation
* clear product-style UI
* deployed live on Vercel

---

## Skills Demonstrated

This project demonstrates Harsha's ability to combine product design and technical execution.

Skills shown in Resume Tailor include:

* Product thinking
* UX flow design
* Information architecture
* Interaction design
* AI product design
* Prompt design
* Responsible AI output handling
* Frontend implementation
* Next.js development
* TypeScript
* Tailwind CSS
* API route design
* OpenAI API integration
* Document generation
* PDF export handling
* DOCX export handling
* Vercel deployment
* Usability-focused iteration

---

## Why This Project Matters

Resume Tailor is important because it shows how Harsha thinks beyond screens.

He identified that the original product was not failing because of the AI model. It was failing because the overall experience did not feel trustworthy enough for the moment it served.

The rebuild turned a useful prototype into a stronger product.

It shows Harsha's ability to:

* recognize when a prototype has reached its limit
* redesign a workflow around user trust
* make technical decisions based on product experience
* ship a live product
* connect AI capability with real user needs
* design and build with ownership

---

## Portfolio Positioning

Resume Tailor should be understood as one of Harsha's strongest Product Designer + Builder projects.

It demonstrates:

* product judgment
* AI tooling
* UX clarity
* responsible resume rewriting
* real technical execution
* shipped product ownership
* end-to-end problem solving

This is not just an AI resume generator. It is a product case study about trust, clarity, and helping job seekers make better application decisions.
