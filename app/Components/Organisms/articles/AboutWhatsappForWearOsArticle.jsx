'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappForWearOsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp for Wear OS
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can download WhatsApp for Wear OS from the{' '}
          <Link className={linkClass} href="https://play.google.com/store">
            Google Play Store
          </Link>
          .
        </p>
        <p className="mt-2">
          If your smartwatch and phone are linked, you&apos;ll see an option to download WhatsApp to your smartwatch.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">How do I link my phone?</h2>
          <p className="mt-3">Make sure your Android phone is next to you. For the best experience, connect to Wi-Fi.</p>
          <p className="mt-2">WhatsApp is compatible with Wear OS version 3.0 and upward.</p>

          <p className="mt-4 font-semibold text-[#111b21]">On your smartwatch</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp on your Wear OS smartwatch.</li>
            <li>You&apos;ll see an 8-digit character code.</li>
            <li>Follow the instructions to continue on your phone.</li>
          </ol>

          <p className="mt-4 font-semibold text-[#111b21]">On your phone</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Unlock your phone.</li>
            <li>Enter the same 8-digit code you see on your smartwatch.</li>
            <li>Tap Confirm.</li>
          </ol>
        </section>

        <section className="mt-8">
          <p className="font-semibold text-[#111b21]">Note:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              You can&apos;t link from an iPhone. iPhone users can instead use{' '}
              <Link className={linkClass} href="/help-center/about-whatsapp-for-apple-watch">
                WhatsApp for Apple Watch
              </Link>
              .
            </li>
            <li>You can&apos;t be able to link your WhatsApp Business account.</li>
            <li>With device linking, you&apos;ll have the same controls and protections available as with linking a device.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">I&apos;ve entered the wrong code</h2>
          <p className="mt-3">You&apos;ll have three attempts to enter the code correctly.</p>
          <p className="mt-2">
            If you enter it wrong three times, a new code will be generated on your smartwatch and you can try again.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">There&apos;s a delay</h2>
          <p className="mt-3">It&apos;s normal for linking your phone to your watch to take longer if you have lots of contacts and recent messages.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Why am I not getting notifications on Wear OS?</h2>
          <p className="mt-3">
            If you don&apos;t link your phone after installing WhatsApp on your smartwatch, your watch won&apos;t receive
            notifications.
          </p>
          <p className="mt-2">
            If you&apos;ve linked your device and are still having issues with notifications, please follow{' '}
            <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=android">
              these troubleshooting steps
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">What features are on WhatsApp for Wear OS?</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Read chats and reply using voice or text.</li>
            <li>Mute a chat.</li>
            <li>View images.</li>
            <li>Play back voice messages.</li>
            <li>Send outgoing reactions.</li>
            <li>Answer and decline phone calls on supported watches paired to phones with WhatsApp installed.</li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> This list isn&apos;t definitive.
          </p>
        </section>
      </div>
    </article>
  );
}
