'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-reset-your-whatsapp-qr-code';

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

export default function HowToResetYourWhatsappQrCodeArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to reset your WhatsApp QR code
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can reset your WhatsApp QR code at any time to make the previous code invalid and create a new WhatsApp
          QR code. If you delete your WhatsApp account, your WhatsApp QR code will also be deleted.
        </p>

        {isAndroid ? (
          <div className="mt-5 flex h-[220px] w-full items-center justify-center rounded-sm bg-[#1f938b] sm:h-[320px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ) : null}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Reset QR code</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap menu > Settings > QR code.' : 'Tap Settings or your profile picture, then tap QR code.'}</li>
            <li>{isAndroid ? 'Tap menu > Reset QR code > Reset.' : 'Tap Reset QR Code > Reset > OK.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-qr-codes">
                About WhatsApp QR codes
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-view-your-whatsapp-qr-code?platform=android">
                How to view your WhatsApp QR code
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-scan-a-whatsapp-qr-code?platform=android">
                How to scan a WhatsApp QR code
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-qr-code?platform=android">
                How to share your WhatsApp QR code
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
