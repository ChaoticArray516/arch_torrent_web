import { useState, useEffect } from 'react';

/**
 * ProjectFilter Component
 * Interactive filter for project categories using React.
 *
 * Features:
 * - Client-side filtering of projects without page reload
 * - Persists filter state in component state
 * - Manipulates DOM directly to show/hide project cards
 * - Accessible with proper ARIA attributes
 *
 * This is an "Island" component - it hydrates on the client
 * while the surrounding page remains static HTML.
 */

interface Props {
  /** Array of category strings including 'all' */
  categories: string[];
}

export default function ProjectFilter({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const grid = document.getElementById('project-grid');
    const noProjects = document.getElementById('no-projects');
    if (!grid) return;

    // Get all project items using data-category selector as per manual spec
    let visibleCount = 0;
    grid.querySelectorAll<HTMLElement>('[data-category]').forEach((el) => {
      const shouldShow = activeCategory === 'all' || el.dataset.category === activeCategory;
      el.style.display = shouldShow ? 'block' : 'none';
      if (shouldShow) visibleCount++;
    });

    // Show/hide empty state message
    if (noProjects) {
      noProjects.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }, [activeCategory]);

  // Format category for display (capitalize first letter)
  const formatCategory = (cat: string): string => {
    if (cat === 'all') return 'All';
    if (cat === 'open-source') return 'Open Source';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div
      role="tablist"
      aria-label="Project category filter"
      className="flex flex-wrap justify-center gap-2"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          role="tab"
          aria-selected={activeCategory === cat}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {formatCategory(cat)}
        </button>
      ))}
    </div>
  );
}
