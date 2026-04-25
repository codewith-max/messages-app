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

export default function CantDownloadUpdateArticle() {
  const [tab, setTab] = useState('android');

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t download or update WhatsApp
        </h1>
        <CopyLinkButton />
      </div>

      <div
        className="mb-8 flex w-full max-w-md border-b border-black/[0.1]"
        role="tablist"
        aria-label="Choose your device"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'android'}
          onClick={() => setTab('android')}
          className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'android'
              ? 'border-[#008069] text-[#008069]'
              : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          Android
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'ios'}
          onClick={() => setTab('ios')}
          className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'ios'
              ? 'border-[#008069] text-[#008069]'
              : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          iOS
        </button>
      </div>

      {tab === 'android' ? (
        <div className="max-w-3xl space-y-8 text-[16px] leading-7 text-[#3b4a54]">
          <p>
            If you see an error when you try to update or install WhatsApp from the Google Play Store, try the steps
            below for the message or error code you see.
          </p>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">There&apos;s insufficient space on the device</h2>
            <p className="mt-3">
              Free up space on your phone by removing apps, photos, or other files. Then open the Google Play Store
              and try again.
            </p>
            <p className="mt-3">
              You can also try clearing the Google Play Store cache and data: go to <strong>Settings</strong> &gt;{' '}
              <strong>Apps</strong> &gt; <strong>Google Play Store</strong> &gt; <strong>Storage</strong> &gt; tap{' '}
              <strong>Clear cache</strong>, then <strong>Clear data</strong>. Re-open the Play Store and try
              installing or updating WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">This app is incompatible with your device</h2>
            <p className="mt-3">
              Check that your phone is running a{' '}
              <Link className={linkClass} href="/help-center">
                supported version of Android
              </Link>
              . If the device is very old, WhatsApp may no longer be available for it in the store.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">This item isn&apos;t available in your country</h2>
            <p className="mt-3">
              The Play Store may block downloads in your region, or the listing may be temporarily unavailable. You can
              check Google Play Help, or in some cases download the WhatsApp APK from{' '}
              <a
                className={linkClass}
                href="https://www.whatsapp.com/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                whatsapp.com/download
              </a>{' '}
              (only from official links).
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">Other error codes</h2>
            <p className="mt-3">
              If you see codes such as <strong className="text-[#111b21]">413</strong>, <strong>481</strong>,{' '}
              <strong>491</strong>, or <strong>905</strong>, try: removing and re-adding your Google account on the
              device, restarting the phone, and clearing the Google Play Store cache and data as above.
            </p>
            <p className="mt-3">
              For <strong className="text-[#111b21]">101</strong>, <strong>498</strong>, or <strong>919</strong>, you may
              be low on space—follow the &quot;insufficient space&quot; steps.
            </p>
            <p className="mt-3">
              For <strong className="text-[#111b21]">403</strong>, <strong>495</strong>, <strong>504</strong>, and
              similar network errors, check your connection, try another network, and ensure date and time on the device
              are set correctly. You can also install or update from the APK on{' '}
              <a
                className={linkClass}
                href="https://www.whatsapp.com/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                whatsapp.com/download
              </a>
              , then return to the Play Store for future updates if possible.
            </p>
            <p className="mt-3">
              <strong className="text-[#111b21]">Error 490: </strong>
              This often means the Play Store needs to refresh. Clear Play Store and Google Play Services cache, restart
              the device, and try again.
            </p>
          </section>
        </div>
      ) : (
        <div className="max-w-3xl space-y-8 text-[16px] leading-7 text-[#3b4a54]">
          <div>
            <p>
              If you can&apos;t download or update WhatsApp from the App Store, it&apos;s probably due to one of the
              following error codes:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>&quot;There&apos;s insufficient space on the device&quot;</li>
              <li>&quot;This app is incompatible with your device&quot;</li>
              <li>&quot;This item isn&apos;t available in your country&quot;</li>
            </ul>
            <p className="mt-3">Learn more about each of these error codes below.</p>
            <p className="mt-2">
              <span className="font-bold text-[#111b21]">Note: </span>
              Before deleting WhatsApp data or clearing cache on your device, consider backing up your chats to save
              your chat history. Learn more about backing up your chat history{' '}
              <Link className={linkClass} href="/help-center">
                here
              </Link>
              .
            </p>
          </div>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">&quot;There&apos;s insufficient space on the device&quot;</h2>
            <p className="mt-3">
              If you&apos;re unable to install WhatsApp due to insufficient space on your device, try the following:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Delete data and apps you no longer use.</li>
              <li>Clear cached data.</li>
            </ul>
            <p className="mt-3">A minimum of 1 GB of free space is recommended when installing or updating apps.</p>
            <p className="mt-2">
              <span className="font-bold text-[#111b21]">Note: </span>
              If you delete your WhatsApp photos, voice messages, or videos, you can&apos;t see or listen to them
              anymore.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">&quot;This app is incompatible with your device&quot;</h2>
            <p className="mt-3">
              Read about supported iOS devices in this{' '}
              <Link className={linkClass} href="/help-center">
                article
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">
              &quot;This app is currently not available in your country or region&quot;
            </h2>
            <p className="mt-3">
              If an error says the app isn&apos;t available in your country, please check{' '}
              <a className={linkClass} href="https://support.apple.com" target="_blank" rel="noopener noreferrer">
                Apple Support
              </a>{' '}
              for specific troubleshooting steps.
            </p>
          </section>
        </div>
      )}
    </article>
  );
}
