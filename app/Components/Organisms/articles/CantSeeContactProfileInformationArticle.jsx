'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/cant-see-a-contacts-profile-information';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {['android', 'ios'].map((key) => (
        <Link key={key} className={getClass(key)} href={`${BASE}?platform=${key}`} role="tab" aria-selected={platform === key}>
          {key === 'android' ? 'Android' : 'iOS'}
          {platform === key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function CantSeeContactProfileInformationArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t see a contact&apos;s profile information
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can hide your last seen and online, profile photo, about information, stories, and read receipts from
          other users.
        </p>
        <p className="mt-3">
          Someone&apos;s last seen and online, profile photo, about information, stories, or read receipts might not be
          visible to you because:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>You or the user changed your privacy settings to hide this information.</li>
          <li>You and the user both need to resync your contacts.</li>
          <li>You&apos;re blocked by the user.</li>
          <li>You need to save them as a contact.</li>
          <li>They haven&apos;t messaged you before or saved you as a contact.</li>
          <li>There&apos;s a temporary network issue.</li>
        </ul>
        <p className="mt-3">
          If your contacts&apos; names appear as numbers, some contacts are missing, or you can&apos;t see a contact&apos;s
          profile picture and information, first check your privacy settings.
        </p>

        {platform === 'ios' ? (
          <div className="mt-4 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
            Certain contact names won&apos;t appear when you try to call, message, or view a status if you haven&apos;t allowed
            full access to the contacts in your phone&apos;s address book. You can grant access by going to your
            phone&apos;s Settings &gt; Apps &gt; WhatsApp &gt; Contacts.
          </div>
        ) : null}

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Profile photo in notifications</h2>
          <p className="mt-3">
            When your contacts receive a message from you and they have notifications enabled, your profile photo is
            displayed in their notification, unless you decide to adjust your privacy settings.
          </p>
          <p className="mt-3">To edit who can see your profile photo:</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              Tap {platform === 'android' ? 'menu (three dots) > Settings > Privacy > Profile photo.' : 'Settings or your profile picture, then tap Privacy > Profile Photo.'}
            </li>
            <li>Choose Everyone, My Contacts, My Contacts except..., or Nobody.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-add-edit-or-delete-a-contact">
                How to add or edit a contact
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-see-contacts">
                Can&apos;t see contacts
              </Link>
            </li>
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
