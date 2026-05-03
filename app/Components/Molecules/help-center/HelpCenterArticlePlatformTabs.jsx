'use client';

import Link from 'next/link';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

export const HELP_CENTER_ARTICLE_PLATFORM_TABS = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows', label: 'Windows' },
  { key: 'mac', label: 'Mac' },
];

/** Five platform tabs (Android / iOS / Web / Windows / Mac) synced with ?platform= */
export default function HelpCenterArticlePlatformTabs({ basePath, platform }) {
  return (
    <div
      className="mb-5 flex w-full max-w-[560px] flex-wrap border-b border-black/[0.1]"
      role="tablist"
      aria-label="Choose platform"
    >
      {HELP_CENTER_ARTICLE_PLATFORM_TABS.map((tab) => {
        const selected = platform === tab.key;
        return (
          <Link
            key={tab.key}
            className={`${tabBaseClass} ${selected ? 'text-[#008069]' : ''}`}
            href={`${basePath}?platform=${tab.key}`}
            role="tab"
            aria-selected={selected}
            scroll={false}
          >
            {tab.label}
            {selected ? (
              <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden />
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}

export function resolveArticlePlatform(searchParamsGetter, fallback = 'android') {
  const raw = searchParamsGetter?.get?.('platform');
  return HELP_CENTER_ARTICLE_PLATFORM_TABS.some((t) => t.key === raw) ? raw : fallback;
}
