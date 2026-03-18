import { useStore } from '@nanostores/react';
import { selectedCategory } from '../../lib/store';

/**
 * ProjectFilter Component - Galactic Tide Theme v4.0
 * Interactive "Deep Space Scanner" for project categories.
 *
 * Starlight Commentary:
 * Filtering should feel like operating a "Deep Space Scanner" on the bridge.
 * Selected buttons emit a continuous glow like a locked signal source;
 * hover states with subtle float and color changes simulate physical
 * feedback from operating tangible controls.
 *
 * Engineering Note:
 * Uses Nano Stores like "quantum entanglement" to share state
 * across the React island and Astro static components.
 * When a category is selected, the store updates and all
 * subscribers (including ProjectGrid) respond instantly.
 */

interface Props {
  /** Array of category strings including 'all' */
  categories: string[];
}

export default function ProjectFilter({ categories }: Props) {
  const $category = useStore(selectedCategory);

  // Format category for display (capitalize first letter)
  const formatCategory = (cat: string): string => {
    if (cat === 'all') return 'All Galaxies';
    if (cat === 'open-source') return 'Open Source';
    if (cat === 'web') return 'Web';
    if (cat === 'mobile') return 'Mobile';
    if (cat === 'tool') return 'Tools';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div
      role="tablist"
      aria-label="Project category filter"
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => selectedCategory.set(cat)}
          role="tab"
          aria-selected={$category === cat}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea-surface focus-visible:ring-offset-2 focus-visible:ring-offset-space-void
            ${
              $category === cat
                ? 'bg-sea-surface text-space-void shadow-[0_0_20px_var(--color-sea-surface)]'
                : 'bg-space-ink/50 text-text-dim hover:bg-space-ink hover:text-text-bright'
            }
          `}
        >
          {formatCategory(cat)}
        </button>
      ))}
    </div>
  );
}
