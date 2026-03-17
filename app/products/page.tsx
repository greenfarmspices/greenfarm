'use client';

import { useState } from 'react';
import Image from 'next/image';
import productsData from './product.json';

export default function Products() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // WhatsApp Modal State
    interface Product {
        id: number;
        code: number;
        name: string;
        slug: string;
        category: string;
        unit: string;
        image: string;
    }
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState({
        quantity: 1,
        name: '',
        phone: '',
        address: '',
        pincode: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProduct) return;

        const message = `*New Order Inquiry*\n\n*Product:* ${selectedProduct.name}\n*Product Code:* ${selectedProduct.code}\n*Quantity:* ${formData.quantity} ${selectedProduct.unit}\n\n*Customer Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Pincode:* ${formData.pincode}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "919876543210"; // Replace with actual number

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        setSelectedProduct(null); // Close modal
    };

    // Extract unique categories from data
    const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];

    // Filter products based on search query and category
    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">Our Products</h1>
                <div className="w-24 h-1.5 bg-highlight mx-auto mt-6 rounded-full shadow-[0_4px_10px_rgba(64,145,108,0.2)]"></div>
                <p className="mt-8 text-lg md:text-xl text-dark-text/70 max-w-2xl mx-auto text-center font-light leading-relaxed">
                    Explore our range of premium natural spices, authentic Ayurvedic remedies, and cosmetics, responsibly sourced for your well-being.
                </p>
            </div>

            {/* Filters and Search Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${selectedCategory === category
                                ? 'bg-primary text-white shadow-lg border-primary scale-105'
                                : 'bg-white text-dark-text/80 hover:border-primary/30 border-transparent hover:bg-accent/10 hover:text-primary hover:shadow-md'
                                }`}
                        >
                            {/* Format category string slightly (e.g., finished_goods -> Finished Goods) */}
                            {category === 'All' ? 'All' : category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-6 py-3.5 border border-primary/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-[var(--shadow-premium)] text-dark-text transition-all duration-300 placeholder:text-dark-text/40"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-highlight/60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Results Counter */}
            <div className="mb-6 text-sm text-dark-text/60 font-medium">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-sm hover:shadow-[var(--shadow-premium-hover)] transition-all duration-500 border border-black/[0.04] overflow-hidden group flex flex-col h-full hover:-translate-y-1.5">
                            {/* Product Image Container */}
                            <div className="h-64 bg-transparent relative flex items-center justify-center p-6 border-b border-black/[0.02]">
                                <div className="relative w-full h-full rounded-xl overflow-hidden bg-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-2"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 bg-highlight/20 text-highlight font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10 text-[10px]">
                                    {product.category.replace('_', ' ')}
                                </span>
                            </div>

                            {/* Product Details */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs text-dark-text/40 mb-1 font-mono">Code: {product.code}</div>
                                <h3 className="text-xl font-extrabold text-dark-text group-hover:text-primary transition-colors line-clamp-2 mb-4 leading-snug">
                                    {product.name}
                                </h3>

                                <div className="mt-auto pt-4 border-t border-accent/20 flex items-center justify-between">
                                    <span className="text-sm font-medium text-dark-text/80">Unit: {product.unit}</span>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-0.5"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                        </svg>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-16 text-center">
                        <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dark-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">No products found</h3>
                        <p className="text-dark-text/60">Try adjusting your search or category filter.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="mt-6 text-primary hover:text-secondary font-medium underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
            {/* Premium WhatsApp Order Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
                    {/* Dark frosted background */}
                    <div
                        className="absolute inset-0 bg-dark-text/40 backdrop-blur-md"
                        onClick={() => setSelectedProduct(null)}
                    ></div>

                    <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-fade-in-up border border-white/60 flex flex-col max-h-[90vh]">
                        {/* Elegant Header */}
                        <div className="relative bg-gradient-to-br from-[#128C7E] to-[#25D366] px-8 py-8 text-white text-center overflow-hidden shrink-0">
                            {/* Decorative background vectors */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

                            <h3 className="relative z-10 text-3xl font-extrabold tracking-tight drop-shadow-sm">Order via WhatsApp</h3>
                            <p className="relative z-10 mt-2 text-white/90 font-medium text-sm max-w-xs mx-auto">Skip the cart. Send your details directly to our team for fast processing.</p>

                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-5 right-5 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-y-auto flex-grow custom-scrollbar">
                            {/* Product Selected Card */}
                            <div className="bg-white m-6 p-4 rounded-3xl shadow-[var(--shadow-premium)] border border-black/[0.03] flex items-center gap-5 relative z-10 -mt-6">
                                <div className="w-20 h-20 bg-accent/10 rounded-2xl relative overflow-hidden flex-shrink-0 border border-accent/20">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        fill
                                        className="object-contain p-2 hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-lg font-extrabold text-dark-text leading-tight">{selectedProduct.name}</h4>
                                    <div className="flex items-center gap-2 mt-1.5">
                                        <span className="text-xs bg-accent/20 text-primary px-2 py-0.5 rounded-md font-semibold tracking-wide">Code: {selectedProduct.code}</span>
                                        <span className="text-xs bg-highlight/10 text-highlight px-2 py-0.5 rounded-md font-semibold tracking-wide border border-highlight/20">{selectedProduct.unit}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Clean Form */}
                            <form onSubmit={handleWhatsAppSubmit} className="px-8 pb-8 space-y-5">
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-dark-text/70 uppercase tracking-wider ml-1">Quantity</label>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                                        className="w-full px-5 py-3.5 bg-black/[0.02] border border-black/[0.05] rounded-2xl focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-dark-text font-semibold text-lg"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-dark-text/70 uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-5 py-3.5 bg-black/[0.02] border border-black/[0.05] rounded-2xl focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-dark-text font-semibold placeholder:text-dark-text/30 placeholder:font-normal"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-dark-text/70 uppercase tracking-wider ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-5 py-3.5 bg-black/[0.02] border border-black/[0.05] rounded-2xl focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-dark-text font-semibold placeholder:text-dark-text/30 placeholder:font-normal"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-dark-text/70 uppercase tracking-wider ml-1">Delivery Address</label>
                                    <textarea
                                        required
                                        rows={3}
                                        placeholder="Enter your full street address, apartment/suite number, city, and state."
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="w-full px-5 py-3.5 bg-black/[0.02] border border-black/[0.05] rounded-2xl focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-dark-text font-semibold resize-none placeholder:text-dark-text/30 placeholder:font-normal"
                                    ></textarea>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-dark-text/70 uppercase tracking-wider ml-1">Pincode</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.pincode}
                                        placeholder="e.g. 682001"
                                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                        className="w-full px-5 py-3.5 bg-black/[0.02] border border-black/[0.05] rounded-2xl focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-dark-text font-semibold placeholder:text-dark-text/30 placeholder:font-normal"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-extrabold py-4 px-6 rounded-2xl hover:shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    Confirm & Send Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
