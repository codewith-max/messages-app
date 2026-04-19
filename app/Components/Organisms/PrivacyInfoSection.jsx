const INTRO =
  "Whether it's your confessions, your difficult debates, or silly inside jokes, WhatsApp privacy helps your conversations stay protected.";

const COLUMNS = [
  {
    title: 'End-to-end encryption',
    body:
      'Personal messages, calls, photos and videos are secured with a lock with end-to-end encryption on WhatsApp, only the recipient and you have the special key needed to unlock and read them.',
  },
  {
    title: 'Additional layers of privacy',
    body:
      'Beyond end-to-end encryption, WhatsApp offers additional layers of protection to all of your conversations.',
  },
  {
    title: 'Control the privacy you need',
    body:
      'With WhatsApp privacy settings, you get to choose what you share, how you show up online, or who can talk to you.',
  },
];

export default function PrivacyInfoSection() {
  return (
    <section
      className="bg-wa-bg px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 md:px-8 md:pt-14 lg:pb-28"
      aria-labelledby="privacy-info-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <h2
          id="privacy-info-heading"
          className="mx-auto max-w-[920px] text-center text-[22px] font-normal leading-[1.45] text-white sm:text-[26px] md:text-[28px] md:leading-[1.4] lg:text-[30px]"
        >
          {INTRO}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 sm:gap-14 md:mt-20 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {COLUMNS.map((col) => (
            <div key={col.title} className="text-center">
              <h3 className="text-[17px] font-semibold leading-snug text-white md:text-[18px]">{col.title}</h3>
              <p className="mx-auto mt-4 max-w-[340px] text-[15px] leading-[1.55] text-white/85 md:text-[16px] md:leading-relaxed">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
