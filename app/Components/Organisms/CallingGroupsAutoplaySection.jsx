'use client';

import AutoplayProgressBar from '../Atoms/AutoplayProgressBar';
import PhoneGroupCallMockup from '../Molecules/PhoneGroupCallMockup';
import PhoneChromeFrame from '../Molecules/PhoneChromeFrame';
import { PauseIcon, PlayIcon } from '../Atoms/PlayPauseIcons';
import { useAutoplayProgressRaf } from '../../hooks/useAutoplayProgressRaf';
import {
  CALLING_GROUPS_AUTOPLAY_MS,
  CALLING_GROUPS_AUTOPLAY_STEPS,
} from '../../content/callingGroupsAutoplaySteps';

function MockupSunflowerChat() {
  return (
    <PhoneChromeFrame>
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-black/[0.06] bg-[#eef2f4] px-2 py-2">
        <span className="text-[#54656f]">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1 text-center">
          <p className="truncate text-[12px] font-semibold text-wa-bg">Sunflower Parents</p>
        </div>
        <span className="text-[#54656f]">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[44px] overflow-y-auto px-2 pb-16 pt-3">
        <div className="mb-3 flex justify-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full bg-wa-muted shadow-md ring-2 ring-white">
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-2 flex justify-end">
          <div className="max-w-[88%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1.5 shadow-sm">
            <p className="text-[11px] text-wa-bg">Sounds good — see you at pickup!</p>
            <p className="mt-0.5 text-right text-[9px] text-[#667781]">10:02</p>
          </div>
        </div>
        <div className="mb-2 flex justify-start">
          <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2 py-2 shadow-sm ring-1 ring-black/[0.04]">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-32 items-center gap-0.5 rounded-full bg-[#d1f4e0] px-2">
                <span className="h-1 w-1 rounded-full bg-wa-bg" />
                <span className="h-2 w-0.5 rounded-full bg-wa-bg" />
                <span className="h-3 w-0.5 rounded-full bg-wa-bg" />
                <span className="h-2 w-0.5 rounded-full bg-wa-bg" />
                <span className="h-1 w-1 rounded-full bg-wa-bg" />
              </div>
              <span className="text-[10px] text-[#667781]">0:14</span>
            </div>
            <p className="mt-1 text-right text-[9px] text-[#667781]">10:05</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 border-t border-black/[0.06] bg-[#eef2f4] px-2 py-2">
        <div className="flex h-8 flex-1 items-center rounded-full bg-white px-2 text-[10px] text-[#8696a0]">Message</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wa-bg text-white">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </PhoneChromeFrame>
  );
}

function MockupPlanUpdates() {
  return (
    <PhoneChromeFrame>
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-center border-b border-black/[0.06] bg-[#eef2f4] px-2 py-2">
        <p className="text-[12px] font-semibold text-wa-bg">Field trip updates</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[40px] space-y-2 overflow-y-auto px-2 pb-4 pt-3">
        <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.05]">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-wa-muted">Event</p>
          <p className="mt-1 text-[13px] font-semibold text-wa-bg">Museum visit · Saturday</p>
          <p className="mt-1 text-[11px] leading-snug text-[#667781]">9:30 AM · Please reply with lunch preference.</p>
          <div className="mt-2 flex gap-2">
            <span className="rounded-full bg-[#e7fce3] px-2 py-0.5 text-[10px] font-medium text-wa-bg">Going</span>
            <span className="rounded-full bg-[#eef2f4] px-2 py-0.5 text-[10px] text-[#667781]">Maybe</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1.5">
            <p className="text-[11px] text-wa-bg">We&apos;re in — thanks for organizing!</p>
          </div>
        </div>
      </div>
    </PhoneChromeFrame>
  );
}

function MockupSharedInterests() {
  return (
    <PhoneChromeFrame>
      <div className="absolute inset-x-0 top-0 z-10 border-b border-black/[0.06] bg-[#eef2f4] px-2 py-2 text-center">
        <p className="text-[12px] font-semibold text-wa-bg">Weekend Runners</p>
        <p className="text-[10px] text-[#667781]">128 members</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[48px] px-2 pb-4 pt-3">
        <div className="mb-3 grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="aspect-square rounded-md bg-gradient-to-br from-wa-muted/30 to-wa-bg/40" />
          ))}
        </div>
        <div className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-black/[0.05]">
          <p className="text-[11px] font-medium text-wa-bg">New: 5K route by the river</p>
          <p className="mt-1 text-[10px] text-[#667781]">Tap to see the map and pace groups.</p>
        </div>
      </div>
    </PhoneChromeFrame>
  );
}

function ActiveSlideMockup({ mockupKey }) {
  switch (mockupKey) {
    case 'sunflower-chat':
      return <MockupSunflowerChat />;
    case 'plan-updates':
      return <MockupPlanUpdates />;
    case 'shared-interests':
      return <MockupSharedInterests />;
    case 'group-call':
      return <PhoneGroupCallMockup />;
    default:
      return <MockupSunflowerChat />;
  }
}

export default function CallingGroupsAutoplaySection() {
  const len = CALLING_GROUPS_AUTOPLAY_STEPS.length;
  const { activeIndex, progress, paused, goToSlide, togglePaused } = useAutoplayProgressRaf(
    len,
    CALLING_GROUPS_AUTOPLAY_MS,
  );
  const active = CALLING_GROUPS_AUTOPLAY_STEPS[activeIndex];

  return (
    <section
      className="border-y border-wa-muted/15 bg-[#ffffff] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-label="Group messaging highlights"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative order-2 min-w-0 lg:order-1 lg:sticky lg:top-24">
          <div key={active.id}>
            <ActiveSlideMockup mockupKey={active.mockup} />
          </div>
          <p className="mt-4 text-center text-[11px] text-[#667781] lg:text-start">
            * Data charges may apply. Contact your provider for details.
          </p>
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          {CALLING_GROUPS_AUTOPLAY_STEPS.map((step, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={step.id} className="border-b border-wa-muted/15 last:border-b-0">
                {isOpen ? (
                  <div className="py-5 pr-1 sm:pr-2">
                    <AutoplayProgressBar progress={progress} paused={paused} />
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-[22px] font-bold leading-[1.15] text-wa-bg sm:text-[26px] md:text-[28px]">
                        {step.title}
                      </h2>
                      <button
                        type="button"
                        onClick={togglePaused}
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wa-bg/12 bg-white text-wa-bg shadow-sm transition-colors hover:bg-[#f4f6f8] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                        aria-pressed={paused}
                        aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
                      >
                        {paused ? <PlayIcon /> : <PauseIcon />}
                      </button>
                    </div>
                    <p className="mt-4 max-w-[480px] text-[15px] leading-[1.55] text-wa-bg/85 md:text-[16px]">
                      {step.description}
                    </p>
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
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wa-bg/10 bg-white/80 text-wa-bg/70 shadow-sm transition-colors hover:bg-white hover:text-wa-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
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
