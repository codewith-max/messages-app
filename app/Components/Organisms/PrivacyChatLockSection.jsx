import Link from 'next/link';
import PrivacyLockedChatsMockup from '../Molecules/privacy/PrivacyLockedChatsMockup';

export default function PrivacyChatLockSection() {
  return (
    <section
      className="bg-wa-bg px-4 pb-20 pt-8 sm:px-6 sm:pb-24 md:px-8 md:pt-10 lg:pb-28"
      aria-labelledby="privacy-chat-lock-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
        <div className="flex w-full flex-1 justify-center lg:w-auto lg:max-w-[52%] lg:justify-start">
          <PrivacyLockedChatsMockup />
        </div>

        {/* Right: copy */}
        <div className="w-full flex-1 text-center lg:max-w-[46%] lg:text-start">
          <h2
            id="privacy-chat-lock-heading"
            className="text-[38px] font-semibold leading-[1.12] tracking-tight text-white sm:text-[44px] md:text-[48px] lg:text-[52px]"
          >
            <span className="text-white">Chat </span>
            <span className="text-wa-muted">lock</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.65] text-white/90 lg:mx-0 md:text-[18px]">
            Password protect your most personal chats so you can help keep them private and secure. Locked chats
            will be hidden from your chats list in the Locked Chats folder, so you can prevent anyone else using
            your phone from seeing them.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="#learn-more-chat-lock"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-white underline decoration-wa-muted decoration-1 underline-offset-[6px] transition-colors hover:text-wa-muted"
            >
              Learn more
              <svg
                className="h-4 w-4 shrink-0 text-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
