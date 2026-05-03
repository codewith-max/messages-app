'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-3 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-use-avatars';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[320px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          className={`relative ${getClass(tab.key)}`}
          href={`${BASE}?platform=${tab.key}`}
          role="tab"
          aria-selected={platform === tab.key}
        >
          {tab.label}
          {platform === tab.key ? (
            <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden />
          ) : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToUseAvatarsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use avatars
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl space-y-8 text-[16px] leading-7 text-[#3b4a54]">
        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Use your avatar in chats</h2>
          <p className="mt-3">
            After you create an avatar, open the emoji or sticker area in a chat to find avatar stickers generated from
            your look.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open an individual or group chat.</li>
            <li>{isAndroid ? 'Tap the emoji icon, then open Avatars.' : 'Tap the sticker icon, then choose Avatars.'}</li>
            <li>Tap an avatar sticker to send it.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Profile and settings</h2>
          <p className="mt-3">
            You can revisit <span className="font-semibold text-[#111b21]">Settings &gt; Avatar</span> to edit your
            avatar or update it after changing your appearance.
          </p>
        </section>

        <section className="border-t border-black/[0.08] pt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-create-avatars?platform=${platform}`}>
                How to create avatars
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-stickers?platform=${platform}`}>
                How to use stickers
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
