'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/finding-media-files';

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
      <p>
        Media you send and receive is saved by WhatsApp on your phone. When downloads are enabled, files also appear under
        folders such as <span className="font-semibold text-[#111b21]">WhatsApp/Media</span> (including{' '}
        <span className="font-semibold text-[#111b21]">WhatsApp Images</span>,{' '}
        <span className="font-semibold text-[#111b21]">WhatsApp Video</span>, and{' '}
        <span className="font-semibold text-[#111b21]">WhatsApp Documents</span>) depending on type and your auto-download
        settings.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to find media information</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat that contains the photo, video, audio, or document.</li>
          <li>Tap the contact name or group subject at the top of the chat.</li>
          <li>Tap <span className="font-semibold text-[#111b21]">Media, links, and docs</span>.</li>
          <li>
            Browse thumbnails; use tabs for <span className="font-semibold text-[#111b21]">Media</span>,{' '}
            <span className="font-semibold text-[#111b21]">Docs</span>, or <span className="font-semibold text-[#111b21]">Links</span> if your version splits them.
          </li>
          <li>
            Tap an item to preview it or use the menu for details, forwarding, saving to gallery, or sharing to another app.
          </li>
          <li>
            For files saved to storage, open your file manager (or Photos) and look under{' '}
            <span className="font-semibold text-[#111b21]">WhatsApp/Media</span> where applicable.
          </li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        Shared media stays in the conversation&apos;s archive on iPhone. Items you export can also appear in Photos or
        Files.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to find media information</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat.</li>
          <li>Tap the contact or group name at the top.</li>
          <li>Tap <span className="font-semibold text-[#111b21]">Media, Links, and Docs</span>.</li>
          <li>Scroll sections for photos, videos, documents, and links.</li>
          <li>Tap something to view it or share it outward.</li>
          <li>Review <span className="font-semibold text-[#111b21]">Settings &gt; Chats</span> if you want to adjust saving to Photos.</li>
        </ol>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const label = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'WhatsApp Web';
  return (
    <>
      <p>On {label}, open chat details to see media, documents, and links shared in one place.</p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to find media information</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the conversation.</li>
          <li>Click or open chat info / group info from the header.</li>
          <li>Use Media or Documents tabs when displayed.</li>
          <li>Click an attachment to preview or reveal its download folder.</li>
        </ol>
      </section>
      <p className="mt-6 text-[15px] text-[#667781]">
        Saves usually land in Downloads unless your browser or app asks each time.
      </p>
    </>
  );
}

export default function FindingMediaFilesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Finding media files
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
              <Link className={linkClass} href={`/help-center/how-to-configure-auto-download?platform=${platform}`}>
                How to configure auto-download
              </Link>
            </li>
            <li>
              <Link
                className={linkClass}
                href={`/help-center/how-to-stop-whatsapp-from-saving-media-to-your-phone?platform=${platform}`}
              >
                How to stop WhatsApp media from saving to your phone&apos;s gallery
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
