export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  status: "active" | "completed";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "software-development-engineer-pinsec",
    title: "SOFTWARE DEVELOPMENT ENGINEER",
    organization: "PinSec.ai",
    location: "Chennai",
    dateRange: "NOVEMBER 2026 — PRESENT",
    status: "active",
    description:
      "Contributing to the development of an AI-powered fintech platform focused on conversational financial profiling, personalized investment planning, and goal-based wealth management.",
    achievements: [
      "Contributing to the development of a conversational AI-powered financial planning experience that enables users to interact through text and voice, helping understand their financial goals, lifestyle, investment preferences, and risk tolerance.",
      "Working on user financial profiling and onboarding workflows, integrating Digio for digital KYC verification and OneMoney for consent-driven Account Aggregator integrations to retrieve users' financial information.",
      "Developing backend workflows and financial data management capabilities to support personalized investment planning, risk assessment, and goal-based financial recommendations, including long-term and retirement planning.",
      "Contributing to the platform's application architecture, integrating conversational AI workflows, third-party fintech services, and database-backed financial information management.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "AWS",
      "Redis",
      "Docker",
    ],
  },
  {
    id: "software-engineer-mako",
    title: "SOFTWARE ENGINEER",
    organization: "Mako IT Lab",
    location: "Chennai",
    dateRange: "OCTOBER 2024 — JUNE 2026",
    status: "completed",
    description:
      "Worked across backend and frontend engineering, contributing to application development, API integrations, database-backed services, cloud infrastructure, and production deployments across multiple business domains.",
    achievements: [
      "Delivered 16+ production applications and enterprise platform extensions across healthcare, project management, geospatial analytics, recruitment, and workflow automation, contributing from requirements and system design through development and production deployment.",
      "Designed and developed backend services and REST APIs using TypeScript, Node.js, and NestJS, implementing authentication, authorization, request validation, modular service architecture, and integrations for web and mobile applications.",
      "Built database-backed services using PostgreSQL and Prisma, designing relational data models, queries, and transactional workflows for application features and business operations.",
      "Developed serverless backend workflows using AWS Lambda, API Gateway, S3, SQS, and SES, supporting file storage, asynchronous job processing, email notifications, and scalable API integrations.",
      "Implemented event-driven processing using Kafka, working with producers and consumers to decouple application workflows and support asynchronous communication between services.",
      "Built real-time application features using WebSockets and Socket.io, enabling bidirectional communication and live updates between backend services and connected clients.",
      "Implemented backend caching strategies using Redis, including scheduled refresh, on-demand invalidation, and reusable caching layers to reduce repeated data access and improve application response times.",
      "Designed and developed scalable React, React Native, and Next.js applications handling 6,000+ records, using filtering, pagination, caching, and rendering optimizations to improve UI responsiveness by 60–70%.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "Kafka",
      "Redis",
      "WebSockets",
      "Socket.io",
      "React",
      "React Native",
      "Next.js",
      "Docker",
    ],
  },
];
