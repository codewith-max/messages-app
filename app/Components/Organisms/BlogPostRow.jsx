import Link from 'next/link';
import BlogPostVisual from '../Molecules/blog/BlogPostVisual';
import BlogSocialShare from '../Molecules/blog/BlogSocialShare';

export default function BlogPostRow({ date, title, excerpt, href, visual, pills }) {
  return (
    <article className="border-b border-black/[0.06] py-12 last:border-b-0 sm:py-14">
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:px-8">
        <div className="min-w-0">
          <BlogPostVisual variant={visual} pills={pills} />
        </div>
        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <time className="text-[13px] text-[#667781]" dateTime={date}>
              {date}
            </time>
            <BlogSocialShare />
          </div>
          <h2 className="mt-4 text-[22px] font-bold leading-snug tracking-tight text-[#111b21] sm:text-[26px] lg:text-[28px]">
            <Link href={href} className="transition hover:text-[#128C7E]">
              {title}
            </Link>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3b4a54] sm:text-[16px]">{excerpt}</p>
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-[#25D366] transition hover:text-[#20bd5a]"
          >
            Learn more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
