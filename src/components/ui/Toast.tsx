"use client";

import React from "react";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      className={`poster-toast ${message ? "show" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="toast-indicator" />
      <span>{message}</span>
    </div>
  );
}
