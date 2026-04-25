import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function RecoverCompromisedAccountArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to recover a compromised account
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You should never share your registration code with others, not even friends or family. Please note, WhatsApp
          can&apos;t deactivate accounts for others due to verification constraints.
        </p>
        <p className="mt-3">
          If your account is compromised, or if you lost access to your account, follow the steps below to recover
          your account.
        </p>
        <ol className="mt-3 ml-1 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            Tap <span className="font-semibold text-[#111b21]">Log back in</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Continue</span>.
          </li>
          <li>
            If prompted, enter your full international phone number and tap{' '}
            <span className="font-semibold text-[#111b21]">Next</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">OK</span>.
          </li>
          <li>Enter the 6-digit code you receive via SMS or phone call.</li>
        </ol>

        <p className="mt-4">
          When you re-register your account with the 6-digit code, all devices logged into your WhatsApp account are
          automatically logged out of your account.
        </p>
        <p className="mt-3">
          You might be asked to enter a two-step verification PIN. If you don&apos;t know your PIN, in rare cases,
          someone else using your account might have enabled two-step verification. If you don&apos;t have the PIN,
          wait 7 days and try again. Whether you know the PIN or not, anyone using your account is automatically logged
          out of your account after you enter the 6-digit SMS code. Learn more about{' '}
          <Link href="/help-center/about-two-step-verification" className={linkClass}>
            two-step verification
          </Link>
          .
        </p>
        <p className="mt-3">
          If you suspect that your WhatsApp account is compromised and someone else is using it, you should notify
          family and friends as this person could impersonate you in chats and groups. To help protect your account,
          WhatsApp will notify you when someone tries to register an account with your phone number.
        </p>
        <p className="mt-3">
          Once you re-register your account, we recommend you turn on security features to protect your account. It&apos;s
          also recommended to review the{' '}
          <Link href="/help-center/get-started-web?platform=web" className={linkClass}>
            devices linked to your account
          </Link>
          . You can learn more about security features in{' '}
          <Link href="/help-center/account-security-tips" className={linkClass}>
            this article
          </Link>
          .
        </p>

        <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            WhatsApp can&apos;t block or unblock contacts on your behalf; however, you can block or report a user or
            contact. Learn more about blocking and reporting in{' '}
            <Link href="/help-center/safety-security" className={linkClass}>
              this article
            </Link>
            .
          </li>
          <li>
            WhatsApp is{' '}
            <Link href="/privacy" className={linkClass}>
              end-to-end encrypted
            </Link>{' '}
            and messages are stored on your device, so someone re-registering your WhatsApp account on a new device
            can&apos;t read your past conversations.
          </li>
          <li>A WhatsApp account can only be registered with one phone number at a time.</li>
          <li>
            It&apos;s not possible to recover an account without a SIM card with the same phone number as your account.
          </li>
          <li>
            In some cases, WhatsApp can automatically verify your phone number without using manual verification
            methods such as SMS or voice call. Learn more in{' '}
            <Link href="/help-center/automatic-phone-number-verification" className={linkClass}>
              this article
            </Link>
            .
          </li>
          <li>
            If you create a backup using Google Account or iCloud, you might be able to restore your chat history.
            Learn how to{' '}
            <Link href="/help-center/backup-restore-chats" className={linkClass}>
              restore messages
            </Link>
            .
          </li>
          <li>
            WhatsApp can&apos;t provide information about who accessed your account or the time and location it was
            accessed.
          </li>
          <li>
            If you recently started using a new SIM card, but are still using the WhatsApp account associated with your
            old phone number, you need to use the change number feature to transfer your WhatsApp account information
            to your new phone number. If you fail to do this, you could permanently lose access to your WhatsApp
            account. Learn how to change your phone number in{' '}
            <Link href="/help-center/about-changing-phones" className={linkClass}>
              this article
            </Link>
            .
          </li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[17px] font-bold text-[#111b21]">Related resources</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              How to{' '}
              <Link href="/help-center/register-phone-number" className={linkClass}>
                register your phone number
              </Link>
            </li>
            <li>
              How to{' '}
              <Link href="/help-center/how-to-protect-your-account" className={linkClass}>
                recover a WhatsApp account from a lost or stolen device
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
