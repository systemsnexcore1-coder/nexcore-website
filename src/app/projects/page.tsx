import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Nexcore case studies for laboratory management, procurement, stores inventory, IT inventory, and transport management systems."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-100">Projects</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Case studies for operational digital transformation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                These representative projects show how Nexcore approaches workflow modernization, reporting, traceability,
                and enterprise system delivery.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-4 border-t border-white/[0.12] pt-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-semibold">5</p>
              <p className="mt-1 text-sm text-blue-100">case study pages</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold">ERP</p>
              <p className="mt-1 text-sm text-blue-100">workflow-heavy systems</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold">Audit</p>
              <p className="mt-1 text-sm text-blue-100">traceability and reporting focus</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Case studies"
              title="Platforms designed around accountable workflows."
              description="Each case study includes the business challenge, solution approach, key features, technology direction, and operational impact."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <AnimatedSection key={project.slug} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 hover:shadow-soft">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-semibold text-primary-600">{project.category}</p>
                      <h2 className="mt-3 font-display text-2xl font-semibold">{project.title}</h2>
                    </div>
                    <BriefcaseBusiness className="size-7 shrink-0 text-primary-600" aria-hidden="true" />
                  </div>
                  <p className="mt-5 leading-8 text-muted-foreground">{project.summary}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Business focus</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Impact areas</p>
                      <ul className="mt-2 space-y-2">
                        {project.impact.slice(0, 2).map((impact) => (
                          <li key={impact} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                            <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal-500" aria-hidden="true" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Open case study
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <BarChart3 className="size-8 text-primary-100" aria-hidden="true" />
                <h2 className="mt-4 font-display text-3xl font-semibold">Have a workflow that needs structure?</h2>
                <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                  Nexcore can assess existing processes, design a practical target system, and plan delivery around the
                  teams that will operate it.
                </p>
              </div>
              <div className="lg:text-right">
                <ButtonLink href="/contact#consultation-form">Start a project enquiry</ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
