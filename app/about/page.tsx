export default function About() {
    return (
        <div className="bg-primary text-white py-24 relative overflow-hidden">
            {/* Background pattern/accents for the dark section */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-highlight/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-secondary/30 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm">Our Legacy</h1>
                    <div className="w-24 h-1.5 bg-highlight mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(64,145,108,0.5)]"></div>
                    <p className="mt-8 text-lg md:text-xl text-white/80 text-justify font-light leading-relaxed">
                        Rooted in centuries of tradition, GreenFarm Spices brings you the finest selection of authentic Ayurvedic products and natural spices, harvested directly from nature's embrace.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="bg-secondary/40 backdrop-blur-md rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8 tracking-tight">Our Mission</h2>
                        <p className="text-white/80 mb-6 leading-relaxed text-justify font-light">
                            We are committed to preserving the ancient wisdom of Ayurveda by providing 100% natural, ethically sourced, and pure medicines. Every product we offer is a testament to our dedication to health, wellness, and sustainability.
                        </p>
                        <p className="text-white/80 leading-relaxed text-justify font-light">
                            From our sacred soils to your home, we ensure that the natural aromas and healing properties remain untouched, offering you a truly holistic experience.
                        </p>
                    </div>
                    <div className="relative h-[28rem] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] border-4 border-white/10 group">
                        {/* Farm/Spices Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
