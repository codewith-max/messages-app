import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantRequestAnotherVerificationCodeArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t request another verification code without waiting
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you leave the verification process before it&apos;s finished, you may time out and need to restart. You
          also may see the message &ldquo;You have guessed the code too many times&rdquo; if you enter the wrong code
          more than once.
        </p>
        <p className="mt-3">
          In these cases, please wait the designated amount of time before you request another code. There&apos;s no
          way to make this faster.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> In some cases, WhatsApp can automatically verify
          your phone number.{' '}
          <Link href="/help-center/automatic-phone-number-verification" className={linkClass}>
            Find out more.
          </Link>
        </p>

        <section className="mt-8">
          <h2 className="text-[17px] font-bold text-[#111b21]">Related resources</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              About{' '}
              <Link href="/help-center/verify-your-number-by-sms" className={linkClass}>
                registration authentication through SMS
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
