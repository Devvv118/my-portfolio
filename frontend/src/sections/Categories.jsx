import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WarmVisual from "../components/WarmVisual";
import { projects } from "../data/projects";

const MotionLink = motion.create(Link);
// Pick the three featured tiles by slug, so reordering or adding projects never changes them.
const FEATURED_SLUGS = ["io-workload-classifier", "virtual-teaching-assistant", "data-analyst-agent"];
const featured = FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(Boolean);

export default function Categories() {
  return (
    <section className="relative bg-cream dark:bg-navy-deep px-6 pb-20 md:px-12 md:pb-28">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {featured.map((p, i) => {
          return (
            <MotionLink
              key={p.id}
              to={`/projects/${p.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="group relative block overflow-hidden rounded-2xl dark:ring-1 dark:ring-white/10 shadow-[0_25px_50px_-20px_rgba(16,24,43,0.35)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(16,24,43,0.45)]"
            >
              <WarmVisual
                variant={p.variant}
                tone={p.warmAccent}
                label={p.short}
                className="aspect-[4/3] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute right-4 top-4 rounded-full bg-cream/90 dark:bg-navy-deep/85 px-2.5 py-1 font-mono text-[10px] tracking-wide text-warm-ink dark:text-cream">
                {p.category.toUpperCase()}
              </div>
            </MotionLink>
          );
        })}
      </div>
    </section>
  );
}
