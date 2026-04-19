import HelpCenterArticlesPanel from '../../Components/Organisms/HelpCenterArticlesPanel';
import HelpCenterHeader from '../../Components/Organisms/HelpCenterHeader';
import HelpCenterSearchSection from '../../Components/Organisms/HelpCenterSearchSection';
import HelpCenterSidebar from '../../Components/Organisms/HelpCenterSidebar';
import HelpCenterSiteFooter from '../../Components/Organisms/HelpCenterSiteFooter';
import HelpCenterTopicCards from '../../Components/Organisms/HelpCenterTopicCards';

export const metadata = {
  title: 'Help Center',
  description: 'Find answers and learn how to use WhatsApp. Search help articles, popular topics, and safety tips.',
};

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white text-wa-bg">
      <HelpCenterHeader />
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row md:items-stretch">
        <HelpCenterSidebar />
        <div className="min-w-0 flex-1 bg-white">
          <HelpCenterSearchSection />
          <HelpCenterTopicCards />
          <HelpCenterArticlesPanel />
          <HelpCenterSiteFooter />
        </div>
      </div>
    </div>
  );
}
