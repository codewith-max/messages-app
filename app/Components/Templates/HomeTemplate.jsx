'use client';

import Header from '../Organisms/Header';
import Hero from '../Organisms/Hero';
import PrivacySection from '../Organisms/PrivacySection';
import SplitFeature from '../Organisms/SplitFeature';
import StayUpToDate from '../Organisms/StayUpToDate';
import Footer from '../Organisms/Footer';
import { useLocale } from '../../contexts/LocaleContext';

function SplitTitle({ split }) {
  const [a, b] = split.titleLines;
  if (split.titleLine2Green && b !== undefined) {
    return (
      <>
        {a}
        <br />
        <span className="text-[#25D366]">{b}</span>
      </>
    );
  }
  if (b !== undefined) {
    return (
      <>
        {a}
        <br />
        {b}
      </>
    );
  }
  return a;
}

/** Layout-only props; text comes from i18n via split index */
const SPLIT_LAYOUT = [
  {
    linkHref: '#',
    imageSrc: '/image/bannar4.webp',
    imageAsMockup: false,
    reverse: false,
    buttonStyle: 'link',
  },
  {
    linkHref: '#',
    imageSrc: '/image/banner5.webp',
    imageAsMockup: false,
    reverse: true,
    buttonStyle: 'primary',
    titleClassName:
      'text-[32px] sm:text-[40px] md:text-[60px] font-normal leading-[1.2] md:leading-[66px] text-[#1c1e21] mb-6 tracking-tight',
    imageContainerClassName: 'max-w-[320px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px]',
  },
  {
    linkHref: '#',
    imageSrc: '/image/banner6.webp',
    imageAsMockup: false,
    reverse: true,
    buttonStyle: 'link',
    backgroundColor: 'bg-[#111b21]',
    titleClassName:
      'text-[40px] sm:text-[48px] md:text-[60px] font-normal leading-[1.2] text-white mb-6 tracking-tight',
    descriptionClassName: 'text-lg md:text-[20px] text-white leading-relaxed mb-6',
    linkClassName: 'text-white hover:text-gray-200 focus:ring-white',
    linkBorderClassName: 'border-[#25D366] border-b-2 group-hover:border-[#20bd5c]',
    imageContainerClassName:
      'max-w-[320px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] translate-y-6 md:translate-y-12',
  },
  {
    linkHref: '#',
    imageSrc: '/image/banner9.webp',
    backgroundImageSrc: '/image/banner8.webp',
    imageAsMockup: false,
    reverse: false,
    buttonStyle: 'link',
    sectionClassName: 'py-60 px-8 md:px-16 lg:px-30 overflow-hidden',
    titleClassName:
      'text-[32px] sm:text-[40px] md:text-[60px] font-normal leading-[1.2] md:leading-[66px] text-[#1c1e21] mb-6 tracking-tight',
    imageContainerClassName:
      'max-w-[260px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[320px] md:translate-y-3',
  },
  {
    linkHref: '#',
    imageSrc: '/image/banner11.webp',
    backgroundImageSrc: '/image/banner10.webp',
    imageAsMockup: false,
    reverse: true,
    buttonStyle: 'link',
    sectionClassName: 'py-20 px-8 md:px-16 lg:px-30 overflow-hidden',
    imageContainerClassName: 'max-w-[260px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[320px]',
    foregroundImageClassName:
      'bottom-[5%] left-[5%] w-[95%] max-w-[230px] sm:max-w-[290px] object-contain object-left-bottom',
  },
  {
    linkHref: '#',
    imageSrc: '/image/banner12.webp',
    imageAsMockup: false,
    reverse: false,
    buttonStyle: 'link',
    sectionClassName: 'py-20 px-8 md:px-16 lg:px-30 overflow-hidden',
    titleClassName:
      'text-[32px] sm:text-[40px] md:text-[60px] font-normal leading-[1.2] md:leading-[66px] text-[#1c1e21] mb-6 tracking-tight',
    linkClassName: 'text-[#25D366] focus:ring-[#25D366] hover:text-[#20bd5c]',
    linkBorderClassName: 'border-[#25D366] group-hover:border-[#20bd5c]',
    imageContainerClassName: 'max-w-[380px] md:max-w-[520px] lg:max-w-[600px] xl:max-w-[350px]',
  },
];

export default function HomeTemplate() {
  const { page } = useLocale();
  const splits = page.splits;

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <PrivacySection />
        {splits.map((split, i) => {
          const L = SPLIT_LAYOUT[i];
          if (!L) return null;
          const { linkHref, ...rest } = L;
          return (
            <SplitFeature
              key={split.key}
              title={<SplitTitle split={split} />}
              description={split.description}
              linkText={split.linkText}
              linkHref={linkHref}
              imageAlt={split.imageAlt}
              {...rest}
            />
          );
        })}
        <StayUpToDate />
      </main>
      <Footer />
    </>
  );
}
