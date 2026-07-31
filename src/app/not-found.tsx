import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-primary-600">Page not found</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">This page is not available.</h1>
      <p className="mt-5 text-muted-foreground">
        The page may have moved, or the address may be incorrect.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
      >
        Return home
      </Link>
    </section>
  );
}
