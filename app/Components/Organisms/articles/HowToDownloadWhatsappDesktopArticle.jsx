'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-download-whatsapp-desktop';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[220px] border-b border-black/[0.1]" role="tablist" aria-label="Choose desktop platform">
      <Link className={getClass('windows-desktop')} href={`${BASE}?platform=windows-desktop`} role="tab" aria-selected={platform === 'windows-desktop'}>
        Windows
        {isActive('windows-desktop') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('mac-desktop')} href={`${BASE}?platform=mac-desktop`} role="tab" aria-selected={platform === 'mac-desktop'}>
        Mac
        {isActive('mac-desktop') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
    </div>
  );
}

export default function HowToDownloadWhatsappDesktopArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'windows-desktop' ? 'windows-desktop' : 'mac-desktop';
  const isWindows = platform === 'windows-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to download WhatsApp Desktop
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>WhatsApp can be used on your desktop without a browser.</p>

        <section className="mt-8">
          {isWindows ? (
            <>
              <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Download WhatsApp Desktop for Windows</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
                <li>
                  Go to the{' '}
                  <Link className={linkClass} href="https://www.whatsapp.com/download">
                    Microsoft App Store
                  </Link>
                  .
                </li>
                <li>Download the app and follow the prompts to complete the installation.</li>
              </ol>
            </>
          ) : (
            <>
              <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Download from WhatsApp.com</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
                <li>
                  In your computer&apos;s browser, go to the{' '}
                  <Link className={linkClass} href="https://www.whatsapp.com/download">
                    WhatsApp Download page
                  </Link>
                  , then download the Desktop Mac file.
                </li>
                <li>Once the download is complete, open the file and follow the prompts to complete the installation.</li>
              </ol>

              <h3 className="mt-8 text-[26px] font-bold leading-tight text-[#111b21]">Download from the Apple App Store</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
                <li>
                  Go to the{' '}
                  <Link className={linkClass} href="https://www.whatsapp.com/download">
                    Apple App Store
                  </Link>
                  , then download the Desktop Mac file.
                </li>
                <li>Download the app and follow the prompts to complete the installation.</li>
              </ol>
            </>
          )}
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">System requirements</h2>
          <p className="mt-3">
            WhatsApp Desktop is available for {isWindows ? 'Windows 10.1 64-bit 1903 or later.' : 'macOS 11 or later.'}
          </p>
          <p className="mt-2">
            For all other operating systems, you can use{' '}
            <Link className={linkClass} href="/help-center/get-started-web?platform=web">
              WhatsApp Web
            </Link>{' '}
            in your browser.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-link-a-device?platform=${isWindows ? 'android' : 'ios'}`}>
                How to link a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/about-whatsapp-for-desktops?platform=${platform}`}>
                About WhatsApp Desktop
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-web">
                About WhatsApp Web
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-unlink-a-device?platform=${isWindows ? 'android' : 'ios'}`}>
                How to unlink a device
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-fix-connection-issues?platform=web">
                How to fix connection issues
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
