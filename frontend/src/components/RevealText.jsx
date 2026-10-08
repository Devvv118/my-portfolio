import { motion } from "framer-motion";

// Splits text into words and staggers them upward on scroll/view.
// Deliberate, single-purpose reveal — used for major headings only.
export default function RevealText({
  text,
  as: Tag = "div",
  className = "",
  delay = 0,
  stagger = 0.05,
  once = true,
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once, amount: 0.6 }}
              transition={{
                duration: 0.9,
                ease: [0.19, 1, 0.22, 1],
                delay: delay + i * stagger,
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
