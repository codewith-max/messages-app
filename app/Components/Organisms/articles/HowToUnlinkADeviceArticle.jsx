'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-unlink-a-device';

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

function AndroidSteps() {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
      <li>Open WhatsApp on your primary phone and tap menu (three dots) &gt; Linked devices.</li>
      <li>Tap the linked device you want to remove.</li>
      <li>Tap Log out.</li>
    </ol>
  );
}

function IosSteps() {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
      <li>Open WhatsApp on your primary iPhone and go to Settings or your profile picture.</li>
      <li>Tap Linked devices, then tap the device you want to remove.</li>
      <li>Tap Log out &gt; Log out.</li>
    </ol>
  );
}

export default function HowToUnlinkADeviceArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">How to unlink a device</h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          To disconnect linked devices such as WhatsApp Web, WhatsApp Desktop, companion phones, or tablets, you can
          log out from WhatsApp on your primary phone. You can also log out directly from WhatsApp on the linked
          device.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Log out from your primary phone</h2>
          {platform === 'android' ? <AndroidSteps /> : <IosSteps />}
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Log out from your linked device</h2>
          <p className="mt-3">
            If you have access to the linked device, open WhatsApp on that device and use{' '}
            <span className="font-semibold text-[#111b21]">Settings &gt; Log out</span>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-for-windows-and-mac">
                About WhatsApp for Windows and Mac
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-web">
                About WhatsApp Web
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-for-android-tablets">
                About WhatsApp for Android Tablets
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-for-wear-os">
                About WhatsApp for Wear OS
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-for-vr">
                About WhatsApp for VR
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
