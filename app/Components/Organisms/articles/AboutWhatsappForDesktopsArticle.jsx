'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/about-whatsapp-for-desktops';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[220px] border-b border-black/[0.1]" role="tablist" aria-label="Choose desktop platform">
      <Link className={getClass('windows-desktop')} href={`${BASE}?platform=windows-desktop`} role="tab" aria-selected={platform === 'windows-desktop'}>
        Windows
        {isActive('windows-desktop') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('mac-desktop')} href={`${BASE}?platform=mac-desktop`} role="tab" aria-selected={platform === 'mac-desktop'}>
        Mac
        {isActive('mac-desktop') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
    </div>
  );
}

function DownloadSection({ isMac }) {
  return (
    <section className="mt-8">
      <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">{isMac ? 'Download WhatsApp for Mac' : 'Download WhatsApp for Windows'}</h2>
      <div className="mt-4 overflow-hidden rounded-sm border border-[#d9d4c8] bg-[#f8f3ea]">
        {[
          `Go to whatsapp.com/download on your ${isMac ? 'Mac' : 'Windows'} computer.`,
          `Download the ${isMac ? 'Mac' : 'Windows'} desktop app.`,
          'Now you can use WhatsApp from your desktop.',
        ].map((text, idx) => (
          <div key={text} className={`flex items-center gap-4 px-4 py-4 ${idx < 2 ? 'border-b border-[#e6e0d4]' : ''}`}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25d366] text-[15px] font-bold text-white">
              {idx + 1}
            </span>
            <span className="text-[15px] leading-6 text-[#3b4a54]">{text}</span>
          </div>
        ))}
      </div>
      <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
        <li>
          Open the{' '}
          <Link className={linkClass} href="https://www.whatsapp.com/download">
            WhatsApp download page
          </Link>{' '}
          on your computer.
        </li>
        <li>{isMac ? 'Download the Mac desktop app.' : 'Download the Windows desktop app.'}</li>
        <li>Open the app and link your device from your primary phone.</li>
      </ol>
    </section>
  );
}

export default function AboutWhatsappForDesktopsArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'windows-desktop' ? 'windows-desktop' : 'mac-desktop';
  const isMac = platform === 'mac-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp for desktops
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {isMac ? (
          <div className="mb-4 overflow-hidden rounded-sm bg-[#f8f3ea] p-3">
            <Image src="/image/wht-desktop.jpg" alt="WhatsApp desktop on a Mac laptop" width={1280} height={720} className="h-auto w-full" />
          </div>
        ) : null}

        <p>
          {isMac
            ? 'WhatsApp for Mac provides increased performance and reliability, with more ways to collaborate and stay productive.'
            : 'WhatsApp for Windows is supported on Windows 10 64-bit version 1903 and newer versions.'}
        </p>
        <p className="mt-3">To make or receive calls with WhatsApp for {isMac ? 'Mac' : 'Windows'}, you&apos;ll need:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>An active internet connection on your computer.</li>
          <li>An audio output device and microphone connected to your computer for voice and video calls.</li>
          <li>A camera for video calls.</li>
          <li>WhatsApp permission to access your computer&apos;s microphone and camera.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">
            Benefits of WhatsApp for {isMac ? 'Mac' : 'Windows'}
          </h2>

          {!isMac ? (
            <>
              <p className="mt-4 font-semibold text-[#111b21]">Updates from the people and topics you care about</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Share photos, videos, voice notes, and text with your people on WhatsApp Status.</li>
                <li>Get information and relevant updates directly by following WhatsApp Channels.</li>
                <li>Create, join and engage with WhatsApp Communities.</li>
              </ul>
            </>
          ) : null}

          <p className="mt-4 font-semibold text-[#111b21]">Calling and collaboration</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Make voice and video calls with up to 32 people.</li>
            <li>Plan calls by creating and sharing call links.</li>
            <li>Use screen sharing to collaborate while on a video call.</li>
            <li>Join a group call after it&apos;s started.</li>
            <li>View your call history.</li>
            {isMac ? <li>Choose to receive call notifications even when the app is closed.</li> : null}
          </ul>

          <p className="mt-4 font-semibold text-[#111b21]">Productivity</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Be more productive with multi-tasking and typing faster on a larger keyboard.</li>
            <li>Receive notifications and messages even when your phone is offline.</li>
            <li>Easily share files and media by dragging and dropping them into a chat.</li>
          </ul>

          {isMac ? (
            <>
              <p className="mt-4 font-semibold text-[#111b21]">Performance and reliability</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Designed and optimized for your computer&apos;s operating system.</li>
                <li>Access up to three years of message history.</li>
                <li>Increase reliability and speed.</li>
              </ul>
            </>
          ) : null}
        </section>

        <DownloadSection isMac={isMac} />

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/supported-operating-systems">
                About supported operating systems
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-linked-devices?platform=ios">
                About linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-link-a-device?platform=android">
                How to link a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-download-whatsapp-desktop?platform=windows-desktop">
                How to download WhatsApp Desktop
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-unlink-a-device?platform=${isMac ? 'ios' : 'android'}`}>
                How to unlink a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=web">
                How to fix connection issues
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-make-a-voice-call?platform=web">
                How to make a voice call
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
