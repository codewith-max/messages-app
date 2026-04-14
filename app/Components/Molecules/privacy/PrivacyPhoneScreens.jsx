/**
 * Stylized in-DOM phone UIs for /privacy marketing sections (no image assets required).
 */

function StatusBar() {
  return (
    <div className="flex items-center justify-between bg-white px-3 pb-1 pt-2 text-[10px] font-medium text-black">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="h-2 w-3 rounded-sm border border-black/80" />
        <svg className="h-3 w-4 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M1 18h2v4H1v-4zm4-4h2v8H5v-8zm4-6h2v14H9V8zm4-4h2v18h-2V4zm4 8h2v10h-2V12z" />
        </svg>
      </div>
    </div>
  );
}

function Row({ children, border = true }) {
  return (
    <div
      className={`flex items-center justify-between gap-2 px-4 py-3.5 text-[13px] text-[#111b21] ${border ? 'border-b border-black/[0.06]' : ''}`}
    >
      {children}
    </div>
  );
}

function Toggle({ on }) {
  return (
    <button
      type="button"
      className={`relative h-[26px] w-[46px] rounded-full transition-colors ${on ? 'bg-[#25D366]' : 'bg-[#e9edef]'}`}
      aria-hidden
    >
      <span
        className={`absolute top-0.5 h-[22px] w-[22px] rounded-full bg-white shadow transition-transform ${on ? 'left-[22px]' : 'left-0.5'}`}
      />
    </button>
  );
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[min(100%,300px)] rounded-[2rem] bg-[#2c3135] p-[10px] shadow-[0_32px_90px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/10 sm:max-w-[320px] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-inner">{children}</div>
    </div>
  );
}

export function MockupGroupInfo() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5">
        <span className="text-[#111b21]" aria-hidden>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <div>
          <p className="text-[15px] font-semibold text-[#111b21]">Group info</p>
          <p className="text-[12px] text-[#667781]">Breakfast Club</p>
        </div>
      </div>
      <div className="bg-[#f7f8fa]">
        <Row>
          <span className="font-medium">Mute notifications</span>
          <Toggle on={false} />
        </Row>
        <Row>
          <span>Custom notifications</span>
          <span className="text-[#8696a0]">›</span>
        </Row>
        <Row>
          <span>Media visibility</span>
          <span className="text-[#8696a0]">›</span>
        </Row>
        <Row>
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#8696a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Encryption
          </span>
          <span className="text-[#8696a0]">›</span>
        </Row>
        <Row>
          <span>Disappearing messages</span>
          <span className="text-[13px] text-[#667781]">90 days</span>
        </Row>
        <Row>
          <span className="font-medium">Chat lock</span>
          <Toggle on />
        </Row>
        <Row border={false}>
          <span>Group permissions</span>
          <span className="text-[#8696a0]">›</span>
        </Row>
      </div>
    </PhoneFrame>
  );
}

export function MockupCallsSilence() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5">
        <span className="text-[#111b21]">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <p className="text-[16px] font-semibold text-[#111b21]">Calls</p>
      </div>
      <div className="space-y-1 bg-white px-4 pb-6 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold text-[#111b21]">Silence unknown callers</p>
            <p className="mt-2 text-[12px] leading-relaxed text-[#667781]">
              Calls from unknown numbers will be silenced and shown in your calls list and notifications.
            </p>
            <button type="button" className="mt-2 text-[13px] font-medium text-[#027eb5]">
              Learn more
            </button>
          </div>
          <Toggle on />
        </div>
      </div>
    </PhoneFrame>
  );
}

export function MockupBackupEncryption() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5">
        <span className="text-[#111b21]">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <p className="text-[15px] font-semibold text-[#111b21]">Chat backup</p>
      </div>
      <div className="bg-[#f7f8fa] px-4 pb-5 pt-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-[#d9fdd3]">
          <div className="relative">
            <svg className="h-14 w-14 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow">
              <svg className="h-4 w-4 text-[#111b21]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </span>
          </div>
        </div>
        <p className="mt-4 text-[15px] font-bold leading-snug text-[#111b21]">
          Protect your backup with end-to-end encryption
        </p>
        <ul className="mt-3 space-y-1.5 text-left text-[11px] leading-snug text-[#3b4a54]">
          <li>• Only you can unlock your backup</li>
          <li>• WhatsApp does not have access to your key</li>
          <li>• Your messages stay private in the cloud</li>
        </ul>
        <p className="mt-3 text-[10px] text-[#8696a0]">Your current backup size is 376 MB including 361 MB media.</p>
        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-[#25D366] py-3 text-[14px] font-semibold text-white"
        >
          Turn on
        </button>
      </div>
    </PhoneFrame>
  );
}

function Radio({ selected, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2 text-[13px] text-[#111b21]">
      <span
        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? 'border-[#25D366]' : 'border-[#cfd4d6]'
        }`}
      >
        {selected ? <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" /> : null}
      </span>
      {label}
    </label>
  );
}

export function MockupLastSeenOnline() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5">
        <span className="text-[#111b21]">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <p className="text-[15px] font-semibold text-[#111b21]">Last seen and online</p>
      </div>
      <div className="bg-[#f7f8fa] px-4 pb-4 pt-2">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[#667781]">Who can see my last seen</p>
        <div className="mt-1 space-y-0">
          <Radio label="Everyone" selected={false} />
          <Radio label="My contacts" selected />
          <Radio label="My contacts except…" selected={false} />
          <Radio label="Nobody" selected={false} />
        </div>
        <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-[#667781]">Who can see when I&apos;m online</p>
        <div className="mt-1">
          <Radio label="Everyone" selected />
          <Radio label="Same as last seen" selected={false} />
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-[#8696a0]">
          If you don&apos;t share your last seen, you won&apos;t see other people&apos;s last seen.
        </p>
      </div>
    </PhoneFrame>
  );
}

export function MockupSecurityStack() {
  return (
    <div className="relative mx-auto h-[min(420px,58vh)] w-full max-w-[min(100%,340px)] sm:h-[460px] sm:max-w-[360px]">
      {/* Back cards */}
      <div className="absolute left-1/2 top-4 z-0 w-[88%] -translate-x-1/2 rounded-[1.75rem] bg-[#2a3942] p-4 shadow-lg ring-1 ring-white/5 opacity-80">
        <div className="h-40 rounded-xl bg-[#1f2c34]" />
      </div>
      <div className="absolute left-1/2 top-12 z-[1] w-[92%] -translate-x-1/2 rounded-[1.75rem] bg-[#34444f] p-3 shadow-xl ring-1 ring-white/8 opacity-95">
        <div className="h-36 rounded-lg bg-[#25303a]" />
      </div>
      {/* Front modal */}
      <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-[300px] -translate-x-1/2 rounded-[1.5rem] bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/10 sm:max-w-[310px]">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f2f5]">
          <svg className="h-7 w-7 text-[#667781]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0h2" />
          </svg>
        </div>
        <p className="text-center text-[16px] font-bold text-[#111b21]">Report to WhatsApp</p>
        <p className="mt-2 text-center text-[11px] leading-relaxed text-[#667781]">
          The last 5 messages will be forwarded to WhatsApp.
        </p>
        <label className="mt-4 flex items-start gap-2 rounded-lg border border-black/[0.08] p-3 text-[12px] text-[#111b21]">
          <input type="checkbox" className="mt-0.5" readOnly defaultChecked />
          <span>
            <span className="font-medium">Block contact</span>
            <span className="mt-1 block text-[11px] text-[#667781]">This person won&apos;t be able to message or call you.</span>
          </span>
        </label>
        <div className="mt-5 flex justify-end gap-6 text-[14px] font-semibold">
          <button type="button" className="text-[#027eb5]">
            Cancel
          </button>
          <button type="button" className="text-[#25D366]">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

const MOCKUPS = {
  groupInfo: MockupGroupInfo,
  callsSilence: MockupCallsSilence,
  backupEncryption: MockupBackupEncryption,
  lastSeenOnline: MockupLastSeenOnline,
  securityStack: MockupSecurityStack,
};

export function PrivacyMockupByKey({ mockupKey }) {
  const Comp = MOCKUPS[mockupKey] ?? MockupGroupInfo;
  return <Comp />;
}
