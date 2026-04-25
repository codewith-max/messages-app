'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function TravelingCantGetCodeArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          I&apos;m traveling and I can&apos;t get my WhatsApp code
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="mb-6 overflow-hidden rounded-md border border-black/[0.06] bg-[#d5dfdf]">
        <div className="relative flex min-h-[220px] items-center justify-center px-6 py-10 sm:min-h-[260px]">
          <div className="text-center text-[#111b21]">
            <p className="text-[24px] font-semibold leading-tight sm:text-[32px]">How to verify your phone</p>
            <p className="text-[24px] font-semibold leading-tight sm:text-[32px]">number on WhatsApp</p>
          </div>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-black/20">
              <svg className="ml-1 h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </div>
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you are traveling abroad, you may experience difficulty getting your verification code to register your
          WhatsApp account due to roaming or connectivity issues.
        </p>
        <p className="mt-3">
          The verification code is used to verify that you own the phone number. You must be able to verify your
          phone number via SMS or phone call. If you&apos;re re-registering your phone number, you can get a code via
          email if you&apos;ve added your email address to your account in your WhatsApp settings, during your initial
          registration, or during two-step verification setup.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> if you have roaming enabled, you may be able to
          verify your account as normal. Roaming may incur extra charges.
        </p>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">How to register while traveling</h2>
          <p className="mt-3">You may be able to get your code if you:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
            <li>
              <span className="font-semibold text-[#111b21]">Turn on roaming:</span> if you turn on roaming on your
              device&apos;s Settings, you can receive SMS or phone calls. Please keep in mind that roaming can incur
              extra charges.
            </li>
            <li>
              <span className="font-semibold text-[#111b21]">Check your voicemail:</span> if you select Call me to
              verify your phone number, our automated system should leave you a voicemail with your code.
            </li>
          </ul>

          <p className="mt-3">
            Otherwise, you should consider using a local phone number that you are able to receive a call or SMS with.
          </p>
          <p className="mt-3">
            If you&apos;re still having trouble completing the registration or verification process, try some of these
            tips in this{' '}
            <Link href="/help-center/register-phone-number" className={linkClass}>
              help article
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
