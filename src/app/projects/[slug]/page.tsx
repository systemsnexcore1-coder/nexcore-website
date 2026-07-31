import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Cpu, ImageIcon, Layers3, Lightbulb, Target } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-100 hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to projects
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase text-primary-100">{project.category}</p>
            <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">{project.summary}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <Target className="size-8 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-3xl font-semibold">Challenge</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{project.challenge}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <Lightbulb className="size-8 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-3xl font-semibold">Solution</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <AnimatedSection>
              <div className="h-full rounded-lg border border-border bg-background p-7">
                <Layers3 className="size-6 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Features</h2>
                <ul className="mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="h-full rounded-lg border border-border bg-background p-7">
                <Cpu className="size-6 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Technologies</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-lg bg-muted px-3 py-2 text-sm font-medium text-muted-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="h-full rounded-lg border border-border bg-background p-7">
                <CheckCircle2 className="size-6 text-teal-500" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Business impact</h2>
                <ul className="mt-5 space-y-3">
                  {project.impact.map((impact) => (
                    <li key={impact} className="text-sm leading-7 text-muted-foreground">
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-600">Gallery placeholders</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Interface views prepared for project media.</h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Representative frames show where approved screenshots, product walkthroughs, or implementation visuals
                would appear for a client-approved case study.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {project.gallery.map((item, index) => (
              <AnimatedSection key={item}>
                <div className="relative min-h-64 overflow-hidden rounded-lg border border-border bg-navy-950 p-6 text-white">
                  <div className="absolute inset-0 blueprint-grid opacity-50" />
                  <div className="absolute inset-x-6 bottom-6 top-20 rounded-lg border border-white/[0.12] bg-white/[0.06]" />
                  <div className="relative">
                    <ImageIcon className="size-6 text-primary-100" aria-hidden="true" />
                    <p className="mt-5 text-sm font-semibold text-primary-100">View {index + 1}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{item}</h3>
                  </div>
                </div>
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
                <p className="text-sm font-semibold uppercase text-primary-100">Related opportunity</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">
                  Plan a system around your own operating model.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                  Nexcore can help define modules, data flows, roles, reports, and rollout stages for your organization.
                </p>
              </div>
              <div className="lg:text-right">
                <ButtonLink href="/consultation">Request consultation</ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
