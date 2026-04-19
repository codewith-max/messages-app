export default function BlogPageHero() {
  return (
    <section className="border-b border-black/[0.06] bg-white px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="text-center text-[40px] font-bold tracking-tight text-wa-bg sm:text-[48px] lg:flex-1 lg:text-[56px]">
          WhatsApp Blog
        </h1>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center lg:shrink-0">
          <span className="text-[15px] text-wa-bg">Search blog:</span>
          <label className="relative flex min-w-[200px] max-w-md flex-1 items-center border-b-2 border-wa-bg pb-1 lg:min-w-[260px]">
            <span className="sr-only">Search blog posts</span>
            <input
              type="search"
              placeholder=""
              className="w-full bg-transparent pr-8 text-[15px] text-wa-bg outline-none placeholder:text-transparent"
            />
            <svg
              className="pointer-events-none absolute right-0 h-5 w-5 text-[#667781]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </label>
        </div>
      </div>
    </section>
  );
}
