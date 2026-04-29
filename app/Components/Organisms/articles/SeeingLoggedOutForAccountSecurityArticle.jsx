'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/seeing-you-have-been-logged-out-for-your-account-security';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {['android', 'ios'].map((key) => (
        <Link key={key} className={getClass(key)} href={`${BASE}?platform=${key}`} role="tab" aria-selected={platform === key}>
          {key === 'android' ? 'Android' : 'iOS'}
          {platform === key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function SeeingLoggedOutForAccountSecurityArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Seeing &quot;You have been logged out for your account security&quot;
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          When you open WhatsApp and see &quot;You have been logged out for your account security&quot;, this means that
          someone might be trying to register a WhatsApp account with your phone number.
        </p>
        <p className="mt-3">
          To better secure your account and log back in, simply re-register your phone number:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Enter your phone number.</li>
          <li>Tap Next to request a code.</li>
          <li>A pop-up asks you to confirm the number is correct, tap Yes.</li>
          <li>
            {platform === 'android'
              ? 'To automatically verify with a missed call to your phone, select Continue.'
              : 'You can automatically verify with an SMS or a phone call. Enter the 6 digit code given to you.'}
          </li>
        </ol>

        <p className="mt-3">If the automatic verification process did not go through:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            {platform === 'android'
              ? 'Tap Verify another way to get the verification code from a Missed call, Receive SMS or Voice call.'
              : "Choose 'Didn't receive a verification code'. You can choose to get the verification code from SMS or Voice call."}
          </li>
          <li>Wait for the progress bar to finish and retry. This may take up to 10 minutes.</li>
          <li>Don&apos;t guess the code, or you will be locked out for a period of time.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Protect your WhatsApp account</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Never share your 6-digit registration code or two-step verification PIN with others.</li>
            <li>
              Enable{' '}
              <Link className={linkClass} href="/help-center/about-two-step-verification">
                two-step verification
              </Link>{' '}
              and provide an email address in case you forget your PIN.
            </li>
            <li>Set a voicemail password on your phone that&apos;s difficult to guess.</li>
            <li>
              Check your linked devices regularly. Go to WhatsApp &gt; {platform === 'android' ? 'tap menu > ' : ''}
              Linked devices.
            </li>
            <li>To remove a linked device, tap the device &gt; Log Out.</li>
            <li>
              Set a device code and be aware of who has physical access to your phone.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Beware of suspicious emails or messages</h2>
          <p className="mt-3">
            Be careful if you receive a message or an email asking you to share or reset your two-step verification PIN
            or registration code. If you didn&apos;t request this, don&apos;t click on the link.
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
              <Link className={linkClass} href="/help-center/seeing-you-have-been-logged-out">
                Seeing &quot;You have been logged out&quot;
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
