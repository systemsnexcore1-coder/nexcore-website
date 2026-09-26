import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowDownRight, CheckCircle2, Code2, DatabaseZap, Headphones, Palette, Target, Workflow } from "lucide-react";
import { ServiceVisual } from "@/components/systems/ServiceVisual";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nexcore services across custom web development, CRM systems, ERP systems, IT support, and UI/UX design."
};

const icons = [Code2, Workflow, DatabaseZap, Headphones, Palette];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Enterprise digital capabilities from strategy to support."
        description="Nexcore helps institutions design, build, and operate digital systems that improve efficiency, accountability, and service delivery."
        tone="dark"
      >
        <nav aria-label="Service capabilities" className="mt-10 grid gap-x-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`#${service.slug}`}
              className="group flex min-h-20 items-center gap-3 border-t border-white/20 py-5 text-sm font-medium leading-6 text-blue-50 transition-colors hover:border-primary-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-400 lg:items-start"
            >
              <span className="technical-label shrink-0 pt-0.5 text-primary-100" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">{service.title}</span>
              <ArrowDownRight
                className="mt-1 size-4 shrink-0 text-primary-400 motion-safe:transition-transform motion-safe:group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>
      </PageIntro>

      <section className="bg-background pt-20 sm:pt-24">
        <div className="section-shell">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Capabilities"
              title="Services designed for operational complexity."
              description="Each service is structured around business outcomes, implementation realities, and the needs of enterprise stakeholders."
            />
          </AnimatedSection>
        </div>

        <div className="mt-12 sm:mt-16">
          {services.map((service, index) => {
            const Icon = icons[index] || Code2;

            return (
              <article
                key={service.slug}
                id={service.slug}
                aria-labelledby={`${service.slug}-title`}
                className={`service-module group/service section-space scroll-mt-24 border-t border-border ${index % 2 === 0 ? "bg-surface" : "bg-background"}`}
              >
                <div className="section-shell">
                  <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <AnimatedSection>
                      <div className="flex items-center gap-4 text-primary-600 dark:text-primary-400" aria-hidden="true">
                        <span className="font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
                        <span className="h-px w-12 bg-primary-500/40" />
                        <Icon className="size-6" />
                      </div>
                      <h2 id={`${service.slug}-title`} className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{service.summary}</p>
                    </AnimatedSection>

                    <AnimatedSection variant="scale" delay={0.1} className="min-w-0">
                      <div className="mx-auto w-full max-w-md" aria-hidden="true">
                        <ServiceVisual
                          index={index}
                          className="w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover/service:-translate-y-1"
                        />
                      </div>
                    </AnimatedSection>
                  </div>

                  <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:mt-12 lg:grid-cols-3 lg:gap-0 lg:pt-10">
                    <AnimatedSection className="lg:pr-8">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                        <h3 className="font-display text-lg font-semibold">Problems solved</h3>
                      </div>
                      <ul className="mt-5 space-y-4">
                        {service.problems.map((problem) => (
                          <li key={problem} className="flex gap-3 text-base leading-7 text-muted-foreground">
                            <span className="mt-3.5 h-px w-3 shrink-0 bg-muted-foreground/50" aria-hidden="true" />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08} className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0">
                      <div className="flex items-center gap-3">
                        <Workflow className="size-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        <h3 className="font-display text-lg font-semibold">Features</h3>
                      </div>
                      <ul className="mt-5 space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex gap-3 text-base leading-7 text-muted-foreground">
                            <span className="mt-3.5 h-px w-3 shrink-0 bg-primary-500" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>

                    <AnimatedSection delay={0.16} className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="size-5 shrink-0 text-teal-500" aria-hidden="true" />
                        <h3 className="font-display text-lg font-semibold">Benefits</h3>
                      </div>
                      <ul className="mt-5 space-y-4">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-3 text-base leading-7 text-muted-foreground">
                            <span className="mt-3.5 h-px w-3 shrink-0 bg-teal-500" aria-hidden="true" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection className="mt-10 border-t border-border pt-6">
                    <div className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
                      <div className="flex items-center gap-3">
                        <Target className="size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        <h3 className="text-sm font-semibold">Ideal clients</h3>
                      </div>
                      <p className="max-w-3xl text-sm leading-7 text-muted-foreground">{service.idealClients}</p>
                    </div>
                  </AnimatedSection>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="system-dark section-space relative overflow-hidden bg-navy-950 text-white">
        <div className="system-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="section-shell relative">
          <AnimatedSection>
            <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
              <div>
                <p className="eyebrow text-primary-100">Next step</p>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Clarify the right solution path.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                  Nexcore can assess the current workflow, identify system gaps, and recommend a practical delivery
                  approach before implementation begins.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row xl:justify-end">
                <ButtonLink href="/consultation">Request consultation</ButtonLink>
                <ButtonLink href="/projects" variant="onDark">
                  See project examples
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
