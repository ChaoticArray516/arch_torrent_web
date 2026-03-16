/// <reference types="astro/client" />

/**
 * TypeScript environment definitions for Astro
 * Provides type definitions for Astro's client-side APIs and modules
 */

declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/client';
  const component: AstroComponentFactory;
  export default component;
}

// Environment variables type definitions
interface ImportMetaEnv {
  readonly SITE_URL: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
