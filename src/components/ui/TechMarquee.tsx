"use client";

import React from "react";

const engineeringCoreStack = [
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

interface TechMarqueeProps {
  label?: string;
  items?: string[];
}

export function TechMarquee({
  label = "ENGINEERING CORE:",
  items = engineeringCoreStack,
}: TechMarqueeProps) {
  return (
    <div
      className="hero-tech-strip anim-hero-strip"
      role="region"
      aria-label="Engineering Core Continuous Flow"
    >
      <div className="strip-header-badge">{label}</div>
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee-track">
          {items.map((tech, index) => (
            <React.Fragment key={`core-1-${index}`}>
              <span>{tech}</span>
              <span className="dot" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
          {/* Duplicate for continuous seamless loop */}
          {items.map((tech, index) => (
            <React.Fragment key={`core-2-${index}`}>
              <span>{tech}</span>
              <span className="dot" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
