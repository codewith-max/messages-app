import Link from 'next/link';
import { MESSAGING_FAQ_SIMPLE_LINKS } from '../../content/messagingFaqList';

export default function MessagingFaqListSection() {
  const items = MESSAGING_FAQ_SIMPLE_LINKS;

  return (
    <section
      className="border-t border-[#e8e4dc] bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
      aria-labelledby="messaging-faq-list-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="messaging-faq-list-heading" className="sr-only">
          Messaging FAQs
        </h2>
        <ul className="divide-y divide-[#d1d7db]">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-4 py-5 text-left text-[17px] font-normal text-[#111b21] transition hover:text-[#25D366] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                <span className="min-w-0 leading-snug">{item.question}</span>
                <span className="shrink-0 text-[#111b21]/50 transition group-hover:text-[#25D366]" aria-hidden>
                  ›
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
