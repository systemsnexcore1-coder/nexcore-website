import type { Metadata } from "next";
import { ArrowRight, Banknote, Factory, FlaskConical, GraduationCap, HeartPulse, Landmark, ShieldCheck, Truck, Workflow } from "lucide-react";
import { IndustryExplorer } from "@/components/systems/IndustryExplorer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description: "Nexcore delivers digital transformation solutions for government, healthcare, finance, education, logistics, manufacturing, and laboratories."
};

const icons = [Landmark, HeartPulse, Banknote, GraduationCap, Truck, Factory, FlaskConical];
const sharedNeeds = [
  { title: "Workflow automation", summary: "Digitize approvals, assignments, requests, reviews, and escalations across departments.", icon: Workflow },
  { title: "Secure access", summary: "Protect sensitive systems with roles, permissions, audit logs, and operational controls.", icon: ShieldCheck },
  { title: "Management visibility", summary: "Create dashboards and reports that support timely decisions and accountable service delivery.", icon: Banknote }
];

export default function IndustriesPage() {
  return (
    <>
      <PageIntro eyebrow="Industries" title="Digital solutions for sectors where reliability matters." description="Nexcore works across public, private, and mission-driven organizations that need secure systems, accurate reporting, and practical operational improvement." />
      <section className="section-space bg-background">
        <div className="section-shell">
          <AnimatedSection>
            <SectionHeading eyebrow="Sector solutions" title="Built for the way each industry operates." description="The same core technology discipline is adapted to different regulatory, operational, and service delivery contexts." />
          </AnimatedSection>
          <IndustryExplorer linkToDetails={false} />
        </div>
      </section>
      <section className="border-y border-border bg-surface">
        <div className="section-shell grid gap-x-12 lg:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = icons[index];
            return (
              <article key={industry.title} id={industry.title.toLowerCase()} className="scroll-mt-28 border-b border-border py-10 last:border-b-0 sm:py-12">
                <AnimatedSection>
                  <div className="flex items-center gap-4">
                    <Icon className="size-6 shrink-0 text-primary-600 dark:text-primary-400" strokeWidth={1.5} aria-hidden="true" />
                    <h2 className="font-display text-2xl font-semibold">{industry.title}</h2>
                    <span className="technical-label ml-auto text-muted-foreground" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-5 max-w-xl leading-8 text-muted-foreground">{industry.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {industry.capabilities.map(capability => (
                      <li key={capability} className="flex items-start gap-3 text-sm leading-6"><ArrowRight className="mt-1 size-3.5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />{capability}</li>
                    ))}
                  </ul>
                </AnimatedSection>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section-space system-dark bg-navy-950 text-white">
        <div className="section-shell">
          <AnimatedSection>
            <SectionHeading eyebrow="Common needs" title="Different sectors, similar pressure to modernize." description="Most enterprise clients are dealing with a shared set of digital transformation needs: better controls, faster service, reliable data, and systems that scale." tone="dark" />
          </AnimatedSection>
          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-0">
            {sharedNeeds.map((need, index) => {
              const Icon = need.icon;
              return (
                <AnimatedSection key={need.title} delay={index * 0.1} className="border-t border-white/20 pt-7 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0">
                  <Icon className="size-7 text-primary-400" strokeWidth={1.5} aria-hidden="true" />
                  <h2 className="mt-5 font-display text-xl font-semibold">{need.title}</h2>
                  <p className="mt-4 leading-8 text-blue-100">{need.summary}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-space bg-background">
        <div className="section-shell">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow">Industry fit</p>
                <h2 className="mt-4 font-display text-3xl font-semibold">Start with the workflow, not the software label.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">Nexcore can help define the requirements, controls, user journeys, and integrations that match your sector before implementation begins.</p>
              </div>
              <div className="lg:text-right"><ButtonLink href="/contact">Discuss your sector</ButtonLink></div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
