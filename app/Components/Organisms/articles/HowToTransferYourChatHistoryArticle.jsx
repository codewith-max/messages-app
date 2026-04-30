'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-transfer-your-chat-history';

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

function VideoCard({ title }) {
  return (
    <div className="mt-4 overflow-hidden rounded bg-[#25d366]">
      <div className="relative aspect-[16/9] w-full">
        <p className="absolute left-4 top-4 max-w-[70%] text-[38px] font-semibold leading-10 text-white">{title}</p>
        <span className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 text-white">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current">
            <path d="M8 6v12l10-6z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function AndroidContent() {
  return (
    <>
      <p>
        If your old and new phones are Android devices, you can transfer your full chat history directly over a local
        connection without using cloud restore.
      </p>
      <VideoCard title="How to transfer your chats to a new Android phone" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">What you need</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Both phones must use Android.</li>
          <li>Same phone number on old and new phone.</li>
          <li>Wi-Fi and location enabled on both phones.</li>
          <li>Enough battery or both phones connected to power.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Transfer your chat history</h2>
        <p className="mt-3 font-semibold text-[#111b21]">Old phone</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp and go to Settings &gt; Chats &gt; Transfer chats.</li>
          <li>Tap Start and allow required permissions.</li>
        </ol>
        <p className="mt-4 font-semibold text-[#111b21]">New phone</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Install WhatsApp and verify your phone number.</li>
          <li>When prompted, tap Transfer from old phone.</li>
          <li>Scan the QR code shown on the new phone using old phone.</li>
          <li>Keep both phones near each other until transfer completes.</li>
        </ol>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        If your old and new phones are iPhones, you can securely move chats using WhatsApp&apos;s chat transfer flow.
      </p>
      <VideoCard title="How to transfer your chats to a new iPhone" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">What you need</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Both phones use iOS.</li>
          <li>Same phone number on both phones.</li>
          <li>Wi-Fi and Bluetooth turned on.</li>
          <li>Both phones unlocked and close to each other.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Transfer your chat history</h2>
        <p className="mt-3 font-semibold text-[#111b21]">Old phone</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp and tap Settings &gt; Chats &gt; Transfer chats to iPhone.</li>
          <li>Tap Start.</li>
        </ol>
        <p className="mt-4 font-semibold text-[#111b21]">New phone</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Install and open WhatsApp.</li>
          <li>Verify your number and tap Continue.</li>
          <li>Scan the QR code shown on new phone using old phone.</li>
          <li>Wait for transfer to finish, then complete setup on new phone.</li>
        </ol>
      </section>
    </>
  );
}

export default function HowToTransferYourChatHistoryArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to transfer your chat history
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'ios' ? <IOSContent /> : <AndroidContent />}

        <div className="mt-8 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p className="font-semibold">Note</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Transfer moves chat history but may not include peer-to-peer payment messages.</li>
            <li>Keep both devices unlocked and close together during transfer.</li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-restore-your-chat-history?platform=android">
                How to restore your chat history
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-changing-phones">
                About changing phones
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
