'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterArticlePlatformTabs, {
  resolveArticlePlatform,
} from '../../Molecules/help-center/HelpCenterArticlePlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const BASE = '/help-center/how-to-delete-voice-messages';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToDeleteVoiceMessagesArticle() {
  const searchParams = useSearchParams();
  const platform = resolveArticlePlatform(searchParams, 'android');
  const q = `?platform=${platform}`;

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to delete voice messages
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterArticlePlatformTabs basePath={BASE} platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>Deleting a voice message works like deleting any other message in the chat.</p>

        {platform === 'android' || platform === 'ios' ? (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete for you or everyone</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
              <li>Open the chat and find the voice message.</li>
              <li>Tap and hold the message.</li>
              <li>Tap <span className="font-semibold text-[#111b21]">Delete</span> and choose delete for you or delete for everyone when available.</li>
            </ol>
          </section>
        ) : (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Web and desktop</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
              <li>Open the chat.</li>
              <li>Hover the message, open the menu, and choose Delete.</li>
              <li>Confirm whether to remove it for you or for everyone if the option appears.</li>
            </ol>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-delete-messages`}>
                How to delete messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-voice-messages${q}`}>
                How to send voice messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-play-voice-messages${q}`}>
                How to play voice messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
