'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function CopyLinkButton() {
  const [done, setDone] = useState(false);

  const copy = useCallback(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (url && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(url).then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.1] bg-white px-3 py-1.5 text-[14px] font-semibold text-[#111b21] shadow-sm transition hover:bg-[#f0f2f4]"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
      {done ? 'Copied' : 'Copy link'}
    </button>
  );
}

export default function SafetySecurityArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Safety and Security
        </h1>
        <CopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Your privacy and security are important to us, which is why we built end-to-end encryption into our app.
        </p>
        <p className="mt-3">
          We&apos;ve also developed additional features that let you control your privacy settings, block unwanted users,
          and enable two-step verification to help you{' '}
          <Link className={linkClass} href="/features/security">
            stay safe on WhatsApp
          </Link>
          .
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Relevant Articles</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <Link className={linkClass} href="/help-center">
                How to protect your account
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center">
                About two-step verification
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center">
                About blocking and reporting contacts
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center">
                How to use WhatsApp responsibly
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
