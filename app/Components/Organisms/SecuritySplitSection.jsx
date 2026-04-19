import LearnMoreLink from '../Molecules/privacy/LearnMoreLink';

/**
 * Two-column dark band: title + copy + learn more, and a visual (phone mockup, card, etc.).
 * @param {{ text: string, accent?: boolean }[]} titleLines
 */
export default function SecuritySplitSection({
  id,
  titleLines,
  body,
  learnMoreHref = '#',
  learnMoreVariant = 'white',
  learnMoreChevron = false,
  reverse = false,
  children,
}) {
  return (
    <section
      id={id}
      className="border-t border-white/[0.06] bg-wa-bg px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-16 xl:gap-20 lg:flex-row lg:items-center lg:justify-between">
        <div
          className={`w-full flex-1 lg:max-w-[520px] ${reverse ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-start`}
        >
          <h2
            id={`${id}-heading`}
            className="text-[38px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px] md:text-[52px]"
          >
            {titleLines.map((line, i) => (
              <span key={i} className={i > 0 ? 'mt-1 block' : 'block'}>
                <span className={line.accent ? 'font-semibold text-wa-muted' : 'text-white'}>{line.text}</span>
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.65] text-white/90 lg:mx-0 md:text-[18px]">{body}</p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <LearnMoreLink href={learnMoreHref} variant={learnMoreVariant} chevron={learnMoreChevron} />
          </div>
        </div>

        <div
          className={`flex w-full flex-1 justify-center lg:max-w-[min(100%,480px)] ${
            reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
