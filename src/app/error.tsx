"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-primary-600">Something went wrong</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">The page could not be loaded.</h1>
      <p className="mt-5 text-muted-foreground">
        The request failed unexpectedly. You can retry the page or return to the homepage.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          Retry
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 text-sm font-semibold transition hover:border-primary-500 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
