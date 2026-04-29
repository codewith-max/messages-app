'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-view-like-and-reply-to-status';

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

export default function HowToViewLikeReplyStatusArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';
  const isWebFamily = platform === 'web' || platform === 'windows-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to view, like, and reply to status
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          You can view, like, and reply to status shared from your contacts. If you don&apos;t see a status, it may have expired
          after 24 hours or you may not be in the selected audience.
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">View statuses</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Click Updates.' : 'Tap Updates.'}</li>
            <li>{isWebFamily ? 'Click a profile picture to view status updates.' : 'Tap a profile picture to view status updates.'}</li>
          </ol>
          <p className="mt-3">
            To view hidden statuses, tap Hidden updates or scroll to the hidden section. Learn more about{' '}
            <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
              status privacy
            </Link>
            .
          </p>
          <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
            <strong>Note:</strong>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>If you don&apos;t want people to see that you&apos;ve viewed their status, turn off read receipts.</li>
              <li>You won&apos;t be able to see their views if your read receipts are off.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Like statuses</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Click Updates.' : 'Tap Updates.'}</li>
            <li>
              {isWebFamily
                ? 'While the status is open, click the like icon.'
                : 'While the status is open, tap the like icon.'}
            </li>
          </ol>
          <p className="mt-3">The person will see a green heart next to your profile picture when they check status views.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Reply to statuses</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Click Updates.' : 'Tap Updates.'}</li>
            <li>{isWebFamily ? 'Open a contact status.' : 'Open a contact status.'}</li>
            <li>{isWebFamily ? 'Use Reply to send a message.' : 'Tap Reply to send a message.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">React to statuses</h2>
          <p className="mt-3">
            Reactions are quick emoji replies to status updates. They appear in your chat with that contact and in status views.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Open a status update.' : 'Tap Updates and open a status update.'}</li>
            <li>{isWebFamily ? 'Choose an emoji reaction and send.' : 'Tap an emoji reaction and send.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-see-who-viewed-or-liked-your-status">
                How to see who viewed or liked your status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-create-and-share-a-status">
                How to create and share a status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
                About status privacy
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
