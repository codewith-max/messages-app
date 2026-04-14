import Header from '../../../Components/Organisms/Header';
import StatusHero from '../../../Components/Organisms/StatusHero';
import Link from 'next/link';

export const metadata = {
  title: 'Status | WhatsApp Web Clone',
  description:
    'Share photos, videos, voice notes, and text on WhatsApp Status — with stickers, GIFs, and updates that disappear after 24 hours.',
};

export default function StatusFeaturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <StatusHero />
        <section
          id="download"
          className="scroll-mt-24 border-t border-[#e8e4dc] bg-white px-4 py-16 sm:px-6 md:px-8"
          aria-labelledby="status-download-heading"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="status-download-heading" className="text-2xl font-semibold text-[#111b21]">
              Get WhatsApp
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#111b21]/85">
              Download the app to post Status updates and see what friends are sharing.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center rounded-full bg-[#25D366] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#20bd5c] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              Download
              <svg className="ms-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
