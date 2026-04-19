'use client';

import Image from 'next/image';
import { useCallback, useRef } from 'react';
import { STATUS_STORY_CARDS } from '../../content/statusPageContent';

export default function StatusStoryCardsSection() {
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((direction) => {
    const el = scrollerRef.current;
    if (!el?.children?.length) return;
    const card = el.children[0];
    const gap = 16;
    const delta = card.getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction * delta, behavior: 'smooth' });
  }, []);

  return (
    <section
      className="border-b border-wa-muted/10 bg-[#E8F5E9] px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20"
      aria-labelledby="status-story-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-between lg:w-[38%] xl:w-[36%]">
            <div>
              <h2
                id="status-story-heading"
                className="text-[34px] font-semibold leading-[1.1] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px]"
              >
                Share the moment with Status
              </h2>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
                Let friends and family know what&apos;s on your mind and make it your own with features that help you
                create something unique every time.
              </p>
            </div>
            <div className="mt-8 flex gap-3 lg:mt-10">
              <button
                type="button"
                onClick={() => scrollByDir(-1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#E8F5E9] text-wa-bg shadow-sm transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8F5E9]"
                aria-label="Scroll cards left"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir(1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#E8F5E9] text-wa-bg shadow-sm transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8F5E9]"
                aria-label="Scroll cards right"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {STATUS_STORY_CARDS.map((card) => (
                <article
                  key={card.id}
                  className="flex w-[min(88vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06] sm:w-[min(85vw,24rem)]"
                >
                  <div className={`relative aspect-[4/5] w-full ${card.darkTop ? 'bg-[#1a1a1a]' : ''}`}>
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className={card.darkTop ? 'object-cover opacity-95' : 'object-cover'}
                      sizes="(max-width: 640px) 88vw, 320px"
                    />
                    {card.id === 'own' ? (
                      <span className="absolute bottom-4 left-4 text-4xl drop-shadow" aria-hidden>
                        💕
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-xl font-semibold leading-snug text-wa-bg">{card.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-wa-bg/82">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
