'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantChangePhoneNumberArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t change phone number
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>If you can&apos;t change your phone number, there are a few things to check:</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check if your old number is registered</h2>
          <p className="mt-3">
            Check whether the old phone number you entered is currently registered on your WhatsApp account.
          </p>
          <p className="mt-2">
            You can see what phone number is registered by going to WhatsApp Settings. Then, tap your profile photo.
          </p>
          <p className="mt-2">
            If your old phone number isn&apos;t registered,{' '}
            <Link className={linkClass} href="/help-center/register-phone-number">
              register it first
            </Link>{' '}
            before you try to change your phone number again.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check your SIM</h2>
          <p className="mt-3">
            You have an active and working SIM card for the new phone number you want to use with WhatsApp.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check your connection</h2>
          <p className="mt-3">Check that you have a strong and stable cellular connection.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check your storage</h2>
          <p className="mt-3">Make sure your device has sufficient internal storage.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check that you&apos;re using a supported phone number</h2>
          <p className="mt-3">
            Make sure you&apos;re using a supported phone number. Unsupported phone numbers can&apos;t be registered on
            WhatsApp and include:
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>VoIP</li>
            <li>Landlines</li>
            <li>Toll free numbers</li>
            <li>Paid premium numbers</li>
            <li>Universal access numbers (UAN)</li>
            <li>Personal numbers</li>
          </ul>
          <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              If you&apos;re trying to register a new phone number after you&apos;ve changed it, read about{' '}
              <Link className={linkClass} href="/help-center/register-phone-number">
                registering your phone number
              </Link>
              .
            </li>
            <li>We don&apos;t support unofficial third party clients or jailbroken, rooted, or unsupported devices.</li>
            <li>
              If you changed the SIM card or phone number on your device but are still using the WhatsApp account
              associated with your old phone number, you must use the change number feature to transfer your WhatsApp
              account to your new phone number to maintain access to your account.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-changing-phone-numbers">
                About changing phone numbers
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-changing-phones">
                About changing phones
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-change-your-phone-number">
                How to change your phone number
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
