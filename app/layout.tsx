import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "GreenFarm Spices",
  description: "Authentic Ayurvedic Products & Natural Spices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-light-bg`}>
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white border-t border-primary/20 mt-auto rounded-t-[3rem] shadow-[0_-10px_40px_-10px_rgba(8,28,21,0.1)] relative z-20">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

              {/* Brand and Description */}
              <div>
                <Link href="/" className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tighter mb-6 hover:opacity-90 transition-opacity">
                  <Image src="/logo.jpg" alt="GreenFarm Logo" width={44} height={44} className="rounded-full shadow-sm object-cover bg-white" />
                  <span><span className="text-highlight">Green</span>Farm</span>
                </Link>
                <p className="text-white/80 mt-4 leading-relaxed font-light pr-0 md:pr-10">
                  Bringing the finest, authentic Ayurvedic products and natural spices directly from nature to your doorstep.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 tracking-wide text-white">Quick Links</h3>
                <ul className="space-y-4">
                  <li><Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-highlight transition-all duration-300"></span>Home</Link></li>
                  <li><Link href="/about" className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-highlight transition-all duration-300"></span>About Us</Link></li>
                  <li><Link href="/products" className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-highlight transition-all duration-300"></span>Our Products</Link></li>
                  <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-highlight transition-all duration-300"></span>Contact Us</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-6 tracking-wide text-white">Contact Details</h3>
                <ul className="space-y-4 text-white/80 font-light">
                  <li className="flex items-start justify-center md:justify-start gap-3">
                    <span className="text-highlight mt-1">📍</span>
                    <span>GreenFarm Spices Estate, Kerala</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-highlight">✉️</span>
                    <span>hello@greenfarmspices.com</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-highlight">📞</span>
                    <span>+91 98765 43210</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm font-light">
                &copy; {new Date().getFullYear()} GreenFarm Spices. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
