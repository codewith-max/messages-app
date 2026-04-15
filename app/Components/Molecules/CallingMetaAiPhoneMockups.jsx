import PhoneChromeFrame from './PhoneChromeFrame';

function ChatHeader({ title, subtitle }) {
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-black/[0.06] bg-[#f0f2f5] px-2 py-2">
      <span className="text-[#54656f]">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </span>
      <div className="min-w-0 flex-1 text-center">
        <p className="truncate text-[12px] font-semibold text-[#111b21]">{title}</p>
        {subtitle ? <p className="truncate text-[10px] text-[#667781]">{subtitle}</p> : null}
      </div>
      <span className="text-[#54656f]">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </span>
    </div>
  );
}

function ChatComposer() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 border-t border-black/[0.06] bg-[#f0f2f5] px-2 py-2">
      <div className="flex h-8 flex-1 items-center rounded-full bg-white px-2 text-[10px] text-[#8696a0]">Message</div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    </div>
  );
}

function MetaAiAvatar() {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] via-[#a78bfa] to-[#f472b6] shadow-sm ring-1 ring-white"
      aria-hidden
    />
  );
}

function MetaAiLabelRow() {
  return (
    <div className="flex items-center gap-1.5">
      <MetaAiAvatar />
      <span className="text-[11px] font-semibold text-[#25D366]">Meta AI</span>
    </div>
  );
}

function MockupTravelClubAi() {
  return (
    <PhoneChromeFrame>
      <ChatHeader title="Travel club" subtitle="Jordan, Selina, Meta AI" />
      <div className="absolute inset-x-0 bottom-0 top-[44px] overflow-y-auto px-2 pb-14 pt-2">
        <div className="mb-2 flex justify-end">
          <div className="max-w-[92%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1.5 shadow-sm">
            <p className="text-[11px] text-[#111b21]">Anyone have budget-friendly ideas for Europe this summer?</p>
            <p className="mt-0.5 text-right text-[9px] text-[#667781]">Jordan · 10:12</p>
          </div>
        </div>
        <div className="mb-2 flex justify-end">
          <div className="max-w-[92%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1.5 shadow-sm">
            <p className="text-[11px] text-[#111b21]">Yes — trains + hostels could work if we pick 2 cities max.</p>
            <p className="mt-0.5 text-right text-[9px] text-[#667781]">Selina · 10:14</p>
          </div>
        </div>
        <div className="mb-2 flex justify-start">
          <div className="max-w-[94%] rounded-lg rounded-tl-sm bg-white px-2.5 py-2 shadow-sm ring-1 ring-black/[0.05]">
            <div className="mb-1">
              <MetaAiLabelRow />
            </div>
            <p className="text-[10px] leading-snug text-[#111b21]">
              Here are a few budget-friendly spots groups often like — rough per-day estimates, flights not included:
            </p>
            <ul className="mt-1.5 space-y-1 text-[10px] leading-snug text-[#111b21]/95">
              <li>
                <span className="font-semibold">Lisbon</span> — food markets & trams · ~$65–95/day
              </li>
              <li>
                <span className="font-semibold">Kraków</span> — walkable old town · ~$55–80/day
              </li>
              <li>
                <span className="font-semibold">Athens</span> — islands by ferry · ~$70–100/day
              </li>
            </ul>
            <p className="mt-1.5 text-[9px] text-[#667781]">Tap to ask follow-ups or compare two cities.</p>
          </div>
        </div>
      </div>
      <ChatComposer />
    </PhoneChromeFrame>
  );
}

function MockupCreateImagine() {
  return (
    <PhoneChromeFrame>
      <ChatHeader title="Birthday crew" />
      <div className="absolute inset-x-0 bottom-0 top-[44px] overflow-y-auto px-2 pb-14 pt-2">
        <div className="mb-2 flex justify-end">
          <div className="max-w-[90%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1.5 shadow-sm">
            <p className="text-[11px] text-[#111b21]">@Meta AI can you make a fun invite image — cake + confetti, teal background?</p>
          </div>
        </div>
        <div className="mb-2 flex justify-start">
          <div className="max-w-[94%] space-y-2 rounded-lg rounded-tl-sm bg-white px-2 py-2 shadow-sm ring-1 ring-black/[0.05]">
            <MetaAiLabelRow />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-[#99f6e4] via-[#5eead4] to-[#14b8a6]" />
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-[#c4b5fd] via-[#a78bfa] to-[#7c3aed]" />
            </div>
            <p className="text-[10px] text-[#667781]">Pick one to send, or ask for tweaks.</p>
          </div>
        </div>
      </div>
      <ChatComposer />
    </PhoneChromeFrame>
  );
}

function MockupConnectEasily() {
  return (
    <PhoneChromeFrame>
      <ChatHeader title="Weekend plans" subtitle="12 members" />
      <div className="absolute inset-x-0 bottom-0 top-[44px] overflow-y-auto px-2 pb-14 pt-2">
        <div className="mb-3 rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.06]">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#25D366]">Poll</p>
          <p className="mt-1 text-[12px] font-semibold text-[#111b21]">Best time for a quick call?</p>
          <div className="mt-2 space-y-1.5">
            {['Sat 10am', 'Sat 4pm', 'Sun 11am'].map((t) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-lg border border-[#e2e8eb] bg-[#f8f9fa] px-2 py-1.5 text-[11px] text-[#111b21]"
              >
                <span>{t}</span>
                <span className="text-[10px] text-[#667781]">12 votes</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[94%] rounded-lg rounded-tl-sm bg-white px-2.5 py-2 shadow-sm ring-1 ring-black/[0.05]">
            <div className="mb-1">
              <MetaAiLabelRow />
            </div>
            <p className="text-[10px] leading-snug text-[#111b21]">
              Summary: most people prefer <span className="font-semibold">Saturday 4pm</span>. Want me to draft a short message you can send?
            </p>
          </div>
        </div>
      </div>
      <ChatComposer />
    </PhoneChromeFrame>
  );
}

export function CallingMetaAiActiveMockup({ mockupKey }) {
  switch (mockupKey) {
    case 'travel-club-ai':
      return <MockupTravelClubAi />;
    case 'create-imagine':
      return <MockupCreateImagine />;
    case 'connect-easily':
      return <MockupConnectEasily />;
    default:
      return <MockupTravelClubAi />;
  }
}
