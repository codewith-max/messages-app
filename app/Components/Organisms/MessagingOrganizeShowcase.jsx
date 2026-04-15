import AccordionMediaShowcase from './AccordionMediaShowcase';
import {
  MESSAGING_ORGANIZE_SLIDE_MS,
  MESSAGING_ORGANIZE_STEPS,
} from '../../content/messagingOrganizeShowcaseSteps';

export default function MessagingOrganizeShowcase() {
  return (
    <AccordionMediaShowcase
      steps={MESSAGING_ORGANIZE_STEPS}
      slideMs={MESSAGING_ORGANIZE_SLIDE_MS}
      imageSide="left"
      header={{
        id: 'messaging-organize-heading',
        title: 'Organize your messages',
        subtitle: 'Keep your conversations organized, formatted, and translated.',
      }}
      ctaVariant="learn"
      focusRingOffsetClass="focus-visible:ring-offset-[#f0f9f4]"
      sectionClassName="border-y border-[#d4ebe0] bg-[#f0f9f4] px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      ariaLabel="Organize your WhatsApp messages"
    />
  );
}
