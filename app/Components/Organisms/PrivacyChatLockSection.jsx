import Image from 'next/image';
import Link from 'next/link';

const IMAGE_SRC = '/image/banner14.webp';

export default function PrivacyChatLockSection() {
  return (
    <section
      className="bg-[#111b21] px-4 pb-20 pt-8 sm:px-6 sm:pb-24 md:px-8 md:pt-10 lg:pb-28"
      aria-labelledby="privacy-chat-lock-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
        {/* Left: phone — aligned like WhatsApp privacy (mockup in soft dark panel) */}
        <div className="flex w-full flex-1 justify-center lg:w-auto lg:max-w-[52%] lg:justify-start">
          <div className="w-full max-w-[min(100%,400px)] sm:max-w-[440px] lg:max-w-[460px]">
            <div className="rounded-[2rem] bg-[#1a2329] p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] sm:rounded-[2.25rem] sm:p-5 md:p-6">
              {/* Zoom + clip from top-left to crop Meta AI orb / FAB baked into banner14.webp */}
              <div className="relative aspect-[9/17.2] w-full max-h-[min(78vh,640px)] overflow-hidden rounded-[1.375rem] bg-[#0d1216] sm:rounded-[1.5rem]">
                <Image
                  src={IMAGE_SRC}
                  alt="Locked chats list on WhatsApp"
                  fill
                  sizes="(max-width: 1024px) min(100vw - 2.5rem, 440px), 460px"
                  className="object-cover object-left object-top origin-top-left scale-[1.14] sm:scale-[1.11]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="w-full flex-1 text-center lg:max-w-[46%] lg:text-start">
          <h2
            id="privacy-chat-lock-heading"
            className="text-[38px] font-semibold leading-[1.12] tracking-tight text-white sm:text-[44px] md:text-[48px] lg:text-[52px]"
          >
            <span className="text-white">Chat </span>
            <span className="text-[#25D366]">lock</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.65] text-white/90 lg:mx-0 md:text-[18px]">
            Password protect your most personal chats so you can help keep them private and secure. Locked chats
            will be hidden from your chats list in the Locked Chats folder, so you can prevent anyone else using
            your phone from seeing them.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="#learn-more-chat-lock"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-white underline decoration-[#25D366] decoration-1 underline-offset-[6px] transition-colors hover:text-[#25D366]"
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
