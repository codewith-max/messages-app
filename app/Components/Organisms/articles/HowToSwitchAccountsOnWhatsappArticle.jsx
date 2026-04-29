'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass = 'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/how-to-switch-accounts-on-whatsapp';

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  const isActive = (key) => platform === key;

  return (
    <div className="mb-5 flex w-full max-w-[420px] border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {['android', 'ios', 'web', 'mac-desktop', 'windows-desktop'].map((key) => (
        <Link key={key} className={getClass(key)} href={`${BASE}?platform=${key}`} role="tab" aria-selected={platform === key}>
          {key === 'mac-desktop' ? 'Mac' : key === 'windows-desktop' ? 'Windows' : key === 'ios' ? 'iOS' : key === 'web' ? 'Web' : 'Android'}
          {isActive(key) ? <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden /> : null}
        </Link>
      ))}
    </div>
  );
}

export default function HowToSwitchAccountsOnWhatsappArticle() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('platform');
  const platform = ['android', 'ios', 'web', 'mac-desktop', 'windows-desktop'].includes(raw) ? raw : 'android';
  const isAndroid = platform === 'android';
  const isIos = platform === 'ios';
  const isLinkedDeviceTab = ['web', 'mac-desktop', 'windows-desktop'].includes(platform);

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to switch accounts on WhatsApp
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {isLinkedDeviceTab ? (
          <section className="mt-2">
            <div className="rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
              <span className="font-semibold text-[#111b21]">Note:</span> Some features may not be available to you yet.
              In the meantime, keep WhatsApp updated to access new features as soon as they&apos;re available.
            </div>

            <p className="mt-5">
              WhatsApp&apos;s multiple account feature allows you to have two different accounts on a single mobile device.
              To register a second account on WhatsApp, you will need to have a separate phone number. Once both
              accounts are registered, you can easily switch between them on the same device.
            </p>
            <p className="mt-3">
              Your active account is the one you&apos;re currently logged into, while your idle account is the one you&apos;re not
              currently using. Even when your account isn&apos;t being used, you&apos;ll still get alerts about messages and phone
              calls. To see the content, just switch to the appropriate account.
            </p>
            <p className="mt-3">
              For each account, you have the ability to customize your accounts by setting unique pictures, about fields,
              notification settings, and privacy settings.
            </p>

            <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
              <li>Secondary accounts can only be created from your primary mobile device.</li>
              <li>You can pair a companion device to your secondary account.</li>
              <li>Only mobile companion devices can switch between accounts.</li>
            </ul>

            <div className="mt-4 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
              This feature is not available on linked devices. Multiple accounts are currently only supported on mobile
              devices.
            </div>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>
                  <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
                    How to unlink a device
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/help-center/about-linking-whatsapp-to-a-second-phone?platform=android">
                    About linking WhatsApp to a second phone
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/help-center/about-whatsapp-web">
                    About WhatsApp Web
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/help-center/about-whatsapp-for-desktops?platform=windows-desktop">
                    About WhatsApp for desktops
                  </Link>
                </li>
              </ul>
            </section>
          </section>
        ) : (
          <>
            <div className="rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
              <span className="font-semibold text-[#111b21]">Note:</span> Some features may not be available to you yet.
              In the meantime, keep WhatsApp updated to access new features as soon as they&apos;re available.
            </div>

            <p className="mt-5">
              WhatsApp&apos;s multiple account feature allows you to have two different accounts on a single mobile device.
              To register a second account on WhatsApp, you will need to have a separate phone number. Once both
              accounts are registered, you can easily switch between them on the same device.
            </p>
            <p className="mt-3">
              Your active account is the one you&apos;re currently logged into, while your idle account is the one you&apos;re not
              currently using. Even when your account isn&apos;t being used, you&apos;ll still get alerts about messages and phone
              calls. To see the content, just switch to the appropriate account.
            </p>
            <p className="mt-3">
              For each account, you have the ability to customize your accounts by setting unique pictures, about fields,
              notification settings, and privacy settings.
            </p>

            <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
              <li>Secondary accounts can only be created from your primary mobile device.</li>
              <li>You can pair a companion device to your secondary account.</li>
              <li>Only mobile companion devices can switch between accounts.</li>
            </ul>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Create a second account</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>{isIos ? 'Tap Settings.' : 'Tap menu (three dots) > Settings.'}</li>
                <li>Next to your name, tap plus &gt; Add Account.</li>
                <li>Tap Agree and Continue to agree to the Terms of Service and Privacy Policy.</li>
                <li>
                  Select your country and enter your phone number in international phone number format.
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Tap Continue to get your code.</li>
                    <li>Tap Verify another way to get your code by text or phone call.</li>
                  </ul>
                </li>
                <li>Enter your 6-digit code.</li>
                <li>
                  Enter your name and tap Next.
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>You can add a profile photo and fill in the about field.</li>
                    <li>Tap Skip to create your profile later.</li>
                  </ul>
                </li>
              </ol>
              {isIos ? (
                <div className="mt-4 rounded-md bg-[#f2f3f5] p-4 text-[15px] leading-6">
                  <span className="font-semibold text-[#111b21]">Note:</span> Some features, such as connecting a
                  payment method, are not available for secondary accounts on iOS at this time. We recommend keeping
                  WhatsApp updated on your device so you can get all features as soon as they&apos;re available.
                </div>
              ) : null}
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Switch account</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>{isIos ? 'Tap Settings.' : 'Tap menu (three dots).'}</li>
                <li>{isIos ? 'Next to your profile, tap down arrow then tap the other account.' : 'Tap Switch accounts.'}</li>
              </ol>
              <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>This feature supports a maximum of two accounts.</li>
                <li>Users can see activity on idle accounts. You will need to switch accounts in order to see the content.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Can&apos;t add second account</h2>
              <p className="mt-3">If you can&apos;t add a second WhatsApp account, try these troubleshooting steps:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>Restart your phone.</li>
                <li>Switch between Wi-Fi and cellular data.</li>
                <li>
                  Make sure you have the latest version of WhatsApp installed. Learn how to{' '}
                  <Link className={linkClass} href="/help-center/download-uninstall">
                    manually update WhatsApp
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Respond to notifications on idle accounts</h2>
              <p className="mt-3">
                You will receive notifications for new messages and calls on your idle account. You must switch accounts
                to access the content.
              </p>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>
                  When someone calls your idle account, you will get a push notification.
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Tap Ignore to ignore the call.</li>
                    <li>Tap Switch Accounts to switch to your idle account.</li>
                  </ul>
                </li>
                <li>Select Answer or Decline the call.</li>
              </ol>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Remove account</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>
                  {isIos
                    ? 'Tap Settings > Account > Remove account.'
                    : 'Tap menu (three dots) > Settings > Account > Remove account.'}
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Tap Go to chat backup to back up chat history.</li>
                    <li>{isIos ? 'Tap back to return to the previous screen.' : 'Tap back arrow to return to the previous screen.'}</li>
                  </ul>
                </li>
                <li>Confirm the number and tap Remove.</li>
              </ol>
              <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>If you remove an account, it will only be removed from the device you&apos;re currently using.</li>
                <li>If you remove an account from your primary device, your companion devices will be logged out after 14 days.</li>
                <li>Your WhatsApp groups and channels won&apos;t be deleted by removing this account from your device.</li>
                <li>
                  You&apos;ll lose any messages or data not backed up. Learn more about{' '}
                  <Link className={linkClass} href="/help-center/backup-restore-chats">
                    backing up your data
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Delete account</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>
                  {isIos
                    ? 'Tap Settings > Account > Delete account.'
                    : 'Tap menu (three dots) > Settings > Account > Delete account.'}
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Tap Change number to change your account number.</li>
                  </ul>
                </li>
                <li>Enter your country code and phone number and tap Delete account.</li>
                <li>Select the reason for deleting the account and tap Delete account &gt; Delete account.</li>
              </ol>
              <p className="mt-4 font-semibold text-[#111b21]">Note:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>If you delete an account the account will be deleted from WhatsApp and all your devices.</li>
                <li>Your message history will be erased.</li>
                <li>You will be removed from all your WhatsApp groups.</li>
                <li>Your Google Account backup will be deleted.</li>
                <li>Any channels you created will be deleted.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
                <li>
                  <Link className={linkClass} href="/help-center/about-linking-whatsapp-to-a-second-phone?platform=android">
                    About linking WhatsApp to a second phone
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/help-center/how-to-unlink-a-device?platform=android">
                    How to unlink a device
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/help-center/about-changing-phones">
                    About changing phones
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} href="/help-center/about-two-step-verification">
                    About two-step verification
                  </Link>
                </li>
              </ul>
            </section>
          </>
        )}
      </div>
    </article>
  );
}
