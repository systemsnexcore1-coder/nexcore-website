import type { Metadata } from "next";
import { ArrowUpRight, CalendarClock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { LocationMap } from "@/components/contact/LocationMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageIntro } from "@/components/ui/PageIntro";
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
      <PageIntro
        eyebrow="Contact"
        title="Start a focused enterprise technology conversation."
        description="Share the system, workflow, or digital service you want to improve. Nexcore will review the context and respond with a clear path for discovery."
        tone="light"
      />

      <section className="section-space bg-background">
        <div className="section-shell grid items-start gap-16 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] xl:gap-20">
          <div id="consultation-form" className="min-w-0 scroll-mt-28 border-t border-border pt-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Enquiry form</p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-8">
                Tell us what you need to build or improve.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                The form collects enough context for a useful first response while keeping procurement-sensitive details out of email.
              </p>
            </div>
            <div className="mt-10">
              <ContactForm leadType="contact" source="Website Contact Form" />
            </div>
          </div>

          <aside className="min-w-0 space-y-12">
            <AnimatedSection>
              <section className="border-t border-border pt-8">
                <h2 className="font-display text-xl font-semibold leading-7">Business contact</h2>
                <div className="mt-6 space-y-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <span className="flex min-h-14 gap-4 py-2">
                        <Icon className="mt-0.5 size-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                          <span className="mt-1 block break-words text-sm leading-6 text-muted-foreground transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">{item.value}</span>
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
                        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section className="border-t border-border pt-8">
                <h2 className="font-display text-xl font-semibold leading-7">Direct enquiry links</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Use these links when email is the simplest route for a specific enquiry type.
                </p>
                <div className="mt-5 divide-y divide-border">
                  {enquiryLinks.map((link) => (
                    <a
                      key={link.subject}
                      href={link.href}
                      className="group flex min-h-12 items-center justify-between gap-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 dark:hover:text-primary-400"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section className="border-t border-border pt-8">
                <div className="flex items-center gap-3">
                  <CalendarClock className="size-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  <h2 className="font-display text-xl font-semibold leading-7">What happens next</h2>
                </div>
                <ol className="mt-6 space-y-5">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-4 text-sm leading-7 text-muted-foreground">
                      <span className="technical-label shrink-0 pt-1 text-primary-600 dark:text-primary-400" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            </AnimatedSection>
          </aside>
        </div>
        <div className="section-shell mt-16">
          <LocationMap />
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 sm:py-16">
        <div className="section-shell flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between xl:gap-16">
          <div className="max-w-2xl">
            <ShieldCheck className="size-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold leading-8">Responsible handling of enquiry data</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Nexcore uses submitted details only to assess and respond to your business enquiry.
            </p>
          </div>
          <p className="border-l border-primary-500 pl-4 text-sm font-semibold leading-7 text-primary-600 dark:text-primary-400">Expected response: 1 to 2 business days</p>
        </div>
      </section>
    </>
  );
}
