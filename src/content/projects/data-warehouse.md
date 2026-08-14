---
title: "Kenya Soil Health Data Warehouse"
description: "An end-to-end BI pipeline on Kenyan agronomic trial data — data warehousing, OLAP querying, interactive visualisation, and data mining"
category: "Data Engineering"
technologies: ["Python", "SQLite", "Streamlit", "Plotly", "scikit-learn", "Orange3"]
featured: true
link: "https://github.com/georgemark1024/data-warehouse"
date: 2026-05-09
---

## Project Overview

An end-to-end business intelligence pipeline built on the Kenya Soil Health dataset — on-farm agricultural trials across multiple agro-ecological zones, with grain yield as the target variable. Done for the Business Intelligence & Analytics course at the University of Nairobi.

## Key Achievements

- Modeled the warehouse as a galaxy (fact constellation) schema — two fact tables for crop yield and farm inputs sharing conformed location and time dimensions, alongside star and snowflake implementations
- Implemented OLAP operations (slice, dice, pivot, and drill-down/up/across/through) over the warehouse
- Built an interactive Streamlit dashboard with heatmaps, fever charts, and gauges for exploring yields across zones
- Ran data-mining workflows in Orange3 — clustering, pattern discovery, and time-series analysis
