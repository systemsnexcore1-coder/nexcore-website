"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import {
  budgetOptions,
  contactSchema,
  serviceOptions,
  timelineOptions,
  type ContactPayload
} from "@/lib/validation";
import {
  formErrorMessage,
  formNotConfiguredMessage,
  formSuccessMessage
} from "@/lib/formspree";
import { contactEmail, createMailto, emailSubjects } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

type ContactFormValues = Omit<ContactPayload, "serviceRequired" | "budget" | "timeline"> & {
  serviceRequired: ContactPayload["serviceRequired"] | "";
  budget: ContactPayload["budget"] | "";
  timeline: ContactPayload["timeline"] | "";
};

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  position: "",
  email: "",
  phone: "",
  serviceRequired: "",
  budget: "",
  timeline: "",
  projectDescription: "",
  leadType: "contact",
  source: "Website Contact Form"
};

function FieldError({ message, id }: { message?: string; id: string }) {
  return <div id={id} className="mt-2 min-h-5 text-sm text-red-600 dark:text-red-400">{message}</div>;
}

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

function inputClass(hasError?: boolean) {
  return cn(
    "mt-2 min-h-12 min-w-0 w-full rounded-md border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary-500/20",
    hasError ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary-500"
  );
}

function getFormSubject(leadType: ContactPayload["leadType"], source: ContactPayload["source"]) {
  if (source.toLowerCase().includes("proposal")) {
    return "New Nexcore Proposal Request";
  }

  return leadType === "consultation"
    ? "New Nexcore Consultation Request"
    : "New Nexcore Website Enquiry";
}

function getFormspreeMessage(result: unknown) {
  if (typeof result === "string") {
    return result;
  }

  if (!result || typeof result !== "object") {
    return "";
  }

  if ("error" in result && typeof result.error === "string") {
    return result.error;
  }

  if ("message" in result && typeof result.message === "string") {
    return result.message;
  }

  if ("errors" in result && Array.isArray(result.errors)) {
    return result.errors
      .map((error) => {
        if (typeof error === "string") {
          return error;
        }

        if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
          return error.message;
        }

        return "";
      })
      .filter(Boolean)
      .join(" ");
  }

  return "";
}

type ContactFormProps = {
  leadType?: ContactPayload["leadType"];
  source?: ContactPayload["source"];
  successMessage?: string;
};

export function ContactForm({
  leadType = "contact",
  source = "Website Contact Form",
  successMessage = formSuccessMessage
}: ContactFormProps) {
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const formSubject = getFormSubject(leadType, source);
  const [values, setValues] = useState<ContactFormValues>({
    ...initialValues,
    leadType,
    source
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formError, setFormError] = useState(formspreeEndpoint ? "" : formNotConfiguredMessage);
  const [honeypot, setHoneypot] = useState("");
  const lastSubmissionAttempt = useRef(0);

  function updateField<Field extends keyof ContactFormValues>(field: Field, value: ContactFormValues[Field]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormError("");

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(flattened).map(([field, messages]) => [field, messages?.[0]])
        ) as FormErrors
      );
      const firstInvalidField = form.elements.namedItem(Object.keys(flattened)[0]);
      if (firstInvalidField instanceof HTMLElement) firstInvalidField.focus();
      return;
    }

    if (!formspreeEndpoint) {
      setFormError(formNotConfiguredMessage);
      return;
    }

    if (honeypot.trim()) {
      setFormError(formErrorMessage);
      return;
    }

    const now = Date.now();
    if (now - lastSubmissionAttempt.current < 5000) {
      setFormError("Please wait a moment before submitting again.");
      return;
    }
    lastSubmissionAttempt.current = now;

    setStatus("loading");
    let formspreeRejected = false;
    try {
      const formData = new FormData(form);
      formData.set("_subject", formSubject);
      formData.set("_replyto", parsed.data.email);
      formData.set("subject", formSubject);
      formData.set("form_type", parsed.data.leadType === "consultation" ? "Consultation request" : "Website enquiry");
      formData.set("source", parsed.data.source);
      formData.set("jobTitle", parsed.data.position);
      formData.set("service", parsed.data.serviceRequired);
      formData.set("message", parsed.data.projectDescription);

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });
      const responseText = await response.text();

      let result: unknown = null;

      try {
        result = responseText ? JSON.parse(responseText) : null;
      } catch {
        result = responseText;
      }

      if (!response.ok) {
        formspreeRejected = true;

        if (process.env.NODE_ENV !== "production") {
          console.error("Formspree submission failed", {
            status: response.status,
            statusText: response.statusText,
            result
          });

          const formspreeMessage = getFormspreeMessage(result);
          setFormError(
            [
              `Formspree returned ${response.status}: ${response.statusText || "Request failed"}.`,
              formspreeMessage
            ]
              .filter(Boolean)
              .join(" ")
          );
        } else {
          setFormError(formErrorMessage);
        }

        throw new Error(
          `Formspree returned ${response.status}: ${response.statusText}`
        );
      }

      setValues({
        ...initialValues,
        leadType,
        source
      });
      setErrors({});
      setHoneypot("");
      setStatus("success");
    } catch {
      if (!formspreeRejected) {
        setFormError(formErrorMessage);
      }
      setStatus("idle");
    }
  }

  const isLoading = status === "loading";
  const isSubmissionDisabled = isLoading || !formspreeEndpoint;

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form space-y-6" aria-label={leadType === "consultation" ? "Consultation request" : "Contact enquiry"} aria-busy={isLoading}>
      <input type="hidden" name="_subject" value={formSubject} readOnly />
      <input type="hidden" name="subject" value={formSubject} readOnly />
      <input type="hidden" name="form_type" value={leadType === "consultation" ? "Consultation request" : "Website enquiry"} readOnly />
      <input type="hidden" name="source" value={source} readOnly />
      <input type="hidden" name="leadType" value={leadType} readOnly />
      <input type="hidden" name="jobTitle" value={values.position} readOnly />
      <input type="hidden" name="service" value={values.serviceRequired} readOnly />
      <input type="hidden" name="message" value={values.projectDescription} readOnly />

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${leadType}-website`}>Website</label>
        <input
          id={`${leadType}-website`}
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="contact-form-fields grid gap-x-6 gap-y-3">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            className={inputClass(Boolean(errors.name))}
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="name-error"
            required
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
            className={inputClass(Boolean(errors.company))}
            placeholder="Organization name"
            aria-invalid={Boolean(errors.company)}
            aria-describedby="company-error"
            required
          />
          <FieldError id="company-error" message={errors.company} />
        </div>

        <div>
          <label htmlFor="position" className="text-sm font-medium text-foreground">
            Position
          </label>
          <input
            id="position"
            name="position"
            value={values.position}
            onChange={(event) => updateField("position", event.target.value)}
            autoComplete="organization-title"
            className={inputClass(Boolean(errors.position))}
            placeholder="Role or title"
            aria-invalid={Boolean(errors.position)}
            aria-describedby="position-error"
            required
          />
          <FieldError id="position-error" message={errors.position} />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            className={inputClass(Boolean(errors.email))}
            placeholder="Business email address"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="email-error"
            required
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
            className={inputClass(Boolean(errors.phone))}
            placeholder="+233 55 058 1567"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="phone-error"
            required
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>

        <div>
          <label htmlFor="serviceRequired" className="text-sm font-medium text-foreground">
            Service Required
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={values.serviceRequired}
            onChange={(event) => updateField("serviceRequired", event.target.value as ContactFormValues["serviceRequired"])}
            className={inputClass(Boolean(errors.serviceRequired))}
            aria-invalid={Boolean(errors.serviceRequired)}
            aria-describedby="serviceRequired-error"
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="serviceRequired-error" message={errors.serviceRequired} />
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-medium text-foreground">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => updateField("budget", event.target.value as ContactFormValues["budget"])}
            className={inputClass(Boolean(errors.budget))}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby="budget-error"
            required
          >
            <option value="">Select a budget</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="budget-error" message={errors.budget} />
        </div>

        <div>
          <label htmlFor="timeline" className="text-sm font-medium text-foreground">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(event) => updateField("timeline", event.target.value as ContactFormValues["timeline"])}
            className={inputClass(Boolean(errors.timeline))}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby="timeline-error"
            required
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="timeline-error" message={errors.timeline} />
        </div>
      </div>

      <div>
        <label htmlFor="projectDescription" className="text-sm font-medium text-foreground">
          Project Description
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={values.projectDescription}
          onChange={(event) => updateField("projectDescription", event.target.value)}
          rows={7}
          className={cn(inputClass(Boolean(errors.projectDescription)), "resize-y py-3 leading-7")}
          placeholder="Describe the business problem, current process, stakeholders, and expected outcome."
          aria-invalid={Boolean(errors.projectDescription)}
          aria-describedby="projectDescription-error"
          required
        />
        <FieldError id="projectDescription-error" message={errors.projectDescription} />
      </div>

      <div className="min-h-6 text-sm" aria-live="polite">
        {formError ? (
          <p className="text-red-600 dark:text-red-400">
            <StatusMessage message={formError} />
          </p>
        ) : null}
        {status === "success" ? (
          <p className="text-teal-700 dark:text-teal-400">{successMessage}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmissionDisabled}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isLoading ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {isLoading ? "Submitting request" : "Submit request"}
      </button>
    </form>
  );
}
