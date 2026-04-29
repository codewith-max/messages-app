'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappWebArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp Web
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp Web lets you message privately from any browser on your desktop, keeping you connected. It offers
          the convenience and benefits of a bigger screen, but doesn&apos;t require you to download a desktop app.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Benefits of WhatsApp Web</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Convenience: log in from any browser to stay in touch with your contacts.</li>
            <li>Increased productivity: quickly switch conversations and organize chats in folders.</li>
            <li>Improved collaboration: create groups, coordinate in real time, and share files and links.</li>
            <li>Flexible workspace: larger screen and flexible setup for keyboard and mouse.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Log in</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>
              Go to{' '}
              <Link className={linkClass} href="https://web.whatsapp.com">
                web.whatsapp.com
              </Link>{' '}
              on your desktop browser.
            </li>
            <li>Follow the on-screen instructions to scan the QR code with your phone.</li>
            <li>Now you can use WhatsApp on your browser.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-link-a-device?platform=android">
                How to link a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
                How to unlink a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=web">
                How to fix connection issues
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
