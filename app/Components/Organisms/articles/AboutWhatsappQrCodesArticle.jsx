'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappQrCodesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp QR codes
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Your friends and family can add you as a contact on WhatsApp by scanning your WhatsApp QR code. Your QR code
          won&apos;t expire unless you reset it or delete your WhatsApp account.
        </p>
        <p className="mt-3">
          Only share your WhatsApp QR code with trusted individuals. It&apos;s possible for someone to forward your
          WhatsApp QR code to other people, who could then add you as a contact by scanning your code.
        </p>

        <div className="mt-5 flex h-[220px] w-full items-center justify-center rounded-sm bg-[#1f938b] sm:h-[320px]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-view-your-whatsapp-qr-code">
                How to view your WhatsApp QR code
              </Link>
            </li>
            <li>
              How to scan a WhatsApp QR code on:{' '}
              <Link className={linkClass} href="/help-center/how-to-scan-a-whatsapp-qr-code?platform=android">
                Android
              </Link>{' '}
              |{' '}
              <Link className={linkClass} href="/help-center/how-to-scan-a-whatsapp-qr-code?platform=iphone">
                iPhone
              </Link>
            </li>
            <li>
              How to share your WhatsApp QR code on:{' '}
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-qr-code?platform=android">
                Android
              </Link>{' '}
              |{' '}
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-qr-code?platform=iphone">
                iPhone
              </Link>
            </li>
            <li>
              How to reset your WhatsApp QR code on:{' '}
              <Link className={linkClass} href="/help-center/how-to-reset-your-whatsapp-qr-code?platform=android">
                Android
              </Link>{' '}
              |{' '}
              <Link className={linkClass} href="/help-center/how-to-reset-your-whatsapp-qr-code?platform=iphone">
                iPhone
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
