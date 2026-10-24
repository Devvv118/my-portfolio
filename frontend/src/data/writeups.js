// Your hand-written project content, keyed by project slug. Each field is markdown
// (paragraphs, **bold**, lists, links). Anything you leave out shows the placeholder below.
//
// Fields: about (Overview), responsibilities ("What I did"), learning ("What I learnt")
// Optional extra fields: how ("How it works"), decisions ("Design decisions"); shown only when set.
// Set responsibilities or learning to null to hide that section on the project page.
// Slugs: io-workload-classifier, portfolio-intelligence-platform, data-analyst-agent,
//        virtual-teaching-assistant, vehicle-rental-system
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

Storage clusters run very different workloads side by side: databases, virtual machines, backups, AI training and AI inference. When a backup job floods a node, the database next to it slows down, and operators usually find out only after users complain.

This project is a control plane that closes that gap on its own. It watches the telemetry of every volume, works out what each one is doing, spots hotspots and forecasts trouble before an SLO is breached. It then picks a fix, runs it, and rolls it back if things get worse.

The goals: over 95% accuracy in telling workloads apart, fewer p95/p99 latency spikes, and no SLO breaches caused by the automated actions themselves.`,
    how: `1. **Observe:** telemetry from a simulated cluster of 50 volumes across 5 nodes streams through Kafka (Redis Streams when running locally).
2. **Predict:** a set of ML models labels each workload, scores hotspots and noisy neighbors, and forecasts capacity and latency.
3. **Decide:** a policy engine tests candidate actions in a what-if simulator and only picks one that is predicted to help.
4. **Act:** the chosen action runs: migrate a volume, cap its IOPS, change its tier, or add a node.
5. **Monitor:** a watchdog tracks latency after every action and rolls back anything that makes it worse. If rollbacks pile up, a circuit breaker switches autonomy off.`,
    responsibilities: `- **Architecture:** designed the whole system end to end, from telemetry ingestion to classification to automated rebalancing, and integrated every component into one working pipeline.
- **Streaming backbone:** built the Kafka event bus behind a common interface, with Redis Streams as the local alternative. It includes a dead-letter topic for bad messages, a state topic that keeps control-plane instances in sync, and trace propagation across the stream.
- **Decision engine and safety loop:** built the what-if simulator, the decision engine, the post-action monitor with automatic rollback, and the circuit breaker.
- **Capacity forecasting:** built N-BEATS forecasting and a Days-to-Fill planner that raises early warnings and triggers autoscaling.
- **Model integration:** wired the team's models (classifier, anomaly ensemble, noisy-neighbor detector, forecasters) behind a single inference hub, so the control plane calls them the same way whether they run in-process or on remote GPU servers.`,
    decisions: `- **Simulate before acting.** Every candidate move is tried in a fast what-if simulator first, so risky actions are filtered out before they touch a real volume.
- **Assume the system can be wrong.** Persistence checks, rate limits, automatic rollback and a circuit breaker mean a bad prediction costs a short blip instead of an outage.
- **Keep the bus swappable.** One interface, two backends: Redis for development and Kafka for scale, switched by a single setting with no code changes.
- **Isolate failures.** A malformed message goes to a dead-letter queue instead of stalling the stream, and a slow or unavailable remote model falls back safely so the rest of the pipeline keeps running.`,
    learning: `- Designing a multi-stage pipeline where ML predictions drive real actions, and planning for what happens when each stage is wrong or down.
- Isolating failures with dead-letter queues, timeouts and fallbacks, so one broken part does not take the rest of the system with it.
- Balancing autonomy against safety: how simulation, rate limits, rollback and a circuit breaker let a system act on its own without being reckless.
- Turning separately built pieces (models, streaming, services) into one coherent system by agreeing on interfaces first.
- Working with Kafka in practice: topics, consumer groups, and designing around a swappable messaging layer.`,
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

  "portfolio-intelligence-platform": {
    about: `*Personal Project.*  
  **Solo Project**

A serverless system that watches my inbox, my deployed services and my portfolio traffic, and brings the results together in one dashboard. Every few hours, scheduled AWS functions read the last 24 hours of Gmail and use Gemini to pull out genuine job openings and reported errors as structured data. Other functions health-check my Render services and collect their fault logs. A React dashboard shows the digest, and the portfolio's own backend feeds in visitor activity.

It is built to run unattended: the schedules can be changed without touching code, and the dashboard only reads a saved report, so it loads instantly.`,
    responsibilities: `- Designing the end-to-end architecture, from scheduled ingestion to storage to the dashboard.
- Building the email pipeline: Gmail OAuth, message parsing, and a strict-JSON Gemini prompt that treats email content as untrusted.
- Adding resilience: a fallback chain across several Gemini models, response validation, and a 7-day expiry on saved reports.
- Writing the monitoring functions: Render health checks with email alerts, and a log collector that scans for about 100 fault patterns and archives reports to S3.
- Building the React dashboard and the portfolio analytics backend, with rate limiting, input validation and key-protected stats.`,
    learning: `- Learning AWS hands-on: Lambda, EventBridge, DynamoDB, S3, SNS and API Gateway, and how they fit together.
- Designing an architecture that is serverless, scheduled, fault-tolerant, secure and cheap to run, so it works unattended.`,
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
};

export const getWriteup = (slug) => ({ ...placeholder, ...writeups[slug] });
