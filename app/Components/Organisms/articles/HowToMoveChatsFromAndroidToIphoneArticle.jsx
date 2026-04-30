'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToMoveChatsFromAndroidToIphoneArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to move chats from an Android device to an iPhone
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can transfer your WhatsApp account info, profile photo, individual chats, group chats, chat history,
          media, and settings from Android to iPhone using the Move to iOS app.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> You can only move chats from Android to iPhone.
          Moving from iPhone to Android uses a different flow.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">What you need</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Android OS 5 or above and iOS 15.5 or above.</li>
            <li>Move to iOS app installed on your Android phone.</li>
            <li>Same phone number used on both phones.</li>
            <li>Both phones connected to power and same Wi-Fi (or Android hotspot).</li>
            <li>Enough free space on iPhone for imported data.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Move chats from Android to iPhone</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Move to iOS on Android and follow setup prompts on iPhone.</li>
            <li>Enter the code shown on iPhone into Move to iOS on Android.</li>
            <li>Select WhatsApp on the Transfer Data screen.</li>
            <li>Tap Start on Android to prepare WhatsApp export data.</li>
            <li>Tap Next in Move to iOS and wait until transfer finishes.</li>
            <li>Install WhatsApp on iPhone and verify the same phone number.</li>
            <li>Tap Start to import chat history.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">What happens to my data?</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>WhatsApp does not store your transferred personal messages.</li>
            <li>Your Android phone keeps its local data unless you reset it.</li>
            <li>Your call history and display name may not transfer.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-transfer-your-chat-history?platform=android">
                How to transfer your chat history
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-changing-phones">
                About changing phones
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
