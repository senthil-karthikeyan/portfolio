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
    id: "software-engineer-mako",
    title: "SOFTWARE ENGINEER",
    organization: "Mako IT Lab",
    location: "Chennai",
    dateRange: "OCTOBER 2024 — JUNE 2026",
    status: "active",
    description:
      "Delivered 16+ production applications and enterprise platform extensions across healthcare, project management, geospatial analytics, recruitment, and workflow automation, contributing from requirements and system design through development and production deployment.",
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
