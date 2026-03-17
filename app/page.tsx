import About from "./about/page";
import Products from "./products/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Ultra-Premium Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#081C15]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100svh] bg-[#123524] rounded-bl-[10rem] -z-0"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-highlight/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 lg:pt-0">

          {/* Left Content Column */}
          <div className="flex flex-col justify-center max-w-2xl">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-sm w-fit mb-8 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="text-sm font-bold tracking-wider text-white uppercase">Authentic Ayurvedic Healing</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [&>span]:block">
              <span className="animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0">Ancient Wisdom, <br className="hidden lg:block" />Modern</span>
              <span className="animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0 text-highlight">Wellness.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-lg animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0">
              Experience the restoring power of authentic Ayurvedic medicines. Meticulously formulated from pure natural ingredients to bring harmony to your mind, body, and spirit.
            </p>

            {/* CTA Buttons - Inspired by Reference */}
            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_1s_ease-out_0.8s_forwards] opacity-0">
              <a href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#25D366] rounded-full hover:bg-[#20bd5a] hover:shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] overflow-hidden">
                <span className="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Whatsapp Now
                </span>
              </a>
              <a href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 bg-transparent text-white border border-white/40 rounded-full hover:bg-white/10 hover:border-white/80 shadow-sm">
                Book For Free Consultation
              </a>
            </div>
          </div>

          {/* Right Image/Visuals Column - Floating Composition */}
          <div className="relative h-[500px] sm:h-[600px] w-full hidden md:block animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0">
            {/* Main Floating Image Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[95%] max-w-[450px] max-h-[550px] z-10">
              {/* Rounded pill-like shape inspired by reference */}
              <div className="w-full h-full relative rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 transform transition-transform duration-700 hover:scale-[1.02] bg-[#2D6A4F] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/90 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Glass Element 1 */}
            <div className="absolute top-[15%] -left-[5%] z-20 w-48 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-[var(--shadow-premium)] border border-white/10 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-highlight/30 flex items-center justify-center flex-shrink-0 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase">Formulas</p>
                  <p className="text-sm font-extrabold text-white">Time-Tested</p>
                </div>
              </div>
            </div>

            {/* Floating Glass Element 2 */}
            <div className="absolute bottom-[25%] -right-[5%] z-20 w-56 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-[var(--shadow-premium)] border border-white/10 animate-[float_7s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-black text-white">100%</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase">Ingredients</p>
                  <p className="text-sm font-extrabold text-white">Pure Herbal</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Necessary keyframes since we used custom ones inline */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="bg-accent/5">
        <About />
      </section>

      {/* Products Section */}
      <section id="products" className="bg-light-bg">
        <Products />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-accent/5">
        <Contact />
      </section>
    </div>
  );
}