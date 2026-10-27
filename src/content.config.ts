import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Tags are stored as URL slugs ("Web Dev" -> "web-dev") so each one maps to exactly one tag page.
const tag = z
  .string()
  .transform((value) => value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
  .pipe(z.string().min(1, 'Tag must contain at least one letter or number'));

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(tag).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
