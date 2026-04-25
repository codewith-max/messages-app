'use client';

import { useCallback, useEffect, useState } from 'react';
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

function LinkedDevicesCard() {
  return (
    <div className="mt-5 rounded-md bg-[#f0f2f5] p-4 text-[15px] leading-6 text-[#3b4a54]">
      <p>
        WhatsApp also supports a selection of devices that you can securely link to your main device including iPad,
        Android tablets and WearOS smart watches.
      </p>
      <Link className={`${linkClass} mt-1 inline-block`} href="/help-center">
        Learn more about Linked Devices.
      </Link>
    </div>
  );
}

export default function SupportedDevicesArticle() {
  const [tab, setTab] = useState('android');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const platform = params.get('platform');
    if (platform === 'ios' || platform === 'android') {
      setTab(platform);
    }
  }, []);

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About supported devices
        </h1>
        <CopyLinkButton />
      </div>

      <div className="mb-8 flex w-full max-w-md border-b border-black/[0.1]" role="tablist" aria-label="Choose your device">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'android'}
          onClick={() => setTab('android')}
          className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'android' ? 'border-[#008069] text-[#008069]' : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
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
            tab === 'ios' ? 'border-[#008069] text-[#008069]' : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          iOS
        </button>
      </div>

      {tab === 'android' ? (
        <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
          <p>WhatsApp works on many Android devices.</p>
          <p className="mt-1">This includes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Android phones with Android 5.0 and newer</li>
            <li>Android phones that can receive SMS messages or calls.</li>
          </ul>
          <p className="mt-3 text-[13px] leading-6">*Starting September 8, 2026, only Android version 6 and newer will be supported.</p>
          <p className="mt-4">We stop supporting older devices and operating systems on an ongoing basis.</p>
          <p className="mt-3">
            This is so we can support newer ones and keep up with the latest advances in technology and security.
          </p>
          <p className="mt-3">We&apos;ll tell you if we stop supporting your device or operating system.</p>
          <p className="mt-2">
            We&apos;ll remind you a few times to upgrade your device to continue using WhatsApp. We&apos;ll also keep this article
            updated.
          </p>
          <LinkedDevicesCard />

          <section className="mt-8">
            <h3 className="text-[17px] font-bold text-[#111b21]">Related resources:</h3>
            <ul className="mt-2 list-disc pl-5 text-[16px] font-semibold text-[#008069]">
              <li>
                <Link className={linkClass} href="/help-center/supported-operating-systems">
                  About supported operating systems
                </Link>
              </li>
            </ul>
          </section>
        </div>
      ) : (
        <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
          <p>WhatsApp works on many iOS devices.</p>
          <p className="mt-1">This includes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>iPhones with iOS 15.1 and newer.</li>
            <li>iPhones that can receive SMS messages or calls.</li>
          </ul>
          <p className="mt-4">For the best experience using WhatsApp on iOS:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Use the latest iOS version available.</li>
            <li>Don&apos;t use jailbroken or unlocked devices. We don&apos;t support modified versions of the iPhone operating system.</li>
          </ul>
          <p className="mt-4">We stop supporting older devices and operating systems on an ongoing basis.</p>
          <p className="mt-3">
            This is so we can support newer ones and keep up with the latest advances in technology and security.
          </p>
          <p className="mt-3">We&apos;ll tell you if we stop supporting your device or operating system.</p>
          <p className="mt-2">
            We&apos;ll remind you a few times to upgrade your device to continue using WhatsApp. We&apos;ll also keep this article
            updated.
          </p>
          <LinkedDevicesCard />

          <section className="mt-8">
            <h3 className="text-[17px] font-bold text-[#111b21]">Related resources:</h3>
            <ul className="mt-2 list-disc pl-5 text-[16px] font-semibold text-[#008069]">
              <li>
                <Link className={linkClass} href="/help-center/supported-operating-systems">
                  About supported operating systems
                </Link>
              </li>
            </ul>
          </section>
        </div>
      )}
    </article>
  );
}
