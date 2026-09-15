import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name cannot exceed 100 characters')
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(150, 'Email cannot exceed 150 characters')
    .trim(),
  subject: z
    .string()
    .max(150, 'Subject cannot exceed 150 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message cannot exceed 5000 characters')
    .trim(),
  // Honeypot field for bot spam prevention. Must remain empty.
  website: z.string().max(0, 'Spam detected').optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
