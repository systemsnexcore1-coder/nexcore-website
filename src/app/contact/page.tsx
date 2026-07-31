import type { Metadata } from "next";
import { CalendarClock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { LocationMap } from "@/components/contact/LocationMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { enquiryLinks, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexcore in Accra, Ghana to discuss custom web development, CRM, ERP, IT support, UI/UX design, and enterprise digital transformation projects."
};

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: Mail
  },
  ...siteConfig.phones.map((phone, index) => ({
    label: index === 0 ? "Phone" : `Phone ${index + 1}`,
    value: phone.label,
    href: phone.href,
    icon: Phone
  })),
  {
    label: "Location",
    value: siteConfig.addressDisplay,
    href: null,
    icon: MapPin
  }
];

const nextSteps = [
  "Nexcore reviews the enquiry and clarifies business objectives.",
  "A discovery call is scheduled with the right technical and delivery leads.",
  "You receive a practical next-step recommendation, not a generic proposal."
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-padding mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-100">Contact</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Start a focused enterprise technology conversation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Share the system, workflow, or digital service you want to improve. Nexcore will review the context and
                respond with a clear path for discovery.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-padding mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <AnimatedSection>
            <div id="consultation-form" className="scroll-mt-28 rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
              <SectionHeading
                eyebrow="Enquiry form"
                title="Tell us what you need to build or improve."
                description="The form collects enough context for a useful first response while keeping procurement-sensitive details out of email."
              />
              <div className="mt-10">
                <ContactForm leadType="contact" source="Website Contact Form" />
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection>
              <div className="rounded-lg border border-border bg-surface p-7">
                <h2 className="font-display text-2xl font-semibold">Business contact</h2>
                <div className="mt-6 space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <span className="flex gap-4">
                        <span className="grid size-10 place-items-center rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-500/[0.15] dark:text-primary-100">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                          <span className="mt-1 block text-sm leading-6 text-muted-foreground">{item.value}</span>
                        </span>
                      </span>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={
                          item.label === "Email" ? `Email Nexcore at ${item.value}` : item.label.startsWith("Phone") ? `Call Nexcore at ${item.value}` : undefined
                        }
                        className="block rounded-lg transition hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-lg border border-border bg-surface p-7">
                <h2 className="font-display text-2xl font-semibold">Direct enquiry links</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Use these links when email is the simplest route for a specific enquiry type.
                </p>
                <div className="mt-5 grid gap-3">
                  {enquiryLinks.map((link) => (
                    <a
                      key={link.subject}
                      href={link.href}
                      className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary-500 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <LocationMap />
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-lg border border-border bg-surface p-7">
                <CalendarClock className="size-6 text-primary-600" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-padding mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <ShieldCheck className="size-7 text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl font-semibold">Responsible handling of enquiry data</h2>
            <p className="mt-2 text-muted-foreground">
              Nexcore uses submitted details only to assess and respond to your business enquiry.
            </p>
          </div>
          <p className="text-sm font-semibold text-primary-600">Expected response: 1 to 2 business days</p>
        </div>
      </section>
    </>
  );
}
