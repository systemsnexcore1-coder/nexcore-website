import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Code2,
  DatabaseZap,
  Headphones,
  Layers3,
  LineChart,
  Network,
  Palette,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredMetrics, industries, processSteps, projects, services, testimonials } from "@/lib/data";

const serviceIcons = [Code2, Workflow, DatabaseZap, Headphones, Palette];
const choiceItems = [
  {
    title: "Enterprise delivery discipline",
    summary:
      "Structured discovery, architecture reviews, rollout planning, and quality controls keep complex programs moving with fewer surprises.",
    icon: Building2
  },
  {
    title: "Secure by design",
    summary:
      "Role-based access, audit trails, data controls, and operational resilience are treated as core requirements, not late additions.",
    icon: ShieldCheck
  },
  {
    title: "Operational fit",
    summary:
      "Solutions are mapped to the real work of departments, approvals, reporting cycles, and stakeholder responsibilities.",
    icon: Network
  },
  {
    title: "Long-term maintainability",
    summary:
      "Nexcore builds documented, scalable systems that can be extended as policy, business, and user needs change.",
    icon: Layers3
  }
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/nexcore-enterprise-platform.png"
          alt="Abstract connected enterprise technology platform"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,0.98)_0%,rgba(3,17,31,0.84)_42%,rgba(3,17,31,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container-padding relative mx-auto max-w-7xl py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-lg border border-white/[0.15] bg-white/[0.08] px-3 py-1 text-sm font-medium text-primary-100 backdrop-blur">
              Enterprise technology consulting
            </p>
            <h1 className="mt-7 font-display text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">Nexcore</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-blue-50">
              Secure digital platforms, CRM systems, ERP workflows, and support programs for organizations that need
              dependable technology at operational scale.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/consultation">Request consultation</ButtonLink>
              <ButtonLink href="/projects" variant="secondary" className="border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.14] hover:text-white">
                View case studies
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/[0.12] pt-6 sm:gap-4 sm:pt-8">
            {featuredMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Services"
              title="Digital systems built for large, accountable organizations."
              description="Nexcore combines software engineering, product design, and IT consulting to modernize the workflows that keep institutions running."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || Code2;
              return (
                <AnimatedSection key={service.slug} className="h-full">
                  <Link
                    href={`/services#${service.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <span className="grid size-11 place-items-center rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-500/[0.15] dark:text-primary-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary-600">
                      Explore service
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Featured projects"
                title="Operational platforms with measurable business use."
                description="Representative case studies across laboratories, procurement, inventory, IT assets, and fleet operations."
              />
              <ButtonLink href="/projects" variant="secondary" className="md:mb-1">
                View all projects
              </ButtonLink>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <AnimatedSection key={project.slug} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-border bg-background p-6 shadow-sm">
                  <p className="text-sm font-semibold text-primary-600">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span key={technology} className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Read case study
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Why choose Nexcore"
              title="A delivery partner for systems that need to last."
              description="Enterprise clients need more than attractive interfaces. They need technology that fits governance, security, support, and operational realities."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {choiceItems.map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title}>
                  <div className="rounded-lg border border-border bg-surface p-7">
                    <Icon className="size-7 text-primary-600" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{item.summary}</p>
                  </div>
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
              eyebrow="Industries"
              title="Technology programs for institutions with complex operations."
              description="Nexcore supports sectors where reliability, traceability, and service continuity are essential."
              tone="dark"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <AnimatedSection key={industry.title}>
                <Link
                  href="/industries"
                  className="block rounded-lg border border-white/[0.12] bg-white/[0.06] p-5 transition hover:border-primary-400 hover:bg-white/[0.10] focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100">{industry.summary}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Process"
              title="From discovery to adoption, every stage is accountable."
              description="The delivery model is designed for stakeholders who need clarity before, during, and after implementation."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title}>
                <div className="h-full border-l border-border pl-5 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-600 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.summary}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Client perspective"
              title="Built around the realities of enterprise delivery."
              description="Placeholder testimonials show the kind of feedback Nexcore is designed to earn from institutional clients."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <AnimatedSection key={testimonial.author}>
                <figure className="h-full rounded-lg border border-border bg-background p-7">
                  <LineChart className="size-6 text-primary-600" aria-hidden="true" />
                  <blockquote className="mt-5 text-lg leading-8 text-foreground">{testimonial.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
                    <span className="block font-semibold text-foreground">{testimonial.author}</span>
                    {testimonial.organization}
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-grid bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-100">Start a consultation</p>
                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  Build the system your organization can rely on.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                  Share the workflow, service, or platform you want to improve. Nexcore will help clarify scope, risks,
                  delivery path, and the practical next step.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink href="/consultation">Request consultation</ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.14] hover:text-white">
                  Review services
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
