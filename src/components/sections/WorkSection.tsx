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
    if (!isWaveActive) {
      setBarHeights(new Array(16).fill(10));
      return;
    }

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
                      {/* Karu Screenplay Mockup */}
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

                      {/* VoxPulse Equalizer Mockup */}
                      {project.mockup.type === "equalizer" && (
                        <div>
                          <div
                            id="poster-wave"
                            className="poster-wave-container"
                            aria-label="Audio Equalizer Visualizer"
                          >
                            {barHeights.map((h, i) => (
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

                      {/* Notes Interactive Board Mockup */}
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
