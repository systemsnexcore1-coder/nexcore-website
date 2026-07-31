import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Coming Soon",
  description: "Nexcore admin tools are temporarily unavailable."
};

export default function AdminLoginPage() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-padding mx-auto max-w-lg">
        <div className="rounded-lg border border-border bg-surface p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase text-primary-600">Nexcore Admin</p>
          <h1 className="mt-3 font-display text-3xl font-semibold">Admin tools coming soon</h1>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Internal CRM and admin access are temporarily disabled while the website runs as a stable frontend site.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
