'use client';

import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { alreadyDownloadedCards, alreadyDownloadedIntro } from '../../content/appsPageContent';

export default function AppsAlreadyDownloadedSection() {
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? 300 : -300, behavior: 'smooth' });
  }, []);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="already-downloaded-heading">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 xl:gap-16">
          <div className="max-w-md shrink-0 lg:pt-2">
            <h2 id="already-downloaded-heading" className="text-[32px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[38px] lg:text-[42px]">
              {alreadyDownloadedIntro.title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#3b4a54] sm:text-[17px]">{alreadyDownloadedIntro.subtitle}</p>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => scrollByDir('prev')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#111b21]/25 text-[#111b21] transition hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Previous feature cards"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir('next')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#111b21]/25 text-[#111b21] transition hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Next feature cards"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex min-w-0 flex-1 gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-label="WhatsApp features"
            tabIndex={0}
          >
            {alreadyDownloadedCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group w-[min(100%,280px)] shrink-0 overflow-hidden rounded-[1.35rem] ring-1 ring-black/[0.06] transition hover:ring-[#25D366]/40 sm:w-[280px]"
              >
                <div className={`aspect-[4/5] w-full ${card.visualClass}`} />
                <div className="bg-white px-5 pb-5 pt-4">
                  <h3 className="text-[20px] font-bold text-[#111b21]">{card.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-[#25D366]">
                    Learn more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
