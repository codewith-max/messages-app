import Image from 'next/image';
import PhoneChromeFrame from './PhoneChromeFrame';

function VerifiedBadge({ className = '' }) {
  return (
    <svg className={`inline-block h-3.5 w-3.5 shrink-0 text-[#53bdeb] ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.06 13.54l-3.5-3.5 1.41-1.41 2.09 2.09 4.6-4.6 1.41 1.41-5.01 5.01z" />
    </svg>
  );
}

const EXPLORE_CHANNELS = [
  { name: 'WhatsApp', followers: '242.1M followers', following: true },
  { name: 'F1', followers: '12.4M followers', following: false },
  { name: 'Mark Zuckerberg', followers: '9.1M followers', following: false },
  { name: 'Will Cathcart', followers: '1.2M followers', following: false },
];

export function ExploreChannelsScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f0f2f5]">
      <div className="flex items-center gap-2 border-b border-black/6 bg-[#f0f2f5] px-3 py-3">
        <span className="text-wa-bg">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <h2 className="flex-1 text-center text-[16px] font-semibold text-wa-bg">Explore channels</h2>
        <button type="button" className="rounded-full p-1 text-[#54656f]" aria-label="Search">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
          </svg>
        </button>
        <button type="button" className="rounded-full p-1 text-[#54656f]" aria-label="Menu">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto px-3 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {['Explore', 'Most active', 'Popular', 'New'].map((t) => (
          <span
            key={t}
            className={`shrink-0 rounded-full px-3 py-1 text-[12px] font-medium ${
              t === 'Explore' ? 'bg-wa-bg text-white' : 'bg-white/90 text-[#54656f] shadow-sm'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <ul className="flex-1 divide-y divide-black/8 overflow-auto bg-white">
        {EXPLORE_CHANNELS.map((c) => (
          <li key={c.name} className="flex items-center gap-2.5 px-3 py-2.5">
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#dfe5e8]" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1 text-[14px] font-medium text-wa-bg">
                <span className="truncate">{c.name}</span>
                <VerifiedBadge />
              </p>
              <p className="text-[12px] text-[#667781]">{c.followers}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-[12px] font-semibold ${
                c.following ? 'bg-[#e7fce3] text-wa-bg' : 'bg-[#e7fce3] text-wa-muted'
              }`}
            >
              {c.following ? 'Following' : 'Follow'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function UpdatesTabScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-black/6 px-3 py-3">
        <h2 className="text-[20px] font-bold text-wa-bg">Updates</h2>
        <div className="flex gap-1">
          <span className="rounded-full p-2 text-[#54656f]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </span>
          <span className="rounded-full p-2 text-[#54656f]">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="border-b border-black/6 px-3 py-2">
        <p className="mb-2 text-[14px] font-semibold text-wa-bg">Status</p>
        <div className="flex gap-2 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-20 shrink-0">
              <div className="aspect-[9/16] rounded-lg bg-[#dfe5e8]" />
              <p className="mt-1 truncate text-center text-[11px] text-[#54656f]">{i === 1 ? 'My status' : i === 2 ? 'Sandra' : 'Marco'}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2">
        <p className="text-[16px] font-semibold text-wa-bg">Channels</p>
        <span className="text-[14px] font-medium text-wa-muted">Explore</span>
      </div>
      <ul className="flex-1 divide-y divide-black/8 overflow-auto text-[14px]">
        {[
          ['WhatsApp', 'Channel update…', '12:21'],
          ['Mark Zuckerberg', 'New video posted', 'Yesterday'],
          ['F1', 'Race highlights', 'Sat'],
        ].map(([name, snippet, time]) => (
          <li key={name} className="flex items-start gap-2.5 px-3 py-2.5">
            <div className="mt-0.5 h-11 w-11 shrink-0 rounded-full bg-[#dfe5e8]" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-wa-bg">
                {name} <VerifiedBadge className="ms-0.5 align-middle" />
              </p>
              <p className="truncate text-[13px] text-[#667781]">{snippet}</p>
            </div>
            <span className="shrink-0 text-[12px] text-[#667781]">{time}</span>
          </li>
        ))}
      </ul>
      <div className="relative flex justify-end gap-3 px-4 pb-4 pt-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/8">
          <svg className="h-5 w-5 text-[#54656f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wa-bg text-white shadow-lg">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
      </div>
      <div className="mt-auto grid grid-cols-4 border-t border-black/8 bg-[#f0f2f5] py-1.5 text-[10px] text-[#54656f]">
        {['Chats', 'Updates', 'Communities', 'Calls'].map((lab, i) => (
          <div key={lab} className={`flex flex-col items-center gap-0.5 ${i === 1 ? 'text-wa-muted' : ''}`}>
            <span className="h-5 w-5 rounded-full bg-current/15" aria-hidden />
            <span className={i === 1 ? 'font-semibold text-wa-muted' : ''}>{lab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Poll + reactions — “Engage” step */
export function ChannelEngageScreen() {
  return (
    <div className="flex h-full flex-col bg-[#efeae2]">
      <div className="flex items-center gap-2 border-b border-black/6 bg-[#f0f2f5] px-3 py-3">
        <span className="text-[#54656f]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-semibold text-wa-bg">Little Lemon</p>
          <p className="text-[11px] text-[#667781]">Channel</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-auto px-2 py-3">
        <div className="ml-auto max-w-[92%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2.5 py-2 shadow-sm">
          <p className="text-[13px] leading-snug text-wa-bg">Which recipe should we film next?</p>
        </div>
        <div className="mx-auto w-full max-w-[94%] rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/[0.06]">
          <div className="flex flex-wrap gap-2">
            {['Pasta', 'Salad', 'Dessert'].map((opt) => (
              <span key={opt} className="rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-medium text-wa-bg">
                {opt}
              </span>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-3 border-t border-black/6 pt-2 text-[18px]">
            <span>👍</span>
            <span>❤️</span>
            <span>🔥</span>
            <span className="text-[12px] font-medium text-[#667781]">128</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Growth / share — “Promote” step */
export function ChannelPromoteScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f0f2f5]">
      <div className="border-b border-black/6 bg-white px-3 py-3">
        <p className="text-center text-[15px] font-semibold text-wa-bg">Channel info</p>
      </div>
      <div className="flex-1 space-y-3 overflow-auto px-3 py-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/[0.06]">
          <p className="text-[12px] font-medium text-[#667781]">Followers</p>
          <p className="mt-1 text-[28px] font-semibold tracking-tight text-wa-bg">24.5K</p>
          <p className="mt-1 flex items-center gap-1 text-[13px] font-semibold text-wa-muted">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            +12% this week
          </p>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-wa-bg bg-[#e7fce3] py-2.5 text-[14px] font-semibold text-wa-bg"
        >
          <svg className="h-5 w-5 text-wa-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share channel link
        </button>
      </div>
    </div>
  );
}

/** Subscriptions — “Earn” step */
export function ChannelEarnScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f0f2f5]">
      <div className="flex items-center gap-2 border-b border-black/6 bg-[#f0f2f5] px-3 py-3">
        <span className="text-[#54656f]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <h2 className="flex-1 text-center text-[16px] font-semibold text-wa-bg">Monetization</h2>
        <span className="w-5" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-4 overflow-auto px-4 pb-6 pt-5">
        <div className="flex items-center justify-between rounded-xl bg-white px-3 py-3 shadow-sm ring-1 ring-black/[0.06]">
          <div>
            <p className="text-[14px] font-semibold text-wa-bg">Subscriptions</p>
            <p className="text-[12px] text-[#667781]">Exclusive updates for subscribers</p>
          </div>
          <span className="relative inline-flex h-7 w-12 items-center rounded-full bg-wa-bg">
            <span className="inline-block h-6 w-6 translate-x-6 rounded-full bg-white shadow" />
          </span>
        </div>
        <div className="rounded-xl bg-white px-3 py-3 shadow-sm ring-1 ring-black/[0.06]">
          <p className="text-[12px] font-medium text-[#667781]">Price</p>
          <p className="mt-1 text-[22px] font-semibold text-wa-bg">
            $4.99 <span className="text-[14px] font-medium text-[#667781]">/ month</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChannelCreateAutoplayPhone({ variant }) {
  switch (variant) {
    case 'engage':
      return <ChannelEngageScreen />;
    case 'promote':
      return <ChannelPromoteScreen />;
    case 'earn':
      return <ChannelEarnScreen />;
    case 'create':
    default:
      return <CreateChannelScreen />;
  }
}

export function CreateChannelScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f0f2f5]">
      <div className="flex items-center gap-2 border-b border-black/6 bg-[#f0f2f5] px-3 py-3">
        <span className="text-wa-bg">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <h2 className="flex-1 text-center text-[16px] font-semibold text-wa-bg">Create channel</h2>
        <span className="w-5" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-4 overflow-auto px-4 pb-6 pt-6">
        <div className="relative mx-auto">
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-wa-muted/30">
            <span className="text-3xl" aria-hidden>
              🍋
            </span>
          </div>
          <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-wa-bg text-white shadow-md">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
        </div>
        <div className="rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-black/6">
          <label className="text-[12px] font-medium text-[#667781]">Channel name</label>
          <div className="mt-1 flex items-center gap-2">
            <p className="flex-1 text-[15px] font-medium text-wa-bg">Little Lemon</p>
            <span className="text-[12px] text-[#8696a0]">0/100</span>
          </div>
        </div>
        <div className="min-h-[88px] rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-black/6">
          <p className="text-[14px] leading-relaxed text-wa-bg">
            Simple, tasty recipes for busy home cooks who don&apos;t want to compromise. 🥗
          </p>
        </div>
        <button type="button" className="mt-2 w-full rounded-full bg-wa-bg py-3 text-[15px] font-semibold text-white shadow-sm">
          Create channel
        </button>
      </div>
      <div className="grid grid-cols-[repeat(10,1fr)] gap-1 border-t border-black/10 bg-[#d1d7db] px-1 pb-2 pt-2 text-[11px] font-medium text-wa-bg">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((k) => (
          <span key={k} className="rounded bg-white py-2 text-center shadow-sm">
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Channel post + floating explore card — used in hero */
export function ChannelHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,380px)]">
      <PhoneChromeFrame>
        <div className="relative flex h-full flex-col bg-[#efeae2]">
          <div className="flex items-center gap-2 border-b border-black/6 bg-[#f0f2f5] px-2 py-2">
            <span className="rounded-full p-1 text-[#54656f]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            <div className="h-9 w-9 shrink-0 rounded-full bg-[#cfd8dc]" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-semibold text-wa-bg">Football Club</p>
              <p className="text-[11px] text-[#667781]">Channel</p>
            </div>
          </div>
          <div className="flex-1 overflow-auto px-2 py-3">
            <div className="relative overflow-hidden rounded-xl bg-black/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1521412644185-c49fa049e84d?w=600&h=450&fit=crop&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-lg">
                <span>🔥</span>
                <span>👏</span>
                <span>❤️</span>
              </div>
            </div>
            <div className="mt-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/6">
              <p className="text-[13px] font-medium text-wa-bg">Which kit are you repping tomorrow?</p>
              <ul className="mt-2 space-y-1.5 text-[13px] text-[#54656f]">
                <li className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-wa-bg" /> Home
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-full border border-[#bcc4c9]" /> Away
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PhoneChromeFrame>

      <div className="pointer-events-none absolute -left-2 top-[18%] z-10 w-[min(92%,300px)] rounded-2xl bg-white p-3 shadow-[0_18px_48px_rgba(11,34,42,0.18)] ring-1 ring-black/[0.06] sm:-left-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[13px] font-semibold text-wa-bg">Explore channels</p>
          <div className="flex gap-1 text-[#54656f]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </div>
        </div>
        <div className="flex gap-1 overflow-hidden pb-2">
          {['Explore', 'Popular'].map((t) => (
            <span
              key={t}
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                t === 'Explore' ? 'bg-wa-bg text-white' : 'bg-[#f0f2f5] text-[#54656f]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {EXPLORE_CHANNELS.slice(0, 2).map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <div className="h-8 w-8 shrink-0 rounded-full bg-[#dfe5e8]" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-wa-bg">{c.name}</p>
                <p className="text-[10px] text-[#667781]">{c.followers}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
