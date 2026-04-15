'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { MESSAGING_SHARE_CARDS } from '../../content/messagingShareCards';

export default function MessagingShareCardsSection() {
  const slides = MESSAGING_SHARE_CARDS;
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
      className="border-b border-[#e8e4dc] bg-[#F9F4EE] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="messaging-share-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
        <div>
          <h2
            id="messaging-share-heading"
            className="text-[34px] font-semibold leading-[1.12] tracking-tight text-[#111b21] sm:text-[40px] md:text-[44px] lg:text-[48px]"
          >
            Share more than words
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.55] text-[#111b21]/88 md:text-[18px]">
            Send high quality photos, videos and large files directly in your chats.
          </p>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#111b21] bg-transparent text-[#111b21] transition hover:bg-[#111b21] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F4EE]"
              aria-label="Previous cards"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#111b21] bg-transparent text-[#111b21] transition hover:bg-[#111b21] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F4EE]"
              aria-label="Next cards"
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
            aria-label="Media sharing features"
          >
            {slides.map((slide, i) => (
              <article key={slide.id} className="w-[min(100%,340px)] shrink-0 snap-center sm:w-[min(100%,360px)]">
                <div className="overflow-hidden rounded-2xl bg-[#25D366] shadow-[0_20px_50px_-20px_rgba(17,27,33,0.35)] ring-1 ring-black/5">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="360px"
                      priority={i === 0}
                    />
                  </div>
                  <div className="rounded-b-2xl bg-white px-5 py-5 sm:px-6 sm:py-6">
                    <h3 className="text-lg font-bold leading-snug text-[#111b21] sm:text-xl">{slide.cardTitle}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#111b21]/85">{slide.cardDescription}</p>
                    <Link
                      href="#download"
                      className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5c]"
                    >
                      Learn more
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
