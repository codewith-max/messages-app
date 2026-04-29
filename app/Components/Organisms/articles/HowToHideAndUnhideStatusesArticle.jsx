'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-hide-and-unhide-statuses';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'iphone', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows-desktop', label: 'Windows' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[430px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToHideAndUnhideStatusesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';
  const isWebFamily = platform === 'web' || platform === 'windows-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to hide and unhide statuses
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can hide status updates from people you don&apos;t want to see in your updates feed, and unhide them again
          whenever you want.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Hide or unhide statuses</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Open Updates.' : 'Tap Updates.'}</li>
            <li>{isWebFamily ? 'Open a contact status from the updates list.' : 'Open a contact status from the updates list.'}</li>
            <li>{isWebFamily ? 'Click More options and choose Hide or Unhide.' : 'Tap More options and choose Hide or Unhide.'}</li>
          </ol>
          <p className="mt-3">
            If this menu isn&apos;t available for a status, use status privacy controls in settings to limit who can see
            your updates.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">View hidden statuses</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Open Updates and look for Hidden updates.' : 'Tap Updates and look for Hidden updates.'}</li>
            <li>{isWebFamily ? 'Click Hidden updates to view hidden contacts.' : 'Tap Hidden updates to view hidden contacts.'}</li>
          </ol>
          <p className="mt-3">
            If hidden updates are not visible, they may be at the end of your updates list.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
                About status privacy
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-save-and-delete-your-status">
                How to save and delete a status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-view-like-and-reply-to-status">
                How to view and reply to status
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
