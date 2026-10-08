import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RevealText from "../components/RevealText";
import WarmVisual from "../components/WarmVisual";
import { projects } from "../data/projects";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative bg-cream dark:bg-navy-deep px-6 py-24 md:px-12 md:py-32">
      <div className="mb-14 flex items-end justify-between">
        <div>
          <span className="font-mono text-[11px] tracking-[0.2em] text-gold-deep dark:text-gold">SELECTED WORK</span>
          <RevealText
            as="h2"
            text="Projects worth a closer look."
            className="mt-4 font-warm-display text-4xl md:text-6xl tracking-tight text-warm-ink dark:text-cream"
          />
        </div>
        <span className="hidden md:block font-mono text-[11px] tracking-[0.15em] text-warm-ink-soft dark:text-cream/70">
          {String(projects.length).padStart(2, "0")} TOTAL
        </span>
      </div>

      <div className="flex flex-col divide-y divide-cream-line dark:divide-white/10 border-t border-b border-cream-line dark:border-white/10">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: [0.19, 1, 0.22, 1] }}
            className="group grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-12 md:gap-6 md:py-10"
          >
            <Link to={`/projects/${p.slug}`} className="block md:col-span-2" aria-label={`Open ${p.title}`}>
              <WarmVisual
                variant={p.variant}
                tone={p.warmAccent}
                className="aspect-square w-full max-w-[140px] rounded-xl dark:ring-1 dark:ring-white/10 shadow-[0_18px_35px_-18px_rgba(16,24,43,0.4)]"
              />
            </Link>

            <div className="md:col-span-6">
              <div className="font-mono text-[10px] tracking-[0.2em] text-warm-ink-soft dark:text-cream/60 mb-2">
                {p.id} — {p.category.toUpperCase()}
              </div>
              <h3 className="font-warm-display text-xl md:text-2xl font-medium text-warm-ink dark:text-cream transition-colors group-hover:text-navy dark:group-hover:text-gold">
                <Link to={`/projects/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-warm-ink-soft dark:text-cream/70">
                {p.description}
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cream-line dark:border-white/20 px-2.5 py-1 font-mono text-[10px] text-warm-ink-soft dark:text-cream/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-1 flex md:justify-end">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-ink-soft dark:border-white/30 text-warm-ink dark:text-cream transition-colors hover:border-navy hover:text-navy dark:hover:border-gold dark:hover:text-gold"
                aria-label={`View ${p.title} on GitHub`}
              >
                <GithubIcon />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
