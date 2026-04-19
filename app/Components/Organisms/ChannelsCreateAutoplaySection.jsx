'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import AutoplayProgressBar from '../Atoms/AutoplayProgressBar';
import { PauseIcon, PlayIcon } from '../Atoms/PlayPauseIcons';
import { ChannelCreateAutoplayPhone } from '../Molecules/ChannelsPhoneMockups';
import PhoneChromeFrame from '../Molecules/PhoneChromeFrame';
import { CHANNELS_CREATE_STEP_MS, CHANNELS_CREATE_STEPS } from '../../content/channelsCreateSteps';

export default function ChannelsCreateAutoplaySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const resumeFromRef = useRef(0);
  const rafRef = useRef(null);

  const stepCount = CHANNELS_CREATE_STEPS.length;
  const active = CHANNELS_CREATE_STEPS[activeIndex];

  /** Advance to next slide after full progress */
  const advance = useCallback(() => {
    resumeFromRef.current = 0;
    setProgress(0);
    setActiveIndex((i) => (i + 1) % stepCount);
  }, [stepCount]);

  useEffect(() => {
    resumeFromRef.current = 0;
    setProgress(0);
  }, [activeIndex]);

  useEffect(() => {
    if (paused) {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return undefined;
    }

    const from = resumeFromRef.current;
    const start = performance.now();
    const spanMs = Math.max(120, (1 - from) * CHANNELS_CREATE_STEP_MS);

    const loop = (now) => {
      const u = Math.min(1, (now - start) / spanMs);
      const p = from + (1 - from) * u;
      setProgress(p);
      if (p < 1 - 1e-4) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        resumeFromRef.current = 0;
        setProgress(0);
        rafRef.current = null;
        advance();
      }
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [activeIndex, paused, advance]);

  function goTo(index) {
    setActiveIndex(index);
    resumeFromRef.current = 0;
    setProgress(0);
    setPaused(false);
  }

  function togglePause() {
    if (!paused) {
      resumeFromRef.current = progress;
    }
    setPaused((p) => !p);
  }

  return (
    <section
      className="border-b border-wa-muted/10 bg-[#fbf9f4] px-4 py-14 sm:px-6 md:py-20 lg:px-10"
      aria-labelledby="channels-create-heading"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[min(100%,360px)]">
            <PhoneChromeFrame>
              <div key={active?.id} className="h-full min-h-0">
                <ChannelCreateAutoplayPhone variant={active?.phoneVariant ?? 'create'} />
              </div>
            </PhoneChromeFrame>
          </div>
        </div>

        <div>
          <div className="mb-3 h-1 w-12 rounded-full bg-wa-bg" aria-hidden />

          <ul className="divide-y divide-[#d1d7db] border-t border-[#d1d7db]" role="list">
            {CHANNELS_CREATE_STEPS.map((step, index) => {
              const isActive = index === activeIndex;

              if (!isActive) {
                return (
                  <li key={step.id} className="py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => goTo(index)}
                        className="min-w-0 flex-1 text-left text-[16px] font-medium text-wa-bg transition hover:text-wa-muted md:text-[17px]"
                      >
                        {step.title}
                      </button>
                      <button
                        type="button"
                        onClick={() => goTo(index)}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wa-bg/15 bg-white text-wa-bg shadow-sm transition hover:border-wa-bg hover:text-wa-muted"
                        aria-label={`Show: ${step.title}`}
                      >
                        <PlayIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                );
              }

              return (
                <li key={step.id} className="py-4">
                  <AutoplayProgressBar progress={progress} paused={paused} />
                  <div className="flex items-start justify-between gap-3">
                    <h2 id="channels-create-heading" className="text-[28px] font-semibold leading-[1.12] tracking-tight text-wa-bg sm:text-[32px] md:text-[34px]">
                      {step.title}
                    </h2>
                    <button
                      type="button"
                      onClick={togglePause}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wa-bg/15 bg-white text-wa-bg shadow-sm transition hover:border-wa-bg hover:text-wa-muted"
                      aria-pressed={!paused}
                      aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
                    >
                      {paused ? <PlayIcon className="h-5 w-5" /> : <PauseIcon className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="mt-4 text-[17px] leading-relaxed text-wa-bg/85 md:text-[18px]">{step.description}</p>
                  <Link
                    href={step.learnMoreHref}
                    className="mt-5 inline-flex items-center gap-1.5 text-[16px] font-semibold text-wa-muted transition hover:text-wa-muted"
                  >
                    Learn more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-[13px] text-[#667781]">* Where available and subject to terms.</p>
        </div>
      </div>
    </section>
  );
}
