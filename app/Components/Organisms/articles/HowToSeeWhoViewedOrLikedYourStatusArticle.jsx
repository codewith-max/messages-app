'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-see-who-viewed-or-liked-your-status';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'iphone', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac-desktop', label: 'Mac' },
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

export default function HowToSeeWhoViewedOrLikedYourStatusArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';
  const isWebFamily = platform === 'web' || platform === 'mac-desktop' || platform === 'windows-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to see who viewed or liked your status
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>You can see a list of who has viewed and liked your status updates and when they viewed them.</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">See status views</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Click Updates > My status.' : 'Tap Updates > My status.'}</li>
            <li>{isWebFamily ? 'While the status is open, click eye.' : 'View the status screen and tap eye.'}</li>
          </ol>
          <p className="mt-3">
            If you don&apos;t see any views, it may be because no one has viewed it yet. Wait a while and try again.
          </p>
          <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
            <strong>Note:</strong>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>You can&apos;t see who&apos;s viewed your status if either of you have turned off read receipts.</li>
              <li>
                You can choose who can see your status by adding them to your status audience or mentioning them in your status.
                Learn more about{' '}
                <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
                  status privacy
                </Link>
                .
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">See status likes</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Click Updates > My status.' : 'Tap Updates > My status.'}</li>
            <li>{isWebFamily ? 'While the status is open, click eye.' : 'View the status screen and tap eye.'}</li>
          </ol>
          <p className="mt-3">Contacts who like your status are marked with a green heart.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">See status replies and reactions</h2>
          <p className="mt-3">
            Tap or click reactions sent to your status and chats that included a status. Go to Chats and tap your shared status from there.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-create-and-share-a-status">
                How to create and share a status update
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-save-and-delete-your-status">
                How to view and delete your status updates
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-status-to-other-apps">
                How to share WhatsApp status updates to other apps
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
