// Your hand-written project content, keyed by project slug. Each field is markdown
// (paragraphs, **bold**, lists, links). Anything you leave out shows the placeholder below.
//
// Fields: about (Overview), responsibilities (Responsibilities), learning (Learning)
// Set responsibilities or learning to null to hide that section on the project page.
// Slugs: io-workload-classifier, virtual-teaching-assistant, stock-macro-view,
//        data-analyst-agent, vehicle-rental-system, my-portfolio
const placeholder = {
  about: `*Project write-up coming soon.*

A short overview of what this project is, who it was for, and the problem it solves will appear here.`,
  responsibilities: `- Responsibility one: what I owned on this project.
- Responsibility two: another area I was accountable for.`,
  learning: `- Learning one: something new this project taught me.
- Learning two: a skill or insight I'll carry forward.`,
};

export const writeups = {
  "io-workload-classifier": {
    about: `*Hewlett Packard Enterprise (Career Preview Program).*  
  **Team Project | Proof of Concept**

Building a system that reduces p95/p99 latency spikes, has zero SLO breaches during automated actions, and more than 95% precision/recall for workload classification, while maintaining a healthy latency.`,
    responsibilities: `- Architecture: Designing the flow of data through the system, from ingestion to classification to rebalancing.
- Decision Engine: Designing the decision making component for rebalancing of nodes.
- Integration: Integrating all the ML models, into the pipeline.`,
    learning: `- Designing a complex pipeline.
- Isolating failures and ensuring other components of the system continue working.`,
  },

  "virtual-teaching-assistant": {
    about: `*IIT Madras Project*  
  **Solo Project**

An LLM that answers student questions from course material`,
    responsibilities: `- Building the retrieval pipeline over course content.
- Embedding the content and storing embeddings in a database.
- Comparing embeddings with queries to get relevant results.`,
    learning: `- Building a RAG pipeline.
- Optimizing the RAG pipeline for speed and accuracy.
- Building dual pipelines with respect to 2 different databases.`,
  },

  "stock-macro-view": {
    about: `*Personal Project.*  
  **Solo Project**

A dashboard that places stock performance alongside macroeconomic indicators so trends can be read in context.`,
    responsibilities: null,
    learning: null,
  },

  "data-analyst-agent": {
    about: `*IIT Madras Project*  
  **Solo Project**

An AI agent that takes a plain language question, along with any kind of files (CSV, Excel, JSON, etc.). The agent can write and debug Python code to analyze the data and format the results. The agent uses simple models to perform complex tasks.`,
    responsibilities: `- Designing the agent loop.
- Sandboxing code execution safely.
- Chaining simple tasks optimally to achieve the desired outcome.`,
    learning: `- Designing the agentic architecture without using existing frameworks (like LangChain).
- Handling errors, retries, hallucinations, missing data and other edge cases.`,
  },

  "vehicle-rental-system": {
    about: `*Personal Project.* 

A database-backed system for listing vehicles, handling bookings, and tracking rentals and returns.`,
    responsibilities: `- Designing a complex database schema (15+ tables).
- Implementing CRUD logic for various components.`,
    learning: `- Modelling real-world constraints such as overlapping bookings.
- Keeping data consistent across related tables.`,
  },

  "my-portfolio": {
    about: `*Personal Project.*  
  **Solo Project**

The portfolio you are on right now: a single-page site with a dedicated page for every project, light and dark themes, and project write-ups and READMEs that are plain markdown files.`,
    responsibilities: null,
    learning: null,
  },
};

export const getWriteup = (slug) => ({ ...placeholder, ...writeups[slug] });
