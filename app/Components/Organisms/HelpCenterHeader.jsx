'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LANGUAGE_OPTIONS } from './footerI18n';

function GlobeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

export default function HelpCenterHeader() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');
  const rootRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const select = useCallback((code) => {
    setValue(code);
    setOpen(false);
  }, []);

  const current = LANGUAGE_OPTIONS.find((l) => l.code === value) ?? LANGUAGE_OPTIONS[0];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white shadow-[0_4px_4px_rgba(11,34,42,0.08)]">
      <div className="grid max-w-[1440px] grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:grid-rows-1 lg:gap-8 lg:px-8 lg:py-4">
        <Link
          href="/help-center"
          className="col-start-1 row-start-1 flex min-w-0 items-center gap-2.5 self-center justify-self-start"
        >
          <svg
            className="h-8 w-8 shrink-0 text-[#25d366]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <span className="text-[17px] font-semibold tracking-tight text-wa-bg">Help Center</span>
        </Link>

        <label className="col-span-full row-start-2 min-w-0 w-full max-w-xl justify-self-center lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:max-w-none">
          <span className="sr-only">Search help articles</span>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#667781]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search help articles..."
              className="w-full rounded-full border-0 bg-[#eef2f4] py-2.5 pl-11 pr-4 text-[14px] text-wa-bg placeholder:text-[#667781] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-2 focus:ring-wa-muted/40 sm:text-[15px] sm:py-3"
            />
          </div>
        </label>

        <div
          ref={rootRef}
          className="relative col-start-2 row-start-1 shrink-0 self-center justify-self-end lg:col-start-3 lg:row-start-1 lg:justify-self-end"
        >
          {open ? (
            <ul
              className="absolute right-0 top-full z-50 mt-2 max-h-80 w-[min(100vw-2rem,17.5rem)] overflow-y-auto rounded-xl border border-black/10 bg-white py-2 shadow-lg"
              role="listbox"
              aria-label="Select language"
            >
              {LANGUAGE_OPTIONS.map((opt) => (
                <li key={opt.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={opt.code === value}
                    className={`flex w-full px-4 py-2.5 text-left text-[14px] ${
                      opt.code === value ? 'bg-[#e7fce3] font-medium text-wa-bg' : 'text-wa-bg hover:bg-gray-50'
                    }`}
                    onClick={() => select(opt.code)}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-full border border-[#cfd4d6] bg-white px-3 py-2 text-[13px] font-medium text-wa-bg transition hover:bg-[#eef2f4] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted"
          >
            <GlobeIcon />
            <span className="hidden sm:inline">{current.label === 'English' ? 'English (US)' : current.label}</span>
            <span className="sm:hidden">EN</span>
            <svg
              className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
