import About from "./about/page";
import Products from "./products/page";
import Contact from "./contact/page";
import Image from "next/image";
import ScrollReveal, { FadeIn } from "../components/ScrollReveal";
import NatureParticles from "../components/NatureParticles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden pt-52 md:pt-64 pb-6">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/botanica_hero.png')] bg-cover bg-center opacity-40 mix-blend-overlay max-h-[100svh]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-[#0A1612]/70 to-transparent max-h-[100svh]"></div>

        {/* Nature Floating Particles */}
        <NatureParticles count={12} className="z-[5]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center items-center">
          
          <ScrollReveal className="text-center w-full max-w-5xl mx-auto relative px-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-[family-name:var(--font-playfair)] leading-tight mb-10 drop-shadow-lg">
              <span className="text-white">Authentic Ayurvedic Medicines</span> <br/>
              <span className="text-[#F4D160] italic">&amp; Premium Spices</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-white/80 font-light max-w-2xl mx-auto mb-14 leading-relaxed">
              Discover natural wellness products and fresh spices crafted for health, purity, and tradition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://wa.me/918075859465" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 border border-white/30 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#25D366]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">WhatsApp Us</span>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#183625] flex items-center justify-center text-[#F4D160] border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50">Call Us Now:</p>
                  <p className="text-sm font-bold tracking-wide text-white">+91 80758 59465</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Feature Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 mt-24 md:mt-40">
          <ScrollReveal delay={0.2} className="relative w-full max-w-5xl mx-auto mb-4">
            <a href="https://g.page/r/CQw3kOF8iRWTEAE/review" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#183625] rounded-[2rem] p-6 md:p-8 border border-white/5 relative flex flex-col items-center justify-center shadow-xl hover:bg-[#204631] transition-all hover:-translate-y-1 cursor-pointer group text-center overflow-hidden">
              {/* Decorative subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#183625] via-[#204631] to-[#F4D160]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-40 w-full flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4 border border-white/10 shadow-sm">
                  <span className="text-[#F4D160] text-[10px] sm:text-xs tracking-tighter drop-shadow-md">★★★★★</span>
                  <span className="text-white text-[10px] font-bold tracking-wider">5.0</span>
                </div>
                
                <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed italic font-light drop-shadow-sm font-[family-name:var(--font-playfair)] tracking-wide w-full max-w-4xl mx-auto px-4">
                  "Today Visited Herbal Garden, guided by Mss. Soumya, nicely explained. We bought Kunkuma Taila for Scar removal and skin brightness, Hair Oil for Dundruff removal and new hair growth in black colour & Brahmi Powder for Children memory boost. It’s only trial. Let’s se. Products are costly compared to daily use oils & creams from Shops. Only faith is they made naturally and expect benefits."
                </p>
                
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F4D160]/50 shadow-md group-hover:scale-105 transition-transform">
                    <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80" alt="Client" width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-sm md:text-base text-white group-hover:text-[#F4D160] transition-colors drop-shadow-sm leading-tight">Happy Customer</h4>
                    <p className="text-[9px] text-[#F4D160]/80 tracking-widest uppercase mt-0.5">via Google Reviews</p>
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative pb-16 overflow-hidden">
        <NatureParticles count={5} className="z-[1] opacity-60" />
        <About />
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-16">
        <Products />
      </section>

      {/* Yellow Logo Banner */}
      <div className="bg-[#F4D160] py-8 border-y border-[#F4D160]/80 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-between items-center opacity-80 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`flex items-center gap-2 text-[#0A1612] font-black text-sm md:text-xl tracking-tighter uppercase ${i > 0 ? 'hidden md:flex' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              GREEN FARM SPICES
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="relative pt-10 pb-20 overflow-hidden">
        <Contact />
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-[#0A1612] relative overflow-hidden">
        {/* Ambient pulsing herb glow orbs */}
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#22c55e]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#F4D160]/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-[#4ade80]/10 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: '3s' }} />
        <NatureParticles count={5} className="z-[1] opacity-40" />
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white max-w-sm leading-tight mb-8 md:mb-0">
                    We Achieved Best From Gardening
                </h2>
                <div className="flex flex-wrap gap-12 text-center md:text-left justify-center md:justify-start">
                    <div>
                        <div className="text-4xl lg:text-5xl font-bold text-[#F4D160] mb-2 tracking-tighter">256k+</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Happy Customer</div>
                    </div>
                    <div>
                        <div className="text-4xl lg:text-5xl font-bold text-[#F4D160] mb-2 tracking-tighter">98%</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Client Testimonial</div>
                    </div>
                    <div>
                        <div className="text-4xl lg:text-5xl font-bold text-[#F4D160] mb-2 tracking-tighter">308+</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Type Of Plant</div>
                    </div>
                    <div>
                        <div className="text-4xl lg:text-5xl font-bold text-[#F4D160] mb-2 tracking-tighter">20+</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Good Staff</div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </section>
    </div>
  );
}