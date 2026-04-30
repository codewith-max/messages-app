'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-pin-or-unpin-a-chat';

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

function PinSteps({ platform }) {
  const desktop = platform === 'web' || platform === 'windows' || platform === 'mac';
  const ios = platform === 'ios';

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>{desktop ? 'Open your chat list and find the chat you want to pin.' : 'Open your Chats tab and find the chat you want to pin.'}</li>
      <li>
        {desktop ? 'Right-click the chat and select' : ios ? 'Swipe right on the chat and tap' : 'Tap and hold the chat, then tap'}{' '}
        <span className="font-semibold text-[#111b21]">Pin</span>.
      </li>
    </ol>
  );
}

function UnpinSteps({ platform }) {
  const desktop = platform === 'web' || platform === 'windows' || platform === 'mac';
  const ios = platform === 'ios';

  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
      <li>{desktop ? 'Locate the pinned chat at the top of your chat list.' : 'Find the pinned chat at the top of your chat list.'}</li>
      <li>
        {desktop ? 'Right-click and select' : ios ? 'Swipe right on the pinned chat and tap' : 'Tap and hold the pinned chat, then tap'}{' '}
        <span className="font-semibold text-[#111b21]">Unpin</span>.
      </li>
    </ol>
  );
}

export default function HowToPinOrUnpinAChatArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to pin or unpin a chat
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Pin chats so your most important conversations stay at the top of your chat list for quick access.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Pin a chat</h2>
          <PinSteps platform={platform} />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Unpin a chat</h2>
          <UnpinSteps platform={platform} />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-lists">
                How to use lists
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-pin-a-message">
                How to pin or unpin a message
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
