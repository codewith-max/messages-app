import Link from 'next/link';
import Image from 'next/image';

export default function MetaAiHero() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#F7F3ED] px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 md:px-8 lg:pb-12 lg:pt-16"
      aria-labelledby="meta-ai-hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
          <div className="w-full max-w-xl flex-1 text-center lg:max-w-[520px] lg:text-start">
            <h1
              id="meta-ai-hero-heading"
              className="text-[34px] font-semibold leading-[1.12] tracking-tight text-[#111b21] sm:text-[42px] md:text-[48px] lg:text-[52px]"
            >
              Do more on WhatsApp with Meta AI
            </h1>
            <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.55] text-[#111b21]/88 lg:mx-0 lg:text-[18px]">
              From easily coordinating a meet up with your friends, to creating images to share in the group chat,
              Meta AI makes it easy to get help with anything, all with the safety and privacy of WhatsApp.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="#download"
                className="inline-flex items-center justify-center rounded-full border border-[#111b21] bg-white px-8 py-3 text-[16px] font-semibold text-[#111b21] shadow-sm transition-colors hover:bg-[#f0f2f5] focus:outline-none focus:ring-2 focus:ring-[#111b21] focus:ring-offset-2 focus:ring-offset-[#F7F3ED]"
              >
                Try it
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[min(100%,400px)] flex-1 lg:max-w-[min(100%,480px)]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] shadow-[0_32px_55px_-28px_rgba(17,27,33,0.42)] ring-1 ring-black/[0.06] sm:rounded-[32px] lg:mx-0 lg:ms-auto">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1067&fit=crop&q=80"
                alt="Friends looking at a phone together"
                fill
                sizes="(max-width: 1024px) min(100vw - 2rem, 400px), 460px"
                className="object-cover object-[center_20%]"
                priority
              />

              {/* Search row on top, @Meta AI bubble below — aligned to bottom-left of the photo */}
              <div className="absolute inset-x-3 bottom-8 z-10 flex flex-col gap-3 sm:bottom-10 sm:inset-x-5 lg:bottom-10">
                <div className="flex w-full max-w-[min(100%,340px)] items-center gap-2.5 rounded-full bg-white/95 px-3 py-2.5 shadow-[0_10px_28px_-10px_rgba(17,27,33,0.4)] ring-1 ring-black/[0.07] backdrop-blur-sm sm:px-4 sm:py-3">
                  <span
                    className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#22d3ee] via-[#a78bfa] to-[#f472b6] shadow-sm ring-2 ring-white"
                    aria-hidden
                  />
                  <span className="text-[13px] font-medium text-[#54656f] sm:text-[14px]">
                    Ask Meta AI or Search
                  </span>
                </div>

                <div className="max-w-[min(100%,340px)] rounded-[1.25rem] bg-white px-3 py-3 shadow-[0_12px_32px_-8px_rgba(17,27,33,0.35)] ring-1 ring-black/[0.06] sm:px-4">
                  <div className="flex gap-2">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#a78bfa] via-[#ec4899] to-[#f97316] shadow-inner sm:h-10 sm:w-10"
                      aria-hidden
                    />
                    <p className="min-w-0 pt-1 text-[12px] leading-snug text-[#111b21] sm:pt-1.5 sm:text-[13px]">
                      <span className="font-semibold text-[#25D366]">@Meta AI</span>{' '}
                      Help us settle this debate — who is the best musician of all time?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-7xl text-[12px] leading-relaxed text-[#667781] sm:mt-12 sm:text-[13px] lg:mt-14">
          Features may not be available to all users. Learn more about availability{' '}
          <Link href="#" className="font-medium text-[#25D366] underline underline-offset-2 hover:text-[#20bd5c]">
            here
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
