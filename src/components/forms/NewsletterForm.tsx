"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import {
  formErrorMessage,
  formNotConfiguredMessage,
  formSuccessMessage
} from "@/lib/formspree";
import { contactEmail, createMailto, emailSubjects } from "@/lib/data";
import { newsletterSchema } from "@/lib/validation";

function StatusMessage({ message }: { message: string }) {
  const [before, after] = message.split(contactEmail);

  if (after === undefined) {
    return <>{message}</>;
  }

  return (
    <>
      {before}
      <a
        href={createMailto(emailSubjects.general)}
        className="font-semibold underline underline-offset-2 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:hover:text-red-300"
        aria-label={`Email Nexcore at ${contactEmail}`}
      >
        {contactEmail}
      </a>
      {after}
    </>
  );
}

export function NewsletterForm() {
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [email, setEmail] = useState("");
  const [error, setError] = useState(formspreeEndpoint ? "" : formNotConfiguredMessage);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [honeypot, setHoneypot] = useState("");
  const lastSubmissionAttempt = useRef(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");

    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.flatten().fieldErrors.email?.[0] || "Enter a valid email address.");
      return;
    }

    if (!formspreeEndpoint) {
      setError(formNotConfiguredMessage);
      return;
    }

    if (honeypot.trim()) {
      setError(formErrorMessage);
      return;
    }

    const now = Date.now();
    if (now - lastSubmissionAttempt.current < 5000) {
      setError("Please wait a moment before submitting again.");
      return;
    }
    lastSubmissionAttempt.current = now;

    setStatus("loading");
    try {
      const formData = new FormData(form);
      formData.set("_subject", "New Nexcore Newsletter Signup");
      formData.set("_replyto", parsed.data.email);
      formData.set("subject", "New Nexcore Newsletter Signup");
      formData.set("form_type", "Newsletter signup");
      formData.set("message", "Newsletter signup request");

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Formspree submission failed", {
            status: response.status,
            result
          });
        }

        throw new Error("Form submission failed");
      }

      setStatus("success");
      setEmail("");
      setHoneypot("");
    } catch {
      setError(formErrorMessage);
      setStatus("idle");
    }
  }

  const isLoading = status === "loading";
  const isSubmissionDisabled = isLoading || !formspreeEndpoint;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter signup">
      <input type="hidden" name="_subject" value="New Nexcore Newsletter Signup" readOnly />
      <input type="hidden" name="subject" value="New Nexcore Newsletter Signup" readOnly />
      <input type="hidden" name="form_type" value="Newsletter signup" readOnly />
      <input type="hidden" name="message" value="Newsletter signup request" readOnly />

      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletter-website">Website</label>
        <input
          id="newsletter-website"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Business email address"
          className="min-h-11 min-w-0 flex-[1_1_180px] rounded-md border border-border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
        />
        <button
          type="submit"
          disabled={isSubmissionDisabled}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
          {isLoading ? "Submitting" : "Subscribe"}
        </button>
      </div>
      <div className="mt-3 min-h-6 text-sm" aria-live="polite">
        {error ? (
          <p className="text-red-600 dark:text-red-400">
            <StatusMessage message={error} />
          </p>
        ) : null}
        {status === "success" ? <p className="text-teal-700 dark:text-teal-400">{formSuccessMessage}</p> : null}
      </div>
    </form>
  );
}
