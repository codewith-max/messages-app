import { META_AI_DISCOVER_CARDS } from '../../content/meta-ai/discoverCards';
import DiscoverFeatureCardsSection from './DiscoverFeatureCardsSection';

export default function MetaAiDiscoverFeaturesSection() {
  return (
    <DiscoverFeatureCardsSection
      layoutVariant="cardOnBeige"
      ariaLabelledBy="meta-ai-discover-heading"
      title="Discover more WhatsApp features"
      subtitle="Stay connected in even more ways using WhatsApp, from private calls to secure group video calls, plus everyday updates with Status, and more."
      cards={META_AI_DISCOVER_CARDS}
      sectionClassName="bg-[#F7F8F2] px-4 pb-14 pt-6 sm:px-6 sm:pb-16 md:px-8 md:pb-20 lg:px-10"
      navSurfaceClass="bg-white"
      navHoverClass="hover:bg-wa-bg hover:text-white"
      navRingOffsetClass="focus-visible:ring-offset-white"
    />
  );
}
