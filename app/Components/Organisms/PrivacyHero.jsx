import PrivacyPhoneMockup from '../Molecules/privacy/PrivacyPhoneMockup';

export default function PrivacyHero() {
  return (
    <section
      className="bg-[#111b21] px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 md:px-8 lg:pb-28 lg:pt-12"
      aria-labelledby="privacy-hero-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-20">
        <div className="w-full max-w-xl flex-1 text-center lg:max-w-[560px] lg:flex-1 lg:text-start">
          <h1
            id="privacy-hero-heading"
            className="text-[42px] font-semibold leading-[1.06] tracking-tight text-white sm:text-[52px] md:text-[58px] lg:text-[64px]"
          >
            <span className="block text-white">Message</span>
            <span className="mt-1 block text-[#25D366]">privately</span>
          </h1>
          <p className="mx-auto mt-8 max-w-[540px] text-[17px] leading-[1.6] text-white/90 lg:mx-0 md:text-[18px]">
            Your privacy is our priority. With end-to-end encryption on WhatsApp, your personal messages, photos,
            calls and more stay between you and the people you choose, meaning not even WhatsApp can see them.
          </p>
        </div>

        <div className="flex w-full flex-1 justify-center lg:max-w-none lg:flex-1 lg:justify-end">
          <PrivacyPhoneMockup />
        </div>
      </div>
    </section>
  );
}
