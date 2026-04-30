'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutGoogleAccountBackupsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About Google Account backups
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can back up WhatsApp chats and media to your Google Account. This helps restore your chat history when
          you reinstall WhatsApp or switch to a new Android phone.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How backups work</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Backups are tied to your Google Account and phone number.</li>
            <li>Backup frequency can be daily, weekly, monthly, or manual.</li>
            <li>Backups may include videos if enabled in chat backup settings.</li>
            <li>Backups not updated for a long period may expire from Google storage.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p className="font-semibold">Notes</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Backup and restore speed depends on internet quality and file size.</li>
            <li>Use Wi-Fi for faster and more stable backup.</li>
            <li>Changing Google Account may require a fresh backup setup.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-back-up-your-chat-history?platform=android">
                How to back up your chat history
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-restore-your-chat-history?platform=android">
                How to restore your chat history
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
