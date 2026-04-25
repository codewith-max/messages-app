'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutTwoStepVerificationArticle() {
  const [tab, setTab] = useState('android');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const platform = params.get('platform');
    if (platform === 'ios' || platform === 'android') setTab(platform);
  }, []);

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About two-step verification
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="mb-6 flex w-full max-w-[260px] border-b border-black/[0.1]" role="tablist" aria-label="Choose your device">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'android'}
          onClick={() => setTab('android')}
          className={`flex min-h-[40px] flex-1 items-center justify-center gap-1.5 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'android' ? 'border-[#008069] text-[#008069]' : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M7.2 8.1a5 5 0 019.6 0h1.7a1 1 0 010 2h-.9v5.9a1.8 1.8 0 01-1.8 1.8h-.7v2.1a1 1 0 11-2 0v-2.1h-2.2v2.1a1 1 0 11-2 0v-2.1h-.7A1.8 1.8 0 016.4 16v-5.9h-.9a1 1 0 010-2zm2.2-.1a.8.8 0 10-.8-.8.8.8 0 00.8.8zm5.2 0a.8.8 0 10-.8-.8.8.8 0 00.8.8z" />
          </svg>
          Android
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'ios'}
          onClick={() => setTab('ios')}
          className={`flex min-h-[40px] flex-1 items-center justify-center gap-1.5 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'ios' ? 'border-[#008069] text-[#008069]' : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M16.365 1.43c0 1.14-.467 2.182-1.04 2.925-.62.79-1.64 1.4-2.66 1.32-.13-1.08.38-2.19.96-2.89.64-.77 1.74-1.36 2.74-1.35zm4.07 16.46c-.36.83-.79 1.59-1.29 2.29-.69.97-1.25 1.64-1.68 2.01-.66.61-1.37.92-2.13.93-.55 0-1.22-.16-1.99-.48-.78-.32-1.5-.48-2.16-.48-.69 0-1.43.16-2.24.48-.81.32-1.46.49-1.95.5-.74.03-1.47-.3-2.17-.97-.45-.39-1.04-1.08-1.77-2.07-.79-1.07-1.44-2.3-1.95-3.71-.55-1.52-.83-2.99-.83-4.4 0-1.61.35-3 1.04-4.16a6.17 6.17 0 0 1 2.2-2.22A5.94 5.94 0 0 1 8.46 5c.58 0 1.35.18 2.3.54.95.36 1.56.54 1.83.54.2 0 .89-.22 2.06-.67 1.1-.42 2.03-.59 2.78-.52 2.04.16 3.57.97 4.59 2.44-1.82 1.1-2.72 2.65-2.7 4.63.02 1.54.57 2.82 1.66 3.85.49.47 1.04.83 1.65 1.1-.13.38-.27.74-.42 1.08z" />
          </svg>
          iOS
        </button>
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Two-step verification is an optional feature that adds more security to your WhatsApp account. You&apos;ll see
          the two-step verification screen after you successfully register your phone number on WhatsApp.
        </p>
        <p className="mt-2">
          <span className="font-semibold text-[#111b21]">Note:</span> The two-step verification PIN is different from
          the 6-digit registration code you receive via SMS or phone call.
        </p>

        <div className="mt-4 overflow-hidden rounded-md border border-black/[0.06] bg-[#1f8f86]">
          <div className="relative flex min-h-[220px] items-center justify-center px-6 py-10 sm:min-h-[260px]">
            <p className="text-[42px] font-semibold leading-none text-white/85">How to use</p>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-black/20">
                <svg className="ml-1 h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/25 px-3 py-1.5 text-center text-[13px] font-semibold text-white">
              How to use two-step verification to protect your WhatsApp account
            </div>
          </div>
        </div>

        <p className="mt-4">
          When you enable two-step verification, you have the option to enter your email address. This allows WhatsApp
          to email you a reset link in case you ever forget your PIN.
        </p>
        <p className="mt-3">
          Learn more about managing two-step verification settings in{' '}
          <Link href="/help-center/manage-two-step-verification-settings" className={linkClass}>
            this article
          </Link>
          .
        </p>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Learn how to{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                protect your account
              </Link>
            </li>
            <li>
              Learn more about{' '}
              <Link href="/help-center/about-two-step-verification" className={linkClass}>
                two-step verification and payments in India
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/reset-two-step-verification-pin" className={linkClass}>
                reset your two-step verification PIN
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
