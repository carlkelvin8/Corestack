'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Handles hash-based scroll navigation after route changes.
 * When a user navigates to /#about from another page,
 * this hook waits for the page to render then smoothly scrolls to the target section.
 */
export function useHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');

    // Delay slightly to ensure the DOM is ready after route change
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);
}
