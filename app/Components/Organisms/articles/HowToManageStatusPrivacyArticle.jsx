'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-manage-status-privacy';

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

export default function HowToManageStatusPrivacyArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to manage status privacy
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can control who can see your status by setting your audience in WhatsApp. Status updates are shared only
          with your contacts by default.
        </p>

        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>People or groups you mention in your status can always see your status update.</li>
          <li>Someone&apos;s phone number must be saved in your contacts and in their saved contacts to see your updates.</li>
          <li>You can only hide status from your contacts.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Change your status privacy</h2>
          <p className="mt-3">You can set your status audience to all contacts or hide it from specific contacts.</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Updates.</li>
            <li>Open Status Privacy.</li>
            <li>Select one of the following options:</li>
          </ol>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <strong>My contacts:</strong> All contacts can see your status.
            </li>
            <li>
              <strong>My contacts except:</strong> Choose contacts to hide status from.
            </li>
            <li>
              <strong>Only share with:</strong> Choose contacts to share status with.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-[20px] font-bold leading-tight text-[#111b21]">Notes</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Changes to your privacy settings won&apos;t affect status updates you&apos;ve already shared.</li>
            <li>If someone is removed from your status audience, they won&apos;t see future status updates.</li>
            <li>
              You can change who can see each status update by tapping audience controls before sharing your status.
            </li>
            <li>
              If you turned off read receipts, you can&apos;t see who viewed your status. If you re-enable read receipts,
              people can see who viewed their status updates while receipts are enabled.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-whatsapp-status">
                How to use WhatsApp status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-status-to-other-apps">
                How to share WhatsApp status to other apps
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-status-mentions">
                About status mentions
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
