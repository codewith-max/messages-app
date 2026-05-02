'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-send-media-contacts-or-location';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows', label: 'Windows' },
  { key: 'mac', label: 'Mac' },
];

function VideoPlaceholder() {
  return (
    <div className="relative mt-4 overflow-hidden rounded-lg bg-[#cce9dd]">
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

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[560px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function AndroidContent() {
  return (
    <>
      <p>
        Send photos, videos, documents, your location, or a contact from the attachment menu in any chat or group chat.
      </p>
      <VideoPlaceholder />
      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[#111b21]">
          <li>Media may be compressed for faster sending; quality options depend on your settings.</li>
          <li>You can send documents up to 2 GB.</li>
          <li>Very long videos may be trimmed or need to be sent as a document depending on format and size.</li>
        </ul>
      </div>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send media, a document, location, or contact</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Tap the paperclip or <span className="font-semibold text-[#111b21]">+</span> next to the message field.</li>
          <li>
            Choose <span className="font-semibold text-[#111b21]">Camera</span>,{' '}
            <span className="font-semibold text-[#111b21]">Gallery</span>,{' '}
            <span className="font-semibold text-[#111b21]">Document</span>,{' '}
            <span className="font-semibold text-[#111b21]">Location</span>, or{' '}
            <span className="font-semibold text-[#111b21]">Contact</span>, then follow the prompts.
          </li>
          <li>Add a caption if you like, then tap Send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send a link</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Copy the link from your browser or another app.</li>
          <li>Open the WhatsApp chat where you want to share it.</li>
          <li>Long-press the message field and tap <span className="font-semibold text-[#111b21]">Paste</span>, or type the link, then send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Forward media, documents, locations, contacts, or links</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat that contains the item.</li>
          <li>
            Tap and hold the message, then tap <span className="font-semibold text-[#111b21]">Forward</span> and choose chats.
          </li>
          <li>Tap the send arrow to confirm.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Save media</h2>
        <p className="mt-3">Control whether photos and videos you receive are saved to your phone gallery from chat privacy or media visibility settings.</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            <span className="font-semibold text-[#111b21]">Default:</span> follow your chat-level or global preference for saving to gallery.
          </li>
          <li>
            <span className="font-semibold text-[#111b21]">Always / Yes:</span> incoming media can be saved automatically when allowed by storage permissions.
          </li>
          <li>
            <span className="font-semibold text-[#111b21]">Never / No:</span> keep media inside WhatsApp only until you explicitly save or export it.
          </li>
        </ul>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        On iPhone, use the <span className="font-semibold text-[#111b21]">+</span> beside the composer to attach camera
        rolls, documents, locations, or contacts.
      </p>
      <VideoPlaceholder />
      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[#111b21]">
          <li>Large files can take longer to upload; stay on Wi-Fi when possible.</li>
          <li>Documents can be up to 2 GB.</li>
          <li>Grant Photos, Camera, and Files access when prompted so attachments work reliably.</li>
        </ul>
      </div>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send media, a document, location, or contact</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open a chat.</li>
          <li>Tap <span className="font-semibold text-[#111b21]">+</span> to the left of the text field.</li>
          <li>
            Choose <span className="font-semibold text-[#111b21]">Document</span>,{' '}
            <span className="font-semibold text-[#111b21]">Camera</span>,{' '}
            <span className="font-semibold text-[#111b21]">Photo &amp; Video Library</span>,{' '}
            <span className="font-semibold text-[#111b21]">Location</span>, or{' '}
            <span className="font-semibold text-[#111b21]">Contact</span>.
          </li>
          <li>Select what to send, add a caption if needed, then tap the send button.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send a link</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Copy the URL you want to share.</li>
          <li>Open WhatsApp and the target chat.</li>
          <li>Paste into the message field and send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Forward items</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Press and hold the message with the media, document, location, contact, or link.</li>
          <li>Tap <span className="font-semibold text-[#111b21]">Forward</span>, pick chats, then send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Save media</h2>
        <p>
          Open a photo or video, then use the share or save options. You can also adjust auto-save behavior in{' '}
          <span className="font-semibold text-[#111b21]">Settings &gt; Chats</span> for photos and videos from chats.
        </p>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const name = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'Web';
  return (
    <>
      <p>
        On {name}, open a chat and use the attachment button or drag files into the chat window to send media and
        documents.
      </p>
      <VideoPlaceholder />
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send files and media</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Click the paperclip (or plus) next to the message box.</li>
          <li>Choose photos, videos, or documents from the picker—or drag files from your desktop into the chat.</li>
          <li>Add a caption if you want, then press Enter or click Send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send a link</h2>
        <p>Paste any URL into the message field and send. Link previews appear when supported.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Location and contacts</h2>
        <p>
          {platform === 'web'
            ? 'Some location and native contact-sharing options work from the phone app first; link your device for full features where available.'
            : 'Use the attachment menu where location or contact sharing is listed for your WhatsApp desktop build.'}
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Forward</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Hover over a message and open the menu, or select the message.</li>
          <li>Choose Forward, pick chats, confirm.</li>
        </ol>
      </section>
      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span> Downloads and uploads follow your browser or desktop app folder
        preferences; very large attachments may take longer on slow networks.
      </div>
    </>
  );
}

export default function HowToSendMediaContactsOrLocationArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to send media, contacts, or location
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidContent />
        ) : platform === 'ios' ? (
          <IOSContent />
        ) : (
          <DesktopContent platform={platform} />
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/finding-media-files?platform=${platform}`}>
                Finding media files
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-edit-photos-and-videos?platform=${platform}`}>
                How to edit photos and videos
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/about-hd-photos-and-videos?platform=${platform}`}>
                About HD photos and videos
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-configure-auto-download?platform=${platform}`}>
                How to configure auto-download
              </Link>
            </li>
            <li>
              <Link
                className={linkClass}
                href={`/help-center/how-to-stop-whatsapp-from-saving-media-to-your-phone?platform=${platform}`}
              >
                How to stop WhatsApp from saving media to your phone
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-forward-messages">
                How to forward messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/about-forwarding-limits`}>
                About forwarding limits
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
