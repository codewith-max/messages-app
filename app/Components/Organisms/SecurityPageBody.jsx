import Link from 'next/link';
import DiscoverFeatureCardsSection from './DiscoverFeatureCardsSection';
import LearnMoreLink from '../Molecules/privacy/LearnMoreLink';
import {
  MockupBlockContactCard,
  MockupChatInDarkFrame,
  MockupForwardedAndReportMenu,
  MockupGroupAddSettings,
  MockupOfficialChatsList,
  MockupTwoStepVerification,
  MockupVerifyNumberOtp,
} from '../Molecules/security/SecurityPhoneMockups';
import { MockupSecurityStack } from '../Molecules/privacy/PrivacyPhoneScreens';
import SecurityHero from './SecurityHero';
import SecuritySplitSection from './SecuritySplitSection';
import {
  SECURITY_DISCOVER_CARDS,
  SECURITY_HELP_FAQ,
  SECURITY_PILLARS,
  SECURITY_TOOL_CARD_PAIRS,
  SECURITY_UPDATES_CARDS,
} from '../../content/securityPageContent';

function PillarIcon({ name }) {
  const common = 'h-10 w-10 text-white';
  if (name === 'userShield') {
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="14" r="8" strokeWidth="2" />
        <path strokeWidth="2" strokeLinecap="round" d="M12 38c0-6.627 6.268-12 14-12M34 22l6-6M34 22l6 6" />
        <path strokeWidth="2" d="M38 34h-10M33 29v10" />
      </svg>
    );
  }
  if (name === 'shieldSearch') {
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden>
        <path strokeWidth="2" d="M10 22c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z" />
        <path strokeWidth="2" strokeLinecap="round" d="M28 28l8 8" />
        <circle cx="22" cy="22" r="3" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 34h24M16 22l4 4 8-10M14 10h20l-2 18H16L14 10z"
      />
    </svg>
  );
}

const MOCKUP_BY_KEY = {
  twoStep: MockupTwoStepVerification,
  official: MockupOfficialChatsList,
  groups: MockupGroupAddSettings,
  scams: MockupForwardedAndReportMenu,
};

function ToolCardsRow({ pair }) {
  return (
    <section className="border-t border-white/[0.06] bg-wa-bg px-4 py-14 sm:px-6 md:py-16 lg:px-8" aria-labelledby={pair.headingId}>
      {pair.kicker ? (
        <div className="mx-auto max-w-[920px] text-center">
          <h2 id={pair.headingId} className="text-[34px] font-semibold leading-[1.12] tracking-tight text-white sm:text-[40px] md:text-[44px]">
            Take <span className="font-semibold text-wa-muted">control</span> of your experience
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-relaxed text-white/88 md:text-[18px]">{pair.sub}</p>
        </div>
      ) : (
        <h2 id={pair.headingId} className="sr-only">
          Groups and scam awareness
        </h2>
      )}
      <div
        className={`mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12 lg:gap-14 ${pair.kicker ? 'mt-16' : 'mt-4'}`}
      >
        {pair.cards.map((card) => {
          const Mock = MOCKUP_BY_KEY[card.mockup];
          return (
            <article key={card.id} className="flex flex-col items-center text-center">
              <div className="w-full max-w-[300px]">
                <Mock />
              </div>
              <h3 className="mt-8 text-[22px] font-semibold leading-snug text-white md:text-[24px]">{card.title}</h3>
              <p className="mx-auto mt-3 max-w-[400px] text-[15px] leading-relaxed text-white/85 md:text-[16px]">{card.body}</p>
              <div className="mt-6">
                <LearnMoreLink href="#" variant="green" chevron />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function SecurityPageBody() {
  return (
    <>
      <SecurityHero />

      <section
        className="border-t border-white/[0.06] bg-wa-bg px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8"
        aria-labelledby="security-peace-heading"
      >
        <div className="mx-auto max-w-[900px]">
          <h2 id="security-peace-heading" className="text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Built-in layers of security give you the{' '}
            <span className="font-semibold text-wa-muted">peace of mind</span> to focus on connecting with family and friends.
          </h2>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-wa-bg px-4 pb-16 pt-4 sm:px-6 md:pb-20 lg:px-8" aria-labelledby="security-pillars-heading">
        <h2 id="security-pillars-heading" className="sr-only">
          How we protect you
        </h2>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {SECURITY_PILLARS.map((p) => (
            <div key={p.id} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
                <PillarIcon name={p.icon} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white md:text-xl">{p.title}</h3>
              <p className="mt-3 max-w-[320px] text-[15px] leading-relaxed text-white/80 md:text-[16px]">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {SECURITY_TOOL_CARD_PAIRS.map((pair) => (
        <ToolCardsRow key={pair.id} pair={pair} />
      ))}

      <section
        className="border-t border-white/[0.06] bg-wa-bg px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8"
        aria-labelledby="security-adapt-heading"
      >
        <div className="mx-auto max-w-[880px]">
          <h2 id="security-adapt-heading" className="text-[30px] font-semibold leading-[1.18] tracking-tight text-white sm:text-[36px] md:text-[40px]">
            We anticipate and adapt to new risks and provide you with{' '}
            <span className="font-semibold text-wa-muted">tools to support you</span> when you need it.
          </h2>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <MockupChatInDarkFrame />
        </div>
      </section>

      <SecuritySplitSection
        id="report-behavior"
        titleLines={[{ text: 'Report', accent: true }, { text: 'problematic behavior', accent: false }]}
        body="Reporting helps keep WhatsApp safe. When you report, your identity stays anonymous from the person you are reporting in most cases."
        learnMoreHref="#"
        learnMoreVariant="white"
      >
        <MockupSecurityStack />
      </SecuritySplitSection>

      <SecuritySplitSection
        id="block-contact"
        titleLines={[{ text: 'Block', accent: true }, { text: 'unwanted contact', accent: false }]}
        body="If someone you do not want to chat with is messaging you, block them and we will make sure you no longer receive their messages or calls."
        learnMoreHref="#"
        reverse
      >
        <MockupBlockContactCard />
      </SecuritySplitSection>

      <SecuritySplitSection
        id="recover-account"
        titleLines={[{ text: 'Recover', accent: true }, { text: 'your account', accent: false }]}
        body="If you have lost access to your account, register your phone number again. Past conversations stay on your phone and cannot be read by someone trying to access your account."
        learnMoreHref="#"
        learnMoreVariant="green"
        learnMoreChevron
      >
        <MockupVerifyNumberOtp />
      </SecuritySplitSection>

      <DiscoverFeatureCardsSection
        ariaLabelledBy="security-updates-heading"
        title="Read about our recent security and privacy updates"
        subtitle="Stories about new protections, tips to stay safe, and how we build with privacy in mind."
        cards={SECURITY_UPDATES_CARDS}
        tone="dark"
        sectionClassName="border-t border-white/[0.06] bg-wa-bg px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10"
        navRingOffsetClass="focus-visible:ring-offset-wa-bg"
        layoutVariant="default"
        imageAspectClassName="aspect-[4/3]"
      />

      <DiscoverFeatureCardsSection
        ariaLabelledBy="security-discover-heading"
        title="Discover more features"
        subtitle="Keep exploring WhatsApp for privacy, calling, groups, and more."
        cards={SECURITY_DISCOVER_CARDS}
        tone="dark"
        sectionClassName="border-t border-white/[0.06] bg-wa-bg px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10"
        navRingOffsetClass="focus-visible:ring-offset-wa-bg"
        imageAspectClassName="aspect-[4/3]"
      />

      <section className="border-t border-wa-muted bg-wa-bg px-4 py-14 sm:px-6 md:py-16 lg:px-8" aria-labelledby="security-help-heading">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="security-help-heading" className="text-[32px] font-semibold tracking-tight text-white sm:text-[36px] md:text-[40px]">
              Need more help?
            </h2>
            <Link
              href="/help"
              className="inline-flex items-center gap-1.5 self-start text-[15px] font-medium text-white underline decoration-white/40 underline-offset-[5px] transition hover:text-wa-muted hover:decoration-wa-muted sm:self-auto"
            >
              See all FAQs
              <svg className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
              </svg>
            </Link>
          </div>
          <ul className="mt-10 space-y-3" role="list">
            {SECURITY_HELP_FAQ.map((item) => (
              <li key={item.id}>
                <Link
                  href="/help"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-wa-muted bg-wa-bg/50 px-5 py-4 text-left transition hover:border-wa-muted hover:bg-wa-bg"
                >
                  <span className="text-[16px] font-medium text-white md:text-[17px]">{item.question}</span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/90 transition group-hover:border-wa-bg group-hover:text-wa-muted"
                    aria-hidden
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div id="download" className="scroll-mt-24" />
    </>
  );
}
