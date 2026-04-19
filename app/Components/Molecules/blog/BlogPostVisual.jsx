/**
 * Decorative left-column visuals for blog cards (CSS-only, no image assets).
 */

function BeigeCard({ children, className = '' }) {
  return (
    <div
      className={`relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#f5ebe0] p-6 ring-1 ring-black/[0.06] sm:min-h-[260px] ${className}`}
    >
      <svg
        className="absolute bottom-3 left-3 h-7 w-7 text-wa-muted"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      {children}
    </div>
  );
}

export default function BlogPostVisual({ variant, pills = [] }) {
  if (variant === 'featureGrid') {
    return (
      <BeigeCard>
        <div className="grid w-full max-w-[280px] grid-cols-2 gap-3">
          {pills.length
            ? pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-wa-bg px-3 py-1.5 text-center text-[11px] font-semibold text-white shadow-sm"
                >
                  {p}
                </span>
              ))
            : null}
          <div className="col-span-2 mt-2 grid grid-cols-2 gap-2 rounded-xl bg-white/80 p-3 shadow-sm">
            <div className="h-16 rounded-lg bg-[#d9fdd3]" />
            <div className="h-16 rounded-lg bg-[#e5e7ea]" />
          </div>
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'parentPhones') {
    return (
      <BeigeCard>
        <p className="absolute left-6 top-6 max-w-[120px] text-[13px] font-bold leading-snug text-wa-bg">Parent-managed accounts</p>
        <div className="flex gap-2 pl-16">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-40 w-[72px] rounded-xl border-4 border-[#1f2c34] bg-wa-bg shadow-lg"
              style={{ transform: `rotate(${-6 + i * 6}deg) translateY(${i * 4}px)` }}
            />
          ))}
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'groupChat') {
    return (
      <BeigeCard>
        <div className="w-full max-w-[240px] rounded-2xl border border-black/10 bg-white p-3 shadow-md">
          <div className="flex gap-2 border-b border-black/5 pb-2">
            <div className="h-9 w-9 rounded-full bg-wa-bg/30" />
            <div>
              <div className="h-2 w-24 rounded bg-[#e5e7ea]" />
              <div className="mt-1 h-2 w-16 rounded bg-[#eef2f4]" />
            </div>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1.5 text-[10px] text-wa-bg">New messages while you were away…</div>
            <div className="h-2 w-full rounded bg-[#eef2f4]" />
            <div className="h-2 w-[80%] rounded bg-[#eef2f4]" />
          </div>
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'settingsPhone') {
    return (
      <BeigeCard>
        <div className="h-48 w-28 rounded-[1.25rem] border-[6px] border-[#1f2c34] bg-white p-2 shadow-xl">
          <p className="text-[9px] font-bold text-wa-bg">Strict account settings</p>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between rounded-lg bg-[#eef2f4] px-2 py-1 text-[8px]">
              <span>2FA</span>
              <span className="h-3 w-6 rounded-full bg-wa-bg" />
            </div>
            <div className="h-8 rounded-lg bg-[#eef2f4]" />
          </div>
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'tagsMock') {
    return (
      <BeigeCard className="bg-[#e8f5e9]">
        <div className="relative h-44 w-32 rounded-2xl border-4 border-[#1f2c34] bg-[#eef2f4] p-2 shadow-lg">
          <span className="absolute -right-2 -top-2 rounded-full bg-wa-bg px-2 py-0.5 text-[8px] font-bold text-white">@member</span>
          <div className="mt-6 h-6 w-full rounded bg-white/90 shadow-inner" />
          <div className="mt-2 flex gap-1">
            <span className="rounded bg-[#d9fdd3] px-1.5 py-0.5 text-[7px]">Sticker</span>
          </div>
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'celebration') {
    return (
      <BeigeCard>
        <div className="flex flex-wrap justify-center gap-2">
          {['NYE Pack', 'Calling FX', 'Status'].map((t) => (
            <span key={t} className="rounded-lg border border-wa-muted/40 bg-white px-2 py-1 text-[10px] font-medium text-wa-bg shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'statusStickers') {
    return (
      <BeigeCard>
        <div className="flex gap-3">
          <div className="h-36 w-20 rounded-xl border-4 border-[#1f2c34] bg-gradient-to-b from-[#7b5cbf] to-[#4a2c8a]" />
          <div className="flex flex-col justify-center gap-2">
            <div className="h-10 w-10 rounded-full bg-wa-bg/30" />
            <div className="h-10 w-10 rounded-full bg-[#ffd166]/40" />
          </div>
        </div>
      </BeigeCard>
    );
  }

  if (variant === 'watch') {
    return (
      <BeigeCard>
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24 rounded-full border-[10px] border-[#333] bg-black shadow-xl ring-4 ring-[#555]">
            <div className="absolute inset-2 rounded-full bg-wa-bg p-1">
              <div className="h-full w-full rounded-full bg-wa-bg/20" />
            </div>
          </div>
          <p className="mt-3 text-center text-[12px] font-bold text-wa-bg">WhatsApp on Apple Watch</p>
        </div>
      </BeigeCard>
    );
  }

  return (
    <BeigeCard>
      <div className="h-36 w-28 rounded-2xl border-4 border-[#1f2c34] bg-wa-bg shadow-lg" />
    </BeigeCard>
  );
}
