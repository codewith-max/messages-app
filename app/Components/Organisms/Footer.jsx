'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { LANGUAGE_OPTIONS } from './footerI18n';

function SocialLink({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-wa-bg hover:text-black"
    >
      {children}
    </Link>
  );
}

function GlobeIcon({ className = 'h-5 w-5' }) {
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

function FooterLanguageMenu({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const current = LANGUAGE_OPTIONS.find((l) => l.code === value) ?? LANGUAGE_OPTIONS[0];

  const select = useCallback(
    (code) => {
      onChange(code);
      setOpen(false);
    },
    [onChange]
  );

  return (
    <div className="relative" ref={rootRef}>
      {open ? (
        <ul
          className="absolute bottom-full right-0 z-50 mb-2 max-h-80 w-[17.5rem] overflow-y-auto rounded-2xl bg-white py-2 shadow-[0_8px_32px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
          role="listbox"
          aria-label="Select language"
        >
          {LANGUAGE_OPTIONS.map((opt) => (
            <li key={opt.code}>
              <button
                type="button"
                role="option"
                aria-selected={opt.code === value}
                className={`flex w-full px-4 py-2.5 text-left text-[15px] transition ${
                  opt.code === value
                    ? 'bg-[#0084ff] font-medium text-white'
                    : 'text-wa-bg hover:bg-gray-100'
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
        className="order-4 inline-flex items-center gap-2.5 self-start rounded-full border border-white bg-wa-bg px-4 py-2.5 text-sm font-medium text-white transition hover:bg-wa-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2 focus-visible:ring-offset-wa-bg lg:order-none"
      >
        <GlobeIcon className="h-5 w-5 shrink-0 opacity-90" />
        <span>{current.label}</span>
        <svg
          className={`h-4 w-4 shrink-0 opacity-90 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale, setLocale, footer: copy } = useLocale();

  return (
    <footer className="bg-wa-bg text-white" lang={locale}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-14 md:pt-20 pb-10 md:pb-12">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="shrink-0 lg:max-w-[220px]">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white">
              <svg className="h-9 w-9 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="text-[26px] font-semibold tracking-tight">WhatsApp</span>
            </Link>
            <Link
              href="#download"
              className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full bg-wa-bg px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-wa-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-wa-bg"
            >
              {copy.download}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-12 md:grid-cols-4 md:gap-8 lg:flex-1 lg:gap-6 xl:gap-10">
            {copy.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="mb-4 text-[13px] font-normal tracking-wide text-[#8696a0]">
                  {section.title}
                </h4>
                <ul className="space-y-3.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-[16px] md:text-[17px] font-normal text-white transition hover:text-wa-muted">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 md:mt-16 md:pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
            <p className="order-1 text-sm text-[#8696a0] lg:order-none">
              {year} © WhatsApp LLC.
            </p>
            <div className="order-3 flex flex-wrap gap-x-6 gap-y-2 text-sm lg:order-none">
              <Link href="#" className="text-white underline-offset-4 transition hover:text-wa-muted hover:underline">
                {copy.terms}
              </Link>
              <Link href="#" className="text-white underline-offset-4 transition hover:text-wa-muted hover:underline">
                {copy.sitemap}
              </Link>
            </div>
            <div className="order-2 flex items-center gap-3 lg:order-none">
              <SocialLink href="https://twitter.com/whatsapp" label="WhatsApp on X">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.youtube.com/whatsapp" label="WhatsApp on YouTube">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/whatsapp" label="WhatsApp on Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.facebook.com/WhatsApp" label="WhatsApp on Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>
            </div>
            <FooterLanguageMenu value={locale} onChange={setLocale} />
          </div>
        </div>
      </div>
    </footer>
  );
}
