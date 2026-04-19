/** Dark chat preview for /privacy — matches whatsapp.com/privacy marketing frame */

function ChatHeader() {
  return (
    <header className="relative z-30 flex shrink-0 items-center gap-2 border-b border-white/5 bg-[#1f2c34] px-2 py-2.5 sm:px-3">
      <button type="button" className="flex h-9 w-9 items-center justify-center text-[#e9edef]" aria-label="Back">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#7c94a0] to-[#546e7a]" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[16px] font-medium leading-tight text-[#e9edef]">Anika</p>
        <p className="text-[12px] text-[#8696a0]">online</p>
      </div>
      <div className="flex items-center gap-0.5 text-[#e9edef]">
        <button type="button" className="rounded-full p-2 hover:bg-white/5" aria-label="Video call">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button type="button" className="rounded-full p-2 hover:bg-white/5" aria-label="Voice call">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        <button type="button" className="rounded-full p-2 hover:bg-white/5" aria-label="Menu">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Wallpaper() {
  return (
    <div
      className="absolute inset-0 opacity-[0.14]"
      style={{
        backgroundColor: '#0e1620',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M40 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-36V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      aria-hidden
    />
  );
}

function EncryptedOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 py-12">
      <p
        className="max-w-[16ch] text-center text-[clamp(1.35rem,4.2vw,2.35rem)] font-bold leading-[1.08] tracking-[0.02em] text-wa-bg/[0.22]"
        style={{ textShadow: '0 0 40px rgba(37,211,102,0.15)' }}
      >
        encrypted
        <span className="block pt-1 text-[0.92em]">message</span>
      </p>
    </div>
  );
}

function ComposerBar() {
  return (
    <div className="relative z-30 border-t border-white/5 bg-[#1f2c34] px-2 py-2 sm:px-3">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#8696a0]">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div className="flex min-h-[40px] flex-1 items-center rounded-full bg-wa-muted px-3 py-1">
          <span className="text-[15px] text-[#8696a0]">Exciting news…</span>
        </div>
        <span className="hidden text-[#8696a0] sm:block" aria-hidden>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </span>
        <span className="text-[#8696a0]" aria-hidden>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wa-bg text-white shadow-md"
          aria-label="Record voice message"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.07 14.47 14.32 16 12 16s-4.07-1.53-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3.15 2.79 5.56 5.91 5.98V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.12-.43 5.42-2.83 5.91-5.98.1-.6-.39-1.14-1-1.14z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function PrivacyPhoneMockup() {
  return (
    <div className="w-full max-w-[min(100%,380px)] lg:max-w-[400px]">
      <div className="rounded-[2rem] bg-[#1c2830] p-3 shadow-[0_36px_72px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.07] sm:p-4">
        <div className="flex h-[min(520px,68vh)] max-h-[580px] min-h-[480px] flex-col overflow-hidden rounded-[1.35rem] bg-wa-bg ring-1 ring-black/30 sm:rounded-[1.5rem]">
          <ChatHeader />
          <div className="relative min-h-0 flex-1">
            <Wallpaper />
            <EncryptedOverlay />
          </div>
          <ComposerBar />
        </div>
      </div>
    </div>
  );
}
