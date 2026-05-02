'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/about-hd-photos-and-videos';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac', label: 'Mac' },
  { key: 'windows', label: 'Windows' },
];

const TAB_KEYS = tabs.map((t) => t.key);

function resolvePlatform(raw) {
  if (!raw) return 'android';
  const lower = String(raw).toLowerCase();
  if (lower === 'iphone' || lower === 'ipad' || lower === 'ipados') return 'ios';
  return TAB_KEYS.includes(lower) ? lower : 'android';
}

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[560px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function MobileBody({ isIos }) {
  return (
    <>
      <p>
        HD lets you send higher-resolution photos and videos when your connection and storage allow. Standard quality is
        smaller and often faster to upload.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Before you send</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>Look for an HD or quality option in the composer or send sheet after picking media.</li>
          <li>HD uses more data; on cellular, confirm you&apos;re okay with the larger upload.</li>
          <li>Recipients need a recent WhatsApp version to view HD optimally.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">{isIos ? 'Notes for iPhone' : 'Notes for Android'}</h2>
        <p className="mt-3">
          Exact labels vary by release. If you don&apos;t see HD, update WhatsApp from the{' '}
          {isIos ? 'App Store' : 'Play Store'} and try sending the file again from the attachment flow.
        </p>
      </section>
    </>
  );
}

function DesktopBody({ platform }) {
  const label = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'Web';
  return (
    <p>
      Linked WhatsApp on {label} follows the quality choices made on your phone for many attachment types. Attach files
      directly from desktop when you need original resolution without phone-side compression.
    </p>
  );
}

export default function AboutHdPhotosAndVideosArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = resolvePlatform(rawPlatform);

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About HD photos and videos
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <MobileBody isIos={false} />
        ) : platform === 'ios' ? (
          <MobileBody isIos />
        ) : (
          <DesktopBody platform={platform} />
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-edit-photos-and-videos?platform=${platform}`}>
                How to edit photos and videos
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-media-contacts-or-location?platform=${platform}`}>
                How to send media, contacts, or location
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
