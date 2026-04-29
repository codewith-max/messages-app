'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE_PATH = '/help-center/how-to-link-your-meta-quest';

const questSteps = [
  'Press the Meta button on your right controller and select Store.',
  'Select the search bar and search for "WhatsApp."',
  'Select WhatsApp > Download > Start.',
  'Select your language > Agree and continue.',
  'Select your country and phone number linked to your WhatsApp account.',
  'Note the eight-character code and switch to your primary phone.',
];

const phoneSteps = [
  'Open WhatsApp and tap Confirm.',
  'If prompted, unlock your phone.',
  'Enter the eight-character code from your Meta Quest.',
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[200px] border-b border-black/[0.1]" role="tablist" aria-label="Choose your phone platform">
      <Link className={getClass('android')} href={`${BASE_PATH}?platform=android`} role="tab" aria-selected={platform === 'android'}>
        Android
        {isActive('android') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
      <Link className={getClass('ios')} href={`${BASE_PATH}?platform=ios`} role="tab" aria-selected={platform === 'ios'}>
        iOS
        {isActive('ios') ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
      </Link>
    </div>
  );
}

function InfoNotice() {
  return (
    <div className="rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
      <span className="font-semibold text-[#111b21]">Note:</span> WhatsApp isn&apos;t available on Meta Horizon operating
      system (OS) versions older than v67. If your software version is older than v67, please update it.
    </div>
  );
}

export default function HowToLinkYourMetaQuestArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to link your Meta Quest
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <InfoNotice />

        <p className="mt-5">You can use WhatsApp on Meta Quest to send and reply to messages and make calls.</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">How to link your Meta Quest</h2>

          <p className="mt-4 font-semibold text-[#111b21]">On your Meta Quest:</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            {questSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <p className="mt-5 font-semibold text-[#111b21]">On your phone:</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
            {phoneSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <p className="mt-5">
            Or, tap <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Linked devices</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Link a device</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Link with phone number instead</span>. Then enter the
            eight-character code from your Meta Quest.
          </p>

          <p className="mt-4">
            Once WhatsApp on your phone and headset are linked, your account will load on WhatsApp on Meta Quest.
          </p>
          <p className="mt-3">
            WhatsApp for VR is available in light mode or dark mode. WhatsApp defaults to the theme selected on your
            device. To change your theme, select Settings &gt; Chats &gt; Theme and select a theme.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#111b21]">Note:</span> Your calls and messages remain end-to-end
            encrypted while using WhatsApp on Meta Quest. No one outside of the chat, not even WhatsApp or Meta, can
            read, listen to, or share them.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <p className="mt-3">
            About{' '}
            <Link className={linkClass} href="/help-center/about-whatsapp-on-meta-quest">
              WhatsApp on Meta Quest
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
