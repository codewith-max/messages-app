import Link from 'next/link';
import { MetaAiTimezoneMockup } from '../Molecules/CallingMetaAiPhoneMockups';

export default function MetaAiAskAnythingSection() {
  return (
    <section
      className="border-b border-[#e3e5de] bg-[#F7F8F2] px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      aria-labelledby="meta-ai-ask-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <MetaAiTimezoneMockup />
        </div>
        <div className="order-1 min-w-0 lg:order-2">
          <h2
            id="meta-ai-ask-heading"
            className="text-[32px] font-bold leading-[1.12] tracking-tight text-wa-bg sm:text-[38px] md:text-[42px]"
          >
            Ask about anything
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-wa-bg/85 md:text-[18px]">
            Chat with Meta AI to learn, create, and explore. From researching your next trip to wording a message for the
            group, Meta AI can help right where you already chat.
          </p>
          <Link
            href="/help-center"
            className="mt-6 inline-flex items-center gap-1 text-[16px] font-semibold text-wa-muted transition-colors hover:text-wa-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8F2]"
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
