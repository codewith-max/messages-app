'use client';

import Image from 'next/image';
import { useLocale } from '../../contexts/LocaleContext';

export default function PrivacySection() {
  const { page } = useLocale();
  const P = page.privacy;

  return (
    <section className="bg-[#FCF5EB] pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative w-full max-w-[1240px] mx-auto h-[335px] mb-12 hidden md:flex items-center justify-center">
        <Image
          src="/image/banner.webp"
          alt="Floating Chat bubbles"
          fill
          sizes="(min-width: 768px) 1240px, 100vw"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-normal text-[#1c1e21] text-[48px] leading-[48px] mb-6">
          {P.line1}
          <br />
          {P.line2}
          <br />
          {P.line3}
          <br />
          {P.line4}
        </h2>
      </div>

      <div className="relative w-full max-w-[1240px] mx-auto h-[335px] mt-12 hidden md:flex items-center justify-center">
        <Image
          src="/image/banner3.webp"
          alt="Bottom Floating Chat bubbles"
          fill
          sizes="(min-width: 768px) 1240px, 100vw"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
