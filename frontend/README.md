# Dev Arun — Portfolio Homepage

A warm, soft, editorial homepage — cream / navy / gold — built around two
reference screenshots: a clean personal-intro layout with a three-card
category grid, and a broader warm editorial theme (serif accents, generous
cards, soft color bands).

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL. It's a single page with anchor navigation
(Home / About / Contact).

## What's on the page

- **Nav** — logo mark, Home / About / Contact anchor links (right-aligned
  next to the grid icon), a sliding gold underline on the active link, a
  soft shadow once you scroll past it, and a grid icon that opens a
  full-screen project index overlay.
- **Hero** — big personal headline, your name and a short bio filling the
  space beneath it, and a quiet "Let's talk" line with a small circular
  arrow button.
- **Categories** — three tiles ("ML Systems," "Forecasting & Data,"
  "Distributed Systems"), each with a generative technical visual tinted to
  the warm palette rather than a stock photo.
- **About** — split layout with a placeholder portrait card and a serif
  italic pull-quote.
- **Work** — the five placeholder projects as an editorial list (thumbnail,
  title, description, stack tags, view-project link).
- **How I work** — a four-step process row with numbered circular badges.
- **Contact / footer** — a navy band with a soft ambient gold/navy glow, a
  large CTA, and social links.

## Design system

- **Type** — Sora (display headlines), Inter (body/UI), Newsreader italic
  (pull-quotes only), IBM Plex Mono (labels/eyebrows/tags)
- **Color** — warm/cozy white (`#faf5ec`), a deeper cream for alternating
  sections (`#f1e9da`), near-black ink for text, a royal/metallic navy
  (`#1e2b47`), and a soft beige-gold accent (`#c19a5b`) used sparingly
- **Signature element** — `AmbientGlow`: soft, heavily-blurred gold/navy
  blooms placed behind the hero and footer for warmth and depth, used only
  in those two spots so it stays a moment rather than wallpaper
- **Shadow** — a warm, navy-tinted elevation used consistently on the
  scrolled header, category cards, the portrait, work thumbnails, and the
  contact CTA, so the page reads lifted rather than flat
- **Motion** — `Magnetic` (restrained hover-lean on buttons/links) and
  `RevealText` (word-level scroll reveal on headlines), used sparingly to
  match the soft, editorial tone

## Structure

```
src/
  components/    Logo, AmbientGlow, WarmVisual (generative warm-palette
                 visuals), Magnetic, RevealText
  sections/      Nav, Hero, Categories, About, Work, Process, Contact
  pages/
    Home.jsx     composes the sections above
  data/
    projects.js  placeholder project + profile content, with a category
                 summary and a warm accent (navy/gold/ink) per project
  App.jsx        renders Home
```

## Notes

- All content is placeholder — swap `src/data/projects.js` and the bio in
  `About.jsx`/`Hero.jsx` with the real thing.
- Built with React + Vite + Tailwind CSS v4 + Framer Motion. No router —
  it's a single page with anchor links.
