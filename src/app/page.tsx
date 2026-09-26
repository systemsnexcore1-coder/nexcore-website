import Link from "next/link";
import { ArrowRight, Check, GitBranch, ShieldCheck, Users } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { BackboneSection } from "@/components/home/BackboneSection";
import { ServicesExplorer } from "@/components/home/ServicesExplorer";
import { DeliveryPrinciples } from "@/components/home/DeliveryPrinciples";
import { DeliveryProcess } from "@/components/home/DeliveryProcess";
import { IndustryExplorer } from "@/components/systems/IndustryExplorer";
import { ProjectVisual } from "@/components/systems/ProjectVisual";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const operationalPrinciples = [
  {
    icon: GitBranch,
    title: "Workflows before software",
    text: "Business clarity before technology decisions. Systems shaped around departments, approvals, and reporting obligations."
  },
  {
    icon: Users,
    title: "Designed for adoption",
    text: "Clear interfaces, documentation, training, and operational handover help teams put their systems to work."
  },
  {
    icon: ShieldCheck,
    title: "Built for continuity",
    text: "Security and reliability as baseline requirements. Maintainable systems that internal teams can understand."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <BackboneSection index="01" className="section-space bg-background">
        <div className="section-shell">
          <AnimatedSection>
            <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <SectionHeading eyebrow="Our capabilities" title="Digital systems built for large, accountable organizations." />
              <p className="max-w-md leading-8 text-muted-foreground">
                Nexcore combines software engineering, product design, and IT consulting to modernize the workflows that keep institutions running.
              </p>
            </div>
          </AnimatedSection>
          <ServicesExplorer />
        </div>
      </BackboneSection>

      <BackboneSection index="02" className="section-space border-y border-border bg-surface">
        <div className="section-shell">
          <AnimatedSection>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading eyebrow="Featured projects" title="Complex operations. Connected solutions." description="Representative case studies across laboratories, procurement, inventory, IT assets, and fleet operations." />
              <Link href="/projects" className="text-link shrink-0 pb-2">All case studies<ArrowRight aria-hidden="true" /></Link>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-7">
            {projects.slice(0, 3).map((project, index) => (
              <AnimatedSection key={project.slug} className="h-full" delay={index * 0.08}>
                <article className="project-card group flex h-full flex-col">
                  <ProjectVisual slug={project.slug} compact />
                  <p className="technical-label mt-6 text-primary-600 dark:text-primary-400">{project.category}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">
                    <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-primary-600 dark:hover:text-primary-400">{project.title}</Link>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    {project.technologies.slice(0, 3).map(technology => <span key={technology}>{technology}</span>)}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="text-link mt-auto pt-6">Read case study<ArrowRight aria-hidden="true" /></Link>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </BackboneSection>

      <DeliveryPrinciples />

      <BackboneSection index="04" className="section-space system-dark relative overflow-hidden bg-navy-950 text-white">
        <div className="section-shell relative">
          <AnimatedSection>
            <SectionHeading eyebrow="Industry understanding" title="Different sectors. One connected way of thinking." description="Nexcore supports sectors where reliability, traceability, and service continuity are essential." tone="dark" />
          </AnimatedSection>
          <IndustryExplorer dark />
        </div>
      </BackboneSection>

      <BackboneSection index="05" className="section-space bg-background">
        <div className="section-shell">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <SectionHeading eyebrow="How we work" title="From discovery to adoption, every stage is accountable." />
              <p className="max-w-md leading-8 text-muted-foreground">
                The delivery model is designed for stakeholders who need clarity before, during, and after implementation.
              </p>
            </div>
          </AnimatedSection>
          <DeliveryProcess />
        </div>
      </BackboneSection>

      <BackboneSection index="06" className="section-space border-t border-border bg-surface">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AnimatedSection>
            <SectionHeading eyebrow="Built for operational reality" title="Technology is only useful when it works for your people." description="Our work starts with understanding governance, approval paths, reporting obligations, users, and the constraints that shape each organization." />
            <Link href="/about" className="text-link mt-7">Get to know Nexcore<ArrowRight aria-hidden="true" /></Link>
          </AnimatedSection>
          <div className="divide-y divide-border">
            {operationalPrinciples.map(item => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <Icon className="mt-1 size-6 shrink-0 text-primary-600 dark:text-primary-400" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                    <Check className="mt-4 size-4 text-teal-500" aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </BackboneSection>
      <ConsultationCTA />
    </>
  );
}
