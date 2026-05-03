'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterArticlePlatformTabs, {
  resolveArticlePlatform,
} from '../../Molecules/help-center/HelpCenterArticlePlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const BASE = '/help-center/how-to-preview-a-voice-message';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToPreviewAVoiceMessageArticle() {
  const searchParams = useSearchParams();
  const platform = resolveArticlePlatform(searchParams, 'android');
  const q = `?platform=${platform}`;

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to preview a voice message
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterArticlePlatformTabs basePath={BASE} platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>Before sending, you can listen to your recording on supported versions.</p>

        {platform === 'android' || platform === 'ios' ? (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Preview before sending</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 marker:text-[#111b21]">
              <li>Record your voice message using press-and-hold or locked recording.</li>
              <li>Before sending, tap pause or the preview control if shown.</li>
              <li>Tap play to hear the clip, then send or delete and re-record.</li>
            </ol>
          </section>
        ) : (
          <section className="mt-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Web and desktop</h2>
            <p className="mt-3">
              If your client shows a review step, play the clip from the composer before you confirm send. Otherwise
              cancel and record again.
            </p>
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
              <Link className={linkClass} href={`/help-center/how-to-play-voice-messages${q}`}>
                How to play voice messages
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/how-to-delete-voice-messages${q}`}>
                How to delete voice messages
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
