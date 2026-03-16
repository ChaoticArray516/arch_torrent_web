// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

/**
 * Astro Configuration File (STEP-15)
 * Deployment-ready configuration for static site generation.
 *
 * Features:
 * - output: 'static' - Generates pure static HTML/CSS/JS (no Node.js server required)
 * - site - Required for sitemap generation and canonical URLs
 * - Integrations: React (islands), MDX (content), Sitemap (SEO)
 *
 * Deployment Targets:
 * - Vercel (recommended - first-class Astro support)
 * - Netlify, GitHub Pages, Cloudflare Pages, etc.
 *
 * @see https://docs.astro.build/en/guides/deploy/
 */
export default defineConfig({
  // Output mode: static generates pure static files for CDN deployment
  output: 'static',

  // Site URL - required for sitemap and canonical URLs
  // Update this with your actual domain before deployment
  site: 'https://your-domain.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx(), sitemap()]
});