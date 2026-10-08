// Your hand-written project content, keyed by project slug. Each field is markdown
// (paragraphs, **bold**, lists, links). Anything you leave out shows the placeholder below.
//
// Slugs: io-workload-classifier, virtual-teaching-assistant, stock-macro-view,
//        data-analyst-agent, vehicle-rental-system
const placeholder = {
  about: `**Placeholder.** Use this space to sell the project in a paragraph or two: the problem it solves, why it matters, what you built, and what makes it stand out.

Lead with the outcome — a number, a scale, something a reader can picture — then briefly say how you got there.`,
  learnt: `- Placeholder: something technical you picked up
- Placeholder: a design or architecture lesson
- Placeholder: something about working on a project this size`,
  challenges: `- Placeholder: the hardest problem, and how you solved it
- Placeholder: a decision you'd make differently now
- Placeholder: something that broke and what it taught you`,
};

export const writeups = {
  // "io-workload-classifier": {
  //   about: `...`,
  //   learnt: `- ...`,
  //   challenges: `- ...`,
  // },
};

export const getWriteup = (slug) => ({ ...placeholder, ...writeups[slug] });
