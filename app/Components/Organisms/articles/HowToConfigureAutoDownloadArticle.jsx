'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-configure-auto-download';

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

function AndroidContent() {
  return (
    <>
      <p>Choose what downloads automatically when you&apos;re on mobile data versus Wi-Fi.</p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Change settings</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap WhatsApp Settings &gt; Storage and data.</li>
          <li>Tap When using mobile data or When connected on Wi-Fi.</li>
          <li>Select photos, videos, audio, documents, or turn categories off.</li>
        </ol>
      </section>
      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        Voice messages typically download separately so playback works without tapping each time.
      </div>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>Separate controls exist for Cellular and Wi-Fi.</p>
      <ol className="mt-4 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>Open WhatsApp Settings &gt; Storage and Data.</li>
        <li>Tap Media Auto-Download.</li>
        <li>Customize Cellular and Wi-Fi.</li>
      </ol>
    </>
  );
}

function DesktopContent({ platform }) {
  const label = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'WhatsApp Web';
  return (
    <p>
      {label} relies on linked-phone settings for most auto-download behaviour. Adjust Storage and Data on your phone first,
      then reopen linked desktop sessions.
    </p>
  );
}

export default function HowToConfigureAutoDownloadArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to configure auto-download
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidContent />
        ) : platform === 'ios' ? (
          <IOSContent />
        ) : (
          <DesktopContent platform={platform} />
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/finding-media-files?platform=${platform}`}>
                Finding media files
              </Link>
            </li>
            <li>
              <Link
                className={linkClass}
                href={`/help-center/how-to-stop-whatsapp-from-saving-media-to-your-phone?platform=${platform}`}
              >
                How to stop WhatsApp from saving media to your phone
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
