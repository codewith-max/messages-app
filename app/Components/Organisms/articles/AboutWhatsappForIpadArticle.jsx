'use client';

import Image from 'next/image';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappForIpadArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp for iPad
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="mb-6 overflow-hidden rounded-sm bg-[#f8f3ea] p-3">
          <Image src="/image/wht-ipad.png" alt="WhatsApp on iPad" width={1536} height={864} className="h-auto w-full" />
        </div>

        <p>
          WhatsApp for iPad brings all the features you love on WhatsApp to a larger screen, so keeping in touch with
          friends and family and collaborating is even easier.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Private across all devices</h2>
          <p className="mt-3">
            The iPad app provides a reliable, secure way to access WhatsApp from any of your devices. As always, your
            personal messages and calls are protected with end-to-end encryption.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Connect and collaborate</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Keep chatting with your contacts and businesses.</li>
            <li>Make voice calls with up to 32 people including inviting others with a call link.</li>
            <li>Share your screen while you&apos;re on a call.</li>
            <li>Send and receive documents, photos, and videos.</li>
            <li>Lock specific chats so no one else who uses your iPad can view them.</li>
            <li>Create events and polls directly in your chats.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">System Requirements</h2>
          <p className="mt-3">WhatsApp for iPad is compatible with iPadOS 15.1 or newer.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">How do I log in?</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp on your iPad.</li>
            <li>
              Open WhatsApp on your phone and go to{' '}
              <span className="font-semibold text-[#111b21]">Linked devices &gt; Link a device</span>.
            </li>
            <li>Point your phone to the QR code on your iPad screen to capture the code.</li>
          </ol>
          <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>If you link WhatsApp on an iPad to your account, you&apos;re able to sync up to a year of recent chat history.</li>
            <li>Linked devices may not have all the features found on WhatsApp for your phone.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-linked-devices?platform=ios">
                About linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-link-a-device?platform=ios">
                How to link a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=ios">
                How to fix connection issues
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
