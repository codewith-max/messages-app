'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  CALLING_SHOWCASE_SLIDE_MS,
  CALLING_SHOWCASE_STEPS,
} from '../../content/callingShowcaseSteps';

const TICK_MS = 48;

function PauseIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5 translate-x-px" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function CallingFeaturesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = CALLING_SHOWCASE_STEPS.length;

  const goToStep = useCallback((index) => {
    setActiveIndex(((index % len) + len) % len);
    setProgress(0);
  }, [len]);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + TICK_MS / CALLING_SHOWCASE_SLIDE_MS;
        if (next >= 1) {
          setActiveIndex((i) => (i + 1) % len);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [paused, activeIndex, len]);

  const active = CALLING_SHOWCASE_STEPS[activeIndex];

  return (
    <section
      className="border-y border-[#cfe5dc] bg-[#E7F3EF] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-label="WhatsApp calling features"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="min-w-0">
          {CALLING_SHOWCASE_STEPS.map((step, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={step.id} className="border-b border-[#b8d4c9]/90 last:border-b-0">
                {isOpen ? (
                  <div className="py-5 pr-1 sm:pr-2">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-[24px] font-bold leading-[1.15] text-[#111b21] sm:text-[28px] md:text-[30px]">
                        {step.title}
                      </h2>
                      <button
                        type="button"
                        onClick={() => setPaused((p) => !p)}
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111b21]/15 bg-white text-[#111b21] shadow-sm transition-colors hover:bg-[#f3faf7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7F3EF]"
                        aria-pressed={paused}
                        aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
                      >
                        {paused ? <PlayIcon /> : <PauseIcon />}
                      </button>
                    </div>
                    <p className="mt-4 max-w-[480px] text-[16px] leading-[1.55] text-[#111b21]/85 md:text-[17px]">
                      {step.description}
                    </p>
                    <Link
                      href="#download"
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#111b21] underline decoration-[#25D366] decoration-2 underline-offset-[5px] transition-colors hover:text-[#25D366]"
                    >
                      Download
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </Link>
                    <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-[#111b21]/10">
                      <div
                        className="h-full rounded-full bg-[#25D366] transition-[width] duration-75 ease-linear"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => goToStep(i)}
                    className="w-full py-5 text-left transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7F3EF] rounded-sm"
                  >
                    <span className="block text-[22px] font-bold leading-tight text-[#111b21] sm:text-[24px] md:text-[26px]">
                      {step.title}
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#1a2329] shadow-[0_28px_60px_-24px_rgba(17,27,33,0.45)] ring-1 ring-black/10 sm:rounded-[24px] md:aspect-[16/11]">
            <Image
              key={active.id}
              src={active.imageSrc}
              alt={active.imageAlt}
              fill
              sizes="(max-width: 1024px) min(100vw - 2rem, 560px), 640px"
              className="object-cover object-center"
              priority={activeIndex === 0}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
