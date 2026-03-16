import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and merges Tailwind classes using tailwind-merge
 * This utility ensures proper handling of conditional classes and prevents Tailwind class conflicts
 *
 * @param inputs - Class names or conditional class objects
 * @returns Merged class string with resolved Tailwind conflicts
 *
 * @example
 * cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4' (px-4 overrides px-2)
 * cn('btn', { 'btn-active': isActive }) // Conditionally applies btn-active
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date to a localized string
 *
 * @param date - Date to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Generates a URL-friendly slug from a string
 *
 * @param str - String to convert
 * @returns URL-friendly slug
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
