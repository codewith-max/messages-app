'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterArticlePlatformTabs, {
  resolveArticlePlatform,
} from '../../Molecules/help-center/HelpCenterArticlePlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const BASE = '/help-center/about-voice-chat-in-a-group';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutVoiceChatInAGroupArticle() {
  const searchParams = useSearchParams();
  const platform = resolveArticlePlatform(searchParams, 'android');
  const q = `?platform=${platform}`;

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About voice chat in a group
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <HelpCenterArticlePlatformTabs basePath={BASE} platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Voice chat lets people in a group join an open audio session without ringing everyone like a group call.
          Availability and limits can vary by region and app version.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#111b21]">
          <li>Members can join or leave the voice chat while it stays active.</li>
          <li>Regular group voice calls may still be started from the call buttons when you need a traditional call.</li>
          <li>Admins may have extra controls depending on group settings.</li>
        </ul>

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-use-voice-chat-in-a-group${q}`}>
                How to use voice chat in a group
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
