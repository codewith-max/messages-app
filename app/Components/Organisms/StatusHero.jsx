import Link from 'next/link';
import Image from 'next/image';

function StickerEmoji({ children, className = '' }) {
  return (
    <span
      className={`pointer-events-none select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] ${className}`}
      aria-hidden
    >
      {children}
    </span>
  );
}

export default function StatusHero() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-[#FCF5EB] px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:px-8 lg:pb-20 lg:pt-12"
      aria-labelledby="status-hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14 xl:gap-16">
          <div className="w-full max-w-xl flex-1 text-center lg:text-start">
            <h1
              id="status-hero-heading"
              className="text-[36px] font-semibold leading-[1.1] tracking-tight text-wa-bg sm:text-[44px] md:text-[52px] lg:text-[56px]"
            >
              Stay in touch with Status
            </h1>
            <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.55] text-wa-bg/85 md:mx-0 md:text-[18px]">
              Share photos, videos, voice notes, and text with your people on WhatsApp Status. Personalize them by
              adding stickers, GIFs, and more. They&apos;ll disappear from view after 24 hours.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="#download"
                className="inline-flex items-center rounded-full bg-wa-bg px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-wa-muted focus:outline-none focus:ring-2 focus:ring-wa-muted focus:ring-offset-2 focus:ring-offset-[#FCF5EB]"
              >
                <span>Download</span>
                <svg className="ms-2 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[min(100%,360px)] flex-1 lg:max-w-[400px]">
            <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-[2rem] shadow-[0_32px_55px_-28px_rgba(11,34,42,0.42)] ring-1 ring-black/[0.06] sm:rounded-[2.25rem] lg:mx-0 lg:ms-auto">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1422&fit=crop"
                alt="Person sharing a selfie for Status"
                fill
                sizes="(max-width: 1024px) min(100vw - 2rem, 360px), 400px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden />

              <StickerEmoji className="absolute left-[6%] top-[10%] text-[2.75rem] sm:text-[3rem]">
                ☕
              </StickerEmoji>
              <StickerEmoji className="absolute right-[8%] top-[14%] text-3xl sm:text-4xl">😍</StickerEmoji>
              <StickerEmoji className="absolute left-[12%] top-[28%] text-2xl sm:text-3xl">😂</StickerEmoji>
              <StickerEmoji className="absolute right-[18%] top-[32%] text-2xl">😮</StickerEmoji>
              <StickerEmoji className="absolute left-[20%] top-[42%] text-xl sm:text-2xl">😭</StickerEmoji>
              <StickerEmoji className="absolute right-[12%] top-[46%] text-2xl">🙏</StickerEmoji>
              <StickerEmoji className="absolute left-[8%] top-[52%] text-2xl">👏</StickerEmoji>
              <StickerEmoji className="absolute right-[22%] top-[56%] text-2xl">🎉</StickerEmoji>
              <StickerEmoji className="absolute left-[50%] top-[48%] -translate-x-1/2 text-2xl font-bold text-white/95">
                💯
              </StickerEmoji>
              <div
                className="absolute bottom-[26%] right-[8%] flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-white/80 sm:h-14 sm:w-14"
                aria-hidden
              >
                <span className="text-[1.65rem] sm:text-[1.85rem]">😶</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-4 pt-12 sm:px-4 sm:pb-5">
                <div className="mb-2 flex items-center gap-2 rounded-xl bg-black/35 px-2.5 py-2 backdrop-blur-[2px] sm:px-3">
                  <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white/90 bg-[#cfd8dc]" />
                  <button
                    type="button"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-wa-bg shadow"
                    aria-label="Play voice status"
                  >
                    <svg className="ms-0.5 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="flex flex-1 items-end gap-px px-1">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-full bg-white/90"
                        style={{ height: `${6 + (i % 10)}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] tabular-nums text-white/90">0:14</span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/95 px-2 py-2 shadow-lg ring-1 ring-black/10 sm:px-3">
                  <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-wa-muted to-wa-bg" />
                  <span className="flex-1 truncate ps-1 text-[14px] text-[#8696a0]">Reply…</span>
                  <button
                    type="button"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#f15c6d]"
                    aria-label="React with heart"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
