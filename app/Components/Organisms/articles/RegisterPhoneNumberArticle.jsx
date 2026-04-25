'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function RegisterPhoneNumberArticle() {
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
          How to register your phone number
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
          To activate your WhatsApp Account, you must register an active phone number for verification. We will send
          you a registration code to confirm that you own the phone number you want to use on WhatsApp. The
          registration code is unique and changes each time you register a new phone number or device.
        </p>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Registration requirements</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>You can only register a phone number you own.</li>
            <li>You must be able to receive phone calls and SMS to the number you are trying to register.</li>
            <li>Make sure you&apos;re using the latest version of WhatsApp on your phone.</li>
            <li>You must have any call-blocking settings, apps or task killers disabled.</li>
            <li>
              You must have a working internet connection through mobile data or Wi-Fi. If you&apos;re roaming or have
              a bad connection, registration might not work. Try opening a web page to make sure.
            </li>
            <li>Don&apos;t use an unsupported device to register, such as an iPad.</li>
            <li>Make sure your device isn&apos;t jailbroken.</li>
            <li>If you want to use both WhatsApp Business and WhatsApp, you&apos;ll need to use a unique phone number for each app.</li>
            <li>
              You must use a supported phone number. Unsupported phone numbers include: VoIP, toll-free numbers,
              paid premium numbers, universal access numbers (UAN), and landlines (landlines are only supported on
              the WhatsApp Business app).
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Register your phone number</h2>
          <p className="mt-3">
            You can register your phone number with an SMS or phone call. Depending on your carrier, you might receive
            charges for SMS and phone calls.
          </p>
          <ol className="mt-3 ml-1 list-decimal space-y-2 pl-5 marker:font-bold marker:text-[#111b21]">
            <li>Open WhatsApp.</li>
            <li>
              Tap <strong className="text-[#111b21]">Agree and continue</strong>.
            </li>
            {tab === 'android' ? (
              <>
                <li>Select your country and enter your phone number in full international format.</li>
                <li>Tap <strong className="text-[#111b21]">Next</strong>.</li>
              </>
            ) : (
              <>
                <li>Allow notifications for calls and messages if you&apos;re prompted.</li>
                <li>Select your country from the dropdown and enter your phone number in full international format.</li>
                <li>Tap <strong className="text-[#111b21]">Next</strong>.</li>
              </>
            )}
            <li>You&apos;ll receive a 6-digit code by SMS. Enter it to complete registration.</li>
          </ol>

          <p className="mt-4">
            If you don&apos;t receive a code, tap <strong className="text-[#111b21]">Didn&apos;t receive a code?</strong> and select SMS or
            Phone call to receive a new code. Wait for the progress bar to finish before you retry registration. The
            wait time can vary, but usually takes a few minutes. If it&apos;s taking more than a few minutes, or if you
            still have issues registering your phone number, try these{' '}
            <Link href="/help-center/cant-download-update" className={linkClass}>
              troubleshooting tips
            </Link>
            .
          </p>

          <p className="mt-3">
            After registering your phone number, you&apos;ll be asked to set up your account. Follow the steps on your
            device to restore an existing WhatsApp account or set up a new account.
          </p>

          <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              By entering your phone number, you authorize your wireless carrier to share data from your account and
              wireless device to WhatsApp or its service providers for phone number verification and fraud prevention
              purposes. To learn more about the data we collect and how we use it, view our{' '}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </li>
            <li>Don&apos;t guess the registration code, or you&apos;ll be locked out for a period of time.</li>
            <li>You must be able to receive the registration code via SMS or phone call.</li>
            <li>
              If you&apos;re re-registering your phone number, you can get a code via email. This is possible if
              you&apos;ve added your email address to your account in your WhatsApp settings, during your initial
              registration, or two-step verification setup.
            </li>
          </ul>
        </section>

        <section className="mt-8" id="passkey">
          <h2 className="text-[20px] font-bold text-[#111b21]">Secure your account with passkey</h2>
          <p className="mt-3">
            After registering your phone number and setting up your profile, you can create a passkey to help protect
            your account. With a passkey, you can use your fingerprint, face, or screen lock to verify your identity.
            Learn how to{' '}
            <Link href="/help-center" className={linkClass}>
              create a passkey
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Add account to Accounts Center</h2>
          <p className="mt-3">
            If you have a Facebook or Instagram account, you can link your accounts by adding your WhatsApp account to
            the Accounts Center. Learn more about{' '}
            <Link href="/help-center" className={linkClass}>
              WhatsApp in Accounts Center
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc pl-5 text-[16px] font-semibold text-[#008069]">
            <li>
              <Link className={linkClass} href="/help-center/traveling-cant-get-whatsapp-code">
                I&apos;m traveling and I can&apos;t get my WhatsApp code
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
