'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function StatusMentionsVideoPreview() {
  return (
    <div className="relative mt-4 max-w-[420px] overflow-hidden bg-[#25d366]">
      <div className="aspect-[16/9] w-full" />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5">
        <p className="max-w-[230px] text-[36px] font-semibold leading-[0.95] text-[#111b21]">
          About mentions on WhatsApp Status
        </p>
        <p className="mt-4 text-[18px] font-semibold text-white">WhatsApp</p>
      </div>
      <button
        type="button"
        aria-label="Play video preview"
        className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/85 text-white"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M8 6v12l10-6z" />
        </svg>
      </button>
    </div>
  );
}

export default function AboutStatusMentionsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About status mentions
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <strong>Note:</strong> This is a new feature we&apos;re rolling out in phases to ensure the best experience for all
          users. You might notice some users have access before you, but we&apos;re working hard to make sure it&apos;s available
          to everyone as soon as possible.
        </div>

        <p className="mt-5">
          Mention someone to let them know you&apos;ve shared a status for them to see. You can mention individual contacts and
          groups in your status. People or groups mentioned in your status can view the status and reshare it to their
          audience.
        </p>
        <p className="mt-3">
          If you&apos;re mentioned individually by someone in their status, other people viewing the status can&apos;t see that you
          were mentioned. If you&apos;re in a group which was mentioned in a status, all group members can see the status
          mention.
        </p>
        <StatusMentionsVideoPreview />

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mentioning a person or group in your status</h2>
          <p className="mt-3">
            You can add up to 5 mentions on a status at a time. People you mention in your status will be notified
            privately, and other users viewing the status will not be able to see who you mentioned.
          </p>
          <p className="mt-3">When you mention a person or a group in your status:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              They can see your status, even if they aren&apos;t in your status audience. This won&apos;t change the audience settings
              for future status updates. Learn more about{' '}
              <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
                status privacy settings
              </Link>
              .
            </li>
            <li>
              They will get a message from you in the Chats tab saying you mentioned them with a link to the status. When
              you mention groups, the mention is sent to the existing group chat.
            </li>
            <li>
              The mentioned people or group members can edit and reshare the content of your status to their own audience.
              Resharing allows their audience to see the content of your status, but doesn&apos;t reveal your name, profile info
              or phone number.
            </li>
          </ul>
          <p className="mt-3">
            Learn how to{' '}
            <Link className={linkClass} href="/help-center/how-to-create-and-share-a-status?platform=web">
              mention someone when creating a status
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Being mentioned in a status</h2>
          <p className="mt-3">
            Any WhatsApp user may mention you in a status, not just your contacts. For example, people in the same WhatsApp
            Group or Community could mention you to share a status update.
          </p>
          <p className="mt-3">
            When someone mentions you in their status, you&apos;ll receive a new message between you both in the Chats tab. If
            someone mentions a group you&apos;re in, you&apos;ll see the status mention in the existing group chat.
          </p>
          <p className="mt-3">If you&apos;re mentioned in someone else&apos;s status:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              If you&apos;re mentioned individually, other people viewing the status can&apos;t see you were mentioned - not even other
              people who were mentioned.
            </li>
            <li>If you&apos;re in a group which was mentioned, all the group members can see the status mention.</li>
            <li>
              You may reshare the status content as your own. When you reshare a status, you&apos;ll be able to edit the content
              of the status and choose your audience before sharing as usual.
            </li>
          </ul>
          <p className="mt-3">
            Learn{' '}
            <Link className={linkClass} href="https://faq.whatsapp.com/1250545928852381?helpref=faq_content" target="_blank" rel="noreferrer">
              how to reshare a status
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Controlling who can send you mentions</h2>
          <p className="mt-3">
            To stop receiving status mentions from a specific person or group, you can{' '}
            <Link className={linkClass} href="https://faq.whatsapp.com/1142481766359885/?helpref=faq_content" target="_blank" rel="noreferrer">
              block the person
            </Link>{' '}
            or{' '}
            <Link className={linkClass} href="https://faq.whatsapp.com/678712076864311?helpref=faq_content" target="_blank" rel="noreferrer">
              exit and delete the group
            </Link>
            . If you don&apos;t want to be notified when someone mentions you,{' '}
            <Link className={linkClass} href="https://faq.whatsapp.com/1426887324388733/?helpref=faq_content" target="_blank" rel="noreferrer">
              archive your chat with them
            </Link>{' '}
            or{' '}
            <Link className={linkClass} href="https://faq.whatsapp.com/797069521522888/?helpref=faq_content" target="_blank" rel="noreferrer">
              mute notifications for that chat
            </Link>
            .
          </p>
          <p className="mt-3">
            If you muted someone&apos;s status, they can still send you a chat with a mention, but their updates will remain
            hidden from view in the Updates tab. You can still see the status you were mentioned in.
          </p>
          <p className="mt-3">
            If you think the status you were mentioned in included problematic content or spam, you can{' '}
            <Link className={linkClass} href="https://faq.whatsapp.com/771267714464323/?helpref=faq_content" target="_blank" rel="noreferrer">
              report it
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-create-and-share-a-status?platform=web">
                How to use status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="https://faq.whatsapp.com/771267714464323/?helpref=faq_content" target="_blank" rel="noreferrer">
                How to report a status update
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
