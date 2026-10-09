# Personal Portfolio Website

A warm, editorial portfolio built to present projects clearly: a single-page home, a dedicated page for every project, and light and dark themes.

## How It Works

```
Project data (title, stack, links)
      +
Write-ups and READMEs (markdown files)
      │
      ▼
React app (Vite + React Router)
      │
 ┌────┴─────┐
 ▼          ▼
Home page   Project pages
(hero, featured tiles,   (overview, responsibilities,
 project list, contact)   learnings, demo, README)
```

## Key Features

- Content-driven: adding a project means adding data and a markdown file, not new components
- Each project page shows an overview, responsibilities, learnings, a demo and a README
- Light and dark themes
- Generative visuals for each project instead of stock photos
- Smooth scroll-triggered animation that respects reduced-motion settings
- Small Express API for backend needs

## Design

A cream, navy and gold palette, with Sora for headings, Newsreader for serif accents and IBM Plex Mono for labels.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, React Router |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Content | react-markdown, remark-gfm |
| Backend | Express, TypeScript |
| Hosting | Vercel |
