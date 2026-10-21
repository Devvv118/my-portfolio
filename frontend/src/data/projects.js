export const projects = [
  {
    id: "01",
    slug: "io-workload-classifier",
    title: "IO Workload Classification & Hotspot Detection",
    short: "Workload Classification & Hotspot Detection",
    category: "Real Time Systems / ML",
    org: "HPE", // line under the title on the Work list (optional)
    kind: "Team Project", // optional, shown after the org
    description:
      "An ML/Rule Based platform that classifies storage workloads, detects hotspots, and auto rebalances data across nodes.",
    stack: ["Docker", "Kafka", "Keras/TF", "FastAPI", "Redis", "Prometheus", "Grafana"],
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
      "LLM agent that uses light weight models to solve complex tasks.",
    stack: ["Sandbox","Prompt Engineering", "Chain of Thought", "FastAPI", "Python"],
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
    stack: ["RAG", "Typesense", "PostgreSQL", "Gemini/GPT API", "FastAPI", "Python", "React"],
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
    kind: "Personal Project",
    description:
      "My first full stack project.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/Devvv118/vehicle-rental-system",
    live: "https://vehicle-rental-system-phi-three.vercel.app/dashboard", // deployment URL (leave empty until it exists)
    demo: "", // demo video: YouTube/Vimeo link or .mp4 path (empty = "coming soon")
    variant: "bars",
    warmAccent: "gold",
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
    { group: "Languages", items: ["Python", "JavaScript", "C/C++", "SQL", "Java (Basics)", "Rust (Basics)"] },
    { group: "ML & Data", items: ["PyTorch", "Keras", "Pandas", "NumPy", "scikit-learn"] },
    { group: "Backend, Frontend & Database", items: ["FastAPI", "Node.js", "Express.js", "React", "MongoDB", "PostgreSQL"] },
    { group: "Cloud & DevOps", items: ["Docker", "AWS", "Prometheus", "Grafana"] },
    { group: "Tools", items: ["Git", "GitHub", "Postman"] },
  ],
};