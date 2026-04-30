'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-turn-off-whatsapp-in-your-device-backup';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[180px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link key={tab.key} className={getClass(tab.key)} href={`${BASE}?platform=${tab.key}`} role="tab" aria-selected={platform === tab.key}>
          {tab.label}
          {platform === tab.key ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

function AndroidContent() {
  return (
    <>
      <p>
        WhatsApp chat backup can be included in your Android device backup. If you don&apos;t want WhatsApp data in your
        device backup, you can turn it off from Android backup settings.
      </p>
      <p className="mt-4 font-semibold text-[#111b21]">To turn off:</p>
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>Open phone Settings.</li>
        <li>Tap Google &gt; Backup.</li>
        <li>Tap App data backup.</li>
        <li>Turn off WhatsApp.</li>
      </ol>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        WhatsApp data can be included in iCloud device backup. You can exclude it from iCloud backup if you only want
        WhatsApp backups managed inside WhatsApp.
      </p>
      <p className="mt-4 font-semibold text-[#111b21]">To turn off:</p>
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>Open iPhone Settings.</li>
        <li>Tap your name &gt; iCloud.</li>
        <li>Tap Manage Storage &gt; Backups &gt; your device.</li>
        <li>Turn off WhatsApp from app list.</li>
      </ol>
    </>
  );
}

export default function HowToTurnOffWhatsappInYourDeviceBackupArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to turn off WhatsApp in your device backup
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'ios' ? <IOSContent /> : <AndroidContent />}

        <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p className="font-semibold">Notes</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Turning off WhatsApp in device backup doesn&apos;t delete existing cloud backup immediately.</li>
            <li>WhatsApp managed backups can still be configured from WhatsApp chat backup settings.</li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-back-up-your-chat-history?platform=android">
                How to back up your chat history
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-restore-your-chat-history?platform=android">
                How to restore your chat history
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
