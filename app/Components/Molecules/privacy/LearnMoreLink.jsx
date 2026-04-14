import Link from 'next/link';

/** External-style “Learn more” link for dark privacy sections */
export default function LearnMoreLink({
  href = '#',
  className = '',
  variant = 'white',
  chevron = false,
  children = 'Learn more',
}) {
  const base =
    variant === 'green'
      ? 'text-[#25D366] hover:text-[#20bd5a]'
      : variant === 'onLight'
        ? 'text-[#111b21] hover:text-[#25D366]'
        : 'text-white hover:text-[#25D366]';

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium underline decoration-1 underline-offset-[6px] transition-colors hover:decoration-[#25D366] ${
        variant === 'onLight' ? 'decoration-black/25' : 'decoration-white/40'
      } ${base} ${className}`}
    >
      <span>{children}</span>
      {chevron ? (
        <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ) : (
        <svg
          className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
        </svg>
      )}
    </Link>
  );
}
