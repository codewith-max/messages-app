'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { CALLING_DEVICE_SLIDES } from '../../content/callingPageSections';

export default function CallingKeepTalkingSection() {
  const slides = CALLING_DEVICE_SLIDES;
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
      className="border-b border-wa-muted/15 bg-[#ffffff] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="keep-talking-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
        <div>
          <h2
            id="keep-talking-heading"
            className="text-[34px] font-semibold leading-[1.12] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px] lg:text-[48px]"
          >
            Keep the conversation going
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.55] text-wa-bg/88 md:text-[18px]">
            Stay connected anytime, anywhere on your preferred device by downloading our apps. Calling is available on
            iOS, Android, Mac, iPad and Windows devices.
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

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-wa-bg bg-transparent text-wa-bg transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
              aria-label="Previous devices"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-wa-bg bg-transparent text-wa-bg transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
              aria-label="Next devices"
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
            aria-label="Device features"
          >
            {slides.map((slide, i) => (
              <article key={slide.id} className="w-[min(100%,340px)] shrink-0 snap-center sm:w-[min(100%,360px)]">
                <div className="overflow-hidden rounded-2xl bg-wa-bg shadow-[0_20px_50px_-20px_rgba(11,34,42,0.35)] ring-1 ring-black/5">
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
                    <h3 className="text-lg font-bold leading-snug text-wa-bg sm:text-xl">{slide.cardTitle}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-wa-bg/85">{slide.cardDescription}</p>
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
