import Image from "next/image";
import { Boxes, ClipboardCheck, FileCheck2, FlaskConical, Monitor, Truck } from "lucide-react";
import { projectWorkflows } from "@/lib/workflows";
import { cn } from "@/lib/utils";
import { SystemActivity } from "./SystemActivity";
import { SignalPath } from "./SignalPath";

const icons = { lab: FlaskConical, procurement: ClipboardCheck, stores: Boxes, assets: Monitor, fleet: Truck };

type ProjectVisualProps = {
  slug: string;
  className?: string;
  compact?: boolean;
  focus?: number;
  image?: { src: string; alt: string };
};

export function ProjectVisual({ slug, className, compact = false, focus = 0, image }: ProjectVisualProps) {
  const workflow = projectWorkflows[slug] || projectWorkflows["procurement-management-system"];
  const Icon = icons[workflow.icon];

  if (image) {
    return (
      <div className={cn("relative aspect-[16/10] overflow-hidden rounded-lg bg-muted", className)}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
      </div>
    );
  }

  return (
    <figure className={cn("project-visual live-project group/visual", compact && "project-visual-compact", className)}>
      <figcaption className="project-visual-caption">
        <span>Workflow illustration</span><span aria-hidden="true">N / {String(focus + 1).padStart(2, "0")}</span>
      </figcaption>
      <SystemActivity className="project-live-surface">
      <div className="project-diagram">
        <svg className="project-connectors" viewBox="0 0 500 260" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M245 26H275M245 78H275M245 130H275M245 182H275M245 234H275" className="signal-track" />
          <SignalPath d="M245 26H275V234H312Q324 234 324 222V142Q324 130 336 130H375" duration={12} delay={focus * -2.4} />
          <rect x="271" y="22" width="8" height="8" rx="1.5" className="project-flow-object" style={{ animationDelay: `${focus * -2.4}s` }} />
        </svg>
        <ol className="project-stages" aria-label={`${workflow.name} workflow`}>
          {workflow.steps.map((step, index) => (
            <li key={step} className={cn("project-stage", index === focus && "project-stage-active")} style={{ animationDelay: `${(index - focus) * 2.4}s` }}>
              <span className="project-stage-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{step}</span>
              <span className="project-stage-port" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <div className="project-core">
          <div className="project-core-mark"><Icon aria-hidden="true" strokeWidth={1.3} /><span className="project-completion" aria-hidden="true"><FileCheck2 strokeWidth={1.4} /></span></div>
          <p>{workflow.name}</p>
          {workflow.icon === "stores" ? <div className="inventory-activity" aria-hidden="true"><i /><i /><i /><i /><i /></div> : <span className="project-core-line" aria-hidden="true" />}
        </div>
      </div>
      <div className="project-transaction" aria-hidden="true"><span className="transaction-led" /><span className="project-status-stack">{workflow.steps.map((step, index) => <span key={step} style={{ animationDelay: `${(index - focus) * 2.4}s` }}>{step}</span>)}</span><span className="transaction-track"><i /></span></div>
      </SystemActivity>
    </figure>
  );
}
