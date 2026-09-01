"use client";

import React from "react";

export function TopTicker() {
  const tickerText =
    "SWISS POSTER SPECIFICATION // SEN-K • FULL-STACK SYSTEMS • GOLANG GIN • PYTHON FASTAPI • NEXT.JS • POSTGRESQL • WEBSOCKETS • DOCKER • ";

  return (
    <aside
      className="poster-top-strip"
      id="top-ticker"
      aria-label="System status ticker"
      role="region"
    >
      <div className="strip-wrap">
        <span>{tickerText.repeat(2)}</span>
        <span aria-hidden="true">{tickerText.repeat(2)}</span>
      </div>
    </aside>
  );
}
