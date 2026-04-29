'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function CantCreateOrShareStatusArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t create or share status
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          We&apos;re currently experiencing a problem where, in certain situations, photos and videos in WhatsApp may fail to
          send or upload. This can affect status updates as well. We&apos;re working to fix this as quickly as possible.
          Please keep WhatsApp updated to the latest version available in your app store on your device.
        </div>

        <p className="mt-5">
          If you continue to have trouble, try the solutions below and try again.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Connectivity</h2>
          <p className="mt-3">
            Some issues can be caused by connectivity problems inside private or restricted networks. Try these checks:
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Restart your Wi-Fi router if your internet is slow or unstable.</li>
            <li>Switch between Wi-Fi and mobile data to see what works best for your connection.</li>
            <li>Use a strong mobile signal before uploading media.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Device storage</h2>
          <p className="mt-3">
            Check that your phone has available storage space. Open your phone settings and make sure there&apos;s enough free
            space before trying again.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check the media file</h2>
          <p className="mt-3">
            If you&apos;re trying to upload a large photo or video, check that the file format is supported and file size limits
            are not exceeded. Corrupted files can also fail to upload.
          </p>
          <p className="mt-3">
            Verify that your photo or video opens correctly in your phone gallery. If it doesn&apos;t open there, it likely can&apos;t
            be uploaded in WhatsApp.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Restart your device</h2>
          <p className="mt-3">
            Restart your phone to help reset app, storage, and network services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">WhatsApp version</h2>
          <p className="mt-3">
            Update WhatsApp to the latest available version from your app store.
          </p>
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
