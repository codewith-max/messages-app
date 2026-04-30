'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-use-lists';

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

export default function HowToUseListsArticle() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') === 'ios' ? 'ios' : 'android';
  const isAndroid = platform === 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use lists
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Lists let you organize chats so you can quickly filter your chat view. You can create, edit, reorder, and
          remove lists from your Chats tab.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create a new list</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Chats and scroll to your list row.</li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">New list</span>.
            </li>
            <li>Enter a name for your list and add people or groups.</li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">{isAndroid ? 'Save' : 'Done'}</span>.
            </li>
          </ol>
          <p className="mt-3">
            Alternatively, go to <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Lists</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">New list</span>.
          </p>
          <div className="mt-4 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
            <p className="font-semibold">Note:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Your new list appears in your Chats tab.</li>
              <li>You can edit and reorder lists from list settings.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add or remove chats from list</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open and hold a chat.</li>
            <li>
              Tap <span className="font-semibold text-[#111b21]">Add to list</span>.
            </li>
            <li>Select the list you want, then confirm.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Edit list</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Chats and scroll to your list row.</li>
            <li>Tap the list you want to edit.</li>
            <li>Tap Edit.</li>
            <li>Update name, people, or groups.</li>
            <li>Tap {isAndroid ? 'Save' : 'Done'}.</li>
          </ol>
          <p className="mt-3">
            Alternatively, go to <span className="font-semibold text-[#111b21]">Settings</span> &gt;{' '}
            <span className="font-semibold text-[#111b21]">Lists</span> and select your list.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete list</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Chats and select the list you want to delete.</li>
            <li>Tap list info.</li>
            <li>Tap Delete, then confirm.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">View all lists</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Open Chats and scroll to your list row.</li>
            <li>Tap More lists.</li>
            <li>Tap Manage lists.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Reorder lists</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Go to Settings &gt; Lists.</li>
            <li>Drag a list into your preferred order.</li>
            <li>Tap {isAndroid ? 'Save' : 'Done'}.</li>
          </ol>
          <p className="mt-3">
            Learn more about list types and behavior in <Link className={linkClass} href="/help-center/about-lists">about lists</Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-lists">
                About lists
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-edit-favorites">
                How to edit favorites
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
