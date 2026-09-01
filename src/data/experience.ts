export interface Experience {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  status: "active" | "completed";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "software-engineer",
    title: "SOFTWARE ENGINEER",
    organization: "Production Software Engineering",
    dateRange: "2024 — PRESENT",
    status: "active",
    description:
      "Spearheading full-stack engineering, real-time microservices, robust API integrations, and intuitive responsive frontend interfaces across production environments.",
    achievements: [
      "Designed and implemented high-throughput RESTful APIs and real-time WebSocket pipelines with sub-50ms latency.",
      "Architected PostgreSQL schemas with strict indexing, optimistic concurrency control, and automated migrations.",
      "Built reusable, accessible UI component systems in React, Next.js, and TypeScript with fluid interaction states.",
      "Integrated enterprise OAuth, JWT refresh token rotation, and third-party cloud integrations inside Dockerized microservices.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Go",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Git CI/CD",
    ],
  },
  {
    id: "associate-software-engineer",
    title: "ASSOCIATE SOFTWARE ENGINEER",
    organization: "Web Systems & Digital Platforms",
    dateRange: "2023 — 2024",
    status: "completed",
    description:
      "Contributed to frontend feature development, payment gateway integrations, database query optimization, and responsive mobile-first experiences.",
    achievements: [
      "Streamlined frontend bundle sizes and Core Web Vitals, reducing First Contentful Paint by over 35%.",
      "Engineered authentication flows, state synchronization modules, and background task processing pipelines.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Redis",
      "Tailwind CSS",
      "REST APIs",
      "Git CI/CD",
    ],
  },
];
