'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutChangingPhonesArticle() {
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
          About changing phones
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
          It&apos;s easy to switch to a new phone and transfer your WhatsApp account. You can either move to the same
          type of phone, or move to a different type of phone (iPhone to Android, or Android to iPhone).
        </p>
        <p className="mt-3">
          Sometimes, we may need to ensure your account is secure while changing devices. In these cases, you&apos;ll
          need to wait to receive your verification code. We can&apos;t speed up this wait time.
        </p>
        <p className="mt-2">
          <span className="font-semibold text-[#111b21]">Note:</span> You might get a notification on your old phone to
          confirm that it&apos;s you trying to change devices. In this case, confirm you&apos;re moving your WhatsApp
          to your new phone.
        </p>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Move to the same type of phone</h2>
          <p className="mt-3">
            There are three ways to transfer an account from an old {tab === 'android' ? 'Android' : 'iPhone'} device
            to a new {tab === 'android' ? 'Android' : 'iPhone'} device.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Account transfer</li>
            <li>{tab === 'android' ? 'Google Account backups' : 'iCloud backups'}</li>
            <li>Chat transfer</li>
          </ul>
          <p className="mt-3">
            Before you transfer your account to a new phone, your old phone must remain active. Learn how to transfer
            your account to a new phone in{' '}
            <Link href="/help-center/register-phone-number" className={linkClass}>
              this article
            </Link>
            .
          </p>
          <p className="mt-2">
            Once it&apos;s backed up, you can{' '}
            <Link href="/help-center/backup-restore-chats" className={linkClass}>
              restore your chat history
            </Link>{' '}
            on your new phone.
          </p>
          <p className="mt-2">
            Alternatively, you can{' '}
            <Link href="/help-center/register-phone-number" className={linkClass}>
              transfer your chat history
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Move to a different type of phone</h2>
          <p className="mt-3">
            If you&apos;re switching from an {tab === 'android' ? 'Android phone' : 'iPhone'} to an{' '}
            {tab === 'android' ? 'iPhone' : 'Android phone'}, you can keep your account information.
          </p>
          <p className="mt-2">
            You can transfer chat history from{' '}
            <Link href="/help-center/backup-restore-chats" className={linkClass}>
              {tab === 'android' ? 'an Android phone to an iPhone' : 'an iPhone to an Android phone'}
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Delete chats from your old phone</h2>
          <p className="mt-3">
            If you move to a new phone, we recommend deleting the chats on your old phone to help keep your chats
            private. Learn how to{' '}
            <Link href="/help-center" className={linkClass}>
              delete your chats from your old device
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Keep your phone number</h2>
          <p className="mt-3">
            To keep your phone number when changing phones, simply download WhatsApp on your new phone to re-register
            your phone number.
          </p>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp on your new phone.</li>
            <li>On the Welcome screen, tap Agree and continue.</li>
            <li>Enter your phone number and tap Next.</li>
            <li>Confirm your phone number and tap OK.</li>
            <li>Check your old phone for the 6-digit code and enter it on your new phone.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Change to a new phone number</h2>
          <p className="mt-3">
            If you&apos;re changing phone numbers and want to keep your chat history, you must first{' '}
            <Link href="/help-center/register-phone-number" className={linkClass}>
              change numbers on your old phone
            </Link>
            .
          </p>
          <p className="mt-2">
            To change to a new phone number without keeping your chat history, simply download WhatsApp on your new
            phone and register your new phone number.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Troubleshooting common issues with changing phones</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Make sure you&apos;re entering the correct phone number and verification code.</li>
            <li>Restart your phone and try again.</li>
            <li>Check your old phone&apos;s settings to ensure that WhatsApp is allowed to send you notifications.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">What to do if your phone is lost or stolen</h2>
          <p className="mt-3">
            If your old phone was lost or stolen,{' '}
            <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
              follow these steps
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              About{' '}
              <Link href="/help-center/about-changing-phones" className={linkClass}>
                changing phone numbers
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/register-phone-number" className={linkClass}>
                change your phone number
              </Link>
            </li>
            <li>
              <Link href="/help-center/cant-register-phone-number" className={linkClass}>
                Can&apos;t change phone number
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
