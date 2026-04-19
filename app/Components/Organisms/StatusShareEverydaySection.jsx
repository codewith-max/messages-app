import Image from 'next/image';

export default function StatusShareEverydaySection() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      aria-labelledby="status-share-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <div className="relative w-full max-w-[min(100%,380px)] flex-shrink-0 lg:max-w-[420px]">
          <div className="relative aspect-[9/14] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_50px_-24px_rgba(11,34,42,0.38)] ring-1 ring-black/[0.06] sm:rounded-[2.25rem]">
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1240&fit=crop&q=80"
              alt="Friends smiling on a scooter"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) min(92vw, 380px), 420px"
            />
            <span className="absolute bottom-[18%] left-[8%] text-5xl drop-shadow-md" aria-hidden>
              💕
            </span>
            <span className="absolute bottom-[12%] right-[6%] text-5xl opacity-95 drop-shadow" aria-hidden>
              😘
            </span>
            <div className="absolute inset-x-3 bottom-4 z-10 rounded-2xl bg-white/95 p-3 shadow-lg ring-1 ring-black/10">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-wa-muted/15 px-2 py-1 text-[12px] font-medium text-wa-bg/70">
                  Voice
                </span>
                <div className="h-1 flex-1 rounded-full bg-wa-bg/25">
                  <div className="h-full w-[35%] rounded-full bg-wa-bg" />
                </div>
                <span className="text-[11px] tabular-nums text-[#667781]">0:03</span>
              </div>
            </div>
            <div className="absolute bottom-[26%] right-3 max-w-[200px] rounded-2xl bg-white/95 px-3 py-2 text-[13px] text-wa-bg shadow-md ring-1 ring-black/8">
              <p className="leading-snug">He&apos;s grown so much!</p>
              <p className="mt-1 text-right text-[11px] text-[#667781]">11:59</p>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex-1 lg:ps-4">
          <h2 id="status-share-heading" className="text-[34px] font-semibold leading-[1.1] text-wa-bg sm:text-[40px] md:text-[44px]">
            Share your everyday
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
            With stickers, avatars, GIFs, and overlay text, you have all the creative options at your fingertips to
            express yourself, get creative, and share the real you.
          </p>
        </div>
      </div>
    </section>
  );
}
