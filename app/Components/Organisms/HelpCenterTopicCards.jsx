import Link from 'next/link';
import { featuredTopics, popularTopics } from '../../content/helpCenterContent';
import HelpTopicIllustration from '../Molecules/help-center/HelpTopicIllustration';

function TopicGrid({ title, topics, className = '' }) {
  return (
    <section className={className}>
      <h2 className="text-[20px] font-bold tracking-tight text-[#111b21] sm:text-[22px]">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => (
          <Link
            key={t.id}
            href={`#${t.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-[#f0f2f5] transition hover:shadow-md hover:ring-1 hover:ring-[#25D366]/30"
          >
            <HelpTopicIllustration variant={t.icon} className="rounded-t-2xl bg-[#e5e7ea]/80" />
            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <h3 className="text-[16px] font-bold text-[#111b21] group-hover:text-[#128C7E]">{t.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#667781]">{t.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-[#25D366]">
                Learn more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HelpCenterTopicCards() {
  return (
    <div className="space-y-14 px-4 py-10 sm:px-8 sm:py-12">
      <TopicGrid title="Popular Topics" topics={popularTopics} />
      <TopicGrid title="Featured" topics={featuredTopics} className="border-t border-black/[0.06] pt-14" />
    </div>
  );
}
