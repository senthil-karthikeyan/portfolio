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
    id: "languages",
    number: "01",
    category: "LANGUAGES",
    title: "CORE PROGRAMMING LANGUAGES",
    description:
      "Type-safe systems programming, modern ECMAScript engines, and concurrent compiled runtimes.",
    technologies: ["TypeScript", "JavaScript", "Python", "Go", "Rust"],
  },
  {
    id: "backend",
    number: "02",
    category: "BACKEND",
    title: "BACKEND & DISTRIBUTED SERVICES",
    description:
      "Enterprise service architectures, high-throughput microservices, modular APIs, and ORM abstractions.",
    technologies: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Fastify",
      "FastAPI",
      "Go Fiber",
      "Prisma",
      "TypeORM",
    ],
  },
  {
    id: "databases",
    number: "03",
    category: "DATABASES",
    title: "DATABASES & CACHING SYSTEMS",
    description:
      "Relational schemas, transactional workflows, distributed document stores, and in-memory cache layers.",
    technologies: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
    ],
  },
  {
    id: "messaging",
    number: "04",
    category: "MESSAGING & APIs",
    title: "EVENT-DRIVEN & REAL-TIME APIs",
    description:
      "Decoupled event streams, bidirectional WebSocket channels, and contract-first API design.",
    technologies: [
      "Kafka",
      "Socket.io",
      "WebSockets",
      "REST APIs",
      "gRPC",
    ],
  },
  {
    id: "cloud-devops",
    number: "05",
    category: "CLOUD & DEVOPS",
    title: "SERVERLESS CLOUD & INFRASTRUCTURE",
    description:
      "Event-driven cloud functions, asynchronous processing pipelines, containerization, and observability.",
    technologies: [
      "AWS",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "SES",
      "SQS",
      "EC2",
      "Docker",
      "Kubernetes",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    id: "frontend-mobile",
    number: "06",
    category: "FRONTEND & MOBILE",
    title: "FRONTEND & MOBILE SYSTEMS",
    description:
      "High-scale reactive applications handling 6,000+ records, native mobile experiences, and fluid motion.",
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "NativeWind",
    ],
  },
];

export const techStackItems = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "Next.js",
  "React",
  "React Native",
  "Go",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Kafka",
  "Redis",
  "WebSockets",
  "Socket.io",
  "AWS Lambda",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "GSAP Motion",
];
