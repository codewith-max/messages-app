'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToRecoverLostContactsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to recover lost contacts
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          If you&apos;ve turned on{' '}
          <Link className={linkClass} href="/help-center/contact-names-missing?platform=android">
            WhatsApp contacts
          </Link>
          , your contacts will be saved to your WhatsApp account and will be restored automatically if you change
          phones or reinstall WhatsApp.
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>If your contacts fail to restore, try deleting WhatsApp and reinstalling it again.</li>
          <li>
            In some instances, your contacts may be restored after a delay for additional security. You can still add
            or edit your contacts on your device, but the changes won&apos;t be stored and saved to your WhatsApp account
            until your previous contacts are restored.
          </li>
          <li>
            Your privacy settings will use the contact list saved to your WhatsApp account. For example, if you chose
            only for your contacts to see your Profile picture, all contacts saved to your WhatsApp account can still
            see your profile picture, even if they haven&apos;t been restored in your contact list yet.
          </li>
        </ul>

        <p className="mt-4">
          If you&apos;ve turned off WhatsApp contacts, you can only restore contacts if you&apos;ve previously made a copy of
          them using your phone&apos;s features. If you give WhatsApp permission to access your device&apos;s address book,
          WhatsApp will add any phone contacts with an account to your WhatsApp contact list.
        </p>

        <p className="mt-4">
          <span className="font-semibold text-[#111b21]">Note:</span> If you unblock a contact or phone number which
          wasn&apos;t previously saved in your device&apos;s address book, you won&apos;t be able to restore it to your device.
        </p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/contact-names-missing?platform=android">
                Contact names missing
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/cant-see-a-contacts-profile-information?platform=android">
                Can&apos;t see a contact&apos;s profile information
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
