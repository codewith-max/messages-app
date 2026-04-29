'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutSeeingAdsOnWhatsappStatusArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About seeing ads on WhatsApp Status
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-lg bg-[#e9f6ff]/90 px-4 py-4 text-[15px] leading-6 backdrop-blur-sm sm:px-5">
          <p>
            If you&apos;re only using WhatsApp for personal messaging, you won&apos;t see ads. Ads will appear in Status
            and Channels, separate from your personal chats and calls.
          </p>
          <p className="mt-3">
            Ads in WhatsApp Status and Channels are rolling out gradually and may not be available to you yet.
          </p>
        </div>

        <p className="mt-8">
          When you see an ad in Status, it will be labeled &quot;Ad&quot; and include the advertiser&apos;s name. Depending on
          the advertiser&apos;s settings, you may be able to message them from the ad.
        </p>

        <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>
            Your status updates are end-to-end encrypted. Your personal content isn&apos;t used to show you ads in
            Status.
          </li>
          <li>
            You can hide ads you don&apos;t want to see or report ads that don&apos;t follow our policies. Learn more in
            our{' '}
            <Link className={linkClass} href="/privacy">
              Terms of Service
            </Link>
            .
          </li>
          <li>
            Video ads may play for up to 30 seconds. You can tap &quot;Keep watching&quot; to continue when available.
          </li>
          <li>
            When available, tap &quot;Why you&apos;re seeing this ad&quot; to learn more about how we select ads for you.
          </li>
        </ul>

        <section className="mt-12 border-t border-black/[0.08] pt-10">
          <h2 className="text-[20px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link className={linkClass} href="/help-center/ads-status-channels#how-ads-work">
                About ads in WhatsApp Status and Channels
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/ads-status-channels#ads-preferences">
                How to view and adjust your ads preferences on WhatsApp Status and Channels
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/ads-status-channels#hide-report">
                How to hide or report an ad in WhatsApp Status or Channels
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
