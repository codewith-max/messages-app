import Image from 'next/image';
import Link from 'next/link';

export default function ChannelsPrivacySection() {
  return (
    <section
      className="border-b border-white/10 bg-wa-bg px-4 py-16 sm:px-6 md:py-24 lg:px-10"
      aria-labelledby="channels-privacy-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <h2 id="channels-privacy-heading" className="text-[34px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[40px] md:text-[44px]">
            Follow channels{' '}
            <span className="text-wa-muted">privately</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/85 md:text-[18px]">
            Only you can see what channels you follow. Your phone number stays private, and only admins that have you saved as a contact can see it.
          </p>
          <Link
            href="/privacy"
            className="mt-8 inline-flex items-center gap-1.5 text-[16px] font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:text-wa-muted hover:decoration-wa-muted"
          >
            Learn more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=720&h=900&fit=crop&q=85"
                alt="Person smiling while using a phone on the couch"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>

          <div className="absolute -top-3 right-2 z-10 max-w-[220px] rounded-2xl bg-wa-bg px-3 py-2.5 text-[13px] font-medium leading-snug text-white shadow-lg sm:right-6">
            <span className="me-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20" aria-hidden>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </span>
            You&apos;re not visible to other followers
          </div>

          <div className="absolute bottom-[28%] left-0 z-10 max-w-[220px] rounded-2xl bg-wa-bg px-3 py-2.5 text-[13px] font-medium leading-snug text-white shadow-lg sm:-left-2">
            <span className="me-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20" aria-hidden>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
            Your phone number is protected
          </div>

          <div className="pointer-events-none absolute -bottom-2 left-4 z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-wa-bg text-white shadow-xl ring-4 ring-wa-bg">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
