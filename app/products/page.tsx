import productsData from './product.json';

export default function Products() {
    const placeholderProducts = productsData;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">Our Products</h1>
                <div className="w-20 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                    Explore our range of premium natural spices and authentic Ayurvedic remedies, responsibly sourced for your well-being.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {placeholderProducts.map((product, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-green-50 overflow-hidden group">
                        <div className="h-48 bg-green-100 relative flex items-center justify-center text-green-700 font-medium text-sm">
                            [Image: {product.name}]
                            {product.highCurcumin && (
                                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                    Bestseller
                                </span>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
                            <p className="mt-2 text-gray-500 text-sm mb-4 line-clamp-2 text-justify">{product.description}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-lg font-bold text-green-800">{product.price}</span>
                                <button className="bg-green-100 text-green-700 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
