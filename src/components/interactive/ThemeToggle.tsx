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
  // Initialize state from localStorage using globalThis for safer access
  const [theme, setTheme] = useState(globalThis.localStorage?.getItem('theme') ?? 'dark');

  // Toggle between light and dark
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Apply theme changes and persist to localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-lg" aria-hidden="true">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
