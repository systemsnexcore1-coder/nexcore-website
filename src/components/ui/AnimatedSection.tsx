"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "slide" | "scale";
};

export function AnimatedSection({ children, className, delay = 0, variant = "rise" }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const entry = variant === "slide" ? { x: -16 } : variant === "scale" ? { scale: 0.98 } : { y: 18 };

  return (
    <motion.div
      className={cn("section-reveal", className)}
      initial={prefersReducedMotion ? false : entry}
      whileInView={{ x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
