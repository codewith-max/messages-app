'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappForAppleWatchArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp for Apple Watch
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If your Apple Watch and iPhone are linked and you have automatic downloads turned on, WhatsApp for Apple
          Watch will automatically appear on your Apple Watch.
        </p>
        <p className="mt-3">Alternatively, you can install WhatsApp for Apple Watch using the Watch app.</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to get started</h2>
          <p className="mt-3">To use WhatsApp on your Apple Watch, you&apos;ll need:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              To update to the latest version of WhatsApp. Learn how{' '}
              <Link href="/help-center/download-uninstall" className={linkClass}>
                here
              </Link>
              .
            </li>
            <li>iOS 9.1 or newer.</li>
            <li>watchOS 10 and above.</li>
            <li>Apple Watch Series 4 and above.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">
            What features are available for WhatsApp on Apple Watch?
          </h2>
          <p className="mt-3">You can:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Read notifications.</li>
            <li>Reply to messages or send reactions.</li>
            <li>Send and receive messages.</li>
            <li>Send and listen to voice messages.</li>
            <li>See photos and stickers.</li>
            <li>Receive call notifications and decline calls.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Enable WhatsApp notifications on Apple Watch</h2>
          <p className="mt-3">First, you&apos;ll need to connect WhatsApp to Apple Watch. To do this:</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Enable Bluetooth on your iPhone.</li>
            <li>Ensure your Apple Watch is connected to Bluetooth, your iPhone is turned on, and is in range.</li>
            <li>Enable WhatsApp notifications in iPhone settings.</li>
            <li>Allow notifications on your iPhone.</li>
            <li>Turn on Allow Notifications, and enable all alerts.</li>
            <li>Go to your Apple Watch app.</li>
            <li>Go to Notifications and scroll to Mirror iPhone alerts from.</li>
            <li>Turn on WhatsApp.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Read and reply to notifications</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap Reply to reply to a notification. There are several ways to reply.</li>
            <li>Tap Suggestions to immediately send a reply.</li>
            <li>Or, write on the watch with your finger.</li>
            <li>Or, tap the microphone to dictate a reply.</li>
            <li>Alternatively, tap Dismiss to mark the notification as read and remove it from your screen.</li>
          </ol>

          <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Read the{' '}
              <a href="https://support.apple.com/watch" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Apple Watch Support website
              </a>{' '}
              to find out more about Apple Watch.
            </li>
            <li>
              You can&apos;t link from an Android. Android users can instead use{' '}
              <Link href="/help-center/about-whatsapp-for-wear-os" className={linkClass}>
                WhatsApp for Wear OS
              </Link>
              .
            </li>
            <li>
              As always, your personal messages and calls are protected with end-to-end encryption, meaning no one
              outside of the chat, not even WhatsApp or Meta, can read, listen to, or share them. Learn more about
              end-to-end encryption in{' '}
              <a href="https://faq.whatsapp.com/820124435853543" target="_blank" rel="noopener noreferrer" className={linkClass}>
                this article
              </a>
              .
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
