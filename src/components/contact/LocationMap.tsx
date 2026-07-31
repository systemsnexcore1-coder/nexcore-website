"use client";

import dynamic from "next/dynamic";
import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";

const LeafletLocationMap = dynamic(
  () => import("./LeafletLocationMap").then((module) => module.LeafletLocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-80 min-h-80 w-full place-items-center rounded-lg bg-muted text-sm text-muted-foreground">
        Loading map...
      </div>
    )
  }
);

export function LocationMap() {
  return (
    <div className="relative z-0 rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-7">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-500/[0.15] dark:text-primary-100">
            <MapPin className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold">Location</h2>
            <p className="mt-2 text-sm font-semibold text-foreground">{siteConfig.address}</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Serving clients across Ghana and internationally.
            </p>
          </div>
        </div>
        <a
          href="https://www.openstreetmap.org/search?query=Accra%2C%20Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-semibold text-muted-foreground transition hover:border-primary-500 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Open in Maps
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="relative z-0 overflow-hidden rounded-lg border border-border bg-muted">
        <LeafletLocationMap />
      </div>
    </div>
  );
}
