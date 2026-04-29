'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappOnMetaQuestArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp on Meta Quest
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
          <span className="font-semibold text-[#111b21]">Note:</span> WhatsApp isn&apos;t available on Meta Horizon
          operating system versions older than v67. If your software version is older than v67, please update it.
        </div>

        <p className="mt-5">
          You can use WhatsApp on Meta Quest to read your chats, send messages, and make calls. Download WhatsApp from
          the Meta Quest Store on your Quest 2, Quest Pro, Quest 3, or Quest 3S headset.
        </p>
        <p className="mt-3">
          Your calls and messages remain end-to-end encrypted while using WhatsApp on Meta Quest. No one, not even
          WhatsApp or Meta, can listen to or read them.
        </p>
        <p className="mt-3">
          WhatsApp on Meta Quest is available in light mode or dark mode. To change your theme, select Settings &gt;
          Chats &gt; Theme and select a theme.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">What can you do with WhatsApp on Meta Quest?</h2>
          <p className="mt-3">WhatsApp on Meta Quest works like the version on your mobile device in many ways. You can:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>View and respond to your contacts&apos; status updates.</li>
            <li>Respond to incoming call notifications with quick replies.</li>
            <li>Read chats and reply using voice or text.</li>
            <li>Make voice and video calls.</li>
            <li>Answer or decline and ignore calls.</li>
            <li>Block and report chats and users.</li>
            <li>Use disappearing messages.</li>
            <li>Verify end-to-end encryption.</li>
            <li>Play back voice messages.</li>
            <li>Send reactions.</li>
            <li>Use stickers and GIFs.</li>
            <li>View images.</li>
            <li>Send polls.</li>
            <li>Mute a chat.</li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> This list isn&apos;t definitive.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <p className="mt-3">
            How to{' '}
            <Link className={linkClass} href="/help-center/how-to-link-your-meta-quest">
              link your Meta Quest
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
