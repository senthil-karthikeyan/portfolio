"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="poster-footer" role="contentinfo">
      <div className="p-container footer-row-poster">
        <div className="p-f-left">
          <div className="p-f-brand">
            {siteConfig.name.toUpperCase()} {`//`} SOFTWARE SYSTEMS & ENGINEERING
          </div>
          <div className="p-f-sub">
            Swiss typographic grid & monolithic composition. Built with Next.js 16 & TypeScript.
          </div>
        </div>

        <div className="p-f-right">
          <button
            type="button"
            className="p-f-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            [ ▲ BACK TO TOP ]
          </button>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
