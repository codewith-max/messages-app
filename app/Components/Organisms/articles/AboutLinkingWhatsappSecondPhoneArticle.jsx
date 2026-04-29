'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/about-linking-whatsapp-to-a-second-phone';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[220px] border-b border-black/[0.1]" role="tablist" aria-label="Choose your device">
      <Link className={getClass('android')} href={`${BASE}?platform=android`} role="tab" aria-selected={platform === 'android'}>
        Android
        {isActive('android') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('ios')} href={`${BASE}?platform=ios`} role="tab" aria-selected={platform === 'ios'}>
        iOS
        {isActive('ios') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
    </div>
  );
}

function KnownIssueNotice() {
  return (
    <div className="mt-6 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6 text-[#3b4a54]">
      There&apos;s a known issue for some linked devices not displaying up to one year of chat history. We&apos;re
      working to fix this as soon as possible. In the meantime, you can still see your chat history on your primary
      device. We encourage you to keep WhatsApp updated on your linked devices.
    </div>
  );
}

export default function AboutLinkingWhatsappSecondPhoneArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About linking WhatsApp to a second phone
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <KnownIssueNotice />
        <p className="mt-5">
          You can now use the same WhatsApp account on multiple phones at the same time, using your primary phone to
          link up to four devices.
        </p>

        <h2 className="mt-8 text-[31px] font-bold leading-tight text-[#111b21]">
          {platform === 'android'
            ? 'Link an Android companion phone to your primary phone'
            : 'Link a companion iPhone to your primary phone'}
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
          <li>Download WhatsApp on the companion phone and open the app.</li>
          <li>
            Tap <span className="font-semibold text-[#111b21]">Link as companion device</span> and scan the QR code
            with your primary phone.
          </li>
          <li>
            On your primary phone, go to <span className="font-semibold text-[#111b21]">Linked devices</span> and tap{' '}
            <span className="font-semibold text-[#111b21]">Link a device</span>.
          </li>
          <li>Verify your identity on your primary phone if prompted.</li>
        </ol>

        <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Live location isn&apos;t supported on companion phones.</li>
          <li>Your companion phones may be logged out if you don&apos;t use WhatsApp on your primary phone for 14 days.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/about-linked-devices?platform=${platform}`}>
                About linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-message-history-on-linked-devices">
                About message history on linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-unlink-a-device?platform=${platform}`}>
                How to unlink a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-changing-phones">
                About changing phones
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
