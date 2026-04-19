export default function PhoneChromeFrame({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      <div className="relative rounded-[2.35rem] border-[11px] border-wa-muted bg-wa-muted shadow-[0_36px_72px_-16px_rgba(11,34,42,0.55)]">
        <div className="relative aspect-[9/18.2] overflow-hidden rounded-[1.65rem] bg-[#eef2f4]">{children}</div>
      </div>
    </div>
  );
}
