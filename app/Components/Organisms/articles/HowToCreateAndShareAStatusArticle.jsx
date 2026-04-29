'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-create-and-share-a-status';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'iphone', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac-desktop', label: 'Mac' },
  { key: 'windows-desktop', label: 'Windows' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[430px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToCreateAndShareAStatusArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';
  const isAndroid = platform === 'android';
  const isIos = platform === 'iphone';
  const isWebFamily = platform === 'web' || platform === 'mac-desktop' || platform === 'windows-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to create and share a status
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <strong>Note:</strong> We&apos;re building and testing out new features, and they may not be available to you yet.
          Keep WhatsApp updated so you can get new features as soon as they&apos;re available.
        </div>

        <p className="mt-5">You can use WhatsApp Status to share photos and videos that disappear from view after 24 hours.</p>
        <p className="mt-2">
          You can choose who can see your status by adding them to your status audience or mentioning a specific person
          or group. Learn more about{' '}
          <Link className={linkClass} href="/help-center/about-status-mentions">
            status mentions
          </Link>{' '}
          or{' '}
          <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
            status privacy
          </Link>
          .
        </p>

        {isWebFamily ? (
          <>
            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a text status</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Click Updates &gt; My Status &gt; Text.</li>
                <li>Type your status.</li>
                <li>Click send to share your status.</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a photo status</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Click Updates &gt; My Status &gt; Photos &amp; videos.</li>
                <li>Select a photo from your device.</li>
                <li>Click send to share your status.</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a video status</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Click Updates &gt; My Status &gt; Photos &amp; videos.</li>
                <li>Select a video from your device.</li>
                <li>Click send to share your status.</li>
              </ol>
              <p className="mt-3">Note: WhatsApp supports 3GP and MPEG-4 video formats.</p>
            </section>
          </>
        ) : null}

        {(isAndroid || isIos) ? (
          <>
            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a text status</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>{isAndroid ? 'Tap Updates > pencil.' : 'Tap Updates > pencil.'}</li>
                <li>Type a text status.</li>
                <li>Tap send to share your status.</li>
              </ol>
            </section>

            {isIos ? (
              <section className="mt-8">
                <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a voice status</h2>
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                  <li>Tap Updates &gt; pencil.</li>
                  <li>Tap and hold mic to record a voice status.</li>
                  <li>Tap send to share your status.</li>
                </ol>
              </section>
            ) : null}

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a photo status</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Tap Updates &gt; Add status.</li>
                <li>Select a photo or tap Camera to take a photo.</li>
                <li>Tap send to share your status.</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a video status</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Tap Updates &gt; Add status.</li>
                <li>Select a video or hold Camera to record.</li>
                <li>Tap send to share your status.</li>
              </ol>
              <p className="mt-3">Note: Videos can be up to 90 seconds long.</p>
            </section>
          </>
        ) : null}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">See status views and likes</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isWebFamily ? 'Click My status.' : 'Tap Updates &gt; My status.'}</li>
            <li>{isWebFamily ? 'While the status is displayed, click eye.' : 'Tap the status and then eye.'}</li>
          </ol>
          <p className="mt-3">Contacts who like your status will be marked with a green heart.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-share-your-whatsapp-status-to-other-apps">
                How to share your WhatsApp Status to other apps
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-share-a-channel-update">
                How to share a channel update
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-save-and-delete-your-status">
                How to save and delete your status
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-manage-status-privacy">
                How to manage status privacy
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-create-or-share-status">
                Can&apos;t create or share status
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
