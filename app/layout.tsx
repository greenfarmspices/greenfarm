import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GREEN FARM SPICES AND HERBALS GARDEN",
  description: "Premium ayurvedic spices and plants",
  verification: {
    google: "-JsLzkIzdFqlo7j59I_Q873kMy0Ug7qxwZIO-BOBrdQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen bg-[#0A1612] text-white overflow-x-hidden w-full`}>
        {/* Main Wrapper for Mobile Overflow Fix */}
        <div className="flex flex-col min-h-screen relative overflow-x-hidden w-full max-w-[100vw]">
            {/* Global Navbar */}
            <nav className="absolute top-0 w-full z-50 py-8 px-6 sm:px-12 lg:px-16 bg-transparent">
              <div className="w-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-black tracking-[0.15em] flex items-center gap-3 text-[#F4D160] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] uppercase">
                    <div className="w-12 h-12 bg-[#183625] rounded-full flex items-center justify-center p-0.5 shadow-lg border-2 border-[#F4D160]/40 shrink-0">
                      <Image src="/logo.jpg" alt="Logo" width={44} height={44} className="rounded-full object-cover" style={{ width: 'auto', height: 'auto' }} />
                    </div>
                    <span>GreenFarm</span>
                  </span>
                </Link>
                
                <div className="hidden md:flex items-center gap-10 font-medium text-base lg:text-lg text-white drop-shadow-md">
                  <Link href="/#home" className="hover:text-[#F4D160] transition-colors border-b-2 border-transparent hover:border-[#F4D160] pb-1 cursor-pointer">Home</Link>
                  <Link href="/#about" className="hover:text-[#F4D160] transition-colors border-b-2 border-transparent hover:border-[#F4D160] pb-1 cursor-pointer">About Us</Link>
                  <Link href="/#products" className="hover:text-[#F4D160] transition-colors border-b-2 border-transparent hover:border-[#F4D160] pb-1 cursor-pointer">Products</Link>
                  <Link href="/#contact" className="hover:text-[#F4D160] transition-colors border-b-2 border-transparent hover:border-[#F4D160] pb-1 cursor-pointer">Contact Us</Link>
                </div>
              </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#183625] text-white border-t border-white/5 mt-auto relative z-20 overflow-hidden">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                  {/* Brand and Description */}
                  <div>
                    <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shadow-inner bg-[#183625] flex items-center justify-center">
                      <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="rounded-full object-cover" style={{ width: 'auto', height: 'auto' }} />
                    </div>
                    <span className="text-white font-[family-name:var(--font-playfair)] text-xl tracking-wide uppercase max-w-[150px] md:max-w-none truncate md:text-clip">
                      GREEN FARM SPICES AND HERBALS GARDEN
                    </span>
                  </div>  <p className="text-white/80 mt-4 leading-relaxed text-sm pr-0 md:pr-10">
                      Bringing the finest, authentic Ayurvedic products and natural spices directly from nature to your doorstep.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 tracking-wide text-white">Quick Links</h3>
                    <ul className="space-y-4">
                      <li><Link href="/#home" className="text-white/80 hover:text-white transition-colors text-sm">Home</Link></li>
                      <li><Link href="/#about" className="text-white/80 hover:text-white transition-colors text-sm">About Us</Link></li>
                      <li><Link href="/#products" className="text-white/80 hover:text-white transition-colors text-sm">Our Products</Link></li>
                      <li><Link href="/#contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 tracking-wide text-white">Contact Details</h3>
                    <ul className="space-y-4 text-white/80 text-sm">
                      <li className="flex items-start justify-center md:justify-start gap-3">
                        <span className="mt-0.5">📍</span>
                        <span>GreenFarm Spices Estate, Kerala</span>
                      </li>
                      <li className="flex items-center justify-center md:justify-start gap-3">
                        <span>✉️</span>
                        <span>linse478.chacko@gmail.com</span>
                      </li>
                      <li className="flex items-center justify-center md:justify-start gap-3">
                        <span>📞</span>
                        <span>+91 98765 43210</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center">
                    <p className="text-sm font-light uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
                    &copy; {new Date().getFullYear()} GREEN FARM SPICES AND HERBALS GARDEN. All rights reserved.
                    </p>
                </div>
              </div>
            </footer>
        </div>
      </body>
    </html>
  );
}
