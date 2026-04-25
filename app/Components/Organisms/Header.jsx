'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '../../contexts/LocaleContext';

export default function Header() {
  const pathname = usePathname();
  const isFeaturesPage = pathname === '/features' || pathname?.startsWith('/features/');
  const isPrivacyPage = pathname === '/privacy';
  const isHelpCenterPage = pathname === '/help-center' || pathname?.startsWith('/help-center/');
  const isBlogPage = pathname === '/blog';
  const isForBusinessPage = pathname === '/for-business';
  const isAppsPage = pathname === '/apps';
  const isMetaAiPage = pathname === '/features/meta-ai';
  const isSecurityFeaturePage = pathname === '/features/security';
  const isDarkNav = isPrivacyPage || isSecurityFeaturePage;
  const { page } = useLocale();
  const h = page.header;
  const nav = [
    { label: h.privacy, href: '/privacy' },
    { label: h.helpCenter, href: '/help-center' },
    { label: h.blog, href: '/blog' },
    { label: h.forBusiness, href: '/for-business' },
    { label: h.apps, href: '/apps' },
  ];

  return (
    <header
      className={`w-full py-4 sticky top-0 z-50 ${
        isDarkNav ? 'bg-wa-bg' : isAppsPage ? 'bg-[#E7FCE3]' : isMetaAiPage ? 'bg-[#F7F8F2]' : 'bg-[#ffffff]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <svg
              className="w-9 h-9 text-wa-bg"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-wa-bg">WhatsApp</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/features" className="flex items-center gap-1 cursor-pointer group">
              <span
                className={`text-[15px] transition-colors ${isDarkNav ? 'text-white hover:text-wa-muted' : 'text-wa-bg hover:text-wa-muted'}`}
              >
                {h.features}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${isDarkNav ? 'text-white group-hover:text-wa-muted' : 'text-wa-bg group-hover:text-wa-muted'} ${isFeaturesPage ? 'rotate-180' : 'group-hover:rotate-180'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {nav.map((item) => {
              const isActivePrivacy = item.href === '/privacy' && isPrivacyPage;
              const isActiveHelp = item.href === '/help-center' && isHelpCenterPage;
              const isActiveBlog = item.href === '/blog' && isBlogPage;
              const isActiveBusiness = item.href === '/for-business' && isForBusinessPage;
              const isActiveApps = item.href === '/apps' && isAppsPage;
              const isActive =
                isActivePrivacy || isActiveHelp || isActiveBlog || isActiveBusiness || isActiveApps;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] transition-colors ${
                    isActive
                      ? 'font-semibold text-wa-bg'
                      : isDarkNav
                        ? 'text-white hover:text-wa-muted'
                        : 'text-wa-bg hover:text-wa-muted'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className={`hidden md:flex items-center gap-2 text-[15px] font-medium rounded-full px-5 py-2.5 transition-colors ${
                isDarkNav
                  ? isPrivacyPage
                    ? 'border-0 bg-white text-wa-bg hover:bg-white/90'
                    : 'border border-white bg-transparent text-white hover:bg-white/10'
                  : 'border border-wa-bg bg-white text-wa-bg hover:bg-gray-50'
              }`}
            >
              <span>{h.login}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="#download"
              className={`flex items-center gap-2 text-[15px] font-medium text-white rounded-full bg-wa-bg px-6 py-2.5 hover:bg-wa-muted transition-all hover:shadow-[0_4px_14px_0_rgba(11,34,42,0.35)] ${
                isDarkNav ? 'border-0' : 'border-0'
              }`}
            >
              <span>{h.download}</span>
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
