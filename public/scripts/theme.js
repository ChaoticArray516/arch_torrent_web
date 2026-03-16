/**
 * Theme Initialization Script (v2.0)
 *
 * This script runs before any CSS to prevent flash of wrong theme (FOWT).
 * It reads the saved theme preference or system preference and applies
 * the appropriate class to the document element before rendering.
 *
 * Key points:
 * - Runs immediately (IIFE) - no waiting for DOMContentLoaded
 * - Checks localStorage for saved preference
 * - Falls back to system preference (prefers-color-scheme)
 * - Applies dark/light class to <html> element
 * - Does NOT write to localStorage (handled by client component to avoid SSR/SSG inconsistency)
 *
 * Usage: Include as inline script in <head> for best performance:
 * <script is:inline src="/scripts/theme.js"></script>
 */

(function() {
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  // Note: localStorage is not written here to avoid SSR/SSG inconsistency
  // The client-side ThemeToggle component handles persistence
})();
