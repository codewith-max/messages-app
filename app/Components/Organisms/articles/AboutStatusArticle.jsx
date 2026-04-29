'use client';

import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

export default function AboutStatusArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About status
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp Status allows you to share text, photo, video, and GIF updates that disappear after 24 hours.
        </p>

        <section className="mt-6">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Note:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>The maximum duration for status is 30 seconds.</li>
            <li>WhatsApp supports 3GP and mpeg4 video formats.</li>
            <li>It&apos;s not possible to turn off or disable WhatsApp Status.</li>
            <li>It&apos;s not possible to revert to a previous version of WhatsApp Status.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
