'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-manage-your-notifications';

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
        Manage message, group, call, lock screen, and chat-specific notification behavior from WhatsApp settings and
        your Android system settings.
      </p>
      <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span> If WhatsApp notifications are disabled in Android system settings,
        in-app notification settings won&apos;t alert you.
      </div>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage WhatsApp notifications settings for all messages, groups, or calls</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Notifications.</li>
          <li>Choose notification tone, vibration, popup/preview, and light options.</li>
          <li>Set separate behavior for messages, groups, and calls.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage notifications for group chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open group chat and tap group name.</li>
          <li>Tap Notifications.</li>
          <li>Choose mute duration, tone, vibration, and high priority options.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage lock screen notifications on your device</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Go to Android Settings &gt; Notifications &gt; App notifications &gt; WhatsApp.</li>
          <li>Enable notifications and choose lock screen behavior.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>Control WhatsApp notifications for messages, groups, calls, and previews from app and iPhone settings.</p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage notifications in WhatsApp</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp Settings &gt; Notifications.</li>
          <li>Choose sounds, preview, and reaction notifications.</li>
          <li>Set message/group/call alert preferences.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute individual or group chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat, tap contact/group name.</li>
          <li>Tap Mute and select duration.</li>
        </ol>
      </section>
    </>
  );
}

function DesktopContent({ isMac }) {
  return (
    <>
      <p>
        On {isMac ? 'Mac' : 'Web/Windows'}, notification behavior depends on WhatsApp settings and your browser or OS
        notification permissions.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Turn notifications on or off</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp Settings &gt; Notifications.</li>
          <li>Enable desktop notifications and sound alerts.</li>
          <li>Allow notifications in browser/OS permissions.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open chat menu.</li>
          <li>Choose Mute notifications, then select duration.</li>
        </ol>
      </section>
    </>
  );
}

export default function HowToManageYourNotificationsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to manage your notifications
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />
      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android'
          ? <AndroidContent />
          : platform === 'ios'
            ? <IOSContent />
            : <DesktopContent isMac={platform === 'mac'} />}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-change-your-app-or-chat-theme?platform=android">
                How to change your app or chat theme
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/fixing-issues-on-whatsapp?platform=web">
                Fixing issues on WhatsApp
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-react-to-messages?platform=web">
                How to react to messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
