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

export default function BusinessFeaturesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Business Features
        </h1>
        <CopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp is committed to exploring multiple ways to help your business connect with customers. In order to
          provide customized solutions to your business needs, we offer two business solutions i.e. WhatsApp Business
          app and WhatsApp Business platform.
        </p>
        <p className="mt-3">
          WhatsApp Business app is built with the business owner in mind. The app makes it easy to personally connect
          with your customers, highlight your products and services, and answer their questions. Create a catalog to
          showcase your products and services and use special tools to automate, sort, and quickly respond to messages.
        </p>
        <p className="mt-3">
          To get started, download the WhatsApp Business app at no additional charge from the{' '}
          <Link className={linkClass} href="https://play.google.com/store">
            Google Play Store
          </Link>{' '}
          or{' '}
          <Link className={linkClass} href="https://apps.apple.com/">
            Apple App Store
          </Link>
          .
        </p>
        <p className="mt-3">
          WhatsApp Business Platform helps medium and large businesses provide customer support and deliver important
          notifications to customers.
        </p>
        <p className="mt-3">
          Explore our library of help content for the WhatsApp Business Platform{' '}
          <Link className={linkClass} href="/for-business">
            here
          </Link>
          .
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Relevant Articles</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              About{' '}
              <Link className={linkClass} href="/for-business">
                WhatsApp Business
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center">
                catalog
              </Link>
            </li>
            <li>
              About{' '}
              <Link className={linkClass} href="/help-center">
                cart
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
