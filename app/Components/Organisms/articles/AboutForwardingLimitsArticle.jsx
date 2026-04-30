'use client';

import Image from 'next/image';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutForwardingLimitsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About forwarding limits
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>You can forward messages to up to five chats at a time.</p>
        <p className="mt-3">
          If a message has already been forwarded multiple times, it may be marked as{' '}
          <span className="font-semibold text-[#111b21]">Forwarded many times</span> and can only be forwarded to one
          chat at a time.
        </p>

        <div className="mt-6">
          <Image
            src="/image/chatfaq.png"
            alt="Forwarded vs Forwarded many times comparison"
            width={1024}
            height={591}
            className="h-auto w-full rounded-md"
            priority
          />
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Forwarded and end-to-end encryption</h2>
          <p className="mt-3">
            WhatsApp messages are still end-to-end encrypted when forwarded. Forwarding limits are designed to slow down
            viral message spread and keep conversations more personal.
          </p>
          <p className="mt-3">
            Learn more about <Link className={linkClass} href="/help-center/safety-security">end-to-end encryption</Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Troubleshooting issues with forwarding limits</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Update WhatsApp to the latest version.</li>
            <li>Try copying and pasting text to send as a new message.</li>
            <li>Make sure your internet connection is stable.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-forward-messages">
                How to forward messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-delete-messages">
                How to delete messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
