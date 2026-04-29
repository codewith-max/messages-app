import HelpCenterArticleFeedback from '../Molecules/help-center/HelpCenterArticleFeedback';
import HelpCenterHeader from './HelpCenterHeader';
import HelpCenterSidebar from './HelpCenterSidebar';
import HelpCenterSiteFooter from './HelpCenterSiteFooter';

/**
 * Standard docs layout for help articles: fills viewport height, keeps footer at the bottom,
 * and places the footer full-width below sidebar + content (fixes gray footer bar not spanning the full row).
 */
export default function HelpCenterArticlePageLayout({ articleSearch = null, children }) {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-clip bg-white text-wa-bg">
      <HelpCenterHeader />
      <div className="ml-0 mr-auto flex w-full flex-1 flex-col md:flex-row md:items-stretch">
        <HelpCenterSidebar />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white">
          <div className="mx-auto flex w-full min-w-0 flex-1 flex-col px-4 md:px-6 xl:px-10 2xl:px-75">
            {articleSearch}
            <main className="min-w-0">{children}</main>
          </div>
          <HelpCenterSiteFooter />
        </div>
      </div>
      <HelpCenterArticleFeedback />
    </div>
  );
}
