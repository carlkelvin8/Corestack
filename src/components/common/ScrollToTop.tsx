'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

/**
 * Handles two behaviors on every route change:
 * 1. Scrolls to top if there is no pending scroll target.
 * 2. If a scroll target exists (via sessionStorage or URL hash),
 *    smoothly scrolls to that section after the page renders.
 *
 * Uses sessionStorage as the reliable cross-page scroll signal to avoid
 * conflicts between native browser hash navigation, Next.js scroll handling,
 * and Lenis smooth scroll.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);

  // Keep ref current so the timeout always reads the latest lenis instance
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useEffect(() => {
    // Read sessionStorage target immediately (set by CTASection / Navigation before navigating)
    const sessionTarget = sessionStorage.getItem('scrollTarget');
    if (sessionTarget) {
      sessionStorage.removeItem('scrollTarget'); // clear immediately so it isn't reused
    }

    // Also fall back to URL hash if no sessionStorage target
    const hashTarget = window.location.hash ? window.location.hash.replace('#', '') : null;
    const target = sessionTarget ?? hashTarget;

    const timeout = setTimeout(() => {
      const currentLenis = lenisRef.current;

      if (target) {
        const el = document.getElementById(target);
        if (el) {
          if (currentLenis) {
            currentLenis.scrollTo(el, { offset: -80 });
          } else {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      } else {
        // No target — scroll to very top
        if (currentLenis) {
          currentLenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]); // Only pathname — lenis accessed via ref

  return null;
}
