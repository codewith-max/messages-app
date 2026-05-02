'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';
const BASE = '/help-center/cant-see-or-hear-notifications';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'windows', label: 'Windows' },
  { key: 'mac', label: 'Mac' },
];

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[560px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          className={getClass(tab.key)}
          href={`${BASE}?platform=${tab.key}`}
          role="tab"
          aria-selected={platform === tab.key}
        >
          {tab.label}
          {platform === tab.key ? (
            <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-[#00a884]" aria-hidden />
          ) : null}
        </Link>
      ))}
    </div>
  );
}

function InternetConnectionSection({ learnMoreHref }) {
  return (
    <section className="mt-8">
      <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Internet connection issues</h2>
      <p className="mt-3">
        Notifications need a stable connection to arrive on time. If messages are delayed or missing,{' '}
        <Link className={linkClass} href={learnMoreHref}>
          learn more troubleshooting steps
        </Link>
        .
      </p>
    </section>
  );
}

function AndroidBody() {
  return (
    <>
      <p>
        If you don&apos;t see or hear new message alerts, walk through these checks on your Android phone until
        notifications work again.
      </p>
      <InternetConnectionSection learnMoreHref="/help-center/fixing-issues-on-whatsapp?platform=android" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Notifications are turned off or silenced</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Go to Android Settings &gt; Apps &gt; WhatsApp &gt; Notifications.</li>
          <li>Make sure notifications are allowed and categories (messages, groups, calls) are enabled.</li>
          <li>Open WhatsApp &gt; Settings &gt; Notifications and confirm tones and previews are turned on.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Background data restricted</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open Android Settings &gt; Apps &gt; WhatsApp.</li>
          <li>Open Mobile data &amp; Wi-Fi / Data usage.</li>
          <li>
            Allow unrestricted data usage so WhatsApp can receive notifications while data saver or restrictions are on.
          </li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Do not disturb is turned on</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open Android Settings &gt; Sound &gt; Do Not Disturb (or Notifications &gt; Do not disturb).</li>
          <li>Turn off Do not disturb or add WhatsApp as an allowed exception.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Update WhatsApp</h2>
        <p>Open the Google Play Store, search for WhatsApp, and install any available updates.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Restart your device</h2>
        <p>Power off your phone completely, wait a few seconds, then turn it back on.</p>
      </section>

      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[#111b21]">
          <li>Phone manufacturers may rename settings; use search in Settings if a path differs.</li>
          <li>System battery optimization can pause background activity for WhatsApp; allow background activity where offered.</li>
          <li>Some Android versions group notification channels separately for messages vs. calls.</li>
        </ul>
      </div>
    </>
  );
}

function IOSBody() {
  return (
    <>
      <p>
        If alerts or sounds are missing on iPhone, verify system permissions, Focus modes, and WhatsApp notification
        options.
      </p>
      <InternetConnectionSection learnMoreHref="/help-center/fixing-issues-on-whatsapp?platform=ios" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Notifications are turned off or silenced</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open iPhone Settings &gt; Notifications &gt; WhatsApp.</li>
          <li>Turn on Allow Notifications, choose alerts (Lock Screen, Notification Center, Banners).</li>
          <li>Open WhatsApp &gt; Settings &gt; Notifications and review message, group, and call sounds.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Background refresh and Focus</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Settings &gt; General &gt; Background App Refresh — ensure WhatsApp is allowed.</li>
          <li>Settings &gt; Focus — check that Do Not Disturb or a Focus schedule isn&apos;t blocking WhatsApp.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Update WhatsApp</h2>
        <p>Open the App Store, tap your profile, and update WhatsApp if an update is listed.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Restart your device</h2>
        <p>Force restart if needed (method varies by iPhone model) or turn the device off and on.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Avoid force closing WhatsApp</h2>
        <p>Swiping WhatsApp fully closed can delay notifications until you open the app again; leave it in the background when possible.</p>
      </section>

      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[#111b21]">
          <li>iOS can silence alerts when Ring/Silent switch is set to silent for some tones—check Sounds &amp; Haptics.</li>
          <li>Low Power Mode may limit background refresh and affect timely delivery.</li>
        </ul>
      </div>
    </>
  );
}

function WebBody() {
  return (
    <>
      <p>On WhatsApp Web, desktop notifications depend on your browser&apos;s permission, tab focus, and in-app notification settings.</p>
      <InternetConnectionSection learnMoreHref="/help-center/fixing-issues-on-whatsapp?platform=web" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Turn on browser notifications</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>In WhatsApp Web, open Settings &gt; Notifications.</li>
          <li>Turn on Desktop notifications.</li>
          <li>
            When prompted, choose <span className="font-semibold text-[#111b21]">Allow</span> in your browser&apos;s permission dialog for this site.
          </li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Call notifications</h2>
        <p>Ensure your browser permits sound and notifications for WhatsApp tab/window calls; unblock if muted in the tab indicator.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Unmute chats</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the chat&apos;s menu (⋮).</li>
          <li>Select Unmute notifications if the chat was muted.</li>
          <li>Confirm banners or alerts show for new messages.</li>
          <li>Repeat for other chats that should alert you.</li>
        </ol>
      </section>

      <div className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        <span className="font-semibold">Note:</span>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[#111b21]">
          <li>Some browsers block notifications when Do Not Disturb or Focus modes are active on the computer.</li>
          <li>Keep at least one WhatsApp Web tab open (or pinned) so the session stays connected.</li>
        </ul>
      </div>
    </>
  );
}

function WindowsBody() {
  return (
    <>
      <p>For WhatsApp on Windows, alerts use both app settings and Windows notification priorities.</p>
      <InternetConnectionSection learnMoreHref="/help-center/fixing-issues-on-whatsapp?platform=windows" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Turn on notifications in Windows</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open Settings &gt; System &gt; Notifications.</li>
          <li>Make sure notifications are On and WhatsApp can send banners and sounds.</li>
          <li>Disable Focus or Do Not Disturb if it&apos;s hiding alerts.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Check WhatsApp app settings</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp &gt; Settings &gt; Notifications.</li>
          <li>Enable message and desktop notification sounds.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Restart and update</h2>
        <p>Restart the app and Windows if needed; install WhatsApp updates from the Microsoft Store or your installer channel.</p>
      </section>
    </>
  );
}

function MacBody() {
  return (
    <>
      <p>For WhatsApp on Mac, macOS Focus and notification allowances can silence alerts even when the app is open.</p>
      <InternetConnectionSection learnMoreHref="/help-center/fixing-issues-on-whatsapp?platform=mac" />

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Turn on notifications in Mac settings</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open System Settings &gt; Notifications.</li>
          <li>Select WhatsApp and enable Allow Notifications.</li>
          <li>Pick alert style (Banner, Alert) and allow sounds if you want audible alerts.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Focus modes</h2>
        <p>Turn off or customize Focus (Do Not Disturb, Work, etc.) so WhatsApp notifications are permitted.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">WhatsApp in-app notifications</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open WhatsApp &gt; Settings &gt; Notifications.</li>
          <li>Confirm desktop alerts and sounds are enabled.</li>
        </ol>
      </section>
    </>
  );
}

export default function CantSeeOrHearNotificationsArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = tabs.some((t) => t.key === rawPlatform) ? rawPlatform : 'android';

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Can&apos;t see or hear notifications
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidBody />
        ) : platform === 'ios' ? (
          <IOSBody />
        ) : platform === 'web' ? (
          <WebBody />
        ) : platform === 'windows' ? (
          <WindowsBody />
        ) : (
          <MacBody />
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-manage-your-notifications?platform=${platform}`}>
                How to manage your notifications
              </Link>
            </li>
            <li>
              <Link
                className={linkClass}
                href={`/help-center/how-to-mute-or-unmute-individual-or-group-chat-notifications?platform=${platform}`}
              >
                How to mute or unmute individual or group chat notifications
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
