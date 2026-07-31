import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr_1.1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Nexcore builds secure digital platforms that help large organizations improve operations, service delivery,
            and long-term technology capability.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="size-4 text-primary-600" aria-hidden="true" />
              <a
                className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                href={siteConfig.emailHref}
                aria-label={`Email Nexcore at ${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-4 text-primary-600" aria-hidden="true" />
              <a
                className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                href={siteConfig.gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Gmail to email Nexcore at ${siteConfig.email}`}
              >
                Open in Gmail
              </a>
            </p>
            {siteConfig.phones.map((phone) => (
              <p key={phone.href} className="flex items-center gap-3">
                <Phone className="size-4 text-primary-600" aria-hidden="true" />
                <a
                  className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  href={phone.href}
                  aria-label={`Call Nexcore at ${phone.label}`}
                >
                  {phone.label}
                </a>
              </p>
            ))}
            <p className="flex items-center gap-3">
              <MapPin className="size-4 text-primary-600" aria-hidden="true" />
              {siteConfig.addressDisplay}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-sm font-semibold text-foreground">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-primary-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Enterprise technology briefings</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Receive practical notes on digital transformation, workflow automation, and enterprise platform delivery.
          </p>
          <div className="mt-5">
            <NewsletterForm />
          </div>
          <div className="mt-8">
            <h2 className="font-display text-sm font-semibold text-foreground">Direct enquiries</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {enquiryLinks.map((link) => (
                <a
                  key={link.subject}
                  href={link.href}
                  aria-label={`${link.label} for Nexcore`}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary-500 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {new Date().getFullYear()} Nexcore. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-600">
              Terms of Service
            </Link>
            <a
              href={createMailto(emailSubjects.general)}
              className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={`Email Nexcore at ${siteConfig.email} for a general enquiry`}
            >
              General enquiries
            </a>
            <a
              href={createMailto(emailSubjects.privacy)}
              className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={`Email Nexcore at ${siteConfig.email} for a privacy enquiry`}
            >
              Privacy enquiries
            </a>
            <a
              href={createMailto(emailSubjects.vendor)}
              className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
