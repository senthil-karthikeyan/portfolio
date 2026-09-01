"use client";

import React from "react";
import { TiltCard } from "@/components/interactions/TiltCard";

export function AboutSection() {
  const pillars = [
    {
      index: "A",
      title: "Product Engineering",
      desc: "Translating user requirements into resilient, end-to-end shipped features with zero downtime.",
    },
    {
      index: "B",
      title: "Backend & APIs",
      desc: "High-throughput Go & Python services, secure sessions, and clean REST/WebSocket architectures.",
    },
    {
      index: "C",
      title: "Frontend Craft",
      desc: "Accessible, responsive, and micro-animated interfaces built with React & Next.js.",
    },
    {
      index: "D",
      title: "Clean Architecture",
      desc: "Modular data models, optimistic concurrency, and bulletproof maintainability.",
    },
  ];

  return (
    <section
      id="about"
      className="poster-section"
      aria-label="About Section"
    >
      <div className="p-container">
        {/* Banner Header */}
        <div className="poster-banner-title scroll-banner">
          <span className="banner-num">02</span>
          <h2 className="banner-text">ABOUT THE ENGINEER</h2>
          <span className="banner-glow" aria-hidden="true" />
        </div>

        <div className="poster-about-layout">
          {/* Left Philosophy / Statement of Craft Card with Tilt */}
          <TiltCard
            className="about-quote-monolith anim-quote-box"
            tiltOptions={{ maxRotation: 3.0, speed: 250 }}
          >
            <div className="quote-tag">[STATEMENT_OF_CRAFT]</div>
            <blockquote className="quote-inner">
              “I work across the full development lifecycle — turning complex operational challenges into clean, maintainable, and reliable software.”
            </blockquote>
            <div className="quote-meta-strip">
              <span>AUTHOR: SENTHIL K.</span>
              <span>SWISS PRINCIPLE: FORM FOLLOWS FUNCTION</span>
            </div>
          </TiltCard>

          {/* Right Narrative */}
          <div className="about-narrative-monolith anim-about-text">
            <p className="p-body-lg">
              Hi, I&apos;m <strong>Senthil K</strong>, a Software Engineer with 2+ years of professional experience building modern web applications, backend systems, APIs, and production-ready products.
            </p>
            <p className="p-body-lg">
              I enjoy turning complex problems into clean, reliable, and maintainable software. I prioritize mathematical structural clarity, sound architecture, and resilient system boundaries. From designing responsive client interfaces in React and Next.js to engineering high-concurrency Go microservices, database schemas, and audio machine learning APIs — every line of code is written to endure.
            </p>

            <div className="poster-pillars-table">
              {pillars.map((pillar) => (
                <div key={pillar.index} className="p-pillar-row">
                  <span className="pp-idx">[{pillar.index}]</span>
                  <div>
                    <strong>{pillar.title}</strong>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
