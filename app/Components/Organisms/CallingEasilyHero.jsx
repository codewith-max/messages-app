import Image from 'next/image';
import Link from 'next/link';

const IMG_BACK = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=1000&fit=crop&q=80';
const IMG_FRONT_MAIN = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=1200&fit=crop&q=80';
const IMG_FRONT_PIP = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80';

/** Two overlapping tilted phones — "Call easily and privately" (WhatsApp calling page) */
export default function CallingEasilyHero() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#FCF5EB] px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8"
      aria-labelledby="calling-easily-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-14 lg:gap-20">
        {/* Left: overlapping phones */}
        <div className="relative flex w-full flex-1 justify-center md:justify-start">
          <div className="relative h-[min(72vw,420px)] w-full max-w-[480px] sm:h-[440px] md:h-[460px]">
            {/* Back phone — voice-style, darker */}
            <div
              className="absolute left-[2%] top-8 w-[46%] max-w-[200px] -rotate-[8deg] sm:left-4 sm:top-10 sm:max-w-[220px]"
              style={{ zIndex: 1 }}
            >
              <div className="rounded-[1.85rem] border-[9px] border-[#1b2329] bg-[#1b2329] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[9/17] overflow-hidden rounded-[1.2rem] bg-[#0b141a]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a2630] to-[#0b141a] px-3">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/15 sm:h-32 sm:w-32">
                      <Image src={IMG_BACK} alt="" fill className="object-cover" sizes="140px" />
                    </div>
                    <p className="mt-4 text-center text-[11px] font-medium text-white/75">Voice call</p>
                    <div className="mt-auto flex w-full items-center justify-center gap-4 pb-6 pt-8">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ea0038] text-white shadow-md">
                        <svg className="h-6 w-6 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Front phone — video + PiP */}
            <div
              className="absolute right-0 top-0 w-[58%] max-w-[260px] rotate-[4deg] sm:max-w-[280px]"
              style={{ zIndex: 2 }}
            >
              <div className="rounded-[1.95rem] border-[10px] border-[#1b2329] bg-[#1b2329] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[9/17.2] overflow-hidden rounded-[1.35rem] bg-black">
                  <Image
                    src={IMG_FRONT_MAIN}
                    alt="Video call on WhatsApp"
                    fill
                    className="object-cover object-[center_15%]"
                    sizes="280px"
                    priority
                  />
                  <div className="absolute bottom-[18%] right-2.5 z-10 aspect-[3/4] w-[32%] max-w-[92px] overflow-hidden rounded-lg ring-2 ring-white/95 shadow-lg">
                    <Image src={IMG_FRONT_PIP} alt="" fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/70 to-transparent px-2 pb-4 pt-10">
                    <div className="flex items-center gap-3 rounded-full bg-black/45 px-2 py-2 backdrop-blur-sm">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full text-white/90">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full text-white/90">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ea0038] text-white">
                        <svg className="h-5 w-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="w-full flex-1 text-center md:max-w-xl md:text-start">
          <h2
            id="calling-easily-heading"
            className="text-[36px] font-semibold leading-[1.12] tracking-tight text-[#111b21] sm:text-[44px] md:text-[52px]"
          >
            Call easily and privately
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.5] text-[#111b21]/90 md:mx-0 md:text-[19px]">
            Catch up on voice or video calls with those who matter most. Your calls on WhatsApp are always end-to-end
            encrypted.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="#download"
              className="inline-flex items-center rounded-full bg-[#25D366] px-8 py-3.5 text-base font-medium text-white shadow-sm transition hover:bg-[#20bd5c] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FCF5EB]"
            >
              <span>Download</span>
              <svg className="ms-2 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
