'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutListsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold uppercase leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About lists
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Lists are shortcuts in the Chats tab that help you quickly open specific conversations by category. You can
          filter chats using default lists or custom lists.
        </p>

        <p className="mt-4">You can use lists to:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>
            Add the default list next to your chat list to quickly view selected chats.
          </li>
          <li>
            See unread, favorites, and group conversations from one place.
          </li>
          <li>
            Reorder lists from your Chats tab.
          </li>
          <li>
            Create your own custom list by choosing people or groups.
          </li>
        </ul>

        <p className="mt-4">
          When selected, a list filters your chat view so you can focus on messages from the people, groups, or
          categories you care about most.
        </p>

        <div className="mt-5 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          <p>
            <span className="font-semibold">Note:</span>
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Chats can be included in multiple lists at the same time.</li>
            <li>Lists that you remove from the Chats tab stay available in list settings for later use.</li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create custom lists</h2>
          <p className="mt-3">
            You can create custom lists for yourself, such as work, family, or school groups. To create your own list,
            go to the Chats tab and tap <span className="font-semibold text-[#111b21]">New list</span>.
          </p>
          <p className="mt-3">
            Learn how to <Link className={linkClass} href="/help-center/how-to-use-lists">use lists</Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-lists">
                How to use lists
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-add-favorites-from-the-chats-tab">
                How to add favorites from the Chats tab
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-edit-favorites-from-the-chats-tab">
                How to edit favorites from the Chats tab
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
