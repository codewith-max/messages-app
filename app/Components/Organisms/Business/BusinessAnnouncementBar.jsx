import Link from 'next/link';
import { announcement } from '../../../content/forBusinessContent';

export default function BusinessAnnouncementBar() {
  return (
    <div className="bg-[#E3F2FD] px-4 py-2.5 text-center sm:px-6">
      <p className="text-[14px] leading-snug text-[#111b21] sm:text-[15px]">
        {announcement.text}{' '}
        <Link href={announcement.href} className="font-semibold text-[#0b57d0] underline underline-offset-2 hover:text-[#0842a0]">
          {announcement.linkText}
        </Link>
      </p>
    </div>
  );
}
