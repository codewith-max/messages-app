import Header from '../../../Components/Organisms/Header';
import CallingFeaturesShowcase from '../../../Components/Organisms/CallingFeaturesShowcase';
import CallingTopHero from '../../../Components/Organisms/CallingTopHero';
import SplitFeature from '../../../Components/Organisms/SplitFeature';
import { CALLING_PAGE } from '../../../content/featureLandingPages';

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
        <CallingFeaturesShowcase />
        <div id="download" className="scroll-mt-24">
          <SplitFeature {...CALLING_PAGE} />
        </div>
      </main>
    </>
  );
}
