/** Locked chats folder preview for privacy marketing — no external image */

export default function PrivacyLockedChatsMockup() {
  return (
    <div className="w-full max-w-[min(100%,400px)] sm:max-w-[440px] lg:max-w-[460px]">
      <div className="rounded-[2rem] bg-[#1a2329] p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] sm:rounded-[2.25rem] sm:p-5 md:p-6">
        <div className="relative aspect-[9/17] w-full max-h-[min(78vh,640px)] overflow-hidden rounded-[1.375rem] bg-[#0b141a] sm:rounded-[1.5rem]">
          <div className="absolute inset-0 bg-[#0b141a]">
            <div className="border-b border-white/5 bg-[#1f2c34] px-3 py-3">
              <p className="text-center text-[14px] font-semibold text-[#e9edef]">Chats</p>
            </div>
            <div className="p-3">
              <div className="mb-3 flex items-center gap-2 rounded-xl bg-[#25D366]/15 px-3 py-2.5 ring-1 ring-[#25D366]/30">
                <svg className="h-5 w-5 shrink-0 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[13px] font-medium text-[#e9edef]">Locked chats</span>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="mb-2 flex items-center gap-3 rounded-lg px-2 py-2 opacity-50">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-[#2a3942]" />
                  <div className="min-w-0 flex-1">
                    <div className="h-2.5 w-24 rounded bg-[#2a3942]" />
                    <div className="mt-2 h-2 w-40 rounded bg-[#2a3942]/70" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
