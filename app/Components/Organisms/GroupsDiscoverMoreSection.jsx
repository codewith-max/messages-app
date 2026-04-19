'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { GROUPS_DISCOVER_CARDS } from '../../content/groupsPageContent';

export default function GroupsDiscoverMoreSection() {
  const scrollerRef = useRef(null);
  const cards = GROUPS_DISCOVER_CARDS;

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
      className="bg-[#ffffff] px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      aria-labelledby="groups-discover-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14 xl:gap-16">
          <div className="flex shrink-0 flex-col justify-between lg:w-[34%] xl:w-[32%]">
            <div>
              <h2
                id="groups-discover-heading"
                className="text-[34px] font-semibold leading-[1.1] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px] lg:text-[46px]"
              >
                Discover more features
              </h2>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
                Learn more about what you can do on WhatsApp — from private chats to calls and Communities.
              </p>
            </div>
            <div className="mt-8 flex gap-3 lg:mt-10">
              <button
                type="button"
                onClick={() => scrollByDir(-1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#ffffff] text-wa-bg shadow-sm transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                aria-label="Scroll features left"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir(1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#ffffff] text-wa-bg shadow-sm transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                aria-label="Scroll features right"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="min-w-0 flex-1 lg:pt-1">
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card) => (
                <article
                  key={card.id}
                  className="flex w-[min(88vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] sm:w-[min(85vw,24rem)]"
                >
                  <div className="relative aspect-[4/5] w-full bg-wa-bg/5 sm:aspect-[3/4]">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 88vw, 384px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-xl font-semibold leading-snug text-wa-bg">{card.title}</h3>
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-wa-muted transition hover:text-wa-muted"
                    >
                      Learn more
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
