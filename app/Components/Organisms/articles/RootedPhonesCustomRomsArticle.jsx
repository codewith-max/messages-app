import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

export default function RootedPhonesCustomRomsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About rooted phones and custom ROMs
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <p className="mb-4 inline-flex items-center gap-2 text-[15px] font-semibold text-[#008069]">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.2 8.1a5 5 0 019.6 0h1.7a1 1 0 010 2h-.9v5.9a1.8 1.8 0 01-1.8 1.8h-.7v2.1a1 1 0 11-2 0v-2.1h-2.2v2.1a1 1 0 11-2 0v-2.1h-.7A1.8 1.8 0 016.4 16v-5.9h-.9a1 1 0 010-2zm2.2-.1a.8.8 0 10-.8-.8.8.8 0 00.8.8zm5.2 0a.8.8 0 10-.8-.8.8.8 0 00.8.8z" />
        </svg>
        Android
      </p>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Custom ROMs and rooted phones aren&apos;t supported by WhatsApp. There are too many variations in these
          customizations for us to maintain a working product. Furthermore, custom ROMs and rooting don&apos;t allow
          the WhatsApp security model to function as intended. If you&apos;re using a custom ROM or rooted phone, other
          apps might be able to read your messages despite the end-to-end encryption.
        </p>
        <p className="mt-4">
          For the best WhatsApp experience, please use a stock ROM and remove root. Contact your phone&apos;s
          manufacturer for specific instructions on how to unroot.
        </p>
      </div>
    </article>
  );
}
