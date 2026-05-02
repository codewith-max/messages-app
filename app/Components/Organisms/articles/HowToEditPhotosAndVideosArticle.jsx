'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const tabBaseClass =
  'relative inline-flex min-h-[40px] items-center gap-1.5 px-2 pb-2 text-[15px] font-semibold text-[#667781]';

const BASE = '/help-center/how-to-edit-photos-and-videos';

const tabs = [
  { key: 'android', label: 'Android' },
  { key: 'ios', label: 'iOS' },
  { key: 'web', label: 'Web' },
  { key: 'mac', label: 'Mac' },
  { key: 'windows', label: 'Windows' },
];

const TAB_KEYS = tabs.map((t) => t.key);

/** Maps cms-style values (e.g. iphone) to our tab keys so the iOS tab actually loads. */
function resolvePlatform(raw) {
  if (!raw) return 'android';
  const lower = String(raw).toLowerCase();
  if (lower === 'iphone' || lower === 'ipad' || lower === 'ipados') return 'ios';
  return TAB_KEYS.includes(lower) ? lower : 'android';
}

function PlatformTabs({ platform }) {
  const getClass = (key) => `${tabBaseClass} ${platform === key ? 'text-[#008069]' : ''}`;
  return (
    <div className="mb-5 flex w-full max-w-[560px] flex-wrap border-b border-black/[0.1]" role="tablist" aria-label="Choose platform">
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
        After you pick a photo or video to send, WhatsApp opens the media editor so you can adjust it before it goes to
        your chat.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Adjust the quality of your photo or video message</h2>
        <p className="mt-3">
          Tap the HD or quality control when shown to choose standard or HD before sending—availability depends on your app
          version and file type.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Crop or rotate your photo</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the crop tool from the editing toolbar.</li>
          <li>Drag corners or edges to crop; use rotate if available.</li>
          <li>Confirm to return to the full editor.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Trim a video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Select the trim handles on the timeline.</li>
          <li>Drag the start and end points to keep only the segment you want.</li>
          <li>Apply and continue editing or send.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Apply a filter to your photo or video</h2>
        <p className="mt-3">Swipe or tap filter thumbnails along the bottom, then pick one. Tap again to remove or change.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add stickers or emojis</h2>
        <p className="mt-3">Open the sticker or emoji strip, tap an item, then drag to move, pinch to resize, and rotate.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add text to your photo or video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap <span className="font-semibold text-[#111b21]">T</span> or Text.</li>
          <li>Type your message; change color or font style from the style bar.</li>
          <li>Drag the text box to reposition; pinch or handles to resize and rotate.</li>
          <li>Tap Done or the checkmark when finished.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Draw on your photo or video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap the pencil tool.</li>
          <li>Choose color and thickness; draw with your finger.</li>
          <li>Use undo if needed, then finalize.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Blur parts of a photo or mute audio on a video</h2>
        <p className="mt-3">
          Use blur or pixelate tools when available for privacy. For video, toggle mute if you want to send without sound.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add a caption and send</h2>
        <p className="mt-3">Type in the caption field below the preview, then tap Send.</p>
      </section>
    </>
  );
}

function IOSContent() {
  return (
    <>
      <p>
        On iPhone, open a chat, attach a photo or video, then use the fullscreen editor—tools often sit along the bottom or
        appear after you <span className="font-semibold text-[#111b21]">swipe up</span> on the preview.
      </p>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Take a new photo or video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap <span className="font-semibold text-[#111b21]">+</span> next to the text field, then <span className="font-semibold text-[#111b21]">Camera</span>.</li>
          <li>Capture a photo or hold to record video, then tap <span className="font-semibold text-[#111b21]">Use Photo</span> or finish recording.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Use an existing photo or video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap <span className="font-semibold text-[#111b21]">+</span> &gt; <span className="font-semibold text-[#111b21]">Photo &amp; Video Library</span>.</li>
          <li>Select one or more items, then tap <span className="font-semibold text-[#111b21]">Add</span>.</li>
          <li>For Live Photos, choose whether to send as still, as video, or as Live depending on the options shown.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Adjust the quality of your photo or video</h2>
        <p className="mt-3">
          Before sending, tap the quality or <span className="font-semibold text-[#111b21]">HD</span> control when it appears to pick standard or higher quality.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Crop or rotate</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap the <span className="font-semibold text-[#111b21]">crop</span> icon.</li>
          <li>Drag the frame to reframe; use the rotate control if shown.</li>
          <li><span className="font-semibold text-[#111b21]">Swipe up</span> on the preview to reveal more editing tools when WhatsApp uses that layout.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Trim a video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Open the trim or timeline control for the clip.</li>
          <li>Drag the start and end handles to keep the section you want.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Apply a filter</h2>
        <p className="mt-3">Swipe horizontally on the filter strip under the preview, then tap a look to apply it.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add stickers or emoji</h2>
        <p className="mt-3">Open the emoji or sticker panel, tap an item, then drag to move it, pinch to resize, and twist to rotate.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add text</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap <span className="font-semibold text-[#111b21]">Aa</span> or the text icon.</li>
          <li>Type your message; change color or style from the style bar.</li>
          <li>Drag the text box, resize, or rotate using the handles, then tap <span className="font-semibold text-[#111b21]">Done</span>.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Draw on your photo or video</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
          <li>Tap the pencil tool.</li>
          <li>Pick a colour and thickness, then draw with your finger.</li>
          <li>Use undo if needed.</li>
        </ol>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Blur all or part of a photo</h2>
        <p className="mt-3">Use the blur or privacy tool when offered, then brush or drag to cover sensitive areas.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Mute your video</h2>
        <p className="mt-3">Tap the mute or speaker icon on the clip so recipients hear no audio from your original recording.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Add a caption and send</h2>
        <p className="mt-3">Type in the caption field, then tap the send arrow.</p>
      </section>
    </>
  );
}

function DesktopContent({ platform }) {
  const name = platform === 'mac' ? 'Mac' : platform === 'windows' ? 'Windows' : 'Web';
  return (
    <>
      <p>
        When you attach images or videos in WhatsApp on {name}, simplified editing—such as crop or draw—may be available
        before send. Features can differ from the phone app.
      </p>
      <ol className="mt-6 list-decimal space-y-1.5 pl-5 marker:text-[#111b21]">
        <li>Click attach and select photos or videos.</li>
        <li>Use any on-screen editing controls that appear in the preview dialog.</li>
        <li>Add a caption in the box below if shown, then confirm send.</li>
      </ol>
      <p className="mt-6 rounded-xl bg-[#f5f6f6] px-5 py-4 text-[15px] leading-6 text-[#111b21]">
        For full filters, stickers, and advanced trim, finish edits on your phone and send from there, or send the file and
        describe changes in chat.
      </p>
    </>
  );
}

export default function HowToEditPhotosAndVideosArticle() {
  const searchParams = useSearchParams();
  const rawPlatform = searchParams.get('platform');
  const platform = resolvePlatform(rawPlatform);

  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to edit photos and videos
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <PlatformTabs platform={platform} />

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        {platform === 'android' ? (
          <AndroidContent />
        ) : platform === 'ios' ? (
          <IOSContent />
        ) : (
          <DesktopContent platform={platform} />
        )}

        <section className="mt-10">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href={`/help-center/how-to-send-media-contacts-or-location?platform=${platform}`}>
                How to send media
              </Link>
            </li>
            <li>
              <Link className={linkClass} href={`/help-center/about-hd-photos-and-videos?platform=${platform}`}>
                About HD photos and videos
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
