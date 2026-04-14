import Link from 'next/link';
import { cta } from '../../../content/forBusinessContent';

export default function BusinessCtaBlock() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8" aria-labelledby="business-cta-title">
      <div className="mx-auto max-w-[900px]">
        <div className="rounded-[28px] bg-[#073321] px-8 py-14 text-center shadow-lg sm:px-12 md:py-16">
          <h2 id="business-cta-title" className="text-[28px] font-semibold leading-tight text-[#25D366] sm:text-[34px] md:text-[40px]">
            {cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">{cta.subtitle}</p>
          <Link
            href={cta.href}
            className="mt-8 inline-flex items-center rounded-full bg-[#25D366] px-8 py-3.5 text-[15px] font-semibold text-[#111b21] transition hover:bg-[#20bd5c]"
          >
            {cta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
