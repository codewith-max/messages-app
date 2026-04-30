'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToMoveChatsFromIphoneToAndroidArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to move chats from an iPhone to an Android device
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Move your WhatsApp account information, profile photo, chats, media, and settings from iPhone to Android
          during initial setup of your new Android phone.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Before you start</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Use the same phone number on both devices.</li>
            <li>Keep both phones charged and connected to power if possible.</li>
            <li>Use a supported USB-C to Lightning cable or the official transfer method on your phone brand.</li>
            <li>Install the latest WhatsApp version on both devices.</li>
            <li>Connect both phones to stable Wi-Fi if required.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Move chats from iPhone to Android</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>On your Android phone, start setup and choose to transfer data from iPhone.</li>
            <li>Connect iPhone and Android with cable when prompted.</li>
            <li>On iPhone, open WhatsApp and go to Settings &gt; Chats &gt; Move chats to Android.</li>
            <li>Tap Start and allow permissions.</li>
            <li>Wait for transfer to complete before disconnecting the cable.</li>
            <li>On Android, finish setup and open WhatsApp.</li>
            <li>Verify your phone number and tap Import when prompted.</li>
          </ol>
        </section>

        <section className="mt-8 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p className="font-semibold">Note</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Peer-to-peer payment messages usually don&apos;t transfer.</li>
            <li>Your iPhone keeps your local data unless you delete/reset it.</li>
            <li>Move is one-way; to move back, use Android to iPhone flow.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-move-chats-from-an-android-device-to-an-iphone">
                How to move chats from an Android device to an iPhone
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-transfer-your-chat-history?platform=android">
                How to transfer your chat history
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
