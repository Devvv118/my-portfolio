import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { getReadme } from "../data/readmes";
import { getWriteup } from "../data/writeups";
import Demo from "./project-detail/Demo";
import Readme from "./project-detail/Readme";
import { useTheme } from "../hooks/useTheme";
import { GithubIcon, LinkButton, LiveIcon, Tags, TopBar } from "./project-detail/parts";

// First child of a content block sits flush under its heading.
const flush = "mt-5 [&>:first-child]:mt-0";

function Section({ label, title, children }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-cream-line px-6 pt-10 dark:border-white/10">
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold-deep dark:text-gold">{label}</div>
      <h2 className="mt-3 font-warm-display text-2xl font-medium text-warm-ink md:text-3xl dark:text-cream">{title}</h2>
      {children}
    </section>
  );
}

// One page for every project — only the data changes.
export default function ProjectDetail() {
  const { slug } = useParams();
  const [dark, toggleTheme] = useTheme();
  const p = projects.find((x) => x.slug === slug);

  useEffect(() => window.scrollTo(0, 0), [slug]);

  if (!p) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream">
        <p className="font-warm-display text-2xl text-warm-ink">Project not found.</p>
        <Link to="/" className="font-mono text-[11px] tracking-[0.15em] text-gold-deep">← BACK HOME</Link>
      </main>
    );
  }

  const w = getWriteup(slug);

  return (
    <main className={`${dark ? "dark" : ""} min-h-screen bg-cream pb-28 text-warm-ink dark:bg-navy-deep dark:text-cream`}>
      <TopBar dark={dark} onToggle={toggleTheme} />

      <header className="mx-auto max-w-3xl px-6 pt-16 md:pt-24">
        <div className="font-mono text-[11px] tracking-[0.2em] text-gold-deep dark:text-gold">{p.id} — {p.category.toUpperCase()}</div>
        <h1 className="mt-5 font-warm-display text-4xl tracking-tight text-warm-ink md:text-6xl dark:text-cream">{p.title}</h1>
        <p className="mt-6 max-w-xl font-warm-serif text-xl font-light text-warm-ink-soft md:text-2xl dark:text-cream/70">{p.description}</p>
        <Tags items={p.stack} className="mt-8" />
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href={p.github} icon={<GithubIcon />} primary>GITHUB</LinkButton>
          <LinkButton href={p.live} icon={<LiveIcon />}>LIVE DEMO</LinkButton>
        </div>
      </header>

      <Section label="01 — OVERVIEW" title="About the project">
        <div className={`${flush} [&_p]:text-lg [&_p]:leading-relaxed md:[&_p]:text-xl`}>
          <Readme source={w.about} />
        </div>
      </Section>

      <Section label="02 — RESPONSIBILITIES" title="Responsibilities">
        <div className={flush}><Readme source={w.responsibilities} /></div>
      </Section>

      <Section label="03 — LEARNINGS" title="Learnings">
        <div className={flush}><Readme source={w.learnings} /></div>
      </Section>

      <Section label="04 — DEMO" title="See it in action">
        <Demo url={p.demo} title={p.title} />
      </Section>

      <Section label="05 — README" title="README.md">
        <div className="mt-6 rounded-xl border border-cream-line bg-white/50 p-6 dark:border-white/10 dark:bg-warm-ink md:p-10 [&>:first-child]:mt-0">
          <Readme source={getReadme(slug)} />
        </div>
      </Section>
    </main>
  );
}
