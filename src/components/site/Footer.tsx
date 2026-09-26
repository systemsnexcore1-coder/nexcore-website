import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { createMailto, emailSubjects, enquiryLinks, siteConfig } from "@/lib/data";
import { Logo } from "./Logo";
import { NewsletterForm } from "../forms/NewsletterForm";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "CRM Solutions", href: "/services#crm-solutions" },
      { label: "ERP Solutions", href: "/services#erp-solutions" },
      { label: "IT Support", href: "/services#it-support" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0">
        <div className="section-shell">
          <div className="relative h-px bg-primary-600/25 dark:bg-primary-400/25">
            <span className="absolute left-0 top-0 h-5 w-px bg-border" />
            <span className="absolute left-0 top-0 size-1.5 -translate-y-1/2 bg-primary-600 dark:bg-primary-400" />
            <span className="absolute left-1/3 top-0 size-1.5 -translate-y-1/2 border border-primary-600/50 bg-surface dark:border-primary-400/50" />
            <span className="absolute left-2/3 top-0 size-1.5 -translate-y-1/2 border border-primary-600/50 bg-surface dark:border-primary-400/50" />
            <span className="absolute right-0 top-0 h-5 w-px bg-border" />
            <span className="absolute right-0 top-0 size-1.5 -translate-y-1/2 bg-teal-500" />
          </div>
        </div>
      </div>
      <div className="section-shell grid gap-x-10 gap-y-12 py-14 md:grid-cols-2 lg:py-20 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="min-w-0">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Nexcore builds secure digital platforms that help large organizations improve operations, service delivery,
            and long-term technology capability.
          </p>
          <div className="mt-7 space-y-3 text-sm leading-6 text-muted-foreground">
            <p className="flex items-start gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <a
                className="min-w-0 break-words underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 motion-reduce:transition-none"
                href={siteConfig.emailHref}
                aria-label={`Email Nexcore at ${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <a
                className="min-w-0 break-words underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 motion-reduce:transition-none"
                href={siteConfig.gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Gmail to email Nexcore at ${siteConfig.email}`}
              >
                Open in Gmail
              </a>
            </p>
            {siteConfig.phones.map((phone) => (
              <p key={phone.href} className="flex items-start gap-3">
                <Phone className="mt-1 size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <a
                  className="min-w-0 break-words tabular-nums underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 motion-reduce:transition-none"
                  href={phone.href}
                  aria-label={`Call Nexcore at ${phone.label}`}
                >
                  {phone.label}
                </a>
              </p>
            ))}
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <span className="min-w-0 break-words">{siteConfig.addressDisplay}</span>
            </p>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-2 content-start gap-x-5 gap-y-8 sm:gap-x-8">
          {footerLinks.map((group) => (
            <div key={group.title} className="min-w-0">
              <h2 className="technical-label border-b border-border pb-4 font-semibold text-foreground">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-block text-sm leading-6 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 motion-reduce:transition-none">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="min-w-0 md:col-span-2 md:max-w-xl xl:col-span-1 xl:max-w-none">
          <h2 className="font-display text-xl font-semibold leading-7 text-foreground">Enterprise technology briefings</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Receive practical notes on digital transformation, workflow automation, and enterprise platform delivery.
          </p>
          <div className="mt-5 min-w-0">
            <NewsletterForm />
          </div>
          <div className="mt-7 border-t border-border pt-6">
            <h2 className="technical-label font-semibold text-foreground">Direct enquiries</h2>
            <div className="mt-4 flex flex-col items-start gap-3">
              {enquiryLinks.map((link) => (
                <a
                  key={link.subject}
                  href={link.href}
                  aria-label={`${link.label} for Nexcore`}
                  className="text-link max-w-full underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <span className="min-w-0 break-words">{link.label}</span>
                  <ArrowRight className="shrink-0 motion-reduce:!transform-none motion-reduce:!transition-none" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="section-shell flex flex-col gap-5 py-6 text-xs leading-6 text-muted-foreground lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <p className="min-w-0 lg:max-w-xs">Copyright {new Date().getFullYear()} Nexcore. All rights reserved.</p>
          <div className="flex min-w-0 flex-wrap gap-x-5 gap-y-2 lg:max-w-2xl lg:justify-end">
            <Link href="/privacy" className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
              Terms of Service
            </Link>
            <a
              href={createMailto(emailSubjects.general)}
              className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`Email Nexcore at ${siteConfig.email} for a general enquiry`}
            >
              General enquiries
            </a>
            <a
              href={createMailto(emailSubjects.privacy)}
              className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`Email Nexcore at ${siteConfig.email} for a privacy enquiry`}
            >
              Privacy enquiries
            </a>
            <a
              href={createMailto(emailSubjects.vendor)}
              className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`Email Nexcore at ${siteConfig.email} for a vendor enquiry`}
            >
              Vendor enquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
