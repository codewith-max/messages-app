'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutRegistrationTwoStepVerificationArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About registration and two-step verification
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>When you create a WhatsApp account, you&apos;ll see two different screens:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>
            <span className="font-semibold text-[#111b21]">Registration:</span> This screen appears when you&apos;re
            creating a new account or re-registering your existing account. To confirm that you own the phone number,
            you&apos;ll be prompted to enter a 6-digit registration code sent to you via SMS or phone call.
            <ul className="mt-2 list-disc pl-5 marker:text-[#111b21]">
              <li>
                <span className="font-semibold text-[#111b21]">Note:</span> You can get a registration code through
                email if you are re-registering and have previously set up two-step verification with an email address.
              </li>
            </ul>
            <p className="mt-2">
              Verifying your phone number with a registration code is the only way you can activate your account, and
              you must be able to receive the code on your phone. Learn how to register your phone number in{' '}
              <Link href="/help-center/register-phone-number" className={linkClass}>
                this article
              </Link>
              .
            </p>
          </li>
          <li>
            <span className="font-semibold text-[#111b21]">Two-step verification:</span> This screen appears after you
            successfully register your phone number on WhatsApp. Two-step verification (2FA) is an optional feature
            that adds more security to your account. When enabling this feature, you create and confirm a unique PIN
            that&apos;s required to access your account. The two-step verification PIN is different from the 6-digit
            registration code you receive via SMS or phone call. For security purposes, when you re-register an
            existing account, there may be a delay before you can turn on two-step verification. You can learn more
            about two-step verification in{' '}
            <Link href="/help-center/manage-two-step-verification-settings" className={linkClass}>
              this article
            </Link>
            .
          </li>
        </ul>

        <p className="mt-4">
          <span className="font-semibold text-[#111b21]">Remember:</span> Never share your 6-digit registration code
          or two-step verification PIN with anyone.
        </p>
        <p className="mt-3">
          If you didn&apos;t enable two-step verification, but are prompted to enter a PIN, the previous owner of the
          phone number might have enabled it. In this case, you&apos;ll need to wait 7 days before resetting the PIN
          to access your account.
        </p>
        <p className="mt-3">
          If you forgot your PIN and you&apos;ve successfully registered your phone number on WhatsApp, tap Forgot PIN?
          to create a new one. You can manage your two-step verification PIN settings at any time by going to your
          WhatsApp settings &gt; Account &gt; Two-Step Verification.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> WhatsApp can only be used with one phone number
          at a time. After you successfully register your phone number on WhatsApp, anyone who might be using your
          account is automatically logged out and your account is protected.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> In some cases, WhatsApp can automatically verify
          your phone number.{' '}
          <Link href="/help-center/automatic-phone-number-verification" className={linkClass}>
            Find out more
          </Link>
          .
        </p>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link href="/help-center/cant-complete-registration" className={linkClass}>
                Can&apos;t complete registration
              </Link>
            </li>
            <li>
              How to manage{' '}
              <Link href="/help-center/manage-two-step-verification-settings" className={linkClass}>
                two-step verification settings
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                protect your account
              </Link>
            </li>
            <li>
              About{' '}
              <Link href="/help-center/automatic-phone-number-verification" className={linkClass}>
                automatic phone number verification
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
