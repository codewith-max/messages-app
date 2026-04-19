import Link from 'next/link';
import { ChannelHeroVisual } from '../Molecules/ChannelsPhoneMockups';

export default function ChannelsFollowHero() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-[#fbf9f5] px-4 py-14 sm:px-6 md:py-20 lg:px-10"
      aria-labelledby="channels-follow-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-1 lg:max-w-xl">
          <h2 id="channels-follow-heading" className="text-[34px] font-semibold leading-[1.12] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px]">
            Follow what matters with Channels
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-wa-bg/88 md:text-[18px]">
            WhatsApp Channels is a simple and private way to get useful updates from the people and organizations you care about.
          </p>
          <Link
            href="#explore-channels"
            className="mt-8 inline-flex items-center gap-1.5 text-[16px] font-semibold text-wa-muted transition hover:text-wa-muted"
          >
            Explore Channels
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="order-2">
          <ChannelHeroVisual />
        </div>
      </div>
    </section>
  );
}
