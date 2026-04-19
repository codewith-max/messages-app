'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const FRAME_MS_FALLBACK = 16;

export function useAutoplayProgressRaf(length, slideMs) {
  const total = Math.max(0, length || 0);
  const safeSlideMs = Math.max(1, slideMs || 1);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const rafRef = useRef(null);
  const prevTimeRef = useRef(0);

  useEffect(() => {
    if (total < 1) {
      setActiveIndex(0);
      setProgress(0);
      return;
    }

    setActiveIndex((prev) => (prev >= total ? 0 : prev));
  }, [total]);

  const goToSlide = useCallback(
    (index, options = {}) => {
      if (total < 1) return;
      const normalized = ((index % total) + total) % total;
      setActiveIndex(normalized);
      setProgress(0);
      if (options.pauseAfter) setPaused(true);
    },
    [total],
  );

  const togglePaused = useCallback(() => {
    setPaused((prev) => !prev);
  }, []);

  useEffect(() => {
    if (total < 1 || paused) return undefined;

    const tick = (time) => {
      const prev = prevTimeRef.current || time;
      const elapsed = Math.max(FRAME_MS_FALLBACK, time - prev);
      prevTimeRef.current = time;

      setProgress((prevProgress) => {
        const next = prevProgress + elapsed / safeSlideMs;
        if (next >= 1) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % total);
          return 0;
        }
        return next;
      });

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
      prevTimeRef.current = 0;
    };
  }, [paused, safeSlideMs, total, activeIndex]);

  return {
    activeIndex,
    progress,
    paused,
    goToSlide,
    togglePaused,
  };
}
