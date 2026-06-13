'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useLenis } from 'lenis/react';

/**
 * Handles two behaviors on every route change:
 * 1. Scrolls to top if there is no hash in the URL.
 * 2. If there IS a hash (e.g., /#about, /#contact), smoothly scrolls to that section.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Need to wait for DOM and lenis to be ready
    const timeout = setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        // Scroll to the target section
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      } else {
        // No hash — go to top instantly
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, lenis]);

  return null;
}
