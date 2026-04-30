'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-delete-chats';

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
    <div className="mb-5 flex w-full max-w-[520px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function DeleteIndividualChatSteps({ platform }) {
  const desktop = platform === 'web' || platform === 'windows' || platform === 'mac';

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>{desktop ? 'Open WhatsApp, then select the individual chat you want to delete.' : 'Open WhatsApp, then tap the individual chat you want to delete.'}</li>
      <li>
        {desktop ? 'Click Menu' : 'Tap More options'} &gt; <span className="font-semibold text-[#111b21]">Delete chat</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Delete</span>.
      </li>
      <li className="list-none pl-0 text-[15px]">
        Alternatively, {desktop ? 'right-click the chat' : 'tap and hold the chat'} and choose{' '}
        <span className="font-semibold text-[#111b21]">Delete chat</span>.
      </li>
    </ol>
  );
}

function DeleteGroupChatSteps({ platform }) {
  const desktop = platform === 'web' || platform === 'windows' || platform === 'mac';

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>Open the group chat, then exit the group first.</li>
      <li>
        {desktop ? 'Click Menu' : 'Tap More options'} &gt; <span className="font-semibold text-[#111b21]">Exit group</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Exit</span>.
      </li>
      <li>
        {desktop ? 'Click Menu' : 'Tap More options'} &gt; <span className="font-semibold text-[#111b21]">Delete group</span>.
      </li>
    </ol>
  );
}

function DeleteAllChatsSteps({ platform }) {
  const desktop = platform === 'web' || platform === 'windows' || platform === 'mac';

  if (desktop) {
    return (
      <p className="mt-3">
        This option isn&apos;t available on {platform === 'web' ? 'Web' : platform === 'windows' ? 'Windows' : 'Mac'}.
        Delete chats one by one from your chat list.
      </p>
    );
  }

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>
        Open Chats, then tap <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Chats</span> &gt; <span className="font-semibold text-[#111b21]">Delete all chats</span>.
      </li>
      <li>Tap Delete all chats to confirm.</li>
    </ol>
  );
}

export default function HowToDeleteChatsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">How to delete chats</h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <span className="font-semibold">Note:</span> This article explains how to delete entire chats. To delete
          individual messages in a conversation, use message delete options.
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete an individual chat</h2>
          <DeleteIndividualChatSteps platform={platform} />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete a group chat</h2>
          <DeleteGroupChatSteps platform={platform} />
          <p className="mt-4 text-[15px] leading-7">
            <span className="font-semibold text-[#111b21]">Note:</span> If a group isn&apos;t in your chat list, search
            for it to open and then leave it before deleting.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete all chats at once</h2>
          <DeleteAllChatsSteps platform={platform} />
          <p className="mt-4 text-[15px] leading-7">
            Individual archived chats usually remain archived. On most phones, group chats stay visible unless you exit
            them first.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-reply-to-a-message">
                How to reply to a message
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
