'use client';

import { useState } from 'react';

const PAGES = [1, 2, 3, 16];

export default function BlogPagination() {
  const [page, setPage] = useState(1);

  return (
    <nav className="border-t border-black/[0.06] bg-white px-4 py-12" aria-label="Blog pagination">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          disabled
          className="text-[14px] text-[#8696a0] cursor-not-allowed"
          aria-disabled
        >
          &lt; Previous
        </button>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {PAGES.map((n) => (
            <li key={n}>
              <button
                type="button"
                onClick={() => setPage(n)}
                className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-full px-3 text-[14px] font-medium transition ${
                  page === n
                    ? 'bg-[#25D366] text-white'
                    : 'border border-[#cfd4d6] bg-white text-[#111b21] hover:border-[#25D366]'
                }`}
                aria-current={page === n ? 'page' : undefined}
              >
                {n}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="text-[14px] font-medium text-[#25D366] transition hover:text-[#128C7E]"
        >
          Next &gt;
        </button>
      </div>
    </nav>
  );
}
