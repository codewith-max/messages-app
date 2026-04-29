'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantSeeSomeonesStatusesOrRepliesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t see someone&apos;s statuses or replies
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you can&apos;t see someone&apos;s status or can&apos;t receive replies/messages from them on your status, try these
          potential solutions.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">
            Seeing &quot;this status is no longer available&quot; or trouble viewing a status mention
          </h2>
          <p className="mt-3">When this happens, it usually means one or more of the following:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>The status was shared with a custom audience and you were not included.</li>
            <li>Your visibility to that person&apos;s status has changed due to privacy settings.</li>
            <li>The status expired after 24 hours.</li>
            <li>You were removed from a group where the status mention was sent.</li>
          </ul>
          <p className="mt-3">
            If status mentions keep failing, ask the sender to check their audience and mention settings before trying
            again.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Read receipts</h2>
          <p className="mt-3">
            Status view visibility depends on read receipts. If either person has read receipts turned off, view or like
            updates may not appear.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Status privacy</h2>
          <p className="mt-3">
            If someone used status privacy settings to hide their updates from you, you won&apos;t see those statuses. Learn more
            about{' '}
            <Link className={linkClass} href="/help-center/how-to-manage-status-privacy?platform=web">
              status privacy settings
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Blocked</h2>
          <p className="mt-3">
            If you&apos;ve blocked someone, you won&apos;t be able to see their messages, replies, or status updates and they won&apos;t
            see yours.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Connectivity</h2>
          <p className="mt-3">
            Ensure you and the other person have a strong mobile network or Wi-Fi connection. Limited network access may
            delay status syncing and replies.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Contacts</h2>
          <p className="mt-3">
            Add the person to your contacts, then ask them to save your number too. If either contact isn&apos;t saved, status
            delivery and replies can be limited.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">App permissions</h2>
          <p className="mt-3">
            Grant WhatsApp permissions in your phone settings so the app can properly sync contacts and media.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Restart your device</h2>
          <p className="mt-3">Restarting your phone can help reset background services and temporary connection issues.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">WhatsApp version</h2>
          <p className="mt-3">Update WhatsApp to the latest available version from your app store.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-whatsapp-status">
                How to use status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=web">
                Can&apos;t send text messages, status updates, or voice messages on web
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
