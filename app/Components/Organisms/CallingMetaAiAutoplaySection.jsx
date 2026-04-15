'use client';

import Link from 'next/link';
import AutoplayProgressBar from '../Atoms/AutoplayProgressBar';
import { PauseIcon, PlayIcon } from '../Atoms/PlayPauseIcons';
import { CallingMetaAiActiveMockup } from '../Molecules/CallingMetaAiPhoneMockups';
import { useAutoplayProgressRaf } from '../../hooks/useAutoplayProgressRaf';
import {
  CALLING_META_AI_AUTOPLAY_MS,
  CALLING_META_AI_AUTOPLAY_STEPS,
} from '../../content/callingMetaAiAutoplaySteps';

const sectionRing = 'focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F4]';

export default function CallingMetaAiAutoplaySection() {
  const steps = CALLING_META_AI_AUTOPLAY_STEPS;
  const len = steps.length;
  const { activeIndex, progress, paused, goToSlide, togglePaused } = useAutoplayProgressRaf(
    len,
    CALLING_META_AI_AUTOPLAY_MS,
  );
  const active = steps[activeIndex];

  return (
    <section
      className="border-y border-[#ebe7e0] bg-[#FBF9F4] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-label="Meta AI on WhatsApp"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative order-2 min-w-0 lg:order-1 lg:sticky lg:top-24">
          <div key={active.id} className="transition-opacity duration-300">
            <CallingMetaAiActiveMockup mockupKey={active.mockup} />
          </div>
          <p className="mt-4 text-center text-[11px] text-[#667781] lg:text-start">
            Meta AI availability varies by region. Features may change over time.
          </p>
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          {steps.map((step, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={step.id} className="border-b border-[#e0dcd4] last:border-b-0">
                {isOpen ? (
                  <div className="py-5 pr-1 sm:pr-2">
                    <AutoplayProgressBar progress={progress} paused={paused} />
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-[22px] font-bold leading-[1.15] text-[#111b21] sm:text-[26px] md:text-[28px]">
                        {step.title}
                      </h2>
                      <button
                        type="button"
                        onClick={togglePaused}
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111b21]/12 bg-white text-[#111b21] shadow-sm transition-colors hover:bg-white/90 focus:outline-none ${sectionRing}`}
                        aria-pressed={paused}
                        aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
                      >
                        {paused ? <PlayIcon /> : <PauseIcon />}
                      </button>
                    </div>
                    <p className="mt-4 max-w-[480px] text-[15px] leading-[1.55] text-[#111b21]/85 md:text-[16px]">
                      {step.description}
                    </p>
                    <Link
                      href={step.learnMoreHref}
                      className={`mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-[#25D366] transition-colors hover:text-[#20bd5c] focus:outline-none ${sectionRing}`}
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
                      className={`min-w-0 flex-1 rounded-sm text-left transition-opacity hover:opacity-85 focus:outline-none ${sectionRing}`}
                    >
                      <span className="block text-[20px] font-bold leading-tight text-[#111b21] sm:text-[22px] md:text-[24px]">
                        {step.title}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => goToSlide(i, { pauseAfter: true })}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111b21]/10 bg-white/80 text-[#111b21]/70 shadow-sm transition-colors hover:bg-white hover:text-[#111b21] focus:outline-none ${sectionRing}`}
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
    </section>
  );
}
