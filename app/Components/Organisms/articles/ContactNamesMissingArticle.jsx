'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/contact-names-missing';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[250px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function ContactNamesMissingArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Contact names missing
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you see numbers in WhatsApp instead of your contact&apos;s names, or if some or all of your contacts are
          missing, there are a few things you can try:
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Reset your contacts</h2>
          {platform === 'android' ? (
            <>
              <p className="mt-3">
                Users having trouble viewing their contact lists or those encountering issues with their contact list not
                updating can try resetting their contacts.
              </p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Open your phone&apos;s Settings, then tap Password, passkeys &amp; accounts &gt; WhatsApp.</li>
                <li>Tap Remove account &gt; Remove account.</li>
                <li>Open WhatsApp.</li>
                <li>Tap chat icon to start a new chat, then tap menu (three dots) &gt; Refresh.</li>
              </ol>
            </>
          ) : platform === 'ios' ? (
            <>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Go to iPhone Settings &gt; Privacy &amp; Security.</li>
                <li>
                  Tap Contacts &gt; WhatsApp and choose between:
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Limited Access &gt; select contacts &gt; Done.</li>
                    <li>Full Access &gt; Allow Full Access.</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-3">
                If WhatsApp is grayed out, make sure you don&apos;t have restrictions in your phone settings.
              </p>
            </>
          ) : (
            <>
              <p className="mt-3">On linked devices, contact names come from your phone&apos;s synced contact list.</p>
              <p className="mt-2">
                Reset contacts on your phone first, then refresh WhatsApp Web by signing out and signing in again.
              </p>
            </>
          )}
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Search your contacts</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Go to Chats and tap the search bar.</li>
            <li>Type a contact&apos;s name or phone number.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check your phone&apos;s permissions</h2>
          <p className="mt-3">Ensure WhatsApp permissions are turned on in your phone&apos;s settings.</p>
          {platform === 'ios' ? (
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
              <li>Open your device&apos;s Settings &gt; Apps, then tap WhatsApp.</li>
              <li>Tap Contacts and choose Limited Access or Full Access.</li>
            </ol>
          ) : (
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
              <li>Open your phone&apos;s Settings, then tap Apps &gt; WhatsApp &gt; Permissions.</li>
              <li>Tap Contacts &gt; Allow.</li>
            </ol>
          )}
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Missing international or Exchange contacts</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              For international contacts, make sure you&apos;ve added the correct phone number in full international format.
            </li>
            <li>
              If contacts are stored in an Exchange account, your account administrator might not be allowing WhatsApp
              or other apps to access your contacts.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/cant-see-a-contacts-profile-information">
                Can&apos;t see a contact&apos;s profile information
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-recover-lost-contacts">
                How to recover lost contacts
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
