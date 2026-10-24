import { motion } from "framer-motion";
import { profile } from "../data/projects";

// Skills sit directly under the hero, laid out like the project list: one ruled row per group.
export default function Skills() {
  return (
    <section id="skills" className="relative bg-cream px-6 pb-6 pt-6 dark:bg-navy-deep md:px-20 md:pb-8 md:pt-8 lg:px-32">
      <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-gold-deep dark:text-gold">SKILLS</div>

      <div className="flex flex-col divide-y divide-cream-line border-b border-t border-cream-line dark:divide-white/10 dark:border-white/10">
        {profile.skills.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-1 gap-1.5 py-2.5 md:grid-cols-12 md:items-center md:gap-6"
          >
            <div className="font-mono text-[11px] font-bold tracking-[0.16em] text-warm-ink dark:text-cream md:col-span-3">
              {String(i + 1).padStart(2, "0")} — {g.group.toUpperCase()}
            </div>
            <div className="flex flex-wrap gap-1.5 md:col-span-9">
              {g.items.map((item) => (
                <span key={item} className="rounded-full border border-cream-line px-2.5 py-0.5 font-mono text-[11px] text-warm-ink-soft dark:border-white/20 dark:text-cream/75">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
