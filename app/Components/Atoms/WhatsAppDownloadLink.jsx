import Link from 'next/link';
import DownloadIcon from './DownloadIcon';

const BASE =
  'inline-flex items-center rounded-full bg-[#25D366] text-base font-medium text-white transition-colors hover:bg-[#20bd5c] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2';

/**
 * Primary green Download CTA (hero strip or bottom “Get WhatsApp” section).
 * @param {'hero' | 'section'} variant — section adds top margin for centered layouts
 */
export default function WhatsAppDownloadLink({
  href = '#',
  children = 'Download',
  variant = 'section',
  ringOffsetClass = '',
  className = '',
}) {
  const size = variant === 'hero' ? 'px-7 py-3.5 shadow-sm' : 'mt-8 px-8 py-3.5';
  return (
    <Link href={href} className={`${BASE} ${size} ${ringOffsetClass} ${className}`.trim()}>
      <span>{children}</span>
      <DownloadIcon className="ms-2 h-5 w-5 shrink-0" />
    </Link>
  );
}
