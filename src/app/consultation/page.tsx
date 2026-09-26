import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { createMailto, emailSubjects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Request a Nexcore consultation for enterprise web development, CRM, ERP, IT support, UI/UX design, or digital transformation planning."
};

export default function ConsultationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Request a consultation"
        title="Clarify scope, risks, and the practical path to delivery."
        description="Share the operational problem, service need, or platform idea. Nexcore will review the enquiry and respond with a useful next step."
        tone="light"
      />

      <section className="section-space bg-background">
        <div className="section-shell grid items-start gap-16 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] xl:gap-20">
          <div id="consultation-form" className="min-w-0 scroll-mt-28 border-t border-border pt-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Consultation form</p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-8">Tell us about the project.</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                A complete enquiry gives Nexcore enough context to prepare for a focused discovery conversation.
              </p>
            </div>
            <div className="mt-10">
              <ContactForm
                leadType="consultation"
                source="Consultation Page"
              />
            </div>
          </div>

          <aside className="min-w-0 space-y-12">
            <AnimatedSection>
              <section className="border-t border-border pt-8">
                <ShieldCheck className="size-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <h2 className="mt-5 font-display text-xl font-semibold leading-7">Direct consultation contact</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  For email-based project enquiries, contact Nexcore at{" "}
                  <a
                    href={createMailto(emailSubjects.consultation)}
                    aria-label={`Email Nexcore at ${siteConfig.email} about a consultation request`}
                    className="break-words font-semibold text-primary-600 underline decoration-primary-500/30 underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:text-primary-400"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section className="border-t border-border pt-8">
                <h2 className="font-display text-xl font-semibold leading-7">Official contact details</h2>
                <div className="mt-5 divide-y divide-border text-sm text-muted-foreground">
                  <a
                    href={createMailto(emailSubjects.consultation)}
                    aria-label={`Email Nexcore at ${siteConfig.email} about a consultation request`}
                    className="flex min-h-12 items-center gap-3 py-3 transition-colors hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:hover:text-primary-400"
                  >
                    <Mail className="size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    <span className="min-w-0 break-words leading-6">{siteConfig.email}</span>
                  </a>
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      aria-label={`Call Nexcore at ${phone.label}`}
                      className="flex min-h-12 items-center gap-3 py-3 transition-colors hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:hover:text-primary-400"
                    >
                      <Phone className="size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                      {phone.label}
                    </a>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </aside>
        </div>
      </section>
    </>
  );
}
