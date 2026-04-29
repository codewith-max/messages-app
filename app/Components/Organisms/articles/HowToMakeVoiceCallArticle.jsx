'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-make-a-voice-call';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows', label: 'Windows' },
  { key: 'mac', label: 'Mac' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;

  return (
    <div className="mb-5 flex w-full max-w-[440px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToMakeVoiceCallArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((tab) => tab.key === rawPlatform) ? rawPlatform : 'web';
  const desktopLabel = platform === 'windows' ? 'Windows' : platform === 'mac' ? 'Mac' : 'Web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">How to make a voice call</h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Voice calling lets you call your contacts using WhatsApp for free, even if they&apos;re in another country.
          Voice calling uses your internet connection.
        </p>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Use desktop calling</h2>
          <p className="mt-3">To make or receive voice calls on WhatsApp for {desktopLabel}, you&apos;ll need:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>You&apos;ll need an active internet connection on your computer and phone.</li>
            <li>WhatsApp needs access to your computer&apos;s microphone.</li>
            <li>You&apos;ll need to have an audio output device and microphone connected to your computer for calls.</li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> Use a headset for the best audio. Using a
            separate external microphone and speaker devices might cause echo.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Make a voice call</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Open the individual chat with the contact you&apos;d like to call.</li>
            <li>Click the Voice call icon.</li>
          </ol>
          <p className="mt-3">During the call, you can mute or unmute your microphone. To end a call, click End call.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Answer a voice call</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Accept to answer the call.</li>
            <li>Decline to decline the call.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Switch between voice and video calls</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            <li>Click the Camera icon.</li>
            <li>The voice call will switch to a video call if your contact accepts the switch.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[31px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/get-started-web?platform=web">
                About WhatsApp Web calling
              </Link>
            </li>
            <li>How to make a video call</li>
            <li>Can&apos;t make or receive voice call</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
