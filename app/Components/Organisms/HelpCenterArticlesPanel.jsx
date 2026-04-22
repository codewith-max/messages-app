import Link from 'next/link';
import { highlightedArticles, popularArticlesShort } from '../../content/helpCenterContent';
import HelpCenterPhonesVisual from './HelpCenterPhonesVisual';

export default function HelpCenterArticlesPanel() {
  const allPopularArticles = [...popularArticlesShort, ...highlightedArticles];

  return (
    <section className="border-t border-black/[0.06] bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="max-w-none">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="min-w-0 flex-1 space-y-8">
            <div>
              <h2 className="text-[20px] font-bold text-wa-bg sm:text-[22px]">Popular Articles</h2>
              <ul className="mt-4 space-y-2">
                {allPopularArticles.map((a) => (
                  <li key={a.title}>
                    <Link href={a.href} className="text-[16px] font-bold text-[#308755] hover:underline">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[400px] shrink-0 lg:mx-0 lg:pt-2">
            <HelpCenterPhonesVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
