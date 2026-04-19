import Link from 'next/link';
import { productCards, productsIntro } from '../../../content/forBusinessContent';

function CardIcon({ type }) {
  if (type === 'briefcase') {
    return (
      <span className="inline-flex h-12 w-12 items-center justify-center text-wa-muted" aria-hidden>
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center text-wa-muted" aria-hidden>
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    </span>
  );
}

export default function BusinessProductShowcase() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8" aria-labelledby="business-products-heading">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[15px] font-medium text-wa-bg/70 md:text-[16px]">{productsIntro.eyebrow}</p>
          <h2 id="business-products-heading" className="mt-4 text-[24px] font-semibold leading-snug text-[#1c1e21] sm:text-[28px] md:text-[32px] md:leading-[1.25]">
            {productsIntro.titleBefore}
            <span className="border-b-[3px] border-wa-bg pb-0.5 decoration-wa-muted">{productsIntro.titleUnderline}</span>
            {productsIntro.titleAfter}
          </h2>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28" aria-label="Business products">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2 md:gap-8">
          {productCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] md:p-10"
            >
              <CardIcon type={card.icon} />
              <h3 className="mt-6 text-[22px] font-bold text-wa-bg md:text-[24px]">{card.title}</h3>
              <p className="mt-3 flex-1 text-[16px] leading-relaxed text-wa-bg/80">{card.description}</p>
              <Link
                href={card.href}
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-wa-muted transition hover:text-wa-muted"
              >
                {card.linkText}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-current">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
