'use client';

import { useState } from 'react';

export default function HelpCenterArticleFeedback() {
  const [answered, setAnswered] = useState(null);

  if (answered) {
    return (
      <div
        className="pointer-events-auto fixed bottom-6 right-6 z-40 max-w-[min(calc(100vw-2rem),20rem)] rounded-xl border border-black/[0.08] bg-white px-4 py-3 shadow-[0_8px_28px_rgba(11,34,42,0.12)]"
        role="status"
      >
        <p className="text-[14px] leading-snug text-[#3b4a54]">
          {answered === 'yes' ? 'Thanks for the feedback.' : "Thanks — we'll keep improving our help articles."}
        </p>
      </div>
    );
  }

  return (
    <div className="pointer-events-auto fixed bottom-6 right-6 z-40 max-w-[min(calc(100vw-2rem),20rem)] rounded-xl border border-black/[0.08] bg-white p-4 shadow-[0_8px_28px_rgba(11,34,42,0.12)]">
      <p className="text-[14px] font-medium leading-snug text-[#111b21]">Does this answer your question?</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setAnswered('yes')}
          className="min-h-[36px] flex-1 rounded-lg border border-black/[0.1] bg-[#f6f8fa] px-3 text-[14px] font-semibold text-[#111b21] transition hover:bg-[#eef2f4] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted/50"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setAnswered('no')}
          className="min-h-[36px] flex-1 rounded-lg border border-black/[0.1] bg-[#f6f8fa] px-3 text-[14px] font-semibold text-[#111b21] transition hover:bg-[#eef2f4] focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted/50"
        >
          No
        </button>
      </div>
    </div>
  );
}
