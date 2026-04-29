'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function SeeingDevicesOutOfSyncMessageArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Seeing &quot;Devices out of sync&quot; message
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="mb-5 flex w-full max-w-[120px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
        <span className="relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#008069]">
          Web
          <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden />
        </span>
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you&apos;re seeing the warning &quot;Devices out of sync,&quot; you may need to update your phone clock to
          the correct time. The date, time, and time zone settings on your phone should match your current location.
        </p>
        <p className="mt-3">
          If they don&apos;t, you can update your clock in your phone&apos;s settings. If your clock is set correctly but the
          warning persists, check your internet connection and restart your phone.
        </p>
        <p className="mt-3">
          If the clock remains incorrect on your phone, your linked devices may be automatically removed after some
          time. You can always relink your devices.
        </p>
        <p className="mt-3">
          For the future, we recommend setting your date and time to Automatic. With this setting enabled, your mobile
          provider will set your phone to the correct time. If the incorrect time is displayed even with this setting
          enabled, then there might be an issue with your network. Please contact your mobile provider to address the
          issue.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/seeing-waiting-for-this-message-may-take-a-while">
                Seeing &quot;Waiting for this message. This may take a while.&quot;
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/seeing-waiting-for-this-message-check-your-phone">
                Seeing &quot;Waiting for this message. Check your phone.&quot;
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/seeing-logout-is-pending">
                Seeing &quot;Logout is pending&quot;
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
