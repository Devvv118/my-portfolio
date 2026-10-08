// README markdown per project, matched by slug: ./<slug>.md
const files = import.meta.glob("./*.md", { query: "?raw", import: "default", eager: true });

// The first "# Title" line is dropped — the page already shows the project title.
export const getReadme = (slug) => (files[`./${slug}.md`] || "").replace(/^#\s+.*\r?\n/, "");
