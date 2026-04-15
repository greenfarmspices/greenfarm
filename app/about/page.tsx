import Image from "next/image";
import { SlideInLeft, SlideInRight } from "../../components/ScrollReveal";

export default function About() {
    return (
        <div className="bg-transparent py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left: Image with floating experience box */}
                <SlideInLeft className="relative w-full md:w-1/2 flex justify-start">
                    {/* Main Image Area */}
                    <div className="w-[90%] md:w-[85%] h-80 md:h-96 relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                        <Image src="/about_ayurveda.png" alt="About GreenFarm" fill className="object-cover" />
                    </div>

                    {/* Floating 25+ Years Card */}
                    <div className="absolute -bottom-8 right-0 md:-right-8 bg-[#183625] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                        <span className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#F4D160] mb-2 leading-none">25+</span>
                        <span className="text-xs md:text-sm font-normal text-white/90 text-center leading-tight uppercase tracking-widest mt-1">Years Of<br/>Experience</span>
                    </div>
                </SlideInLeft>

                {/* Right: Content */}
                <SlideInRight delay={0.2} className="w-full md:w-1/2 flex flex-col items-start mt-12 md:mt-0">
                    <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight drop-shadow-md">
                        About <span className="text-[#F4D160] italic">GreenFarm Spices</span>
                    </h2>
                    
                    <div className="text-white/80 text-[13px] md:text-sm leading-relaxed mb-8 max-w-xl space-y-4 font-light">
                        <p>
                            At GreenFarm Spices, we are committed to bringing you the finest selection of authentic Ayurvedic medicines and premium quality spices. Rooted in tradition and guided by nature, our products are carefully sourced and prepared to ensure purity, freshness, and effectiveness.
                        </p>
                        <p>
                            We believe in the power of natural healing and the richness of traditional flavors. From herbal remedies that support your wellness to spices that enhance your everyday cooking, every product we offer reflects our dedication to quality and trust.
                        </p>
                        <p>
                            Our mission is to provide customers with natural, reliable, and affordable products that promote a healthier lifestyle. With a focus on authenticity and customer satisfaction, GreenFarm Spices continues to serve as a trusted destination for Ayurvedic and spice products.
                        </p>
                    </div>

                    <a href="https://wa.me/918075859465" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F4D160] text-[#0A1612] font-extrabold px-8 py-3.5 rounded-full text-sm shadow-[0_4px_15px_rgba(244,209,96,0.3)] hover:-translate-y-0.5 transition-all">
                        Know More
                    </a>
                </SlideInRight>
            </div>
        </div>
    );
}
