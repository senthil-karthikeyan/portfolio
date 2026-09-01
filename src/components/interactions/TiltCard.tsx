"use client";

import React, { forwardRef, HTMLAttributes } from "react";
import { useTilt, type TiltOptions } from "@/hooks/useTilt";

export interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  tiltOptions?: TiltOptions;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ tiltOptions, children, className = "", as: Component = "div", ...props }, externalRef) => {
    const internalRef = useTilt<HTMLDivElement>(tiltOptions);

    const setRefs = (node: HTMLDivElement | null) => {
      (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof externalRef === "function") {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    };

    return (
      <Component
        ref={setRefs}
        className={className}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

TiltCard.displayName = "TiltCard";
