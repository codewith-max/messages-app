'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-scan-a-whatsapp-qr-code';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'iphone', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToScanAWhatsappQrCodeArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to scan a WhatsApp QR code
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>You can scan a WhatsApp QR code to add someone&apos;s contact information to WhatsApp.</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Scan a WhatsApp QR code</h2>

          <h3 className="mt-4 font-semibold text-[#111b21]">Scan in person</h3>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap menu > Settings.' : 'Tap Settings.'}</li>
            <li>Tap the QR code displayed next to your name.</li>
            <li>Tap Scan code.</li>
            <li>Hold your device over the other person&apos;s QR code to scan.</li>
            <li>Tap Add to contacts.</li>
          </ol>

          <h3 className="mt-5 font-semibold text-[#111b21]">Scan with your camera in WhatsApp</h3>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap Camera.' : 'Open WhatsApp Camera.'}</li>
            <li>Hold your device over the QR code to scan.</li>
            <li>Tap the WhatsApp link displayed.</li>
            <li>Tap Add to contacts.</li>
          </ol>

          <h3 className="mt-5 font-semibold text-[#111b21]">Scan from Gallery</h3>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap menu > Settings.' : 'Tap Settings.'}</li>
            <li>Tap the QR code displayed next to your name.</li>
            <li>Tap Scan code.</li>
            <li>Tap the Gallery icon on the bottom left of the screen.</li>
            <li>Tap the WhatsApp QR code photo from your Gallery.</li>
            <li>Tap Add to contacts.</li>
          </ol>

          <h3 className="mt-5 font-semibold text-[#111b21]">Scan from the New Contact screen</h3>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap New chat.' : 'Tap New chat.'}</li>
            <li>Tap the QR code next to New contact.</li>
            <li>Tap Scan code.</li>
            <li>Tap the Gallery icon on the bottom left of the screen.</li>
            <li>Tap the WhatsApp QR code photo from your Gallery.</li>
            <li>Tap Add to contacts.</li>
          </ol>

          <h3 className="mt-5 font-semibold text-[#111b21]">Scan within a chat</h3>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Go to an individual or group chat.</li>
            <li>Tap camera.</li>
            <li>Select the image with the QR code to scan.</li>
            <li>Tap Add to contacts.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Issues scanning a WhatsApp QR code</h2>
          <p className="mt-3">There are a few reasons why you might not be able to scan a WhatsApp QR code:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>The QR code isn&apos;t valid.</li>
            <li>The person might have reset their code, or the account may no longer exist.</li>
            <li>It isn&apos;t a WhatsApp contact QR code.</li>
            <li>You might not be connected to the internet.</li>
            <li>Your phone&apos;s camera might not be working properly.</li>
            <li>
              You are using an older version of WhatsApp. To learn how to update WhatsApp or the WhatsApp Business app,
              view{' '}
              <Link className={linkClass} href="/help-center/fixing-issues-on-whatsapp?platform=android">
                this article
              </Link>
              .
            </li>
          </ul>
          <p className="mt-3">
            Ask the contact to re-send their QR code. Check your internet connection and camera, and try to scan again.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-qr-codes">
                About WhatsApp QR codes
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-view-your-whatsapp-qr-code">
                How to view your WhatsApp QR code
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-qr-code?platform=android">
                How to share your WhatsApp QR code
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-reset-your-whatsapp-qr-code?platform=android">
                How to reset your WhatsApp QR code
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
