'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-change-your-app-or-chat-theme';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[320px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function AndroidIOSContent() {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Customize your wallpaper and chat color for all chats</h2>
        <p className="mt-3">Use a theme for all chats:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Go to Settings &gt; Chats.</li>
          <li>Tap Default chat theme.</li>
          <li>Select the theme you want to use.</li>
          <li>Tap Set theme.</li>
        </ol>
        <p className="mt-4">Change wallpaper for all chats:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Go to Settings &gt; Chats.</li>
          <li>Tap Default chat theme.</li>
          <li>Tap Wallpaper.</li>
          <li>Select a wallpaper.</li>
          <li>Tap Set wallpaper.</li>
        </ol>
        <p className="mt-4">Change chat color for all chats:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Go to Settings &gt; Chats.</li>
          <li>Tap Default chat theme.</li>
          <li>Tap Chat color.</li>
          <li>Select a color.</li>
          <li>Tap Set chat color.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Customize your wallpaper and chat color for a specific chat</h2>
        <p className="mt-3">Use a theme for a specific chat:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat you want to customize.</li>
          <li>Tap chat theme.</li>
          <li>Select a theme.</li>
          <li>Tap Set theme.</li>
        </ol>
        <p className="mt-4">Change wallpaper for a specific chat:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat you want to customize.</li>
          <li>Tap chat theme.</li>
          <li>Tap Wallpaper.</li>
          <li>Select a wallpaper.</li>
          <li>Tap Set wallpaper.</li>
        </ol>
        <p className="mt-4">Change chat color for a specific chat:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat you want to customize.</li>
          <li>Tap chat theme.</li>
          <li>Tap Chat color.</li>
          <li>Select a color.</li>
          <li>Tap Set chat color.</li>
        </ol>
      </section>
    </>
  );
}

function WebContent() {
  return (
    <section className="mt-8">
      <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Change your chat theme on Web</h2>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>Open WhatsApp Web.</li>
        <li>Click Settings.</li>
        <li>Click Personalization.</li>
        <li>Choose Theme, Chat color, and Wallpaper options.</li>
        <li>Changes are applied instantly.</li>
      </ol>
    </section>
  );
}

export default function HowToChangeYourAppOrChatThemeArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to change your app or chat theme
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Change your app and chat theme to make WhatsApp feel more personal. You can set one theme for all chats, or
          choose different themes for specific chats.
        </p>
        <p className="mt-3">
          Customize colors to match your style. Dark and light modes are available across supported devices.
        </p>

        {platform === 'web' ? <WebContent /> : <AndroidIOSContent />}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create and use AI-generated chat themes and wallpapers</h2>
          <p className="mt-3">
            In supported regions, you can generate unique chat themes and wallpapers using AI prompts.
          </p>
          <div className="mt-3 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
            <p className="font-semibold">Notes</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Availability varies by country, app version, and device.</li>
              <li>Some themes may not be available for all chats.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-change-your-privacy-settings">
                How to change your privacy settings
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
