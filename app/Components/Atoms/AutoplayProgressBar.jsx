/** Thin fill bar (0–1) for FAQ-style autoplay sections */

export default function AutoplayProgressBar({ progress, paused }) {
  const pct = Math.min(1, Math.max(0, progress)) * 100;
  return (
    <div className="mb-4 h-[3px] w-full overflow-hidden rounded-full bg-[#111b21]/10">
      <div
        className="h-full rounded-full bg-[#25D366]"
        style={{
          width: `${pct}%`,
          transition: paused ? 'width 80ms linear' : undefined,
        }}
      />
    </div>
  );
}
