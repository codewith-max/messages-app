'use client';

import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

export default function HowToUseWhatsappResponsiblyArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          How to use WhatsApp responsibly
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          WhatsApp is built for fast, reliable, and private messaging. We encourage you to use WhatsApp in line with our
          guidelines and{' '}
          <a className={linkClass} href="https://www.whatsapp.com/legal/terms-of-service/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          .
        </p>

        <div className="mt-6 flex h-[220px] w-full flex-col items-center justify-center gap-6 rounded-sm bg-[#25d366] px-6 py-10 text-center sm:h-[300px]">
          <span className="sr-only">Video: How to use WhatsApp responsibly</span>
          <p className="max-w-xl text-[18px] font-semibold leading-snug text-white sm:text-[20px]">
            How to use WhatsApp responsibly
          </p>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-white text-white shadow-md">
            <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 fill-current" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Best practices</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5 marker:text-[#111b21]">
            <li>
              <strong className="font-semibold text-[#111b21]">Communicate with known contacts.</strong> Consider only messaging
              people who have contacted you first, have asked you to communicate with them on WhatsApp, or people you&apos;d
              expect to hear from based on shared context such as mutual friends or a shared workplace.
            </li>
            <li>
              <strong className="font-semibold text-[#111b21]">Ask for permission and respect boundaries.</strong> Get
              permission before adding anyone to groups, especially people you&apos;re not personally close with. Respect
              their choice if someone leaves or opts out.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="font-semibold text-[#111b21]">
            Using WhatsApp in any of the ways listed below may cause your account to be banned:
          </p>
          <h2 className="mt-4 text-[24px] font-bold leading-tight text-[#111b21]">Practices to avoid</h2>
          <ul className="mt-3 list-disc space-y-4 pl-5 marker:text-[#111b21]">
            <li>
              <strong className="font-semibold text-[#111b21]">Unwanted messages:</strong> If someone asks you to stop
              messaging them, honor that request. Repeatedly contacting people without their consent can violate our Terms
              and may lead to enforcement.
            </li>
            <li>
              <strong className="font-semibold text-[#111b21]">Automated or bulk messages:</strong> Don&apos;t use
              WhatsApp for bulk messaging, spam, auto-message, or auto-dial services. Unauthorized or automated approaches
              to create accounts or add people to conversations can result in bans. WhatsApp uses a range of protections,
              including machine learning techniques, to help detect abusive behavior (
              <a className={linkClass} href="https://faq.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                learn more
              </a>
              ).
            </li>
            <li>
              <strong className="font-semibold text-[#111b21]">Using contact lists that aren&apos;t yours:</strong>{' '}
              Don&apos;t share phone numbers or contact others using data harvested without consent, or sourced from illicit
              marketing lists when adding people or sending messages.
            </li>
            <li>
              <strong className="font-semibold text-[#111b21]">Over-using broadcast lists:</strong> Recipients generally
              only receive broadcast messages if they&apos;ve saved your number. If many people report your messages,
              misuse can contribute to restriction or loss of WhatsApp access.
            </li>
            <li>
              <strong className="font-semibold text-[#111b21]">Harvesting personal information:</strong> Don&apos;t
              automatically extract profile information—such as phone numbers, profile photos, statuses, or about
              texts—for unauthorized or off-platform use. Respect our{' '}
              <a className={linkClass} href="https://www.whatsapp.com/legal/terms-of-service/" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
              .
            </li>
            <li>
              <strong className="font-semibold text-[#111b21]">Violating our Terms of Service:</strong> Don&apos;t use
              WhatsApp to publish knowingly false statements, impersonate others, or engage in illegal, threatening,
              harassing, or hateful behavior. Read our{' '}
              <a className={linkClass} href="https://www.whatsapp.com/legal/terms-of-service/" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              for the full rules.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related resources</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-[#111b21]">
            <li>
              <Link className={linkClass} href="/help-center/about-account-bans">
                About account bans
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-stay-safe-on-whatsapp">
                How to stay safe on WhatsApp
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
