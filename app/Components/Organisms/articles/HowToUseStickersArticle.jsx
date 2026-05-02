'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-use-stickers';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac', label: 'Mac' },
  { key: 'windows', label: 'Windows' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[640px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
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
      <section>
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send stickers</h2>
        <p className="mt-3">
          You can access stickers, including avatar stickers, in individual and group chats.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat.</li>
          <li>Tap the emoji icon, then open the stickers tab.</li>
          <li>Tap a sticker to send it.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Discover and manage sticker packs</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat and go to the stickers panel.</li>
          <li>Tap the add icon to browse sticker packs.</li>
          <li>Tap download next to any pack you want.</li>
          <li>Use the My stickers tab to reorder or remove packs.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Search for stickers</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the stickers tray.</li>
          <li>Tap search and type keywords or emoji.</li>
          <li>Tap a result to send it.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share avatar stickers</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap emoji then avatar stickers in a chat.</li>
          <li>Select a sticker and send it.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Organize your stickers</h2>
        <p className="mt-3">To reorder or remove a sticker, press and hold it and choose the action you want.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Update your sticker packs</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the stickers tray.</li>
          <li>In the All stickers list, tap Update next to the sticker pack.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <section>
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send stickers</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat.</li>
          <li>Tap the sticker icon in the message composer.</li>
          <li>Select a sticker and tap to send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Manage stickers</h2>
        <p className="mt-3">
          Open stickers, tap add, and install or remove sticker packs. You can also use search to find sticker packs.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Avatar stickers</h2>
        <p className="mt-3">Open avatar stickers from the sticker panel and tap any sticker to share it in chat.</p>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const label = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'Web';
  return (
    <>
      <section>
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Use stickers on {label}</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Click the emoji icon and switch to Stickers.</li>
          <li>Click any sticker to send it.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Download sticker packs</h2>
        <p className="mt-3">Use the add-sticker option where available to browse and install more sticker packs.</p>
      </section>
    </>
  );
}

export default function HowToUseStickersArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use stickers
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
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create and share custom stickers and sticker packs</h2>
          <p className="mt-3">
            Learn how to make your own stickers and share sticker packs with others.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-send-media-contacts-or-location?platform=android">
                How to send media, contacts, or location
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-forward-media">
                How to forward media
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/finding-media-files?platform=android">
                Finding media files
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
