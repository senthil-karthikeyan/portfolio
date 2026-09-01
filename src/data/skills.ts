export interface SkillDomain {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "frontend",
    number: "01",
    category: "FRONTEND",
    title: "FRONTEND ARCHITECTURE",
    description:
      "High-performance reactive interfaces, strict type safety, real-time UI state sync & 60fps kinetic motion.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    number: "02",
    category: "BACKEND",
    title: "BACKEND & DISTRIBUTED",
    description:
      "High-throughput microservices, sub-50ms streaming protocols, concurrent handlers & resilient REST APIs.",
    technologies: [
      "Node.js",
      "Go",
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    id: "databases",
    number: "03",
    category: "DATABASES",
    title: "DATABASE & PERSISTENCE",
    description:
      "Relational schemas, optimistic locking, high-speed in-memory caching & document data models.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    id: "infrastructure",
    number: "04",
    category: "INFRASTRUCTURE",
    title: "CLOUD & INFRASTRUCTURE",
    description:
      "Scalable cloud hosting, container orchestration, automated continuous deployment pipelines & version control.",
    technologies: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"],
  },
  {
    id: "mobile",
    number: "05",
    category: "MOBILE",
    title: "MOBILE ENGINEERING",
    description:
      "Cross-platform native mobile application development with performant gestures, offline caches & clean state architecture.",
    technologies: ["React Native", "Flutter"],
  },
];

export const techStackItems = [
  "TypeScript",
  "Next.js",
  "React",
  "Go (Golang)",
  "Gin Framework",
  "Python",
  "FastAPI",
  "PyTorch",
  "PostgreSQL (sqlc/pgx)",
  "Redis",
  "WebSockets",
  "Docker & Containers",
  "Tailwind CSS",
  "GSAP Motion",
];
