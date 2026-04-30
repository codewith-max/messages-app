'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-reply-to-a-message';

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

function VideoPlaceholder() {
  return (
    <div className="mt-4 overflow-hidden bg-[#cce9dd]">
      <div className="relative aspect-[16/9] w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90 text-white">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div className="absolute bottom-3 left-3 rounded bg-black/30 px-2 py-1 text-xs font-medium text-white">How to reply to a message</div>
      </div>
    </div>
  );
}

function ReplySteps({ platform }) {
  const isDesktop = platform === 'web' || platform === 'windows' || platform === 'mac';
  const hasSettings = platform === 'android' || platform === 'ios';

  return (
    <>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>{isDesktop ? 'Open a chat.' : 'Tap a chat.'}</li>
        <li>
          {isDesktop ? 'Hover over the message, then click' : 'Tap and hold the message, then tap'}{' '}
          <span className="font-semibold text-[#111b21]">Reply</span>.
        </li>
        <li>{isDesktop ? 'Type your response and press Enter.' : 'Type your response and tap Send.'}</li>
      </ol>

      <p className="mt-4">
        You can also reply privately to someone&apos;s message in a group chat by choosing{' '}
        <span className="font-semibold text-[#111b21]">Reply privately</span>.
      </p>

      {hasSettings ? (
        <p className="mt-3">
          If you don&apos;t see <span className="font-semibold text-[#111b21]">Reply</span>, turn on message actions in
          chat settings and make sure WhatsApp is updated.
        </p>
      ) : null}
    </>
  );
}

export default function HowToReplyToAMessageArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to reply to a message
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Replying helps keep your chats organized by linking your response to a specific message in individual and
          group chats.
        </p>

        <VideoPlaceholder />

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to reply to a message</h2>
          <ReplySteps platform={platform} />
        </section>

        <section className="mt-8 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p>
            <span className="font-semibold">Note:</span> Your replies and messages are protected by end-to-end
            encryption.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-edit-favorites-from-the-chats-tab">
                How to edit favorites from the Chats tab
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-lists">
                How to use lists
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-view-like-and-reply-to-status">
                How to view, like, and reply to status
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
