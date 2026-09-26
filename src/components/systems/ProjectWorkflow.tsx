"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  Activity, BarChart3, Boxes, Check, ClipboardCheck, ClipboardList,
  FileCheck2, FlaskConical, GitBranch, History, Inbox, Monitor,
  Package, PackageOpen, Pause, Play, RefreshCw, Route, ShieldCheck,
  Truck, UserRound, Users, Wrench
} from "lucide-react";
import { projectWorkflows } from "@/lib/workflows";
import styles from "./ProjectWorkflow.module.css";

type Workflow = (typeof projectWorkflows)[string];
type Point = { x: number; y: number };
type ProjectWorkflowProps = { slug: string; features: string[]; summary: string };

// References point to the project's existing feature copy; null uses its summary.
const stageDetails: Record<Workflow["icon"], (number | null)[]> = {
  lab: [0, 1, null, 2, 2],
  procurement: [0, 0, 1, 2, 3],
  stores: [0, null, 0, 3, 1],
  assets: [0, 1, 2, null, 2],
  fleet: [0, 0, 0, 1, 3]
};

const stageIcons = {
  lab: [Inbox, ClipboardList, FlaskConical, ShieldCheck, FileCheck2],
  procurement: [ClipboardList, GitBranch, Users, FileCheck2, BarChart3],
  stores: [PackageOpen, Boxes, Package, Activity, RefreshCw],
  assets: [Monitor, UserRound, Wrench, History, RefreshCw],
  fleet: [ClipboardList, ClipboardCheck, Truck, Route, BarChart3]
};

const tabletPoints: Point[] = [
  { x: 160, y: 105 }, { x: 500, y: 105 }, { x: 840, y: 105 },
  { x: 680, y: 295 }, { x: 240, y: 295 }
];

function connection(from: Point, to: Point) {
  if (from.y === to.y) return `M${from.x} ${from.y}H${to.x}`;
  const middleX = (from.x + to.x) / 2;
  const directionX = Math.sign(to.x - from.x);
  const directionY = Math.sign(to.y - from.y);
  const radius = 18;
  return `M${from.x} ${from.y}H${middleX - radius * directionX}Q${middleX} ${from.y} ${middleX} ${from.y + radius * directionY}V${to.y - radius * directionY}Q${middleX} ${to.y} ${middleX + radius * directionX} ${to.y}H${to.x}`;
}

function Connections({ points, active, className }: { points: Point[]; active: number; className: string }) {
  return (
    <svg className={`${styles.connections} ${className}`} viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M0 30H1000M0 370H1000" className={styles.constructionLine} />
      {points.slice(0, -1).map((point, index) => (
        <g key={index} className={styles.connection} data-current={index === active} data-reached={index < active}>
          <path d={connection(point, points[index + 1])} className={styles.track} vectorEffect="non-scaling-stroke" />
          <path d={connection(point, points[index + 1])} pathLength="100" className={styles.packetTrail} vectorEffect="non-scaling-stroke" />
          <path d={connection(point, points[index + 1])} pathLength="100" className={styles.packet} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
      <g className={styles.connection} data-current={active === points.length - 1}>
        <path d={`M${points[points.length - 1].x} ${points[points.length - 1].y}V370H1000`} className={styles.track} vectorEffect="non-scaling-stroke" />
        <path d={`M${points[points.length - 1].x} ${points[points.length - 1].y}V370H1000`} pathLength="100" className={styles.packet} vectorEffect="non-scaling-stroke" />
      </g>
      <path d={`M0 ${points[0].y}H${points[0].x}`} className={styles.inputLine} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function WorkflowCanvas({ workflow, features, summary }: { workflow: Workflow; features: string[]; summary: string }) {
  const ref = useRef<HTMLElement>(null);
  const id = useId();
  const inView = useInView(ref, { amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const interacting = hovered !== null || focused !== null || selectedStage !== null;
  const playbackPaused = paused || selectedStage !== null;
  const running = inView && !reducedMotion && !paused && !interacting;
  const complete = active === workflow.steps.length - 1;
  const phaseDuration = complete ? 4800 : 3600;
  const desktopPoints = workflow.steps.map((_, index) => ({
    x: 100 + (index * 800) / Math.max(1, workflow.steps.length - 1),
    y: index % 2 === 0 ? 115 : 265
  }));

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % workflow.steps.length), phaseDuration);
    return () => window.clearTimeout(timer);
  }, [active, running, phaseDuration, workflow.steps.length]);

  useEffect(() => {
    if (!inView || reducedMotion || selectedStage === null || hovered !== null || focused !== null) return;
    const timer = window.setTimeout(() => setSelectedStage(null), 8000);
    return () => window.clearTimeout(timer);
  }, [inView, reducedMotion, selectedStage, hovered, focused]);

  function togglePlayback() {
    setPaused(!playbackPaused);
    setSelectedStage(null);
    setHovered(null);
    setFocused(null);
  }

  function selectOnHover(event: PointerEvent<HTMLButtonElement>, index: number) {
    if (event.pointerType !== "mouse") return;
    setHovered(index);
    setActive(index);
  }

  function description(index: number) {
    const featureIndex = stageDetails[workflow.icon][index];
    return featureIndex == null ? summary : features[featureIndex] || summary;
  }

  const ActiveIcon = stageIcons[workflow.icon][active];

  return (
    <figure
      ref={ref}
      className={styles.root}
      data-running={running}
      data-interacting={interacting}
      data-complete={complete}
      style={{ "--workflow-phase": `${phaseDuration}ms` } as CSSProperties}
      aria-label={`${workflow.name} system workflow`}
    >
      <figcaption className={styles.toolbar}>
        <div className={styles.systemIdentity}>
          <span className={styles.systemMark} aria-hidden="true"><GitBranch strokeWidth={1.4} /></span>
          <div><span className={styles.overline}>Nexcore / System workflow</span><p className={styles.systemName}>{workflow.name}</p></div>
        </div>
        <div className={styles.sequenceControls}>
          <span className={styles.sequenceCount} aria-hidden="true">{String(active + 1).padStart(2, "0")}<span> / {String(workflow.steps.length).padStart(2, "0")}</span></span>
          <button type="button" className={styles.playback} onClick={togglePlayback} disabled={Boolean(reducedMotion)} aria-label={playbackPaused ? "Play workflow animation" : "Pause workflow animation"} title={playbackPaused ? "Play workflow animation" : "Pause workflow animation"}>
            {playbackPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
        </div>
      </figcaption>

      <div className={styles.network}>
        <Connections points={desktopPoints} active={active} className={styles.desktopConnections} />
        <Connections points={tabletPoints} active={active} className={styles.tabletConnections} />
        <ol className={styles.nodes} aria-label={`${workflow.name} stages`}>
          {workflow.steps.map((step, index) => {
            const Icon = stageIcons[workflow.icon][index];
            const selected = active === index;
            const reached = index < active;
            return (
              <li
                key={step}
                className={styles.node}
                data-current={selected}
                data-reached={reached}
                style={{ "--node-x": `${desktopPoints[index].x / 10}%`, "--node-y": `${desktopPoints[index].y / 4}%`, "--tablet-x": `${tabletPoints[index].x / 10}%`, "--tablet-y": `${tabletPoints[index].y / 4}%` } as CSSProperties}
              >
                {index < workflow.steps.length - 1 && <svg className={styles.mobileConnection} viewBox="0 0 2 100" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M1 0V100" className={styles.track} vectorEffect="non-scaling-stroke" /><path d="M1 0V100" pathLength="100" className={styles.packet} vectorEffect="non-scaling-stroke" /></svg>}
                <span className={styles.mobileBranch} aria-hidden="true" />
                <span className={styles.mobileIndex} aria-hidden="true">{reached ? <Check /> : String(index + 1).padStart(2, "0")}</span>
                <button
                  type="button"
                  className={styles.nodeButton}
                  aria-label={`${String(index + 1).padStart(2, "0")}. ${step}`}
                  aria-pressed={selected}
                  aria-describedby={selected && interacting ? `${id}-stage-description` : undefined}
                  onPointerEnter={event => selectOnHover(event, index)}
                  onPointerLeave={() => setHovered(null)}
                  onFocus={() => { setFocused(index); setActive(index); }}
                  onBlur={() => setFocused(null)}
                  onClick={() => { setActive(index); setSelectedStage(index); }}
                >
                  <span className={styles.portIn} aria-hidden="true" />
                  <span className={styles.portOut} aria-hidden="true" />
                  <span className={styles.nodeTop}><Icon strokeWidth={1.35} aria-hidden="true" /><span className={styles.nodeNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}{reached && <Check />}</span></span>
                  <span className={styles.nodeTitle}>{step}</span>
                  <AnimatePresence initial={false}>
                    {selected && interacting && <motion.span className={styles.inlineDescription} initial={reducedMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}>{description(index)}</motion.span>}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ol>
        <div className={styles.networkBaseline} aria-hidden="true"><span>INPUT</span><span className={styles.baselineRoute} /><span>CONNECTED PROCESS</span><span className={styles.baselineRoute} /><span>OUTPUT</span></div>
      </div>

      <div className={styles.detail}>
        <div className={styles.detailStage}>
          <span className={styles.detailIcon} aria-hidden="true"><ActiveIcon strokeWidth={1.4} /></span>
          <div><p className={styles.overline}>Stage {String(active + 1).padStart(2, "0")} / {String(workflow.steps.length).padStart(2, "0")}</p><p className={styles.detailTitle}>{workflow.steps[active]}</p></div>
        </div>
        <div className={styles.detailCopy}>
          <p className={styles.overline}>{stageDetails[workflow.icon][active] == null ? "System context" : "Connected capability"}</p>
          <AnimatePresence initial={false} mode="wait"><motion.p key={active} initial={reducedMotion ? false : { opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }} transition={{ duration: reducedMotion ? 0 : 0.18 }}>{description(active)}</motion.p></AnimatePresence>
        </div>
      </div>

      <span id={`${id}-stage-description`} className="sr-only">{description(active)}</span>
      <div className={styles.sequenceProgress} aria-hidden="true">
        {workflow.steps.map((step, index) => <span key={step} data-current={index === active} data-reached={index < active}><i /></span>)}
      </div>
    </figure>
  );
}

export function ProjectWorkflow({ slug, features, summary }: ProjectWorkflowProps) {
  const workflow = projectWorkflows[slug];
  if (!workflow) return null;
  return <WorkflowCanvas key={slug} workflow={workflow} features={features} summary={summary} />;
}
