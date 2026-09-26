import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Layers3 } from "lucide-react";
import { ProjectVisual } from "@/components/systems/ProjectVisual";
import { ProjectWorkflow } from "@/components/systems/ProjectWorkflow";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { PageIntro } from "@/components/ui/PageIntro";
import { projects, siteConfig } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} | Nexcore`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article"
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="section-shell pt-8">
          <Link
            href="/projects"
            className="text-link inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-muted-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
            Back to projects
          </Link>
        </div>
        <PageIntro eyebrow={project.category} title={project.title} description={project.summary} />
        <div className="section-shell pb-10 pt-8 sm:pb-14">
          <AnimatedSection variant="scale">
            <ProjectVisual slug={project.slug} />
          </AnimatedSection>
        </div>
        <nav aria-label="Case study sections" className="border-t border-border">
          <div className="section-shell flex flex-wrap gap-x-8 gap-y-2 py-4">
            {[
              { href: "#overview", label: "Overview" },
              { href: "#capabilities", label: "Features & technologies" },
              { href: "#impact", label: "Business impact" },
              { href: "#workflow", label: "Inside the workflow" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <section id="overview" className="section-space scroll-mt-28 bg-background" aria-labelledby="overview-heading">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <AnimatedSection variant="slide">
              <div className="max-w-sm">
                <p className="eyebrow">Project overview</p>
                <h2 id="overview-heading" className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  From operational challenge to connected system.
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="border-t border-border pt-6">
                <p className="technical-label text-muted-foreground">01 / The starting point</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Challenge</h3>
                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{project.challenge}</p>
              </div>
              <div className="mt-10 border-t border-border pt-6">
                <p className="technical-label text-primary-700 dark:text-primary-400">02 / The system response</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Solution</h3>
                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-space scroll-mt-28 border-y border-border bg-surface" aria-labelledby="features-heading">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <AnimatedSection className="min-w-0">
              <div className="flex items-center gap-3">
                <Layers3 className="size-5 shrink-0 text-primary-700 dark:text-primary-400" aria-hidden="true" />
                <p className="eyebrow">System capabilities</p>
              </div>
              <h2 id="features-heading" className="mt-4 font-display text-3xl font-semibold">Features</h2>
              <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li key={feature} className="flex gap-4 border-t border-border py-6">
                    <span className="technical-label mt-1 shrink-0 text-primary-700 dark:text-primary-400" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="min-w-0 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="flex items-center gap-3">
                <Cpu className="size-5 shrink-0 text-primary-700 dark:text-primary-400" aria-hidden="true" />
                <p className="eyebrow">Technical foundation</p>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold">Technologies</h2>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {project.technologies.map((technology) => (
                  <li key={technology} className="flex items-start gap-3 py-4 text-sm font-medium leading-6">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-primary-600 dark:bg-primary-400" />
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="impact" className="section-space scroll-mt-28 bg-background" aria-labelledby="impact-heading">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <AnimatedSection>
              <p className="eyebrow">Operational outcomes</p>
              <h2 id="impact-heading" className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">Business impact</h2>
              <ArrowRight className="mt-6 hidden size-7 text-teal-700 dark:text-teal-400 lg:block" aria-hidden="true" />
            </AnimatedSection>
            <AnimatedSection>
              <ul className="divide-y divide-border border-y border-border">
                {project.impact.map((impact) => (
                  <li key={impact} className="flex items-start gap-4 py-6 sm:gap-5">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-400" aria-hidden="true" />
                    <p className="max-w-2xl font-display text-lg font-medium leading-8 sm:text-xl">{impact}</p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="workflow" className="section-space scroll-mt-28 border-t border-border bg-surface" aria-labelledby="workflow-heading">
        <div className="section-shell">
          <AnimatedSection>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div>
                <p className="eyebrow">System workflow</p>
                <h2 id="workflow-heading" className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">Inside the workflow.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">Illustrative system diagram, not a project screenshot.</p>
            </div>
          </AnimatedSection>

          <div className="mt-10">
            <ProjectWorkflow slug={project.slug} features={project.features} summary={project.summary} />
          </div>
        </div>
      </section>

      <ConsultationCTA
        eyebrow="Related opportunity"
        title="Plan a system around your own operating model."
        description="Nexcore can help define modules, data flows, roles, reports, and rollout stages for your organization."
      />
    </>
  );
}
