"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";

export function DeliveryProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const currentStage = useRef(0);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 52%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const position = useTransform(progress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(progress, "change", value => {
    const nextStage = Math.min(processSteps.length - 1, Math.floor(value * (processSteps.length - 1) + 0.05));
    if (nextStage !== currentStage.current) {
      currentStage.current = nextStage;
      setActive(nextStage);
    }
  });

  return (
    <div ref={ref} className="delivery-story mt-14">
      <div className="delivery-story-readout" aria-hidden="true">
        <span>DELIVERY PATH</span>
        <span>{reducedMotion ? "05 STAGES" : `${String(active + 1).padStart(2, "0")} / 05`}</span>
      </div>
      <div className="delivery-story-route">
        <div className="delivery-story-track delivery-story-track-horizontal" aria-hidden="true">
          <motion.span style={{ scaleX: reducedMotion ? 1 : progress }} />
          {!reducedMotion && <motion.i style={{ left: position }} />}
        </div>
        <div className="delivery-story-track delivery-story-track-vertical" aria-hidden="true">
          <motion.span style={{ scaleY: reducedMotion ? 1 : progress }} />
          {!reducedMotion && <motion.i style={{ top: position }} />}
        </div>
        <ol className="delivery-story-steps" aria-label="Nexcore delivery process">
          {processSteps.map((step, index) => (
            <li key={step.title} className="delivery-story-step" data-active={reducedMotion || active === index} data-reached={reducedMotion || active >= index}>
              <span className="delivery-story-node">{String(index + 1).padStart(2, "0")}</span>
              <div className="delivery-story-copy">
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.summary}</p>
                <span className="delivery-story-underline" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
