'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AutomaticPhoneNumberVerificationArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About automatic phone number verification
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="mb-4 max-w-3xl rounded-md bg-[#f0f2f5] px-4 py-3 text-[15px] text-[#3b4a54]">
        This feature is only available in limited countries and may not be available to you yet.
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp can automatically verify your login when you register your phone number. You can also use manual
          verification methods such as{' '}
          <Link href="/help-center/register-phone-number" className={linkClass}>
            SMS
          </Link>{' '}
          or{' '}
          <Link href="/help-center/register-phone-number" className={linkClass}>
            voice call
          </Link>
          .
        </p>
        <p className="mt-3">There are several ways WhatsApp can do this:</p>

        <ol className="mt-3 ml-1 list-decimal space-y-3 pl-5 marker:text-[#111b21]">
          <li>
            By storing a unique code on your phone. This happens when you sign up to WhatsApp and confirm your phone
            number through a missed call or SMS. The unique code is then used to automatically verify your phone number
            in future.
          </li>
          <li>
            You can opt in to save your phone number and verification information for future logins through{' '}
            <Link href="/help-center/account-security-tips" className={linkClass}>
              Facebook
            </Link>{' '}
            or{' '}
            <Link href="/help-center/account-security-tips" className={linkClass}>
              Instagram
            </Link>
            . When you opt in, a unique code stored on your mobile phone is used to create verification information
            for your account.
          </li>
          <li>
            You can enable end-to-end encrypted backups in your Google Account. If enabled, WhatsApp saves a unique
            back-up code to Google Cloud. This means when you delete and reinstall WhatsApp, you can skip SMS
            verification and we can automatically verify you. Learn more about backups in{' '}
            <Link href="/help-center/backup-restore-chats" className={linkClass}>
              this help article
            </Link>
            .
          </li>
          <li>
            WhatsApp can automatically verify your phone number without an SMS or missed call by working with your
            phone carrier to validate that your device information matches the phone number that you&apos;re
            registering.
          </li>
        </ol>

        <p className="mt-4">
          After verification, you will see a <span className="font-semibold text-[#111b21]">Verified</span>{' '}
          confirmation to let you know that your phone number has been securely verified on your device without sending
          a code.
        </p>

        <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>As always, your personal messages and calls are end-to-end encrypted.</li>
          <li>
            By entering your phone number, you authorize your wireless carrier to share data from your account and
            wireless device to WhatsApp for phone number verification and fraud prevention purposes. To learn more
            about the data we collect and how we use it, view our{' '}
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            .
          </li>
        </ul>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link href="/help-center/cant-complete-registration" className={linkClass}>
                Can&apos;t complete registration
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/how-to-recover-compromised-account" className={linkClass}>
                recover a compromised account
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
