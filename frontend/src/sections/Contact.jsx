import RevealText from "../components/RevealText";
import AmbientGlow from "../components/AmbientGlow";
import { profile } from "../data/projects";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy px-6 py-24 md:px-12 md:py-32">
      <AmbientGlow variant="footer" />

      <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] tracking-[0.2em] text-gold-soft">GET IN TOUCH</span>
          <RevealText
            as="h2"
            text="Have something to say? Let's talk."
            className="mt-5 font-warm-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-cream max-w-2xl"
          />
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-gold-soft font-mono text-[11px] tracking-[0.15em] text-cream shadow-[0_25px_50px_-15px_rgba(0,0,0,0.55)] transition-colors hover:bg-gold hover:border-gold hover:text-navy"
        >
          SAY HELLO
        </a>
      </div>

      <div className="relative z-10 mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 font-mono text-[11px] tracking-[0.15em] text-white/50 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-6">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-gold-soft transition-colors">
              {s.label.toUpperCase()}
            </a>
          ))}
        </div>
        <span>{profile.location.toUpperCase()}</span>
      </div>
    </section>
  );
}
