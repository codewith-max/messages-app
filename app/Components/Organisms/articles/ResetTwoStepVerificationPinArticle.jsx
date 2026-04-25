import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function ResetTwoStepVerificationPinArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to reset your two-step verification PIN
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Two-step verification is an optional feature that helps protect your account. You can learn more in{' '}
          <Link href="/help-center/about-two-step-verification" className={linkClass}>
            this help article
          </Link>
          .
        </p>

        <p className="mt-3">You can reset your two-step verification PIN in the following ways:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            <span className="font-semibold text-[#111b21]">In WhatsApp Settings:</span> if you know your current PIN, go
            to <span className="font-semibold text-[#111b21]">Settings &gt; Account &gt; Two-step verification &gt; Change PIN</span>.
          </li>
          <li>
            <span className="font-semibold text-[#111b21]">When re-registering:</span> you may be able to reset your PIN
            using the email on your account or a one-time password (OTP) sent by SMS.
          </li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Reset PIN during re-registration with email</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Open WhatsApp and tap <span className="font-semibold text-[#111b21]">Forgot PIN?</span>, then tap{' '}
              <span className="font-semibold text-[#111b21]">Send email</span>.
            </li>
            <li>Open the reset link in the email and tap Confirm.</li>
            <li>
              Return to WhatsApp, tap <span className="font-semibold text-[#111b21]">Forgot PIN?</span>, then tap{' '}
              <span className="font-semibold text-[#111b21]">Reset</span>.
            </li>
          </ol>
        </section>

        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> Deleting or reinstalling WhatsApp does not
          disable or reset your two-step verification PIN.
        </p>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Reset PIN during re-registration with SMS OTP</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Open WhatsApp, tap <span className="font-semibold text-[#111b21]">Forgot PIN?</span>, then tap{' '}
              <span className="font-semibold text-[#111b21]">Send code</span>.
            </li>
            <li>Enter the SMS OTP to continue.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">7-day wait period</h2>
          <p className="mt-3">If you are unable to reset your PIN right away, you may need to wait 7 days. For example:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>You did not add an email address to help reset the PIN</li>
            <li>You cannot access the email you added</li>
            <li>You are unable to receive the SMS one-time password</li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> For your security, we cannot speed up the 7-day
            wait time or turn off your account for you after two-step verification is enabled.
          </p>
          <p className="mt-3">
            When the 7 days have passed, open WhatsApp and use{' '}
            <span className="font-semibold text-[#111b21]">Forgot PIN? &gt; Reset account</span> to continue.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link href="/help-center/manage-two-step-verification-settings" className={linkClass}>
                How to manage two-step verification settings
              </Link>
            </li>
            <li>
              <Link href="/help-center/about-two-step-verification" className={linkClass}>
                About two-step verification
              </Link>
            </li>
            <li>
              <Link href="/help-center/about-registration-two-step-verification" className={linkClass}>
                About registration and two-step verification
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
