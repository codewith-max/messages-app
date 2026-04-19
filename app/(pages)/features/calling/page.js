import CallingAdvancedShowcase from '../../../Components/Organisms/CallingAdvancedShowcase';
import CallingDiscoverAutoplaySection from '../../../Components/Organisms/CallingDiscoverAutoplaySection';
import CallingEasilyHero from '../../../Components/Organisms/CallingEasilyHero';
import CallingFeaturesShowcase from '../../../Components/Organisms/CallingFeaturesShowcase';
import CallingKeepTalkingSection from '../../../Components/Organisms/CallingKeepTalkingSection';
import CallingNeedHelpSection from '../../../Components/Organisms/CallingNeedHelpSection';
import CallingTopHero from '../../../Components/Organisms/CallingTopHero';
import Footer from '../../../Components/Organisms/Footer';
import Header from '../../../Components/Organisms/Header';
import CallingGroupsAutoplaySection from '../../../Components/Organisms/CallingGroupsAutoplaySection';
import CallingDiscoverMoreSection from '../../../Components/Organisms/CallingDiscoverMoreSection';
import CallingMetaAiAutoplaySection from '../../../Components/Organisms/CallingMetaAiAutoplaySection';
import CallingGroupsHero from './CallingGroupsHero';

export const metadata = {
  title: 'Voice and Video Calls | WhatsApp Web Clone',
  description:
    'Catch up on voice or video calls with those who matter most. Your calls on WhatsApp are always end-to-end encrypted.',
};

export default function CallingFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CallingTopHero />
        <CallingEasilyHero />
        <CallingFeaturesShowcase />
        <CallingGroupsHero />
        <CallingGroupsAutoplaySection />
        <CallingDiscoverMoreSection />
        <CallingMetaAiAutoplaySection />
        <CallingAdvancedShowcase />
        <CallingKeepTalkingSection />
        <CallingNeedHelpSection />
        <CallingDiscoverAutoplaySection />
        <div id="download" className="scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
