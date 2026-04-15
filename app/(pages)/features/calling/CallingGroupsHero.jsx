import Link from 'next/link';
import PhoneGroupCallMockup from '../../../Components/Molecules/PhoneGroupCallMockup';

export default function CallingGroupsHero() {
  return (
    <section
      className="border-b border-[#e8e4dc] bg-[#FBF9F4] px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 md:px-8 lg:pb-16 lg:pt-14"
      aria-labelledby="calling-groups-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="w-full flex-1 text-center md:text-start">
          <h2
            id="calling-groups-heading"
            className="text-[34px] font-semibold leading-[1.12] tracking-tight text-[#111b21] sm:text-[40px] md:text-[44px] lg:text-[48px]"
          >
            Calling for groups
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-[17px] leading-[1.55] text-[#111b21]/88 md:mx-0 md:text-[18px]">
            Unlimited duration for your group calls. Get more done and have fun with your groups of up to 32 people.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="#download"
              className="inline-flex items-center rounded-full bg-[#25D366] px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#20bd5c] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FBF9F4]"
            >
              <span>Download</span>
              <svg
                className="ms-2 h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center">
          <PhoneGroupCallMockup />
        </div>
      </div>
    </section>
  );
}
