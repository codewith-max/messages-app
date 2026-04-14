'use client';

import Link from 'next/link';
import { useLocale } from '../../contexts/LocaleContext';

export default function Hero() {
  const { page } = useLocale();
  const { hero: H } = page;

  return (
    <section className="bg-[#FCF5EB] px-4 sm:px-6 lg:px-8 pb-4 pt-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden min-h-[600px] flex items-center">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-xl text-start pt-12 lg:pt-0">
              <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-semibold text-white tracking-tight leading-[1.05] mb-6 shadow-sm">
                {H.h1a} <br />
                {H.h1b}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-md font-medium leading-snug">{H.sub}</p>
              <Link
                href="#download"
                className="inline-flex flex-col sm:flex-row items-center gap-2 text-[15px] font-medium rounded-full bg-[#25D366] border border-transparent text-[#111b21] px-8 py-3.5 hover:bg-[#20bd5a] transition-all hover:scale-105 inline-block"
              >
                <div className="flex items-center gap-2">
                  <span>{H.download}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="relative hidden md:block w-full max-w-[400px] h-[400px]">
              <div className="absolute top-10 right-10 bg-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.15)] flex flex-col animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-end gap-3 text-[15px] text-black">
                  <span>{H.chat1}</span>
                  <span className="text-[11px] text-gray-500 mb-0.5">11:54</span>
                </div>
                <div className="absolute -bottom-6 left-4 bg-white p-1 rounded-full shadow-md text-sm">❤️</div>
              </div>
              <div className="absolute right-0 top-36 w-20 h-20 bg-transparent flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <div className="relative w-full h-full text-5xl">☕</div>
                <div className="absolute -top-2 -right-2 text-2xl animate-pulse">💕</div>
              </div>
              <div className="absolute bottom-16 right-0 bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform">
                <div className="flex items-end gap-2 text-[15px] text-black">
                  <span>{H.chat2Trip}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] text-gray-500">11:59</span>
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <svg className="w-4 h-4 text-blue-500 -ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-end mt-3 px-2 lg:px-4">
          <p className="text-[13px] text-gray-500">{H.dataNote}</p>
        </div>
      </div>
    </section>
  );
}
