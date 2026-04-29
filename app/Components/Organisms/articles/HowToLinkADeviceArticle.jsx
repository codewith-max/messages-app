'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-link-a-device';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[220px] border-b border-black/[0.1]" role="tablist" aria-label="Choose your device">
      <Link className={getClass('android')} href={`${BASE}?platform=android`} role="tab" aria-selected={platform === 'android'}>
        Android
        {isActive('android') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('ios')} href={`${BASE}?platform=ios`} role="tab" aria-selected={platform === 'ios'}>
        iOS
        {isActive('ios') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
    </div>
  );
}

function KnownIssueNotice() {
  return (
    <div className="mt-6 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6 text-[#3b4a54]">
      There&apos;s a known issue for some linked devices not displaying up to one year of chat history. We&apos;re
      working to fix this as soon as possible. In the meantime, you can still see your chat history on your primary
      device. We encourage you to keep WhatsApp updated on your linked device. Updates are released regularly and may
      contain fixes for bugs and other issues.
    </div>
  );
}

function LinkDeviceVideoBlock() {
  return (
    <div className="mt-3 overflow-hidden bg-[#25d366]">
      <div className="relative aspect-[16/9] w-full">
        <div className="absolute bottom-0 left-0 p-3 text-left text-sm font-medium text-white/95">How to link a device</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90 text-white">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function AndroidSteps() {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
      <li>Open WhatsApp on your Android primary phone.</li>
      <li>
        Tap the three dots (menu) &gt; <span className="font-semibold text-[#111b21]">Linked devices</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Link a device</span>.
      </li>
      <li>
        If prompted, verify your identity on your primary phone:
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>If your device has biometric authentication, follow the on-screen instructions.</li>
          <li>
            If you don&apos;t have biometric authentication enabled, you&apos;ll be prompted to enter the PIN you use
            to unlock your phone.
          </li>
        </ul>
      </li>
      <li>Point your primary phone at the screen of the device you want to link to, and scan the QR code.</li>
    </ol>
  );
}

function IosSteps() {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
      <li>Open WhatsApp on your iPhone (primary phone).</li>
      <li>
        Tap <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Linked devices</span> &gt;{' '}
        <span className="font-semibold text-[#111b21]">Link a device</span>.
      </li>
      <li>
        If prompted, verify your identity on your primary phone (Face ID, Touch ID, or your device passcode).
      </li>
      <li>Point your iPhone at the screen of the device you want to link to, and scan the QR code.</li>
    </ol>
  );
}

export default function HowToLinkADeviceArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">How to link a device</h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <KnownIssueNotice />

        <p className="mt-5">
          You can use the same WhatsApp account on multiple devices at the same time, using your primary phone to link
          up to four devices. You&apos;ll need to log in to WhatsApp on your primary phone every 14 days to keep
          linked devices connected to your WhatsApp account.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Linking your device</h2>
          <LinkDeviceVideoBlock />
          {platform === 'android' ? <AndroidSteps /> : <IosSteps />}
          <p className="mt-5 text-[15px] leading-7">
            <span className="font-semibold text-[#111b21]">Note:</span> If you see a new device you don&apos;t
            recognize, you can select <span className="font-semibold text-[#111b21]">Don&apos;t link</span> or review the
            device. If the device is yours, tap <span className="font-semibold text-[#111b21]">Link device</span> to
            continue.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/get-started-web?platform=web">
                How to link a device with phone number
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/about-linked-devices?platform=${platform}`}>
                About linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-unlink-a-device?platform=${platform}`}>
                How to unlink a device
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
