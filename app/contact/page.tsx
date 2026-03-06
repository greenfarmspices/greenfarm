export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">Contact Us</h1>
                <div className="w-20 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                    Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="bg-green-800 rounded-3xl p-10 text-white shadow-xl">
                    <h2 className="text-3xl font-bold mb-8 text-green-50">Get In Touch</h2>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">📍</div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-green-100">Our Location</h3>
                                <p className="mt-1 text-green-200">GreenFarm Spices Estate<br />Kerala, India</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">✉️</div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-green-100">Email Us</h3>
                                <p className="mt-1 text-green-200">hello@greenfarmspices.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">📞</div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-green-100">Call Us</h3>
                                <p className="mt-1 text-green-200">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 py-3 px-4 outline-none border transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 py-3 px-4 outline-none border transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 py-3 px-4 outline-none border transition-colors resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-700 transition-colors shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
