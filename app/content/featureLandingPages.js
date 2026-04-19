/** Copy + layout defaults for feature detail pages (e.g. /features/calling). */
/** Hero art: public/image/banner13.webp */

export const CALLING_PAGE = {
  title: 'Call easily and privately',
  description:
    'Catch up on voice or video calls with those who matter most. Your calls on WhatsApp are always end-to-end encrypted.',
  linkText: 'Download',
  linkHref: '#download',
  imageSrc: '/image/banner13.webp',
  imageAlt: 'WhatsApp voice and video calls on two phones',
  buttonStyle: 'primary',
  reverse: true,
  backgroundColor: 'bg-[#ffffff]',
  imageAsMockup: false,
  imagePriority: true,
  imageDropShadow: false,
  sectionClassName: 'pt-8 md:pt-12 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden',
  imageContainerClassName: 'max-w-[min(100%,540px)] sm:max-w-[560px] lg:max-w-[640px]',
  titleClassName:
    'text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-[1.12] text-wa-bg mb-5 tracking-tight',
  descriptionClassName:
    'text-[17px] md:text-[19px] text-wa-bg/90 leading-[1.5] mb-8 max-w-[520px] mx-auto md:mx-0',
};
