import Header from '../../../Components/Organisms/Header';
import Footer from '../../../Components/Organisms/Footer';
import MetaAiHero from '../../../Components/Organisms/MetaAiHero';
import MetaAiIntroSection from '../../../Components/Organisms/MetaAiIntroSection';
import MetaAiAskAnythingSection from '../../../Components/Organisms/MetaAiAskAnythingSection';
import MetaAiAutoplayShowcaseSection from '../../../Components/features/meta-ai/AutoplayShowcaseSection';
import MetaAiPrivacySection from '../../../Components/Organisms/MetaAiPrivacySection';
import MetaAiNeedHelpSection from '../../../Components/Organisms/MetaAiNeedHelpSection';
import MetaAiDiscoverFeaturesSection from '../../../Components/Organisms/MetaAiDiscoverFeaturesSection';

export const metadata = {
  title: 'Meta AI in WhatsApp | WhatsApp Web Clone',
  description:
    'Do more in WhatsApp with Meta AI — get answers, ideas, and help in your chats with the privacy you expect from WhatsApp.',
};

export default function MetaAiFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F7F8F2]">
        <MetaAiHero />
        <MetaAiIntroSection />
        <MetaAiAskAnythingSection />
        <MetaAiAutoplayShowcaseSection
          surfaceClassName="border-y border-[#ebe7e0] bg-[#ffffff]"
          focusRingOffsetClass="focus-visible:ring-offset-[#ffffff]"
        />
        <MetaAiPrivacySection />
        <MetaAiNeedHelpSection />
        <MetaAiDiscoverFeaturesSection />
        <div id="download" className="scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
