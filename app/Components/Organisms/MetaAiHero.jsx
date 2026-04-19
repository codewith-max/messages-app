import Image from 'next/image';
import Link from 'next/link';

export default function MetaAiHero() {
  return (
    <section
      className="border-b border-[#e3e5de] bg-[#F7F8F2] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:px-8 lg:pb-24 lg:pt-16"
      aria-labelledby="meta-ai-hero-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="min-w-0">
          <h1
            id="meta-ai-hero-heading"
            className="text-[36px] font-bold leading-[1.12] tracking-tight text-wa-bg sm:text-[44px] md:text-[52px] lg:text-[56px]"
          >
            Do more on WhatsApp with Meta AI
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
            From easily coordinating a meet up with your friends, to creating images to share in the group chat, Meta AI
            makes it easy to get help with anything, all with the safety and privacy of WhatsApp.
          </p>
          <div className="mt-8">
            <Link
              href="#download"
              className="inline-flex items-center rounded-full border border-wa-bg bg-white px-7 py-3 text-[15px] font-semibold text-wa-bg transition-colors hover:bg-[#eef0ea] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8F2]"
            >
              Try it
            </Link>
          </div>
          <p className="mt-10 max-w-xl text-[13px] leading-relaxed text-[#667781]">
            Features may not be available to all users.{' '}
            <Link href="/help-center" className="underline decoration-[#667781] underline-offset-[3px] hover:text-wa-muted hover:decoration-wa-muted">
              Learn more about availability here
            </Link>
            .
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-24px_rgba(11,34,42,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=960&h=1200&fit=crop&q=80"
              alt="Friends smiling and looking at a smartphone together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 90vw"
              priority
            />
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-8 flex flex-col gap-3 sm:inset-x-10 lg:bottom-10">
            <div className="flex items-center gap-2.5 rounded-full bg-white/95 px-4 py-2.5 shadow-lg ring-1 ring-black/[0.06] backdrop-blur-sm">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] via-[#a78bfa] to-[#f472b6] shadow-sm"
                aria-hidden
              />
              <span className="text-[14px] font-medium text-wa-bg/90">Ask Meta AI or Search</span>
            </div>
            <div className="flex items-start gap-2 rounded-2xl bg-white/95 px-3.5 py-3 shadow-lg ring-1 ring-black/[0.06] backdrop-blur-sm">
              <span className="text-[#8696a0]" aria-hidden>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5s.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </span>
              <p className="text-[13px] leading-snug text-wa-bg">
                <span className="font-semibold text-wa-muted">@Meta AI</span>{' '}
                <span className="text-wa-bg/90">
                  Help us settle this debate — who is the best musician of all time
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
