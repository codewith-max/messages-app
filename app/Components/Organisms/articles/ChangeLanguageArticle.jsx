'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
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

export default function ChangeLanguageArticle() {
  const [tab, setTab] = useState('android');

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to change WhatsApp&apos;s language
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
        <div className="max-w-3xl space-y-8 text-[16px] leading-7 text-[#3b4a54]">
          <div>
            <p>
              WhatsApp is available in over <strong className="text-[#111b21]">40 languages on iPhone</strong> and up to{' '}
              <strong className="text-[#111b21]">60 on Android</strong>.
            </p>
            <p className="mt-3">WhatsApp follows your phone language. If you switch your phone to Spanish, WhatsApp also becomes Spanish.</p>
          </div>
          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">Change your phone&apos;s language</h2>
            <ol className="mt-3 ml-1 list-decimal space-y-2 pl-5 marker:font-bold marker:text-[#111b21]">
              <li>Go to your phone&apos;s <strong className="text-[#111b21]">Settings</strong>.</li>
              <li>Tap <strong className="text-[#111b21]">System</strong> &gt; <strong className="text-[#111b21]">Language &amp; region</strong>.</li>
              <li>Tap <strong className="text-[#111b21]">System Languages</strong> &gt; <strong className="text-[#111b21]">Add a language</strong>.</li>
              <li>Tap a language &gt; <strong className="text-[#111b21]">Change</strong>.</li>
            </ol>
            <div className="mt-4 w-full max-w-[700px] overflow-hidden rounded-sm bg-[#f1ebe4]">
              <Image src="/image/languagecahnge.png" alt="Android app language settings screenshots" width={1024} height={640} className="h-auto w-full" priority />
            </div>
          </section>
          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">Change your language in WhatsApp</h2>
            <p className="mt-3">If your Android supports it, you can also set language inside WhatsApp.</p>
            <ol className="mt-3 ml-1 list-decimal space-y-2 pl-5 marker:font-bold marker:text-[#111b21]">
              <li>Tap <strong className="text-[#111b21]">More options</strong> &gt; <strong className="text-[#111b21]">Settings</strong> &gt; <strong className="text-[#111b21]">App Language</strong>.</li>
              <li>Tap a language.</li>
            </ol>
            <p className="mt-3"><span className="font-bold text-[#111b21]">Note: </span>Can&apos;t see this feature? It may not be available in your country or region.</p>
          </section>
          <section>
            <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] font-semibold text-[#008069]">
              <li><Link className={linkClass} href="/help-center">About the languages WhatsApp is available in</Link></li>
              <li><Link className={linkClass} href="/help-center">About WhatsApp support languages</Link></li>
            </ul>
          </section>
        </div>
      ) : (
        <div className="max-w-3xl space-y-8 text-[16px] leading-7 text-[#3b4a54]">
          <div>
            <p>
              WhatsApp is available in over <strong className="text-[#111b21]">40 languages on iPhone</strong> and up to{' '}
              <strong className="text-[#111b21]">60 on Android</strong>.
            </p>
            <p className="mt-3">WhatsApp follows your phone language. If you switch your phone to Spanish, WhatsApp also becomes Spanish.</p>
          </div>
          <section>
            <h2 className="text-[20px] font-bold text-[#111b21]">Change your iPhone language</h2>
            <ol className="mt-3 ml-1 list-decimal space-y-2 pl-5 marker:font-bold marker:text-[#111b21]">
              <li>Go to your phone&apos;s <strong className="text-[#111b21]">Settings</strong>.</li>
              <li>Tap <strong className="text-[#111b21]">General</strong>.</li>
              <li>Tap <strong className="text-[#111b21]">Language &amp; Region</strong>.</li>
              <li>Tap <strong className="text-[#111b21]">Add Language</strong>.</li>
              <li>Choose a language and a primary language.</li>
            </ol>
          </section>
          <section>
            <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] font-semibold text-[#008069]">
              <li><Link className={linkClass} href="/help-center">About supported iOS devices</Link></li>
              <li><Link className={linkClass} href="/help-center/cant-download-update">Can&apos;t download or update WhatsApp</Link></li>
            </ul>
          </section>
        </div>
      )}
    </article>
  );
}
