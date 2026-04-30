'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-back-up-your-chat-history';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
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
        You can back up your WhatsApp chats and media to your Google Account so they can be restored if you switch
        devices or reinstall WhatsApp.
      </p>
      <p className="mt-3">Before starting, make sure:</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>Your device has an active Google Account.</li>
        <li>Google Play services are installed.</li>
        <li>You have enough free space on your device and Google storage.</li>
      </ul>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Set up automatic backups</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Chats.</li>
          <li>Tap Chat backup.</li>
          <li>Tap Back up to your Google Account and choose backup frequency.</li>
          <li>Select the Google Account you want to use.</li>
          <li>Tap Back up over and choose Wi-Fi or Wi-Fi + cellular.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manually back up your chats at any time</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Chats.</li>
          <li>Tap Chat backup.</li>
          <li>Tap Back up.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create and use end-to-end encrypted backup</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Chats.</li>
          <li>Tap Chat backup &gt; End-to-end encrypted backup.</li>
          <li>Tap Turn on and follow prompts to create a password or key.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        You can back up WhatsApp chats to iCloud so chat history can be restored when reinstalling WhatsApp on iPhone.
      </p>
      <p className="mt-3">Before starting, make sure:</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>You are signed into iCloud with your Apple ID.</li>
        <li>iCloud Drive is turned on.</li>
        <li>You have enough free iCloud storage.</li>
      </ul>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Set up automatic backups</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Chats &gt; Chat Backup.</li>
          <li>Tap Auto Backup and choose frequency.</li>
          <li>Optionally include videos in backup settings.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manually back up now</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open Settings &gt; Chats &gt; Chat Backup.</li>
          <li>Tap Back Up Now.</li>
        </ol>
      </section>
    </>
  );
}

export default function HowToBackUpYourChatHistoryArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to back up your chat history
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'ios' ? <IOSContent /> : <AndroidContent />}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/backup-restore-chats">
                Back up or restore chats
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-two-step-verification">
                About two-step verification
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
