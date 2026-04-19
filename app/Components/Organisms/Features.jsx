import Link from 'next/link';

const FEATURE_CARDS = [
  { title: 'Calling', description: 'Stay connected with voice and video.', href: '/features/calling' },
  { title: 'Messaging', description: 'Say it with stickers, voice, GIFs and more.', href: '/features/messaging' },
  { title: 'Groups', description: 'Messaging features you need to connect in groups.', href: '/groups' },
  { title: 'Channels', description: 'Stay updated on topics you care about.', href: '/features/channels' },
  { title: 'Meta AI', description: 'Get help with anything, all with the safety and privacy on WhatsApp.', href: '/features/meta-ai' },
  { title: 'Status', description: 'Share your everyday with photos, videos and voice notes.', href: '/features/status' },
  { title: 'Security', description: 'Layers of protection to help you stay safe.', href: '/features/security' },
];

function CardIcon() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-wa-bg text-white transition-colors group-hover:bg-white group-hover:text-wa-bg">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m0 0-5-5m5 5-5 5" />
      </svg>
    </span>
  );
}

function FeatureCard({ title, description, href }) {
  const cardClass =
    'group w-full max-w-[260px] min-h-[220px] rounded-3xl border border-[#d9dde1] bg-white p-4 md:p-5 transition-all duration-200 hover:border-wa-bg hover:bg-wa-bg block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-muted focus-visible:ring-offset-2';

  return (
    <Link href={href} className={cardClass}>
      <span className="transition-transform duration-200 group-hover:scale-105">
        <CardIcon />
      </span>
      <h3 className="mt-4 text-[34px] leading-[1.1] font-normal text-wa-bg transition-colors group-hover:text-white">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.45] text-wa-bg/85 transition-colors group-hover:text-white/90">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center text-wa-bg transition-colors group-hover:text-white">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0-5-5m5 5-5 5" />
        </svg>
      </span>
    </Link>
  );
}

export default function Features() {
  return (
    <section className="bg-white min-h-[calc(100vh-80px)] py-10 md:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
