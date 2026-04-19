import Link from 'next/link';
import { CALLING_HELP_FAQ } from '../../content/callingPageSections';

export default function CallingNeedHelpSection() {
  return (
    <section
      className="border-b border-wa-muted/15 bg-[#ffffff] px-4 py-14 sm:px-6 md:py-16 lg:px-8"
      aria-labelledby="calling-help-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="calling-help-heading" className="text-[32px] font-semibold tracking-tight text-wa-bg sm:text-[36px] md:text-[40px]">
            Need more help?
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 self-start text-[15px] font-semibold text-wa-bg underline decoration-wa-bg underline-offset-[5px] transition hover:text-wa-muted hover:decoration-wa-muted sm:self-auto"
          >
            See all FAQs
            <svg className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
            </svg>
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-[#d1d7db] border-t border-[#d1d7db]" role="list">
          {CALLING_HELP_FAQ.map((item) => (
            <li key={item.id}>
              <Link
                href="#"
                className="group flex items-center gap-3 py-4 text-[16px] text-wa-bg transition hover:text-wa-muted md:text-[17px]"
              >
                <span className="text-wa-bg/50 transition group-hover:text-wa-muted" aria-hidden>
                  ›
                </span>
                <span className="font-medium">{item.question}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
