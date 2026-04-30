'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-edit-favorites-from-the-chats-tab';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToEditFavoritesFromChatsTabArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to edit favorites from the Chats tab
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can edit your favorites in the Chats tab and quickly access your top conversations. You can manage
          favorites from Settings or the Chats list.
        </p>
        <p className="mt-2">
          Learn more <Link className={linkClass} href="/help-center/about-lists">about lists</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add favorites</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap Chats.' : 'Tap Chats.'}</li>
            <li>{isAndroid ? 'Tap and hold the chat.' : 'Swipe right on the chat.'}</li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Add to favorites</span>.
            </li>
          </ol>
          <p className="mt-3">Alternatively, you can:</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Go to <span className="font-semibold text-[#111b21]">Chats</span> tab &gt;{' '}
              <span className="font-semibold text-[#111b21]">Favorites</span>.
            </li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Manage favorites</span>.
            </li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Add people or groups</span>.
            </li>
            <li>Select contacts or groups.</li>
            <li>{isAndroid ? 'Tap the checkmark icon.' : 'Tap Done.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Remove favorites</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap Chats.</li>
            <li>Tap the chat in Favorites.</li>
            <li>{isAndroid ? 'Tap and hold, then remove from favorites.' : 'Swipe right and tap remove.'}</li>
          </ol>
          <p className="mt-3">Alternatively, you can:</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Go to <span className="font-semibold text-[#111b21]">Chats</span> tab &gt;{' '}
              <span className="font-semibold text-[#111b21]">Favorites</span>.
            </li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Manage favorites</span>.
            </li>
            <li>Tap remove next to a contact or group.</li>
            <li>Tap save.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-edit-favorites">
                How to edit favorites
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-lists">
                How to use lists
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-lists">
                About lists
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
