import { Moon, Sun } from "lucide-react";

// Labelled on purpose, so visitors notice the theme option. Hover only changes colour.
export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-2 rounded-full border border-gold-deep/50 bg-gold/10 px-3.5 py-2 font-mono text-[11px] tracking-[0.1em] text-warm-ink transition-colors hover:bg-gold/25 dark:border-gold/60 dark:text-cream"
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
      {dark ? "LIGHT MODE" : "DARK MODE"}
    </button>
  );
}
