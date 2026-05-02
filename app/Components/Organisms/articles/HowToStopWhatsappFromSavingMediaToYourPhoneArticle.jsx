'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';
import HelpCenterPlatformTabs from '../../Molecules/help-center/HelpCenterPlatformTabs';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function AndroidContent() {
  return (
    <>
      <p>
        WhatsApp automatically saves audio, video and photos sent to your phone. The{' '}
        <span className="font-semibold text-[#111b21]">Media visibility</span> option is turned on by default.
      </p>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Stop saving media from all chats</h2>
        <p className="mt-3">To stop WhatsApp from automatically saving media to your device&apos;s local storage:</p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            Tap <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Chats</span>.
          </li>
          <li>
            Turn off <span className="font-semibold text-[#111b21]">Media visibility</span>.
          </li>
        </ol>
        <p className="mt-4">
          If you&apos;ve turned <span className="font-semibold text-[#111b21]">Media visibility</span> off, you can turn it back on at any time if
          you want to revert to WhatsApp automatically downloading audio, video and photos.
        </p>
        <p className="mt-3">
          Note: Changing this setting won&apos;t affect any previous auto-download choices you&apos;ve made for specific chats
          or groups.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Stop saving media from specific chats or groups</h2>
        <p className="mt-3">
          You can also adjust your settings for saving incoming media from specific individual or group chats.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            From the <span className="font-semibold text-[#111b21]">Chats</span> tab, tap an individual or group chat.
          </li>
          <li>
            Tap the contact or group name to see <span className="font-semibold text-[#111b21]">Contact info</span> or{' '}
            <span className="font-semibold text-[#111b21]">Group info</span>.
          </li>
          <li>
            Tap <span className="font-semibold text-[#111b21]">Media visibility</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">No</span> &gt; <span className="font-semibold text-[#111b21]">OK</span>.
          </li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        WhatsApp automatically saves audio, video, and photos sent to your phone.{' '}
        <span className="font-semibold text-[#111b21]">Save to Photos</span> is turned on by default.
      </p>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Stop saving media from all chats</h2>
        <p className="mt-3">To stop WhatsApp automatically saving media to your Photos:</p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            Tap <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Chats</span>.
          </li>
          <li>
            Turn off <span className="font-semibold text-[#111b21]">Save to Photos</span>.
          </li>
        </ol>
        <p className="mt-4">
          If you&apos;ve turned <span className="font-semibold text-[#111b21]">Save to Photos</span> off, you can turn it back on at any time if you
          want to revert to WhatsApp automatically downloading audio, images and videos.
        </p>
        <p className="mt-3">
          Note: Changing this setting won&apos;t affect any previous auto-download choices you&apos;ve made for specific chats
          or groups.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Stop saving media from specific individual or group chats</h2>
        <p className="mt-3">You can also adjust your settings for saving incoming media from specific chats or groups.</p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            From the <span className="font-semibold text-[#111b21]">Chats</span> tab, tap an individual or group chat.
          </li>
          <li>
            Tap the contact or group name to see <span className="font-semibold text-[#111b21]">Contact Info</span> or{' '}
            <span className="font-semibold text-[#111b21]">Group Info</span>.
          </li>
          <li>
            Tap <span className="font-semibold text-[#111b21]">Save to Photos</span> and select{' '}
            <span className="font-semibold text-[#111b21]">Never</span> from the selection below:
          </li>
        </ol>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            <span className="font-semibold text-[#111b21]">Default (On):</span> Incoming media will be saved to Photos.
          </li>
          <li>
            <span className="font-semibold text-[#111b21]">Always:</span> All incoming media is saved to Photos.
          </li>
          <li>
            <span className="font-semibold text-[#111b21]">Never:</span> Incoming media won&apos;t be saved to Photos.
          </li>
        </ul>
      </section>
    </>
  );
}

export default function HowToStopWhatsappFromSavingMediaToYourPhoneArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  const relatedPlatform = platform === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to stop WhatsApp from saving media to your phone
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterPlatformTabs
        androidContent={
          <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
            <AndroidContent />
          </div>
        }
        iosContent={
          <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
            <IOSContent />
          </div>
        }
      />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-configure-auto-download?platform=${relatedPlatform}`}>
                How to configure auto-download
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/finding-media-files?platform=${relatedPlatform}`}>
                Finding media files
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
