'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function ChatButtonPreview() {
  return (
    <div className="mt-4 space-y-3">
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-md bg-[#25d366] px-4 py-2 text-[20px] font-semibold text-white"
      >
        <span aria-hidden>◉</span>
        Chat on WhatsApp
      </a>
      <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[26px] font-medium text-[#111b21]">
        <span aria-hidden>◯</span>
        Chat on WhatsApp
      </a>
    </div>
  );
}

export default function HowToUseClickToChatArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use click to chat
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp&apos;s click to chat feature lets you start a chat with a phone number that is not saved in your phone&apos;s
          address book. If the number has an active WhatsApp account, you can open a chat by using a short link.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create your own link</h2>
          <p className="mt-3">
            Use <span className="font-semibold text-[#111b21]">https://wa.me/&lt;number&gt;</span> where
            <span className="font-semibold text-[#111b21]"> &lt;number&gt;</span> is the full phone number in international format.
            Omit zeroes, brackets, dashes, and plus signs.
          </p>
          <p className="mt-3 font-semibold text-[#111b21]">Example:</p>
          <p className="mt-1 rounded-md bg-[#f5f6f6] px-3 py-2 font-mono text-[14px] text-[#111b21]">
            https://wa.me/15551234567
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create your own link with a pre-filled message</h2>
          <p className="mt-3">
            Add text by using <span className="font-semibold text-[#111b21]">?text=</span> after the phone number link.
            URL-encode spaces and special characters.
          </p>
          <p className="mt-3 font-semibold text-[#111b21]">Example:</p>
          <p className="mt-1 rounded-md bg-[#f5f6f6] px-3 py-2 font-mono text-[14px] text-[#111b21]">
            https://wa.me/15551234567?text=Hello%20there
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to use Chat on WhatsApp buttons</h2>
          <p className="mt-3">
            You can add a button or plain text link to your website so users can open a chat quickly.
          </p>
          <ChatButtonPreview />
          <p className="mt-4 font-semibold text-[#111b21]">Basic requirements:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Use an HTTPS website.</li>
            <li>Use a phone number in international format.</li>
            <li>Open in a new tab for best experience.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">HTML code examples</h2>
          <p className="mt-3 font-semibold text-[#111b21]">Button style:</p>
          <pre className="mt-1 overflow-x-auto rounded-md bg-[#f5f6f6] px-3 py-2 text-[13px] text-[#111b21]">
{`<a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
  Chat on WhatsApp
</a>`}
          </pre>
          <p className="mt-3 font-semibold text-[#111b21]">Text style:</p>
          <pre className="mt-1 overflow-x-auto rounded-md bg-[#f5f6f6] px-3 py-2 text-[13px] text-[#111b21]">
{`<a href="https://wa.me/15551234567?text=Hello%20there" target="_blank" rel="noreferrer">
  Chat on WhatsApp
</a>`}
          </pre>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-add-edit-or-delete-a-contact">
                How to add, edit, or delete a contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
