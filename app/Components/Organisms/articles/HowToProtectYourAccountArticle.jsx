'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToProtectYourAccountArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to protect your account
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Your account security starts with keeping control of your phone number, verification code, and two-step
          verification PIN. Follow these steps to protect your account:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>Enable two-step verification and add a recovery email address.</li>
          <li>Never share your six-digit registration code or PIN with anyone.</li>
          <li>Review linked devices and log out unfamiliar sessions immediately.</li>
          <li>Use screen lock, app lock, or chat lock for extra protection.</li>
          <li>Keep your device and app updated to the latest version.</li>
          <li>Use a strong voicemail password to prevent code interception.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">If your account may be compromised</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
            <li>Re-register your phone number in WhatsApp as soon as possible.</li>
            <li>Notify your contacts that your account may have been compromised.</li>
            <li>Check Accounts Center and remove any unknown connected accounts.</li>
            <li>Contact support if you can no longer access your account.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Security reminders</h2>
          <p className="mt-3">
            If you receive unrequested emails to reset your PIN or registration code, don&apos;t click any links.
            Always open WhatsApp directly to manage your account settings.
          </p>
          <p className="mt-3">
            You can find more tips in{' '}
            <Link href="/help-center/account-security-tips" className={linkClass}>
              Account security tips
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
