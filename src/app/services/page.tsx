import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Headphones,
  Palette,
  Target,
  Workflow
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-100">Services</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Enterprise digital capabilities from strategy to support.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Nexcore helps institutions design, build, and operate digital systems that improve efficiency,
                accountability, and service delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`#${service.slug}`}
                    className="rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-sm font-medium text-blue-50 transition hover:border-primary-400 hover:bg-white/[0.10]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Capabilities"
              title="Services designed for operational complexity."
              description="Each service is structured around business outcomes, implementation realities, and the needs of enterprise stakeholders."
            />
          </AnimatedSection>

          <div className="mt-12 space-y-10">
            {services.map((service, index) => {
              const Icon = icons[index] || Code2;
              return (
                <AnimatedSection key={service.slug}>
                  <article id={service.slug} className="scroll-mt-28 border-t border-border py-12 first:border-t-0 first:pt-0">
                    <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
                      <div>
                        <span className="grid size-12 place-items-center rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-500/[0.15] dark:text-primary-100">
                          <Icon className="size-6" aria-hidden="true" />
                        </span>
                        <h2 className="mt-6 font-display text-3xl font-semibold">{service.title}</h2>
                        <p className="mt-5 leading-8 text-muted-foreground">{service.summary}</p>
                        <div className="mt-8 rounded-lg border border-border bg-background p-5">
                          <Target className="size-5 text-primary-600" aria-hidden="true" />
                          <h3 className="mt-4 font-display text-lg font-semibold">Ideal clients</h3>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.idealClients}</p>
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-lg border border-border bg-background p-5">
                          <AlertCircle className="size-5 text-primary-600" aria-hidden="true" />
                          <h3 className="mt-4 font-display text-lg font-semibold">Problems solved</h3>
                          <ul className="mt-4 space-y-3">
                            {service.problems.map((problem) => (
                              <li key={problem} className="text-sm leading-7 text-muted-foreground">
                                {problem}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-lg border border-border bg-background p-5">
                          <Workflow className="size-5 text-primary-600" aria-hidden="true" />
                          <h3 className="mt-4 font-display text-lg font-semibold">Features</h3>
                          <ul className="mt-4 space-y-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="text-sm leading-7 text-muted-foreground">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-lg border border-border bg-background p-5">
                          <CheckCircle2 className="size-5 text-teal-500" aria-hidden="true" />
                          <h3 className="mt-4 font-display text-lg font-semibold">Benefits</h3>
                          <ul className="mt-4 space-y-3">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="text-sm leading-7 text-muted-foreground">
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-100">Next step</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">Clarify the right solution path.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                  Nexcore can assess the current workflow, identify system gaps, and recommend a practical delivery
                  approach before implementation begins.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink href="/consultation">Request consultation</ButtonLink>
                <ButtonLink href="/projects" variant="secondary" className="border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.14] hover:text-white">
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
