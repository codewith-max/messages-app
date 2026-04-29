'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabClass =
  'inline-flex min-h-[46px] items-center border-b-2 border-transparent px-3 text-[15px] font-semibold text-[#667781]';

const activeTabClass = 'inline-flex min-h-[46px] items-center border-b-2 border-[#008069] px-3 text-[15px] font-semibold text-[#008069]';

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

function PlatformTabs({ platform }) {
  const getClass = (key) => (platform === key ? activeTabClass : tabClass);

  return (
    <div className="mb-8 flex w-full max-w-[620px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose your device">
      <Link className={getClass('android')} href="/help-center/get-started-web?platform=android">
        Android
      </Link>
      <Link className={getClass('ios')} href="/help-center/get-started-web?platform=ios">
        iOS
      </Link>
      <Link className={getClass('web')} href="/help-center/get-started-web?platform=web">
        Web
      </Link>
      <Link className={getClass('windows')} href="/help-center/get-started-web?platform=windows">
        Windows
      </Link>
      <Link className={getClass('mac')} href="/help-center/get-started-web?platform=mac">
        Mac
      </Link>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="relative mt-4 overflow-hidden rounded-none bg-[#25d366]">
      <div className="aspect-[16/9] w-full" />
      <button
        type="button"
        aria-label="Play video"
        className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/85 text-white"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M8 6v12l10-6z" />
        </svg>
      </button>
    </div>
  );
}

function IOSContent() {
  return (
    <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
      <p>
        With WhatsApp, you can send messages and make calls securely on phones all over the world. Follow this
        step-by-step guide to set up WhatsApp on your iPhone.
      </p>
      <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>
          You must install WhatsApp on a device with a supported operating system. To stay current with the latest
          technology, we regularly stop supporting older systems. Check if your{' '}
          <Link className={linkClass} href="/help-center/supported-operating-systems">
            operating system is supported
          </Link>
          .
        </li>
        <li>
          To use WhatsApp Desktop and Web, you must install WhatsApp on a phone with an active phone number and then
          link your devices. Learn how to{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            link a device
          </Link>
          .
        </li>
      </ul>

      <VideoPlaceholder />

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Download WhatsApp</h2>
        <p className="mt-3">
          Download WhatsApp on your iPhone for free from the{' '}
          <Link className={linkClass} href="https://apps.apple.com/">
            Apple App Store
          </Link>
          .
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5">
          <li>
            Open the{' '}
            <Link className={linkClass} href="https://apps.apple.com/">
              App Store
            </Link>
            .
          </li>
          <li>Tap Get.</li>
        </ol>
        <p className="mt-4">To open WhatsApp:</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Go to your phone&apos;s home screen.</li>
          <li>Swipe left until you see your App Library.</li>
          <li>Swipe down and tap WhatsApp.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Register your phone number</h2>
        <p className="mt-3">To activate your account, you must register an active phone number for verification.</p>
        <p className="mt-3">
          Learn how to{' '}
          <Link className={linkClass} href="/help-center/register-phone-number">
            register your phone number
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Add contacts</h2>
        <p className="mt-3">
          You can sync your iPhone contacts with WhatsApp or add contacts directly to WhatsApp.
        </p>
        <p className="mt-3">
          Learn how to{' '}
          <Link className={linkClass} href="/help-center">
            add, edit, or delete a contact
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Linked devices</h2>
        <p className="mt-3">
          Once you set up WhatsApp on your phone, you can access your account on multiple devices by linking them to
          your phone. Learn how to{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            link a device
          </Link>
          .
        </p>
        <VideoPlaceholder />
        <p className="mt-4">
          Linked devices provide a reliable, secure way to access WhatsApp from other devices, including your desktop,
          browser, tablet, and wearables. You can link up to four devices at a time to your primary phone.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> You must have an active WhatsApp account on your
          primary phone to continue using WhatsApp on your linked devices.
        </p>
        <p className="mt-3">Supported linked devices include:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Windows</li>
          <li>Mac</li>
          <li>Web</li>
          <li>Android tablet</li>
          <li>WearOS</li>
          <li>Companion phones</li>
          <li>Ray-Ban Stories and Ray-Ban Meta</li>
          <li>VR</li>
        </ul>
        <p className="mt-3">
          Learn how to link a device{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            here
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Related resources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <Link className={linkClass} href="/help-center/about-linked-devices">
              About linked devices
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center">
              About disappearing messages
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center">
              How to create and invite into a group
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center/how-to-make-a-voice-call?platform=web">
              How to make a voice call
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center">
              How to make a video call
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

function AndroidContent() {
  return (
    <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
      <p>
        With WhatsApp, you can send messages and make calls securely on phones all over the world. Follow this
        step-by-step guide to set up WhatsApp on your Android phone.
      </p>
      <p className="mt-3 font-semibold text-[#111b21]">Note:</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>
          You must install WhatsApp on a device with a supported operating system. To stay current with the latest
          technology, we regularly stop supporting older systems. Check if your{' '}
          <Link className={linkClass} href="/help-center/supported-operating-systems">
            operating system is supported
          </Link>
          .
        </li>
        <li>
          To use WhatsApp Desktop and Web, you must install WhatsApp on a phone with an active phone number and then
          link your devices. Learn how to{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            link a device
          </Link>
          .
        </li>
      </ul>

      <VideoPlaceholder />

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Download WhatsApp</h2>
        <p className="mt-3">
          Download WhatsApp on your Android device for free from the{' '}
          <Link className={linkClass} href="https://play.google.com/store">
            Google Play Store
          </Link>
          .
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5">
          <li>
            Open the{' '}
            <Link className={linkClass} href="https://play.google.com/store">
              Google Play Store
            </Link>
            .
          </li>
          <li>Tap Install.</li>
        </ol>
        <p className="mt-4">To open WhatsApp:</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Go to your phone&apos;s home screen.</li>
          <li>Swipe up and tap WhatsApp.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Register your phone number</h2>
        <p className="mt-3">To activate your account, you must register an active phone number for verification.</p>
        <p className="mt-3">
          Learn how to{' '}
          <Link className={linkClass} href="/help-center/register-phone-number">
            register your phone number
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Add contacts</h2>
        <p className="mt-3">
          You can sync your phone contacts with WhatsApp or add contacts directly to WhatsApp.
        </p>
        <p className="mt-3">
          Learn how to{' '}
          <Link className={linkClass} href="/help-center">
            add, edit, or delete a contact
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Linked devices</h2>
        <p className="mt-3">
          Once you set up WhatsApp on your phone, you can access your account on multiple devices by linking them to
          your phone. Learn how to{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            link a device
          </Link>
          .
        </p>
        <VideoPlaceholder />
        <p className="mt-4">
          Linked devices provide a reliable, secure way to access WhatsApp from other devices, including your desktop,
          browser, tablet, and wearables. You can link up to four devices at a time to your primary phone.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#111b21]">Note:</span> You must have an active WhatsApp account on your
          primary phone to continue using WhatsApp on your linked devices.
        </p>
        <p className="mt-3">Supported linked devices include:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Windows</li>
          <li>Mac</li>
          <li>Web</li>
          <li>Android tablet</li>
          <li>WearOS</li>
          <li>Companion phones</li>
          <li>Ray-Ban Stories and Ray-Ban Meta</li>
          <li>VR</li>
        </ul>
        <p className="mt-3">
          Learn how to link a device{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=web">
            here
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[30px] font-bold leading-tight text-[#111b21]">Related resources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <Link className={linkClass} href="/help-center/get-started-web?platform=web">
              About linked devices
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center">
              About disappearing messages
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center">
              How to create and invite into a group
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center/how-to-make-a-voice-call?platform=android">
              How to make a voice call
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/help-center">
              How to make a video call
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

function WebContent() {
  return (
    <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
      <p>
        To use WhatsApp Web, you must install WhatsApp on a phone with an active phone number and then link your
        device.
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5">
        <li>
          Get started on{' '}
          <Link className={linkClass} href="/help-center/download-uninstall?platform=android">
            android
          </Link>
        </li>
        <li>
          Get started on{' '}
          <Link className={linkClass} href="/help-center/get-started-web?platform=ios">
            iPhone
          </Link>
        </li>
        <li>
          <Link className={linkClass} href="/help-center/about-whatsapp-web">
            About WhatsApp Web
          </Link>
        </li>
        <li>
          <Link className={linkClass} href="/help-center">
            How to link a device
          </Link>
        </li>
      </ul>

      <section className="mt-8">
        <h2 className="text-[20px] font-bold text-[#111b21]">WhatsApp Web requirements</h2>
        <p className="mt-3">
          You must have an active WhatsApp account on your primary phone to continue using WhatsApp on your linked
          devices.
        </p>
        <p className="mt-3">
          To stay current with the latest phone technology, we regularly stop supporting older operating systems. Check
          if your{' '}
          <Link className={linkClass} href="/help-center/supported-operating-systems">
            operating system is supported
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

export default function GetStartedWebArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = rawPlatform === 'ios' ? 'ios' : rawPlatform === 'android' ? 'android' : rawPlatform === 'windows' ? 'windows' : rawPlatform === 'mac' ? 'mac' : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Get Started
        </h1>
        <CopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />
      {platform === 'ios' ? <IOSContent /> : platform === 'android' ? <AndroidContent /> : <WebContent />}
    </article>
  );
}
