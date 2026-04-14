import AppsAlreadyDownloadedSection from '../../Components/Organisms/AppsAlreadyDownloadedSection';
import AppsOtherDownloadsSection from '../../Components/Organisms/AppsOtherDownloadsSection';
import Footer from '../../Components/Organisms/Footer';
import Header from '../../Components/Organisms/Header';

export const metadata = {
  title: 'Apps',
  description:
    'Download WhatsApp for iPhone, Android, Mac, Windows, and more. Stay connected across all your devices.',
};

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-[#F9F4EE] text-[#111b21]">
      <Header />
      <main>
        <AppsOtherDownloadsSection />
        <AppsAlreadyDownloadedSection />
      </main>
      <Footer />
    </div>
  );
}
