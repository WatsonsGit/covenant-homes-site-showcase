import { z } from "zod";

// Multi-step lead form schemas (progressive validation per step)

export const leadStep1Schema = z.object({
  address: z
    .string()
    .min(5, "Please enter your property address")
    .max(200),
  city: z.string().default("Philadelphia"),
  state: z.string().default("PA"),
  zip: z.string().regex(/^\d{5}$/, "5-digit ZIP required").optional().or(z.literal("")),
});

export const leadStep2Schema = z.object({
  timeline: z.enum(["ASAP", "1-3 months", "3-6 months", "Just exploring"], {
    message: "Pick a timeline",
  }),
  situation: z.enum(
    [
      "Inherited",
      "Tired landlord",
      "Behind on taxes/payments",
      "Divorce",
      "Vacant",
      "Code violations",
      "Other",
    ],
    { message: "Pick the situation that fits best" }
  ),
});

export const leadStep3Schema = z.object({
  first_name: z.string().min(1, "First name required").max(60),
  last_name: z.string().min(1, "Last name required").max(60),
  phone: z
    .string()
    .regex(/^[0-9()\-\s]{10,20}$/, "Valid phone required")
    .transform((v) => v.replace(/\D/g, "")),
  email: z.string().email("Valid email required").max(200),
  consent_sms: z.boolean().refine((v) => v === true, {
    message: "Please agree to text follow-up so we can respond",
  }),
});

export const leadSchema = leadStep1Schema
  .merge(leadStep2Schema)
  .merge(leadStep3Schema);

export type LeadInput = z.infer<typeof leadSchema>;

// Replica webhook payload contract (per SITE-SPEC.md §4)
export const replicaPayloadSchema = z.object({
  name: z.string(),
  first_name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string().optional(),
  timeline: z.string(),
  situation: z.string(),
  source: z.string(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type ReplicaPayload = z.infer<typeof replicaPayloadSchema>;
