'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  CALLING_SHOWCASE_SLIDE_MS,
  CALLING_SHOWCASE_STEPS,
} from '../../content/callingShowcaseSteps';

const TICK_MS = 48;

export default function CallingFeaturesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const len = CALLING_SHOWCASE_STEPS.length;

  useEffect(() => {
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
  }, [activeIndex, len]);

  const active = CALLING_SHOWCASE_STEPS[activeIndex];

  return (
    <section
      className="border-y border-[#cfe5dc] bg-[#d9fdd3] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
      aria-label="WhatsApp calling features"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-16">
        <div className="min-w-0 lg:pt-2">
          {CALLING_SHOWCASE_STEPS.map((step, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={step.id} className="border-t border-[#98b19f] last:border-b">
                {isOpen ? (
                  <div className="relative py-4 sm:py-5">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-[24px] font-normal leading-[1.2] text-wa-bg sm:text-[30px] md:text-[36px]">
                        {step.title}
                      </h2>
                      <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-wa-bg">
                        <span className="h-1.5 w-1.5 rounded-full bg-wa-bg" />
                      </span>
                    </div>
                    <p className="mt-3 max-w-[520px] pr-3 text-[18px] leading-[1.35] text-[#1f2c2a]/90 sm:text-[22px] md:text-[28px]">
                      {step.description}
                    </p>
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-[2px] bg-wa-bg transition-[width] duration-75 ease-linear"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(i);
                      setProgress(0);
                    }}
                    className="w-full py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#d9fdd3] sm:py-5"
                  >
                    <span className="block text-[24px] font-normal leading-[1.2] text-wa-bg sm:text-[30px] md:text-[36px]">
                      {step.title}
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto w-full max-w-[620px] lg:sticky lg:top-24 lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[20px] sm:rounded-[24px]">
            <Image
              key={active.id}
              src={active.imageSrc}
              alt={active.imageAlt}
              fill
              sizes="(max-width: 1024px) min(100vw - 2rem, 620px), 640px"
              className="object-contain object-center"
              priority={activeIndex === 0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
