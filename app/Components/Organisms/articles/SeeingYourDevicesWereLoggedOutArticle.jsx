'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function SeeingYourDevicesWereLoggedOutArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Seeing &quot;Your devices were logged out&quot;
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          We logged you out of your linked devices due to an unexpected issue with syncing data from your phone.
          Protecting the privacy of your messages is important to us. When we can&apos;t verify your data is syncing
          properly between devices, we automatically log you out as an extra precaution.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-link-a-device?platform=android">
                How to link a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-message-history-on-linked-devices">
                About message history on linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
                How to unlink a device
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
