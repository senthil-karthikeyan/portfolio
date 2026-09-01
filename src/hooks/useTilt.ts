"use client";

import { useEffect, useRef, useCallback } from "react";

export interface TiltOptions {
  maxRotation?: number; // Maximum tilt angle in degrees (default: 3.5)
  perspective?: number; // CSS perspective in px (default: 800)
  scale?: number; // Scale on hover (default: 1.0)
  speed?: number; // Transition duration in ms (default: 300)
  easing?: string; // Transition easing (default: "cubic-bezier(0.16, 1, 0.3, 1)")
  disabled?: boolean; // Force disable
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(
  options: TiltOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    maxRotation = 3.5,
    perspective = 800,
    scale = 1.0,
    speed = 300,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    disabled = false,
  } = options;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el || disabled) return;

      // Disable on touch / small screens
      if (window.innerWidth <= 900) return;

      // Respect prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const rotateX = -deltaY * maxRotation;
      const rotateY = deltaX * maxRotation;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1) translate(-2px, -2px)`;
    },
    [maxRotation, perspective, scale, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translate(0px, 0px)`;
  }, [perspective]);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    el.style.transition = `transform ${speed}ms ${easing}, box-shadow ${speed}ms ${easing}`;
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, speed, easing, disabled]);

  return ref;
}
