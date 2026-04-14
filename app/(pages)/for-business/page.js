import BusinessAnnouncementBar from '../../Components/Organisms/Business/BusinessAnnouncementBar';
import BusinessCtaBlock from '../../Components/Organisms/Business/BusinessCtaBlock';
import BusinessHero from '../../Components/Organisms/Business/BusinessHero';
import BusinessProductShowcase from '../../Components/Organisms/Business/BusinessProductShowcase';
import BusinessSiteFooter from '../../Components/Organisms/Business/BusinessSiteFooter';
import BusinessSiteHeader from '../../Components/Organisms/Business/BusinessSiteHeader';
import BusinessSuccessStories from '../../Components/Organisms/Business/BusinessSuccessStories';
import BusinessWhySection from '../../Components/Organisms/Business/BusinessWhySection';

export const metadata = {
  title: 'WhatsApp Business',
  description:
    'Engage audiences, accelerate sales and drive better customer support on WhatsApp Business — from small business app to platform at scale.',
};

export default function ForBusinessPage() {
  return (
    <>
      <BusinessSiteHeader />
      <BusinessAnnouncementBar />
      <main className="flex-1 bg-white">
        <BusinessHero />
        <BusinessProductShowcase />
        <BusinessWhySection />
        <BusinessSuccessStories />
        <BusinessCtaBlock />
        <div id="download" className="scroll-mt-28" />
      </main>
      <BusinessSiteFooter />
    </>
  );
}
