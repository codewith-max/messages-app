'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantLogOutOfWhatsappArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t log out of WhatsApp
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you&apos;re using WhatsApp Web, WhatsApp Desktop, or Portal, you can log out of WhatsApp.
        </p>
        <p className="mt-2">
          There&apos;s no way to log out of WhatsApp if you&apos;re on Android or iPhone. WhatsApp will automatically
          revert to standby mode if you exit the app or turn off your phone&apos;s screen, but you&apos;ll continue to
          receive messages and calls.
        </p>
        <p className="mt-3">
          We understand this might raise concerns about battery life and mobile data usage, but WhatsApp strives to
          conserve your battery and data usage as much as possible.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <p className="mt-3">
            How to{' '}
            <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
              unlink a device
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
