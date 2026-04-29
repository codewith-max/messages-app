'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappForAndroidTabletsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp for Android tablets
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp for Android tablets is{' '}
          <Link className={linkClass} href="https://www.whatsapp.com/download">
            available to download
          </Link>
          .
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Log in to WhatsApp</h2>
          <p className="mt-3 font-semibold text-[#111b21]">Link an Android tablet to your phone</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp on your Android tablet.</li>
            <li>
              Open WhatsApp on your phone and go to{' '}
              <span className="font-semibold text-[#111b21]">Linked devices</span>.
            </li>
            <li>Scan the QR code on your Android tablet screen to capture the code.</li>
          </ol>

          <p className="mt-5 font-semibold text-[#111b21]">Can&apos;t see a QR code to link my Android tablet</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Tap menu &gt; Link a device.</li>
            <li>Follow the displayed steps.</li>
          </ol>

          <p className="mt-5 font-semibold text-[#111b21]">Register a new account on your Android tablet</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp on your Android tablet.</li>
            <li>Tap menu &gt; Register new account.</li>
            <li>Select your country and enter your phone number.</li>
            <li>Tap Next.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Message info</h2>
          <p className="mt-3">Message info is displayed when a message is delivered, seen, read, or played.</p>
          <p className="mt-2">
            To see message info, tap and hold a sent message. You can also tap the information icon to see message
            info.
          </p>
        </section>

        <section className="mt-8">
          <p className="font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>If you link WhatsApp on an Android tablet, you can sync up to two years of your recent chat history.</li>
            <li>Linked devices might not have all the features found on WhatsApp for your phone.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
