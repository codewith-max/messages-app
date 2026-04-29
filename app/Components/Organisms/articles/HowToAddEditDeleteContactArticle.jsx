'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-add-edit-or-delete-a-contact';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac-desktop', label: 'Mac' },
  { key: 'windows-desktop', label: 'Windows' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[430px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToAddEditDeleteContactArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';
  const isAndroid = platform === 'android';
  const isIos = platform === 'ios';
  const isMac = platform === 'mac-desktop';
  const isWebOrWindows = platform === 'web' || platform === 'windows-desktop';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to add, edit, or delete a contact
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          You can add new contacts and share, edit, or delete your existing contacts on your mobile devices and in the
          web and Windows desktop versions of WhatsApp.
        </p>

        {isAndroid || isIos ? (
          <>
            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add a contact</h2>
              <p className="mt-3">
                You can add a contact with a new chat, save someone&apos;s number from a chat, or add contacts from a group.
              </p>
              <p className="mt-3">
                If you have contact permissions and{' '}
                <Link className={linkClass} href="/help-center/contact-names-missing?platform=android">
                  WhatsApp contacts
                </Link>{' '}
                turned on, you can choose which contacts on WhatsApp sync to your phone.
              </p>

              <h3 className="mt-5 font-semibold text-[#111b21]">Add a contact with a new chat</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                {isAndroid ? (
                  <>
                    <li>Tap Chats &gt; New contact.</li>
                    <li>Enter contact details and tap Save.</li>
                  </>
                ) : (
                  <>
                    <li>Tap Chats &gt; New contact and enter contact details.</li>
                    <li>Tap Done.</li>
                  </>
                )}
              </ol>

              <h3 className="mt-5 font-semibold text-[#111b21]">Add a contact from an existing chat</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Tap Chats.</li>
                <li>Tap the chat with your contact.</li>
                <li>Tap their phone number.</li>
                {isAndroid ? (
                  <>
                    <li>Tap Edit.</li>
                    <li>Enter details and tap Save.</li>
                  </>
                ) : (
                  <>
                    <li>Tap Create new contact.</li>
                    <li>Tap Done.</li>
                  </>
                )}
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add a contact from groups</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Open the group.</li>
                <li>Next to one of their messages, tap their profile photo.</li>
                <li>{isAndroid ? 'Tap info > Edit.' : 'Tap Create new contact and enter contact details.'}</li>
                <li>{isAndroid ? 'Enter their details and tap Save.' : 'Tap Done.'}</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Edit a contact</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Tap the search bar and enter their name.</li>
                <li>Tap the contact, then tap their name.</li>
                <li>{isAndroid ? 'Tap View contact > Edit and add details.' : 'Tap Edit.'}</li>
                <li>{isAndroid ? 'Tap Save.' : 'Tap Done.'}</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a contact in chats</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Open the individual or group chat.</li>
                <li>{isAndroid ? 'Tap attachment > Contact.' : 'Tap plus > Contact.'}</li>
                <li>Select the contact.</li>
                <li>{isAndroid ? 'Tap send.' : 'Tap Next > Send.'}</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete a contact</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                {!isAndroid ? <li>Tap the search bar and enter their name.</li> : null}
                <li>Tap the contact, then tap their name.</li>
                <li>{isAndroid ? 'Tap View in address book > Delete > Delete.' : 'Tap Edit > Delete Contact > Delete.'}</li>
              </ol>
            </section>
          </>
        ) : isWebOrWindows ? (
          <>
            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add a contact</h2>
              <p className="mt-3">
                You can add a contact with a new chat, save someone&apos;s number from a chat, or add contacts from a group.
              </p>

              <h3 className="mt-5 font-semibold text-[#111b21]">Add a contact with a new chat</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Click Chats &gt; New contact.</li>
                <li>Enter contact details and click save.</li>
                <li>Click Sync contacts to phone to toggle on or off.</li>
              </ul>

              <h3 className="mt-5 font-semibold text-[#111b21]">Add a contact from an existing chat</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Click Chats.</li>
                <li>Click the chat with your contact.</li>
                <li>You will see their phone number instead of their name.</li>
                <li>Click the phone number, or click &gt; Contact info.</li>
                <li>Click Add, enter their details, and click save.</li>
                <li>Click Sync contacts to phone to toggle on or off.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add a contact from groups</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Open the group.</li>
                <li>Next to one of their messages, click their profile photo.</li>
                <li>Click Add, enter their details, and click save.</li>
                <li>Click Sync contacts to phone to toggle on or off.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Edit a contact</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Click the search bar and enter their name.</li>
                <li>Click the contact.</li>
                <li>Click &gt; Contact info &gt; edit and update their details.</li>
                <li>Click save.</li>
                <li>Click Sync contacts to phone to toggle on or off.</li>
              </ul>
              <p className="mt-3">
                Note: WhatsApp users choose their own profile photo. If a contact didn&apos;t set a profile photo, you can&apos;t
                add one for that contact.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Share a contact in chats</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Open the individual or group chat.</li>
                <li>Click plus &gt; Contact.</li>
                <li>Select the contact.</li>
                <li>Click Next &gt; Send.</li>
              </ul>
              <p className="mt-3">
                The recipient can add the contact to their address book or message them directly from the message.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete a chat</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Go to the Chats tab.</li>
                <li>Click the search bar and enter their name &gt; click the contact&apos;s name.</li>
                <li>Click the contact&apos;s name at the top.</li>
                <li>Click edit &gt; Delete.</li>
              </ul>
              <p className="mt-3">
                Deleting a contact won&apos;t delete the chat history you have with them. You can learn how to delete a chat in{' '}
                <Link className={linkClass} href="/help-center/delete-chat">
                  this article
                </Link>
                .
              </p>
            </section>
          </>
        ) : isMac ? (
          <section className="mt-8">
            <p>You can&apos;t edit, add, or delete contacts on the Mac desktop version of WhatsApp yet.</p>
          </section>
        ) : (
          <section className="mt-8">
            <p>
              On Web, Mac and Windows desktop, you can search chats and start messages with contacts synced from your
              phone. To add, edit, or delete contacts, manage them on your phone first and allow contact sync.
            </p>
          </section>
        )}

        {!isMac ? (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
              <li>
                <Link className={linkClass} href="/help-center/about-contact-upload">
                  About contact upload
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/help-center/how-to-find-and-invite-contacts">
                  How to find and invite contacts
                </Link>
              </li>
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}
