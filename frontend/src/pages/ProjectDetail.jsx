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

  // Sections are numbered automatically; a section is skipped when its content is null/empty.
  const sections = [
    {
      key: "about", label: "OVERVIEW", title: "About the project", show: !!w.about,
      body: (
        <div className={`${flush} [&_p]:text-lg [&_p]:leading-relaxed md:[&_p]:text-xl`}>
          <Readme source={w.about} />
        </div>
      ),
    },
    {
      key: "responsibilities", label: "RESPONSIBILITIES", title: "Responsibilities", show: !!w.responsibilities,
      body: <div className={flush}><Readme source={w.responsibilities} /></div>,
    },
    {
      key: "learning", label: "LEARNING", title: "Learning", show: !!w.learning,
      body: <div className={flush}><Readme source={w.learning} /></div>,
    },
    {
      key: "demo", label: "DEMO", title: "See it in action", show: !p.hideDemo,
      body: <Demo url={p.demo} title={p.title} />,
    },
    {
      key: "readme", label: "README", title: "README.md", show: true,
      body: (
        <div className="mt-6 rounded-xl border border-cream-line bg-white/50 p-6 dark:border-white/10 dark:bg-warm-ink md:p-10 [&>:first-child]:mt-0">
          <Readme source={getReadme(slug)} />
        </div>
      ),
    },
  ].filter((x) => x.show);

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
          {p.liveReload ? (
            <LinkButton onClick={() => window.location.reload()} icon={<LiveIcon />}>LIVE DEMO</LinkButton>
          ) : (
            <LinkButton href={p.live} icon={<LiveIcon />}>LIVE DEMO</LinkButton>
          )}
        </div>
      </header>

      {sections.map((sec, i) => (
        <Section key={sec.key} label={`${String(i + 1).padStart(2, "0")} — ${sec.label}`} title={sec.title}>
          {sec.body}
        </Section>
      ))}
    </main>
  );
}
