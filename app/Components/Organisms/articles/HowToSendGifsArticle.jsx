'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-3 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-send-gifs';

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

export default function HowToSendGifsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to send GIFs
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl space-y-10 text-[16px] leading-7 text-[#3b4a54]">
        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send GIFs in a chat</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open an individual or group chat.</li>
            <li>
              {isAndroid ? (
                <>Tap the emoji icon, then tap GIF.</>
              ) : (
                <>
                  Tap the (+) icon next to the message field, then tap GIF or search GIFs (options may vary by WhatsApp
                  version).
                </>
              )}
            </li>
            <li>To search for a specific GIF, enter a keyword in the search field, browse results, and tap the GIF you want to send.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add GIFs to your favorites</h2>
          {isAndroid ? (
            <>
              <p className="mt-3">Tap and hold the GIF.</p>
              <p className="mt-2">Tap Star or Add to favorites when shown (wording depends on your version).</p>
            </>
          ) : (
            <>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Open a chat and browse GIFs from search or tap a GIF you&apos;ve already sent.</li>
                <li>Touch and hold the GIF.</li>
                <li>Tap Add to Favorites when it appears.</li>
              </ol>
            </>
          )}
        </section>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Remove a GIF from your favorites</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              {isAndroid ? (
                <>Open the emoji panel and go to GIF, or open GIF search from a chat.</>
              ) : (
                <>Open a chat, then open the GIF panel or GIF search from the composer.</>
              )}
            </li>
            <li>
              {isAndroid ? (
                <>Tap the star or Favorites tab to see saved GIFs.</>
              ) : (
                <>Find the section for favorites or starred GIFs (often in the GIF browser).</>
              )}
            </li>
            <li>Tap and hold the GIF you want to remove.</li>
            <li>
              {isAndroid ? (
                <>Tap Remove from favorites or the unstar option.</>
              ) : (
                <>Tap Remove from Favorites or the option to unstar.</>
              )}
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Looping clips (create a GIF)</h2>
          <p className="mt-3">
            Short videos and supported Live Photos under six seconds can be sent as looping GIF-style messages. Read{' '}
            <Link className={linkClass} href={`/help-center/how-to-create-gifs?platform=${platform}`}>
              How to create GIFs
            </Link>{' '}
            for full steps.
          </p>
        </section>

        <section className="border-t border-black/[0.08] pt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-create-gifs?platform=${platform}`}>
                How to create GIFs
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-stickers?platform=${platform}`}>
                How to use stickers
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-media-contacts-or-location?platform=${platform}`}>
                How to send media, contacts, or location
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
