'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function VideoPlaceholder() {
  return (
    <div className="relative mt-4 overflow-hidden bg-[#cce9dd]">
      <div className="aspect-[16/9] w-full" />
      <button
        type="button"
        aria-label="Play video"
        className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/85 text-white"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M8 6v12l10-6z" />
        </svg>
      </button>
    </div>
  );
}

export default function HowToForwardMediaArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to forward media
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can forward photos, videos, documents, and voice messages from individual and group chats to up to five
          chats at once.
        </p>
        <p className="mt-3">
          Messages and media that are forwarded many times may have limits to help prevent spam. Learn more about{' '}
          <Link className={linkClass} href="/help-center/about-forwarding-limits">
            forwarding limits
          </Link>
          .
        </p>

        <VideoPlaceholder />

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Forward media</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open an individual or group chat and find the media you want to forward.</li>
            <li>Press and hold the photo, video, document, or voice message, then tap Forward.</li>
            <li>Search for or select the chats you want to forward the media to.</li>
            <li>Tap Send.</li>
          </ol>
        </section>

        <section className="mt-8 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p className="font-semibold">Notes</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Forwarded media shows a forwarded label to recipients.</li>
            <li>You can only forward to up to five chats at a time.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-send-media-contacts-or-location?platform=android">
                How to send media, contacts, or location
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/finding-media-files?platform=android">
                Finding media files
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-forward-messages">
                How to forward messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
