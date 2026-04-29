'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/** Stylized handset (narrow frame) — reads clearly at tab size */
function AndroidTabIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="6.5" y="3" width="11" height="18" rx="2" />
      <path d="M11 18.5h2" />
    </svg>
  );
}

function AppleTabIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 13.473c-.03-4.086 3.367-6.068 3.519-6.157-1.923-2.867-4.917-3.263-5.974-3.317-2.553-.267-5.003 1.547-6.297 1.547-1.313 0-3.31-1.503-5.453-1.467-2.803.036-5.394 1.693-6.834 4.297-2.91 5.087-.742 12.596 2.086 16.734 1.39 2.067 3.063 4.394 5.267 4.336 2.107-.058 2.903-1.373 5.446-1.373 2.553 0 3.297 1.373 5.547 1.343 2.293-.036 3.747-2.086 5.097-4.173 1.603-2.397 2.267-4.743 2.297-4.836-.053-.036-4.394-1.696-4.446-7.743zM14.058 6.983c1.173-1.467 1.957-3.493 1.743-5.547-1.683.069-3.743 1.137-4.957 2.603-1.083 1.283-2.033 3.413-1.783 5.447 1.883.173 3.837-1.043 5.997-2.503z" />
    </svg>
  );
}

/** WhatsApp Help Center–style Android / iOS tabs; syncs URL with ?platform=android|ios */
export default function HelpCenterPlatformTabs({ androidLabel = 'Android', iosLabel = 'iOS', androidContent, iosContent }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const param = searchParams.get('platform');
  const initial = param === 'ios' ? 'ios' : 'android';

  const [tab, setTab] = useState(initial);

  useEffect(() => {
    if (param === 'ios' || param === 'android') setTab(param);
    else setTab('android');
  }, [param]);

  const applyTab = useCallback(
    (next) => {
      setTab(next);
      const qs = next === 'ios' ? '?platform=ios' : '';
      router.replace(`${pathname}${qs}`, { scroll: false });
    },
    [pathname, router]
  );

  const activeClass = 'text-[#008069]';
  const inactiveClass = 'text-[#667781] hover:text-[#3b4a54]';

  return (
    <div>
      <div
        role="tablist"
        aria-label="Platform"
        className="mb-8 flex gap-8 border-b border-black/[0.1] pb-px sm:gap-10"
      >
        <button
          type="button"
          role="tab"
          id="tab-android"
          aria-selected={tab === 'android'}
          aria-controls="panel-android"
          tabIndex={tab === 'android' ? 0 : -1}
          onClick={() => applyTab('android')}
          className={`group relative -mb-px flex items-center gap-2 pb-3 text-[16px] font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-wa-muted/40 ${
            tab === 'android' ? activeClass : inactiveClass
          }`}
        >
          <AndroidTabIcon className={`h-5 w-5 ${tab === 'android' ? 'text-[#008069]' : 'text-[#667781]'}`} />
          {androidLabel}
          <span
            className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#008069] transition-opacity ${
              tab === 'android' ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden
          />
        </button>
        <button
          type="button"
          role="tab"
          id="tab-ios"
          aria-selected={tab === 'ios'}
          aria-controls="panel-ios"
          tabIndex={tab === 'ios' ? 0 : -1}
          onClick={() => applyTab('ios')}
          className={`group relative -mb-px flex items-center gap-2 pb-3 text-[16px] font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-wa-muted/40 ${
            tab === 'ios' ? activeClass : inactiveClass
          }`}
        >
          <AppleTabIcon className={`h-5 w-5 ${tab === 'ios' ? 'text-[#008069]' : 'text-[#667781]'}`} />
          {iosLabel}
          <span
            className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#008069] transition-opacity ${
              tab === 'ios' ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden
          />
        </button>
      </div>

      <div role="tabpanel" id="panel-android" aria-labelledby="tab-android" hidden={tab !== 'android'}>
        {androidContent}
      </div>
      <div role="tabpanel" id="panel-ios" aria-labelledby="tab-ios" hidden={tab !== 'ios'}>
        {iosContent}
      </div>
    </div>
  );
}
