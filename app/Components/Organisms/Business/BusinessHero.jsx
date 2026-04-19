import Image from 'next/image';
import { hero } from '../../../content/forBusinessContent';

export default function BusinessHero() {
  return (
    <section className="bg-[#073321] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24" aria-labelledby="business-hero-title">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <h1 id="business-hero-title" className="text-[36px] font-semibold leading-[1.1] tracking-tight text-wa-muted sm:text-[44px] md:text-[52px] lg:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-white/92 md:text-[18px]">{hero.subtitle}</p>
        </div>
        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:aspect-[16/11] lg:aspect-[5/4]">
            <Image
              src={hero.imageMain}
              alt={hero.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
