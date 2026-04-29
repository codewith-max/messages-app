import Link from 'next/link';
import { helpSiteFooter } from '../../content/helpCenterContent';

export default function HelpCenterSiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full shrink-0 border-t border-black/[0.08] bg-[#eef2f4]">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto w-full max-w-[980px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {helpSiteFooter.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#667781]">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#3b4a54] transition hover:text-wa-muted"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-wa-muted">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span className="text-[15px] font-semibold">from Meta</span>
          </div>
          <p className="text-[13px] text-[#667781]">© {year} WhatsApp</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
