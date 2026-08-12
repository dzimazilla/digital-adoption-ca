import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    doodleAlt: z.string().optional(),
    problem: z.string(),
    category: z.enum(['planning', 'operations', 'customers', 'security']),
    published: z.coerce.date(),
    lastReviewed: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { guides };
