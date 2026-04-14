import Link from 'next/link';
import Image from 'next/image';

function AvatarStack({ count = 3 }) {
  return (
    <div className="flex -space-x-1.5" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="inline-block h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-[#a8d5a2] to-[#25D366]"
          style={{ zIndex: count - i }}
        />
      ))}
    </div>
  );
}

function FloatBubble({
  children,
  className = '',
}) {
  return (
    <div
      className={`absolute max-w-[min(100%,220px)] rounded-xl bg-white p-2.5 shadow-[0_12px_40px_-12px_rgba(17,27,33,0.35)] ring-1 ring-black/[0.06] sm:max-w-[260px] sm:p-3 ${className}`}
    >
      {children}
    </div>
  );
}

export default function GroupsHero() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#FCF5EB] px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:px-8 lg:pb-20 lg:pt-12"
      aria-labelledby="groups-hero-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-14 lg:gap-16">
        <div className="w-full flex-1 text-center md:text-start">
          <h1
            id="groups-hero-heading"
            className="text-[36px] font-semibold leading-[1.1] tracking-tight text-[#111b21] sm:text-[44px] md:text-[52px] lg:text-[56px]"
          >
            Connect and get more done with groups
          </h1>
          <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.55] text-[#111b21]/88 md:mx-0 md:text-[18px]">
            Whether you’re planning a night out or coordinating a team at work, WhatsApp groups help you stay
            in sync, share updates, and keep the conversation going — all with the same end-to-end encryption as
            your private chats.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="#download"
              className="inline-flex items-center rounded-full bg-[#25D366] px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#20bd5c] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FCF5EB]"
            >
              <span>Download</span>
              <svg className="ms-2 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full flex-1 md:max-w-[min(100%,480px)]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[340px] overflow-visible sm:max-w-[380px] md:mx-0 md:ms-auto">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_32px_60px_-28px_rgba(17,27,33,0.4)] ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1067&fit=crop"
                alt="Friends gathered around a table"
                fill
                sizes="(max-width: 768px) min(100vw - 2rem, 380px), 420px"
                className="object-cover"
                priority
              />
            </div>

            <FloatBubble className="left-0 top-[4%] z-30 w-[calc(100%-2rem)] -translate-x-1 sm:-translate-x-2 md:-translate-x-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <AvatarStack count={3} />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#111b21]">Family</p>
                      <p className="truncate text-[12px] text-[#667781]">Join the call everyone!!</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span className="text-[10px] tabular-nums text-[#8696a0]">11:56</span>
                    <span className="h-2 w-2 rounded-full bg-[#25D366]" title="Unread" />
                  </div>
                </div>
            </FloatBubble>

            <FloatBubble className="right-0 top-[26%] z-30 w-[calc(100%-1.5rem)] translate-x-1 sm:translate-x-2 md:translate-x-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6f7e9] text-[#25D366]">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M16 12V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h14v-2c-1.66 0-3-1.34-3-3zm-4-4c0 1.1-.9 2-2 2s-2-.9-2-2h4z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#111b21]">8 Main St. Neighbours</p>
                      <p className="text-[12px] text-[#25D366]">Alex added you</p>
                    </div>
                  </div>
                  <span className="text-[10px] tabular-nums text-[#8696a0]">13:37</span>
                </div>
            </FloatBubble>

            <FloatBubble className="left-[4%] bottom-[18%] z-30 w-[calc(100%-2.5rem)] -translate-x-2 sm:bottom-[20%] md:-translate-x-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <AvatarStack count={2} />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#111b21]">1st Grade Parents</p>
                      <p className="truncate text-[12px] text-[#667781]">
                        <span className="font-medium text-[#111b21]">Anika:</span> Thanks all
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] tabular-nums text-[#8696a0]">09:12</span>
                </div>
            </FloatBubble>

            <FloatBubble className="right-[2%] bottom-[6%] z-30 max-w-[200px] translate-x-1 sm:translate-x-3">
              <p className="text-[12px] text-[#111b21]">I love this!</p>
              <div className="mt-1.5 flex items-center gap-2 text-[13px]">
                <span>❤️</span>
                <span>👍</span>
                <span className="text-[11px] text-[#8696a0]">+4</span>
              </div>
            </FloatBubble>
          </div>
        </div>
      </div>
    </section>
  );
}
