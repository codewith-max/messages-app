import Link from 'next/link';

function AppleLogo({ className = 'h-7 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/** Simplified store CTAs — black Apple-style pill; Google / Microsoft variants */
export default function StoreDownloadButton({ store, href = '#download' }) {
  if (store === 'apple') {
    return (
      <Link
        href={href}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition hover:bg-zinc-800 sm:w-auto"
      >
        <AppleLogo className="h-7 w-6 shrink-0" />
        <span className="text-left leading-tight">
          <span className="block text-[9px] font-normal opacity-90">Download on the</span>
          <span className="block text-[15px] font-semibold tracking-tight">App Store</span>
        </span>
      </Link>
    );
  }

  if (store === 'google') {
    return (
      <Link
        href={href}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-2.5 text-wa-bg shadow-sm transition hover:bg-gray-50 sm:w-auto"
      >
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="#4285F4"
            d="M3.6 2.2L13 12l-9.4 9.8A2.1 2.1 0 012 20.4V3.6a2.1 2.1 0 011.6-1.4z"
          />
          <path fill="#34A853" d="M17 7.6l4.6 2.6a2.1 2.1 0 010 3.6L17 16.4 13 12l4-4.4z" />
          <path fill="#FBBC04" d="M13 12l4 4.4-9.4 5.6A2.1 2.1 0 012 20.4V3.6l10.6 6.1L13 12z" />
          <path fill="#EA4335" d="M3.6 2.2L13 12 3.6 21.8A2.1 2.1 0 012 20.4V3.6c0-.8.4-1.5 1.1-1.9z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wide text-[#5f6368]">Get it on</span>
          <span className="block text-[15px] font-semibold">Google Play</span>
        </span>
      </Link>
    );
  }

  if (store === 'microsoft') {
    return (
      <Link
        href={href}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0078d4] px-4 py-2.5 text-white transition hover:bg-[#006cbd] sm:w-auto"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 3h9v9H3V3zm9 0h9v9h-9V3zM3 12h9v9H3v-9zm9 0h9v9h-9v-9z" />
        </svg>
        <span className="text-[14px] font-semibold">Get it from Microsoft</span>
      </Link>
    );
  }

  return null;
}
