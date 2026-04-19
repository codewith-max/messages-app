/** Large card illustrations — two-tone green style */

export default function HelpTopicIllustration({ variant, className = '' }) {
  const wrap = `flex h-[120px] items-center justify-center ${className}`;

  if (variant === 'devices') {
    return (
      <div className={wrap}>
        <div className="relative flex items-end gap-2">
          <div className="h-14 w-20 rounded-lg border-2 border-wa-bg bg-[#d9fdd3] p-1 shadow-sm">
            <div className="h-full w-full rounded bg-white/80" />
          </div>
          <div className="h-20 w-11 rounded-xl border-2 border-wa-bg bg-[#d9fdd3] p-0.5 shadow-sm">
            <div className="h-full w-full rounded-lg bg-white/90" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'shield') {
    return (
      <div className={wrap}>
        <div className="relative">
          <svg className="h-16 w-16 text-wa-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <svg className="absolute -bottom-1 -right-1 h-8 w-8 text-[#128C7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'cloud') {
    return (
      <div className={wrap}>
        <div className="relative">
          <svg className="h-20 w-20 text-wa-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v8m0-8a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <svg className="absolute bottom-2 right-1 h-7 w-7 text-[#128C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'teens') {
    return (
      <div className={wrap}>
        <div className="relative flex items-center justify-center">
          <svg className="h-16 w-16 text-wa-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="absolute text-2xl" aria-hidden>
            ♥
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'ads') {
    return (
      <div className={wrap}>
        <div className="flex items-center gap-2">
          <div className="h-16 w-10 rounded-lg border-2 border-wa-bg bg-[#d9fdd3]" />
          <svg className="h-14 w-14 text-wa-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'business') {
    return (
      <div className={wrap}>
        <svg className="h-20 w-20 text-wa-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    );
  }

  return <div className={wrap} />;
}
