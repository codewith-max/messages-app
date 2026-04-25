import Image from 'next/image';
import Link from 'next/link';
import HelpCenterCopyLinkButton from '../../Molecules/help-center/HelpCenterCopyLinkButton';

const linkC =
  'font-semibold text-[#008069] underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
/** Teal part only; prefix words like "About" / "How to" stay black like WhatsApp Help Center. */
const liA =
  'text-[#008069] font-semibold underline decoration-[#008069]/30 underline-offset-2 hover:decoration-[#008069]';
const liLine = 'text-[16px] leading-7 text-[#111b21]';
const listMarker = 'list-disc pl-5 marker:text-[#3b4a54]';

// Keep this project self-contained: no outbound connections to original WhatsApp properties.
const PLAY_STORE = '/help-center';
const APP_STORE = '/help-center';
const WA_PARENT_MANAGED = '/help-center/parent-managed-accounts';
const WA_FAMILY_SAFETY = '/help-center/teen-information-center';
const WA_LEGAL_PARENT_PRIVACY = '/help-center/parent-managed-accounts';
const BLOG_PMA = '/blog';
const TERMS = '/privacy';
const PRIVACY_POLICY = '/privacy';
const FAQ_STAY_SAFE_TEEN = '/help-center/teen-information-center';

function SectionIcon({ src, alt }) {
  return <Image src={src} alt={alt} width={80} height={80} className="h-20 w-20 object-contain" priority={false} />;
}

function TopicSection({ id, title, icon, children }) {
  return (
    <section id={id} className="mt-12 scroll-mt-28 first:mt-0 sm:mt-16">
      <div className="flex w-full max-w-3xl flex-col items-start text-left">
        <div className="mb-3 shrink-0 sm:mb-4">{icon}</div>
        <h2 className="text-[22px] font-bold leading-tight text-[#111b21] sm:text-[24px]">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function ParentManagedAccountsArticle() {
  return (
    <article className="px-4 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:pr-2">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight tracking-tight text-[#111b21] sm:text-[32px]">
          Parent-Managed Accounts
        </h1>
        <HelpCenterCopyLinkButton />
      </div>

      <div className="max-w-3xl rounded-xl bg-[#f0f2f5] px-4 py-4 text-[15px] leading-7 text-[#3b4a54] sm:px-5 sm:py-5">
        <p>
          Parent-managed accounts are rolling out gradually and may not be available in your region yet. In the
          meantime, we recommend:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#3b4a54]">
          <li>
            Keeping WhatsApp updated to the latest version through the{' '}
            <a href={PLAY_STORE} className={linkC} target="_blank" rel="noopener noreferrer">
              Google Play Store
            </a>{' '}
            or{' '}
            <a href={APP_STORE} className={linkC} target="_blank" rel="noopener noreferrer">
              Apple App Store
            </a>
            .
          </li>
          <li>
            Following our social media,{' '}
            <a href={BLOG_PMA} className={linkC} target="_blank" rel="noopener noreferrer">
              blog
            </a>
            , and{' '}
            <Link href="/help-center" className={linkC}>
              Help Center
            </Link>{' '}
            for information about when these experiences will be available to you.
          </li>
        </ul>
      </div>

      <a
        href={WA_PARENT_MANAGED}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-8 flex min-h-[200px] max-w-3xl flex-col justify-between overflow-hidden rounded-lg bg-[#25D366] p-5 text-white shadow-sm transition hover:opacity-[0.97] sm:min-h-[220px] sm:p-6"
      >
        <p className="max-w-sm text-lg font-semibold leading-snug sm:text-xl">
          About parental controls for parent-managed accounts
        </p>
        <div className="mt-6 flex items-center justify-center sm:absolute sm:inset-0 sm:mt-0 sm:flex">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <svg className="ml-0.5 h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-white/20 pt-3 sm:pt-4">
          <div className="flex items-center gap-2 text-[13px] font-semibold sm:text-sm">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.87 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885" />
            </svg>
            <span>WhatsApp</span>
          </div>
        </div>
      </a>

      <div className="mt-10 max-w-3xl space-y-0">
        <TopicSection
          id="getting-started"
          title="Getting Started"
          icon={<SectionIcon src="/image/register-sub.png" alt="Getting Started icon" />}
        >
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Learn what parent-managed accounts are and who they&apos;re for. Find out about default settings,
            available features, and parental controls.
          </p>
          <ul className={`mt-4 space-y-2.5 ${listMarker}`}>
            <li className={liLine}>
              About{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                parent-managed accounts
              </a>
            </li>
            <li className={liLine}>
              About{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                parental controls for parent-managed accounts
              </a>
            </li>
            <li className={liLine}>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                set up a parent-managed account
              </a>
            </li>
            <li className={liLine}>
              About{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                minimum age to use WhatsApp
              </a>
            </li>
          </ul>
        </TopicSection>

        <TopicSection
          id="parental-controls"
          title="Parental Controls"
          icon={<SectionIcon src="/image/register-sub1.png" alt="Parental Controls icon" />}
        >
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Parental controls on parent-managed accounts allow parents and guardians to manage message requests, privacy
            settings, and activity alerts with PIN protected access.
          </p>
          <ul className={`mt-4 space-y-2.5 ${listMarker}`}>
            <li className={liLine}>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                view and manage privacy settings for parent-managed accounts
              </a>
            </li>
            <li className={liLine}>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                review and receive activity alerts for parent-managed accounts
              </a>
            </li>
            <li className={liLine}>
              About{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                parent PINs for parent-managed accounts
              </a>
            </li>
          </ul>
        </TopicSection>

        <TopicSection
          id="communication"
          title="Communication"
          icon={<SectionIcon src="/image/register-sub2.png" alt="Communication icon" />}
        >
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Understand how contacts, messaging, and groups work for parent-managed accounts. Learn how parents can manage
            who their child chats with and how message requests and group invites appear.
          </p>
          <ul className={`mt-4 space-y-2.5 ${listMarker}`}>
            <li className={liLine}>
              About{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                messaging and groups on parent-managed accounts
              </a>
            </li>
          </ul>
        </TopicSection>

        <TopicSection
          id="privacy-safety"
          title="Privacy and Safety"
          icon={<SectionIcon src="/image/register-sub3.png" alt="Privacy and Safety icon" />}
        >
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Find out how your child&apos;s privacy and data are protected with parent-managed accounts, and how to block
            or report users. For more information, refer to the WhatsApp{' '}
            <a className={linkC} href={TERMS} target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className={linkC} href={PRIVACY_POLICY} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            . Additional detail is available in the{' '}
            <a className={linkC} href={WA_LEGAL_PARENT_PRIVACY} target="_blank" rel="noopener noreferrer">
              privacy disclosure for parent-managed accounts
            </a>
            .
          </p>
          <ul className={`mt-4 space-y-2.5 ${listMarker}`}>
            <li className={liLine}>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                block and report someone on parent-managed accounts
              </a>
            </li>
            <li className={liLine}>
              How{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                data and privacy are protected on parent-managed accounts
              </a>
            </li>
          </ul>
        </TopicSection>

        <TopicSection
          id="account-management"
          title="Account Management"
          icon={<SectionIcon src="/image/register-sub4.png" alt="Account Management icon" />}
        >
          <p className="mt-3 text-[16px] leading-7 text-[#3b4a54]">
            Learn how to access parent-managed account information, including how to link, delete, or transition to or
            from a parent-managed account.
          </p>
          <ul className="mt-4 list-none space-y-3 pl-0 text-[16px] leading-7 text-[#3b4a54]">
            <li>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                transition out of a parent-managed account
              </a>
            </li>
            <li>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                delete a parent-managed account
              </a>
            </li>
            <li>
              How to{' '}
              <a className={liA} href={WA_PARENT_MANAGED} target="_blank" rel="noopener noreferrer">
                re-link to an unlinked account
              </a>
            </li>
          </ul>

          <h3 className="mt-10 text-[18px] font-bold text-[#111b21]">Additional resources</h3>
          <ul className={`mt-3 space-y-2.5 ${listMarker}`}>
            <li className={liLine}>
              <a className={liA} href={PRIVACY_POLICY} target="_blank" rel="noopener noreferrer">
                Privacy at a Glance
              </a>
            </li>
            <li className={liLine}>
              How to{' '}
              <a className={liA} href={FAQ_STAY_SAFE_TEEN} target="_blank" rel="noopener noreferrer">
                stay safe on WhatsApp
              </a>
            </li>
            <li className={liLine}>
              <Link className={liA} href="/help-center/teen-information-center">
                Teen information Center
              </Link>
            </li>
          </ul>
        </TopicSection>
      </div>

      <p className="mt-8 text-[15px] leading-6 text-[#3b4a54]">
        More on family safety:{' '}
        <a className={linkC} href={WA_FAMILY_SAFETY} target="_blank" rel="noopener noreferrer">
          WhatsApp family safety
        </a>
        .
      </p>
    </article>
  );
}
