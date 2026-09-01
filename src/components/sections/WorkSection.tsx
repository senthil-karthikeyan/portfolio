"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { TiltCard } from "@/components/interactions/TiltCard";

export function WorkSection() {
  // 1. Karu Screenplay Typing Simulator
  const [typingText, setTypingText] = useState("“Every line of code bears structural weight.”");

  useEffect(() => {
    const phrases = [
      "“Every line of code bears structural weight.”",
      "“Optimistic UI with instant sub-15ms autosave.”",
      "“Clean architecture from screenplay to database.”",
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIdx];
      if (isDeleting) {
        setTypingText(currentPhrase.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypingText(currentPhrase.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 25 : 60;

      if (!isDeleting && charIdx === currentPhrase.length) {
        speed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        speed = 500;
      }

      timeoutId = setTimeout(typeLoop, speed);
    };

    timeoutId = setTimeout(typeLoop, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  // 2. VoxPulse Dynamic 16-Bar Equalizer
  const [isWaveActive, setIsWaveActive] = useState(true);
  const [barHeights, setBarHeights] = useState<number[]>([
    35, 65, 95, 45, 80, 100, 60, 75, 30, 70, 90, 40, 65, 85, 50, 95,
  ]);
  const [telemetry, setTelemetry] = useState({
    latency: "17.4ms",
    confidence: "99.2%",
  });

  useEffect(() => {
    if (!isWaveActive) return;

    const interval = setInterval(() => {
      setBarHeights(
        Array.from({ length: 16 }, () => Math.floor(Math.random() * 75) + 25)
      );
      setTelemetry({
        latency: `${(16.8 + Math.random() * 1.6).toFixed(1)}ms`,
        confidence: `${(98.9 + Math.random() * 0.9).toFixed(1)}%`,
      });
    }, 220);

    return () => clearInterval(interval);
  }, [isWaveActive]);

  const displayedBarHeights = isWaveActive
    ? barHeights
    : [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  // 3. Interactive Notes Board Checkboxes
  const [notesItems, setNotesItems] = useState([
    { id: 1, text: "Deploy strict optimistic locking", done: true },
    { id: 2, text: "Audit WebSockets latency under 50ms", done: true },
    { id: 3, text: "Ship clean Swiss Brutalist interface", done: false },
  ]);

  const toggleNote = (id: number) => {
    setNotesItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // 4. Face Animate Landmark Simulation
  const [facePoints, setFacePoints] = useState([
    { x: 30, y: 35 }, { x: 70, y: 35 }, { x: 50, y: 55 },
    { x: 38, y: 75 }, { x: 50, y: 78 }, { x: 62, y: 75 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFacePoints([
        { x: 30 + (Math.random() * 4 - 2), y: 35 + (Math.random() * 4 - 2) },
        { x: 70 + (Math.random() * 4 - 2), y: 35 + (Math.random() * 4 - 2) },
        { x: 50 + (Math.random() * 4 - 2), y: 55 + (Math.random() * 3 - 1.5) },
        { x: 38 + (Math.random() * 4 - 2), y: 75 + (Math.random() * 4 - 2) },
        { x: 50 + (Math.random() * 4 - 2), y: 78 + (Math.random() * 4 - 2) },
        { x: 62 + (Math.random() * 4 - 2), y: 75 + (Math.random() * 4 - 2) }
      ]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // 5. Miro Collaborative Cursors
  const [cursorPos, setCursorPos] = useState({ x: 65, y: 40 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPos({
        x: Math.floor(Math.random() * 60) + 20,
        y: Math.floor(Math.random() * 60) + 20,
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="work"
      className="poster-section"
      aria-label="Selected Shipped Works Section"
    >
      <div className="p-container">
        {/* Banner Header */}
        <div className="poster-banner-title scroll-banner">
          <span className="banner-num">04</span>
          <h2 className="banner-text">SELECTED SHIPPED WORKS</h2>
          <span className="banner-glow" aria-hidden="true" />
        </div>

        <div className="poster-works-stack">
          {projects.map((project) => (
            <article
              key={project.id}
              className="poster-project-card anim-proj-card"
            >
              {/* Project Top Bar */}
              <div className="proj-banner-bar">
                <span className="pb-left">PROJECT // [{project.number}]</span>
                <span className="pb-right">{project.category}</span>
              </div>

              <div className="proj-body-grid">
                {/* Left Description & Specs */}
                <div className="proj-info-col">
                  <h3 className="proj-giant-title">{project.title}</h3>
                  <span className="proj-sub-title">{project.subtitle}</span>

                  <p className="proj-para">{project.description}</p>

                  <div className="proj-specs-checklist">
                    {project.specs.map((spec, idx) => (
                      <div key={idx} className="spec-row">
                        <strong>{spec.label}:</strong> {spec.detail}
                      </div>
                    ))}
                  </div>

                  <div className="proj-tags-row">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="proj-btns">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-poster-solid"
                        aria-label={`View Live Demo for ${project.title}`}
                      >
                        <span>LIVE DEMO</span>
                        <span className="arr" aria-hidden="true">↗</span>
                      </a>
                    )}
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.liveUrl ? "btn-poster-wire" : "btn-poster-solid"}
                      aria-label={`View Source Code for ${project.title}`}
                    >
                      <span>VIEW SOURCE</span>
                      <span className="arr" aria-hidden="true">↗</span>
                    </a>
                    {project.id === "voxpulse" && (
                      <button
                        type="button"
                        onClick={() => setIsWaveActive(!isWaveActive)}
                        className="btn-poster-wire"
                        id="wave-toggle-btn"
                        aria-label="Toggle audio equalizer stream"
                      >
                        <span id="wave-btn-text">
                          {isWaveActive ? "PULSE STREAM: ACTIVE" : "PULSE STREAM: PAUSED"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Interactive Mockup — ONLY THIS DEMO CARD GETS TILT */}
                <div className="proj-visual-col">
                  <TiltCard
                    className="poster-mockup-box"
                    tiltOptions={{ maxRotation: 4.0, speed: 250 }}
                  >
                    <div className="mockup-header">
                      <span>{project.mockup.header}</span>
                      <span
                        className={`mock-badge ${
                          project.mockup.type === "equalizer" ? "pulse-tag" : ""
                        }`}
                        id={project.id === "karu" ? "fps-badge" : undefined}
                      >
                        {project.mockup.badge}
                      </span>
                    </div>

                    <div className="mockup-content">
                      {/* 1. Karu Screenplay Mockup */}
                      {project.mockup.type === "screenplay" && (
                        <div className="screenplay-interactive">
                          <div className="sc-slug">INT. SCREENPLAY STUDIO - NIGHT</div>
                          <div className="sc-action">
                            Mathematical layouts. Realtime synchronization. No distraction.
                          </div>
                          <div className="sc-char">SENTHIL</div>
                          <div className="sc-dial" id="karu-typing-text">
                            <span>{typingText}</span>
                          </div>
                          <div className="sc-cursor-row">
                            <span className="editor-status-text">[ AUTOSAVED • 0 CONFLICTS ]</span>
                            <span className="blinking-cursor" aria-hidden="true">|</span>
                          </div>
                        </div>
                      )}

                      {/* 2. VoxPulse Equalizer Mockup */}
                      {project.mockup.type === "equalizer" && (
                        <div>
                          <div
                            id="poster-wave"
                            className="poster-wave-container"
                            aria-label="Audio Equalizer Visualizer"
                          >
                            {displayedBarHeights.map((h, i) => (
                              <span
                                key={i}
                                className="pw-bar"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                          <div className="mockup-telemetry">
                            <div>
                              <span>LATENCY</span>
                              <strong id="vox-lat">{telemetry.latency}</strong>
                            </div>
                            <div>
                              <span>CONFIDENCE</span>
                              <strong id="vox-conf">{telemetry.confidence}</strong>
                            </div>
                            <div>
                              <span>MODEL</span>
                              <strong>PYTORCH 2.x</strong>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. Notes Interactive Board Mockup */}
                      {project.mockup.type === "notes" && (
                        <div className="interactive-notes-board">
                          {notesItems.map((note) => (
                            <div
                              key={note.id}
                              className={`note-item-check ${note.done ? "done" : ""}`}
                              onClick={() => toggleNote(note.id)}
                              role="checkbox"
                              aria-checked={note.done}
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === " " || e.key === "Enter") {
                                  e.preventDefault();
                                  toggleNote(note.id);
                                }
                              }}
                            >
                              <span className="check-box" aria-hidden="true">
                                {note.done ? "✓" : "□"}
                              </span>
                              <span className="note-text">{note.text}</span>
                            </div>
                          ))}
                          <div className="note-hint-label">
                            [CLICK TO TOGGLE TASK STATE]
                          </div>
                        </div>
                      )}

                      {/* 4. Face Animate 3D Landmark Mesh Mockup */}
                      {project.mockup.type === "face-animate" && (
                        <div style={{ position: "relative", minHeight: "130px", background: "#0D0E12", border: "1px solid #27272A", padding: "0.75rem", fontFamily: "var(--font-mono)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", color: "#60A5FA", marginBottom: "0.5rem" }}>
                            <span>MEDIAPIPE 468 MESH</span>
                            <span>BLENDSHAPES: 52</span>
                          </div>
                          <div style={{ position: "relative", height: "80px", border: "1px dashed rgba(255,255,255,0.15)" }}>
                            {facePoints.map((pt, idx) => (
                              <div
                                key={idx}
                                style={{
                                  position: "absolute",
                                  left: `${pt.x}%`,
                                  top: `${pt.y}%`,
                                  width: "6px",
                                  height: "6px",
                                  background: idx < 2 ? "#60A5FA" : idx === 2 ? "#10B981" : "#F59E0B",
                                  borderRadius: "50%",
                                  transform: "translate(-50%, -50%)",
                                  transition: "all 0.35s ease",
                                  boxShadow: "0 0 6px rgba(96,165,250,0.8)"
                                }}
                              />
                            ))}
                            <div style={{ position: "absolute", bottom: "4px", right: "6px", fontSize: "0.58rem", color: "#A1A1AA" }}>
                              R3F / SHADER VERTEX PASS
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 5. Movie Universe Cinema Database Mockup */}
                      {project.mockup.type === "movie-universe" && (
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E5E7EB", paddingBottom: "0.4rem", marginBottom: "0.6rem" }}>
                            <span style={{ fontWeight: 800 }}>CINEMA ARCHIVE // TOP PICKS</span>
                            <span style={{ color: "#0038FF", fontWeight: 800 }}>IMDb 8.9 ★</span>
                          </div>
                          <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
                            <span style={{ background: "var(--post-black)", color: "#fff", padding: "0.15rem 0.45rem", fontSize: "0.65rem", fontWeight: 700 }}>SCI-FI</span>
                            <span style={{ background: "#E5E7EB", padding: "0.15rem 0.45rem", fontSize: "0.65rem", fontWeight: 700 }}>DIRECTOR: NOLAN</span>
                            <span style={{ background: "#E5E7EB", padding: "0.15rem 0.45rem", fontSize: "0.65rem", fontWeight: 700 }}>4K HDR</span>
                          </div>
                          <div style={{ fontSize: "0.68rem", color: "var(--post-muted)", borderTop: "1px dashed #D1D5DB", paddingTop: "0.4rem" }}>
                            EDGE HYDRATION • FRAMER MOTION TRANSITIONS
                          </div>
                        </div>
                      )}

                      {/* 6. Miro Collaborative Whiteboard Mockup */}
                      {project.mockup.type === "miro" && (
                        <div style={{ position: "relative", minHeight: "130px", background: "#FAF9F5", border: "1px solid var(--post-border)", padding: "0.75rem", fontFamily: "var(--font-mono)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", fontWeight: 800, color: "var(--post-blue)", marginBottom: "0.5rem" }}>
                            <span>BOARD // SPRINT_PLANNING</span>
                            <span>LIVEBLOCKS SYNC</span>
                          </div>
                          <div style={{ position: "relative", height: "80px", background: "#FFFFFF", border: "1px dashed #D1D5DB", overflow: "hidden" }}>
                            {/* Sticky Note */}
                            <div style={{ position: "absolute", left: "12%", top: "15%", background: "#FEF08A", border: "1px solid #CA8A04", padding: "0.25rem 0.45rem", fontSize: "0.58rem", fontWeight: 700 }}>
                              Sticky: Architecture
                            </div>
                            {/* Remote Cursor */}
                            <div
                              style={{
                                position: "absolute",
                                left: `${cursorPos.x}%`,
                                top: `${cursorPos.y}%`,
                                transform: "translate(0, 0)",
                                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
                                pointerEvents: "none",
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                <span style={{ color: "#0038FF", fontSize: "0.8rem", lineHeight: 1 }}>▲</span>
                                <span style={{ background: "#0038FF", color: "#FFFFFF", fontSize: "0.55rem", padding: "1px 4px", fontWeight: 800 }}>
                                  Collab_Dev_02
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
