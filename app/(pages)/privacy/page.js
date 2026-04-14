import Header from '../../Components/Organisms/Header';
import Footer from '../../Components/Organisms/Footer';
import PrivacyHero from '../../Components/Organisms/PrivacyHero';
import PrivacyInfoSection from '../../Components/Organisms/PrivacyInfoSection';
import PrivacySplitFeatures from '../../Components/Organisms/PrivacySplitFeatures';
import PrivacyExploreSection from '../../Components/Organisms/PrivacyExploreSection';
import PrivacyFaqSection from '../../Components/Organisms/PrivacyFaqSection';
import PrivacyDiscoverSection from '../../Components/Organisms/PrivacyDiscoverSection';
import PrivacyChatLockSection from '../../Components/Organisms/PrivacyChatLockSection';

export const metadata = {
  title: 'Privacy',
  description:
    'Your privacy matters. Learn how WhatsApp protects your messages with end-to-end encryption and controls you can customize.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#111b21]">
      <Header />
      <main className="flex-1">
        <PrivacyHero />
        <PrivacyInfoSection />
        <PrivacySplitFeatures />
        <PrivacyExploreSection />
        <PrivacyFaqSection />
        <PrivacyDiscoverSection />
        <PrivacyChatLockSection />
      </main>
      <Footer />
    </div>
  );
}
