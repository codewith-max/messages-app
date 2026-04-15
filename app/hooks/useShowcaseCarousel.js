'use client';

import { useCallback, useEffect, useState } from 'react';

const TICK_MS = 48;

/** Autoplay + progress for accordion-style feature showcases */
export function useShowcaseCarousel(len, slideMs) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const goToStep = useCallback(
    (index) => {
      setActiveIndex(((index % len) + len) % len);
      setProgress(0);
    },
    [len],
  );

  useEffect(() => {
    if (paused || len < 1) return undefined;
    const id = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + TICK_MS / slideMs;
        if (next >= 1) {
          setActiveIndex((i) => (i + 1) % len);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [paused, activeIndex, len, slideMs]);

  return { activeIndex, progress, paused, setPaused, goToStep };
}
