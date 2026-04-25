'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { sidebarCategories } from '../../content/helpCenterContent';
import HelpCategoryIcon from '../Molecules/help-center/HelpCategoryIcon';

function articleKey(catId, article) {
  return `${catId}:${article.id ?? article.title}`;
}

export default function HelpCenterSidebar() {
  const pathname = usePathname();
  const [openId, setOpenId] = useState('');
  const [openArticleId, setOpenArticleId] = useState('');

  useEffect(() => {
    if (pathname === '/help-center/download-uninstall') {
      setOpenId('get-started');
      setOpenArticleId('get-started:download-installation');
    }
    if (pathname === '/help-center/supported-operating-systems') {
      setOpenId('get-started');
      setOpenArticleId('get-started:download-installation');
    }
    if (pathname === '/help-center/supported-devices') {
      setOpenId('get-started');
      setOpenArticleId('get-started:download-installation');
    }
    if (pathname === '/help-center/rooted-phones-custom-roms') {
      setOpenId('get-started');
      setOpenArticleId('get-started:download-installation');
    }
    if (pathname === '/help-center/ending-whatsapp-kaios') {
      setOpenId('get-started');
      setOpenArticleId('get-started:download-installation');
    }
    if (pathname === '/help-center/register-phone-number') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/about-registration-two-step-verification') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/cant-complete-registration') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/manage-two-step-verification-settings') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/reset-two-step-verification-pin') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/cant-request-another-verification-code-without-waiting') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/verify-your-number-by-sms') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/received-verification-code-without-requesting') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/register-account-with-phone-call') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/automatic-phone-number-verification') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/traveling-cant-get-whatsapp-code') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/parent-managed-accounts') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/get-started-web') {
      setOpenId('get-started');
      setOpenArticleId('get-started:linked-devices');
    }
    if (pathname === '/help-center/cant-download-update') {
      setOpenId('get-started');
      setOpenArticleId('get-started:get-started-troubleshooting');
    }
    if (pathname === '/help-center/change-language') {
      setOpenId('get-started');
      setOpenArticleId('get-started:get-started-troubleshooting');
    }
    if (pathname === '/help-center/safety-security') {
      setOpenId('privacy');
      setOpenArticleId('privacy:safety');
    }
    if (pathname === '/help-center/account-security-tips') {
      setOpenId('privacy');
      setOpenArticleId('privacy:security');
    }
    if (pathname === '/help-center/how-to-protect-your-account') {
      setOpenId('privacy');
      setOpenArticleId('privacy:security');
    }
    if (pathname === '/help-center/how-to-recover-compromised-account') {
      setOpenId('privacy');
      setOpenArticleId('privacy:security');
    }
    if (pathname === '/help-center/backup-restore-chats') {
      setOpenId('chats');
      setOpenArticleId('chats:backup-restore');
    }
    if (pathname === '/help-center/teen-information-center') {
      setOpenId('privacy');
      setOpenArticleId('privacy:safety');
    }
    if (pathname === '/help-center/business-features') {
      setOpenId('whatsapp-business');
      setOpenArticleId('whatsapp-business:wab-setting-up-account');
    }
    if (pathname === '/help-center/cant-register-phone-number') {
      setOpenId('get-started');
      setOpenArticleId('get-started:registration');
    }
    if (pathname === '/help-center/about-changing-phones') {
      setOpenId('accounts');
      setOpenArticleId('accounts:acc-accounts');
    }
    if (pathname === '/help-center/about-two-step-verification') {
      setOpenId('privacy');
      setOpenArticleId('privacy:security');
    }
  }, [pathname]);

  return (
    <aside className="w-full shrink-0 border-b border-black/[0.08] shadow-[4px_0_4px_rgba(11,34,42,0.08)] md:w-[380px] md:border-b-0 md:border-r lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)] lg:self-start lg:overflow-y-auto lg:border-r lg:border-black/[0.08]">
      <nav className="p-2 md:p-2" aria-label="Help topics">
        <ul className="space-y-0">
          {sidebarCategories.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => {
                    if (isOpen) {
                      setOpenId('');
                      setOpenArticleId('');
                    } else {
                      setOpenId(cat.id);
                      setOpenArticleId('');
                    }
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-[17px] font-semibold tracking-[0.03em] leading-10 text-[#111b21] ${
                    isOpen ? 'bg-[#e5e7ea]' : ''
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 text-black">
                    <HelpCategoryIcon name={cat.icon} className="h-5 w-5 [stroke-width:2.1]" />
                  </span>
                  <span className="min-w-0 flex-1">{cat.label}</span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-black transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && cat.articles?.length ? (
                  <ul className="mb-1.5 ml-5 mt-0.5 space-y-0.5 py-1">
                    {cat.articles.map((a) => {
                      const aKey = articleKey(cat.id, a);
                      const hasSub = a.subItems?.length > 0;
                      const subOpen = openArticleId === aKey;

                      if (hasSub) {
                        return (
                          <li key={aKey} className="list-none">
                            <button
                              type="button"
                              onClick={() => setOpenArticleId(subOpen ? '' : aKey)}
                              className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-[17px] font-semibold tracking-[0.03em] leading-10 text-[#111b21] ${
                                subOpen ? 'bg-[#e5e7ea]/80' : ''
                              }`}
                              aria-expanded={subOpen}
                            >
                              <span className="shrink-0 text-black">
                                <HelpCategoryIcon name={a.icon ?? cat.icon} className="h-4 w-4 [stroke-width:2]" />
                              </span>
                              <span className="min-w-0 flex-1">{a.title}</span>
                              <svg
                                className={`h-4 w-4 shrink-0 text-black transition-transform ${subOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {subOpen ? (
                              <ul className="ml-1 border-l border-black/[0.12] pl-3">
                                {a.subItems.map((s) => {
                                  const isActive = s.href.startsWith('/') && pathname === s.href;
                                  return (
                                    <li key={s.href}>
                                      <Link
                                        href={s.href}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`block rounded-lg px-2 py-1.5 text-[16px] !font-medium leading-7 ${
                                          isActive ? 'bg-[#e7fce3] text-[#111b21]' : 'text-[#111b21]'
                                        }`}
                                      >
                                        {s.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      }

                      return (
                        <li key={aKey}>
                          <Link
                            href={a.href}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[17px] font-semibold tracking-[0.03em] leading-10 text-[#111b21]"
                          >
                            <span className="shrink-0 text-black">
                              <HelpCategoryIcon name={a.icon ?? cat.icon} className="h-4 w-4 [stroke-width:2]" />
                            </span>
                            <span className="min-w-0 flex-1">{a.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
