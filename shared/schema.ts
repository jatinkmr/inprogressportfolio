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
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactEntry = InsertContact & { id: number };
