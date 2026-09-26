import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Compass, Database, Eye, Users2, Workflow } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nexcore's mission, vision, values, team, and approach to enterprise digital transformation."
};

const culturePoints = [
  "Deep discovery before committing to technology decisions",
  "Clear documentation for clients and internal support teams",
  "Practical delivery rhythms that fit busy institutional stakeholders",
  "Respect for governance, compliance, procurement, and adoption realities"
];

const expertise = ["Enterprise software engineering", "Product design", "Operational consulting"];
const teamIcons = [Workflow, Code2, Database];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Nexcore"
        title="A technology partner for organizations modernizing important operations."
        description="Nexcore develops digital solutions for institutions where reliability, accountability, and user adoption matter. The company combines enterprise software engineering, product design, and operational consulting to help teams move from manual processes to durable digital systems."
      >
        <ul className="mt-10 grid gap-6 border-t border-border pt-6 md:grid-cols-3 md:gap-8">
          {expertise.map((item, index) => (
            <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
              <span className="technical-label shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </PageIntro>

      <section className="section-space bg-background">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Company story"
              title="Built around the gap between policy, process, and software."
              description="Large organizations often know what they need to improve, but their tools do not reflect how their teams actually work. Nexcore exists to close that gap."
            />
          </AnimatedSection>

          <AnimatedSection variant="slide" delay={0.1}>
            <div className="relative space-y-6 border-l border-border pl-6 text-base leading-8 text-muted-foreground sm:pl-8">
              <span className="absolute -left-px top-0 h-16 w-px bg-primary-500" aria-hidden="true" />
              <p>
                Nexcore was formed to help institutions replace fragile spreadsheets, paper trails, and disconnected
                applications with well-structured digital platforms. The work starts with understanding governance,
                approval paths, reporting obligations, users, and the constraints that shape each organization.
              </p>
              <p>
                The result is software that is practical to operate: secure roles, reliable data flows, clear interfaces,
                strong reporting, and an implementation path that supports adoption instead of overwhelming teams.
              </p>
              <p>
                Nexcore works with government institutions, corporations, financial organizations, healthcare providers,
                manufacturers, NGOs, educational institutions, and laboratories that need technology to support serious
                operational responsibility.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="system-grid section-space border-y border-border bg-surface">
        <div className="section-shell grid gap-10 md:grid-cols-2 md:gap-0">
          <AnimatedSection className="md:pr-10 lg:pr-16">
            <div className="flex items-center gap-4">
              <Compass className="size-7 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Mission</h2>
              <span className="ml-2 h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Help organizations digitize operations, improve efficiency, and deliver better services through
              secure, scalable, and maintainable technology.
            </p>
          </AnimatedSection>
          <AnimatedSection
            delay={0.12}
            className="border-t border-border pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-16"
          >
            <div className="flex items-center gap-4">
              <Eye className="size-7 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Vision</h2>
              <span className="ml-2 h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Become a trusted digital transformation partner for institutions that need modern systems to improve
              public services, business performance, and long-term resilience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Values"
              title="Principles that shape delivery decisions."
              description="Nexcore values are written for day-to-day project work, not wall posters. They guide scope, design, communication, and support."
            />
          </AnimatedSection>

          <ol className="border-t border-border">
            {values.map((value, index) => (
              <li key={value} className="border-b border-border">
                <AnimatedSection delay={index * 0.05}>
                  <div className="group flex items-start gap-5 py-6 sm:gap-7">
                    <span className="technical-label pt-1 text-primary-600 dark:text-primary-400" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 text-base font-medium leading-7 sm:text-lg">{value}</p>
                    <span
                      className="mt-2.5 size-2 shrink-0 border border-primary-500 transition-colors group-hover:bg-primary-500"
                      aria-hidden="true"
                    />
                  </div>
                </AnimatedSection>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="system-dark section-space relative overflow-hidden bg-navy-950 text-white">
        <div className="system-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="section-shell relative">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Meet the team"
              title="A focused team building complete digital solutions."
              description="From interface design to backend architecture and data, our team brings complementary expertise to every solution we build."
              tone="dark"
            />
          </AnimatedSection>

          <div className="relative mt-12 grid gap-6 border-l border-white/20 pl-5 lg:mt-16 lg:grid-cols-3 lg:gap-8 lg:border-l-0 lg:pl-0">
            <span className="absolute inset-x-0 top-0 hidden h-px bg-white/20 lg:block" aria-hidden="true" />
            {team.map((member, index) => {
              const Icon = teamIcons[index] || Code2;

              return (
                <AnimatedSection key={member.name} delay={index * 0.1} className="relative h-full lg:pt-8">
                  <span
                    className="absolute -left-5 top-8 h-px w-5 bg-primary-400 lg:left-8 lg:top-0 lg:h-8 lg:w-px"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -left-6 top-7 size-2 border border-primary-400 bg-navy-950 lg:left-7 lg:-top-1"
                    aria-hidden="true"
                  />
                  <article className="group h-full rounded-lg border border-white/[0.15] bg-navy-900 p-6 transition-colors duration-300 hover:border-primary-400/60 sm:p-8 lg:p-6 xl:p-8">
                    <div className="flex items-center gap-5" aria-hidden="true">
                      <div className="grid size-16 shrink-0 place-items-center rounded-md border border-primary-400/40 bg-primary-500/10 font-display text-2xl font-semibold text-primary-100">
                        {member.initials}
                      </div>
                      <div className="flex flex-1 items-center text-primary-400">
                        <span className="h-px flex-1 bg-primary-400/30 transition-colors duration-300 group-hover:bg-primary-400/70" />
                        <Icon className="ml-3 size-6 shrink-0" />
                      </div>
                    </div>
                    <h3 className="mt-7 font-display text-xl font-semibold leading-7 text-white lg:min-h-14">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-primary-100 lg:min-h-12">{member.role}</p>
                    <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-7 text-blue-100">{member.summary}</p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AnimatedSection>
            <p className="eyebrow">Culture</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Calm, rigorous work for high-responsibility environments.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Nexcore culture favors clarity, technical depth, and steady collaboration. The team is comfortable with
              complexity, but the goal is always to make the solution easier for clients to operate.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Discuss your organization</ButtonLink>
            </div>
          </AnimatedSection>

          <ol className="relative border-l border-border">
            {culturePoints.map((point, index) => (
              <li key={point} className="relative pb-8 pl-7 last:pb-0 sm:pl-10">
                <span className="absolute -left-1 top-2 size-2 border border-primary-500 bg-background" aria-hidden="true" />
                <AnimatedSection delay={index * 0.06} variant="slide">
                  <div className="flex items-start gap-5">
                    <span className="technical-label pt-1 text-muted-foreground" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-lg text-base font-medium leading-8">{point}</p>
                  </div>
                </AnimatedSection>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="system-grid border-t border-border bg-surface py-14 sm:py-16">
        <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <Users2 className="size-7 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">Need a partner for digital transformation?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">Nexcore can help clarify the right first step.</p>
          </div>
          <span className="hidden h-px flex-1 bg-border lg:block" aria-hidden="true" />
          <Link href="/consultation" className="text-link group w-fit shrink-0 py-3">
            Request consultation
            <ArrowRight className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
