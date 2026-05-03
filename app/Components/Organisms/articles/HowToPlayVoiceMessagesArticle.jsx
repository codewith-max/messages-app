'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterArticlePlatformTabs, {
  resolveArticlePlatform,
} from '../../Molecules/help-center/HelpCenterArticlePlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const BASE = '/help-center/how-to-play-voice-messages';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function MobilePlaySteps() {
  return (
    <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
      <li>Open the chat with the voice message.</li>
      <li>Tap the play button on the message bubble.</li>
      <li>Hold the phone to your ear to switch to earpiece playback when supported.</li>
    </ol>
  );
}

export default function HowToPlayVoiceMessagesArticle() {
  const searchParams = useSearchParams();
  const platform = resolveArticlePlatform(searchParams, 'android');
  const q = `?platform=${platform}`;

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to play voice messages
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterArticlePlatformTabs basePath={BASE} platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>Voice messages play inside the chat. Unread messages show a distinct microphone state until you listen.</p>

        {platform === 'android' || platform === 'ios' ? (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Play a voice message</h2>
            <MobilePlaySteps />
            <p className="mt-4">
              You can change playback speed on some versions by tapping the <span className="font-semibold text-[#111b21]">1x</span>{' '}
              label when it appears.
            </p>
          </section>
        ) : (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Play a voice message</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
              <li>Open the chat on WhatsApp Web or Desktop.</li>
              <li>Click the play control on the voice message.</li>
              <li>Use your computer speakers or headset volume as needed.</li>
            </ol>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-voice-messages${q}`}>
                How to send voice messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-preview-a-voice-message${q}`}>
                How to preview a voice message
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-turn-voice-message-transcripts-on-or-off${q}`}>
                How to turn voice message transcripts on or off
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
