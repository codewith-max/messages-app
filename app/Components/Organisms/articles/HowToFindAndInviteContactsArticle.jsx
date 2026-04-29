'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-find-and-invite-contacts';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToFindAndInviteContactsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to find and invite contacts
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can identify which of your contacts use WhatsApp when you sync them with your phone&apos;s address book. You
          can only find new contacts from your phone&apos;s address book on your primary device.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Find contacts</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Go to the Chats or Calls tab.</li>
            <li>Tap the search bar and enter their name or phone number.</li>
          </ol>
          <p className="mt-3">{isAndroid ? 'You can also go to the Chats tab and tap new chat.' : 'You can also go to the Chats tab and tap add.'}</p>
          <p className="mt-3">
            Note: To avoid duplication, use the search feature in your Contacts app to check if the number is already
            saved before adding it. If you notice duplicate contacts, you can merge or delete them using your phone&apos;s
            contact management options.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Can&apos;t find contacts</h2>
          <p className="mt-3">If you can&apos;t find your contacts, check the following:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Your contacts are using WhatsApp. Contacts that don&apos;t use WhatsApp yet will be listed under Invite to WhatsApp.</li>
            <li>
              You&apos;ve saved your contacts&apos; phone numbers in your phone&apos;s address book. If they&apos;re using an
              international phone number, enter the full international format.
            </li>
            <li>You&apos;ve allowed WhatsApp to access your phone&apos;s contacts in your phone&apos;s Settings.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Invite a phone contact to WhatsApp</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            {isAndroid ? <li>Go to the Chats tab &gt; new chat.</li> : <li>Go to the Chats tab and tap add to start a new chat.</li>}
            <li>Scroll to the Invite to WhatsApp section.</li>
            <li>Tap Invite next to the person you want to invite to WhatsApp.</li>
            <li>{isAndroid ? 'Tap the SMS send icon to send the invite link.' : 'Tap send to send the invite link.'}</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">More ways to invite someone to WhatsApp</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>{isAndroid ? 'Tap menu > Settings > Invite a friend.' : 'Tap WhatsApp Settings or your profile picture, then tap Invite a friend.'}</li>
          </ol>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Tap the person you&apos;d like to send an invite link by SMS. Then tap send to send the invite link.</li>
            <li>Tap Share Invite Link. You can copy and paste the invite link or choose an app to share it.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Chat to someone not saved as a contact</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Go to the Chats or Calls tab.</li>
            <li>{isAndroid ? 'Tap the search bar and enter the name or phone number.' : 'Tap add and enter the name or phone number in the search bar.'}</li>
          </ol>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              If the phone number is already using WhatsApp, tap the name or phone number to open the chat and begin
              chatting. To add this person as a contact, tap the name or phone number.
              {isAndroid ? ' Tap add to contacts > Create New Contact or Add to existing contact > Save.' : ' Tap Create New Contact > Done.'}
            </li>
            <li>If the phone number doesn&apos;t use WhatsApp, you can invite them. Tap Invite next to their name or phone number, then tap send to send the invite link.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Can&apos;t connect with a contact</h2>
          <p className="mt-3">
            If you&apos;ve found or added a contact but can&apos;t connect with them, they might have a connection issue. Ask
            them to connect to a different Wi-Fi or data network. They can also check if their device is updated to the
            latest{' '}
            <Link className={linkClass} href="/help-center/supported-operating-systems?platform=android">
              supported operating system
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-contacts">
                About WhatsApp contacts
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
