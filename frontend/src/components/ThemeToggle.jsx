import { Moon, Sun } from "lucide-react";

// Icon-only sun/moon switch. Hover only changes colour.
export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full border border-gold-deep/50 bg-gold/10 text-warm-ink transition-colors hover:bg-gold/25 dark:border-gold/60 dark:text-cream"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
