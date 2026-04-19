import Header from '../../../Components/Organisms/Header';
import Footer from '../../../Components/Organisms/Footer';
import MessagingHero from '../../../Components/Organisms/MessagingHero';
import MessagingOrganizeShowcase from '../../../Components/Organisms/MessagingOrganizeShowcase';
import MessagingExpressShowcase from '../../../Components/Organisms/MessagingExpressShowcase';
import MessagingKeepConversationSection from '../../../Components/Organisms/MessagingKeepConversationSection';
import MessagingShareCardsSection from '../../../Components/Organisms/MessagingShareCardsSection';
import MessagingHelpShowcase from '../../../Components/Organisms/MessagingHelpShowcase';
import MessagingFaqListSection from '../../../Components/Organisms/MessagingFaqListSection';
import MessagingDiscoverFeaturesSection from '../../../Components/Organisms/MessagingDiscoverFeaturesSection';

export const metadata = {
  title: 'Messaging | WhatsApp Web Clone',
  description:
    'Connect your way on WhatsApp — expressive, fun conversations on any device, protected by end-to-end encryption.',
};

export default function MessagingFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MessagingHero />
        <MessagingOrganizeShowcase />
        <MessagingShareCardsSection />
        <MessagingExpressShowcase />
        <MessagingKeepConversationSection />
        <MessagingHelpShowcase />
        <MessagingFaqListSection />
        <MessagingDiscoverFeaturesSection />
        <div id="download" className="scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
