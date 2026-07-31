import type { Metadata } from "next";
import { FileText, Mail, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createMailto, emailSubjects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Nexcore website terms of use and official contact details for business enquiries."
};

const termsSections = [
  {
    title: "Website use",
    body:
      "This website is provided for business information, service discovery, and enquiry submission. Visitors should use the site responsibly and avoid attempts to disrupt, probe, or misuse website systems."
  },
  {
    title: "Enquiries and consultations",
    body:
      "Submitting an enquiry does not create a binding engagement. Nexcore reviews each request and may ask for additional information before preparing recommendations, estimates, proposals, or project terms."
  },
  {
    title: "Information accuracy",
    body:
      "Nexcore works to keep website content accurate and useful, but service descriptions, timelines, examples, and project information are general business information unless confirmed in a signed agreement."
  },
  {
    title: "Intellectual property",
    body:
      "Website content, design assets, text, and brand elements are owned by Nexcore or used with permission. They may not be copied, republished, or presented as another organization's work without written approval."
  },
  {
    title: "External services",
    body:
      "The website may connect to email, maps, analytics, hosting, CRM, or automation services. Availability of those services can affect online submissions, but direct email and phone contact remain available."
  },
  {
    title: "Limitation of liability",
    body:
      "The website is provided as an informational channel. Nexcore is not liable for business decisions made solely from website content without direct consultation and written project confirmation."
  }
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-100">Terms of Use</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Clear terms for using the Nexcore website.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                These terms explain how visitors may use the website, submit enquiries, and contact Nexcore for business
                discussions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <AnimatedSection>
            <aside className="rounded-lg border border-border bg-surface p-7">
              <FileText className="size-8 text-primary-600" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-semibold">Official contact</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For questions about these terms, contact us at{" "}
                <a
                  href={createMailto(emailSubjects.general)}
                  aria-label={`Email Nexcore at ${siteConfig.email} about terms of service`}
                  className="font-semibold text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
              <a
                href={createMailto(emailSubjects.general)}
                aria-label={`Email Nexcore at ${siteConfig.email}`}
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email Nexcore
              </a>
            </aside>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              {termsSections.map((section) => (
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
            <h2 className="mt-3 font-display text-2xl font-semibold">Ready to discuss a project?</h2>
            <p className="mt-2 text-muted-foreground">Use the official enquiry page for project and consultation requests.</p>
          </div>
          <ButtonLink href="/contact">Contact Nexcore</ButtonLink>
        </div>
      </section>
    </>
  );
}
