'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantCompleteRegistrationArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t complete registration
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>If you&apos;re having trouble completing the registration process to activate your account, make sure:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>
            You have an active SIM card in your phone for the phone number you want to register and can receive SMS or
            phone calls. Unsupported phone numbers, such as VoIP, landlines, toll-free, paid premium numbers,
            universal access numbers (UAN), shared cost, and personal numbers can&apos;t be registered on WhatsApp.
            <ul className="mt-2 list-disc pl-5 marker:text-[#111b21]">
              <li>
                <span className="font-semibold text-[#111b21]">Note:</span> You can only register a landline on the
                WhatsApp Business app, where you will receive a code via your landline number. Learn more about
                registering for the WhatsApp Business app{' '}
                <Link href="/for-business" className={linkClass}>
                  here
                </Link>
                .
              </li>
            </ul>
          </li>
          <li>
            You entered your phone number correctly in{' '}
            <Link href="/help-center/register-phone-number" className={linkClass}>
              full international format
            </Link>
            . It can take up to 24 hours to receive a code after requesting one.
          </li>
          <li>
            You meet the minimum age eligibility requirements to use WhatsApp, per our{' '}
            <Link href="/privacy" className={linkClass}>
              Terms of Service
            </Link>
            .
          </li>
          <li>
            You have a good internet connection. If you&apos;re abroad, you must be able to receive international SMS
            and/or phone calls. If you&apos;re abroad and roaming, keep in mind that this might incur extra charges.
          </li>
          <li>If you have a prepaid line, make sure you have enough balance to receive SMS or phone calls.</li>
          <li>Turn off all task killers and blockers, such as Advanced Task Killer or Handcent Next SMS.</li>
        </ul>

        <p className="mt-4">If you&apos;ve met all the requirements listed above, try to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>Update WhatsApp to the latest version available.</li>
          <li>Connect to a different network and try again.</li>
          <li>Move to a different location to get a cellular connection.</li>
          <li>
            Request a new registration code via SMS or phone call. For most regions, if you choose the phone call
            option and have voicemail enabled, our automated system will leave you a voicemail with your code. If
            you&apos;re re-registering your phone number, you can get a code via email if you&apos;ve added your email
            address to your account in your WhatsApp settings, during your initial registration, or during two-step
            verification setup.
          </li>
          <li>
            Tap <span className="font-semibold text-[#111b21]">Need help getting a code?</span> to choose an
            registration code option. If you still haven&apos;t received your code through SMS, try tapping{' '}
            <span className="font-semibold text-[#111b21]">Call me</span> to request a code through a phone call.
          </li>
          <li>
            If you still haven&apos;t received your code after 24 hours and are unable to verify your account, contact
            your mobile provider for additional information.
          </li>
          <li>
            Check your phone manufacturer&apos;s settings to enable Wi-Fi Calling options. Wi-Fi Calling lets you make
            calls and send texts over a Wi-Fi network, which is useful when you experience network issues during
            registration.
          </li>
        </ul>

        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> You may see the message
          {' '}
          <span className="font-semibold text-[#111b21]">&quot;You have guessed the code too many times.&quot;</span>
          {' '}
          if you enter the wrong code more than once. Please wait the designated amount of time before you request
          another code. There&apos;s no way to make this faster.
        </p>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources:</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              How to{' '}
              <Link className={linkClass} href="/help-center/register-phone-number">
                register your phone number
              </Link>
            </li>
            <li>
              Can&apos;t{' '}
              <Link className={linkClass} href="/help-center/cant-register-phone-number">
                register phone number
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center/about-changing-phones">
                changing phones
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
