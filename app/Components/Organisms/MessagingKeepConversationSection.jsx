'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useShowcaseCarousel } from '../../hooks/useShowcaseCarousel';
import {
  MESSAGING_KEEP_CONVERSATION_CARDS,
  MESSAGING_KEEP_CONVERSATION_MS,
} from '../../content/messagingKeepConversationSteps';

export default function MessagingKeepConversationSection() {
  const cards = MESSAGING_KEEP_CONVERSATION_CARDS;
  const len = cards.length;
  const { activeIndex, goToStep } = useShowcaseCarousel(len, MESSAGING_KEEP_CONVERSATION_MS);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const el = scroller?.children?.[activeIndex];
    if (!scroller || !el) return;

    // Keep carousel movement horizontal-only to avoid page jump on autoplay.
    const targetLeft = el.offsetLeft - (scroller.clientWidth - el.clientWidth) / 2;
    const maxLeft = scroller.scrollWidth - scroller.clientWidth;
    const clampedLeft = Math.max(0, Math.min(targetLeft, maxLeft));

    scroller.scrollTo({ left: clampedLeft, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <section
      className="border-b border-wa-muted/15 bg-[#ffffff] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="messaging-keep-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
        <div>
          <h2
            id="messaging-keep-heading"
            className="text-[34px] font-semibold leading-[1.12] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px] lg:text-[48px]"
          >
            Keep the conversation going
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.55] text-wa-bg/88 md:text-[18px]">
            Stay connected anytime, anywhere on your preferred device by downloading our apps. Calling and messaging are
            available on iOS, Android, Mac, iPad and Windows devices.
          </p>
          <Link
            href="#download"
            className="mt-8 inline-flex items-center rounded-full bg-wa-bg px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-wa-muted focus:outline-none focus:ring-2 focus:ring-wa-muted focus:ring-offset-2 focus:ring-offset-white"
          >
            Download
            <svg className="ms-2 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => goToStep(activeIndex - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-wa-bg bg-transparent text-wa-bg transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goToStep(activeIndex + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-wa-bg bg-transparent text-wa-bg transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-live="polite"
            aria-label="Device FAQ cards"
          >
            {cards.map((c, i) => (
              <article
                key={c.id}
                className="w-[min(100%,340px)] shrink-0 snap-center sm:w-[min(100%,360px)]"
              >
                <div className="overflow-hidden rounded-2xl bg-wa-bg shadow-[0_20px_50px_-20px_rgba(11,34,42,0.35)] ring-1 ring-black/5">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={c.imageSrc}
                      alt={c.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="360px"
                      priority={i === 0}
                    />
                  </div>
                  <div className="rounded-b-2xl bg-white px-5 py-5 sm:px-6 sm:py-6">
                    <h3 className="text-lg font-bold leading-snug text-wa-bg sm:text-xl">{c.cardTitle}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-wa-bg/85">{c.cardDescription}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
