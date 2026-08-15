import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Eye, Handshake, Users2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
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

export default function AboutPage() {
  return (
    <>
      <section className="blueprint-grid bg-surface py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-600">About Nexcore</p>
              <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                A technology partner for organizations modernizing important operations.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Nexcore develops digital solutions for institutions where reliability, accountability, and user
                adoption matter. The company combines enterprise software engineering, product design, and operational
                consulting to help teams move from manual processes to durable digital systems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Company story"
              title="Built around the gap between policy, process, and software."
              description="Large organizations often know what they need to improve, but their tools do not reflect how their teams actually work. Nexcore exists to close that gap."
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
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

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-lg border border-border bg-background p-8">
                <Compass className="size-8 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Mission</h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Help organizations digitize operations, improve efficiency, and deliver better services through
                  secure, scalable, and maintainable technology.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="h-full rounded-lg border border-border bg-background p-8">
                <Eye className="size-8 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Vision</h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Become a trusted digital transformation partner for institutions that need modern systems to improve
                  public services, business performance, and long-term resilience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Values"
              title="Principles that shape delivery decisions."
              description="Nexcore values are written for day-to-day project work, not wall posters. They guide scope, design, communication, and support."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <AnimatedSection key={value}>
                <div className="h-full rounded-lg border border-border bg-surface p-6">
                  <CheckCircle2 className="size-6 text-teal-500" aria-hidden="true" />
                  <p className="mt-5 text-sm font-semibold leading-7 text-foreground">{value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Meet the team"
              title="A focused team building complete digital solutions."
              description="From interface design to backend architecture and data, our team brings complementary expertise to every solution we build."
              tone="dark"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <AnimatedSection key={member.name} className="h-full">
                <article className="h-full rounded-lg border border-white/[0.12] bg-white/[0.06] p-6">
                  <div className="grid size-14 place-items-center rounded-lg bg-primary-500 text-lg font-semibold text-white">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary-100">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-blue-100">{member.summary}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <AnimatedSection>
            <div>
              <p className="text-sm font-semibold uppercase text-primary-600">Culture</p>
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
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {culturePoints.map((point) => (
                <div key={point} className="rounded-lg border border-border bg-surface p-5">
                  <Handshake className="size-5 text-primary-600" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium leading-7">{point}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-padding mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <Users2 className="size-7 text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl font-semibold">Need a partner for digital transformation?</h2>
            <p className="mt-2 text-muted-foreground">Nexcore can help clarify the right first step.</p>
          </div>
            <Link href="/consultation" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700">
            Request consultation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
