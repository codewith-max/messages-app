'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function AboutWhatsappContactsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp contacts
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <div className="rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
          This feature is rolling out gradually and may not be available to you yet. In the meantime, we recommend
          keeping WhatsApp updated on your device so you can get the feature as soon as it&apos;s available.
        </div>

        <p className="mt-6">
          With WhatsApp contacts, you can save your contacts to your WhatsApp account so they can be restored and
          managed across your devices.
        </p>

        <section className="mt-6">
          <h2 className="text-[20px] font-bold leading-tight text-[#111b21]">When WhatsApp contacts is on:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              You&apos;ll have the option to choose which contacts to sync to your phone, which means you can choose to add
              or edit contacts that will only be saved on WhatsApp and not in your phone&apos;s address book. Here&apos;s no
              limit on the number of contacts you can save. Learn more about adding and editing contacts in the{' '}
              <Link className={linkClass} href="/help-center/how-to-add-edit-or-delete-a-contact?platform=android">
                help article
              </Link>
              .
            </li>
            <li>
              You can choose to create contacts that are specific to each WhatsApp account. For example, if you have
              multiple accounts on the same phone, such as a work account and personal account, you can customize
              WhatsApp contact lists for each account, rather than using the same phone contact list for multiple
              accounts.
            </li>
            <li>If you change phones or reinstall WhatsApp, all of your contacts will be automatically restored.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-[20px] font-bold leading-tight text-[#111b21]">When WhatsApp contacts is off:</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>Any contacts saved only to WhatsApp will be deleted.</li>
            <li>You&apos;ll only be able to create or edit contacts on WhatsApp using your phone&apos;s address book.</li>
            <li>You won&apos;t have the option to choose which contacts to sync to your phone or save to WhatsApp only.</li>
            <li>If you change phones or reinstall WhatsApp, your contacts won&apos;t automatically be restored.</li>
          </ul>
        </section>

        <p className="mt-6">
          You can turn off WhatsApp contacts in your account settings, which will delete your contacts saved to your
          WhatsApp account. To turn WhatsApp contacts on or off:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>iPhone: Tap Settings or your profile picture, then tap Privacy &gt; Contacts &gt; turn WhatsApp contacts on or off.</li>
          <li>Android: Tap menu &gt; Settings &gt; Privacy &gt; Contacts &gt; turn WhatsApp contacts on or off.</li>
        </ul>

        <p className="mt-5">
          If you delete your WhatsApp account, contacts saved with your WhatsApp account will also be deleted.
        </p>

        <p className="mt-4">
          You can find more technical details about how your contacts are securely stored and saved to your WhatsApp
          account in our{' '}
          <a className={linkClass} href="https://engineering.fb.com/" target="_blank" rel="noopener noreferrer">
            engineering blog
          </a>
          .
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-contact-upload">
                About contact upload
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-recover-lost-contacts">
                Recovering lost contacts in WhatsApp
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
