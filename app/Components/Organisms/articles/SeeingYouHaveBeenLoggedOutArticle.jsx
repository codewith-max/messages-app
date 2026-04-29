'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function SeeingYouHaveBeenLoggedOutArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Seeing &quot;You have been logged out&quot;
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>When you open WhatsApp and see &quot;You have been logged out&quot;, it might be due to the following:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>You changed your phone or your phone number.</li>
          <li>You wrongly guessed your two-step verification PIN.</li>
          <li>Your account has been inactive for more than 120 days.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Log back in</h2>
          <p className="mt-3">To log back in, you must re-register your phone number:</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap Log back in.</li>
            <li>Enter your phone number.</li>
            <li>Tap Next to request a code.</li>
            <li>For iPhone and Android: Tap Yes to the pop-up &quot;Is this the correct number?&quot;</li>
            <li>Enter the 6-digit code you receive by SMS.</li>
          </ol>
          <p className="mt-3">If you didn&apos;t receive the 6-digit code by SMS:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Wait for the progress bar to finish and retry. This may take up to 10 minutes.</li>
            <li>Don&apos;t guess the code, or you will be locked out for a period of time.</li>
            <li>If the timer runs out, choose Call me to request a call with the code.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete chats</h2>
          <p className="mt-3">
            If you are moving permanently to a new phone, we recommend deleting chats on your old phone to help keep
            your chats private.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> Before deleting, make sure you{' '}
            <Link className={linkClass} href="/help-center/backup-restore-chats">
              transfer your chats or recover your chat history from backup
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Troubleshooting steps</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Make sure you have an active SIM card for the number you&apos;re trying to register.</li>
            <li>Reboot your phone and try again.</li>
            <li>
              <Link className={linkClass} href="/help-center/cant-download-update">
                Save your chat history, then delete and reinstall
              </Link>{' '}
              the latest version of WhatsApp.
            </li>
            <li>Send a test SMS to your own number exactly as entered in WhatsApp.</li>
          </ol>
          <p className="mt-3">We can&apos;t send you the code by email due to security reasons.</p>
          <p className="mt-2">
            If you&apos;ve forgotten your two-step verification PIN, check how to reset it in{' '}
            <Link className={linkClass} href="/help-center/reset-two-step-verification-pin">
              this article
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/seeing-your-devices-were-logged-out">
                Seeing &quot;Your devices were logged out&quot;
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/seeing-you-have-been-logged-out-for-your-account-security">
                Seeing &quot;You have been logged out for your account security&quot;
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/phone-number-registered-with-whatsapp-on-new-device">
                Seeing &quot;Your phone number was registered with WhatsApp on a new device&quot;
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
