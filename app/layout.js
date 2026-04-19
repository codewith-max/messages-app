import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "WhatsApp Web Clone | Secure Messaging",
    template: "%s | WhatsApp Web Clone"
  },
  description: "Experience secure, fast, and seamless cross-platform messaging with our communication application.",
  keywords: ["messaging", "chat", "secure communication", "video calls", "app"],
  openGraph: {
    title: "WhatsApp Web Clone",
    description: "Experience secure, fast, and seamless cross-platform messaging.",
    url: "https://yourwebsite.com",
    siteName: "WhatsApp Web Clone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Web Clone",
    description: "Experience secure, fast, and seamless cross-platform messaging.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white font-sans text-wa-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
