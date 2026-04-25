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

export default function SupportedOperatingSystemsArticle() {
  return (
    <article className="max-w-3xl px-4 pb-16 pt-6 text-[16px] leading-7 text-[#3b4a54] sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About supported operating systems
        </h1>
        <CopyLinkButton />
      </div>

      <div className="space-y-3">
        <p>Currently, we provide support for and recommend using the following devices:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Android running OS 5.0 and newer*</li>
          <li>iPhone running iOS 15.1 and newer</li>
        </ul>
        <p className="text-[13px] leading-6">*Starting September 8, 2026, only Android version 6 and newer will be supported.</p>
        <p>Once you have one of these devices, install WhatsApp and register your phone number.</p>
        <p>
          <span className="font-bold text-[#111b21]">Note: </span>
          Your phone must be able to receive SMS or calls during the verification process. We don&apos;t support setting up new
          accounts on WiFi only devices.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-[20px] font-bold text-[#111b21]">How we choose what to support</h2>
        <p className="mt-3">
          Devices and software change often, so we regularly review what operating systems we support and make updates.
        </p>
        <p className="mt-3">
          Every year we look at which devices and software are the oldest and have the fewest users. These devices also
          might not have the latest security updates, or might lack the functionality required to run WhatsApp.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-[20px] font-bold text-[#111b21]">
          What happens if your operating system is no longer supported
        </h2>
        <p className="mt-3">
          Before we stop supporting your operating system, you&apos;ll be notified in WhatsApp and reminded a few times to
          upgrade.
        </p>
        <p className="mt-3">
          We&apos;ll update this page regularly to ensure that the latest operating systems that we support are listed.
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-[17px] font-bold text-[#111b21]">Related resources:</h3>
        <ul className="mt-2 list-disc pl-5 text-[16px] font-semibold text-[#008069]">
          <li>
            <Link className={linkClass} href="/help-center/supported-devices">
              About supported devices
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
