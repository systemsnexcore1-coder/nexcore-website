"use client";

import Link from "next/link";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <main style={{ margin: "0 auto", maxWidth: "48rem", padding: "6rem 1.5rem", textAlign: "center" }}>
          <p style={{ color: "#2563eb", fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" }}>
            Something went wrong
          </p>
          <h1 style={{ color: "#0f172a", fontFamily: "Arial, sans-serif", fontSize: "2.25rem", margin: "0.75rem 0 0" }}>
            The page could not be loaded.
          </h1>
          <p style={{ color: "#475569", lineHeight: 1.7, margin: "1rem 0 0" }}>
            Please refresh the page or return to the Nexcore homepage.
          </p>
          <Link
            href="/"
            style={{
              background: "#2563eb",
              borderRadius: "0.5rem",
              color: "#ffffff",
              display: "inline-flex",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              marginTop: "2rem",
              padding: "0.75rem 1.25rem",
              textDecoration: "none"
            }}
          >
            Return home
          </Link>
        </main>
      </body>
    </html>
  );
}
