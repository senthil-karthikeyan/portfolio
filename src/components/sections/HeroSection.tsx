"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/config/site";
import { SystemTelemetry } from "@/components/ui/SystemTelemetry";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { TiltCard } from "@/components/interactions/TiltCard";

interface HeroSectionProps {
  onNavigate?: (id: string) => void;
  onCopyEmail?: (email: string) => void;
}

export function HeroSection({ onNavigate, onCopyEmail }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="poster-section hero"
      aria-label="Hero Section"
    >
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="p-container">
        {/* Top Poster Tagline & Live Status Badges */}
        <div className="poster-hero-tag anim-hero-tag">
          <div className="tag-left">
            <span className="tag-bold">
              <span className="pulse-indicator" aria-hidden="true" />
              SWISS MONOLITH // 2026
            </span>
            <span className="tag-divider" aria-hidden="true">/</span>
            <span className="tag-sub">DISCIPLINE: PRODUCTION SOFTWARE ENGINEERING</span>
          </div>
          <div className="tag-right">
            <span className="status-live-chip">
              <span className="status-dot" aria-hidden="true" />
              OPEN TO ROLES • FULL-STACK &amp; BACKEND
            </span>
          </div>
        </div>

        <div className="poster-hero-main">
          {/* Masked Typographic Headline for kinetic line reveal */}
          <div className="hero-headline-wrapper">
            <h1
              className="poster-heavy-title"
              id="hero-title"
              aria-label="Building software from complex ideas to reliable products."
            >
              <span className="line-mask">
                <span className="line-inner hero-line">BUILDING SOFTWARE</span>
              </span>
              <span className="line-mask">
                <span className="line-inner hero-line">FROM COMPLEX IDEAS</span>
              </span>
              <span className="line-mask">
                <span className="line-inner hero-line">
                  <span className="title-highlight">TO RELIABLE PRODUCTS.</span>
                </span>
              </span>
            </h1>
          </div>

          {/* Hero Split: Engineering Thesis Box & Interactive Swiss Telemetry Matrix */}
          <div className="poster-hero-bottom-grid">
            {/* Engineering Thesis Box with 3D Tilt */}
            <TiltCard
              className="poster-thesis-box anim-hero-box"
              tiltOptions={{ maxRotation: 3.5, speed: 250 }}
            >
              <div>
                <div className="thesis-header-bar">
                  <span>[ENGINEERING_THESIS]</span>
                  <span>VOL. 26</span>
                </div>
                <p className="poster-lead">
                  Software Engineer with <strong>2 years of professional experience</strong> engineering modern full-stack web applications, scalable Go &amp; Python backend microservices, real-time streaming APIs, and production-ready products.
                </p>

                <div className="poster-btn-group">
                  <button
                    type="button"
                    className="btn-poster-solid"
                    onClick={() => scrollTo("work")}
                  >
                    <span>VIEW SHIPPED WORK</span>
                    <span className="arr" aria-hidden="true">↓</span>
                  </button>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-poster-wire"
                    aria-label="Download Resume (PDF)"
                  >
                    <span>DOWNLOAD RESUME</span>
                    <span className="arr" aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              <div className="poster-meta-footer">
                <div className="meta-item">
                  <span className="m-lbl">FOCUS:</span>
                  <span className="m-val">Clean Architecture &amp; Latency</span>
                </div>
                <div className="meta-item">
                  <span className="m-lbl">SPECIALTY:</span>
                  <span className="m-val">React / Next.js / Go / FastAPI</span>
                </div>
              </div>
            </TiltCard>

            {/* Interactive Telemetry Matrix Panel */}
            <SystemTelemetry onCopyEmail={onCopyEmail} />
          </div>
        </div>

        {/* Live Moving Tech Stack Marquee Band */}
        <TechMarquee label="ENGINEERING CORE:" />

        {/* Poster Accent Cards (Three Engineering Pillars) */}
        <div className="poster-trio-grid">
          <TiltCard
            className="trio-block anim-trio-card"
            tiltOptions={{ maxRotation: 3.0, speed: 250 }}
          >
            <div className="trio-num-badge" aria-hidden="true">01</div>
            <span className="t-kicker">[01] FRONTEND SYSTEMS</span>
            <h4>Interactive Engineering</h4>
            <p>
              Next.js, React, TypeScript, state synchronization, accessible design systems &amp; fluid 60fps micro-animations.
            </p>
            <div className="trio-footer-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>GSAP</span>
            </div>
          </TiltCard>

          <TiltCard
            className="trio-block anim-trio-card"
            tiltOptions={{ maxRotation: 3.0, speed: 250 }}
          >
            <div className="trio-num-badge" aria-hidden="true">02</div>
            <span className="t-kicker">[02] BACKEND SERVICES</span>
            <h4>Microservices &amp; Streaming</h4>
            <p>
              High-throughput Go Gin, Python FastAPI, WebSockets &amp; sub-50ms latency audio/data processing pipelines.
            </p>
            <div className="trio-footer-tags">
              <span>Go (Gin)</span>
              <span>FastAPI</span>
              <span>WSS</span>
            </div>
          </TiltCard>

          <TiltCard
            className="trio-block anim-trio-card"
            tiltOptions={{ maxRotation: 3.0, speed: 250 }}
          >
            <div className="trio-num-badge" aria-hidden="true">03</div>
            <span className="t-kicker">[03] PERSISTENCE &amp; OPS</span>
            <h4>Database Integrity</h4>
            <p>
              PostgreSQL with sqlc &amp; pgx, optimistic concurrency control, Redis caching, and Dockerized microservice deployments.
            </p>
            <div className="trio-footer-tags">
              <span>PostgreSQL</span>
              <span>sqlc</span>
              <span>Docker</span>
            </div>
          </TiltCard>
        </div>

        {/* Swiss Architectural Transition Specification Strip */}
        <div className="poster-transition-strip" role="region" aria-label="System Specifications">
          <div className="pt-col">
            <span className="pt-code">[SPEC_01] DETERMINISTIC SYSTEM</span>
            <p className="pt-text">Predictable state machines and zero memory leaks under high concurrent traffic.</p>
          </div>
          <div className="pt-col">
            <span className="pt-code">[SPEC_02] SUB-50MS LATENCY</span>
            <p className="pt-text">Low-overhead binary protocols, indexed queries, and in-memory cache layers.</p>
          </div>
          <div className="pt-col">
            <span className="pt-code">[SPEC_03] KINETIC RIGOR</span>
            <p className="pt-text">60 FPS animation loop, strict layout boundaries, and editorial Swiss typographic rigor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
