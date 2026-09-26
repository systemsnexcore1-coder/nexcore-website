import type { Metadata } from "next";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
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
      <PageIntro
        eyebrow="Privacy Policy"
        title="Responsible handling of business enquiry data."
        description="This policy explains how Nexcore handles information submitted through the website and direct enquiry channels."
        tone="light"
      />

      <section className="section-space bg-background">
        <div className="section-shell grid items-start gap-14 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:gap-20">
          <AnimatedSection className="min-w-0">
            <aside className="max-w-lg border-t border-border pt-8">
              <LockKeyhole className="size-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <h2 className="mt-5 font-display text-xl font-semibold leading-7">Privacy contact</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For privacy-related questions or requests, contact us at{" "}
                <a
                  href={createMailto(emailSubjects.privacy)}
                  aria-label={`Email Nexcore at ${siteConfig.email} about privacy questions`}
                  className="break-words font-semibold text-primary-600 underline decoration-primary-500/30 underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:text-primary-400"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
              <a
                href={createMailto(emailSubjects.privacy)}
                aria-label={`Email Nexcore privacy team at ${siteConfig.email}`}
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                Email privacy team
              </a>
            </aside>
          </AnimatedSection>

          <div className="min-w-0 space-y-10">
            {policySections.map((section, index) => (
              <section key={section.title} className="border-t border-border pt-8">
                <span className="technical-label text-primary-600 dark:text-primary-400" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-8">{section.title}</h2>
                <p className="mt-4 max-w-prose text-base leading-8 text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 sm:py-16">
        <div className="section-shell flex flex-col items-start gap-8 xl:flex-row xl:items-center xl:justify-between xl:gap-16">
          <div className="max-w-2xl">
            <ShieldCheck className="size-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold leading-8">Need to update an enquiry?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">Use the official contact channel for privacy and data requests.</p>
          </div>
          <ButtonLink href="/contact">Contact Nexcore</ButtonLink>
        </div>
      </section>
    </>
  );
}
