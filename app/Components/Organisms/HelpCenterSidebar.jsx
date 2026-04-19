'use client';

import Link from 'next/link';
import { useState } from 'react';
import { sidebarCategories } from '../../content/helpCenterContent';
import HelpCategoryIcon from '../Molecules/help-center/HelpCategoryIcon';

export default function HelpCenterSidebar() {
  const [openId, setOpenId] = useState('download');

  return (
    <aside className="w-full shrink-0 border-b border-black/[0.08] shadow-[4px_0_4px_rgba(11,34,42,0.08)] md:w-[400px] md:border-b-0 md:border-r lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)] lg:self-start lg:overflow-y-auto lg:border-r lg:border-black/[0.08]">
      <nav className="p-2 md:p-3" aria-label="Help topics">
        <ul className="space-y-0.5">
          {sidebarCategories.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : cat.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[20px] font-medium text-wa-bg ${
                    isOpen ? 'bg-[#e5e7ea]' : ''
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 text-black">
                    <HelpCategoryIcon name={cat.icon} />
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{cat.label}</span>
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
                  <ul className="border-l-2 border-wa-muted/40 py-1 pl-4 ml-4 mr-1 mb-2 space-y-0.5">
                    {cat.articles.map((a) => (
                      <li key={a.title}>
                        <Link
                          href={a.href}
                          className="block rounded-md px-2 py-1.5 text-[16px] font-semibold leading-snug text-wa-bg"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
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
