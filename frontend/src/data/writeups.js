// Your hand-written project content, keyed by project slug. Each field is markdown
// (paragraphs, **bold**, lists, links). Anything you leave out shows the placeholder below.
//
// Fields: about (Overview), responsibilities (Responsibilities), learnings (learnings)
// Slugs: io-workload-classifier, virtual-teaching-assistant, stock-macro-view,
//        data-analyst-agent, vehicle-rental-system, my-portfolio
const placeholder = {
  about: `*Project write-up coming soon.*

A short overview of what this project is, who it was for, and the problem it solves will appear here.`,
  responsibilities: `- Responsibility one: what I owned on this project.
- Responsibility two: another area I was accountable for.`,
  learnings: `- learnings one: something new this project taught me.
- learnings two: a skill or insight I'll carry forward.`,
};

export const writeups = {
  "io-workload-classifier": {
    about: `*Hewlett Packard Enterprise (Career Preview Program).*  
  **Team Project | Proof of Concept**

Building a system that reduces p95/p99 latency spikes, has zero SLO breaches during automated actions, and more than 95% precision/recall for workload classification, while maintaining a healthy latency.`,
    responsibilities: `- Architecture: Designing the flow of data through the system, from ingestion to classification to rebalancing.
- Decision Engine: Designing the decision making component for rebalancing of nodes.
- Integration: Integrating all the ML models, into the pipeline.`,
    learnings: `- Designing a complex pipeline.
- Isolating failures and ensuring other components of the system continue working.`,
  },

  "virtual-teaching-assistant": {
    about: `*IIT Madras Project*  
  **Solo Project**

An LLM that answers student questions from course material`,
    responsibilities: `- Building the retrieval pipeline over course content.
- Embedding the content and storing embeddings in a database.
- Comparing embeddings with queries to get relevant results.`,
    learnings: `- Building a RAG pipeline.
- Optimizing the RAG pipeline for speed and accuracy.
- Building dual pipelines with respect to 2 different databases.`,
  },

  "stock-macro-view": {
    about: `*Personal Project.*  
  **Solo Project**

A dashboard that places stock performance alongside macroeconomic indicators so trends can be read in context.`,
    responsibilities: `- Sample: Sourcing and cleaning market and macro data.
- Building the charts and the interface.
- Sample: Deploying and maintaining the app.`,
    learnings: `- Sample: Aligning data series that update at different frequencies.
- Sample: Presenting dense financial data clearly.`,
  },

  "data-analyst-agent": {
    about: `*IIT Madras Project*  
  **Solo Project**

An AI agent that takes a plain language question, along with any kind of files (CSV, Excel, JSON, etc.). The agent can write and debug Python code to analyze the data and format the results. The agent uses simple models to perform complex tasks.`,
    responsibilities: `- Designing the agent loop.
- Sandboxing code execution safely.
- Chaining simple tasks optimally to achieve the desired outcome.`,
    learnings: `- Designing the agentic architecture without using existing frameworks (like LangChain).
- Handling errors, retries, hallucinations, missing data and other edge cases.`,
  },

  "vehicle-rental-system": {
    about: `*Personal Project.* 

A database-backed system for listing vehicles, handling bookings, and tracking rentals and returns.`,
    responsibilities: `- Designing a complex database schema (15+ tables).
- Implementing CRUD logic for various components.`,
    learnings: `- Modelling real-world constraints such as overlapping bookings.
- Keeping data consistent across related tables.`,
  },

  "my-portfolio": {
    about: `*Personal Project.*  
  **Solo Project**

The portfolio you are on right now: a single-page site with a dedicated page for every project, light and dark themes, and project write-ups and READMEs that are plain markdown files.`,
    responsibilities: `- Designing the visual identity: a warm cream, navy and gold palette with generative visuals instead of stock photos.
- Building the React front end: the home page sections, the project list and the project detail pages.
- Setting up the markdown pipeline so each project's write-up and README renders from a file.
- Setting up a small Express and TypeScript backend and deploying the site on Vercel.`,
    learnings: `- Designing a content-driven site where adding a project means editing data, not components.
- Building a theme system with Tailwind that works in both light and dark modes.
- Keeping animation smooth and tasteful with Framer Motion, including respecting reduced-motion preferences.`,
  },
};

export const getWriteup = (slug) => ({ ...placeholder, ...writeups[slug] });
