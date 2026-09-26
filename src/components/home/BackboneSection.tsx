"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackboneSection({ children, className, index, id }: { children: ReactNode; className?: string; index: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const visible = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const nodeOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.35, 1, 1]);

  return (
    <section ref={ref} id={id} className={cn("backbone-section relative", className)}>
      <div className="backbone-rail" aria-hidden="true" data-live={visible && !reduced ? "true" : "false"}>
        <motion.span className="backbone-progress" style={{ scaleY: reduced ? 1 : scrollYProgress }}><i /></motion.span>
        <motion.span className="backbone-junction" style={{ opacity: reduced ? 1 : nodeOpacity }}><span>{index}</span></motion.span>
      </div>
      {children}
    </section>
  );
}
