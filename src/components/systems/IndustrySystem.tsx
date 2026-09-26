"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { ArrowDownToLine, Database, GitBranch, ScanLine, ShieldCheck } from "lucide-react";
import { industryWorkflows } from "@/lib/workflows";
import { SystemActivity } from "./SystemActivity";

const icons = [ArrowDownToLine, GitBranch, ShieldCheck, Database, ScanLine];
const arrangements = [
  [[15, 24], [50, 24], [85, 24], [69, 77], [25, 77]],
  [[15, 23], [50, 51], [85, 23], [85, 78], [15, 78]],
  [[15, 24], [50, 24], [85, 51], [50, 78], [15, 78]],
  [[15, 24], [50, 24], [85, 24], [50, 77], [15, 77]],
  [[15, 24], [15, 77], [50, 51], [85, 24], [85, 77]],
  [[15, 24], [50, 51], [50, 24], [85, 51], [50, 78]],
  [[15, 24], [50, 24], [85, 51], [50, 78], [15, 78]]
];
const mobileColumns = [
  [24, 76, 24, 76, 24],
  [76, 24, 76, 24, 76],
  [24, 24, 76, 76, 24],
  [76, 24, 24, 76, 76],
  [24, 76, 76, 24, 24],
  [76, 76, 24, 24, 76],
  [24, 24, 76, 24, 76]
];

function connection(from: number[], to: number[]) {
  const middle = (from[0] + to[0]) / 2;
  return `M${from[0]} ${from[1]}C${middle} ${from[1]} ${middle} ${to[1]} ${to[0]} ${to[1]}`;
}

export function IndustrySystem({ index }: { index: number }) {
  const reduced = useReducedMotion();
  const points = arrangements[index] || arrangements[0];
  const mobilePositions = (mobileColumns[index] || mobileColumns[0]).map((x, order) => [x, 12 + order * 18]);
  const steps = industryWorkflows[index] || industryWorkflows[0];
  const transition = { duration: reduced ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <SystemActivity className="industry-operating-system">
      <div className="industry-system-canvas">
        {[false, true].map(mobile => (
          <svg key={String(mobile)} className={mobile ? "industry-connections-mobile" : "industry-connections-desktop"} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
            {steps.slice(0, -1).map((_, step) => {
              const positions = mobile ? mobilePositions : points;
              const d = connection(positions[step], positions[step + 1]);
              return <g key={step}><motion.path initial={false} animate={{ d }} transition={transition} vectorEffect="non-scaling-stroke" className="signal-track" /><motion.path initial={false} animate={{ d }} transition={transition} vectorEffect="non-scaling-stroke" pathLength={1} className="signal-packet" style={{ animationDuration: "6s", animationDelay: `${step * -1.5}s` }} /></g>;
            })}
          </svg>
        ))}
        <ol aria-label="Industry operating workflow">
          {steps.map((step, order) => {
            const Icon = icons[order];
            return (
              <motion.li
                key={order}
                className="industry-system-node"
                initial={false}
                animate={{ "--node-x": `${points[order][0]}%`, "--node-y": `${points[order][1]}%`, "--mobile-x": `${mobilePositions[order][0]}%`, "--mobile-y": `${mobilePositions[order][1]}%` }}
                transition={transition}
                style={{ animationDelay: `${order * 1.5}s` } as CSSProperties}
              >
                <div className="industry-node-head"><Icon strokeWidth={1.5} aria-hidden="true" /><span aria-hidden="true">{String(order + 1).padStart(2, "0")}</span></div>
                <span key={step} className="industry-node-name">{step}</span>
              </motion.li>
            );
          })}
        </ol>
      </div>
      <div className="industry-system-baseline" aria-hidden="true"><span>INPUT</span><i /><span>CONNECTED WORKFLOWS</span><i /><span>OUTCOME</span></div>
    </SystemActivity>
  );
}
