import { useState, useEffect } from 'react';

/**
 * ThemeToggle Component (v2.0)
 * Interactive theme toggle button for dark/light mode switching.
 *
 * Features:
 * - Toggles between dark and light themes
 * - Persists preference to localStorage
 * - Updates document class for Tailwind dark mode
 * - Accessible with proper ARIA labels
 * - Uses emoji icons for simplicity
 *
 * This is an "Island" component - it hydrates on the client
 * while the surrounding page remains static HTML.
 */

export default function ThemeToggle() {
  // Initialize with null to avoid SSR/hydration mismatch
  const [theme, setTheme] = useState<string | null>(null);

  // Initialize from localStorage after mount (client-side only)
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    if (theme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  // Apply theme changes and persist to localStorage
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Show placeholder while hydrating to prevent layout shift
  if (!theme) {
    return (
      <button
        type="button"
        className="p-2 rounded-lg text-star-dim hover:text-star-light hover:bg-star-light/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biolume-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-deep"
        aria-label="Loading theme"
        disabled
      >
        <span className="text-lg opacity-50">☀️</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-star-dim hover:text-star-light hover:bg-star-light/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biolume-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-deep"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-lg" aria-hidden="true">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
