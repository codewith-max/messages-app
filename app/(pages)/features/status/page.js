import Footer from '../../../Components/Organisms/Footer';
import Header from '../../../Components/Organisms/Header';
import StatusConnectSection from '../../../Components/Organisms/StatusConnectSection';
import StatusDiscoverFeaturesSection from '../../../Components/Organisms/StatusDiscoverFeaturesSection';
import StatusFloatingAvatarsSection from '../../../Components/Organisms/StatusFloatingAvatarsSection';
import StatusHero from '../../../Components/Organisms/StatusHero';
import StatusNeedHelpSection from '../../../Components/Organisms/StatusNeedHelpSection';
import StatusPrivacyControlSection from '../../../Components/Organisms/StatusPrivacyControlSection';
import StatusShareEverydaySection from '../../../Components/Organisms/StatusShareEverydaySection';
import StatusStoryCardsSection from '../../../Components/Organisms/StatusStoryCardsSection';

export const metadata = {
  title: 'Status | WhatsApp Web Clone',
  description:
    'Share photos, videos, voice notes, and text on WhatsApp Status — with stickers, GIFs, and updates that disappear after 24 hours.',
};

export default function StatusFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <StatusHero />
        <StatusFloatingAvatarsSection />
        <StatusShareEverydaySection />
        <StatusConnectSection />
        <StatusPrivacyControlSection />
        <StatusStoryCardsSection />
        <StatusNeedHelpSection />
        <StatusDiscoverFeaturesSection />
        <div id="download" className="scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
