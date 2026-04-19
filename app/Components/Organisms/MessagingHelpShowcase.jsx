import AccordionMediaShowcase from './AccordionMediaShowcase';
import {
  MESSAGING_HELP_SLIDE_MS,
  MESSAGING_HELP_STEPS,
} from '../../content/messagingHelpShowcaseSteps';

export default function MessagingHelpShowcase() {
  return (
    <AccordionMediaShowcase
      steps={MESSAGING_HELP_STEPS}
      slideMs={MESSAGING_HELP_SLIDE_MS}
      imageSide="right"
      header={{
        id: 'messaging-help-heading',
        title: 'Need more help?',
        link: { href: '/help-center', label: 'See all FAQs' },
      }}
      ctaVariant="help"
      focusRingOffsetClass="focus-visible:ring-offset-white"
      sectionClassName="border-t border-wa-muted/15 bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      ariaLabel="Messaging help topics"
    />
  );
}
