'use client';

import { useCallback, useRef } from 'react';
import { downloadOptionCards, otherDownloadIntro } from '../../content/appsPageContent';
import StoreDownloadButton from '../Molecules/StoreDownloadButton';

export default function AppsOtherDownloadsSection() {
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? 340 : -340, behavior: 'smooth' });
  }, []);

  return (
    <section className="border-b border-black/[0.06] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="other-downloads-heading">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">
          <div className="max-w-md shrink-0 lg:pt-2">
            <h2 id="other-downloads-heading" className="text-[32px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[38px] lg:text-[42px]">
              {otherDownloadIntro.title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#3b4a54] sm:text-[17px]">{otherDownloadIntro.subtitle}</p>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => scrollByDir('prev')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#111b21]/25 text-[#111b21] transition hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Scroll download options left"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir('next')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#111b21]/25 text-[#111b21] transition hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Scroll download options right"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex min-w-0 flex-1 gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Download options"
          >
            {downloadOptionCards.map((card) => (
              <article
                key={card.id}
                className="w-[min(100%,320px)] shrink-0 rounded-[1.75rem] bg-white p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.05] sm:w-[300px]"
              >
                <div className="flex min-h-[1.5rem] items-center gap-2">
                  {card.tag ? (
                    <span className="rounded-md bg-[#25D366] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                      {card.tag}
                    </span>
                  ) : (
                    <span />
                  )}
                </div>
                <p className="mt-3 text-[12px] font-medium uppercase tracking-wide text-[#667781]">{card.platformLabel}</p>
                <h3 className="mt-1 text-[22px] font-bold text-[#111b21]">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#3b4a54]">{card.description}</p>
                <p className="mt-4 text-[11px] leading-snug text-[#8696a0]">{card.requirements}</p>
                <div className="mt-6">
                  <StoreDownloadButton store={card.store} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
