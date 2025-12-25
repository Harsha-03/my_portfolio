# Airline Performance Tracker — Operational Intelligence Dashboard (Power BI + Forecasting)

## Overview

The Airline Performance Tracker converts raw, fragmented flight performance data into a decision-ready dashboard that stakeholders can use to understand reliability, delays, cancellations, and trend behavior over time. The purpose of the project was not to “make charts,” but to build a structured analytics system that answers operational questions quickly and consistently.

---

## Timeline and Context

- **Period:** February 2025 – May 2025
- **Location:** United States
- **Context:** Master’s in Information Systems
- **Background:** SPSS exposure in early February 2025 influenced the move toward Power BI and dashboard-driven analysis.

---

## Problem Statement

Airline and flight performance data exists, but it is typically:

- large, raw, and inconsistent
- distributed across multiple tables / sources
- difficult to interpret without modeling and KPIs

Stakeholders struggle to answer questions like:

- Which airlines are most reliable?
- When do delays spike (month/year/season)?
- Which airports contribute most to delays?
- Are cancellations increasing over time?
- Can we predict trends, not just summarize history?

---

## Project Goal

Build an interactive, decision-ready dashboard that:

- cleans and models airline performance data
- defines and tracks aviation KPIs
- reveals patterns, seasonality, and trends
- supports decision-making with both descriptive and predictive insights

---

## Data Ingestion and Preparation (Foundation)

### Data Sources

- flight records
- delay and cancellation metrics
- airport and carrier metadata

### What We Did

- imported raw datasets into Power BI
- validated types (dates, numerics, categories)
- removed nulls, duplicates, and inconsistencies
- standardized airline and airport identifiers

### Tools Used

- Power Query (M language)
- Excel (initial validation)
- SQL-style logic for filtering and joins

**Outcome:** clean, analysis-ready data with consistent identifiers and reliable fields.

---

## Data Modeling (Making the Data Talk)

Instead of working with flat tables, the project used a relational model:

- **Fact table:** flights + performance metrics
- **Dimension tables:** airlines, airports, time

### Why This Matters

- faster queries and cleaner filtering
- accurate aggregations and totals
- scalable structure for future metrics
- KPI correctness (no “wrong totals” from messy relationships)

### Skills Applied

- star-schema thinking
- relationship design (cardinality, filters)
- analytical modeling discipline

**Outcome:** a stable analytics backbone that makes KPIs trustworthy.

---

## KPI and Metric Engineering (DAX)

This is where raw data became decision-grade insight.

### Key Metrics Created

- on-time performance %
- average delay duration
- cancellation rate
- flights per airline
- month/year trend measures
- airport-wise delay contribution

### How

- DAX measures
- calculated columns
- time-intelligence functions (trend and time-based slicing)

**Outcome:** consistent KPIs that can be reused across dashboards and filters without breaking.

---

## Visualization and Dashboard Design

The dashboard was designed as a workflow:
**Overview → Trends → Details**, not a cluttered chart wall.

### Visuals Used

- KPI cards for executive summary
- line charts for trend behavior over time
- bar charts for airline comparison
- heatmaps for airport congestion patterns
- slicers/filters for interactive exploration

### Design Focus

- executive-friendly layout
- minimal clutter
- clear information hierarchy
- interactivity for “one dashboard, many questions”

**Outcome:** a dashboard that answers operational questions fast.

---

## Advanced Analytics and Forecasting

The project intentionally went beyond “what happened.”

### Predictive Layer

Used Python (Pandas, NumPy, Scikit-learn) to:

- detect seasonal patterns
- forecast trend movement (e.g., delay trends over upcoming periods)

Results were integrated back into Power BI for visibility in the same decision surface.

**Outcome:** combined descriptive + predictive insights in one system.

---

## Insights Generated (What the System Could Answer)

By the end, stakeholders could consistently answer:

- which airlines perform best over time
- when delays spike (seasonality and trend behavior)
- which airports act as operational bottlenecks
- how cancellations and delays evolve year-over-year
- what trends to expect next (forecast layer)

This turned raw aviation data into operational intelligence.

---

## My Role

- structured the problem into measurable KPIs
- cleaned, standardized, and validated raw datasets
- built the relational model for accuracy and scalability
- engineered DAX measures for decision-grade reporting
- designed the dashboard layout for usability and clarity
- implemented forecasting workflow and integrated outputs into Power BI

---

## Tech Used

- Power BI (Desktop)
- Power Query (M)
- DAX
- Excel (validation)
- Python (Pandas, NumPy, Scikit-learn)

---

## Why This Project Matters

This project shows how I turn messy data into structured systems that drive decisions. It also informs how I design data-aware user interfaces later in my work—focusing on clarity, workflow, and correct metrics rather than “pretty visuals.”
