"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { useTilt } from "@/hooks/useTilt";

interface SystemTelemetryProps {
  onCopyEmail?: (email: string) => void;
}

export function SystemTelemetry({ onCopyEmail }: SystemTelemetryProps) {
  const cardRef = useTilt<HTMLDivElement>({
    maxRotation: 3.5,
    speed: 250,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coordinates, setCoordinates] = useState("LOC: [X: 000 / Y: 000]");
  const [counters, setCounters] = useState({
    experience: 0,
    apps: 0,
    latency: 0,
    typesafe: 0,
  });

  // 1. Counter animation on initial load
  useEffect(() => {
    const targets = {
      experience: 2,
      apps: 6,
      latency: 50,
      typesafe: 100,
    };

    const duration = 1000;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(1, step / steps);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounters({
        experience: Math.round(targets.experience * eased),
        apps: Math.round(targets.apps * eased),
        latency: Math.round(targets.latency * eased),
        typesafe: Math.round(targets.typesafe * eased),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // 2. Interactive Canvas Geometric Scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;
    let mouseX = canvas.offsetWidth / 2;
    let mouseY = canvas.offsetHeight / 2;
    let isMouseOver = false;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = (rect.height || 85) * dpr;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = x * dpr;
      mouseY = y * dpr;
      isMouseOver = true;
      setCoordinates(
        `LOC: [X: ${Math.round(x).toString().padStart(3, "0")} / Y: ${Math.round(y).toString().padStart(3, "0")}]`
      );
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = window.devicePixelRatio || 1;

      ctx.clearRect(0, 0, w, h);

      // Draw Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      const step = 20 * dpr;

      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Rotating Swiss Cross / Geometry
      ctx.save();
      ctx.translate(w * 0.25, h * 0.5);
      ctx.rotate(angle);
      ctx.fillStyle = "#0038FF";
      const crossW = 30 * dpr;
      const crossH = 8 * dpr;
      ctx.fillRect(-crossW / 2, -crossH / 2, crossW, crossH);
      ctx.fillRect(-crossH / 2, -crossW / 2, crossH, crossW);
      ctx.restore();

      // Draw Interactive Crosshair Tracking Pointer
      const currentMouseX = isMouseOver ? mouseX : w * 0.7;
      const currentMouseY = isMouseOver ? mouseY : h * 0.5;

      ctx.strokeStyle = "#60A5FA";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(currentMouseX, currentMouseY, 12 * dpr, 0, Math.PI * 2);
      ctx.moveTo(currentMouseX - 18 * dpr, currentMouseY);
      ctx.lineTo(currentMouseX + 18 * dpr, currentMouseY);
      ctx.moveTo(currentMouseX, currentMouseY - 18 * dpr);
      ctx.lineTo(currentMouseX, currentMouseY + 18 * dpr);
      ctx.stroke();

      // Draw Dynamic Data Waveform Line
      ctx.strokeStyle = "#34D399";
      ctx.lineWidth = 2 * dpr;
      ctx.beginPath();
      for (let i = 0; i < w * 0.45; i += 5 * dpr) {
        const px = w * 0.5 + i;
        const py = h * 0.5 + Math.sin(i * 0.05 + angle * 3) * (12 * dpr);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      if (!prefersReducedMotion) {
        angle += 0.015;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCopyEmail) {
      onCopyEmail(siteConfig.email);
    } else {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <div
      ref={cardRef}
      className="poster-interactive-matrix anim-hero-matrix"
      id="hero-matrix-panel"
      role="region"
      aria-label="System Telemetry Live Panel"
    >
      <div className="matrix-card-bar">
        <span>SYSTEM_TELEMETRY // LIVE</span>
        <span className="matrix-coord" id="matrix-coord-tag">
          {coordinates}
        </span>
      </div>

      <div className="matrix-grid-visual">
        <span className="geo-bracket tl">+</span>
        <span className="geo-bracket tr">+</span>
        <span className="geo-bracket bl">+</span>
        <span className="geo-bracket br">+</span>

        <div className="matrix-stat-pills">
          <div className="stat-pill-box">
            <span className="sp-num">{counters.experience}</span>
            <span className="sp-unit">+</span>
            <span className="sp-lbl">YEARS EXP</span>
          </div>
          <div className="stat-pill-box">
            <span className="sp-num">{counters.apps}</span>
            <span className="sp-lbl">CORE APPS</span>
          </div>
          <div className="stat-pill-box">
            <span className="sp-num">&lt;</span>
            <span className="sp-num">{counters.latency}</span>
            <span className="sp-unit">ms</span>
            <span className="sp-lbl">API LATENCY</span>
          </div>
          <div className="stat-pill-box">
            <span className="sp-num">{counters.typesafe}</span>
            <span className="sp-unit">%</span>
            <span className="sp-lbl">TYPE SAFE</span>
          </div>
        </div>

        <div className="matrix-interactive-canvas-box">
          <canvas
            ref={canvasRef}
            id="swiss-geo-canvas"
            aria-label="Interactive geometric Swiss cross and waveform visualizer"
          />
          <div className="canvas-caption-row">
            <span>DYNAMIC GEOMETRIC ORCHESTRATION</span>
            <span className="canvas-fps" id="canvas-fps">
              60 FPS
            </span>
          </div>
        </div>
      </div>

      <div className="poster-links-block anim-hero-links">
        <div className="p-link-row">
          <span className="pl-num">01/</span>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="kinetic-link"
          >
            GITHUB ARCHIVE ↗
          </a>
        </div>
        <div className="p-link-row">
          <span className="pl-num">02/</span>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="kinetic-link"
          >
            LINKEDIN PROFILE ↗
          </a>
        </div>
        <div className="p-link-row">
          <span className="pl-num">03/</span>
          <button
            type="button"
            className="kinetic-link"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textAlign: "left",
              color: "inherit",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
            onClick={handleEmailClick}
          >
            DIRECT EMAIL ↗
          </button>
        </div>
      </div>
    </div>
  );
}
