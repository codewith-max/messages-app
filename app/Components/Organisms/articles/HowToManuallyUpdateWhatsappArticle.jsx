'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-manually-update-whatsapp';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'mac-desktop', label: 'Mac' },
  { key: 'windows-desktop', label: 'Windows' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[360px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToManuallyUpdateWhatsappArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  const storeName =
    platform === 'android'
      ? 'Google Play Store'
      : platform === 'ios'
        ? 'Apple App Store'
        : platform === 'mac-desktop'
          ? 'Mac App Store'
          : 'Microsoft Store';

  const appName =
    platform === 'android'
      ? 'WhatsApp Messenger'
      : platform === 'ios'
        ? 'WhatsApp Messenger'
        : platform === 'mac-desktop'
          ? 'WhatsApp Messenger in the Mac App Store'
          : 'WhatsApp Messenger in the Microsoft Store';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to manually update WhatsApp
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          We encourage you to always use the most up to date version of WhatsApp. The latest versions contain the
          newest features and bug fixes. If you&apos;ve turned auto-updates off, you can manually update to the latest
          version of WhatsApp.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> When registering your phone number, you&apos;ll need to
          use the latest version of WhatsApp, otherwise your registration might fail.
        </p>
        <p className="mt-3">
          Before updating the app, make sure you have a strong internet connection and back up and save your chat
          history. Learn more{' '}
          <Link className={linkClass} href="/help-center/backup-restore-chats">
            here
          </Link>
          .
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Update WhatsApp</h2>
          <p className="mt-3">
            You can easily update WhatsApp from the{' '}
            <span className="font-semibold text-[#008069]">{storeName}</span>.
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Find {appName}.
            </li>
            <li>Tap Update.</li>
          </ol>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> WhatsApp updates may not be available in certain
            regions due to local regulations.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/supported-operating-systems?platform=web">
                About supported operating systems
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-download-update">
                Can&apos;t download or update WhatsApp
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
