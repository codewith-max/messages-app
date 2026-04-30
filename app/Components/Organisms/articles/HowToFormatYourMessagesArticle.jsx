'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-format-your-messages';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac', label: 'Mac' },
  { key: 'windows', label: 'Windows' },
];

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

function Rule({ title, description, example }) {
  return (
    <section className="mt-8">
      <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">{title}</h2>
      <p className="mt-3 text-[#3b4a54]">{description}</p>
      <p className="mt-2 rounded-md bg-[#f5f6f6] px-3 py-2 font-mono text-[14px] text-[#111b21]">{example}</p>
    </section>
  );
}

export default function HowToFormatYourMessagesArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'web';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to format your messages
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp lets you format text to emphasize important points. You can use bold, italic, strikethrough,
          monospace, lists, quote, and inline code.
        </p>

        <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <span className="font-semibold">Note:</span> Text formatting works on Android, iOS, Web, Mac, and Windows.
        </div>

        <Rule title="Italic" description="To italicize text, place underscores on both sides." example="_text_" />
        <Rule title="Bold" description="To bold text, place asterisks on both sides." example="*text*" />
        <Rule title="Strikethrough" description="To strikethrough text, place tildes on both sides." example="~text~" />
        <Rule title="Monospace" description="To monospace text, place three backticks on both sides." example="```text```" />

        <Rule
          title="Bulleted list"
          description="To create a bulleted list, place a hyphen and a space before each line."
          example="- item 1"
        />
        <Rule
          title="Numbered list"
          description="To create a numbered list, place a number, period, and space before each line."
          example="1. item 1"
        />
        <Rule
          title="Quote"
          description="To quote text, place a greater-than sign and a space before the line."
          example="> quoted text"
        />
        <Rule
          title="Inline code"
          description="To use inline code, place a backtick on both sides of the text."
          example="`code`"
        />
      </div>
    </article>
  );
}
