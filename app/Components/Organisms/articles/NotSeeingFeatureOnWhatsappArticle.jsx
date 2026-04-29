'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function NotSeeingFeatureOnWhatsappArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Not seeing a feature on WhatsApp
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Sometimes there&apos;s a short wait before a new or updated feature is available to everyone on WhatsApp. You
          may not see changes that others can, and vice versa.
        </p>
        <p className="mt-3">This is because of a few reasons:</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Beta testing program</h2>
          <p className="mt-3">
            Some users might be able to use new features before others — for example, those enrolled in WhatsApp beta.
            This means these WhatsApp users have signed up to a program which lets them test out features before we
            launch them to everyone on WhatsApp.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Countries or regions</h2>
          <p className="mt-3">
            Sometimes we launch new features in phases around the world for various reasons. You may live in a country
            or region where the feature isn&apos;t available yet.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">App not updated to latest version</h2>
          <p className="mt-3">
            If you have an older version of WhatsApp, the feature might not be available to you. Make sure to always
            keep WhatsApp updated to the latest version through Google Play or the App Store.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Specific devices</h2>
          <p className="mt-3">
            Some new or updated features are available on specific devices first. For example, iPhone users might see
            a particular feature quicker than someone on Android, and vice versa.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Slow release</h2>
          <p className="mt-3">
            Sometimes, we release features slowly. This means there can be a wait of a few hours, days or even weeks
            before every user can use a new or updated feature.
          </p>
        </section>

        <section className="mt-8">
          <p className="font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              You typically won&apos;t be able to turn off our new and updated features or go back to an old version of
              WhatsApp.
            </li>
            <li>
              It is possible to customize or rearrange the location of features or the layout of tabs in WhatsApp.
            </li>
          </ul>
          <p className="mt-5">
            We&apos;re constantly working to improve our products. To stay up to date with WhatsApp&apos;s features, keep an eye
            on our{' '}
            <Link className={linkClass} href="/help-center">
              Help Center
            </Link>
            ,{' '}
            <a className={linkClass} href="https://blog.whatsapp.com" target="_blank" rel="noopener noreferrer">
              blog
            </a>{' '}
            and social feeds.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=web">
                How to fix connection issues
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-download-update">
                Can&apos;t download or update WhatsApp
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/supported-operating-systems?platform=web">
                About supported operating systems
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
