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
      <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-32 pb-6">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/hero_spices_new.jpg')] bg-cover bg-center max-h-[100svh]"></div>
        {/* Dark gradient on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent max-h-[100svh]"></div>

        {/* Nature Floating Particles */}
        <NatureParticles count={12} className="z-[5]" />

        <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10 flex-1 flex flex-col justify-center mt-12 md:mt-20">
          
          <ScrollReveal className="text-left w-full max-w-3xl relative px-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-[family-name:var(--font-playfair)] leading-[1.1] mb-6 drop-shadow-lg">
              <span className="text-white">Authentic Ayurvedic Medicines</span> <br/>
              <span className="text-[#F4D160] italic">&amp; Premium Spices</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-white/90 font-medium max-w-xl mb-10 leading-relaxed drop-shadow-md">
              Discover natural wellness products and fresh spices crafted for health, purity, and tradition.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="https://wa.me/918075859465" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 bg-[#123b22] hover:bg-[#1a502e] text-white rounded-full transition-colors cursor-pointer border border-[#123b22] shadow-lg">
                <span className="w-5 h-5 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                </span>
                <span className="text-sm font-bold tracking-wide text-white">WhatsApp Us</span>
              </a>
              
              <div className="flex items-center gap-4 px-6 py-2.5 border border-white/20 rounded-full bg-black/10 backdrop-blur-md">
                <div className="flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="text-left flex items-center gap-2">
                  <p className="text-xs text-white/60">Call Us Now:</p>
                  <p className="text-sm font-bold tracking-wide text-white">+91 80758 59465</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Feature Card removed from hero section to match clean UI layout */}
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