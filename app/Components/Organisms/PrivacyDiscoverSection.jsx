'use client';

import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { discoverCards, discoverIntro } from '../../content/privacyPageContent';

export default function PrivacyDiscoverSection() {
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? 280 : -280, behavior: 'smooth' });
  }, []);

  return (
    <section
      className="border-t border-white/[0.06] bg-wa-bg px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28"
      aria-labelledby="discover-features-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-xl">
          <h2 id="discover-features-heading" className="text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[44px] md:text-[52px]">
            <span className="block text-white">{discoverIntro.lines[0].text}</span>
            <span className="mt-1 block text-wa-muted">{discoverIntro.lines[1].text}</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/88 md:text-[18px]">{discoverIntro.body}</p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => scrollByDir('prev')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByDir('next')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted"
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="More features"
          tabIndex={0}
        >
          {discoverCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative w-[min(100%,280px)] shrink-0 overflow-hidden rounded-[1.35rem] ring-1 ring-white/10 transition hover:ring-wa-muted/50 sm:w-[300px]"
            >
              <div className={`aspect-[4/5] w-full ${card.visualClass}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[22px] font-semibold text-white">{card.title}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-[14px] font-medium text-white/90">
                  {card.subtitle}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
