'use client';

import Image from 'next/image';
import { useState } from 'react';
import { whySection } from '../../../content/forBusinessContent';

export default function BusinessWhySection() {
  const [openId, setOpenId] = useState(whySection.items[0].id);

  return (
    <section className="bg-[#F4EFE9] px-4 py-16 sm:px-6 md:py-24 lg:px-8" aria-labelledby="why-whatsapp-heading">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:aspect-[5/6]">
          <Image
            src={whySection.imageSrc}
            alt={whySection.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 id="why-whatsapp-heading" className="text-[32px] font-semibold leading-tight text-wa-bg sm:text-[38px] md:text-[42px]">
            {whySection.title}
          </h2>
          <ul className="mt-8 divide-y divide-wa-bg/12 border-t border-wa-bg/12" role="list">
            {whySection.items.map((item) => {
              const open = openId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE9]"
                    aria-expanded={open}
                  >
                    <span className="text-[18px] font-semibold text-wa-bg md:text-[20px]">{item.title}</span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-wa-bg text-wa-muted transition ${open ? 'rotate-45' : ''}`}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  {open ? (
                    <p className="pb-5 text-[16px] leading-relaxed text-wa-bg/85">{item.body}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
