import { useEffect } from 'react';

/**
 * Observes every `.reveal` element on the page and adds `.in` when it scrolls
 * into view. Re-scans whenever `key` changes (e.g. the route pathname), so
 * freshly mounted pages animate correctly. Respects reduced-motion.
 */
export function useScrollReveal(key) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    if (!els.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    // run on next frame so layout is settled after route render
    const raf = requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [key]);
}
