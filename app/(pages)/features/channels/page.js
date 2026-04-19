import ChannelsCreateSection from '../../../Components/Organisms/ChannelsCreateSection';
import ChannelsDiscoverSection from '../../../Components/Organisms/ChannelsDiscoverSection';
import ChannelsExploreDirectorySection from '../../../Components/Organisms/ChannelsExploreDirectorySection';
import ChannelsFollowHero from '../../../Components/Organisms/ChannelsFollowHero';
import ChannelsIntroBand from '../../../Components/Organisms/ChannelsIntroBand';
import ChannelsNeedHelpSection from '../../../Components/Organisms/ChannelsNeedHelpSection';
import ChannelsPrivacySection from '../../../Components/Organisms/ChannelsPrivacySection';
import ChannelsUpdatesSection from '../../../Components/Organisms/ChannelsUpdatesSection';
import Footer from '../../../Components/Organisms/Footer';
import Header from '../../../Components/Organisms/Header';

export const metadata = {
  title: 'Channels | WhatsApp Web Clone',
  description:
    'Follow what matters with WhatsApp Channels — get updates from people and organizations you care about, privately.',
};

export default function ChannelsFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ChannelsIntroBand />
        <ChannelsFollowHero />
        <ChannelsExploreDirectorySection />
        <ChannelsPrivacySection />
        <ChannelsUpdatesSection />
        <ChannelsCreateSection />
        <ChannelsNeedHelpSection />
        <ChannelsDiscoverSection />
        <div id="download" className="scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
