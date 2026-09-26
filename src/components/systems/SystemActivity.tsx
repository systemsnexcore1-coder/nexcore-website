"use client";

import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./system-motion.css";

type SystemActivityProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  decorative?: boolean;
};

export function SystemActivity({ children, className, style, decorative }: SystemActivityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "40px" });
  const reduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn("system-activity", className)}
      data-live={inView && !reduced ? "true" : "false"}
      style={style}
      aria-hidden={decorative || undefined}
    >
      {children}
    </div>
  );
}
