'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-change-your-ringtone-for-whatsapp';

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
        You can select your ringtone in WhatsApp notifications, or assign custom tones for specific contacts from chat
        notification settings.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Change conversation tone or ringtone for all messages and calls</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Notifications.</li>
          <li>Select Calls tone.</li>
          <li>Choose a tone and tap Save.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Set a custom ringtone for specific contacts</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open contact chat and tap contact name.</li>
          <li>Tap Notifications.</li>
          <li>Under message or call tone, tap Notification tone or Calls tone.</li>
          <li>Select ringtone and tap Save.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        On iPhone, choose message and call alert sounds in WhatsApp settings. You can also set custom notification
        sounds for specific chats.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Set a custom ringtone for WhatsApp voice calls</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp Settings &gt; Notifications.</li>
          <li>Tap Calls tone.</li>
          <li>Choose ringtone and tap Save.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Set a custom ringtone for specific chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open chat and tap contact/group name.</li>
          <li>Tap Wallpaper &amp; Sound.</li>
          <li>Tap Alert tone, then choose a sound.</li>
          <li>Tap Save.</li>
        </ol>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const appName = platform === 'mac' ? 'WhatsApp for Mac' : platform === 'windows' ? 'WhatsApp for Windows' : 'WhatsApp Web';
  return (
    <>
      <p>
        In {appName}, incoming message and call sounds are controlled by app notification settings and your browser or
        system sound permissions.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage sound alerts</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open Settings &gt; Notifications.</li>
          <li>Enable sound for incoming messages and calls.</li>
          <li>Check browser or OS notification permissions.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute a chat</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open chat menu.</li>
          <li>Select Mute notifications and choose duration.</li>
        </ol>
      </section>
    </>
  );
}

export default function HowToChangeYourRingtoneForWhatsappArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to change your ringtone for WhatsApp
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
              <Link className={linkClass} href="/help-center/how-to-manage-conversation-tones?platform=android">
                How to manage conversation tones
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-manage-your-notifications?platform=android">
                How to manage your notifications
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
