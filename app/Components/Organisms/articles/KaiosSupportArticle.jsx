import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function KaiosSupportArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Ending support for WhatsApp on KaiOS
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p className="rounded bg-[#f0f2f5] px-4 py-3 text-[15px] leading-6">
          WhatsApp is no longer available on devices running KaiOS.
        </p>
        <p className="mt-6">Our goal is to provide a private and reliable service for as many people as possible.</p>
        <p className="mt-4">
          To do so, we regularly review how WhatsApp is being used including our growing set of features that advance
          global private calling and messaging.
        </p>
        <p className="mt-4">
          WhatsApp support on devices that run KaiOS has ended. All impacted users were directly notified ahead of
          time.
        </p>
        <p className="mt-4">
          Users of KaiOS devices should copy their important information outside the device as there is no backup
          support or ability to restore from these devices.
        </p>
        <p className="mt-6">
          Learn more about{' '}
          <Link className={linkClass} href="/help-center/supported-operating-systems">
            supported operating systems
          </Link>{' '}
          on WhatsApp.
        </p>
      </div>
    </article>
  );
}
