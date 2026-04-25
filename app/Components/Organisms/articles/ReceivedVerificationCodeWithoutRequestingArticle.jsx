import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function ReceivedVerificationCodeWithoutRequestingArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Received verification code without requesting it
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          To protect your account, WhatsApp will send you a push notification when someone tries to register a
          WhatsApp account with your phone number.
        </p>
        <p className="mt-3">
          When you receive this notification without requesting a verification code, it means that someone has entered
          your phone number and requested the registration code. This often happens if another user mistakenly typed
          your number when trying to enter their own number to register, and can also happen when someone attempts to
          take over your account.
        </p>
        <p className="mt-3">
          To keep your account safe, you <span className="font-semibold text-[#111b21]">should never share your WhatsApp
          verification code with others.</span> If someone is trying to take over your account, they need the SMS
          verification code sent to your phone number to do so. Without this code, any user attempting to verify your
          number can&apos;t complete the verification process and can&apos;t use your phone number on WhatsApp. This
          means you remain in control of your WhatsApp account. Learn more about{' '}
          <Link href="/help-center/about-two-step-verification" className={linkClass}>
            two-step verification
          </Link>
          , an optional feature that adds more security to your WhatsApp account.
        </p>
        <p className="mt-3">
          If you&apos;re the previous owner of the phone number,{' '}
          <Link href="/help-center/about-changing-phones" className={linkClass}>
            learn how to change your number
          </Link>
          .
        </p>

        <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            WhatsApp doesn&apos;t have sufficient information to identify the individual who is attempting to verify
            your WhatsApp account.
          </li>
          <li>
            WhatsApp is{' '}
            <Link href="/privacy" className={linkClass}>
              end-to-end encrypted
            </Link>{' '}
            and messages are stored on your device, so someone accessing your account on another device can&apos;t read
            your past conversations.
          </li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[17px] font-bold text-[#111b21]">Related resources</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              How to{' '}
              <Link href="/help-center/how-to-recover-compromised-account" className={linkClass}>
                recover a compromised account
              </Link>
            </li>
            <li>
              <Link href="/help-center/about-two-step-verification" className={linkClass}>
                About two-step verification
              </Link>
            </li>
            <li>
              <Link href="/help-center/account-security-tips" className={linkClass}>
                Account security tips
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
