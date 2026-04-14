/** Decorative overlapping phone frames — CSS only */

function Phone({ children, className = '', tilt = '' }) {
  return (
    <div
      className={`relative w-[100px] overflow-hidden rounded-[1.25rem] border-[6px] border-[#1f2c34] bg-[#0b141a] shadow-xl sm:w-[120px] sm:border-[7px] ${tilt} ${className}`}
    >
      <div className="aspect-[9/18] w-full">{children}</div>
    </div>
  );
}

export default function HelpCenterPhonesVisual() {
  return (
    <div className="relative mx-auto flex h-[260px] w-full max-w-[380px] items-center justify-center sm:h-[300px]">
      <Phone tilt="-rotate-6 translate-x-4 z-[1] opacity-95" className="absolute left-0 top-6">
        <div className="flex h-full flex-col bg-[#efeae2]">
          <div className="bg-[#008069] px-2 py-2 text-center text-[8px] font-medium text-white">WhatsApp</div>
          <div className="flex-1 space-y-1 p-1.5">
            <div className="h-6 rounded bg-white/90 shadow-sm" />
            <div className="h-6 rounded bg-white/90 shadow-sm" />
            <div className="h-6 rounded bg-white/90 shadow-sm" />
          </div>
        </div>
      </Phone>
      <Phone tilt="rotate-0 z-[3]" className="absolute top-0">
        <div className="flex h-full flex-col bg-[#0b141a]">
          <div className="flex items-center justify-between bg-[#1f2c34] px-2 py-1.5 text-[7px] text-[#e9edef]">
            <span>9:41</span>
            <span>●●●</span>
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#0b141a]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/20">
              <svg className="h-8 w-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1 11.36 11.36 0 01-.57-3.57c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
            </div>
          </div>
          <div className="border-t border-white/10 p-2 text-[7px] text-center text-[#8696a0]">Video call</div>
        </div>
      </Phone>
      <Phone tilt="rotate-6 -translate-x-4 z-[2]" className="absolute right-0 top-8">
        <div className="flex h-full flex-col bg-[#efeae2]">
          <div className="h-16 bg-gradient-to-b from-[#5fa8c4] to-[#7ec8e3]" />
          <div className="flex-1 p-1.5">
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-2 py-1 text-[7px] text-[#111b21]">
              Beautiful coast 📷
            </div>
            <div className="mt-1 h-20 rounded-lg bg-[#ccc] shadow-inner" />
          </div>
        </div>
      </Phone>
    </div>
  );
}
