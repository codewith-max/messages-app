'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { CALLING_DISCOVER_CARDS } from '../../content/callingPageSections';

export default function CallingDiscoverMoreSection() {
  const scrollerRef = useRef(null);
  const cards = CALLING_DISCOVER_CARDS;

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
      className="mx-3 mb-6 mt-2 rounded-[2rem] bg-[#E7F7EF] px-4 py-12 sm:mx-4 sm:px-6 md:py-16 lg:mx-6 lg:px-10 lg:py-20 xl:mx-8"
      aria-labelledby="calling-discover-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14 xl:gap-16">
          <div className="flex shrink-0 flex-col justify-between lg:w-[34%] xl:w-[32%]">
            <div>
              <h2
                id="calling-discover-heading"
                className="text-[34px] font-semibold leading-[1.1] tracking-tight text-[#111b21] sm:text-[40px] md:text-[44px] lg:text-[46px]"
              >
                Discover more WhatsApp features
              </h2>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-[#111b21]/88 md:text-[18px]">
                Private messaging, groups, Status, Meta AI, and more — explore everything you can do on WhatsApp.
              </p>
            </div>
            <div className="mt-8 flex gap-3 lg:mt-10">
              <button
                type="button"
                onClick={() => scrollByDir(-1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#111b21] bg-[#E7F7EF] text-[#111b21] shadow-sm transition hover:bg-[#111b21] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7F7EF]"
                aria-label="Scroll features left"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir(1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#111b21] bg-[#E7F7EF] text-[#111b21] shadow-sm transition hover:bg-[#111b21] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7F7EF]"
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
                  <div className="relative aspect-[4/3] w-full bg-[#111b21]/5">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 88vw, 384px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-xl font-semibold leading-snug text-[#111b21]">{card.title}</h3>
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5c]"
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
