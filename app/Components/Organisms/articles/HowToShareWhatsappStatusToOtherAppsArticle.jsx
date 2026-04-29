'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-share-your-whatsapp-status-to-other-apps';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'iphone', label: 'iOS' },
  { key: 'web', label: 'Web' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[430px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToShareWhatsappStatusToOtherAppsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';
  const isWeb = platform === 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to share your WhatsApp Status to other apps
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          {isWeb
            ? 'On WhatsApp Web, you can copy or share supported status links to connected apps where available.'
            : 'Once you share a status update on WhatsApp, you can share that same update to other apps, such as Facebook or Instagram Stories.'}
        </p>
        <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <strong>Note:</strong> Sharing options and availability can vary by device and app version.
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share your status update to another app</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWeb ? 'Open Updates and select a status update.' : 'Open Updates and select your status.'}</li>
            <li>{isWeb ? 'Click More options on the status you want to share.' : 'Open More options on the status you want to share.'}</li>
            <li>{isWeb ? 'Click Share and choose another app.' : 'Tap Share and choose another app.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add WhatsApp to Accounts Center</h2>
          <p className="mt-3">
            Accounts Center helps connect your WhatsApp account with Facebook and Instagram for sharing status updates
            and related controls.
          </p>
          <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
            <strong>Note:</strong> You can remove your account from Accounts Center at any time.
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">
            Automatically share updates to Facebook or Instagram Stories
          </h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Updates.</li>
            <li>Open Status Privacy or share settings.</li>
            <li>Enable automatic sharing.</li>
          </ol>
          <p className="mt-3">
            To stop automatic sharing, disable the same setting in WhatsApp.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-information-shared-when-you-share-status-updates-to-facebook-and-instagram">
                About information shared when you share status updates to Facebook and Instagram
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-create-and-share-a-status">
                How to create a status update
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
