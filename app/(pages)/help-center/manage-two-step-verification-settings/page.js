import Link from 'next/link';
import HelpCenterArticlePageLayout from '../../../Components/Organisms/HelpCenterArticlePageLayout';
import ManageTwoStepVerificationSettingsArticle from '../../../Components/Organisms/articles/ManageTwoStepVerificationSettingsArticle';

export const metadata = {
  title: 'How to manage two-step verification settings | Help Center',
  description: 'Learn how to enable, disable, and update two-step verification settings.',
};

function ArticleSearchRow() {
  return (
    <div className="border-b border-black/[0.06] bg-white px-4 py-5 sm:px-8">
      <label className="block max-w-2xl">
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
            className="w-full rounded-2xl border-0 bg-[#eef2f4] py-3 pl-12 pr-4 text-[15px] text-wa-bg placeholder:text-[#667781] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-2 focus:ring-wa-muted/40"
          />
        </div>
        <p className="mt-2 text-[14px] text-[#667781]">
          <Link href="/help-center" className="font-semibold text-[#008069] hover:underline">
            Back to Help Center
          </Link>
        </p>
      </label>
    </div>
  );
}

export default function ManageTwoStepVerificationSettingsPage() {
  return (
        <HelpCenterArticlePageLayout articleSearch={<ArticleSearchRow />}>
      <ManageTwoStepVerificationSettingsArticle />
    </HelpCenterArticlePageLayout>
  );
}
