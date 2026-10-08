import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import { projects, profile } from "../data/projects";

const links = [
  { label: "Home", href: "#top" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ dark, onToggle }) {
  const [active, setActive] = useState("Home");
  const [indexOpen, setIndexOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-cream/90 dark:bg-navy-deep/90 backdrop-blur-md shadow-[0_12px_30px_-18px_rgba(16,24,43,0.45)]"
            : "py-6 bg-cream/0"
        }`}
      >
        <a href="#top" className="text-warm-ink dark:text-cream" onClick={() => setActive("Home")}>
          <Logo className="h-7 w-9" />
        </a>

        <div className="flex items-center gap-8 md:gap-10">
          <nav className="hidden md:flex items-center gap-9 font-warm-display text-[15px] text-warm-ink dark:text-cream">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative pb-1 transition-colors hover:text-navy dark:hover:text-gold ${
                  active === l.label ? "text-navy dark:text-gold" : "text-warm-ink-soft dark:text-cream/70"
                }`}
              >
                {l.label}
                {active === l.label && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <ThemeToggle dark={dark} onToggle={onToggle} />

          <button
            onClick={() => setIndexOpen(true)}
            aria-label="Open project index"
            className="grid h-9 w-9 place-items-center rounded-full border border-cream-line bg-cream text-warm-ink shadow-sm transition-colors hover:border-gold hover:text-gold dark:border-white/20 dark:bg-transparent dark:text-cream"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="0.5" y="0.5" width="6" height="6" rx="1" stroke="currentColor" />
              <rect x="8.5" y="0.5" width="6" height="6" rx="1" stroke="currentColor" />
              <rect x="0.5" y="8.5" width="6" height="6" rx="1" stroke="currentColor" />
              <rect x="8.5" y="8.5" width="6" height="6" rx="1" stroke="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {indexOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-deep/96 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIndexOpen(false)}
          >
            <div className="flex h-full flex-col px-6 py-10 md:px-16 md:py-16">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-gold-soft">
                  {profile.name.toUpperCase()} — INDEX
                </span>
                <button
                  onClick={() => setIndexOpen(false)}
                  className="font-mono text-[11px] tracking-[0.15em] text-cream-deep hover:text-gold transition-colors"
                >
                  CLOSE ✕
                </button>
              </div>

              <div className="mt-auto mb-auto grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-16">
                {projects.map((p, i) => (
                  <motion.a
                    key={p.id}
                    href="#work"
                    onClick={() => setIndexOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    className="group flex items-baseline justify-between border-b border-white/10 py-4 md:py-5"
                  >
                    <span className="font-warm-display text-2xl md:text-3xl font-medium text-cream transition-colors group-hover:text-gold">
                      {p.short}
                    </span>
                    <span className="font-mono text-xs text-white/40">{p.id}</span>
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.15em] text-white/50">
                <span>{profile.email}</span>
                <span>{profile.location.toUpperCase()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
