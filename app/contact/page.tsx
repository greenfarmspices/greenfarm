import { SlideInLeft, SlideInRight } from "../../components/ScrollReveal";

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white relative z-10 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-tight mb-4">
                    Contact Us
                </h2>
                <p className="text-sm text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                    Have questions about our products or need more information on our specific Ayurvedic remedies? Reach out to us—we are always here to guide you toward a healthier, more natural lifestyle.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Contact Information */}
                <SlideInLeft className="bg-[#183625] rounded-[2rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group shadow-2xl flex flex-col justify-center">
                    {/* Decorative background leaf */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>

                    <h3 className="text-3xl font-[family-name:var(--font-playfair)] mb-10 relative z-10 text-[#F4D160]">Get In Touch</h3>

                    <div className="space-y-10">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#0A1612] text-[#F4D160] rounded-full flex items-center justify-center border border-white/5 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                            </div>
                            <div className="ml-5 relative z-10">
                                <h4 className="text-lg font-bold tracking-wide">Our Location</h4>
                                <p className="mt-2 text-white/60 text-sm leading-relaxed font-light">GREEN FARM SPICES AND HERBALS GARDEN<br />Munnar, Kerala</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#0A1612] text-[#F4D160] rounded-full flex items-center justify-center border border-white/5 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                            </div>
                            <div className="ml-5 relative z-10">
                                <h4 className="text-lg font-bold tracking-wide">Email Us</h4>
                                <p className="mt-2 text-white/60 text-sm leading-relaxed font-light">linse478.chacko@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#0A1612] text-[#F4D160] rounded-full flex items-center justify-center border border-white/5 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                            </div>
                            <div className="ml-5 relative z-10">
                                <h4 className="text-lg font-bold tracking-wide">Call Us</h4>
                                <p className="mt-2 text-white/60 text-sm leading-relaxed font-light">+91 80758 59465</p>
                            </div>
                        </div>
                    </div>

                    {/* Embedded Map */}
                    <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-inner w-full h-48 md:h-64 relative z-10">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.331633701555!2d76.8836256!3d10.030643600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07952120bb2937%3A0x9315897ce190370c!2sGreen%20farm%20spices%20and%20herbals!5e0!3m2!1sen!2sin!4v1774766740185!5m2!1sen!2sin" 
                            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </SlideInLeft>

                {/* Contact Form */}
                <SlideInRight delay={0.2} className="bg-[#0A1612] rounded-[2rem] p-10 md:p-14 shadow-2xl border border-white/10 relative">
                    <h3 className="text-3xl font-[family-name:var(--font-playfair)] mb-8 text-white">Send a Message</h3>
                    
                    {/* Floating decoration */}
                    <div className="absolute top-12 right-12 w-20 h-20 bg-[#F4D160] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>

                    <form className="space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Full Name</label>
                            <input type="text" id="name" className="block w-full rounded-xl border border-white/10 shadow-sm focus:border-[#F4D160] focus:ring-1 focus:ring-[#F4D160] bg-[#183625] py-3.5 px-5 outline-none text-white text-sm transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Email Address</label>
                            <input type="email" id="email" className="block w-full rounded-xl border border-white/10 shadow-sm focus:border-[#F4D160] focus:ring-1 focus:ring-[#F4D160] bg-[#183625] py-3.5 px-5 outline-none text-white text-sm transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Message</label>
                            <textarea id="message" rows={4} className="block w-full rounded-xl border border-white/10 shadow-sm focus:border-[#F4D160] focus:ring-1 focus:ring-[#F4D160] bg-[#183625] py-3.5 px-5 outline-none text-white text-sm transition-all resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-[#F4D160] text-[#0A1612] font-extrabold py-4 px-6 rounded-2xl hover:bg-[#F4D160]/90 transition-all duration-300 shadow-[0_10px_20px_rgba(244,209,96,0.2)] hover:-translate-y-1">
                            Send Message
                        </button>
                    </form>
                </SlideInRight>
            </div>
        </div>
    );
}
