'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  GROUPS_DISCOVER_AUTOPLAY_MS,
  GROUPS_DISCOVER_AUTOPLAY_STEPS,
} from '../../content/groupsPageContent';

function PauseIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function PlayIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={`${className} translate-x-px`} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function GroupsDiscoverAutoplaySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const steps = GROUPS_DISCOVER_AUTOPLAY_STEPS;
  const len = steps.length;
  const active = steps[activeIndex];
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  useEffect(() => {
    if (paused) {
      lastTsRef.current = 0;
      return undefined;
    }
    const tick = (now) => {
      if (lastTsRef.current === 0) {
        lastTsRef.current = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const delta = Math.min(now - lastTsRef.current, 120);
      lastTsRef.current = now;
      setProgress((p) => {
        const next = p + delta / GROUPS_DISCOVER_AUTOPLAY_MS;
        if (next >= 1) {
          setActiveIndex((i) => (i + 1) % len);
          return 0;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [paused, activeIndex, len]);

  const goToSlide = (i, { pauseAfter = false } = {}) => {
    const idx = ((i % len) + len) % len;
    setActiveIndex(idx);
    setProgress(0);
    if (pauseAfter) setPaused(true);
    else setPaused(false);
  };

  const stepBy = (dir) => {
    goToSlide(activeIndex + dir);
  };

  const togglePause = () => setPaused((p) => !p);

  return (
    <section
      className="bg-[#ffffff] px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      aria-labelledby="groups-discover-autoplay-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14 xl:gap-16">
          <div className="flex min-w-0 flex-1 flex-col lg:max-w-[min(100%,480px)] lg:sticky lg:top-24 lg:shrink-0">
            <h2
              id="groups-discover-autoplay-heading"
              className="text-[34px] font-semibold leading-[1.1] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px] lg:text-[46px]"
            >
              Discover more features
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
              Learn more about what you can do on WhatsApp.
            </p>

            <div className="relative mt-8 aspect-[3/4] w-full max-w-md overflow-hidden rounded-[1.75rem] bg-[#eef2f4] shadow-[0_24px_56px_-28px_rgba(11,34,42,0.35)] ring-1 ring-black/[0.06] sm:aspect-[4/5] lg:mt-10">
              <Image
                key={active.id}
                src={active.imageSrc}
                alt={active.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority={activeIndex === 0}
              />
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => stepBy(-1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#ffffff] text-wa-bg shadow-sm transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                aria-label="Previous feature"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => stepBy(1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#ffffff] text-wa-bg shadow-sm transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                aria-label="Next feature"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="min-w-0 flex-1 lg:max-w-none lg:pt-2">
            {steps.map((step, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={step.id} className="border-b border-wa-muted/15 last:border-b-0">
                  {isOpen ? (
                    <div className="py-6 pr-1 sm:pr-2">
                      <div className="mb-4 h-[3px] w-full overflow-hidden rounded-full bg-wa-bg/10">
                        <div
                          className="h-full rounded-full bg-wa-bg"
                          style={{ width: `${Math.min(1, Math.max(0, progress)) * 100}%` }}
                        />
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[22px] font-bold leading-[1.15] text-wa-bg sm:text-[26px] md:text-[28px]">
                          {step.title}
                        </h3>
                        <button
                          type="button"
                          onClick={togglePause}
                          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wa-bg/12 bg-white text-wa-bg shadow-sm transition-colors hover:bg-[#f4f6f8] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                          aria-pressed={paused}
                          aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
                        >
                          {paused ? <PlayIcon /> : <PauseIcon />}
                        </button>
                      </div>
                      <p className="mt-4 max-w-[520px] text-[15px] leading-[1.55] text-wa-bg/85 md:text-[16px]">
                        {step.description}
                      </p>
                      <Link
                        href={step.href}
                        className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-wa-muted transition hover:text-wa-muted"
                      >
                        Learn more
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-3 py-5">
                      <button
                        type="button"
                        onClick={() => goToSlide(i)}
                        className="min-w-0 flex-1 rounded-sm text-left transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                      >
                        <span className="block text-[20px] font-bold leading-tight text-wa-bg sm:text-[22px] md:text-[24px]">
                          {step.title}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => goToSlide(i, { pauseAfter: true })}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wa-bg/10 bg-white/90 text-wa-bg/70 shadow-sm transition-colors hover:bg-white hover:text-wa-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                        aria-label={`Open “${step.title}” and pause autoplay`}
                      >
                        <PauseIcon className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
