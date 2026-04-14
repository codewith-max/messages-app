import FeaturePageLayout from '../../../Components/Templates/FeaturePageLayout';
import GetWhatsAppSection from '../../../Components/Molecules/GetWhatsAppSection';
import SecurityHero from '../../../Components/Organisms/SecurityHero';

export const metadata = {
  title: 'Security | WhatsApp Web Clone',
  description:
    'Messaging and calling with world-class security, tools that put you in control, and support when you need it.',
};

export default function SecurityFeaturePage() {
  return (
    <FeaturePageLayout>
      <SecurityHero />
      <GetWhatsAppSection
        headingId="security-download-heading"
        description="Get the latest WhatsApp with the newest safety and privacy protections for your chats and calls."
      />
    </FeaturePageLayout>
  );
}
