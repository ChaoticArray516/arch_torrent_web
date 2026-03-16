import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Project Content Collection Schema
 * Defines the structure and validation rules for project entries
 * Uses Zod for runtime type validation at build time
 */
const projects = defineCollection({
  // Use glob loader to load all Markdown/MDX files from src/content/projects/
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    // Project title - required string
    title: z.string(),
    // Brief project description - required string
    description: z.string(),
    // Array of technologies used - required array of strings
    techStack: z.array(z.string()),
    // Project category - restricted to specific enum values
    category: z.enum(['web', 'mobile', 'tool', 'open-source']),
    // Project status - defaults to 'wip' if not specified
    status: z.enum(['live', 'archived', 'wip']).default('wip'),
    // External links - optional object with validated URLs
    links: z.object({
      demo: z.string().url().optional(),
      github: z.string().url().optional(),
    }).optional(),
    // Cover image path - required string (will be processed by Astro image optimization)
    coverImage: z.string(),
    // Featured flag - defaults to false
    featured: z.boolean().default(false),
    // Publication date - required date, auto-parsed from frontmatter
    publishedAt: z.date(),
  }),
});

/**
 * Blog Content Collection Schema
 * Defines the structure and validation rules for blog entries
 */
const blog = defineCollection({
  // Use glob loader to load all Markdown/MDX files from src/content/blog/
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Blog post title - required string
    title: z.string(),
    // Short summary/excerpt - required string
    summary: z.string(),
    // Array of topic tags - required array of strings
    tags: z.array(z.string()),
    // Publication date - required date
    publishedAt: z.date(),
  }),
});

/**
 * Export all collections
 * These are used by Astro's Content Collections API
 * for type-safe content queries and validation
 */
export const collections = { projects, blog };
