'use client';

import HelpCenterPlatformTabs from '../../Molecules/help-center/HelpCenterPlatformTabs';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

function CodeBlock({ children }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-black/[0.08] bg-[#111b21] p-4 text-left text-[12px] leading-relaxed text-[#e9edef] shadow-inner sm:text-[13px]">
      <code>{children}</code>
    </pre>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-black/[0.1] shadow-sm">
      <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
        <thead>
          <tr className="bg-[#eef2f4]">
            {headers.map((h) => (
              <th key={h} className="border-b border-black/[0.08] px-3 py-2.5 font-semibold text-[#111b21] first:rounded-tl-lg last:rounded-tr-lg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, ri) => (
            <tr key={ri} className="even:bg-black/[0.02]">
              {cells.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border-b border-black/[0.06] px-3 py-2 align-top text-[#3b4a54] ${
                    ci === 0 ? 'font-mono text-[13px] text-[#111b21]' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AndroidBody() {
  return (
    <div className="space-y-8 text-[16px] leading-7 text-[#3b4a54]">
      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Overview</h2>
        <p className="mt-3">
          The Share to Status API lets your app contribute media or text previews to WhatsApp Status using implicit{' '}
          <span className="font-mono text-[15px] text-[#111b21]">Intent</span> actions WhatsApp listens for when your
          integration is enabled for your Meta developer app.
        </p>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">How sharing works</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[#111b21]">
          <li>The user taps <strong className="text-[#111b21]">Share</strong> inside your app and chooses WhatsApp.</li>
          <li>WhatsApp receives the forwarded content and validates required extras.</li>
          <li>The Status composer opens with foreground and optional background layers pre-filled.</li>
          <li>The user publishes or edits the update.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Terms</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-[#111b21]">
          <li>Only call these APIs after your integration is reviewed and activated.</li>
          <li>Set <span className="font-mono text-[14px]">share_type</span> exactly as documented.</li>
          <li>Honor user privacy — do not prefetch media into Status without confirmation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]" id="android-data-table">
          Data (Android intents)
        </h2>
        <p className="mt-2">Include the following when you invoke an implicit intent to WhatsApp:</p>
        <DataTable
          headers={['Parameter name', 'Type', 'Description']}
          rows={[
            [
              'Intent action',
              'String',
              'Typically Intent.ACTION_SEND. Use multipart handling when sending background + foreground together.',
            ],
            ['setPackage()', 'method', 'Use setPackage("com.whatsapp") to target the WhatsApp package.'],
            ['share_type', 'String constant', 'Must be SHARE_TO_STATUS for composer entry.'],
            ['Intent.EXTRA_STREAM', 'URI', 'Primary media Uri (image or video) using a content provider your app exposes.'],
            ['com.whatsapp.extra.TEXT', 'Optional String', 'Caption rendered above the thumbnail when supported.'],
            ['background_asset', 'URI (optional)', 'Backdrop image or looping asset behind the foreground layer.'],
            ['foreground_media', 'URI (optional)', 'Explicit foreground clip when EXTRA_STREAM carries background-only.'],
          ]}
        />
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Implement Share to Status API</h2>
        <p className="mt-3">
          The snippet below forwards a Uri through an implicit Intent. Extend it with Grants for temporary read permission
          on the exported content URI before calling{' '}
          <span className="font-mono text-[14px]">startActivity(Intent.createChooser(...))</span>.
        </p>
        <div className="mt-4">
          <CodeBlock>{`val uri: Uri = // content:// URI your FileProvider publishes
val send = Intent(Intent.ACTION_SEND).apply {
    setPackage("com.whatsapp")
    type = contentResolver.getType(uri)
    putExtra("share_type", "SHARE_TO_STATUS")
    putExtra(Intent.EXTRA_STREAM, uri)
    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
}

startActivity(Intent.createChooser(send, "Share to Status"))`}</CodeBlock>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Share background and foreground media</h2>
        <p className="mt-3">
          When layering background and foreground media, populate both URIs WhatsApp exposes as extras. Maintain aspect
          ratios according to WhatsApp Status guidelines inside your authoring UI.
        </p>
        <div className="mt-4">
          <CodeBlock>{`Intent(Intent.ACTION_SEND).apply {
    setPackage("com.whatsapp")
    type = "image/*"
    putExtra("share_type", "SHARE_TO_STATUS")
    putExtra("background_media", backgroundUri)
    putExtra("foreground_media", foregroundUri)
    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
}`}</CodeBlock>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Share background assets</h2>
        <p className="mt-3">
          This minimalist example uploads only the background bitmap (no foreground clip). Use it for single-layer
          templates.
        </p>
        <div className="mt-4">
          <CodeBlock>{`Intent(Intent.ACTION_SEND).apply {
    setPackage("com.whatsapp")
    type = contentResolver.getType(backgroundUri)
    putExtra(Intent.EXTRA_STREAM, backgroundUri)
    putExtra("source_app_package_name", packageName)
    putExtra("share_type", "SHARE_TO_STATUS")
    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
}`}</CodeBlock>
        </div>
      </section>
    </div>
  );
}

function IOSBody() {
  return (
    <div className="space-y-8 text-[16px] leading-7 text-[#3b4a54]">
      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Overview</h2>
        <p className="mt-3">
          On iOS, WhatsApp participates in share extensions triggered from your application. Compose the payload dictionary
          expected by the Share to Status bridges and hand it off through{' '}
          <span className="font-mono text-[14px]">UIApplication</span> or a scoped share bridge when available.
        </p>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Terms</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-[#111b21]">
          <li>Provide the WhatsApp-ready metadata keys exactly once per share session.</li>
          <li>Never embed PHI or credentials inside shared preview strings.</li>
          <li>Validate file assets with PHAsset/security-scoped bookmarks before bridging into WhatsApp.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]" id="ios-data-table">
          Data you send when sharing to Status
        </h2>
        <p className="mt-2">You send the following data when you route through the Share to Status bridge:</p>
        <DataTable
          headers={['Parameter name', 'Field', 'Description']}
          rows={[
            [
              'status_app_package_name',
              'Required string',
              'The bundle identifier of your iOS application (parallel to Android package naming).',
            ],
            [
              'share_type',
              'Required enumerator',
              'Always resolve to SHARE_TO_STATUS inside the plist bridge your entitlement references.',
            ],
            [
              'media_path_ios',
              'NSURL / bookmark',
              'Security-scoped bookmark or sandbox URL for the flattened media WhatsApp hydrates.',
            ],
            [
              'background_media',
              'Optional bookmark',
              'Large canvas asset displayed behind captions when the user previews before publishing.',
            ],
            [
              'background_main',
              'Optional HEX pair',
              'Gradient anchors when you omit bitmap backgrounds (startColor + endColor strings).',
            ],
            ['foreground_media', 'Optional bookmark', 'Overlay clip playing above the matte when supplied.'],
          ]}
        />
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">UIKit share bridge sample</h2>
        <p className="mt-3">
          Instantiate a mutable dictionary with WhatsApp-required keys before handing it to the share extension mediator.
          Adjust bridging headers to reflect your SPM or CocoaPods umbrella module.
        </p>
        <div className="mt-4">
          <CodeBlock>{`let payload: [String: Any] = [
    "share_type": "SHARE_TO_STATUS",
    "status_app_package_name": Bundle.main.bundleIdentifier ?? "",
    "media_url": secureMediaBookmark,
    "background_media_url": optionalBackdropBookmark,
]

// Forward through your app's registered URL activity or WhatsApp-supported activity type
let activityVC = UIActivityViewController(activityItems: [previewImage], applicationActivities: nil)
present(activityVC, animated: true)`}</CodeBlock>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21]">Share background assets</h2>
        <p className="mt-3">
          When only supplying a matte background, hydrate a PHAsset-derived URL plus optional gradient dictionaries for
          fallback fills.
        </p>
        <div className="mt-4">
          <CodeBlock>{`let backgroundOnly: [String: Any] = [
    "share_type": "SHARE_TO_STATUS",
    "media_url": matteBackgroundBookmark,
]

// Present WhatsApp-ready activity item + security scope access
defer { matteBackgroundBookmark.stopAccessingSecurityScopedResource() }`}</CodeBlock>
        </div>
      </section>
    </div>
  );
}

export default function HowToIntegrateStatusWithThirdPartyAppsArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to integrate status with third-party apps
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl">
        <HelpCenterPlatformTabs androidContent={<AndroidBody />} iosContent={<IOSBody />} />
      </div>
    </article>
  );
}
