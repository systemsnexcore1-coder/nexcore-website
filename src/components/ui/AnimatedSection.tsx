"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
