'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function CopyLinkButton() {
  const [done, setDone] = useState(false);

  const copy = useCallback(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (url && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(url).then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.1] bg-white px-3 py-1.5 text-[14px] font-semibold text-[#111b21] shadow-sm transition hover:bg-[#f0f2f4]"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
      {done ? 'Copied' : 'Copy link'}
    </button>
  );
}

export default function AdsStatusChannelsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Ads in WhatsApp Status and Channels
        </h1>
        <CopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded bg-[#f0f2f5] px-4 py-3 text-[15px] leading-6">
          <p>
            If you&apos;re only using WhatsApp for personal messaging, you won&apos;t see ads. Ads will only appear in Status
            and Channels, separate from your personal chats and calls.
          </p>
          <p className="mt-2">
            Ads in WhatsApp Status and Channels are rolling out gradually and may not be available to you yet.
          </p>
        </div>

        <section className="mt-8" id="how-ads-work">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How ads work</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center">
                ads on WhatsApp Status and Channels
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center">
                getting discovered on WhatsApp
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-8" id="control-the-ads-you-see">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Control the ads you see</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li id="ads-preferences">
              How to{' '}
              <Link className={linkClass} href="/help-center">
                view and adjust your ads preferences on WhatsApp Status or Channels
              </Link>
            </li>
            <li id="hide-report">
              How to{' '}
              <Link className={linkClass} href="/help-center">
                hide or report an ad on WhatsApp Status or Channels
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Your info and ads on WhatsApp</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              How to{' '}
              <Link className={linkClass} href="/help-center">
                request your ads report
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/privacy">
                ads and privacy in our Supplemental Privacy Policy
              </Link>
            </li>
            <li>
              Privacy at a Glance:{' '}
              <Link className={linkClass} href="/privacy">
                Additional information about Status and Channels
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
