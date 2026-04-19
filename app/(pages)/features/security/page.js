import Footer from '../../../Components/Organisms/Footer';
import Header from '../../../Components/Organisms/Header';
import SecurityPageBody from '../../../Components/Organisms/SecurityPageBody';

export const metadata = {
  title: 'Security | WhatsApp Web Clone',
  description:
    'Messaging and calling with world-class security, tools that put you in control, and support when you need it.',
};

export default function SecurityFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SecurityPageBody />
      </main>
      <Footer />
    </>
  );
}
