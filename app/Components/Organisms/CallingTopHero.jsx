import Image from 'next/image';
import Link from 'next/link';

const MAIN_VIDEO =
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=1400&fit=crop&q=80';
const PIP_VIDEO =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80';

/** WhatsApp-style phone: E2E banner, PiP, side icons, bottom call bar */
function PhoneVideoCallMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      <div className="relative rounded-[2.35rem] border-[11px] border-[#1b2329] bg-[#1b2329] shadow-[0_36px_72px_-16px_rgba(17,27,33,0.55)]">
        <div className="relative aspect-[9/18.2] overflow-hidden rounded-[1.65rem] bg-[#0b141a]">
          <Image
            src={MAIN_VIDEO}
            alt=""
            fill
            className="object-cover object-[center_20%]"
            sizes="340px"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/40" aria-hidden />

          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-2.5 pt-2.5 text-white">
            <button
              type="button"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm"
              aria-label="Minimize call"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="mt-1.5 max-w-[58%] text-center text-[10px] font-medium leading-tight tracking-wide sm:text-[11px]">
              End-to-end Encrypted Call
            </p>
            <button
              type="button"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm"
              aria-label="Add participant"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </button>
          </div>

          {/* Right edge controls */}
          <div className="absolute right-2 top-[38%] z-20 flex flex-col gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
          </div>

          {/* Picture-in-picture */}
          <div className="absolute bottom-[22%] right-3 z-20 aspect-[3/4] w-[30%] max-w-[118px] overflow-hidden rounded-xl ring-[3px] ring-white/95 shadow-lg">
            <Image src={PIP_VIDEO} alt="" fill className="object-cover" sizes="120px" />
          </div>

          {/* Bottom control bar */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pb-5 pt-16">
            <div className="mx-auto flex max-w-[280px] items-center justify-between gap-2 rounded-full bg-black/55 px-3 py-2.5 backdrop-blur-md">
              <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full text-white/90" aria-label="More">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
              <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full text-white" aria-label="Video">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full text-white" aria-label="Speaker">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
              <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full text-white" aria-label="Microphone">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ea0038] text-white shadow-lg"
                aria-label="End call"
              >
                <svg className="h-6 w-6 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          </div>
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
            WhatsApp video and voice calls are free*, have no time limits, and are end-to-end encrypted. You can call
            one-on-one or in groups across iOS and Android, using mobile, desktop and tablet devices internationally.
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
        <div className="flex w-full flex-1 flex-col items-center">
          <PhoneVideoCallMockup />
          <p className="mt-5 max-w-[min(100%,340px)] text-center text-[12px] text-[#667781] sm:mt-6 sm:text-[13px]">
            * Data charges may apply. Contact your provider for details.
          </p>
        </div>
      </div>
    </section>
  );
}
