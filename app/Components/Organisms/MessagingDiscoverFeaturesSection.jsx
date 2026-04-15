import { MESSAGING_DISCOVER_CARDS } from '../../content/messagingDiscoverCards';
import DiscoverFeatureCardsSection from './DiscoverFeatureCardsSection';

export default function MessagingDiscoverFeaturesSection() {
  return (
    <DiscoverFeatureCardsSection
      ariaLabelledBy="messaging-discover-heading"
      title="Discover more features"
      subtitle="Learn more about what you can do on WhatsApp."
      cards={MESSAGING_DISCOVER_CARDS}
      sectionClassName="mx-3 mb-6 mt-2 rounded-[2rem] bg-[#D9FDD3] px-4 py-12 sm:mx-4 sm:px-6 md:py-16 lg:mx-6 lg:px-10 lg:py-20 xl:mx-8"
      navSurfaceClass="bg-[#D9FDD3]"
      navHoverClass="hover:bg-[#111b21] hover:text-white"
      navRingOffsetClass="focus-visible:ring-offset-[#D9FDD3]"
    />
  );
}
