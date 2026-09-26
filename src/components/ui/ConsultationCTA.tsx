import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { ButtonLink } from "./ButtonLink";
import { BackboneSection } from "@/components/home/BackboneSection";
import { ConvergenceVisual } from "@/components/systems/ConvergenceVisual";

export function ConsultationCTA({
  eyebrow = "Start a consultation",
  title = "Build the system your organization can rely on.",
  description = "Share the workflow, service, or platform you want to improve. Nexcore will help clarify scope, risks, delivery path, and the practical next step."
}: { eyebrow?: string; title?: string; description?: string }) {
  return (
    <BackboneSection index="07" className="consultation-cta system-dark relative overflow-hidden bg-navy-950 text-white">
      <ConvergenceVisual />
      <div className="section-shell relative py-20 sm:py-24">
        <AnimatedSection>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-6 max-w-xl leading-8 text-blue-100">{description}</p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:pb-2">
              <ArrowUpRight className="mb-6 hidden size-12 text-primary-400 lg:block" aria-hidden="true" strokeWidth={1} />
              <ButtonLink href="/consultation" className="h-12">Request consultation</ButtonLink>
              <Link href="/contact" className="text-link !text-blue-100 hover:!text-white">Contact Nexcore<ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </BackboneSection>
  );
}
