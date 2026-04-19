import Link from 'next/link';
import PhoneChromeFrame from '../Molecules/PhoneChromeFrame';
import { ExploreChannelsScreen } from '../Molecules/ChannelsPhoneMockups';

export default function ChannelsExploreDirectorySection() {
  return (
    <section
      id="explore-channels"
      className="scroll-mt-24 border-b border-wa-muted/10 bg-[#f4f2eb] px-4 py-14 sm:px-6 md:py-20 lg:px-10"
      aria-labelledby="channels-directory-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <PhoneChromeFrame>
            <ExploreChannelsScreen />
          </PhoneChromeFrame>
        </div>
        <div>
          <h2 id="channels-directory-heading" className="text-[34px] font-semibold leading-[1.12] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px]">
            Stay up-to-date on your favorites
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-wa-bg/85 md:text-[18px]">
            Explore the Channels Directory and follow channels on topics you&apos;re interested in, whether it&apos;s the latest on your favorite sports team or daily specials from your local bakery. Get exclusive access to more of what you love by subscribing to your favorite channels*.
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-[#667781]">* This feature may not be available to all users.</p>
          <Link
            href="/help-center"
            className="mt-6 inline-flex items-center gap-1.5 text-[16px] font-semibold text-wa-muted transition hover:text-wa-muted"
          >
            Learn more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
