'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-edit-favorites';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'iphone', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          className={getClass(tab.key)}
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

export default function HowToEditFavoritesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to edit favorites
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Use favorites to organize your top chats and calls into one list. You can manage this list from Settings, the
          Chats tab, or the Calls tab. Learn more{' '}
          <Link className={linkClass} href="/help-center/about-lists">
            about lists
          </Link>
          .
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add favorites</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              {isAndroid
                ? 'Tap menu > Settings > List > Favorites > Add people or groups.'
                : 'Tap Settings or your profile picture > Lists > Favorites > Add people or groups.'}
            </li>
            <li>
              Select people or groups. Alternatively, tap the search icon and enter their name.
            </li>
            <li>{isAndroid ? 'Tap the checkmark icon.' : 'Tap Done.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Remove favorites</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              {isAndroid
                ? 'Tap menu > Settings > Lists > Favorites > edit.'
                : 'Tap Settings or your profile picture > Lists > Favorites > edit.'}
            </li>
            <li>
              {isAndroid
                ? 'Tap the trash icon > the checkmark icon > Done to remove the selected person or group.'
                : 'Tap remove next to a person or group, then confirm to remove them from favorites.'}
            </li>
          </ol>
          <p className="mt-3">
            You can also add or remove favorites from the Chats or Calls tabs. Learn how from the{' '}
            <Link className={linkClass} href="/help-center/how-to-add-favorites-from-the-chats-tab">
              Chats tab
            </Link>{' '}
            and the{' '}
            <Link className={linkClass} href="/help-center/how-to-edit-favorites-from-the-calls-tab">
              Calls tab
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-add-favorites-from-the-chats-tab">
                How to add favorites from the Chats tab
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-edit-favorites-from-the-calls-tab">
                How to edit favorites from the Calls tab
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
