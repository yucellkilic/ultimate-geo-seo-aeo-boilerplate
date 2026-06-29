import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address');
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain uppercase')
  .regex(/[0-9]/, 'Password must contain number');

export const userSchema = z.object({
  email: emailSchema,
  name: z.string().min(2, 'Name too short'),
  password: passwordSchema,
});

export const productSchema = z.object({
  name: z.string().min(1, 'Product name required'),
  description: z.string().optional(),
  price: z.number().positive('Price must be positive'),
  category: z.string().min(1, 'Category required'),
  stock: z.number().int().nonnegative(),
});

export const blogPostSchema = z.object({
  title: z.string().min(5, 'Title too short'),
  slug: z.string().min(1, 'Slug required'),
  content: z.string().min(100, 'Content too short'),
  excerpt: z.string().min(10, 'Excerpt too short'),
  category: z.string().min(1, 'Category required'),
  tags: z.array(z.string()).min(1, 'At least one tag'),
});
