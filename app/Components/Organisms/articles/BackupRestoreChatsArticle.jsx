'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function CopyLinkButton() {
  const [done, setDone] = useState(false);

  const copy = useCallback(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (url && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(url).then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.1] bg-white px-3 py-1.5 text-[14px] font-semibold text-[#111b21] shadow-sm transition hover:bg-[#f0f2f4]"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
      {done ? 'Copied' : 'Copy link'}
    </button>
  );
}

export default function BackupRestoreChatsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Back Up or Restore Your Chats
        </h1>
        <CopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you&apos;re using WhatsApp on your phone, you have the ability to back up and restore your chat history in
          case you lose your phone or switch to a new one. You can back up your chats at any time or set up regular
          backups for added convenience.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Backing up your chats</h2>
          <p className="mt-3">
            You can back up your chat history using your Google Account on Android devices, or iCloud on iPhone. To
            avoid the loss of any backups, we recommend backing up your WhatsApp data often. To learn how to back up
            your chats, read{' '}
            <Link className={linkClass} href="/help-center">
              this article
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Restoring your chats</h2>
          <p className="mt-3">
            To successfully restore your chats, you need to use the same phone number and Google Account or iCloud
            account you used to create the backup. We recommend performing a backup before uninstalling WhatsApp or
            moving to a new device. To learn how to restore your chats, read{' '}
            <Link className={linkClass} href="/help-center">
              this article
            </Link>
            .
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> Unfortunately, we can&apos;t restore your chats for
            you because your chat history isn&apos;t stored on our servers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Transferring your chats</h2>
          <p className="mt-3">
            If you don&apos;t want to back up your chats, you can still transfer them between devices. While restoring from
            a backup can recover all of your chat data, transferring your chats allows you to move your full account
            information to your new device, including all of your messages and media.
          </p>
          <p className="mt-3">
            To learn how to transfer your chats between two Android devices or iPhones, read{' '}
            <Link className={linkClass} href="/help-center">
              this article
            </Link>
            .
          </p>
          <p className="mt-2">
            To learn how to transfer your chats from an Android device to an iPhone, read{' '}
            <Link className={linkClass} href="/help-center">
              this article
            </Link>
            .
          </p>
          <p className="mt-2">
            To learn how to transfer your chats from an iPhone to an Android device, read{' '}
            <Link className={linkClass} href="/help-center">
              this article
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Can&apos;t{' '}
              <Link className={linkClass} href="/help-center">
                back up or restore your chat history
              </Link>
            </li>
            <li>
              Can&apos;t{' '}
              <Link className={linkClass} href="/help-center">
                transfer chat history
              </Link>
            </li>
            <li>
              Can&apos;t{' '}
              <Link className={linkClass} href="/help-center">
                move chats from an Android device to an iPhone
              </Link>
            </li>
            <li>
              Can&apos;t{' '}
              <Link className={linkClass} href="/help-center">
                move chats from an iPhone to an Android device
              </Link>
            </li>
            <li>
              How to{' '}
              <Link className={linkClass} href="/help-center">
                turn off WhatsApp in your device backup
              </Link>
            </li>
            <li>
              How to{' '}
              <Link className={linkClass} href="/help-center">
                export your chat history
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
