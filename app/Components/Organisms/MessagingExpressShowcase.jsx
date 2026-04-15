import AccordionMediaShowcase from './AccordionMediaShowcase';
import {
  MESSAGING_EXPRESS_SLIDE_MS,
  MESSAGING_EXPRESS_STEPS,
} from '../../content/messagingExpressShowcaseSteps';

export default function MessagingExpressShowcase() {
  return (
    <AccordionMediaShowcase
      steps={MESSAGING_EXPRESS_STEPS}
      slideMs={MESSAGING_EXPRESS_SLIDE_MS}
      imageSide="left"
      header={null}
      ctaVariant="download"
      focusRingOffsetClass="focus-visible:ring-offset-[#e7fce3]"
      sectionClassName="border-y border-[#c5e9d5] bg-[#e7fce3] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      ariaLabel="Express yourself on WhatsApp"
    />
  );
}
