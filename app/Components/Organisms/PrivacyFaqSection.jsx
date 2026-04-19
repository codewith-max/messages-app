import Link from 'next/link';
import { faqIntro, faqItems } from '../../content/privacyPageContent';

function ExternalCircleIcon({ highlighted }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
        highlighted
          ? 'border-wa-bg/25 bg-wa-bg/10 text-wa-bg'
          : 'border-white/25 bg-[#1f2c34] text-white group-hover:border-wa-bg/60 group-hover:text-wa-muted'
      }`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
      </svg>
    </span>
  );
}

export default function PrivacyFaqSection() {
  return (
    <section
      className="border-t border-white/[0.06] bg-wa-bg px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28"
      aria-labelledby="privacy-faq-heading"
    >
      <div className="mx-auto max-w-[800px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 id="privacy-faq-heading" className="text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[44px] md:text-[52px]">
            <span className="block text-white">{faqIntro.lines[0].text}</span>
            <span className="mt-1 block text-wa-muted">{faqIntro.lines[1].text}</span>
          </h2>
          <Link
            href={faqIntro.seeAllHref}
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-white transition hover:text-wa-muted"
          >
            See all FAQs
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>

        <ul className="flex flex-col gap-3">
          {faqItems.map((item) => (
            <li key={item.question}>
              <Link
                href={item.href}
                className={`group flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 transition sm:px-6 sm:py-5 ${
                  item.highlighted
                    ? 'border-wa-muted/40 bg-wa-muted text-white hover:bg-wa-bg'
                    : 'border-white/[0.08] bg-[#1f2c34] text-white hover:border-white/20 hover:bg-[#25303a]'
                }`}
              >
                <span className="text-left text-[15px] font-medium leading-snug sm:text-[16px]">{item.question}</span>
                <ExternalCircleIcon highlighted={item.highlighted} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
