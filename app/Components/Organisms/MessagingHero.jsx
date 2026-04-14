import Link from 'next/link';
import Image from 'next/image';

/** Subtle dotted wallpaper similar to WhatsApp chat background */
function ChatWallpaper() {
  return (
    <div
      className="absolute inset-0 rounded-[1.4rem]"
      style={{
        backgroundColor: '#efeae2',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c4bc' fill-opacity='0.22'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}

function PinnedRow() {
  return (
    <div className="relative z-10 mb-3 flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 shadow-sm">
      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#8696a0]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h14v-2c-1.66 0-3-1.34-3-3zm-4 10c0 1.1-.9 2-2 2s-2-.9-2-2h4z" />
      </svg>
      <p className="text-[13px] leading-snug text-[#111b21]">Trevor&apos;s recital is on Sunday, 1pm!</p>
    </div>
  );
}

function ReactionBar() {
  return (
    <div className="absolute right-2 top-2 z-20 flex items-center gap-0.5 rounded-full border border-[#e2e8eb] bg-white px-2 py-1 text-[15px] shadow-md">
      <span>👍</span>
      <span>❤️</span>
      <span>😂</span>
      <span>😮</span>
      <span>😢</span>
      <span>🙏</span>
      <span className="ms-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0f2f5] text-[12px] font-medium text-[#54656f]">
        +
      </span>
    </div>
  );
}

function ChatPhoto() {
  return (
    <div className="relative z-10 mb-3 overflow-hidden rounded-xl">
      <div className="relative aspect-[4/3] w-full bg-[#cfd8dc]">
        <Image
          src="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop"
          alt=""
          width={400}
          height={300}
          className="h-full w-full object-cover"
          unoptimized
        />
        <ReactionBar />
      </div>
    </div>
  );
}

function VoiceBubble() {
  return (
    <div className="relative z-10 mb-4 flex justify-end">
      <div className="flex max-w-[92%] items-stretch gap-2 rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-2 shadow-sm">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#cfd8dc]" aria-hidden />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm"
              aria-label="Play voice message"
            >
              <svg className="ms-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="flex h-6 flex-1 items-end gap-px">
              {Array.from({ length: 28 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-[#25D366]/75"
                  style={{ height: `${6 + ((i * 7) % 14)}px` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-1 flex items-center justify-end gap-1 text-[11px] text-[#667781]">
            <span>0:20</span>
            <span className="text-[#53bdeb]" aria-hidden>
              ✓✓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Composer() {
  return (
    <div className="relative z-10 flex items-center gap-2">
      <div className="flex min-h-[44px] flex-1 items-center gap-2 rounded-full border border-[#e2e8eb] bg-white px-3 py-2 shadow-sm">
        <span className="text-[#8696a0]" aria-hidden>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span className="flex-1 text-[15px] text-[#8696a0]">Message</span>
        <svg className="h-5 w-5 text-[#8696a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
        <svg className="h-5 w-5 text-[#8696a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <button
        type="button"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-colors hover:bg-[#20bd5c]"
        aria-label="Record voice message"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.07 14.47 14.32 16 12 16s-4.07-1.53-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3.15 2.79 5.56 5.91 5.98V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.12-.43 5.42-2.83 5.91-5.98.1-.6-.39-1.14-1-1.14z" />
        </svg>
      </button>
    </div>
  );
}

export default function MessagingHero() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#FCF5EB] px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:px-8 lg:pb-20 lg:pt-12"
      aria-labelledby="messaging-hero-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-14 lg:gap-20">
        <div className="w-full flex-1 text-center md:text-start">
          <h1
            id="messaging-hero-heading"
            className="font-serif text-[40px] font-normal leading-[1.08] tracking-tight text-[#111b21] sm:text-[52px] md:text-[64px] lg:text-[72px]"
          >
            Connect your way
          </h1>
          <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.55] text-[#111b21]/88 md:mx-0 md:text-[18px]">
            On WhatsApp, conversations can be expressive, fun and entirely you. Messaging on any device is
            protected by end-to-end encryption, so you can speak freely and know your personal messages remain
            private and secured.
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

        <div className="relative flex w-full flex-1 justify-center md:justify-end">
          <div className="pointer-events-none absolute -inset-6 rounded-[2.75rem] bg-[#ece5dd]/90 blur-sm md:-inset-10" aria-hidden />
          <div className="relative w-full max-w-[min(100%,360px)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#FCF5EB] p-3 shadow-[0_32px_60px_-28px_rgba(17,27,33,0.45)] ring-1 ring-black/5">
              <div className="relative overflow-hidden rounded-[1.45rem] px-3 pb-3 pt-3">
                <ChatWallpaper />
                <div className="relative z-10">
                  <PinnedRow />
                  <ChatPhoto />
                  <VoiceBubble />
                  <Composer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
