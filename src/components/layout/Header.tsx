"use client";

import React, { useEffect, useState } from "react";
import { siteConfig, type SectionId } from "@/config/site";

interface HeaderProps {
  activeSection?: SectionId;
  onNavigate?: (id: SectionId) => void;
}

export function Header({ activeSection = "home", onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<SectionId>(activeSection);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: SectionId) => {
    setMobileMenuOpen(false);
    setActive(id);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="poster-header" id="poster-header" role="banner">
        <div className="p-container header-row">
          {/* Logo */}
          <button
            type="button"
            className="poster-logo"
            id="logo-link"
            onClick={() => handleNavClick("home")}
            aria-label={`${siteConfig.name} - Go to top`}
          >
            <span className="logo-box">{siteConfig.initials}</span>
            <div className="logo-text-group">
              <span className="logo-text">SENTHIL K.</span>
              <span className="logo-sub">{siteConfig.role}</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="poster-nav" aria-label="Poster Navigation">
            {siteConfig.navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`p-nav-link ${active === item.id ? "active" : ""}`}
                data-nav={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={active === item.id ? "page" : undefined}
              >
                [{item.number}] {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="poster-actions">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-poster-cv"
              aria-label="Download Resume (PDF)"
            >
              <span>RESUME (PDF) ↓</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="poster-burger"
              id="poster-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                style={{
                  transform: mobileMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  transform: mobileMenuOpen
                    ? "rotate(-45deg) translate(6px, -6px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`poster-drawer ${mobileMenuOpen ? "open" : ""}`}
        id="poster-drawer"
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="p-m-nav" aria-label="Mobile Navigation">
          {siteConfig.mobileNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="p-m-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.number}. {item.label}
            </button>
          ))}
        </nav>

        <div className="p-m-footer">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-m-resume"
          >
            DOWNLOAD RESUME (PDF) ↓
          </a>

          <div className="p-m-socials">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN ↗
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              EMAIL ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
