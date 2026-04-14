import Header from '../../Components/Organisms/Header';
import Features from '../../Components/Organisms/Features';

export const metadata = {
  title: 'Features | WhatsApp Web Clone',
  description: 'Explore WhatsApp features for calling, messaging, groups, channels, AI, status and security.',
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Features />
      </main>
    </>
  );
}
