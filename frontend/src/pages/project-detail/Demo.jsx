// Demo video: YouTube/Vimeo link, or a direct video file (.mp4/.webm). Empty = placeholder.
const embedUrl = (u) => {
  const yt = u.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vm = u.match(/vimeo\.com\/(\d+)/);
  return vm ? `https://player.vimeo.com/video/${vm[1]}` : null;
};

export default function Demo({ url, title }) {
  const frame = "mt-6 aspect-video w-full overflow-hidden rounded-xl border border-cream-line bg-cream-deep dark:border-white/10 dark:bg-warm-ink";
  if (!url) {
    return <div className={`${frame} grid place-items-center font-mono text-[11px] tracking-[0.15em] text-warm-ink-soft/60 dark:text-cream/40`}>DEMO VIDEO · COMING SOON</div>;
  }
  const embed = embedUrl(url);
  return embed ? (
    <iframe className={frame} src={embed} title={`${title} demo`} allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen />
  ) : (
    <video className={frame} src={url} controls preload="metadata" />
  );
}
