"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { TiltCard } from "@/components/interactions/TiltCard";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="poster-section"
      aria-label="Professional Experience Section"
    >
      <div className="p-container">
        {/* Banner Header */}
        <div className="poster-banner-title scroll-banner">
          <span className="banner-num">03</span>
          <h2 className="banner-text">PROFESSIONAL EXPERIENCE</h2>
          <span className="banner-glow" aria-hidden="true" />
        </div>

        <div className="poster-exp-stack">
          {experiences.map((exp) => (
            <TiltCard
              key={exp.id}
              className="poster-exp-card anim-exp-card"
              tiltOptions={{ maxRotation: 2.5, speed: 250 }}
            >
              <div className="exp-card-header">
                <div>
                  <h3 className="exp-h3">{exp.title}</h3>
                  <span className="exp-sub-org">
                    {exp.organization} — {exp.location}
                  </span>
                </div>
                <div
                  className={`exp-dates-badge ${
                    exp.status === "active" ? "" : "gray"
                  }`}
                >
                  {exp.status === "active" && (
                    <span className="pulse-dot-green" aria-hidden="true" />
                  )}
                  <span>
                    {`${exp.dateRange} // ${exp.status === "active" ? "ACTIVE ROLE" : "COMPLETED"}`}
                  </span>
                </div>
              </div>

              <p className="exp-p">{exp.description}</p>

              <div className="exp-points-grid">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="exp-pt">
                    • {item}
                  </div>
                ))}
              </div>

              <div className="exp-pill-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
