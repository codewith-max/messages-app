'use client';

import { useCallback, useRef } from 'react';
import { exploreCards, exploreIntro } from '../../content/privacyPageContent';
import LearnMoreLink from '../Molecules/privacy/LearnMoreLink';

function IllustrationPanel() {
  const icons = [
    'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    'M13 10V3L4 14h7v7l9-11h-7z',
    'M9 12l2 2 4-4m5.5-4.5a7 7 0 100 14 7 7 0 000-14z',
  ];
  return (
    <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-4 bg-[#0c1317] px-4 py-8">
      <div className="grid grid-cols-3 gap-4">
        {icons.map((d, i) => (
          <div
            key={i}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10"
          >
            <svg className="h-7 w-7 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
            </svg>
          </div>
        ))}
      </div>
      <p className="text-center text-[13px] font-semibold text-white/90">Privacy checkup</p>
    </div>
  );
}

function PhotoPanel() {
  return (
    <div className="relative h-full min-h-[200px] overflow-hidden bg-gradient-to-br from-[#4a1942] via-[#2d1f3d] to-[#0f1720]">
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden />
      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/55 px-3 py-2 backdrop-blur-sm">
        <p className="text-[11px] font-medium text-white/90">View once</p>
        <p className="text-[10px] text-white/70">Photo disappears after opening</p>
      </div>
    </div>
  );
}

function DarkPanel() {
  return (
    <div className="flex h-full min-h-[200px] flex-col items-center justify-center bg-[#0b141a] px-4 py-8">
      <div className="rounded-2xl border border-white/10 bg-[#1f2c34] px-6 py-8 shadow-inner">
        <svg className="mx-auto h-12 w-12 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p className="mt-3 text-center text-[12px] font-semibold text-[#e9edef]">Fingerprint required</p>
      </div>
    </div>
  );
}

function CardVisual({ variant }) {
  if (variant === 'photo') return <PhotoPanel />;
  if (variant === 'dark') return <DarkPanel />;
  return <IllustrationPanel />;
}

export default function PrivacyExploreSection() {
  const scrollerRef = useRef(null);

  const scrollByDir = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = dir === 'next' ? 340 : -340;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }, []);

  return (
    <section
      className="border-t border-white/[0.06] bg-[#0b141a] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28"
      aria-labelledby="explore-privacy-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-xl lg:shrink-0">
            <h2 id="explore-privacy-heading" className="text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[44px] md:text-[52px]">
              {exploreIntro.lines.map((line, i) => (
                <span key={i} className={i > 0 ? 'mt-1 block' : 'block'}>
                  <span className={line.accent ? 'text-[#25D366]' : 'text-white'}>{line.text}</span>
                </span>
              ))}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/88 md:text-[18px]">{exploreIntro.body}</p>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => scrollByDir('prev')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Previous cards"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDir('next')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Next cards"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex w-full gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-1 lg:justify-end [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Privacy feature cards"
          >
            {exploreCards.map((card) => (
              <article
                key={card.id}
                className="w-[min(100%,320px)] shrink-0 overflow-hidden rounded-[1.25rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:w-[300px]"
              >
                <CardVisual variant={card.variant} />
                <div className="grid gap-4 p-5 sm:grid-cols-[1fr_1.2fr] sm:items-start sm:gap-6">
                  <h3 className="text-[20px] font-bold leading-tight text-[#111b21]">{card.title}</h3>
                  <div>
                    <p className="text-[14px] leading-relaxed text-[#3b4a54]">{card.description}</p>
                    <div className="mt-4">
                      <LearnMoreLink href={card.learnMoreHref} variant="onLight" />
                    </div>
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
