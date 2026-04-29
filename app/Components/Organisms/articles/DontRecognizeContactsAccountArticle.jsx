'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function DontRecognizeContactsAccountArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Don&apos;t recognize contact&apos;s account
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Whenever someone switches phone numbers, you should make sure to delete their old number from your phone&apos;s
          address book. Since mobile providers recycle numbers, you might incorrectly identify an account in WhatsApp as
          your friend&apos;s account, but the number belongs to the new owner of the phone number.
        </p>
        <p className="mt-3">
          WhatsApp only uses phone numbers to identify accounts and displays the names saved in your address book for
          those contacts.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-change-your-phone-number">
                How to change your phone number
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-changing-phone-numbers">
                About changing phone numbers
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/contact-names-missing?platform=android">
                Contact names missing
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
