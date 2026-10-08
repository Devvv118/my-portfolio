import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Heading ids let in-README links like (#configuration) jump to their section.
const slugify = (s) => s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
const textOf = (n) =>
  Array.isArray(n) ? n.map(textOf).join("") : n && typeof n === "object" ? textOf(n.props?.children) : String(n ?? "");

const body = "font-light text-warm-ink-soft dark:text-cream/70";
const rule = "border-cream-line dark:border-white/15";

const heading = (Tag, cls) => ({ children }) => (
  <Tag id={slugify(textOf(children))} className={`scroll-mt-8 font-warm-display font-medium text-warm-ink dark:text-cream ${cls}`}>
    {children}
  </Tag>
);

const components = {
  h1: heading("h2", "mt-12 mb-4 text-2xl"),
  h2: heading("h2", "mt-12 mb-4 text-2xl"),
  h3: heading("h3", "mt-8 mb-3 text-lg"),
  h4: heading("h4", "mt-6 mb-2 text-base"),
  p: ({ children }) => <p className={`my-4 leading-relaxed ${body}`}>{children}</p>,
  ul: ({ children }) => <ul className="my-4 list-disc space-y-1.5 pl-6 marker:text-gold">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 list-decimal space-y-1.5 pl-6 marker:text-gold">{children}</ol>,
  li: ({ children }) => <li className={`leading-relaxed ${body}`}>{children}</li>,
  strong: ({ children }) => <strong className="font-medium text-warm-ink dark:text-cream">{children}</strong>,
  hr: () => <hr className={`my-10 ${rule}`} />,
  blockquote: ({ children }) => <blockquote className={`my-5 border-l-2 border-gold pl-4 ${body}`}>{children}</blockquote>,
  a: ({ href = "", children }) =>
    /^(https?:|#)/.test(href) ? (
      <a href={href} target={href[0] === "#" ? undefined : "_blank"} rel="noreferrer" className="text-gold-deep underline underline-offset-4 transition-colors hover:text-navy dark:text-gold dark:hover:text-gold-soft">
        {children}
      </a>
    ) : (
      <span>{children}</span> // relative repo links (e.g. LICENSE) can't resolve on this site
    ),
  code: ({ children }) => <code className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-[0.85em] text-navy dark:bg-white/10 dark:text-gold-soft">{children}</code>,
  pre: ({ children }) => (
    <pre className="my-5 overflow-x-auto rounded-xl bg-navy-deep p-5 dark:bg-black/40 font-mono text-[12.5px] leading-relaxed text-cream [&_code]:bg-transparent! [&_code]:p-0! [&_code]:text-inherit!">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className={`border-b px-3 py-2 font-mono text-[11px] tracking-wider text-warm-ink dark:text-cream ${rule}`}>{children}</th>,
  td: ({ children }) => <td className={`border-b px-3 py-2 align-top text-sm ${body} ${rule}`}>{children}</td>,
};

export default function Readme({ source }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{source}</ReactMarkdown>;
}
