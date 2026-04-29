'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const supportedDevices = [
  { label: 'Windows', href: '/help-center/get-started-web?platform=windows' },
  { label: 'Mac', href: '/help-center/get-started-web?platform=mac' },
  { label: 'Web', href: '/help-center/get-started-web?platform=web' },
  { label: 'Android tablet', href: '/help-center/about-linked-devices?platform=android' },
  { label: 'iPad', href: '/help-center/about-linked-devices?platform=ios' },
  { label: 'WearOS', href: '/help-center/about-linked-devices?platform=android' },
  { label: 'Apple Watch', href: '/help-center/about-linked-devices?platform=ios' },
  { label: 'Garmin smartwatches', href: '/help-center/about-linked-devices?platform=ios' },
  { label: 'Companion phones', href: '/help-center/about-linked-devices?platform=android' },
  { label: 'Meta AI glasses', href: '/help-center/about-linked-devices?platform=android' },
  { label: 'VR', href: '/help-center/about-linked-devices?platform=android' },
];

const platformNotes = {
  android: 'To use an Android tablet as a primary device, you must register your account from that device.',
  ios: 'Calls and a few phone-only account actions still require your primary iPhone.',
};

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[220px] border-b border-black/[0.1]" role="tablist" aria-label="Choose your device">
      <Link className={getClass('android')} href="/help-center/about-linked-devices?platform=android" role="tab" aria-selected={platform === 'android'}>
        Android
        {isActive('android') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('ios')} href="/help-center/about-linked-devices?platform=ios" role="tab" aria-selected={platform === 'ios'}>
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
      device. We encourage you to keep WhatsApp updated on your linked devices. Updates are released regularly and may
      contain fixes for bugs and other issues.
    </div>
  );
}

function VideoCard() {
  return (
    <div className="mt-3 overflow-hidden bg-[#25d366]">
      <div className="relative aspect-[16/9] w-full">
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

export default function AboutLinkedDevicesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = rawPlatform === 'android' ? 'android' : 'ios';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About linked devices
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="mb-5 overflow-hidden rounded-sm bg-[#f8f3ea] p-5">
          <Image
            src="/image/link image.png"
            alt="Devices you can link"
            width={768}
            height={1024}
            className="mx-auto h-auto w-full max-w-[430px]"
            priority
          />
        </div>

        <KnownIssueNotice />

        <p className="mt-5">
          Linked devices provide a reliable, secure way to access WhatsApp from any of your devices. You can stay
          connected by linking up to four devices at a time to your primary phone. You&apos;ll still need your primary
          phone to register your WhatsApp account and link new devices. Learn how to link a device{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            here
          </Link>
          .
        </p>

        <p className="mt-3">Supported linked devices include:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          {supportedDevices.map((item) => (
            <li key={item.label}>
              <Link className={linkClass} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Benefits of linked devices</h2>
          <VideoCard />
          <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Use WhatsApp on your computer even when your phone is off.</li>
            <li>Be more productive with multi-tasking and faster typing on a larger keyboard.</li>
            <li>Use WhatsApp on a bigger screen to view and share your media and files with others.</li>
            <li>Use the WhatsApp Mac or Windows app to make voice and video calls with up to 32 people.</li>
          </ul>
          <p className="mt-3">
            Your personal messages, media, and calls are end-to-end encrypted. Each linked device connects to WhatsApp
            independently, maintaining the same expected level of privacy and security through end-to-end encryption.
          </p>
          <p className="mt-3">
            Learn more about end-to-end encryption in{' '}
            <Link className={linkClass} href="/privacy">
              this article
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Keep your account safer</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Enable push notifications on your phone. By enabling push notifications, you can remove devices you
              don&apos;t recognize from being linked to your account.
            </li>
            <li>
              Check your linked devices regularly. To review all linked devices, tap the Linked devices menu and log
              out of any device you don&apos;t recognize.
            </li>
            <li>
              You can scan a WhatsApp QR code or use your phone number to link a new device to your account. Only link
              on official apps or websites.
            </li>
          </ul>
          <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Linked devices work without your phone online, but may log out after long periods of inactivity.</li>
            <li>{platformNotes[platform]}</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Unsupported features</h2>
          <p className="mt-3">These features aren&apos;t currently supported:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Viewing a live location.</li>
            <li>Creating and viewing broadcast lists.</li>
            <li>Interacting with businesses using WhatsApp Flows.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              How to{' '}
              <Link className={linkClass} href={`/help-center/how-to-link-a-device?platform=${platform}`}>
                link a device with QR code
              </Link>
            </li>
            <li>
              How to{' '}
              <Link className={linkClass} href="/help-center/get-started-web?platform=web">
                link a device with phone number
              </Link>
            </li>
            <li>
              How to{' '}
              <Link className={linkClass} href={`/help-center/how-to-unlink-a-device?platform=${platform}`}>
                unlink a device
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center/about-message-history-on-linked-devices">
                message history on linked devices
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center/about-changing-phones">
                changing phones
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
