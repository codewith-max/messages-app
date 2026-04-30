'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-restore-your-chat-history';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[320px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function VideoCard({ title }) {
  return (
    <div className="mt-4 overflow-hidden rounded bg-[#25d366]">
      <div className="relative aspect-[16/9] w-full">
        <p className="absolute left-4 top-4 max-w-[70%] text-[30px] font-semibold leading-9 text-white">{title}</p>
        <span className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 text-white">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current">
            <path d="M8 6v12l10-6z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function AndroidContent() {
  return (
    <>
      <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <p className="font-semibold">Before you start</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Use the same phone number and Google Account used for backup.</li>
          <li>Make sure your device has enough free storage.</li>
        </ol>
      </div>
      <VideoCard title="How to restore your WhatsApp chat history on Android" />
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">To restore from Google Account backup</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Uninstall and reinstall WhatsApp.</li>
          <li>Verify your phone number.</li>
          <li>Tap Restore when prompted to restore chats and media from Google backup.</li>
          <li>Tap Next after restore completes.</li>
        </ol>
      </section>
      <p className="mt-5 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span> If no Google backup is found, WhatsApp may restore from local
        device backup when available.
      </p>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <p className="font-semibold">Before you start</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Use the same Apple ID and phone number used to create iCloud backup.</li>
          <li>Ensure iCloud Drive is on and storage is available.</li>
        </ol>
      </div>
      <VideoCard title="How to restore your WhatsApp chat history on an iPhone" />
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">To restore your chat history</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Uninstall and reinstall WhatsApp.</li>
          <li>Verify your phone number and Apple ID.</li>
          <li>Tap Restore Chat History when prompted.</li>
        </ol>
      </section>
    </>
  );
}

function WebContent() {
  return (
    <>
      <p>
        You can’t directly restore a phone backup on WhatsApp Web. Web mirrors chats from your primary phone after you
        link your device.
      </p>
      <p className="mt-3">
        To restore chats, first restore them on your phone and then link Web again.
      </p>
    </>
  );
}

export default function HowToRestoreYourChatHistoryArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to restore your chat history
        </h1>
        <HelpCenterCopyLinkButton />
      </div>
      <PlatformTabs platform={platform} />
      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'ios' ? <IOSContent /> : platform === 'web' ? <WebContent /> : <AndroidContent />}
        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-back-up-your-chat-history?platform=android">
                How to back up your chat history
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/backup-restore-chats">
                Back up or restore chats
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
