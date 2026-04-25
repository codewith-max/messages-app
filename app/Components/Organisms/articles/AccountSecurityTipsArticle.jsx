'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AccountSecurityTipsArticle() {
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
          Account security tips
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
        <p>To better secure your WhatsApp account, follow these tips:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>Never share your registration code or two-step verification PIN with others.</li>
          <li>
            Enable{' '}
            <Link href="/help-center/manage-two-step-verification-settings" className={linkClass}>
              two-step verification
            </Link>{' '}
            and provide an email address in case you forget your PIN.
          </li>
          <li>
            We recommend you turn on{' '}
            <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
              chat lock and app lock
            </Link>{' '}
            to protect your account. You can further protect your account with your device&apos;s security settings.
          </li>
          <li>Set a voicemail password on your phone that&apos;s difficult to guess to prevent anyone from accessing your voicemail.</li>
          <li>
            Check your linked devices regularly. Tap your profile picture, then tap Linked Devices to review all devices linked
            to your account. To remove a linked device, tap the device &gt; Log Out.
          </li>
          <li>
            It&apos;s possible to add WhatsApp to your Accounts Center. If you believe someone else has access to your
            Accounts Center, reach out to support and remove unfamiliar accounts.
          </li>
          <li>
            It&apos;s also recommended to review your accounts by navigating to WhatsApp Settings and tapping Accounts Center.
            If you notice a suspicious account, you can remove it.
          </li>
        </ul>

        <p className="mt-4">
          For those who believe they may be targeted by sophisticated attacks, WhatsApp offers{' '}
          <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
            Strict account settings
          </Link>
          . This is an advanced, optional security feature that can reduce your vulnerability to cyber attacks.
        </p>

        <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            If you receive unrequested emails to reset your two-step verification PIN or registration code, don&apos;t
            click on any links.
          </li>
          <li>
            If you see the message “Your phone number was registered with WhatsApp on a new device” when you open
            WhatsApp, follow the onscreen steps to recover your account. Learn more about{' '}
            <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
              account recovery
            </Link>
            .
          </li>
        </ul>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              How to{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                recover a compromised account
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                recover a WhatsApp account from a lost or stolen device
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                stay safe on WhatsApp
              </Link>
            </li>
            <li>
              Seeing{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                “Your phone number was registered with WhatsApp on a new device”
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
