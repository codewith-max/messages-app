'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const linkClass = 'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function GreenNextArrow() {
  return (
    <span
      className="mx-0.5 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded bg-[#008069] align-[-0.2em]"
      aria-hidden
    >
      <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  );
}

/** Google Play style center mark (play triangle with brand-like greens + accent) */
function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9 text-[#111b21]" aria-hidden>
      <path
        d="M6.5 3.2l18.2 10.2c.8.4.8 1.4 0 1.8L6.5 25.4c-.9.5-1.9-.1-1.9-1.1V4.3c0-1.1 1-1.6 1.9-1.1z"
        fill="currentColor"
      />
    </svg>
  );
}

function MoreOptionsIcon() {
  return (
    <span
      className="mx-0.5 inline-flex h-6 w-4 shrink-0 items-center justify-center align-[-0.15em] text-[#3b4a54]"
      aria-label="More options"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-4">
        <circle cx="12" cy="5" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="12" cy="19" r="1.8" />
      </svg>
    </span>
  );
}

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

function QrPlaceholder({ label, variant = 'default' }) {
  const isBranded = variant === 'ios' || variant === 'android';

  return (
    <div className="my-8 flex flex-col items-center">
      <div
        className="flex h-[200px] w-[200px] items-center justify-center rounded-lg border-2 border-dashed border-black/[0.12] bg-[#fafafa] sm:h-[240px] sm:w-[240px]"
        aria-hidden={isBranded}
      >
        {variant === 'ios' ? (
          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <svg className="h-11 w-11 text-[#1d1d1f]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-[12px] font-medium text-[#667781]">App Store</span>
            <span className="text-[11px] font-normal text-[#99a2a5]">QR code</span>
          </div>
        ) : variant === 'android' ? (
          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <GooglePlayIcon />
            <span className="text-[12px] font-medium text-[#667781]">Google Play</span>
            <span className="text-[11px] font-normal text-[#99a2a5]">QR code</span>
          </div>
        ) : (
          <div className="text-center text-[13px] font-medium text-[#667781]">
            {label}
            <span className="mt-1 block text-[11px] font-normal">QR code</span>
          </div>
        )}
      </div>
    </div>
  );
}

function AndroidIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.2 8.1a5 5 0 019.6 0h1.7a1 1 0 010 2h-.9v5.9a1.8 1.8 0 01-1.8 1.8h-.7v2.1a1 1 0 11-2 0v-2.1h-2.2v2.1a1 1 0 11-2 0v-2.1h-.7A1.8 1.8 0 016.4 16v-5.9h-.9a1 1 0 010-2zm2.2-.1a.8.8 0 10-.8-.8.8.8 0 00.8.8zm5.2 0a.8.8 0 10-.8-.8.8.8 0 00.8.8z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.45 13.45c.03 2.5 2.19 3.33 2.21 3.34-.02.06-.34 1.17-1.11 2.31-.67.98-1.36 1.95-2.45 1.97-1.07.02-1.42-.63-2.64-.63-1.23 0-1.61.61-2.61.65-1.05.04-1.85-1.06-2.52-2.03-1.37-1.97-2.42-5.56-1.01-8.01.7-1.22 1.95-1.99 3.31-2.01 1.03-.02 2 .69 2.64.69.64 0 1.82-.85 3.07-.72.52.02 1.96.21 2.9 1.58-.08.05-1.73 1.01-1.71 2.86zM14.84 5.5c.56-.68.94-1.62.84-2.56-.81.03-1.78.54-2.36 1.21-.52.6-.98 1.56-.86 2.48.9.07 1.82-.46 2.38-1.13z" />
    </svg>
  );
}

export default function DownloadUninstallArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform');
  const [tab, setTab] = useState(platform === 'ios' ? 'ios' : 'android');

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to download or uninstall WhatsApp
        </h1>
        <CopyLinkButton />
      </div>

      <div
        className="mb-8 flex w-full max-w-md border-b border-black/[0.1]"
        role="tablist"
        aria-label="Choose your device"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'android'}
          onClick={() => setTab('android')}
          className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'android'
              ? 'border-[#008069] text-[#008069]'
              : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          <AndroidIcon />
          Android
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'ios'}
          onClick={() => setTab('ios')}
          className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 border-b-2 px-2 text-[15px] font-semibold transition ${
            tab === 'ios'
              ? 'border-[#008069] text-[#008069]'
              : 'border-transparent text-[#667781] hover:text-[#3b4a54]'
          }`}
        >
          <AppleIcon />
          iOS
        </button>
      </div>

      {tab === 'android' ? (
        <div className="max-w-3xl">
          <h2 className="text-[20px] font-bold text-[#111b21]">Download WhatsApp</h2>
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Scan the QR code with your phone&apos;s camera and tap the link to be taken to the WhatsApp download page
            on the Play Store.
          </p>
          <QrPlaceholder variant="android" />

          <ol className="ml-1 list-decimal space-y-5 pl-5 text-[16px] leading-7 text-[#3b4a54] marker:font-bold marker:text-[#111b21]">
            <li>
              Find <strong className="text-[#111b21]">WhatsApp Messenger</strong> in the Google Play Store, then tap{' '}
              <strong className="text-[#111b21]">Install</strong>.
            </li>
            <li>
              Tap <strong className="text-[#111b21]">WhatsApp</strong> and choose your language <GreenNextArrow />{' '}
              <strong className="text-[#111b21]">Agree and continue</strong>.
            </li>
            <li>
              <p>
                <strong className="text-[#111b21]">Register</strong> and verify your phone number.
              </p>
              <ul className="mt-2 list-disc pl-5 marker:text-[#3b4a54]">
                <li>
                  If a backup of your chat history was found and you would like to restore it, tap{' '}
                  <strong className="text-[#111b21]">Continue</strong>. Tap <strong className="text-[#111b21]">Skip</strong>{' '}
                  to restore later. Learn more about restoring your chat history{' '}
                  <Link className={linkClass} href="/help-center">
                    in this article
                  </Link>
                  .
                </li>
              </ul>
            </li>
            <li>
              Enter your name and select an optional profile photo. You can also change this later in WhatsApp by
              tapping <strong className="text-[#111b21]">More options</strong> <MoreOptionsIcon />{' '}
              <strong className="text-[#111b21]">Settings</strong>, and tapping on your profile name.
            </li>
          </ol>

          <h2 className="mt-10 text-[20px] font-bold text-[#111b21]">Uninstall WhatsApp</h2>
          <ol className="mt-4 ml-1 list-decimal space-y-4 pl-5 text-[16px] leading-7 text-[#3b4a54] marker:font-bold marker:text-[#111b21]">
            <li>
              We recommend using the{' '}
              <Link className={linkClass} href="/help-center">
                chat backup
              </Link>{' '}
              feature to back up your messages before you delete WhatsApp from your device.
            </li>
            <li>
              Go to your device <strong className="text-[#111b21]">Settings</strong>.
            </li>
            <li>
              Tap <strong className="text-[#111b21]">Apps</strong> &gt; <strong className="text-[#111b21]">WhatsApp</strong>{' '}
              &gt; <strong className="text-[#111b21]">Uninstall</strong> to remove WhatsApp and all of its data.
            </li>
          </ol>

          <p className="mt-6 text-[16px] leading-7 text-[#3b4a54]">
            <span className="font-bold text-[#111b21]">Note: </span>
            If your Android device does not support the Google Play Store, please check your device&apos;s app store or
            go to{' '}
            <a
              className={linkClass}
              href="https://www.whatsapp.com/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsapp.com/download
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="max-w-3xl">
          <h2 className="text-[20px] font-bold text-[#111b21]">Download WhatsApp</h2>
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Scan the QR code with your phone&apos;s camera and tap the link to be taken to the WhatsApp download page on
            the App Store.
          </p>

          <QrPlaceholder variant="ios" label="App Store" />

          <ol className="ml-1 list-decimal space-y-5 pl-5 text-[16px] leading-7 text-[#3b4a54] marker:font-bold marker:text-[#111b21]">
            <li>
              Find <strong className="text-[#111b21]">WhatsApp Messenger</strong> in the{' '}
              <a
                className={linkClass}
                href="https://apps.apple.com/app/whatsapp-messenger/id310633997"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple App Store
              </a>{' '}
              and tap <strong className="text-[#111b21]">Get</strong>.
            </li>
            <li>
              Open WhatsApp and tap <strong className="text-[#111b21]">Agree and continue</strong>.
            </li>
            <li>
              <p>
                <strong className="text-[#111b21]">Register</strong> and verify your phone number.
              </p>
              <ul className="mt-2 list-disc pl-5 marker:text-[#3b4a54]">
                <li>
                  If a backup of your chat exists, you can restore it. Learn more about restoring your chat history{' '}
                  <Link className={linkClass} href="/help-center">
                    in this article
                  </Link>
                  .
                </li>
              </ul>
            </li>
            <li>Enter your name and an optional profile photo.</li>
          </ol>

          <h2 className="mt-10 text-[20px] font-bold text-[#111b21]">Uninstall WhatsApp</h2>
          <ol className="mt-4 ml-1 list-decimal space-y-4 pl-5 text-[16px] leading-7 text-[#3b4a54] marker:font-bold marker:text-[#111b21]">
            <li>
              We recommend using the{' '}
              <Link className={linkClass} href="/help-center">
                chat backup
              </Link>{' '}
              feature to back up your messages before you delete WhatsApp from your device.
            </li>
            <li>
              On the home screen, tap and hold the <strong className="text-[#111b21]">WhatsApp</strong> icon.
            </li>
            <li>
              Tap <strong className="text-[#111b21]">Remove App</strong>.
            </li>
            <li>
              Tap <strong className="text-[#111b21]">Delete App</strong> to remove WhatsApp and all of its data.
            </li>
          </ol>

          <p className="mt-6 text-[16px] leading-7 text-[#3b4a54]">
            <span className="font-bold text-[#111b21]">Note: </span>
            If you have issues with your Apple ID, the App Store, or downloading from the App Store, contact{' '}
            <a
              className={linkClass}
              href="https://support.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Support
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-10 max-w-3xl">
        <h3 className="text-[17px] font-bold text-[#111b21]">Related resources</h3>
        {tab === 'android' ? (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] font-semibold text-[#008069]">
            <li>
              <Link className={linkClass} href="/help-center/cant-download-update">
                Can&apos;t download or update WhatsApp
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/change-language">
                How to change WhatsApp language
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] font-semibold text-[#008069]">
            <li>
              <Link className={linkClass} href="/help-center/supported-devices?platform=ios">
                About supported iOS devices
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/register-phone-number?platform=ios">
                How to register your phone number
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-download-update">
                Can&apos;t download or update WhatsApp
              </Link>
            </li>
          </ul>
        )}
      </div>
    </article>
  );
}
