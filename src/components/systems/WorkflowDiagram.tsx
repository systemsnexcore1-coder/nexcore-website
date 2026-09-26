import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function WorkflowDiagram({ steps, className }: { steps: string[]; className?: string }) {
  return (
    <ol className={cn("workflow-diagram", className)} aria-label="Connected workflow">
      {steps.map((step, index) => (
        <li key={step}>
          <span className="workflow-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="workflow-label">{step}</span>
          {index < steps.length - 1 && <><ArrowRight className="workflow-arrow-horizontal" aria-hidden="true" /><ArrowDown className="workflow-arrow-vertical" aria-hidden="true" /></>}
        </li>
      ))}
    </ol>
  );
}
