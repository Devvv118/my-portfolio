export const projects = [
  {
    id: "01",
    slug: "io-workload-classifier",
    title: "IO Workload Classification & Hotspot Detection",
    short: "Workload Classification & Hotspot Detection",
    category: "Big Data / Real Time Systems / ML",
    org: "HPE", // line under the title on the Work list (optional)
    kind: "Team Project", // optional, shown after the org
    description:
      "An ML/Rule Based platform that classifies storage workloads, detects hotspots, and auto rebalances data across nodes.",
    stack: ["Python", "Kafka", "Keras/TF", "FastAPI", "Redis", "MLflow"],
    github: "https://github.com/Devvv118/workload_classification",
    live: "", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "bars",
    warmAccent: "navy",
  },
  {
    id: "02",
    slug: "data-analyst-agent",
    title: "Data Analyst Agent",
    short: "Data Analyst Agent",
    category: "AI Agents",
    org: "IITM",
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
    id: "03",
    slug: "virtual-teaching-assistant",
    title: "Virtual Teaching Assistant",
    short: "Teaching Assistant",
    category: "AI / RAG",
    org: "IITM",
    description: "RAG-based teaching assistant that answers questions for an IITM course.",
    stack: ["Python", "FastAPI", "Typesense", "OpenAI"],
    github: "https://github.com/Devvv118/virtual-teaching-assistant",
    live: "https://virtual-teaching-assistant-pink.vercel.app/", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "wave",
    warmAccent: "gold",
  },
  {
    id: "04",
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
  {
    id: "05",
    slug: "my-portfolio",
    title: "Personal Portfolio Website",
    short: "Portfolio",
    category: "Full Stack",
    kind: "Personal Project",
    description:
      "This site: a React and Tailwind portfolio with light and dark themes and markdown-driven project pages, backed by a small Express API.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Express", "TypeScript"],
    github: "https://github.com/Devvv118/my-portfolio",
    live: "https://my-portfolio-omega-livid-98.vercel.app/", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "wave",
    warmAccent: "ink",
  },
  {
    id: "06",
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
];

export const profile = {
  name: "Dev Arun",
  role: "",
  tagline: "",
  bio: "I'm an undergrad student, with a diploma in data science. My work spans AI agents, machine learning, backend infrastructure, and data-driven platforms. I'm drawn to problems that require more than just a working solution; systems that are scalable, adaptive, and thoughtfully engineered.",
  location: "Bengaluru, IN",
  email: "dev.socials181@gmail.com",
  phone: "8971293837",
  socials: [
    { label: "GitHub", href: "https://github.com/Devvv118" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-arun-a64598358/" },
    { label: "Resume", href: "https://drive.google.com/file/d/1IX91QbykJWcoK7uPIFlffFeBxHPdjAxa/view?usp=sharing" },
  ],
  skills: [
    { group: "Languages", items: ["Python", "Rust", "SQL", "TypeScript"] },
    { group: "ML / Data", items: ["XGBoost", "PyTorch", "MLflow", "ONNX"] },
    { group: "Systems", items: ["Kafka", "Redis", "Docker", "Tokio"] },
    { group: "Infra", items: ["PostgreSQL", "Prometheus", "FastAPI", "AWS"] },
  ],
};