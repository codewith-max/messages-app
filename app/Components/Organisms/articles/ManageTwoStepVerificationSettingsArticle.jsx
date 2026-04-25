'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function ManageTwoStepVerificationSettingsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to manage two-step verification settings
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can manage two-step verification settings in your WhatsApp account. You have the option to enable or
          disable this feature or change the PIN. You can also update the email address associated with two-step
          verification.
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

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Turn on two-step verification</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap WhatsApp Settings or your profile picture.</li>
            <li>Tap Account &gt; Two-step verification &gt; Turn on or Set up PIN.</li>
            <li>Enter a six-digit PIN of your choice and confirm it.</li>
            <li>
              Provide an email address you can access or tap Skip if you don&apos;t want to add an email address. We
              recommend adding an email address as this allows you to reset two-step verification, and helps safeguard
              your account.
            </li>
            <li>Tap Next.</li>
            <li>Confirm the email address and tap Save or Done.</li>
            <li>Enter the six-digit verification code sent to your email.</li>
            <li>Tap Verify.</li>
          </ol>

          <p className="mt-3">
            If you forgot your PIN, you&apos;ll need to wait 7 days before you can reset it. Alternatively, if
            you&apos;ve previously added your email address, we&apos;ll send reset instructions to your email. We
            don&apos;t verify this email address, so make sure it&apos;s accurate and accessible to you.
          </p>
          <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              For security purposes, there isn&apos;t an option for us to speed up the 7-day timeframe or disable your
              account after two-step verification is enabled.
            </li>
            <li>You will need an active SIM card in your device to complete the email verification process.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Turn off two-step verification:</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap WhatsApp Settings or your profile picture.</li>
            <li>Tap Account &gt; Two-step verification &gt; Turn off &gt; Turn off.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Change your two-step verification PIN</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap WhatsApp Settings or your profile picture.</li>
            <li>Tap Account &gt; Two-step verification &gt; Change PIN.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Add an email address</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap WhatsApp Settings or your profile picture.</li>
            <li>Tap Account &gt; Email address &gt; Add Email.</li>
            <li>Enter email address and tap Next or Verify.</li>
            <li>Enter the six-digit verification code sent to your email.</li>
            <li>Tap Verify.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Change an email address</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap WhatsApp Settings or your profile picture.</li>
            <li>Tap Account &gt; Email address &gt; Change Email &gt; Next.</li>
            <li>Enter the six-digit verification code sent to your email.</li>
            <li>Tap Verify.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources:</h3>
          <ul className="mt-2 space-y-1.5">
            <li>
              <Link className={linkClass} href="/help-center/about-two-step-verification">
                About two-step verification
              </Link>
            </li>
            <li>
              How to{' '}
              <Link className={linkClass} href="/help-center/reset-two-step-verification-pin">
                reset your two-step verification PIN
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
