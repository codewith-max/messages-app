/** Pixel-tight pieces for the Security hero collage (dark-chat palette) */

function DoubleCheck() {
  return <span className="text-[11px] leading-none text-[#53bdeb]">✓✓</span>;
}

export function OutgoingTextBubble({ children, time, className = '' }) {
  return (
    <div
      className={`max-w-[min(100%,260px)] rounded-lg bg-[#005c4b] px-2.5 pb-1 pt-2 shadow-[0_4px_14px_rgba(0,0,0,0.35)] ${className}`.trim()}
    >
      <p className="text-[13px] leading-[1.35] text-white sm:text-[14px]">{children}</p>
      <div className="mt-1 flex items-center justify-end gap-1 pb-0.5 text-[11px] tabular-nums text-white/75">
        <span>{time}</span>
        <DoubleCheck />
      </div>
    </div>
  );
}

export function DocumentAttachmentBubble({ title, sizeLabel, className = '' }) {
  return (
    <div
      className={`flex max-w-[min(100%,240px)] items-stretch gap-2 overflow-hidden rounded-lg bg-[#1d282f] shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-1 ring-white/5 ${className}`.trim()}
    >
      <div className="flex w-11 shrink-0 items-center justify-center bg-[#2b5278]">
        <span className="text-[9px] font-bold uppercase tracking-wide text-white">PDF</span>
      </div>
      <div className="min-w-0 flex-1 py-2 pe-2">
        <p className="truncate text-[13px] font-medium leading-tight text-[#e9edef]">{title}</p>
        <p className="mt-0.5 text-[11px] text-[#8696a0]">{sizeLabel}</p>
      </div>
    </div>
  );
}

export function IncomingTextBubble({ children, time, footer, className = '' }) {
  return (
    <div
      className={`max-w-[min(100%,220px)] rounded-lg bg-[#202c33] px-2.5 pb-2 pt-2 shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-1 ring-white/5 ${className}`.trim()}
    >
      <p className="text-[13px] leading-[1.35] text-[#e9edef] sm:text-[14px]">{children}</p>
      <div className="mt-1 flex items-center justify-between gap-2">
        <span className="text-[11px] tabular-nums text-[#8696a0]">{time}</span>
      </div>
      {footer ? <div className="mt-1.5 flex justify-start">{footer}</div> : null}
    </div>
  );
}

export function OutgoingEmojiBubble({ emoji, time, className = '' }) {
  return (
    <div
      className={`inline-flex min-w-[72px] flex-col items-end rounded-lg bg-[#005c4b] px-3 pb-1.5 pt-2 shadow-[0_4px_14px_rgba(0,0,0,0.35)] ${className}`.trim()}
    >
      <span className="text-[40px] leading-none sm:text-[44px]" aria-hidden>
        {emoji}
      </span>
      <div className="mt-1 flex items-center gap-1 text-[11px] tabular-nums text-white/75">
        <span>{time}</span>
        <DoubleCheck />
      </div>
    </div>
  );
}
