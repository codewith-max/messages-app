'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useShowcaseCarousel } from '../../hooks/useShowcaseCarousel';

function PauseIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5 translate-x-px" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/**
 * Two-column autoplay showcase: image + accordion list (reusable for messaging / features).
 */
export default function AccordionMediaShowcase({
  steps,
  slideMs,
  imageSide = 'right',
  header = null,
  ctaVariant = 'learn',
  sectionClassName = '',
  focusRingOffsetClass = 'focus-visible:ring-offset-[#f0f9f4]',
  ariaLabel = 'Feature showcase',
}) {
  const len = steps.length;
  const { activeIndex, progress, paused, setPaused, goToStep } = useShowcaseCarousel(len, slideMs);
  const active = steps[activeIndex];

  const imageBlock = (
    <div className="relative mx-auto w-full max-w-[560px] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#1a2329] shadow-[0_28px_60px_-24px_rgba(17,27,33,0.45)] ring-1 ring-black/10 sm:rounded-[24px] md:aspect-[16/11]">
        <Image
          key={active.id}
          src={active.imageSrc}
          alt={active.imageAlt}
          fill
          sizes="(max-width: 1024px) min(100vw - 2rem, 560px), 640px"
          className="object-cover object-center"
          priority={activeIndex === 0}
        />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" aria-hidden />
      </div>
    </div>
  );

  const listBlock = (
    <div className="min-w-0">
      {steps.map((step, i) => {
        const isOpen = activeIndex === i;
        return (
          <div key={step.id} className="border-b border-[#b8d4c9]/90 last:border-b-0">
            {isOpen ? (
              <div className="py-5 pr-1 sm:pr-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-bold leading-[1.15] text-[#111b21] sm:text-[28px] md:text-[30px]">
                    {step.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111b21]/15 bg-white text-[#111b21] shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${focusRingOffsetClass}`}
                    aria-pressed={paused}
                    aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
                  >
                    {paused ? <PlayIcon /> : <PauseIcon />}
                  </button>
                </div>
                <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-[#111b21]/10">
                  <div
                    className="h-full rounded-full bg-[#25D366] transition-[width] duration-75 ease-linear"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <p className="mt-5 max-w-[480px] text-[16px] leading-[1.55] text-[#111b21]/85 md:text-[17px]">{step.description}</p>
                {Array.isArray(step.bullets) && step.bullets.length > 0 ? (
                  <ul className="mt-5 max-w-[520px] list-none space-y-3 text-[16px] leading-[1.55] text-[#111b21]/85 md:text-[17px]">
                    {step.bullets.map((b) => (
                      <li key={b.label}>
                        <strong className="text-[#111b21]">{b.label}</strong> {b.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {ctaVariant === 'download' ? (
                  <Link
                    href="#download"
                    className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#111b21] underline decoration-[#25D366] decoration-2 underline-offset-[5px] transition-colors hover:text-[#25D366]"
                  >
                    Download
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </Link>
                ) : ctaVariant === 'help' ? (
                  <Link
                    href={step.ctaHref ?? '/help-center'}
                    className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5c]"
                  >
                    Learn more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href="#download"
                    className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5c]"
                  >
                    Learn how
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => goToStep(i)}
                className={`w-full rounded-sm py-5 text-left transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${focusRingOffsetClass}`}
              >
                <span className="block text-[22px] font-bold leading-tight text-[#111b21] sm:text-[24px] md:text-[26px]">
                  {step.title}
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className={sectionClassName}
      {...(header ? { 'aria-labelledby': header.id } : { 'aria-label': ariaLabel })}
    >
      <div className="mx-auto max-w-7xl">
        {header ? (
          <div
            className={`mx-auto mb-12 md:mb-16 ${header.link ? 'max-w-7xl' : 'max-w-3xl text-center'}`}
          >
            <div
              className={
                header.link
                  ? 'flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'
                  : ''
              }
            >
              <h2
                id={header.id}
                className={`text-[32px] font-semibold leading-tight tracking-tight text-[#111b21] sm:text-[38px] md:text-[42px] ${header.link ? 'text-left' : ''}`}
              >
                {header.title}
              </h2>
              {header.link ? (
                <Link
                  href={header.link.href}
                  className="inline-flex shrink-0 items-center gap-1 text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5c] sm:text-[16px]"
                  {...(header.link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {header.link.label}
                  <span className="text-lg leading-none" aria-hidden>
                    ↗
                  </span>
                </Link>
              ) : null}
            </div>
            {header.subtitle ? (
              <p
                className={`mt-4 text-[17px] leading-relaxed text-[#111b21]/85 md:text-[18px] ${header.link ? 'max-w-2xl text-left' : ''}`}
              >
                {header.subtitle}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {imageSide === 'left' ? (
            <>
              {imageBlock}
              {listBlock}
            </>
          ) : (
            <>
              {listBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
