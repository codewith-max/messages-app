import Image from 'next/image';

export default function StatusConnectSection() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-[#FCF5EB] px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      aria-labelledby="status-connect-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:gap-16 xl:gap-20">
        <div className="w-full max-w-xl flex-1">
          <h2 id="status-connect-heading" className="text-[34px] font-semibold leading-[1.1] text-wa-bg sm:text-[40px] md:text-[44px]">
            Connect with friends and family
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
            Keep everyone you love in the loop and mention them in your status when you have something you want them to
            see. They can react and reply to start a conversation.
          </p>
        </div>

        <div className="relative w-full max-w-[min(100%,380px)] flex-shrink-0 lg:max-w-[400px]">
          <div className="relative aspect-[9/15] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_50px_-24px_rgba(11,34,42,0.38)] ring-1 ring-black/[0.06] sm:rounded-[2.25rem]">
            <Image
              src="https://images.unsplash.com/photo-1529152266899-06ebaab8c7a3?w=800&h=1333&fit=crop&q=80"
              alt="Group of friends"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) min(92vw, 380px), 400px"
            />
            <div className="absolute left-[8%] right-[8%] top-[10%] flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-11 w-11 overflow-hidden rounded-full border-2 bg-white/90 ${
                    i < 3 ? 'border-wa-bg' : 'border-white/80'
                  }`}
                >
                  <div className="h-full w-full bg-gradient-to-br from-[#cfd8dc] to-[#90a4ae]" />
                </div>
              ))}
            </div>
            <span className="absolute left-[12%] top-[32%] text-2xl drop-shadow" aria-hidden>
              💚
            </span>
            <span className="absolute right-[15%] top-[40%] text-2xl drop-shadow" aria-hidden>
              💚
            </span>
            <span className="absolute bottom-[38%] left-[20%] text-4xl" aria-hidden>
              🥤
            </span>
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent px-3 pb-4 pt-10">
              <div className="flex items-center gap-2 rounded-full bg-[#1f2c33]/95 px-3 py-2.5 ring-1 ring-white/10">
                <span className="ps-1 text-[15px] text-[#8696a0]">Reply…</span>
                <span className="ms-auto flex h-9 w-9 items-center justify-center rounded-full bg-wa-bg">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
