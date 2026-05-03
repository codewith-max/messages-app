'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterArticlePlatformTabs, {
  resolveArticlePlatform,
} from '../../Molecules/help-center/HelpCenterArticlePlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const BASE = '/help-center/how-to-use-voice-chat-in-a-group';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToUseVoiceChatInAGroupArticle() {
  const searchParams = useSearchParams();
  const platform = resolveArticlePlatform(searchParams, 'android');
  const q = `?platform=${platform}`;

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use voice chat in a group
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterArticlePlatformTabs basePath={BASE} platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' || platform === 'ios' ? (
          <section className="mt-2">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Start or join voice chat</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
              <li>Open the group chat.</li>
              <li>Tap the waveform or voice chat entry point in the header or attach menu when shown.</li>
              <li>Join the session; use mute and leave controls during the chat.</li>
            </ol>
          </section>
        ) : (
          <section className="mt-2">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Web and desktop</h2>
            <p className="mt-3">
              Voice chat primarily works on phones. On linked devices, open the group on your primary phone to start or
              join when the feature is available.
            </p>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/about-voice-chat-in-a-group${q}`}>
                About voice chat in a group
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-make-a-voice-call?platform=${platform}`}>
                How to make a voice call
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-voice-messages${q}`}>
                How to send voice messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
