import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGE_SRC = '/image/bannar4.webp';

/** Top hero: "Connection is a call away" + image (right column). */
function CallingHeroGraphic() {
  return (
    <div className="relative mx-auto flex w-full max-w-[min(100%,440px)] items-center justify-center md:max-w-none md:justify-end">
      <div className="relative w-full max-w-[380px]">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#FCF5EB]">
          <Image
            src={HERO_IMAGE_SRC}
            alt="WhatsApp voice and video call on mobile"
            width={720}
            height={900}
            sizes="(max-width: 768px) min(100vw - 2rem, 380px), 420px"
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function CallingTopHero() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#FCF5EB] px-4 pb-12 pt-6 sm:px-6 sm:pb-14 sm:pt-8 md:px-8 lg:pb-16 lg:pt-10"
      aria-labelledby="calling-top-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="w-full flex-1 text-center md:text-start">
          <h1
            id="calling-top-heading"
            className="text-[34px] font-semibold leading-[1.12] tracking-tight text-[#111b21] sm:text-[40px] md:text-[44px] lg:text-[48px]"
          >
            Connection is a call away
          </h1>
          <p className="mx-auto mt-5 max-w-[540px] text-[17px] leading-[1.55] text-[#111b21]/88 md:mx-0 md:text-[18px]">
            WhatsApp video and voice calls are free, have no time limits, and are end-to-end encrypted.
            You can call one-on-one or in groups across iOS and Android, using mobile, desktop and tablet
            devices internationally.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="#download"
              className="inline-flex items-center rounded-full bg-[#25D366] px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#20bd5c] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FCF5EB]"
            >
              <span>Download</span>
              <svg
                className="ms-2 h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full flex-1">
          <CallingHeroGraphic />
        </div>
      </div>
    </section>
  );
}
