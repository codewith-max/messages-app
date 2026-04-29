'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/fixing-issues-on-whatsapp';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows-desktop', label: 'Windows' },
  { key: 'mac-desktop', label: 'Mac' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;

  return (
    <div className="mb-5 flex w-full max-w-[420px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function FixingIssuesOnWhatsappArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';
  const isAndroid = platform === 'android';
  const isIos = platform === 'ios';
  const isDesktop = platform === 'web' || platform === 'windows-desktop' || platform === 'mac-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Fixing issues on WhatsApp
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>If you&apos;re having any issues with WhatsApp, there are a few things you can try.</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check your connection</h2>
          <p className="mt-3">Make sure you have a good internet connection. Try switching between Wi-Fi and mobile internet.</p>
          <p className="mt-2">If you have no Wi-Fi or a poor mobile internet connection, try moving to a different location.</p>
          <p className="mt-2">
            Read more about{' '}
            <Link className={linkClass} href={`/help-center/how-to-fix-connection-issues?platform=${isDesktop ? 'web' : platform}`}>
              problems connecting to WhatsApp
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Update WhatsApp</h2>
          <p className="mt-3">
            {isAndroid
              ? "Make sure you're updated to the latest version of WhatsApp on Google Play."
              : isIos
                ? "Make sure you're updated to the latest version of WhatsApp on the Apple App Store."
                : (
                  <>
                    Make sure you&apos;re updated to the{' '}
                    <Link className={linkClass} href="/help-center/download-uninstall">
                      latest version of WhatsApp
                    </Link>
                    .
                  </>
                )}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Turn your device off and on again</h2>
          <p className="mt-3">Try turning your device off and on again. This can help to reset your apps.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Close WhatsApp and reopen it</h2>
          <p className="mt-3">Close WhatsApp and then open it again.</p>
        </section>

        {isDesktop ? (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Log out of WhatsApp and log back in</h2>
            <p className="mt-3">
              Learn how to{' '}
              <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
                log out from your linked device
              </Link>
              .
            </p>
          </section>
        ) : null}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Free up storage space</h2>
          <p className="mt-3">Delete old or unused media such as large video files from your device storage to free up space.</p>
          <p className="mt-2">You can also clear your WhatsApp cache to free up storage space on your device.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-fix-connection-issues?platform=${isDesktop ? 'web' : platform}`}>
                How to fix connection issues
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-download-update">
                Can&apos;t download or update WhatsApp
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/not-seeing-a-feature-on-whatsapp">
                Not seeing a feature on WhatsApp
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
