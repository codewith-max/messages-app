'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/cant-see-notification-count';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[220px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function AndroidContent() {
  return (
    <>
      <p>
        If unread counts do not appear on your WhatsApp icon, your launcher or notification settings may be hiding badges
        or counts.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#111b21]">
        <li>
          Open Android Settings &gt; Apps &gt; WhatsApp &gt; Notifications and enable all relevant categories so the
          launcher can show a count.
        </li>
        <li>Open your launcher or home-screen settings and confirm badge / notification dots are turned on for WhatsApp.</li>
        <li>Open WhatsApp, receive a test message, then return to the home screen to refresh the badge.</li>
        <li>Restart your phone after changing notification or launcher settings.</li>
      </ul>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>If the red badge or number doesn&apos;t appear on WhatsApp on your iPhone, check iOS and in-app notification options.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#111b21]">
        <li>iPhone Settings &gt; Notifications &gt; WhatsApp — enable Allow Notifications and turn Badges on.</li>
        <li>WhatsApp Settings &gt; Notifications — confirm previews and alerts match how you expect counts to behave.</li>
        <li>Disable Focus modes or filters that might hide badges for WhatsApp.</li>
        <li>Update WhatsApp from the App Store and restart your iPhone if the issue continues.</li>
      </ul>
    </>
  );
}

export default function CantSeeNotificationCountArticle() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === raw) ? raw : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t see notification count
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'ios' ? <IOSContent /> : <AndroidContent />}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/troubleshoot-problems-with-notification-badges?platform=${platform}`}>
                Troubleshoot problems with notification badges
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
