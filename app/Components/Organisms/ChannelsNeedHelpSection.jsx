import Link from 'next/link';
import { CHANNELS_FAQ } from '../../content/channelsFaq';

export default function ChannelsNeedHelpSection() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-[#f7f4f0] px-4 py-14 sm:px-6 md:py-16 lg:px-10"
      aria-labelledby="channels-help-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="channels-help-heading" className="text-[32px] font-semibold tracking-tight text-wa-bg sm:text-[36px] md:text-[40px]">
            Need more help?
          </h2>
          <Link
            href="/help-center"
            className="inline-flex items-center gap-1.5 self-start text-[15px] font-semibold text-wa-muted transition hover:text-wa-muted sm:self-auto"
          >
            See all FAQs
            <svg className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
            </svg>
          </Link>
        </div>

        <ul className="mt-10 flex flex-col gap-4" role="list">
          {CHANNELS_FAQ.map((item) => (
            <li key={item.id}>
              <Link
                href="/help-center"
                className="group flex items-center justify-between gap-4 rounded-[22px] bg-white px-5 py-5 text-left shadow-[0_4px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.06] transition hover:ring-wa-muted/40 md:px-6 md:py-6"
              >
                <span className="text-[15px] font-medium leading-snug text-wa-bg md:text-[17px]">{item.question}</span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wa-bg text-white shadow-sm transition group-hover:bg-wa-muted">
                  <svg className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H7m10 0v10" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
