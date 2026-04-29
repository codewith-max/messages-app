import HelpCenterArticlePageLayout from '../../Components/Organisms/HelpCenterArticlePageLayout';
import HelpCenterArticlesPanel from '../../Components/Organisms/HelpCenterArticlesPanel';
import HelpCenterSearchSection from '../../Components/Organisms/HelpCenterSearchSection';
import HelpCenterTopicCards from '../../Components/Organisms/HelpCenterTopicCards';

export const metadata = {
  title: 'Help Center',
  description: 'Find answers and learn how to use WhatsApp. Search help articles, popular topics, and safety tips.',
};

export default function HelpCenterPage() {
  return (
    <HelpCenterArticlePageLayout>
      <HelpCenterSearchSection />
      <HelpCenterTopicCards />
      <HelpCenterArticlesPanel />
    </HelpCenterArticlePageLayout>
  );
}
