import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMailto, emailSubjects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Request a Nexcore consultation for enterprise web development, CRM, ERP, IT support, UI/UX design, or digital transformation planning."
};

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-100">Request a consultation</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Clarify scope, risks, and the practical path to delivery.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Share the operational problem, service need, or platform idea. Nexcore will review the enquiry and
                respond with a useful next step.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection>
            <div id="consultation-form" className="scroll-mt-28 rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
              <SectionHeading
                eyebrow="Consultation form"
                title="Tell us about the project."
                description="A complete enquiry gives Nexcore enough context to prepare for a focused discovery conversation."
              />
              <div className="mt-10">
                <ContactForm
                  leadType="consultation"
                  source="Consultation Page"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection>
              <div className="rounded-lg border border-border bg-surface p-7">
                <ShieldCheck className="size-7 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Direct consultation contact</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  For email-based project enquiries, contact Nexcore at{" "}
                  <a
                    href={createMailto(emailSubjects.consultation)}
                    aria-label={`Email Nexcore at ${siteConfig.email} about a consultation request`}
                    className="font-semibold text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-lg border border-border bg-surface p-7">
                <h2 className="font-display text-2xl font-semibold">Official contact details</h2>
                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <a
                    href={createMailto(emailSubjects.consultation)}
                    aria-label={`Email Nexcore at ${siteConfig.email} about a consultation request`}
                    className="flex items-center gap-3 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Mail className="size-4 text-primary-600" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      aria-label={`Call Nexcore at ${phone.label}`}
                      className="flex items-center gap-3 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <Phone className="size-4 text-primary-600" aria-hidden="true" />
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
