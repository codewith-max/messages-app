'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-3 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-create-gifs';

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

export default function HowToCreateGifsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to create GIFs
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl space-y-8 text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp allows you to send Live Photos or videos that are less than six seconds long as looping GIFs in a
          chat.
        </p>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create a GIF from media in a chat</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open an individual or group chat.</li>
            <li>
              {isAndroid ? (
                <>Tap the attachment (paperclip) icon, then tap Gallery or Photos.</>
              ) : (
                <>Tap the + icon next to the message field, then choose Photo &amp; Video Library or similar.</>
              )}
            </li>
            <li>
              {isAndroid ? (
                <>Pick a video under six seconds, or a motion photo / supported Live Photo from your gallery.</>
              ) : (
                <>Select a Live Photo or a video that&apos;s shorter than six seconds.</>
              )}
            </li>
            <li>
              {isAndroid ? (
                <ul className="mt-1 list-disc space-y-1 pl-5 marker:text-[#111b21]">
                  <li>
                    <span className="font-semibold text-[#111b21]">Motion or Live Photo:</span> if your phone offers it,
                    choose to send or convert as a GIF or looping animation.
                  </li>
                  <li>
                    <span className="font-semibold text-[#111b21]">Short video:</span> trim if needed so the clip is
                    under six seconds; WhatsApp may treat it as a looping GIF-style preview when you send.
                  </li>
                </ul>
              ) : (
                <ul className="mt-1 list-disc space-y-1 pl-5 marker:text-[#111b21]">
                  <li>
                    <span className="font-semibold text-[#111b21]">Live Photo:</span> open it, then choose the option to
                    send as GIF or loop (labels depend on your iOS and WhatsApp version).
                  </li>
                  <li>
                    <span className="font-semibold text-[#111b21]">Short video:</span> confirm it&apos;s under six
                    seconds; you can trim in the editor before sending.
                  </li>
                </ul>
              )}
            </li>
            <li>Tap Send.</li>
          </ol>
        </section>

        <p>
          To learn more about sending GIFs and adding GIFs to your favorites, read{' '}
          <Link className={linkClass} href={`/help-center/how-to-send-gifs?platform=${platform}`}>
            this article
          </Link>
          .
        </p>

        <section className="border-t border-black/[0.08] pt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-gifs?platform=${platform}`}>
                How to send GIFs
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-stickers?platform=${platform}`}>
                How to use stickers
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-forward-media">
                How to forward media
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
