'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToPinAMessageArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to pin a message
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Pin a message to keep important information at the top of a chat for easy access. You can pin one message at
          a time in each chat and choose how long it stays pinned.
        </p>
        <p className="mt-3">
          If a new message is pinned, the previously pinned message is replaced. The most recent pinned message appears
          in the chat header.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Pin a message</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp and go to the chat with the message you want to pin.</li>
            <li>Press and hold the message, then tap Pin.</li>
            <li>Select how long to pin it (24 hours, 7 days, or 30 days).</li>
            <li>Tap Pin to confirm.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Unpin a message</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open the chat and locate the pinned message.</li>
            <li>Press and hold the pinned message or open the pinned banner.</li>
            <li>Tap Unpin.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Pin a message in group chats</h2>
          <p className="mt-3">
            Group admins can choose whether members can pin messages in group chats.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open the group chat and tap the group name.</li>
            <li>Tap Group permissions.</li>
            <li>Turn Edit group settings on or off to control who can pin.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-pin-or-unpin-a-chat">
                How to pin a chat
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-delete-messages">
                How to delete messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
