import Header from '../../Components/Organisms/Header';
import PrivacyHero from '../../Components/Organisms/PrivacyHero';
import PrivacyInfoSection from '../../Components/Organisms/PrivacyInfoSection';
import PrivacyChatLockSection from '../../Components/Organisms/PrivacyChatLockSection';

export const metadata = {
  title: 'Privacy | WhatsApp Web Clone',
  description:
    'Your privacy is our priority. With end-to-end encryption on WhatsApp, your personal messages stay between you and the people you choose.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#111b21]">
      <Header />
      <main className="flex-1">
        <PrivacyHero />
        <PrivacyInfoSection />
        <PrivacyChatLockSection />
      </main>
    </div>
  );
}
