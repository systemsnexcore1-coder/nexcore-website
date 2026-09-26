import { Building2, Layers3, Network, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackboneSection } from "./BackboneSection";

const principles = [
  { title: "Enterprise delivery discipline", summary: "Structured discovery, architecture reviews, rollout planning, and quality controls keep complex programs moving with fewer surprises.", icon: Building2 },
  { title: "Secure by design", summary: "Role-based access, audit trails, data controls, and operational resilience are treated as core requirements, not late additions.", icon: ShieldCheck },
  { title: "Operational fit", summary: "Solutions are mapped to the real work of departments, approvals, reporting cycles, and stakeholder responsibilities.", icon: Network },
  { title: "Long-term maintainability", summary: "Nexcore builds documented, scalable systems that can be extended as policy, business, and user needs change.", icon: Layers3 }
];

export function DeliveryPrinciples() {
  return (
    <BackboneSection index="03" className="section-space bg-background">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <AnimatedSection>
          <SectionHeading eyebrow="Why choose Nexcore" title="A delivery partner for systems that need to last." description="Enterprise clients need more than attractive interfaces. They need technology that fits governance, security, support, and operational realities." />
          <div className="delivery-core system-grid relative mt-10 flex items-center gap-5 overflow-hidden border-y border-border py-8">
            <div className="relative grid size-16 shrink-0 place-items-center rounded-md border border-primary-500/40 bg-background"><Network className="size-7 text-primary-600 dark:text-primary-400" strokeWidth={1.3} aria-hidden="true" /></div>
            <div><p className="technical-label text-muted-foreground">Nexcore delivery core</p><p className="mt-2 text-sm font-medium">Governance. Security. Continuity.</p></div>
          </div>
        </AnimatedSection>
        <div className="principles-tree">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return <AnimatedSection key={principle.title} delay={index * 0.06} variant="slide"><article className="principle-branch relative pb-9 pl-8 last:pb-0"><div className="mb-3 flex items-center gap-3"><Icon className="size-5 shrink-0 text-primary-600 dark:text-primary-400" strokeWidth={1.6} aria-hidden="true" /><h3 className="font-display text-lg font-semibold">{principle.title}</h3></div><p className="text-sm leading-7 text-muted-foreground">{principle.summary}</p></article></AnimatedSection>;
          })}
        </div>
      </div>
    </BackboneSection>
  );
}
