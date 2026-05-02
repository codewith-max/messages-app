'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-mute-or-unmute-individual-or-group-chat-notifications';

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
        You can mute individual, group, and list notifications for a selected period, then unmute at any time from
        chat settings.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute notifications for individual chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual chat.</li>
          <li>Tap the contact name.</li>
          <li>Tap Notifications, then Mute.</li>
          <li>Select 8 hours, 1 week, or Always.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute notifications for group chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the group chat and tap group name.</li>
          <li>Tap Notifications, then Mute.</li>
          <li>Choose mute duration.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute notifications for lists</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap Settings &gt; Lists.</li>
          <li>Select a list and tap Mute.</li>
          <li>Choose duration.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>Mute individual and group chat notifications from chat info, and unmute whenever you want.</p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute notifications for individual or group chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat.</li>
          <li>Tap contact or group name.</li>
          <li>Tap Mute and choose 8 hours, 1 week, or Always.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Unmute notifications</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open muted chat.</li>
          <li>Tap chat name.</li>
          <li>Tap Unmute.</li>
        </ol>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const product = platform === 'mac' ? 'WhatsApp for Mac' : platform === 'windows' ? 'WhatsApp for Windows' : 'WhatsApp Web';
  return (
    <>
      <p>In {product}, mute or unmute notifications from each chat&apos;s menu and settings panel.</p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute group notifications</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a group chat.</li>
          <li>Open chat menu and choose Mute notifications.</li>
          <li>Select duration and confirm.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Unmute group notifications</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open muted group chat.</li>
          <li>Open chat menu.</li>
          <li>Select Unmute notifications.</li>
        </ol>
      </section>
    </>
  );
}

export default function HowToMuteOrUnmuteIndividualOrGroupChatNotificationsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to mute or unmute individual or group chat notifications
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
          </ul>
        </section>
      </div>
    </article>
  );
}
