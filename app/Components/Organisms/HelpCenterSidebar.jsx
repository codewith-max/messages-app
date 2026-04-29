'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { sidebarCategories } from '../../content/helpCenterContent';
import HelpCategoryIcon from '../Molecules/help-center/HelpCategoryIcon';

function articleKey(catId, article) {
  return `${catId}:${article.id ?? article.title}`;
}

function stripQuery(href = '') {
  return href.split('?')[0];
}

function getActiveSidebarState(pathname) {
  for (const cat of sidebarCategories) {
    for (const article of cat.articles ?? []) {
      const aKey = articleKey(cat.id, article);

      if (article.subItems?.length) {
        for (const subItem of article.subItems) {
          if (subItem.href?.startsWith('/') && stripQuery(subItem.href) === pathname) {
            return { openId: cat.id, openArticleId: aKey };
          }
        }
      }

      if (article.href?.startsWith('/') && stripQuery(article.href) === pathname) {
        return { openId: cat.id, openArticleId: '' };
      }
    }
  }

  return null;
}

export default function HelpCenterSidebar() {
  const pathname = usePathname();
  const [openId, setOpenId] = useState('');
  const [openArticleId, setOpenArticleId] = useState('');

  useEffect(() => {
    const activeState = getActiveSidebarState(pathname);
    if (activeState) {
      setOpenId(activeState.openId);
      setOpenArticleId(activeState.openArticleId);
    }
  }, [pathname]);

  return (
    <aside className="w-full shrink-0 border-b border-black/[0.08] shadow-[4px_0_4px_rgba(11,34,42,0.08)] md:w-[300px] md:border-b-0 md:border-r lg:w-[340px] xl:w-[380px] lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)] lg:self-start lg:overflow-y-auto lg:border-r lg:border-black/[0.08]">
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
                                  const hrefPath = s.href.split('?')[0];
                                  const isActive = s.href.startsWith('/') && pathname === hrefPath;
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
                          {(() => {
                            const hrefPath = stripQuery(a.href);
                            const isActive = a.href.startsWith('/') && pathname === hrefPath;

                            return (
                          <Link
                            href={a.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[17px] font-semibold tracking-[0.03em] leading-10 text-[#111b21] ${
                              isActive ? 'bg-[#e7fce3] text-[#111b21]' : ''
                            }`}
                          >
                            <span className="shrink-0 text-black">
                              <HelpCategoryIcon name={a.icon ?? cat.icon} className="h-4 w-4 [stroke-width:2]" />
                            </span>
                            <span className="min-w-0 flex-1">{a.title}</span>
                          </Link>
                            );
                          })()}
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
