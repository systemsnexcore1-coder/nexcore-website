import { z } from "zod";

export const serviceOptions = [
  "Web Development",
  "CRM Solutions",
  "ERP Solutions",
  "IT Support",
  "UI/UX Design",
  "Digital Transformation Consulting"
] as const;

export const budgetOptions = [
  "Under $25,000",
  "$25,000 - $75,000",
  "$75,000 - $150,000",
  "$150,000 - $300,000",
  "$300,000+",
  "Not sure yet"
] as const;

export const timelineOptions = [
  "Discovery phase",
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6+ months"
] as const;

export const leadSourceOptions = ["Website Contact Form", "Consultation Page"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  company: z.string().trim().min(2, "Enter your company or institution.").max(120, "Company name is too long."),
  position: z.string().trim().min(2, "Enter your position.").max(100, "Position is too long."),
  email: z.string().trim().email("Enter a valid business email address.").max(120, "Email is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(40, "Phone number is too long.")
    .regex(/^[+()\d\s.-]+$/, "Use digits, spaces, +, -, periods, or parentheses."),
  serviceRequired: z.enum(serviceOptions, {
    errorMap: () => ({ message: "Select the service you need." })
  }),
  budget: z.enum(budgetOptions, {
    errorMap: () => ({ message: "Select an estimated budget." })
  }),
  timeline: z.enum(timelineOptions, {
    errorMap: () => ({ message: "Select an expected timeline." })
  }),
  projectDescription: z
    .string()
    .trim()
    .min(30, "Share at least 30 characters about the project.")
    .max(2000, "Project description is too long."),
  leadType: z.enum(["contact", "consultation"]).default("contact"),
  source: z.string().trim().max(80, "Source is too long.").default("Website Contact Form")
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(120, "Email is too long.")
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type NewsletterPayload = z.infer<typeof newsletterSchema>;
