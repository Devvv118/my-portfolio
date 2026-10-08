import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "../../components/ThemeToggle";
import Logo from "../../components/Logo";

export function GithubIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

// Link pill. Hover only changes colour — nothing moves. No href = greyed-out "soon" state.
export function LinkButton({ href, icon, primary = false, children }) {
  const base = "inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-[0.08em] transition-colors";
  if (!href) {
    return <span className={`${base} cursor-not-allowed border-cream-line text-warm-ink-soft/40 dark:border-white/10 dark:text-cream/30`}>{icon}{children} · SOON</span>;
  }
  const tone = primary
    ? "border-navy bg-navy text-cream hover:border-navy-metal hover:bg-navy-metal dark:border-gold dark:bg-gold dark:text-warm-ink dark:hover:border-gold-soft dark:hover:bg-gold-soft"
    : "border-warm-ink-soft/40 text-warm-ink hover:border-navy hover:text-navy dark:border-white/20 dark:text-cream/80 dark:hover:border-gold dark:hover:text-gold";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${tone}`}>
      {icon}{children}
    </a>
  );
}

export const LiveIcon = () => <ArrowUpRight size={14} />;

export function Tags({ items, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((t) => (
        <span key={t} className="rounded-full border border-cream-line px-2.5 py-1 font-mono text-[10px] text-warm-ink-soft dark:border-white/20 dark:text-cream/70">{t}</span>
      ))}
    </div>
  );
}

// Back link, labelled theme toggle and logo.
export function TopBar({ dark, onToggle }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 md:px-12">
      <a href="/#work" className="font-mono text-[11px] tracking-[0.15em] text-warm-ink-soft transition-colors hover:text-navy dark:text-cream/70 dark:hover:text-gold">← ALL PROJECTS</a>
      <div className="flex items-center gap-4">
        <ThemeToggle dark={dark} onToggle={onToggle} />
        <a href="/" className="text-warm-ink dark:text-cream"><Logo className="h-6 w-8" /></a>
      </div>
    </div>
  );
}
