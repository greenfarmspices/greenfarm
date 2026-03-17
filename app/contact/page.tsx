export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Contact Us</h1>
                <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
                <p className="mt-6 text-lg text-dark-text/80 max-w-2xl mx-auto text-justify">
                    Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="bg-primary rounded-[2.5rem] p-12 text-white shadow-[var(--shadow-premium-hover)] relative overflow-hidden group">
                    {/* Decorative background blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>

                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 text-white relative z-10 tracking-tight">Get In Touch</h2>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-highlight/20 text-highlight rounded-full flex items-center justify-center">📍</div>
                            </div>
                            <div className="ml-5 relative z-10">
                                <h3 className="text-xl font-bold text-white tracking-wide">Our Location</h3>
                                <p className="mt-2 text-white/80 leading-relaxed font-light">GreenFarm Spices Estate<br />Kerala, India</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-highlight/20 text-highlight rounded-full flex items-center justify-center">✉️</div>
                            </div>
                            <div className="ml-5 relative z-10">
                                <h3 className="text-xl font-bold text-white tracking-wide">Email Us</h3>
                                <p className="mt-2 text-white/80 leading-relaxed font-light">hello@greenfarmspices.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-highlight/20 text-highlight rounded-full flex items-center justify-center">📞</div>
                            </div>
                            <div className="ml-5 relative z-10">
                                <h3 className="text-xl font-bold text-white tracking-wide">Call Us</h3>
                                <p className="mt-2 text-white/80 leading-relaxed font-light">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-[2.5rem] p-12 shadow-[var(--shadow-premium)] border border-black/[0.03] hover:shadow-[var(--shadow-premium-hover)] transition-all duration-500">
                    <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">Send a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-dark-text/80">Full Name</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-xl border-accent/30 shadow-sm focus:border-primary focus:ring-primary bg-accent/5 py-3 px-4 outline-none border transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-dark-text/80">Email Address</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-xl border-accent/30 shadow-sm focus:border-primary focus:ring-primary bg-accent/5 py-3 px-4 outline-none border transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-dark-text/80">Message</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-xl border-accent/30 shadow-sm focus:border-primary focus:ring-primary bg-accent/5 py-3 px-4 outline-none border transition-colors resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-secondary text-white font-bold py-4 px-6 rounded-2xl hover:bg-secondary/90 hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1 transition-all duration-300 shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
