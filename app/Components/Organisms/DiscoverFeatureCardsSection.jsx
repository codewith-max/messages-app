'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef } from 'react';

/**
 * Horizontal “Discover more features” strip with image cards and prev/next controls.
 * @param {{ id: string, title: string, href: string, imageSrc: string, imageAlt: string }[]} cards
 */
export default function DiscoverFeatureCardsSection({
  ariaLabelledBy,
  title,
  subtitle,
  cards,
  sectionClassName,
  navSurfaceClass,
  navHoverClass,
  navRingOffsetClass,
  /** When `"cardOnBeige"`, content sits in a white panel with large rounded corners on a beige section background (WhatsApp marketing pages). */
  layoutVariant = 'default',
  /** `"dark"` — white headings / nav (for charcoal backgrounds). */
  tone = 'light',
  /** Image area aspect ratio — portrait cards often use `aspect-[4/5]`. */
  imageAspectClassName = 'aspect-[4/3]',
  /** Extra classes for each carousel card shell (width, radius). */
  carouselCardClassName = 'rounded-[26px] w-[min(88vw,22rem)] sm:w-[min(85vw,24rem)]',
  /** Prev/next round buttons under the heading (swipe / horizontal scroll still works when false). */
  showCarouselNav = true,
}) {
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((direction) => {
    const el = scrollerRef.current;
    if (!el?.children?.length) return;
    const card = el.children[0];
    const gap = 16;
    const delta = card.getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction * delta, behavior: 'smooth' });
  }, []);

  const isDark = tone === 'dark';
  const titleCls = isDark
    ? 'text-[34px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[40px] md:text-[44px] lg:text-[46px]'
    : 'text-[34px] font-semibold leading-[1.1] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px] lg:text-[46px]';
  const subtitleCls = isDark
    ? 'mt-5 max-w-lg text-[17px] leading-relaxed text-white/[0.88] md:text-[18px]'
    : 'mt-5 max-w-lg text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]';
  const navBtnBase = isDark
    ? 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-transparent text-white shadow-none transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2'
    : `inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg text-wa-bg shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 ${navSurfaceClass} ${navHoverClass} ${navRingOffsetClass}`;

  const inner = (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14 xl:gap-16">
      <div
        className={`flex shrink-0 flex-col lg:w-[34%] xl:w-[32%] ${showCarouselNav ? 'justify-between' : ''}`}
      >
        <div>
          <h2 id={ariaLabelledBy} className={titleCls}>
            {title}
          </h2>
          <p className={subtitleCls}>{subtitle}</p>
        </div>
        {showCarouselNav ? (
          <div className="mt-8 flex gap-3 lg:mt-10">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              className={isDark ? `${navBtnBase} ${navRingOffsetClass}` : navBtnBase}
              aria-label="Scroll features left"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              className={isDark ? `${navBtnBase} ${navRingOffsetClass}` : navBtnBase}
              aria-label="Scroll features right"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>

      <div className="min-w-0 flex-1 lg:pt-1">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <article
              key={card.id}
              className={`flex shrink-0 snap-start flex-col overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] ${carouselCardClassName}`}
            >
              <div className={`relative w-full bg-wa-bg/5 ${imageAspectClassName}`}>
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 88vw, 320px"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                <h3 className="text-xl font-semibold leading-snug text-wa-bg">{card.title}</h3>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-wa-muted transition hover:text-wa-bg"
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
  );

  return (
    <section className={sectionClassName} aria-labelledby={ariaLabelledBy}>
      {layoutVariant === 'cardOnBeige' ? (
        <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-2 sm:px-6 md:px-8 lg:px-10">
          <div className="rounded-[24px] rounded-b-[40px] bg-white px-5 py-12 shadow-[0_12px_48px_rgba(11,34,42,0.06)] sm:rounded-[28px] sm:rounded-b-[48px] sm:px-8 sm:py-14 md:px-12 md:py-16 lg:py-20">
            {inner}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-[1440px]">{inner}</div>
      )}
    </section>
  );
}
