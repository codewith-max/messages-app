import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SplitFeature({
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt,
  reverse = false,
  backgroundColor = "bg-[#ffffff]",
  imageAsMockup = false,
  buttonStyle = "link",
  titleClassName = "text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[1.2] text-wa-bg mb-6 tracking-tight",
  descriptionClassName = "text-lg md:text-[20px] text-wa-bg leading-relaxed mb-6",
  linkClassName = "text-wa-bg focus:ring-wa-muted hover:text-wa-muted",
  linkBorderClassName = "border-wa-bg group-hover:border-wa-muted",
  imageContainerClassName = "max-w-[320px] lg:max-w-[380px]",
  backgroundImageSrc = null,
  foregroundImageClassName = null,
  sectionClassName = "pt-0 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden",
  imagePriority = false,
  imageDropShadow = true,
}) {
  const unoptimized = (src) =>
    typeof src === 'string' && (src.endsWith('.svg') || src.startsWith('data:'));

  const imageShadowClass = imageDropShadow ? 'drop-shadow-2xl' : '';

  return (
    <section className={`${backgroundColor} ${sectionClassName}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-30`}>

          {/* Text Content */}
          <div className="flex-1 w-full text-center md:text-start">
            <h2 className={titleClassName}>
              {title}
            </h2>
            <p className={descriptionClassName}>
              {description}
            </p>
            {linkText && linkHref && buttonStyle === 'link' && (
              <Link href={linkHref} className={`inline-flex items-center font-semibold text-base focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md group transition-colors duration-300 ${linkClassName}`}>
                <span className={`border-b pb-1 transition-colors duration-300 ${linkBorderClassName}`}>{linkText}</span>
                <svg className="w-4 h-4 ms-2 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            {linkText && linkHref && buttonStyle === 'primary' && (
              <Link href={linkHref} className="inline-flex items-center rounded-full bg-wa-muted px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-wa-bg focus:outline-none focus:ring-2 focus:ring-wa-muted focus:ring-offset-2">
                <span>{linkText}</span>
                <svg className="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            )}
          </div>

          {/* Image/Mockup Content */}
          <div className="flex-1 w-full flex justify-center">
            <div className={`relative isolate w-full ${imageContainerClassName} ${imageAsMockup ? 'rounded-[2.5rem] border-[8px] border-wa-bg shadow-2xl overflow-hidden' : ''}`}>
              {backgroundImageSrc && foregroundImageClassName ? (
                <>
                  <Image
                    src={backgroundImageSrc}
                    alt=""
                    width={1200}
                    height={1200}
                    unoptimized={unoptimized(backgroundImageSrc)}
                    className="relative z-0 block w-full h-auto"
                  />
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1200}
                    height={1200}
                    priority={imagePriority}
                    unoptimized={unoptimized(imageSrc)}
                    className={`absolute z-10 ${imageShadowClass} rendering-intent-quality pointer-events-none ${foregroundImageClassName}`}
                    style={{ imageRendering: 'high-quality' }}
                  />
                </>
              ) : (
                <>
                  {backgroundImageSrc && (
                    <Image
                      src={backgroundImageSrc}
                      alt=""
                      width={1200}
                      height={1200}
                      unoptimized={unoptimized(backgroundImageSrc)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-0 pointer-events-none"
                    />
                  )}
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1200}
                    height={1200}
                    priority={imagePriority}
                    unoptimized={unoptimized(imageSrc)}
                    className={`relative z-10 w-full h-auto ${imageShadowClass} rendering-intent-quality`}
                    style={{ imageRendering: 'high-quality' }}
                  />
                </>
              )}
              {/* Optional Phone UI overlay to make it look even more real if imageAsMockup is true */}
              {imageAsMockup && (
                <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
