import { PhoneFrame } from '../privacy/PrivacyPhoneScreens';

function MiniStatusBar() {
  return (
    <div className="flex items-center justify-between bg-white px-3 pb-1 pt-2 text-[10px] font-medium text-black">
      <span>12:30</span>
      <div className="flex items-center gap-0.5">
        <span className="h-2 w-3 rounded-sm border border-black/80" />
        <svg className="h-3 w-4 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M1 18h2v4H1v-4zm4-4h2v8H5v-8zm4-6h2v14H9V8zm4-4h2v18h-2V4zm4 8h2v10h-2V12z" />
        </svg>
      </div>
    </div>
  );
}

/** Two-step verification settings */
export function MockupTwoStepVerification() {
  return (
    <PhoneFrame>
      <MiniStatusBar />
      <div className="border-b border-black/[0.06] px-4 py-3">
        <p className="text-[15px] font-semibold text-wa-bg">Two-step verification</p>
        <p className="mt-1 text-[12px] text-[#667781]">Add extra security to your account</p>
      </div>
      <div className="bg-[#f7f8fa] px-4 py-5">
        <div className="rounded-xl border border-wa-muted/40 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[20px] font-bold tracking-[0.35em] text-wa-bg">••••••</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-wa-bg text-white" aria-hidden>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-[11px] text-[#667781]">PIN is set. We&apos;ll ask for it when registering your number.</p>
        </div>
      </div>
    </PhoneFrame>
  );
}

/** Simplified chats list with brand bar */
export function MockupOfficialChatsList() {
  return (
    <PhoneFrame>
      <MiniStatusBar />
      <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#f0f2f5] px-3 py-2">
        <span className="text-wa-muted">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </span>
        <span className="text-[15px] font-semibold text-wa-bg">WhatsApp</span>
        <div className="flex gap-2 text-[#54656f]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="bg-white px-3 py-2 text-[12px] font-semibold text-[#667781]">Chats</div>
      <div className="border-t border-black/[0.04] bg-white px-3 py-3">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-[#5c6bc0] to-[#3949ab]" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-medium text-wa-bg">Ayesha Pawar</p>
            <p className="truncate text-[12px] text-[#667781]">Hey! Are we still on for lunch?</p>
          </div>
          <span className="text-[11px] text-[#667781]">9:41</span>
        </div>
      </div>
    </PhoneFrame>
  );
}

function RadioRow({ selected, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2 text-[13px] text-wa-bg">
      <span
        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? 'border-wa-bg' : 'border-[#cfd4d6]'
        }`}
      >
        {selected ? <span className="h-2.5 w-2.5 rounded-full bg-wa-bg" /> : null}
      </span>
      {label}
    </label>
  );
}

/** Group privacy — who can add me */
export function MockupGroupAddSettings() {
  return (
    <PhoneFrame>
      <MiniStatusBar />
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5">
        <span className="text-wa-bg" aria-hidden>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <p className="text-[15px] font-semibold text-wa-bg">Groups</p>
      </div>
      <div className="bg-[#f7f8fa] px-4 pb-4 pt-3">
        <p className="text-[13px] font-semibold text-[#667781]">Who can add me to groups</p>
        <div className="mt-2 space-y-0 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-black/[0.06]">
          <RadioRow label="Everyone" selected={false} />
          <RadioRow label="My contacts" selected />
        </div>
      </div>
    </PhoneFrame>
  );
}

/** Chat with forward label + report menu */
export function MockupForwardedAndReportMenu() {
  return (
    <PhoneFrame>
      <MiniStatusBar />
      <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#f0f2f5] px-2 py-2">
        <span className="text-wa-bg">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <span className="text-[14px] font-semibold text-wa-bg">1</span>
        <div className="flex gap-3 text-[#54656f]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </div>
      </div>
      <div className="relative min-h-[200px] bg-[#e5ddd5] px-3 py-4">
        <p className="mb-2 text-center text-[11px] text-[#667781]">Forwarded</p>
        <div className="ms-auto max-w-[85%] rounded-lg bg-[#d9fdd3] px-3 py-2 text-[13px] text-wa-bg shadow-sm">
          2pm coffee?
          <p className="mt-1 text-end text-[10px] text-[#667781]">2:14 pm</p>
        </div>
        <div className="absolute left-4 right-4 top-[52%] rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/10">
          <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[14px] text-wa-bg">
            <span className="text-[#8696a0]">📋</span>
            Copy
          </button>
          <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[14px] text-wa-bg">
            <span className="text-[#8696a0]">📌</span>
            Pin
          </button>
          <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[14px] text-[#ea0038]">
            <span>👎</span>
            Report
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

/** OTP verify screen */
export function MockupVerifyNumberOtp() {
  return (
    <PhoneFrame>
      <MiniStatusBar />
      <div className="px-5 pb-6 pt-8">
        <h2 className="text-center text-[17px] font-bold text-wa-bg">Verify your number</h2>
        <p className="mt-3 text-center text-[12px] leading-relaxed text-[#667781]">
          Waiting to automatically detect an SMS sent to{' '}
          <span className="font-medium text-wa-bg">+1 (889) 555-0094</span>.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          {['6', '', '', '', '', ''].map((d, i) => (
            <div
              key={i}
              className={`flex h-11 w-10 items-center justify-center rounded-lg border-2 text-[17px] font-semibold text-wa-bg ${
                i === 0 ? 'border-wa-bg' : 'border-[#d1d7db]'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[12px] text-[#027eb5]">Didn&apos;t receive code?</p>
      </div>
    </PhoneFrame>
  );
}

/** Stranger profile sheet — block / add */
export function MockupBlockContactCard() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,320px)] rounded-[1.75rem] bg-white p-6 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/10 sm:max-w-[340px]">
      <div className="flex flex-col items-center">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#8e99f3] to-[#5c6bc0]" />
        <p className="mt-4 text-[18px] font-bold text-wa-bg">+1 (889) 555-0094</p>
        <p className="text-[14px] text-[#667781]">~ Ana</p>
        <p className="mt-2 text-center text-[12px] text-[#8696a0]">Not a contact · No common groups</p>
        <p className="mt-3 flex items-center gap-1.5 text-[13px] font-medium text-wa-muted">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 17.91c-3.16-.87-5.5-4.25-5.5-8.82V6.39l5.5-2.06 5.5 2.06v5.58c0 4.57-2.34 7.95-5.5 8.82z" />
          </svg>
          Safety tools
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-2xl border border-[#f15c6d] py-3 text-[14px] font-semibold text-[#f15c6d]"
        >
          <span aria-hidden>🚫</span>
          Block
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-2xl border border-wa-bg py-3 text-[14px] font-semibold text-wa-muted"
        >
          <span aria-hidden>➕</span>
          Add
        </button>
      </div>
    </div>
  );
}

/** Dark-framed chat preview for “adapt to risks” band */
export function MockupChatInDarkFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,380px)] overflow-hidden rounded-[28px] bg-wa-bg p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10 sm:p-4">
      <div className="overflow-hidden rounded-[1.25rem] bg-wa-bg">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#202c33] px-3 py-2.5">
          <p className="text-[14px] font-medium text-white">Business</p>
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/90">Verified</span>
        </div>
        <div className="space-y-2 px-3 py-4">
          <div className="ms-auto max-w-[88%] rounded-lg bg-[#005c4b] px-3 py-2 text-[12px] text-white">
            Hi — order #4821 shipped today.
            <p className="mt-1 text-end text-[10px] text-white/70">10:12</p>
          </div>
          <div className="max-w-[90%] rounded-lg bg-[#202c33] px-3 py-2 text-[12px] text-white/95">
            Thanks! Can I confirm delivery to this address?
          </div>
        </div>
      </div>
    </div>
  );
}
