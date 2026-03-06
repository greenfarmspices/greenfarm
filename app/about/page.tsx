export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">Our Story</h1>
                <div className="w-20 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
                <p className="mt-6 text-lg md:text-xl text-gray-600 text-justify">
                    Rooted in tradition, GreenFarm Spices brings you the finest selection of authentic ayurvedic products and natural spices directly from nature.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-green-50">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                        We are committed to preserving the ancient wisdom of Ayurveda by providing 100% natural, ethically sourced, and pure spices. Every product we offer is a testament to our dedication to health, wellness, and sustainability.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        From our farms to your table, we ensure that the natural aromas, flavors, and medicinal properties remain intact, offering you a truly holistic experience.
                    </p>
                </div>
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                    {/* Placeholder for About Image */}
                    <div className="absolute inset-0 bg-green-200 animate-pulse flex items-center justify-center text-green-700 font-medium">
                        [Image: Farm/Spices Field]
                    </div>
                </div>
            </div>
        </div>
    );
}
