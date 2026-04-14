export default function HelpCenterSearchSection() {
  return (
    <div className="border-b border-black/[0.06] bg-white px-4 py-10 sm:px-8 sm:py-12">
      <h1 className="text-[28px] font-bold tracking-tight text-[#111b21] sm:text-[32px] md:text-[36px]">How can we help you?</h1>
      <label className="mt-6 block max-w-2xl">
        <span className="sr-only">Search help articles</span>
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#667781]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search help articles..."
            className="w-full rounded-2xl border-0 bg-[#f0f2f5] py-3.5 pl-12 pr-4 text-[15px] text-[#111b21] placeholder:text-[#667781] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-2 focus:ring-[#25D366]/40"
          />
        </div>
      </label>
    </div>
  );
}
