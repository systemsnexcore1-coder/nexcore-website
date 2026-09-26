import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectVisual } from "@/components/systems/ProjectVisual";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Nexcore case studies for laboratory management, procurement, stores inventory, IT inventory, and transport management systems."
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nexcore / Case studies"
        title="Projects"
        description="These representative projects show how Nexcore approaches workflow modernization, reporting, traceability, and enterprise system delivery."
      >
        <div className="mt-8 grid gap-6 border-t border-border pt-7 sm:grid-cols-3 sm:gap-10">
          <div>
            <p className="technical-label text-muted-foreground">Case studies</p>
            <p className="mt-2 font-display text-xl font-semibold">{projects.length} operational systems</p>
          </div>
          <div>
            <p className="technical-label text-muted-foreground">Business focus</p>
            <p className="mt-2 font-display text-xl font-semibold">ERP workflows</p>
          </div>
          <div>
            <p className="technical-label text-muted-foreground">System priorities</p>
            <p className="mt-2 font-display text-xl font-semibold">Traceability &amp; reporting</p>
          </div>
        </div>
      </PageIntro>

      <section className="section-space bg-background" aria-labelledby="case-studies-heading">
        <div className="section-shell">
          <AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
              <div>
                <p className="eyebrow">Case studies</p>
                <h2 id="case-studies-heading" className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Platforms designed around accountable workflows.
                </h2>
              </div>
              <p className="max-w-xl leading-8 text-muted-foreground">
                Each case study includes the business challenge, solution approach, key features, technology direction,
                and operational impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-x-10 lg:grid-cols-2 lg:gap-x-16">
            {projects.map((project, index) => {
              const isEditorial = index < 3;
              const isReversed = index % 2 === 1;

              return (
                <AnimatedSection
                  key={project.slug}
                  className={isEditorial ? "min-w-0 lg:col-span-2" : "min-w-0"}
                  variant={isEditorial ? "rise" : "scale"}
                  delay={isEditorial ? 0 : (index - 3) * 0.08}
                >
                  <article aria-labelledby={`project-${project.slug}`} className="h-full border-t border-border py-10 sm:py-14">
                    <div className={isEditorial ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-16" : "flex flex-col gap-8"}>
                      <div className={`min-w-0 ${isEditorial && !isReversed ? "lg:order-2" : ""}`}>
                        <ProjectVisual slug={project.slug} compact={!isEditorial} />
                      </div>
                      <div className="min-w-0">
                        <p className="technical-label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
                          <span className="text-primary-700 dark:text-primary-400">{String(index + 1).padStart(2, "0")}</span>
                          <span aria-hidden="true" className="h-px w-6 bg-border" />
                          {project.category}
                        </p>
                        <h3
                          id={`project-${project.slug}`}
                          className={`mt-4 text-balance font-display font-semibold leading-tight ${isEditorial ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}
                        >
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-xl leading-8 text-muted-foreground">{project.summary}</p>
                        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                          {project.technologies.map((technology) => (
                            <li key={technology} className="border-b border-border pb-1 text-xs font-medium text-muted-foreground">
                              {technology}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-link group mt-7 inline-flex items-center gap-3 rounded-sm py-1 text-sm font-semibold text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:text-primary-400"
                        >
                          Open case study<span className="sr-only">: {project.title}</span>
                          <ArrowRight className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                    <div className={`mt-8 grid gap-7 border-t border-border pt-7 ${isEditorial ? "md:grid-cols-2 lg:gap-16" : "sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"}`}>
                      <div>
                        <h4 className="text-sm font-semibold">Business focus</h4>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Impact areas</h4>
                        <ul className="mt-3 space-y-3">
                          {project.impact.slice(0, 2).map((impact) => (
                            <li key={impact} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                              <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" aria-hidden="true" />
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space system-grid relative isolate overflow-hidden border-t border-border bg-surface">
        <div aria-hidden="true" className="absolute inset-y-0 left-[8%] -z-10 w-px bg-border" />
        <div className="section-shell">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow">Your next system</p>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Have a workflow that needs structure?
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  Nexcore can assess existing processes, design a practical target system, and plan delivery around the
                  teams that will operate it.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <ButtonLink href="/contact#consultation-form">Start a project enquiry</ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
