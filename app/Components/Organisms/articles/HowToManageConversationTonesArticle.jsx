'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-manage-conversation-tones';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows', label: 'Windows' },
  { key: 'mac', label: 'Mac' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[560px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
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
        Conversation tones play sounds for incoming and outgoing messages. You can turn them on or off globally and
        customize tones for individual chats and groups.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Turn conversation tones on or off</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings.</li>
          <li>Tap Notifications.</li>
          <li>Use Conversation tones to toggle sounds on or off.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Customize conversation tones</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Notifications.</li>
          <li>Choose Notification tone under Messages or Groups.</li>
          <li>Select a tone and tap Save.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Customize tones for an individual chat or group chat</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat.</li>
          <li>Tap the chat name.</li>
          <li>Tap Notifications.</li>
          <li>Select a tone and tap Save.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        On iPhone, customize sounds for messages and groups directly from WhatsApp notification settings, and override
        tones per chat when needed.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Customize conversation tones</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp Settings &gt; Notifications.</li>
          <li>Choose Message tone and Group tone.</li>
          <li>Select your preferred alert sound.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Customize tones for an individual or group chat</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open chat and tap contact or group name.</li>
          <li>Tap Wallpaper &amp; Sound.</li>
          <li>Tap Alert tone and pick a sound.</li>
          <li>Tap Save.</li>
        </ol>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const isMac = platform === 'mac';
  return (
    <>
      <p>
        In {isMac ? 'WhatsApp for Mac' : 'WhatsApp Web/Windows'}, notification sound behavior follows both WhatsApp
        notification settings and your system notification permissions.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage sound notifications</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open Settings &gt; Notifications in WhatsApp.</li>
          <li>Enable or disable message and call sounds.</li>
          <li>Allow notifications in your browser or operating system.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute individual or group chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat and click the chat menu.</li>
          <li>Select Mute notifications.</li>
          <li>Choose 8 hours, 1 week, or Always.</li>
        </ol>
      </section>
    </>
  );
}

export default function HowToManageConversationTonesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to manage conversation tones
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />
      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidContent />
        ) : platform === 'ios' ? (
          <IOSContent />
        ) : (
          <DesktopContent platform={platform} />
        )}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-manage-your-notifications?platform=android">
                How to manage your notifications
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-change-your-app-or-chat-theme?platform=android">
                How to change your app or chat theme
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-react-to-messages?platform=android">
                How to react to messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
