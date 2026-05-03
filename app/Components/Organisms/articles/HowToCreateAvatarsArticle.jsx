'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-3 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-create-avatars';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[320px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          className={`relative ${getClass(tab.key)}`}
          href={`${BASE}?platform=${tab.key}`}
          role="tab"
          aria-selected={platform === tab.key}
        >
          {tab.label}
          {platform === tab.key ? (
            <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden />
          ) : null}
        </Link>
      ))}
    </div>
  );
}

function AlertBox({ children }) {
  return (
    <div className="rounded-lg border border-[#b8d9f0] bg-[#eef6fc] px-4 py-3 text-[15px] leading-6 text-[#3b4a54]">{children}</div>
  );
}

export default function HowToCreateAvatarsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to create avatars
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl space-y-10 text-[16px] leading-7 text-[#3b4a54]">
        <AlertBox>
          We&apos;re currently fixing an issue where Avatars might not be deleted properly from your profile. If
          you&apos;re seeing this issue, please make sure you&apos;re using the latest version of WhatsApp.
        </AlertBox>

        <p>You can create an avatar manually or by taking a photo.</p>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create an avatar manually</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            {isAndroid ? (
              <>
                <li>Open WhatsApp and tap More options or Settings, depending on your layout.</li>
                <li>Tap Avatar.</li>
                <li>Tap Create avatar or Edit avatar.</li>
                <li>
                  Choose your skin tone, then customize hairstyle, outfits, facial features, and accessories.
                </li>
                <li>Tap Done or Save when you&apos;re finished.</li>
              </>
            ) : (
              <>
                <li>Open WhatsApp and tap Settings.</li>
                <li>Tap Avatar.</li>
                <li>Tap Create your avatar.</li>
                <li>Use the editors to adjust face, hair, clothing, and more.</li>
                <li>Tap Done to save your avatar.</li>
              </>
            )}
          </ol>
          <p className="mt-4">
            <span className="font-semibold text-[#111b21]">Alternatively</span>, you can create your avatar in a chat by
            tapping the{' '}
            {isAndroid ? (
              <>emoji icon, then the Avatar icon, then follow the prompts to create.</>
            ) : (
              <>sticker icon, then Avatar &gt; Create avatar.</>
            )}
          </p>
        </section>

        <section>
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create an avatar with a photo</h2>
          <p className="mt-3">You can generate a customizable avatar using a photo.</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            {isAndroid ? (
              <>
                <li>Go to Settings &gt; Avatar.</li>
                <li>Tap Create from selfie or the option to use a photo (wording may vary by version).</li>
                <li>Allow camera or gallery access, then take a selfie or pick a clear photo of your face.</li>
                <li>Review the suggested avatar and adjust features before saving.</li>
              </>
            ) : (
              <>
                <li>Go to Settings &gt; Avatar.</li>
                <li>Choose the option to create from a photo or selfie.</li>
                <li>Follow the camera or photo picker prompts.</li>
                <li>Edit the generated avatar and tap Done to save.</li>
              </>
            )}
          </ol>
        </section>

        <div className="rounded-lg border border-[#b8d9f0] bg-[#eef6fc] px-4 py-3 text-[15px] leading-6">
          <p className="font-semibold text-[#111b21]">Note</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21] text-[#3b4a54]">
            <li>Removing an avatar from your profile may be permanent in some cases; use the latest app for fixes.</li>
            <li>Photos you provide may be used only to suggest a look; check on-screen privacy details when offered.</li>
            <li>Available gender and style options can change with app updates.</li>
            <li>Avatar editing is focused on phones; linked devices and web may offer limited or read-only access.</li>
          </ul>
        </div>

        <section className="border-t border-black/[0.08] pt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-avatars?platform=${platform}`}>
                How to use avatars
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
