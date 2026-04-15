'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GROUPS_MANAGE_AUTOPLAY_MS, GROUPS_MANAGE_STEPS } from '../../content/groupsPageContent';

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

function StepIcon({ name, className = 'h-6 w-6' }) {
  const common = 'shrink-0 text-[#111b21]';
  switch (name) {
    case 'lock':
      return (
        <svg className={`${common} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case 'device':
      return (
        <svg className={`${common} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case 'smile':
      return (
        <svg className={`${common} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case 'community':
      return (
        <svg className={`${common} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function GroupsManageAutoplaySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = GROUPS_MANAGE_STEPS.length;
  const active = GROUPS_MANAGE_STEPS[activeIndex];
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
    const step = (now) => {
      if (lastTsRef.current === 0) {
        lastTsRef.current = now;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const raw = now - lastTsRef.current;
      const delta = Math.min(raw, 120);
      lastTsRef.current = now;
      setProgress((p) => {
        const next = p + delta / GROUPS_MANAGE_AUTOPLAY_MS;
        if (next >= 1) {
          setActiveIndex((i) => (i + 1) % len);
          return 0;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [paused, activeIndex, len]);

  const goToSlide = (i, { pauseAfter = false } = {}) => {
    setActiveIndex(i);
    setProgress(0);
    if (pauseAfter) setPaused(true);
    else setPaused(false);
  };

  const toggleGlobalPause = () => setPaused((p) => !p);

  return (
    <section
      className="border-y border-[#e8e4dc] bg-[#FBF9F4] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="groups-manage-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <h2
            id="groups-manage-heading"
            className="text-[34px] font-semibold leading-[1.1] tracking-tight text-[#111b21] sm:text-[40px] md:text-[44px] lg:text-[46px]"
          >
            Manage your groups
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#111b21]/85">
            Tools and settings to keep your conversations organized, safe, and fun for everyone.
          </p>
          <div className="relative mt-8 aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[1.5rem] bg-[#e5e5e5] shadow-[0_20px_50px_-24px_rgba(17,27,33,0.35)] ring-1 ring-black/[0.06] lg:mt-10">
            <Image
              key={active.id}
              src={active.imageSrc}
              alt={active.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority={activeIndex === 0}
            />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          {GROUPS_MANAGE_STEPS.map((step, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={step.id} className="border-b border-[#e0dcd4] last:border-b-0">
                {isOpen ? (
                  <div className="py-6 pr-1 sm:pr-2">
                    <div className="mb-4 h-[3px] w-full overflow-hidden rounded-full bg-[#111b21]/10">
                      <div
                        className="h-full rounded-full bg-[#25D366]"
                        style={{ width: `${Math.min(1, Math.max(0, progress)) * 100}%` }}
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 gap-3">
                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/[0.06]">
                          <StepIcon name={step.icon} />
                        </span>
                        <h3 className="text-[22px] font-bold leading-[1.2] text-[#111b21] sm:text-[24px] md:text-[26px]">
                          {step.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={toggleGlobalPause}
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111b21]/12 bg-white text-[#111b21] shadow-sm transition-colors hover:bg-[#f5f2eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F4]"
                        aria-pressed={paused}
                        aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
                      >
                        {paused ? <PlayIcon /> : <PauseIcon />}
                      </button>
                    </div>
                    <p className="mt-4 max-w-[560px] pl-[52px] text-[15px] leading-[1.55] text-[#111b21]/85 md:text-[16px]">
                      {step.description}
                    </p>
                    <div className="mt-5 pl-[52px]">
                      <Link
                        href={step.learnMoreHref}
                        className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#111b21] underline decoration-[#25D366] decoration-2 underline-offset-[5px] transition hover:text-[#25D366]"
                      >
                        Learn more
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3 py-5">
                    <button
                      type="button"
                      onClick={() => goToSlide(i)}
                      className="flex min-w-0 flex-1 items-start gap-3 rounded-sm text-left transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F4]"
                    >
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/[0.05]">
                        <StepIcon name={step.icon} className="h-5 w-5" />
                      </span>
                      <span className="pt-1.5 text-[18px] font-bold leading-snug text-[#111b21] sm:text-[20px] md:text-[22px]">
                        {step.title}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => goToSlide(i, { pauseAfter: true })}
                      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111b21]/10 bg-white/80 text-[#111b21]/70 shadow-sm transition-colors hover:bg-white hover:text-[#111b21] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F4]"
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
