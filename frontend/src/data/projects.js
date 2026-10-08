export const projects = [
  {
    id: "01",
    slug: "io-workload-classifier",
    title: "IO Workload Classification & Hotspot Detection",
    short: "Hotspot Detection",
    category: "ML Systems",
    description:
      "An ML platform that classifies storage workloads, detects hotspots, and auto-rebalances data across nodes.",
    stack: ["Python", "Kafka", "XGBoost", "FastAPI", "Redis", "MLflow"],
    github: "https://github.com/Devvv118/workload_classification",
    live: "", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "bars",
    warmAccent: "navy",
  },
  {
    id: "02",
    slug: "virtual-teaching-assistant",
    title: "Virtual Teaching Assistant",
    short: "Teaching Assistant",
    category: "AI / RAG",
    description: "RAG-based teaching assistant for TDS course questions.",
    stack: ["Python", "FastAPI", "Typesense", "OpenAI"],
    github: "https://github.com/Devvv118/virtual-teaching-assistant",
    live: "https://virtual-teaching-assistant-pink.vercel.app/", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "wave",
    warmAccent: "gold",
  },
  {
    id: "03",
    slug: "stock-macro-view",
    title: "Stock Macro View Platform",
    short: "Stock Macro View",
    category: "Full Stack",
    description: "MERN dashboard for stocks, news sentiment, and macroeconomic trends.",
    stack: ["MongoDB", "Express", "React", "Node.js", "AWS"],
    github: "https://github.com/Devvv118/quick_stock_market",
    live: "", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "radii",
    warmAccent: "ink",
  },
  {
    id: "04",
    slug: "data-analyst-agent",
    title: "Data Analyst Agent",
    short: "Data Analyst Agent",
    category: "AI Agents",
    description:
      "LLM agent that breaks questions into tasks, writes and debugs Python, returns JSON.",
    stack: ["Python", "FastAPI", "Gemini", "GPT-4o-mini", "uv"],
    github: "https://github.com/Devvv118/data-analyst-agent",
    live: "https://data-analyst-agent-rho-self.vercel.app/", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "network",
    warmAccent: "navy",
  },
  {
    id: "05",
    slug: "vehicle-rental-system",
    title: "Vehicle Rental System",
    short: "Vehicle Rental",
    category: "Full Stack",
    description:
      "Full-stack car rental manager handling reservations, returns, fees, payments, and maintenance.",
    stack: ["FastAPI", "React", "TypeScript", "MySQL", "SQLAlchemy"],
    github: "https://github.com/Devvv118/vehicle-rental-system",
    live: "https://vehicle-rental-system-phi-three.vercel.app/dashboard", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "bars",
    warmAccent: "gold",
  },
];

export const profile = {
  name: "Dev Arun",
  role: "Systems & ML Engineer",
  tagline: "Building the instrumentation layer for machine intelligence.",
  bio: "I design and build real-time infrastructure and forecasting systems — the pipelines, runtimes, and instrumentation that keep machine intelligence fast, observable, and dependable in production.",
  location: "Bengaluru, IN",
  email: "hello@devarun.dev",
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Resume", href: "#" },
  ],
  skills: [
    { group: "Languages", items: ["Python", "Rust", "SQL", "TypeScript"] },
    { group: "ML / Data", items: ["XGBoost", "PyTorch", "MLflow", "ONNX"] },
    { group: "Systems", items: ["Kafka", "Redis", "Docker", "Tokio"] },
    { group: "Infra", items: ["PostgreSQL", "Prometheus", "FastAPI", "AWS"] },
  ],
};
