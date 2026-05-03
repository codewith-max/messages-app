'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterArticlePlatformTabs, {
  resolveArticlePlatform,
} from '../../Molecules/help-center/HelpCenterArticlePlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const BASE = '/help-center/how-to-send-voice-messages';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

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
      <p className="absolute bottom-3 left-0 right-0 text-center text-[14px] font-semibold text-[#111b21]">Voice messaging</p>
    </div>
  );
}

function AndroidBody() {
  return (
    <>
      <p>Voice messages let you quickly share audio in any chat or group chat.</p>
      <VideoPlaceholder />
      <div className="mt-6 rounded-xl border border-[#b8eaf2] bg-[#e8f8fb] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span> If the microphone icon color doesn&apos;t update after you send a
        message, try updating WhatsApp or restarting the app.
      </div>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Record and send a voice message</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
          <li>Open an individual or group chat.</li>
          <li>Press and hold the microphone next to the message field.</li>
          <li>Release to send, or slide up to lock recording for hands-free.</li>
          <li>Tap the send icon when you&apos;re done if you locked recording.</li>
        </ol>
        <p className="mt-4">
          To cancel while recording, slide your finger away from the microphone or tap the trash icon before sending.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Record and send a voice status update</h2>
        <p className="mt-3">You can record and share up to 30-second voice updates from the Status tab when available.</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
          <li>Open <span className="font-semibold text-[#111b21]">Status</span>.</li>
          <li>Tap the microphone or voice option, record, then send or post your update.</li>
        </ol>
      </section>
    </>
  );
}

function IOSBody() {
  return (
    <>
      <p>On iPhone, use the microphone next to the composer to record a voice message.</p>
      <VideoPlaceholder />
      <div className="mt-6 rounded-xl border border-[#b8eaf2] bg-[#e8f8fb] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span> Status colors for sent voice messages follow your chat theme and
        WhatsApp version.
      </div>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Record and send a voice message</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
          <li>Open a chat.</li>
          <li>Touch and hold the microphone.</li>
          <li>Release to send, or slide up to lock and keep recording hands-free.</li>
          <li>Tap the arrow to send when recording is locked.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Voice status updates</h2>
        <p className="mt-3">From Status, choose the voice option, record up to 30 seconds, then share.</p>
      </section>
    </>
  );
}

function DesktopBody({ platform }) {
  const name = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'Web';
  return (
    <>
      <p>
        On {name}, open a chat and use the microphone control in the message area to record when your browser or desktop
        app allows it.
      </p>
      <VideoPlaceholder />
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Send a voice message</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
          <li>Open the chat.</li>
          <li>Click the microphone (or hold if your version uses press-and-hold).</li>
          <li>Record, then release or click send to finish.</li>
        </ol>
      </section>
      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span> Allow microphone access in your browser or system settings when
        prompted.
      </div>
    </>
  );
}

function RelatedResources({ platform }) {
  const q = `?platform=${platform}`;
  return (
    <section className="mt-10">
      <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>
          <Link className={linkClass} href={`/help-center/how-to-play-voice-messages${q}`}>
            How to play voice messages
          </Link>
        </li>
        <li>
          <Link className={linkClass} href={`/help-center/how-to-preview-a-voice-message${q}`}>
            How to preview voice messages
          </Link>
        </li>
        <li>
          <Link className={linkClass} href={`/help-center/how-to-send-media-contacts-or-location${q}`}>
            How to send video messages
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default function HowToSendVoiceMessagesArticle() {
  const searchParams = useSearchParams();
  const platform = resolveArticlePlatform(searchParams, 'android');

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to send voice messages
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterArticlePlatformTabs basePath={BASE} platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidBody />
        ) : platform === 'ios' ? (
          <IOSBody />
        ) : (
          <DesktopBody platform={platform} />
        )}
        <RelatedResources platform={platform} />
      </div>
    </article>
  );
}
