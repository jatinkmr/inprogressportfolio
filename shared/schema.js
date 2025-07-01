import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
});

export const insertContactSchema = contactFormSchema.extend({
  createdAt: z.date().default(() => new Date()),
});

// Types
export const contactEntrySelect = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
  createdAt: z.date(),
});
