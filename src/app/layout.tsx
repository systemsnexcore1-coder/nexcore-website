import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageTransition } from "@/components/site/PageTransition";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/lib/data";

const themeScript = `
  (() => {
    try {
      const stored = localStorage.getItem("nexcore-theme");
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const theme = stored === "light" || stored === "dark" ? stored : system;
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.style.colorScheme = theme;
    } catch (error) {}
  })();
`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexcore",
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH"
  },
  description: siteConfig.description,
  sameAs: [],
  contactPoint: siteConfig.phones.map((phone) => ({
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.email,
    telephone: phone.label,
    availableLanguage: ["English"]
  }))
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexcore",
  url: siteConfig.url,
  description: siteConfig.description
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nexcore | Enterprise Digital Solutions",
    template: "%s | Nexcore"
  },
  description: siteConfig.description,
  applicationName: "Nexcore",
  keywords: [
    "enterprise software",
    "digital transformation",
    "CRM systems",
    "ERP systems",
    "custom web development",
    "IT consulting",
    "UI UX design"
  ],
  authors: [{ name: "Nexcore" }],
  creator: "Nexcore",
  icons: {
    icon: [
      {
        url: "/branding/nexcore-favicon.png",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/branding/nexcore-favicon.png",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Nexcore",
    title: "Nexcore | Enterprise Digital Solutions",
    description: siteConfig.description,
    images: [
      {
        url: "/images/nexcore-enterprise-platform.png",
        width: 1716,
        height: 917,
        alt: "Abstract enterprise technology platform visual for Nexcore"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexcore | Enterprise Digital Solutions",
    description: siteConfig.description,
    images: ["/images/nexcore-enterprise-platform.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#03111f" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
