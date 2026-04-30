'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToDeleteMessagesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to delete messages
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <span className="font-semibold">Note:</span> This article explains how to delete messages. To delete an
          entire chat, see <Link className={linkClass} href="/help-center/how-to-delete-chats">how to delete chats</Link>.
        </div>

        <p className="mt-5">
          You can delete messages for everyone or just for yourself. Deleted messages are replaced with a notice so
          participants know something was removed.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete messages for everyone</h2>
          <p className="mt-3">
            Deleting for everyone lets you remove specific messages you sent in an individual or group chat.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp and go to the chat containing the message.</li>
            <li>Press and hold the message, then select Delete.</li>
            <li>
              Choose <span className="font-semibold text-[#111b21]">Delete for everyone</span>.
            </li>
          </ol>
          <p className="mt-4 rounded-md bg-[#f5f6f6] px-4 py-3 text-[15px] leading-6 text-[#111b21]">
            “This message was deleted” will appear in place of the original message.
          </p>
          <p className="mt-4">
            Group admins can delete messages sent by any participant when needed to keep chats safe and organized.
          </p>
          <p className="mt-2 rounded-md bg-[#f5f6f6] px-4 py-3 text-[15px] leading-6 text-[#111b21]">
            “This message was deleted by admin” appears when an admin removes another member&apos;s message.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete messages for yourself</h2>
          <p className="mt-3">
            Deleting for yourself removes messages from your own device only. Other chat members still see the message.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open WhatsApp and the relevant chat.</li>
            <li>Press and hold the message, then tap Delete.</li>
            <li>
              Choose <span className="font-semibold text-[#111b21]">Delete for me</span>.
            </li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete media from a chat</h2>
          <p className="mt-3">
            Deleting media from a chat removes it from the conversation. Depending on your settings, the file may still
            remain in your phone gallery.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open the media message in chat.</li>
            <li>Tap delete.</li>
            <li>Select Delete for me.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-forward-messages">
                How to forward messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-star-or-unstar-a-message">
                How to star or unstar a message
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-delete-chats">
                How to delete chats
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
