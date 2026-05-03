'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-3 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-create-and-share-custom-stickers-and-sticker-packs';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[320px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
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

function NoteCard({ title = 'Note', children }) {
  return (
    <div className="mt-4 rounded-lg border border-[#b8d9f0] bg-[#eef6fc] px-4 py-3 text-[15px] leading-6 text-[#111b21]">
      <p className="font-semibold">{title}</p>
      <div className="mt-1 text-[#3b4a54]">{children}</div>
    </div>
  );
}

export default function CustomStickersAndStickerPacksArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to create and share custom stickers and sticker packs
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <NoteCard>
          <p>
            Make sure WhatsApp is updated to the latest version. Some sticker features may vary by region and device.
          </p>
        </NoteCard>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create a custom sticker from a photo</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            {isAndroid ? (
              <>
                <li>Open an individual or group chat.</li>
                <li>Tap the emoji icon, then tap the stickers tab.</li>
                <li>Tap Create or the add (+) icon, then choose an image from your gallery.</li>
                <li>Cut out your subject if prompted, add optional text or doodles, then tap Add or Done to save.</li>
              </>
            ) : (
              <>
                <li>Open an individual or group chat.</li>
                <li>Tap the sticker icon in the message field.</li>
                <li>Tap the plus (+) button and select a photo to turn into a sticker.</li>
                <li>Edit the sticker as needed, then tap Add to stickers or Done.</li>
              </>
            )}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create an AI sticker</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open a chat and open the sticker tray.</li>
            <li>Choose the option to create with AI (for example “Generate” or similar).</li>
            <li>Describe the sticker you want in a short phrase.</li>
            <li>Pick a generated result you like and add it to your stickers.</li>
          </ol>
          <NoteCard title="Note">
            <p>
              AI sticker descriptions may be supported only in certain languages (such as English, Indonesian,
              Portuguese, and Spanish), and AI stickers may only be offered in limited countries or accounts.
            </p>
          </NoteCard>
        </section>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create a sticker pack</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open the stickers tray from any chat.</li>
            <li>Go to your personal or custom sticker area (for example My stickers).</li>
            <li>Use create or add options to make a new pack, then save your pack name.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add to an existing sticker pack</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open the sticker tray and find the pack under your stickers.</li>
            <li>Tap Edit or Manage (often shown as a pencil icon), depending on your app version.</li>
            <li>Add new stickers from photos or edits, arrange them, then save.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Upload stickers</h2>
          <p className="mt-3">When you upload or import sticker images, each file generally needs to meet these requirements:</p>

          <h3 className="mt-6 text-[18px] font-semibold text-[#111b21]">Static sticker requirements</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Maximum sticker file size usually under 100 KB.</li>
            <li>Up to around 30 stickers per pack (limits can vary).</li>
            <li>Square artwork at 512 × 512 pixels.</li>
          </ul>

          <h3 className="mt-6 text-[18px] font-semibold text-[#111b21]">Animated sticker requirements</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Maximum sticker file size usually under 100 KB.</li>
            <li>Up to around 30 stickers per pack.</li>
            <li>Total animation length typically no more than about 10 seconds.</li>
            <li>Square artwork at 512 × 512 pixels.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share your sticker pack</h2>
          <p className="mt-3">Once you&apos;ve created and imported a sticker pack, you can share it from a chat.</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open an individual or group chat.</li>
            <li>Tap the sticker icon, then the add (+) or manage option for your packs.</li>
            <li>Choose your pack or the share/send option shown on screen (often a share or overflow menu).</li>
            <li>Tap Send to share the pack link or preview with your contact.</li>
          </ol>
        </section>

        <NoteCard title="Note">
          <p>
            You&apos;re responsible for stickers you create or share—they should follow applicable laws and our terms.
            Learn more in our{' '}
            <Link className={linkClass} href="/privacy">
              Terms of Service and policies
            </Link>
            .
          </p>
        </NoteCard>

        <section className="mt-10 border-t border-black/[0.08] pt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-stickers?platform=${platform}`}>
                How to use stickers
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-create-gifs?platform=${platform}`}>
                How to create GIFs
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-gifs?platform=${platform}`}>
                How to send GIFs
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
