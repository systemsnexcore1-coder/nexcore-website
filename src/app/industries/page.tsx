import type { Metadata } from "next";
import {
  Banknote,
  Factory,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Truck,
  Workflow
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Nexcore delivers digital transformation solutions for government, healthcare, finance, education, logistics, manufacturing, and laboratories."
};

const icons = [Landmark, HeartPulse, Banknote, GraduationCap, Truck, Factory, FlaskConical];

const sharedNeeds = [
  {
    title: "Workflow automation",
    summary: "Digitize approvals, assignments, requests, reviews, and escalations across departments.",
    icon: Workflow
  },
  {
    title: "Secure access",
    summary: "Protect sensitive systems with roles, permissions, audit logs, and operational controls.",
    icon: ShieldCheck
  },
  {
    title: "Management visibility",
    summary: "Create dashboards and reports that support timely decisions and accountable service delivery.",
    icon: Banknote
  }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="blueprint-grid bg-surface py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-600">Industries</p>
              <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                Digital solutions for sectors where reliability matters.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Nexcore works across public, private, and mission-driven organizations that need secure systems,
                accurate reporting, and practical operational improvement.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Sector solutions"
              title="Built for the way each industry operates."
              description="The same core technology discipline is adapted to different regulatory, operational, and service delivery contexts."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = icons[index] || Landmark;
              return (
                <AnimatedSection key={industry.title}>
                  <article className="h-full rounded-lg border border-border bg-surface p-7 shadow-sm">
                    <Icon className="size-8 text-primary-600" aria-hidden="true" />
                    <h2 className="mt-5 font-display text-2xl font-semibold">{industry.title}</h2>
                    <p className="mt-4 leading-8 text-muted-foreground">{industry.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {industry.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Common needs"
              title="Different sectors, similar pressure to modernize."
              description="Most enterprise clients are dealing with a shared set of digital transformation needs: better controls, faster service, reliable data, and systems that scale."
              tone="dark"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sharedNeeds.map((need) => {
              const Icon = need.icon;
              return (
                <AnimatedSection key={need.title}>
                  <div className="h-full rounded-lg border border-white/[0.12] bg-white/[0.06] p-7">
                    <Icon className="size-7 text-primary-100" aria-hidden="true" />
                    <h2 className="mt-5 font-display text-2xl font-semibold">{need.title}</h2>
                    <p className="mt-4 leading-8 text-blue-100">{need.summary}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-600">Industry fit</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">
                  Start with the workflow, not the software label.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  Nexcore can help define the requirements, controls, user journeys, and integrations that match your
                  sector before implementation begins.
                </p>
              </div>
              <div className="lg:text-right">
                <ButtonLink href="/contact">Discuss your sector</ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
