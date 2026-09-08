"use client";

import React from "react";
import { siteConfig } from "@/config/site";

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
}

export function ContactSection({ onCopyEmail }: ContactSectionProps) {
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    onCopyEmail(siteConfig.email);
  };

  return (
    <section
      id="contact"
      className="poster-contact-section"
      aria-label="Contact Section"
    >
      <div className="p-container">
        {/* Banner Header */}
        <div className="poster-banner-title scroll-banner">
          <span className="banner-num">06</span>
          <h2 className="banner-text">CONTACT &amp; DIRECTORY DISPATCH</h2>
          <span className="banner-glow" aria-hidden="true" />
        </div>

        <div className="poster-contact-container anim-contact-left">
          <h3 className="p-c-headline">
            INITIALIZE DISPATCH // SECURE CONNECTION
          </h3>
          <p className="p-c-sub">
            Available for full-time software engineering roles, distributed systems consulting, and high-impact web products. Response guaranteed within 24 hours.
          </p>

          <div className="p-directory-list" role="list">
            {/* Email */}
            <div className="p-dir-item" role="listitem">
              <span className="pdk">01/ DIRECT EMAIL</span>
              <div className="p-dir-action">
                <a href={`mailto:${siteConfig.email}`} className="p-dir-link">
                  {siteConfig.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn-poster-wire p-copy-btn"
                  aria-label="Copy email address to clipboard"
                >
                  [ COPY 📋 ]
                </button>
              </div>
            </div>

            {/* GitHub */}
            <div className="p-dir-item" role="listitem">
              <span className="pdk">02/ GITHUB ARCHIVE</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{siteConfig.githubHandle} [↗]
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-dir-item" role="listitem">
              <span className="pdk">03/ LINKEDIN PROFILE</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/{siteConfig.linkedinHandle} [↗]
              </a>
            </div>

            {/* Resume */}
            <div className="p-dir-item" role="listitem">
              <span className="pdk">04/ CURRICULUM VITAE</span>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                senthil_resume.pdf [↓]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
