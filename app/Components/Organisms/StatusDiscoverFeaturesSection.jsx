import { STATUS_DISCOVER_CARDS } from '../../content/statusPageContent';
import DiscoverFeatureCardsSection from './DiscoverFeatureCardsSection';

export default function StatusDiscoverFeaturesSection() {
  return (
    <DiscoverFeatureCardsSection
      ariaLabelledBy="status-discover-heading"
      title="Discover more features"
      subtitle="Learn more about what you can do on WhatsApp."
      cards={STATUS_DISCOVER_CARDS}
      sectionClassName="mb-6 mt-2 bg-[#FCF5EB] px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20"
      navSurfaceClass="bg-white"
      navHoverClass="hover:bg-wa-bg hover:text-white"
      navRingOffsetClass="focus-visible:ring-offset-white"
      layoutVariant="cardOnBeige"
      imageAspectClassName="aspect-[4/5]"
      carouselCardClassName="rounded-[26px] w-[min(88vw,22rem)] sm:w-[min(85vw,24rem)]"
    />
  );
}
