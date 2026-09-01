"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGSAPAnimations() {
  useEffect(() => {
    // Register plugin on client
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Initial Hero Entrance Sequence
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      heroTl
        .from(".poster-header", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".poster-hero-tag",
          {
            opacity: 0,
            x: -20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-line",
          {
            yPercent: 110,
            duration: 0.95,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".poster-thesis-box",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".poster-interactive-matrix",
          {
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".hero-tech-strip",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".trio-block",
          {
            opacity: 0,
            y: 35,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // 2. Banner Headers Kinetic Reveal
      gsap.utils.toArray<HTMLElement>(".poster-banner-title").forEach((banner) => {
        gsap.from(banner, {
          scrollTrigger: {
            trigger: banner,
            start: "top 85%",
          },
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // 3. About Section Reveal
      const aboutLayout = document.querySelector(".poster-about-layout");
      if (aboutLayout) {
        gsap.from(".about-quote-monolith", {
          scrollTrigger: {
            trigger: aboutLayout,
            start: "top 80%",
          },
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: "power3.out",
        });

        gsap.from(".about-narrative-block", {
          scrollTrigger: {
            trigger: aboutLayout,
            start: "top 80%",
          },
          opacity: 0,
          x: 30,
          duration: 0.85,
          delay: 0.15,
          ease: "power3.out",
        });
      }

      // 4. Experience Cards
      gsap.utils.toArray<HTMLElement>(".poster-exp-card").forEach((card, idx) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
          opacity: 0,
          y: 40,
          duration: 0.85,
          delay: idx * 0.1,
          ease: "power3.out",
        });
      });

      // 5. Work Project Cards
      gsap.utils.toArray<HTMLElement>(".poster-project-card").forEach((projCard) => {
        gsap.from(projCard, {
          scrollTrigger: {
            trigger: projCard,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          scale: 0.98,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      // 6. Skills Matrix
      const skillsSection = document.querySelector("#skills");
      if (skillsSection) {
        gsap.from(".p-skill-block", {
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 80%",
            once: true,
          },
          opacity: 0,
          y: 35,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }

      // 7. Contact Section
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        gsap.from(".poster-contact-container", {
          scrollTrigger: {
            trigger: contactSection,
            start: "top 82%",
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }
    });

    // Refresh ScrollTrigger after initial mount
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);
}
