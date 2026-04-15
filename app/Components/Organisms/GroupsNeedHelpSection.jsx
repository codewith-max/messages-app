import Link from 'next/link';
import { GROUPS_HELP_FAQ } from '../../content/groupsPageContent';

function ExternalArrowIcon() {
  return (
    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H7m10 0v10" />
    </svg>
  );
}

export default function GroupsNeedHelpSection() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#F8F4EB] px-4 py-14 sm:px-6 md:py-16 lg:px-8"
      aria-labelledby="groups-help-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="groups-help-heading"
            className="text-center text-[32px] font-semibold tracking-tight text-[#111b21] sm:text-left sm:text-[36px] md:text-[40px]"
          >
            Need more help?
          </h2>
          <Link
            href="/help-center"
            className="inline-flex items-center justify-center gap-1.5 self-center text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5c] sm:self-auto"
          >
            See all FAQs
            <svg className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
            </svg>
          </Link>
        </div>
        <ul className="mt-10 flex flex-col gap-3 sm:gap-4" role="list">
          {GROUPS_HELP_FAQ.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-[1.25rem] bg-white px-5 py-4 shadow-[0_2px_16px_rgba(17,27,33,0.06)] ring-1 ring-black/[0.05] transition hover:ring-[#25D366]/30 sm:px-6 sm:py-5"
              >
                <span className="min-w-0 flex-1 text-[15px] font-medium leading-snug text-[#111b21] sm:text-[16px] md:text-[17px]">
                  {item.question}
                </span>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition group-hover:bg-[#20bd5c]"
                  aria-hidden
                >
                  <ExternalArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
