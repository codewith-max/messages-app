import { MESSAGING_DISCOVER_CARDS } from '../../content/messagingDiscoverCards';
import DiscoverFeatureCardsSection from './DiscoverFeatureCardsSection';

export default function MessagingDiscoverFeaturesSection() {
  return (
    <DiscoverFeatureCardsSection
      ariaLabelledBy="messaging-discover-heading"
      title="Discover more features"
      subtitle="Learn more about what you can do on WhatsApp."
      cards={MESSAGING_DISCOVER_CARDS}
      sectionClassName="mb-6 mt-2 bg-[#D9FDD3] px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20"
      navSurfaceClass="bg-[#D9FDD3]"
      navHoverClass="hover:bg-wa-bg hover:text-white"
      navRingOffsetClass="focus-visible:ring-offset-[#D9FDD3]"
    />
  );
}
