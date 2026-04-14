import Image from 'next/image';
import Link from 'next/link';
import {
  DocumentAttachmentBubble,
  IncomingTextBubble,
  OutgoingEmojiBubble,
  OutgoingTextBubble,
} from '../Molecules/security/SecurityChatOverlays';

export default function SecurityHero() {
  return (
    <section
      className="border-b border-[#1f2b31] bg-[#111b21] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-8 lg:pb-28 lg:pt-14"
      aria-labelledby="security-hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          <div className="w-full max-w-[560px] flex-1 text-center lg:text-start">
            <h1
              id="security-hero-heading"
              className="text-[42px] font-semibold leading-[1.05] tracking-tight sm:text-[52px] md:text-[60px] lg:text-[64px]"
            >
              <span className="text-[#25D366]">Secure</span>
              <span className="text-white"> by design</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.55] text-[#e9edef]/95 md:mx-0 md:text-[18px]">
              To keep you safe, we&apos;ve designed a messaging and calling experience with world-class security,
              built innovative tools to put you in control, and we&apos;re there to support you when you need it.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              <Link
                href="#download"
                className="inline-flex items-center rounded-full bg-[#25D366] px-7 py-3.5 text-[15px] font-semibold text-[#111b21] shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#20bd5c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111b21]"
              >
                Download
                <svg className="ms-2 h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[min(100%,380px)] shrink-0 lg:max-w-[420px]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-visible lg:mx-0 lg:ms-auto lg:max-w-none">
              <div className="absolute inset-0 overflow-hidden rounded-[28px] shadow-[0_40px_70px_-32px_rgba(0,0,0,0.75)] ring-1 ring-white/10 sm:rounded-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=840&h=1120&fit=crop&q=80"
                  alt="Person using a phone in dim light"
                  fill
                  sizes="(max-width: 1024px) min(100vw - 2rem, 360px), 420px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" aria-hidden />
              </div>

              <div className="absolute -right-1 top-[6%] z-20 w-[min(92%,260px)] sm:right-0 md:-right-2">
                <OutgoingTextBubble time="9:41">
                  Mom, here are some safety tips for you <span aria-hidden>💚</span>
                </OutgoingTextBubble>
              </div>

              <div className="absolute right-0 top-[26%] z-20 w-[min(88%,240px)] sm:-right-1">
                <DocumentAttachmentBubble title="Safety Tips" sizeLabel="1.4 MB" />
              </div>

              <div className="absolute left-0 top-[48%] z-20 w-[min(85%,220px)] sm:-left-2 md:-left-4">
                <IncomingTextBubble
                  time="11:59"
                  footer={
                    <span className="inline-flex items-center justify-center rounded-full bg-[#2a3942] px-2 py-0.5 text-[12px] text-[#ff6b9d]" aria-hidden>
                      ❤️
                    </span>
                  }
                >
                  Have fun, and stay safe <span aria-hidden>🏠</span>
                </IncomingTextBubble>
              </div>

              <div className="absolute -bottom-1 right-4 z-20 sm:bottom-2 sm:right-6 md:right-8">
                <OutgoingEmojiBubble emoji="❤️" time="20:12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
