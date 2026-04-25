import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function VerifyYourNumberBySmsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to verify your number by SMS
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>When you register your account on WhatsApp, you can verify your phone number by SMS.</p>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Verify by SMS when registering</h2>
          <ol className="mt-3 ml-1 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Select your language.</li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Agree and continue</span> to accept the Terms of
              Service.
            </li>
            <li>Select your country and enter your phone number.</li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Continue</span>.
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>
                  If prompted, tap <span className="font-semibold text-[#111b21]">Allow</span> to let WhatsApp send a
                  one-time SMS message to verify your account. Carrier charges may apply.
                </li>
              </ul>
            </li>
            <li>WhatsApp will automatically verify your account.</li>
            <li>Follow the rest of the steps to complete registration.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold text-[#111b21]">Security check</h2>
          <p className="mt-3">
            In some cases, you might be asked to complete an additional SMS verification as a security precaution. To
            continue, you must send an SMS code to WhatsApp to verify your identity.
          </p>
          <p className="mt-3 font-semibold text-[#111b21]">If prompted to verify by SMS:</p>
          <ol className="mt-2 ml-1 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>
              Tap <span className="font-semibold text-[#111b21]">Send code</span>.
            </li>
            <li>
              Tap the send icon to send the pre-written message to WhatsApp.
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Carrier charges may apply.</li>
              </ul>
            </li>
            <li>WhatsApp will send you an SMS to automatically verify your account.</li>
            <li>Follow the rest of the steps to complete registration.</li>
          </ol>
          <p className="mt-4">
            If you have issues registering, try these{' '}
            <Link href="/help-center/cant-complete-registration" className={linkClass}>
              troubleshooting tips
            </Link>
            .
          </p>
          <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>You can only register a phone number you own.</li>
            <li>
              You must be able to receive and send SMS messages to the phone number you are trying to register.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link href="/help-center/register-phone-number" className={linkClass}>
                How to register your phone number
              </Link>
            </li>
            <li>
              <Link href="/help-center/cant-register-phone-number" className={linkClass}>
                Can&apos;t register phone number
              </Link>
            </li>
            <li>
              <Link href="/help-center/manage-two-step-verification-settings" className={linkClass}>
                About email verification codes and resetting two-step verification
              </Link>
            </li>
            <li>
              <Link href="/help-center/register-phone-number#passkey" className={linkClass}>
                Create a passkey
              </Link>
            </li>
            <li>
              <Link href="/help-center/cant-request-another-verification-code-without-waiting" className={linkClass}>
                Can&apos;t request another verification code without waiting
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
