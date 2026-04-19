import Image from 'next/image';

export default function StatusPrivacyControlSection() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      aria-labelledby="status-privacy-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <div className="relative w-full max-w-[min(100%,380px)] flex-shrink-0 lg:max-w-[400px]">
          <div className="relative aspect-[9/15] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_50px_-24px_rgba(11,34,42,0.38)] ring-1 ring-black/[0.06] sm:rounded-[2.25rem]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1333&fit=crop&q=80"
              alt="Team smiling together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) min(92vw, 380px), 400px"
            />
            <div className="absolute inset-x-0 top-[38%] flex justify-center px-2">
              <div className="flex w-full max-w-[280px] items-center gap-1 rounded-full bg-[#202c33] px-2 py-2 shadow-xl ring-1 ring-black/20 sm:gap-2 sm:px-3">
                <span className="text-lg text-[#8696a0]" aria-hidden>
                  🙂
                </span>
                <span className="flex-1 truncate ps-1 text-[14px] text-white">It&apos;s between us</span>
                <span className="text-[#8696a0]" aria-hidden>
                  📎
                </span>
                <span className="text-[#8696a0]" aria-hidden>
                    📷
                </span>
              </div>
            </div>
            <div className="absolute -right-1 top-[46%] flex h-12 w-12 items-center justify-center rounded-full bg-wa-bg shadow-lg md:right-0">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.07 14.53 14.21 16 12 16c-2.21 0-4.07-1.47-4.93-3.15-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14C5.62 15.65 8.54 18 12 18c3.46 0 6.38-2.35 7.91-5.86.1-.6-.39-1.14-1-1.14z" />
              </svg>
            </div>

            <div className="absolute bottom-[18%] left-3 right-3 z-10 rounded-2xl bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06] sm:left-4 sm:right-auto sm:max-w-[300px]">
              <p className="text-[13px] font-semibold text-wa-bg">Who can see my status</p>
              <ul className="mt-3 space-y-3 text-[13px] text-wa-bg">
                <li className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-[#d1d7db]" />
                  My contacts
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-[#d1d7db]" />
                    My contacts except…
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-wa-muted">2 excluded</span>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-wa-bg">
                      <span className="h-2 w-2 rounded-full bg-wa-bg" />
                    </span>
                    Only share with…
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-wa-muted">8 included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex-1 lg:ps-4">
          <h2 id="status-privacy-heading" className="text-[34px] font-semibold leading-[1.1] text-wa-bg sm:text-[40px] md:text-[44px]">
            Stay in control
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
            Your status is yours to share. When you post, you decide who can see it, so you can share your
            behind-the-scenes with extra peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
