'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutContactUploadArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About contact upload
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Contact upload is an optional feature that helps you create and manage your contacts on WhatsApp.
        </p>

        <p className="mt-4">Using contact upload:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>You can choose to sync your device&apos;s address book to discover which of your contacts also use WhatsApp.</li>
          <li>You can also save contacts to your WhatsApp account so they can be restored and managed across your devices.</li>
        </ul>

        <p className="mt-4">
          We don&apos;t share your contacts with Meta. When you give us permission, we access your device&apos;s contacts to make
          messaging fast and reliable, and we don&apos;t share your contacts lists with the other apps Meta offers.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">
            Syncing your device address book to discover which of your contacts are also WhatsApp users
          </h2>
          <p className="mt-3">
            When you sync your device address book, this allows us to check which of your contacts are also WhatsApp
            users and update your WhatsApp contact list when your contacts who aren&apos;t using WhatsApp yet sign up later.
            WhatsApp will access and upload the phone numbers in your address book typically daily, but this depends on
            various factors, including how often a user uses WhatsApp.
          </p>
          <p className="mt-3">
            If any of your contacts in your device address book aren&apos;t yet using WhatsApp, we protect their privacy by
            managing the phone number in a way that is designed to prevent those contacts from being identified by
            WhatsApp. We do this by creating a cryptographic hash value of their phone number, and then delete the
            number. Each cryptographic hash value is stored on WhatsApp&apos;s servers, linked to the WhatsApp users who
            synced the corresponding phone numbers before they were hashed so that we can more efficiently connect you
            with these contacts when they join WhatsApp.
          </p>
          <p className="mt-3">
            Separately, we also create a cryptographic hash representation of the phone numbers in your device address
            book which we use to detect and combat misuse of syncing device contacts. For example, we assess the hashes
            to determine whether there have been unusual changes in the address book. This does not involve tracking or
            comparing individual phone numbers.
          </p>
          <p className="mt-3">You can control the contact upload feature from your device-based settings.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">
            Saving contacts to your WhatsApp account so that they can be restored and managed across your devices
          </h2>
          <p className="mt-3">
            You can choose to save contacts to your WhatsApp account, which will securely store the names and phone
            numbers of your contacts who already use WhatsApp. This means your contact names and phone numbers can then
            be automatically restored to your WhatsApp account, including your linked devices, if you switch or reinstall
            WhatsApp. We do not include the names and phone numbers of any of your contacts who do not use WhatsApp.
          </p>
          <p className="mt-3">
            You can choose which contacts to save only to WhatsApp or sync to your device. When adding a new contact for
            the first time, the sync option will be off by default and won&apos;t be automatically synced to your device. You
            can sync the contact to your device by turning on the control and your selection will remain in place when
            adding future contacts until you change it. Contacts synced from your device address book will remain saved
            to your account, even if you turn off address book syncing later.
          </p>
          <p className="mt-3">
            You can always choose to delete individual contacts or turn off saving contacts to your WhatsApp account in
            WhatsApp Settings &gt; Privacy &gt; Contacts, which will delete contacts saved to your WhatsApp account,
            including contacts synced from your device address book. If you delete your WhatsApp account, your saved
            contacts will also be deleted. To avoid losing contacts saved only to your WhatsApp account, you can choose
            to save them to your device address book.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-whatsapp-responsibly">
                How to use WhatsApp responsibly
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/about-whatsapp-contacts">
                About WhatsApp contacts
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
