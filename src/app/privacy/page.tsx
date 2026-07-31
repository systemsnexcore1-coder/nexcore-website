import type { Metadata } from "next";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createMailto, emailSubjects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Nexcore privacy policy and contact details for privacy-related questions, requests, and data handling enquiries."
};

const policySections = [
  {
    title: "Information we collect",
    body:
      "Nexcore collects information sent through email links, prefilled enquiry emails, newsletter signup emails, and direct business communication. This may include names, company details, roles, email addresses, phone numbers, project requirements, budgets, timelines, and related business context."
  },
  {
    title: "How we use information",
    body:
      "Submitted information is used to assess enquiries, respond to requests, prepare consultations, support business communication, and improve Nexcore services. Nexcore does not sell submitted contact details."
  },
  {
    title: "How submissions are handled",
    body:
      "Website forms currently validate details in the browser and send submissions to Nexcore through Formspree when the public form endpoint is configured. The website does not store enquiry, consultation, or newsletter form submissions in a database."
  },
  {
    title: "Data security",
    body:
      "Nexcore applies reasonable technical and operational safeguards to protect enquiry data, including controlled access, secure configuration, and avoidance of hard-coded private credentials."
  },
  {
    title: "Your choices",
    body:
      "You may request clarification, correction, or deletion of business enquiry information where applicable. Nexcore will review privacy-related requests through the official contact address."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-100">Privacy Policy</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Responsible handling of business enquiry data.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                This policy explains how Nexcore handles information submitted through the website and direct enquiry
                channels.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <AnimatedSection>
            <aside className="rounded-lg border border-border bg-surface p-7">
              <LockKeyhole className="size-8 text-primary-600" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-semibold">Privacy contact</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For privacy-related questions or requests, contact us at{" "}
                <a
                  href={createMailto(emailSubjects.privacy)}
                  aria-label={`Email Nexcore at ${siteConfig.email} about privacy questions`}
                  className="font-semibold text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
              <a
                href={createMailto(emailSubjects.privacy)}
                aria-label={`Email Nexcore privacy team at ${siteConfig.email}`}
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email privacy team
              </a>
            </aside>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              {policySections.map((section) => (
                <section key={section.title} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
                  <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
                  <p className="mt-4 leading-8 text-muted-foreground">{section.body}</p>
                </section>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-padding mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <ShieldCheck className="size-7 text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl font-semibold">Need to update an enquiry?</h2>
            <p className="mt-2 text-muted-foreground">Use the official contact channel for privacy and data requests.</p>
          </div>
          <ButtonLink href="/contact">Contact Nexcore</ButtonLink>
        </div>
      </section>
    </>
  );
}
