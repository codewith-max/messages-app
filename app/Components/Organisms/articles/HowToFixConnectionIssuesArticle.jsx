'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-fix-connection-issues';

const platformLabel = {
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
  windows: 'Windows',
  mac: 'Mac',
};

function PlatformTabs({ platform }) {
  const tabs = ['android', 'ios', 'web', 'windows', 'mac'];
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;

  return (
    <div className="mb-5 flex w-full max-w-[440px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((key) => (
        <Link key={key} className={getClass(key)} href={`${BASE}?platform=${key}`} role="tab" aria-selected={platform === key}>
          {platformLabel[key]}
          {platform === key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function KnownIssueNotice() {
  return (
    <div className="mt-6 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6 text-[#3b4a54]">
      There&apos;s a problem with uploading and downloading media, including videos, in messages right now. This means
      you may experience issues sending and receiving images/photos and videos. We&apos;re working to fix it as soon as
      possible. In the meantime, please keep WhatsApp updated on your device.
    </div>
  );
}

export default function HowToFixConnectionIssuesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = ['android', 'ios', 'web', 'windows', 'mac'].includes(rawPlatform) ? rawPlatform : 'web';
  const isWebFamily = platform === 'web' || platform === 'windows' || platform === 'mac';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to fix connection issues
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <KnownIssueNotice />

        <p className="mt-5">
          If you&apos;re having problems sending and receiving chats, or uploading and downloading photos or videos, the
          most common reason is a poor internet connection.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">To check your device&apos;s internet connection:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Try opening a website or app to confirm your internet is working.</li>
            <li>If you don&apos;t have internet access, contact your internet provider.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">
            If your device is connected to the internet and has a strong signal, try these steps to fix the issue:
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Refresh or restart WhatsApp.</li>
            <li>Clear your browser cache and cookies (for WhatsApp Web).</li>
            <li>Log out and log back in.</li>
            <li>Uninstall and reinstall WhatsApp.</li>
            <li>Restart your device.</li>
            <li>Try a different network (for example, mobile data or another Wi-Fi).</li>
          </ul>
          {isWebFamily ? (
            <p className="mt-3">
              <span className="font-semibold text-[#111b21]">Note:</span> You can use WhatsApp Web on the latest
              versions of Chrome, Firefox, Microsoft Edge, Opera, or Safari.
            </p>
          ) : null}
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-for-desktops?platform=windows-desktop">
                About WhatsApp Web and Desktop
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-download-whatsapp-desktop?platform=windows-desktop">
                How to download WhatsApp Desktop
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
                How to log out
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
