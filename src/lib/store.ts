/**
 * Nano Stores - Global State Management
 *
 * Engineering Note:
 * Nano Stores provides lightweight cross-island state management.
 * Like "quantum entanglement", it allows our React filtering component
 * and Astro static grid to share state without heavy global providers.
 *
 * selectedCategory: Tracks the current project filter selection
 */

import { atom } from 'nanostores';

/** Current selected category for project filtering */
export const selectedCategory = atom<string>('all');
