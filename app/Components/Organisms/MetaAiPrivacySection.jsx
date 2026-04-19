import Image from 'next/image';
import Link from 'next/link';

export default function MetaAiPrivacySection() {
  return (
    <section
      className="bg-wa-bg px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      aria-labelledby="meta-ai-privacy-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=960&h=1200&fit=crop&q=80"
              alt="Person using WhatsApp on a phone"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
          <div className="pointer-events-none absolute left-4 top-6 right-4 sm:left-6 sm:right-6 sm:top-8">
            <div className="rounded-2xl bg-white/95 px-3 py-2.5 shadow-xl ring-1 ring-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#22d3ee] via-[#a78bfa] to-[#f472b6]"
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-wa-bg">Meta AI</p>
                  <p className="text-[10px] text-[#667781]">Visible only to you</p>
                </div>
              </div>
              <ul className="mt-2 space-y-1 text-[10px] leading-snug text-wa-bg/90">
                <li>• Quick recap of what the group decided</li>
                <li>• Suggested times that work across time zones</li>
              </ul>
              <div className="mt-2 flex items-center justify-between border-t border-[#e9edef] pt-2 text-[9px] text-[#667781]">
                <span className="inline-flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  Private Processing
                </span>
                <span className="flex gap-1" aria-hidden>
                  <span className="opacity-50">👍</span>
                  <span className="opacity-50">👎</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-8 left-4 right-4 sm:bottom-10 sm:left-6 sm:right-6">
            <div className="ml-auto max-w-[88%] rounded-xl rounded-br-sm bg-[#d9fdd3] px-3 py-2 shadow-lg">
              <p className="text-[11px] text-wa-bg">What are my plans this weekend?</p>
              <p className="mt-1 text-right text-[9px] text-[#667781]">12:30 ✓✓</p>
            </div>
            <div className="mt-2 max-w-[92%] rounded-xl rounded-bl-sm bg-white px-3 py-2 shadow-lg">
              <p className="text-[10px] leading-snug text-wa-bg">
                You have two things on Saturday: a reminder at <span className="font-semibold">8:00</span> and dinner
                around <span className="font-semibold">5:00</span> — want a quick summary for Sunday too?
              </p>
              <p className="mt-1.5 flex items-center gap-1 text-[9px] text-[#667781]">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" />
                </svg>
                Private Processing
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <h2 id="meta-ai-privacy-heading" className="text-[34px] font-bold leading-[1.15] text-white sm:text-[40px] md:text-[44px]">
            Use AI safely and privately
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/85 md:text-[18px]">
            WhatsApp is built for your private conversations — including experiences that use AI. Your personal messages
            and calls stay protected with end-to-end encryption, and Meta AI features use safeguards designed with privacy
            in mind.
          </p>
          <Link
            href="/privacy"
            className="mt-8 inline-flex items-center gap-1 text-[16px] font-semibold text-wa-muted transition-colors hover:text-[#34e47b] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-wa-bg"
          >
            Learn more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
