'use client';

import { useCallback, useRef } from 'react';
import Link from 'next/link';
import { useLocale } from '../../contexts/LocaleContext';

function WhatsAppMark({ className = 'h-8 w-8' }) {
  return (
    <svg className={`text-wa-muted ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function StayUpToDate() {
  const { page } = useLocale();
  const S = page.stayUpToDate;
  const cards = S.cards;
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((direction) => {
    const el = scrollerRef.current;
    if (!el || el.children.length === 0) return;
    const card = el.children[0];
    const gap = 20;
    const delta = card.getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction * delta, behavior: 'smooth' });
  }, []);

  return (
    <section className="bg-[#E7FCE3] py-16 md:py-24 lg:py-30 overflow-hidden rounded-b-[2.5rem]     ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-16 xl:gap-18">
          <div className="lg:w-[36%] xl:w-[34%] flex flex-col justify-between shrink-0">
            <div>
              <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-normal leading-[1.08] text-wa-bg tracking-tight mb-5">
                {S.title}
              </h2>
              <p className="text-lg md:text-xl text-wa-bg/90 leading-relaxed max-w-lg">
                {S.sub}
              </p>
            </div>
            <div className="flex gap-3 mt-10 lg:mt-8">
              <button
                type="button"
                onClick={() => scrollByDir(-1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#E7FCE3] text-black shadow-sm transition hover:text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2"
                aria-label={S.prevAria}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir(1)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wa-bg bg-[#E7FCE3] text-black shadow-sm transition hover:text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2"
                aria-label={S.nextAria}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:flex-1 min-w-0">
            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card, index) => (
                <article
                  key={index}
                  className="snap-start shrink-0 w-[min(88vw,26.5rem)] sm:w-[min(85vw,28rem)] md:w-[min(78vw,30rem)] min-h-[26rem] sm:min-h-[28rem] md:min-h-[30rem] bg-white rounded-[1.75rem] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col"
                >
                  <WhatsAppMark className="h-9 w-9 mb-6" />
                  <h3 className="text-xl md:text-[22px] font-semibold text-wa-bg leading-snug mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-wa-bg/80 leading-relaxed flex-1 mb-8">
                    {card.excerpt}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex self-start items-center rounded-full border-1 border-wa-bg px-7 py-4 text-sm font-medium text-wa-bg transition hover:bg-wa-bg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2"
                  >
                    {S.readMore}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
