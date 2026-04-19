import { CHANNELS_DISCOVER_CARDS } from '../../content/channelsDiscoverCards';
import DiscoverFeatureCardsSection from './DiscoverFeatureCardsSection';

export default function ChannelsDiscoverSection() {
  return (
    <DiscoverFeatureCardsSection
      ariaLabelledBy="channels-discover-heading"
      title="Discover more WhatsApp features"
      subtitle="Learn more about what you can do on WhatsApp."
      cards={CHANNELS_DISCOVER_CARDS}
      layoutVariant="cardOnBeige"
      imageAspectClassName="aspect-[4/5]"
      carouselCardClassName="w-[min(88vw,16rem)] rounded-[20px] sm:w-[min(85vw,17rem)] md:w-[min(85vw,18rem)]"
      sectionClassName="bg-[#f4f1ea] px-0 pb-4 pt-8 sm:pb-6 sm:pt-10 md:pt-12"
      navSurfaceClass="bg-white"
      navHoverClass="hover:bg-wa-bg hover:text-white"
      navRingOffsetClass="focus-visible:ring-offset-white"
      showCarouselNav={false}
    />
  );
}
