'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantRegisterPhoneNumberArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t register phone number
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>If you can&apos;t register your phone number, try the checks below before requesting another code:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>Confirm your phone number is entered in full international format.</li>
          <li>Make sure your SIM card is active and can receive SMS or phone calls.</li>
          <li>Use a stable network connection through mobile data or Wi-Fi.</li>
          <li>Disable call blockers, battery savers, or task-killer apps temporarily.</li>
          <li>Wait for the code countdown to finish before requesting a new code.</li>
        </ul>

        <p className="mt-4">
          If registration still fails, open{' '}
          <Link href="/help-center/cant-complete-registration" className={linkClass}>
            Can&apos;t complete registration
          </Link>{' '}
          for full troubleshooting steps.
        </p>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              How to{' '}
              <Link href="/help-center/register-phone-number" className={linkClass}>
                register your phone number
              </Link>
            </li>
            <li>
              <Link href="/help-center/cant-complete-registration" className={linkClass}>
                Can&apos;t complete registration
              </Link>
            </li>
            <li>
              About{' '}
              <Link href="/help-center/about-changing-phones" className={linkClass}>
                changing phones
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
