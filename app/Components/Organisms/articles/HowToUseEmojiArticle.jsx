'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-use-emoji';

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
    <div className="mb-5 flex w-full max-w-[680px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          className={`relative ${getClass(tab.key)}`}
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

function NoteSkinTone() {
  return (
    <div className="mt-8 rounded-lg border border-[#b8d9f0] bg-[#eef6fc] px-4 py-3 text-[15px] leading-6">
      <p className="font-semibold text-[#111b21]">Note</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[#3b4a54] marker:text-[#111b21]">
        <li>For emojis that support it, tap and hold the emoji to choose a skin tone before you send.</li>
        <li>WhatsApp uses the standard emoji set available on your device and app version; there are no separate plans announced here to replace that core list.</li>
      </ul>
    </div>
  );
}

function AndroidContent() {
  return (
    <>
      <section>
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Use emoji in WhatsApp</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Tap the message field.</li>
          <li>Tap the emoji icon on your keyboard or in the message bar to open the emoji picker.</li>
          <li>Tap an emoji to add it to your message, then tap Send when ready.</li>
        </ol>
        <p className="mt-4">Tap the keyboard or ABC icon when you want to switch back to typing with letters.</p>
      </section>
      <NoteSkinTone />
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        WhatsApp doesn&apos;t ship a separate emoji font—you use the same emoji keyboard that comes with your iPhone
        or iPad.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Use emoji in WhatsApp</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Tap the message field.</li>
          <li>Tap the emoji key or globe key on your keyboard until the emoji keyboard appears.</li>
          <li>Tap emojis to add them to the message and tap Send.</li>
        </ol>
      </section>
      <div className="mt-8 rounded-lg border border-[#b8d9f0] bg-[#eef6fc] px-4 py-3 text-[15px] leading-6">
        <p className="font-semibold text-[#111b21]">Note</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[#3b4a54] marker:text-[#111b21]">
          <li>Emoji appearance and picker layout depend on your iOS/iPadOS version.</li>
          <li>New emojis normally arrive through system and WhatsApp updates over time.</li>
          <li>For emojis that support it, tap and hold to choose a skin tone.</li>
        </ul>
      </div>
    </>
  );
}

function DesktopContent({ platform }) {
  const label =
    platform === 'web'
      ? 'WhatsApp Web'
      : platform === 'mac'
        ? 'WhatsApp for Mac'
        : 'WhatsApp for Windows';
  return (
    <>
      <p>
        In {label}, you can open the emoji panel from the message box to browse and insert emojis in any chat thread.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Use emoji in WhatsApp</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Click the emoji (smiley) icon beside the message field.</li>
          <li>Select a category or search, then click an emoji to insert it.</li>
          <li>Add more text if you like, then press Enter or click Send.</li>
        </ol>
      </section>
      <div className="mt-8 rounded-lg border border-[#b8d9f0] bg-[#eef6fc] px-4 py-3 text-[15px] leading-6">
        <p className="font-semibold text-[#111b21]">Note</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[#3b4a54] marker:text-[#111b21]">
          <li>Emoji styling follows your desktop operating system.</li>
          <li>Use the latest version of WhatsApp and your OS for the newest emoji glyphs.</li>
        </ul>
      </div>
      <NoteSkinTone />
    </>
  );
}

export default function HowToUseEmojiArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use emoji
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl space-y-6 text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidContent />
        ) : platform === 'ios' ? (
          <IOSContent />
        ) : (
          <DesktopContent platform={platform} />
        )}

        <section className="border-t border-black/[0.08] pt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-edit-photos-and-videos?platform=${platform}`}>
                How to use emoji to edit photos and videos
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-stickers?platform=${platform}`}>
                How to use stickers
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
