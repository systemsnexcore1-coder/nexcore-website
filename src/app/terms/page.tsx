import type { Metadata } from "next";
import { FileText, Mail, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
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
      <PageIntro
        eyebrow="Terms of Use"
        title="Clear terms for using the Nexcore website."
        description="These terms explain how visitors may use the website, submit enquiries, and contact Nexcore for business discussions."
        tone="light"
      />

      <section className="section-space bg-background">
        <div className="section-shell grid items-start gap-14 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:gap-20">
          <AnimatedSection className="min-w-0">
            <aside className="max-w-lg border-t border-border pt-8">
              <FileText className="size-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <h2 className="mt-5 font-display text-xl font-semibold leading-7">Official contact</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For questions about these terms, contact us at{" "}
                <a
                  href={createMailto(emailSubjects.general)}
                  aria-label={`Email Nexcore at ${siteConfig.email} about terms of service`}
                  className="break-words font-semibold text-primary-600 underline decoration-primary-500/30 underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:text-primary-400"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
              <a
                href={createMailto(emailSubjects.general)}
                aria-label={`Email Nexcore at ${siteConfig.email}`}
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                Email Nexcore
              </a>
            </aside>
          </AnimatedSection>

          <div className="min-w-0 space-y-10">
            {termsSections.map((section, index) => (
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
            <h2 className="mt-4 font-display text-2xl font-semibold leading-8">Ready to discuss a project?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">Use the official enquiry page for project and consultation requests.</p>
          </div>
          <ButtonLink href="/contact">Contact Nexcore</ButtonLink>
        </div>
      </section>
    </>
  );
}
