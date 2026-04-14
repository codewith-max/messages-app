import Link from 'next/link';
import { highlightedArticles, popularArticlesShort } from '../../content/helpCenterContent';
import HelpCenterPhonesVisual from './HelpCenterPhonesVisual';

export default function HelpCenterArticlesPanel() {
  return (
    <section className="border-t border-black/[0.06] bg-white px-4 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="min-w-0 flex-1 space-y-8">
            <div>
              <h2 className="text-[20px] font-bold text-[#111b21] sm:text-[22px]">Popular Articles</h2>
              <ul className="mt-4 space-y-2">
                {popularArticlesShort.map((a) => (
                  <li key={a.title}>
                    <Link href={a.href} className="text-[15px] font-medium text-[#25D366] hover:underline">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[18px] font-semibold text-[#111b21] sm:text-[20px]">Help articles</h2>
              <ul className="mt-4 space-y-3">
                {highlightedArticles.map((a) => (
                  <li key={a.title}>
                    <Link href={a.href} className="text-[15px] text-[#25D366] hover:underline">
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
