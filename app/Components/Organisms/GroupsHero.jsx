import Image from 'next/image';

function collageShadow() {
  return 'shadow-[0_16px_40px_-12px_rgba(17,27,33,0.22)] ring-1 ring-black/[0.04]';
}

function MegaphoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6H6a1.5 1.5 0 00-1.5 1.5v9A1.5 1.5 0 006 18h4.5m0-12l7.5-3v18l-7.5-3m0-12v12"
      />
    </svg>
  );
}

function NeighboursNotificationCard() {
  return (
    <div
      className={`flex items-start gap-3 rounded-[1.25rem] bg-white p-3.5 sm:p-4 ${collageShadow()}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f5eb] text-[#25D366]">
        <MegaphoneIcon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-tight text-[#111b21] sm:text-[14px]">8 Main St. Neighbours</p>
        <p className="mt-0.5 text-[12px] font-medium text-[#25D366] sm:text-[13px]">Alex added You</p>
      </div>
      <span className="shrink-0 text-[11px] tabular-nums text-[#8696a0]">13:37</span>
    </div>
  );
}

function AnniversaryCard() {
  return (
    <div className={`flex items-start gap-3 rounded-[1.25rem] bg-white p-3.5 sm:p-4 ${collageShadow()}`}>
      <div className="flex -space-x-2" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[#7dd3a8] to-[#25D366]"
          />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold text-[#111b21] sm:text-[14px]">Neighborhood Anniversary</p>
        <p className="mt-0.5 text-[12px] leading-snug text-[#667781] sm:text-[13px]">
          Michael, Dwight, Erin &amp; 40 others
        </p>
      </div>
      <button
        type="button"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#8696a0] transition-colors hover:bg-black/[0.05]"
        aria-label="Dismiss"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

function BestFriendsPhoneMockup() {
  return (
    <div
      className={`relative mx-auto flex h-full min-h-[280px] w-full max-w-[200px] flex-col overflow-hidden rounded-[1.75rem] bg-[#efeae2] sm:max-w-[220px] sm:min-h-[320px] lg:max-w-[240px] lg:min-h-[360px] ${collageShadow()}`}
    >
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#f0f2f5] px-3 py-2.5">
        <span className="text-[#54656f]">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1 text-center">
          <p className="truncate text-[13px] font-semibold text-[#111b21]">Best Friends Group</p>
        </div>
        <span className="w-5 shrink-0" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden p-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#d1d7db]">
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop"
            alt=""
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
        <div className="rounded-lg bg-white px-2.5 py-2 shadow-sm">
          <p className="text-[12px] text-[#111b21]">
            Adopted a kitten! <span aria-hidden>😻</span>
          </p>
          <p className="mt-1 text-right text-[10px] text-[#667781]">10:42</p>
        </div>
        <div className="ms-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2.5 py-2">
          <p className="text-[12px] text-[#111b21]">So cute!!</p>
          <p className="mt-0.5 text-right text-[10px] text-[#667781]">10:43</p>
        </div>
      </div>
    </div>
  );
}

export default function GroupsHero() {
  return (
    <section
      className="border-b border-[#cfe9d6] bg-[#E9F6EC] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:px-8 lg:pb-20 lg:pt-14"
      aria-labelledby="groups-hero-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <h1
          id="groups-hero-heading"
          className="mx-auto max-w-[920px] text-center text-[28px] font-semibold leading-[1.15] tracking-tight text-[#111b21] sm:text-[36px] md:text-[42px] lg:text-[44px]"
        >
          WhatsApp group messaging brings everyone together, whether you&apos;re planning a wedding, doing a group
          project, or just catching up.
        </h1>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          {/* Mobile / tablet: stacked collage */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:hidden">
            <NeighboursNotificationCard />
            <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.25rem] ${collageShadow()}`}>
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=600&fit=crop"
                alt="Friends celebrating outdoors by a lake"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className={`relative aspect-[3/4] overflow-hidden rounded-[1.25rem] ${collageShadow()}`}>
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=520&fit=crop"
                  alt="Couple hiking on a trail"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <BestFriendsPhoneMockup />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className={`relative aspect-square overflow-hidden rounded-[1.25rem] ${collageShadow()}`}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Portrait outdoors"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className={`relative aspect-square overflow-hidden rounded-[1.25rem] ${collageShadow()}`}>
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop"
                  alt="Mountain landscape"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
            <div className={`relative aspect-[3/2] overflow-hidden rounded-[1.25rem] ${collageShadow()}`}>
              <Image
                src="https://images.unsplash.com/photo-1504280396297-ee8c4e1023d7?w=800&h=500&fit=crop"
                alt="Group walking on a nature trail"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <AnniversaryCard />
          </div>

          {/* Desktop: asymmetrical grid collage */}
          <div className="hidden min-h-[420px] gap-3 lg:grid lg:grid-cols-12 lg:gap-4 lg:items-stretch">
            {/* Col 1: tall hikers + small trail */}
            <div className="col-span-2 row-span-3 flex flex-col gap-3 lg:row-span-3">
              <div className={`relative min-h-[200px] flex-1 overflow-hidden rounded-[1.5rem] ${collageShadow()}`}>
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=700&fit=crop"
                  alt="Couple hiking on a trail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 16vw, 180px"
                  priority
                />
              </div>
              <div className={`relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${collageShadow()}`}>
                <Image
                  src="https://images.unsplash.com/photo-1504280396297-ee8c4e1023d7?w=400&h=500&fit=crop"
                  alt="Group walking on a trail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 16vw, 180px"
                />
              </div>
            </div>

            {/* Col 2–5: notification + wide hero photo */}
            <div className="col-span-5 row-span-3 flex flex-col gap-3">
              <NeighboursNotificationCard />
              <div className={`relative min-h-[220px] flex-1 overflow-hidden rounded-[1.5rem] ${collageShadow()}`}>
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&h=600&fit=crop"
                  alt="Friends celebrating on a hill overlooking water"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 42vw, 520px"
                  priority
                />
              </div>
            </div>

            {/* Col 6–8: phone */}
            <div className="col-span-3 row-span-3 flex items-stretch justify-center">
              <BestFriendsPhoneMockup />
            </div>

            {/* Col 9–12: 2 squares + tall boots + anniversary */}
            <div className="col-span-2 row-span-3 flex flex-col gap-3">
              <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-3">
                <div className={`relative col-start-1 row-start-1 aspect-square overflow-hidden rounded-[1.5rem] ${collageShadow()}`}>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Person in a green jacket outdoors"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 12vw, 140px"
                  />
                </div>
                <div
                  className={`relative col-start-2 row-span-2 row-start-1 min-h-[180px] overflow-hidden rounded-[1.5rem] ${collageShadow()}`}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=800&fit=crop"
                    alt="Hiking boots and mountain view"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 12vw, 200px"
                  />
                </div>
                <div className={`relative col-start-1 row-start-2 aspect-square overflow-hidden rounded-[1.5rem] ${collageShadow()}`}>
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                    alt="Hiker on a mountain path"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 12vw, 140px"
                  />
                </div>
              </div>
              <AnniversaryCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
