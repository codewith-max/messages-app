'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/troubleshoot-problems-with-notification-badges';

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
        Notification badges on your home screen are handled by your Android launcher, not by WhatsApp alone. If the
        count looks wrong, try the steps below.
      </p>
      <p className="mt-4 font-medium text-[#111b21]">To troubleshoot an incorrect badge count:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
        <li>
          <span className="font-semibold text-[#111b21]">Check device notification settings:</span> Open Android
          Settings &gt; Apps &gt; WhatsApp &gt; Notifications and make sure alerts are allowed.
        </li>
        <li>
          <span className="font-semibold text-[#111b21]">Get a new message:</span> Ask someone to send you a new
          WhatsApp message so the badge count can refresh.
        </li>
        <li>
          <span className="font-semibold text-[#111b21]">Reset notification settings:</span> In WhatsApp go to Settings
          &gt; Notifications &gt; use <span className="font-semibold text-[#111b21]">Reset notification settings</span>{' '}
          if shown, then confirm.
        </li>
        <li>
          <span className="font-semibold text-[#111b21]">Reinstall WhatsApp:</span> Back up your chats if needed, then
          uninstall and reinstall the app from Google Play.
        </li>
      </ul>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        An incorrect badge count on the WhatsApp icon is usually caused by an issue with your device. To troubleshoot,
        try the following steps:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#111b21]">
        <li>
          <span className="font-semibold text-[#111b21]">Ask someone to send you a new WhatsApp message:</span> This should
          automatically refresh the message count.
        </li>
        <li>
          <span className="font-semibold text-[#111b21]">Ensure badges are enabled in iPhone Settings:</span> Go to
          iPhone Settings &gt; Notifications &gt; WhatsApp, then turn{' '}
          <span className="font-semibold text-[#111b21]">Badges</span> on.
        </li>
        <li>
          <span className="font-semibold text-[#111b21]">Reset notification settings:</span> In WhatsApp tap Settings
          &gt; Notifications &gt; <span className="font-semibold text-[#111b21]">Reset Notification Settings</span> &gt;
          Reset.
        </li>
        <li>
          <span className="font-semibold text-[#111b21]">Re-install WhatsApp:</span> Tap and hold the app, tap Remove
          App &gt; Delete App &gt; Delete, then reinstall WhatsApp from the App Store.
        </li>
      </ul>
    </>
  );
}

export default function TroubleshootProblemsWithNotificationBadgesArticle() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === raw) ? raw : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Troubleshoot problems with notification badges
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
              <Link className={linkClass} href={`/help-center/cant-see-notification-count?platform=${platform}`}>
                Can&apos;t see notification count
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
