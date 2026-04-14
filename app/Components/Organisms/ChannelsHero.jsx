import Link from 'next/link';
import Image from 'next/image';

function Pill({ children, active }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-medium sm:text-[11px] ${
        active
          ? 'bg-[#e7fce3] text-[#111b21] ring-1 ring-[#25D366]'
          : 'bg-[#f0f2f5] text-[#54656f]'
      }`}
    >
      {children}
    </span>
  );
}

function FollowRow({ name, status }) {
  const following = status === 'following';
  return (
    <div className="flex items-center gap-2 border-b border-[#e9edef] py-2 last:border-0">
      <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#a8d5a2] to-[#25D366]" />
      <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-[#111b21] sm:text-[12px]">{name}</span>
      <button
        type="button"
        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-[11px] ${
          following ? 'bg-[#e7fce3] text-[#111b21]' : 'bg-[#25D366] text-white'
        }`}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

function ExploreCard() {
  return (
    <div className="absolute -left-1 top-0 z-20 w-[min(92%,240px)] rounded-2xl bg-white p-3 shadow-[0_16px_40px_-12px_rgba(17,27,33,0.35)] ring-1 ring-black/[0.06] sm:-left-4 sm:w-[260px] md:-left-8">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-[12px] font-semibold text-[#111b21] sm:text-[13px]">Explore channels</span>
        <div className="flex items-center gap-1.5 text-[#54656f]">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 12h18M3 20h18" />
          </svg>
        </div>
      </div>
      <div className="mb-2 flex flex-wrap gap-1">
        <Pill active>Explore</Pill>
        <Pill>Most active</Pill>
        <Pill>Popular</Pill>
        <Pill>New</Pill>
      </div>
      <FollowRow name="Football Club" />
      <FollowRow name="WhatsApp" status="following" />
      <FollowRow name="Mark Zuckerberg" />
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative z-30 mx-auto w-full max-w-[260px] overflow-hidden rounded-[2rem] bg-[#efeae2] shadow-[0_28px_55px_-24px_rgba(17,27,33,0.45)] ring-[6px] ring-[#111b21]/10 sm:max-w-[280px]">
      <div className="bg-[#008069] px-3 py-3 text-white">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[15px] font-medium">Football Club</span>
        </div>
      </div>
      <div className="px-4 pb-6 pt-5">
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#00a884] to-[#008069] ring-4 ring-white shadow-md" />
          <h3 className="mt-3 text-[17px] font-semibold text-[#111b21]">Football Club</h3>
          <p className="text-[12px] text-[#667781]">128K followers</p>
        </div>
        <div className="mt-5 rounded-lg bg-[#d9fdd3] px-3 py-2.5">
          <div className="flex items-center gap-2">
            <button type="button" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white" aria-label="Play">
              <svg className="ms-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="flex flex-1 items-end gap-0.5 px-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="w-0.5 rounded-full bg-[#25D366]/90"
                  style={{ height: `${8 + (i % 12)}px` }}
                />
              ))}
            </div>
            <span className="text-[11px] text-[#667781]">0:42</span>
          </div>
        </div>
        <div className="mt-3 flex justify-center gap-1 text-lg">
          <span>⚽</span>
          <span>🔥</span>
          <span>👏</span>
          <span className="text-[12px] text-[#667781]">+2.1K</span>
        </div>
      </div>
    </div>
  );
}

function MediaCard() {
  return (
    <div className="absolute -right-2 top-[18%] z-[35] w-[min(88%,200px)] overflow-hidden rounded-xl bg-white shadow-[0_16px_40px_-12px_rgba(17,27,33,0.38)] ring-1 ring-black/[0.06] sm:right-0 sm:top-[20%] sm:w-[220px] md:-right-4">
      <div className="relative aspect-[4/3] w-full bg-[#0a5f4a]">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=440&h=330&fit=crop"
          alt=""
          width={440}
          height={330}
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-2 py-1.5">
        <div className="flex gap-1 text-[13px]">
          <span>🔥</span>
          <span>⚽</span>
          <span>🇧🇷</span>
        </div>
        <span className="text-[11px] font-medium text-[#667781]">18.6K</span>
      </div>
    </div>
  );
}

function PollCard() {
  return (
    <div className="absolute bottom-[2%] right-[8%] z-50 w-[min(92%,210px)] rounded-xl bg-white p-3 shadow-[0_14px_36px_-10px_rgba(17,27,33,0.4)] ring-1 ring-black/[0.06] sm:bottom-[4%] sm:w-[230px] md:right-[2%]">
      <p className="text-[11px] font-semibold leading-snug text-[#111b21] sm:text-[12px]">
        Which kit are you repping tomorrow?
      </p>
      <div className="mt-2 space-y-2">
        <div className="flex items-start gap-2 rounded-lg border border-[#e9edef] p-2">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-[#25D366] bg-[#25D366]" aria-hidden />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] text-[#111b21] sm:text-[11px]">2025 home/away</span>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#e9edef]">
              <div className="h-full w-[62%] rounded-full bg-[#25D366]" />
            </div>
          </div>
          <span className="text-[10px] text-[#667781]">62%</span>
        </div>
        <div className="flex items-start gap-2 rounded-lg border border-[#e9edef] p-2 opacity-90">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-[#8696a0]" aria-hidden />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] text-[#111b21] sm:text-[11px]">Retro/vintage</span>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#e9edef]">
              <div className="h-full w-[38%] rounded-full bg-[#8696a0]" />
            </div>
          </div>
          <span className="text-[10px] text-[#667781]">38%</span>
        </div>
      </div>
    </div>
  );
}

export default function ChannelsHero() {
  return (
    <section
      className="border-b border-[#e5e2db] bg-[#F4F1EA] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:px-8 lg:pb-24 lg:pt-14"
      aria-labelledby="channels-hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          <div className="w-full max-w-xl flex-1 text-center lg:text-start">
            <h1
              id="channels-hero-heading"
              className="text-[34px] font-semibold leading-[1.12] tracking-tight text-[#111b21] sm:text-[42px] md:text-[48px] lg:text-[52px]"
            >
              Follow what matters with Channels
            </h1>
            <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.55] text-[#54656f] lg:mx-0 lg:text-[18px]">
              WhatsApp Channels is a simple and private way to get useful updates from the people and organizations you
              care about.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="#explore"
                className="group inline-flex items-center gap-1 text-[17px] font-semibold text-[#25D366] transition-colors hover:text-[#20bd5c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1EA] rounded-sm"
              >
                Explore Channels
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative h-[min(72vh,560px)] w-full min-h-[420px] flex-1 lg:h-[520px] lg:min-h-[520px]">
            <ExploreCard />
            <div className="absolute left-1/2 top-1/2 z-30 w-full max-w-[280px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[300px]">
              <PhoneMock />
            </div>
            <MediaCard />
            <PollCard />
          </div>
        </div>
      </div>
    </section>
  );
}
