'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-clear-chats';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;

  return (
    <div className="mb-5 flex w-full max-w-[200px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function SingleChatSteps({ platform }) {
  const ios = platform === 'ios';

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>{ios ? 'Open Chats, then swipe left on the individual or group chat you want to clear.' : 'Open Chats, then tap and hold the individual or group chat you want to clear.'}</li>
      <li>
        Tap <span className="font-semibold text-[#111b21]">{ios ? 'More' : 'Menu'}</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Clear chat</span>.
      </li>
      <li>
        Tap <span className="font-semibold text-[#111b21]">Clear all messages</span>.
      </li>
    </ol>
  );
}

function AllChatsSteps({ platform }) {
  const ios = platform === 'ios';

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>
        Open {ios ? 'WhatsApp Settings' : 'WhatsApp menu'}, then go to{' '}
        <span className="font-semibold text-[#111b21]">Chats</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Chat history</span>.
      </li>
      <li>
        Tap <span className="font-semibold text-[#111b21]">Clear all chats</span>.
      </li>
    </ol>
  );
}

export default function HowToClearChatsArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">How to clear chats</h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Clearing a chat removes messages from the chat history on your device, but does not delete the chat itself.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Clear an individual or group chat</h2>
          <SingleChatSteps platform={platform} />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Clear all chats at once</h2>
          <AllChatsSteps platform={platform} />
          <p className="mt-4 text-[15px] leading-7">
            Archived chats are usually not affected. You may keep starred messages and media if those options are
            enabled in your clear chat confirmation.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-delete-chats">
                How to delete chats
              </Link>
            </li>
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
