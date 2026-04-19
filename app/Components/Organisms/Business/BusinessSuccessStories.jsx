'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { successStories } from '../../../content/forBusinessContent';

export default function BusinessSuccessStories() {
  const { cases } = successStories;
  const [index, setIndex] = useState(0);
  const go = useCallback(
    (dir) => {
      setIndex((i) => {
        const next = (i + dir + cases.length) % cases.length;
        return next;
      });
    },
    [cases.length],
  );

  const prev = () => go(-1);
  const next = () => go(1);

  const active = cases[index];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8" aria-labelledby="success-stories-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-wa-bg/55">{successStories.eyebrow}</p>
            <h2 id="success-stories-heading" className="mt-2 max-w-[720px] text-[28px] font-semibold leading-tight text-[#073321] sm:text-[34px] md:text-[38px]">
              {successStories.title}
            </h2>
          </div>
          <div className="flex shrink-0 gap-3 md:mb-1">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#073321] text-[#073321] transition hover:bg-[#073321] hover:text-white"
              aria-label="Previous story"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#073321] text-[#073321] transition hover:bg-[#073321] hover:text-white"
              aria-label="Next story"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <article className="overflow-hidden rounded-3xl bg-[#E8F8F0] shadow-sm ring-1 ring-black/[0.04]">
            <div className="grid md:grid-cols-2 md:items-stretch">
              <div className="relative aspect-[16/11] min-h-[220px] md:aspect-auto md:min-h-[280px]">
                <Image
                  key={active.id}
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
                <h3 className="text-[26px] font-bold text-wa-bg md:text-[28px]">{active.caseTitle}</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-wa-bg/85">{active.caseBody}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
