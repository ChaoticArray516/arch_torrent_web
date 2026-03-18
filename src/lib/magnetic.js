/**
 * Magnetic Effect Utility - Galactic Tide Theme v4.0
 * Creates a "gravitational" interaction where elements are attracted to the cursor.
 *
 * Starlight Commentary:
 * To make interactions more "physical," we add a "gravity" effect to key buttons
 * and links. When the mouse approaches, these elements smoothly move toward the
 * cursor as if pulled by gravitational force.
 *
 * @param {HTMLElement} element - The element to apply the magnetic effect to
 * @param {number} strength - The strength of the magnetic pull (default: 20)
 *                          Higher values = subtler movement, Lower values = stronger pull
 */
export function applyMagneticEffect(element, strength = 20) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    element.style.transition = 'transform 0.1s ease-out';
    element.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
    element.style.transform = 'translate(0, 0)';
  });
}

/**
 * Initialize magnetic effect on all elements with the specified class.
 *
 * @param {string} selector - CSS selector for magnetic elements (default: '.magnetic')
 * @param {number} strength - The strength of the magnetic pull (default: 30)
 */
export function initMagneticElements(selector = '.magnetic', strength = 30) {
  if (typeof document === 'undefined') return;

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    applyMagneticEffect(el, strength);
  });
}

export default applyMagneticEffect;
