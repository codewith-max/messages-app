import Link from 'next/link';
import DownloadIcon from './DownloadIcon';

const BASE =
  'inline-flex items-center rounded-full bg-wa-bg text-base font-medium text-white transition-colors hover:bg-wa-muted focus:outline-none focus:ring-2 focus:ring-wa-muted focus:ring-offset-2 focus:ring-offset-white mt-8 px-8 py-3.5';

export default function WhatsAppDownloadLink({ href = '#', children = 'Download' }) {
  return (
    <Link href={href} className={BASE}>
      <span>{children}</span>
      <DownloadIcon className="ms-2 h-5 w-5 shrink-0" />
    </Link>
  );
}
