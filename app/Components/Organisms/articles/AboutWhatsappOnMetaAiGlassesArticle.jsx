'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

const relatedResources = [
  {
    title: 'How to use WhatsApp on Meta AI glasses',
    href: 'https://faq.whatsapp.com/836751667595617',
  },
  {
    title: 'About end-to-end encryption',
    href: 'https://faq.whatsapp.com/820124435853543',
  },
  {
    title: 'About your privacy when using WhatsApp on Ray-Ban Stories',
    href: 'https://faq.whatsapp.com/174475292947430',
  },
];

export default function AboutWhatsappOnMetaAiGlassesArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          About WhatsApp on Meta AI glasses
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Ray-Ban Stories, Ray-Ban Meta, Oakley Meta, and Meta Ray-Ban Display smart glasses launched in partnership
          between Meta and EssilorLuxottica.
        </p>
        <p className="mt-3">You can use these AI glasses with some Meta platforms, including WhatsApp.</p>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Ray-Ban Stories</h2>
          <p className="mt-3">
            You can use hands-free voice commands on Ray-Ban Stories to send and reply to messages and to decline and
            answer calls.
          </p>
          <p className="mt-3">
            The voice commands can also announce when you receive messages and read them out loud in English, French,
            and Italian.
          </p>
          <p className="mt-3">
            You can activate voice commands by saying &quot;Hey Meta&quot; and{' '}
            <a href="https://www.meta.com/help/smart-glasses/articles/ray-ban-meta/voice-controls/" className={linkClass} target="_blank" rel="noopener noreferrer">
              speaking your command
            </a>
            .
          </p>
          <p className="mt-3">For example, &quot;Hey Meta, send a message to Anna on WhatsApp.&quot;</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Ray-Ban Meta and Oakley Meta</h2>
          <p className="mt-3">
            You can complete even more actions with Ray-Ban Meta and Oakley Meta AI glasses. You can use hands-free
            voice commands to send and reply to messages and to decline and answer calls. You can also use it to share
            photos.
          </p>
          <p className="mt-3">
            Voice commands can also announce when you receive messages and read them out loud in English, French,
            Italian, Spanish, Portuguese, and German.
          </p>
          <p className="mt-3">
            You can activate voice commands by saying &quot;Hey Meta&quot; and{' '}
            <a href="https://www.meta.com/help/smart-glasses/articles/ray-ban-meta/voice-controls/" className={linkClass} target="_blank" rel="noopener noreferrer">
              speaking your command
            </a>
            .
          </p>
          <p className="mt-3">For example, &quot;Hey Meta, send a photo to John on WhatsApp.&quot;</p>
          <p className="mt-3">
            You can also share your view from your glasses camera during a WhatsApp video call. You can do this by
            double tapping the physical capture button on glasses during a call.
          </p>
          <p className="mt-3">
            You can use this feature even if you haven&apos;t linked WhatsApp in the Meta AI app. To enable sharing your
            view, tap the glasses icon during your next video call for instructions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Meta Ray-Ban Display</h2>
          <p className="mt-3">
            Ray-Ban Meta Display glasses feature a discreet in-lens display that allows you to view and respond to
            WhatsApp messages and make video and audio calls while remaining aware of your surroundings.
          </p>
          <p className="mt-3">
            You can use WhatsApp by saying &quot;Hey Meta&quot; to send messages, reply to chats, or make calls. If you
            prefer not to use voice commands, the Meta Neural Band on your wrist enables control of the display through
            subtle hand gestures.
          </p>
          <p className="mt-3">
            During WhatsApp calls, you can share your perspective using the built-in camera, and see incoming messages
            and notifications directly on the display. Replies can be made by voice or selecting suggested replies and
            audio is played through open-ear speakers for a hands-free experience.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">About your privacy</h2>
          <p className="mt-3">
            When you use AI glasses, your calls and personal messages are secured with end-to-end encryption. To
            protect your privacy, as soon as it&apos;s identified that you&apos;re sending a message or making a call, audio
            content is not sent to Meta servers. Various factors can affect accuracy, such as the clarity of your
            voice command that indicates the start of a message. No one outside of your chats, not even WhatsApp or
            Meta, can read or listen to them.
          </p>
          <p className="mt-3">
            Read our{' '}
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>{' '}
            for more information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            {relatedResources.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
