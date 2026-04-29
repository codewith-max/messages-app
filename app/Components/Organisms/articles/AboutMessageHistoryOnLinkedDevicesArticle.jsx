'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function KnownIssueNotice() {
  return (
    <div className="mt-6 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6 text-[#3b4a54]">
      There&apos;s a known issue for some linked devices not displaying up to one year of chat history. We&apos;re
      working to fix this as soon as possible. In the meantime, you can still see your chat history on your primary
      device. We encourage you to keep WhatsApp updated on your linked devices. Updates are released regularly and may
      contain fixes for bugs and other issues.
    </div>
  );
}

export default function AboutMessageHistoryOnLinkedDevicesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About message history on linked devices
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <KnownIssueNotice />

        <p className="mt-5">
          Right after you link a device, your primary phone sends an end-to-end encrypted copy of your most recent
          message history to your newly linked device, where it&apos;s stored locally. It can take a few minutes for
          your message history to appear on linked devices depending on the number of messages in your chats.
        </p>

        <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            Not all messages and chats are synced to linked devices from your phone. WhatsApp Desktop syncs more
            message history than WhatsApp Web. To see or search your full history, check your phone.
          </li>
          <li>
            When you delete a message for yourself or for everyone in a chat, the deletion will sync across all online
            devices where you are logged in to WhatsApp.
          </li>
        </ul>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-linked-devices?platform=ios">
                About linked devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-link-a-device?platform=android">
                How to link a device
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
