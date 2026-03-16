import { useStore } from '@nanostores/react';
import { selectedCategory } from '../../lib/store';

/**
 * ProjectFilter Component - Cosmic Ocean Theme
 * Interactive "Deep Space Scanner" for project categories.
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
    if (cat === 'all') return 'All';
    if (cat === 'open-source') return 'Open Source';
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
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biolume-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-deep
            ${
              $category === cat
                ? 'bg-biolume-cyan text-ocean-deep shadow-[0_0_15px_rgba(51,187,197,0.4)]'
                : 'bg-ocean-abyss/50 text-star-dim border border-star-light/20 hover:border-biolume-cyan/50 hover:text-star-light backdrop-blur-sm'
            }
          `}
        >
          {formatCategory(cat)}
        </button>
      ))}
    </div>
  );
}
