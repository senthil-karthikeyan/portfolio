"use client";

import React from "react";
import { skillDomains } from "@/data/skills";
import { TiltCard } from "@/components/interactions/TiltCard";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="poster-section"
      aria-label="Technical Proficiency Matrix Section"
    >
      <div className="p-container">
        {/* Banner Header */}
        <div className="poster-banner-title scroll-banner">
          <span className="banner-num">05</span>
          <h2 className="banner-text">TECHNICAL PROFICIENCY MATRIX</h2>
          <span className="banner-glow" aria-hidden="true" />
        </div>

        {/* Intro Bar */}
        <div className="poster-skills-intro-bar">
          <div className="psi-left">
            <span className="psi-dot" aria-hidden="true" />
            <span className="psi-title">
              SWISS ENGINEERING MATRIX // SYSTEM SPECIFICATIONS &amp; CORE CAPABILITIES
            </span>
          </div>
          <div className="psi-meta">
            6 DOMAINS // PRODUCTION TECHNOLOGIES
          </div>
        </div>

        {/* 5-Domain Skills Matrix */}
        <div className="poster-skills-matrix">
          {skillDomains.map((domain) => (
            <TiltCard
              key={domain.id}
              className="p-skill-block anim-skill-card"
              tiltOptions={{ maxRotation: 2.5, speed: 250 }}
            >
              <div className="ps-head">
                <span className="ps-idx">[{domain.number}]</span>
                <span className="ps-badge">{domain.category}</span>
              </div>

              <h4>{domain.title}</h4>
              <p className="ps-desc">{domain.description}</p>

              <div className="ps-tag-grid">
                {domain.technologies.map((tech) => (
                  <span key={tech} className="ps-tag">
                    <span className="ps-dot" aria-hidden="true" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
