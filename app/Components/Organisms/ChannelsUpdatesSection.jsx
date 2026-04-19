import PhoneChromeFrame from '../Molecules/PhoneChromeFrame';
import { UpdatesTabScreen } from '../Molecules/ChannelsPhoneMockups';

export default function ChannelsUpdatesSection() {
  return (
    <section
      className="border-b border-wa-muted/10 bg-[#f4f1ea] px-4 py-14 sm:px-6 md:py-20 lg:px-10"
      aria-labelledby="channels-updates-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <PhoneChromeFrame>
            <UpdatesTabScreen />
          </PhoneChromeFrame>
        </div>
        <div className="lg:max-w-xl">
          <h2 id="channels-updates-heading" className="text-[34px] font-semibold leading-[1.12] tracking-tight text-wa-bg sm:text-[40px] md:text-[44px]">
            Browse in a dedicated space
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-wa-bg/85 md:text-[18px]">
            Channels are in the Updates tab, away from your personal chats and calls, and channel notifications are muted by default.
          </p>
        </div>
      </div>
    </section>
  );
}
