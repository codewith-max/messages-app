'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

const linkClass =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';

function CopyLinkButton() {
  const [done, setDone] = useState(false);

  const copy = useCallback(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (url && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(url).then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.1] bg-white px-3 py-1.5 text-[14px] font-semibold text-[#111b21] shadow-sm transition hover:bg-[#f0f2f4]"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
      {done ? 'Copied' : 'Copy link'}
    </button>
  );
}

function ResourcePill({ text }) {
  return (
    <span className="mt-3 inline-flex rounded-md bg-[#1f9b90] px-2.5 py-1 text-[12px] font-semibold text-white">
      {text}
    </span>
  );
}

function VisualBlock({ label }) {
  return (
    <div className="mt-3 flex h-[290px] w-full items-center justify-center bg-[#f0ebe4]">
      <span className="rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-[#3b4a54]">{label}</span>
    </div>
  );
}

export default function TeenInformationCenterArticle() {
  return (
    <article className="px-4 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Teen Information Center
        </h1>
        <CopyLinkButton />
      </div>

      <div className="max-w-3xl text-[16px] leading-7 text-[#3b4a54]">
        <p>
          Created for teen users and their parents or guardians, this page shares educational content about in-app
          tools and features to help promote safe and private use of WhatsApp.
        </p>
        <p className="mt-3">
          WhatsApp offers simple, reliable, and private communication between friends, family, and communities.
          WhatsApp lets you connect through:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Messages</li>
          <li>Voice and video calls</li>
          <li>Sending images and video</li>
          <li>Sharing your status updates or channel updates, and more</li>
        </ul>

        <VisualBlock label="Getting started with WhatsApp" />
        <ResourcePill text="How to get started on WhatsApp" />

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Understand your privacy</h2>
          <p className="mt-3">At WhatsApp, we want you to understand:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>What information we collect</li>
            <li>What we do with it</li>
            <li>How to exercise your privacy rights</li>
          </ul>
          <p className="mt-3">
            Our{' '}
            <Link className={linkClass} href="/privacy">
              Privacy at a Glance
            </Link>{' '}
            walks you through these topics in a simplified way. In each section, you can explore privacy topics with
            explanations and examples. You can also learn how we use and keep your information safe.
          </p>
          <VisualBlock label="Privacy at a Glance" />
          <ResourcePill text="Privacy at a Glance" />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">WhatsApp Status and Channels</h2>
          <p className="mt-3">
            When you use WhatsApp Status or Channels, we collect some limited information about you. Our{' '}
            <Link className={linkClass} href="/privacy">
              Privacy at a Glance: Additional information for Status and Channels
            </Link>{' '}
            guide together with our main Privacy at a Glance guide, will help you to understand what information we
            collect, what we do with it, and your privacy rights when we use your information in connection with Status
            and Channels.
          </p>
          <ResourcePill text="Privacy at a Glance for Status and Channels" />
          <p className="mt-4">
            When you haven&apos;t accepted the WhatsApp Status and Channels Supplemental Terms of Service, if you use
            WhatsApp Channels, we collect some limited information about you. Our{' '}
            <Link className={linkClass} href="/privacy">
              Privacy at a Glance: Additional information for Channels
            </Link>{' '}
            guide together with our main Privacy at a Glance guide, will help you understand what information we
            collect, what we do with it, and your privacy rights when we use your information in connection with
            Channels.
          </p>
          <ResourcePill text="Privacy at a Glance for Channels" />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Message privately and safely</h2>
          <p className="mt-3">
            Whether it&apos;s in conversation with friends, family or a business, your personal messages are secure, and
            you are in control.
          </p>
          <p className="mt-3">
            WhatsApp has a number of privacy settings, tools and controls to help keep you and these messages safe.
          </p>
          <VisualBlock label="Resources for privacy settings and tools" />
          <ResourcePill text="Resources for privacy settings and tools" />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Supporting your well-being</h2>
          <p className="mt-3">
            On WhatsApp, we want you to be yourself, speak freely and feel close to the most important people in your
            life, no matter where they are.
          </p>
          <p className="mt-3">
            Learning how to safely navigate digital communication spaces is important to your well-being.
          </p>
          <VisualBlock label="Resources for well-being" />
          <ResourcePill text="Resources for well-being" />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Help your teen stay safe on WhatsApp</h2>
          <p className="mt-3">
            Creating a safe and private space for teens to communicate is really important for WhatsApp. We provide
            information for parents and guardians to help protect and support their teens when they use WhatsApp.
          </p>
          <VisualBlock label="Resources for parents and guardians" />
          <ResourcePill text="Resources for parents and guardians" />
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-bold leading-tight text-[#111b21]">Related Resources:</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <Link className={linkClass} href="/help-center/safety-security">
                Account security tips
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-stay-safe-on-whatsapp">
                How to stay safe on WhatsApp
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/help-center/how-to-use-whatsapp-responsibly">
                How to use WhatsApp responsibly
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
