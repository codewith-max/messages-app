import Link from 'next/link';
import HelpCenterArticlePageLayout from '../../../Components/Organisms/HelpCenterArticlePageLayout';
import AboutSeeingAdsOnWhatsappStatusArticle from '../../../Components/Organisms/articles/AboutSeeingAdsOnWhatsappStatusArticle';

export const metadata = {
  title: 'About seeing ads on WhatsApp Status | Help Center',
  description:
    'Learn how ads may appear in WhatsApp Status, what is labeled as an ad, and how your privacy is protected.',
};

function ArticleBackNav() {
  return (
    <div className="border-b border-black/[0.06] bg-white px-4 py-4 sm:px-8">
      <p className="text-[14px] text-[#667781]">
        <Link href="/help-center" className="font-semibold text-[#008069] hover:underline">
          Back to Help Center
        </Link>
      </p>
    </div>
  );
}

export default function AboutSeeingAdsOnWhatsappStatusPage() {
  return (
    <HelpCenterArticlePageLayout articleSearch={<ArticleBackNav />}>
      <AboutSeeingAdsOnWhatsappStatusArticle />
    </HelpCenterArticlePageLayout>
  );
}
