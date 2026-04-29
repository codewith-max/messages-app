'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/supported-operating-systems';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[240px] border-b border-black/[0.1]" role="tablist" aria-label="Choose desktop platform">
      <Link className={getClass('web')} href={`${BASE}?platform=web`} role="tab" aria-selected={platform === 'web'}>
        Web
        {isActive('web') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('mac-desktop')} href={`${BASE}?platform=mac-desktop`} role="tab" aria-selected={platform === 'mac-desktop'}>
        Mac
        {isActive('mac-desktop') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link
        className={getClass('windows-desktop')}
        href={`${BASE}?platform=windows-desktop`}
        role="tab"
        aria-selected={platform === 'windows-desktop'}
      >
        Windows
        {isActive('windows-desktop') ? (
          <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden />
        ) : null}
      </Link>
    </div>
  );
}

export default function SupportedOperatingSystemsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = rawPlatform === 'mac-desktop' || rawPlatform === 'windows-desktop' ? rawPlatform : 'web';

  return (
    <article className="max-w-3xl px-4 pb-16 pt-6 text-[16px] leading-7 text-[#3b4a54] sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About supported operating systems
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      {platform === 'web' ? (
        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Web users</h2>
          <p className="mt-3">
            WhatsApp Web is supported on Windows, Linux and MacOS. Calling works best on Chrome, Edge, Firefox, Safari
            and Opera.
          </p>
          <p className="mt-3">Minimum browsers versions are as follows:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Chrome 85+</li>
            <li>Edge 85+</li>
            <li>Firefox 115+</li>
            <li>Safari 15.2+</li>
            <li>Opera 85+</li>
          </ul>
        </section>
      ) : null}

      {platform === 'mac-desktop' ? (
        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Mac users</h2>
          <p className="mt-3">WhatsApp for Mac is supported on macOS 12.1 or newer versions.</p>
          <p className="mt-3">
            If the version you are using is older, you&apos;ll need to update your operating system and then download{' '}
            <Link className={linkClass} href="/help-center/about-whatsapp-for-desktops?platform=mac-desktop">
              WhatsApp for Mac
            </Link>
            . Alternatively, you can use{' '}
            <Link className={linkClass} href="/help-center/about-whatsapp-web">
              WhatsApp Web
            </Link>{' '}
            in your browser.
          </p>
          <p className="mt-3">
            For instructions on how to check which version of macOS you are running,{' '}
            <a className={linkClass} href="https://support.apple.com" target="_blank" rel="noopener noreferrer">
              click here
            </a>{' '}
            to visit the Apple help center.
          </p>
        </section>
      ) : null}

      {platform === 'windows-desktop' ? (
        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Windows users</h2>
          <p className="mt-3">WhatsApp for Windows is supported on Windows 10.1 64 bit 1903 or newer versions.</p>
          <p className="mt-3">
            If the version you are using is older, you&apos;ll need to update your operating system and then download{' '}
            <Link className={linkClass} href="/help-center/about-whatsapp-for-desktops?platform=windows-desktop">
              WhatsApp for Windows
            </Link>
            . Alternatively, you can use{' '}
            <Link className={linkClass} href="/help-center/about-whatsapp-web">
              WhatsApp Web
            </Link>{' '}
            in your browser.
          </p>
          <p className="mt-3">
            For instructions on how to check which version of Windows operating system you are running,{' '}
            <a className={linkClass} href="https://support.microsoft.com" target="_blank" rel="noopener noreferrer">
              click here
            </a>{' '}
            to visit the Microsoft help center.
          </p>
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            <Link className={linkClass} href="/help-center/supported-devices">
              About supported devices
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center/about-whatsapp-for-desktops?platform=windows-desktop">
              About WhatsApp for desktops
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center/about-whatsapp-web">
              About WhatsApp Web
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
