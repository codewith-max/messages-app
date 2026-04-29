'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappForGarminSmartwatchesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp for Garmin Smartwatches
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp on Garmin watch lets you view and respond to recent WhatsApp messages from your watch. This app is
          available in the Garmin Connect IQ Store.
        </p>
        <p className="mt-3">
          WhatsApp is running in the background on your phone. In order for WhatsApp to work on your Garmin watch,
          ensure your watch is paired to the Garmin Connect app on your phone, and within Bluetooth range. Make sure
          both the WhatsApp and Garmin Connect apps on your phone are up-to-date and running.
        </p>
        <p className="mt-3">
          If you&apos;re on iOS, also ensure that WhatsApp is allowed to access Bluetooth from your phone&apos;s app settings.
          If your phone is out of range, turned off, or can&apos;t connect to the internet, your watch won&apos;t receive new
          WhatsApp messages.
        </p>
        <p className="mt-3">
          If you&apos;re on Android, make sure to select Link Device in your device settings within the Garmin Connect app
          to grant the necessary permissions. Without this, WhatsApp on your watch will fail to pair with your phone.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">
            What features are available for WhatsApp on Garmin watches
          </h2>
          <p className="mt-3">You can:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Read notifications for incoming messages.</li>
            <li>Reply to messages or send new messages using predefined text, emoji, or the Garmin keyboard.</li>
            <li>Send reactions.</li>
            <li>View your 10 most recent message threads.</li>
            <li>Read the last 10 messages per thread.</li>
            <li>Receive call notifications and decline calls.</li>
          </ul>
          <p className="mt-3">
            Compatible devices include Enduro 3, fenix 8, fenix 8 Pro, fenix e, Forerunner 570, Forerunner 970,
            quatix 8, tactix 8, Venuo 4, Venuo X1, vivoactive 6.
          </p>
          <p className="mt-3">
            The minimum supported iOS and Android version is 2.26.7. Additionally, this app is consumer-only.
          </p>
          <p className="mt-3">
            If you have issues pairing WhatsApp on your Garmin watch, read{' '}
            <Link href="/help-center/how-to-link-a-device?platform=android" className={linkClass}>
              this article
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <p className="font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Visit the{' '}
              <a href="https://support.garmin.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Garmin support center
              </a>{' '}
              to find out more about Garmin watches.
            </li>
            <li>
              If you have issues receiving notifications, troubleshoot using the steps in{' '}
              <Link href="/help-center/how-to-fix-connection-issues?platform=android" className={linkClass}>
                this article
              </Link>
              .
            </li>
            <li>
              Your personal messages and calls are protected with end-to-end encryption, meaning no one outside of the
              chat, not even WhatsApp or Meta, can read, listen to, or share them. Learn more about end-to-end
              encryption in{' '}
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
