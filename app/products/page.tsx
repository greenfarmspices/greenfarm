'use client';

import { useState } from 'react';
import Image from 'next/image';
import productsData from './product.json';
import ScrollReveal from '../../components/ScrollReveal';

export default function Products() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    interface Product {
        id: number;
        code: number;
        name: string;
        slug: string;
        category: string;
        unit: string;
        image: string;
        status: number;
    }
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState({ quantity: 1, name: '', phone: '', address: '', pincode: '' });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProduct) return;

        const message = `*New Order Inquiry*\n\n*Product:* ${selectedProduct.name}\n*Product Code:* ${selectedProduct.code}\n*Quantity:* ${formData.quantity} ${selectedProduct.unit}\n\n*Customer Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Pincode:* ${formData.pincode}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "918075859465"; // Actual WhatsApp number

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        setSelectedProduct(null); // Close modal
    }

    const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesStatus = product.status === 1;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10">
            <div className="text-center mb-16 relative">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white tracking-tight drop-shadow-sm mb-6">
                    Our Best Seller Products
                </h2>
                <p className="text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                    Explore our handpicked selection of 100% natural premium spices and authentic Ayurvedic remedies, freshly sourced from our gardens to support and enhance your holistic wellness journey.
                </p>
            </div>

            {/* Filters Section */}
            <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-6">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${selectedCategory === category
                                ? 'bg-[#F4D160] text-[#0A1612] border-transparent shadow-[0_4px_15px_rgba(244,209,96,0.3)]'
                                : 'bg-[#183625] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {category === 'All' ? 'All' : category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-20 mt-8 pb-12">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => {
                        return (
                        <ScrollReveal key={product.id} delay={index * 0.1} className="relative group block rounded-[2.5rem] overflow-visible">
                            {/* Card Top Area - Image Background */}
                            <div className="relative w-full h-[280px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400">
                                <Image src={product.image} alt={product.name} fill className="object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-110 drop-shadow-xl" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                {/* Top Labels */}
                                <div className="absolute top-5 left-5 flex justify-between items-start z-10 w-full">
                                    <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                                        <span className="text-[#F4D160] text-[10px] tracking-tighter">★★★★★</span>
                                        <span className="text-[#0A1612] text-[9px] font-extrabold ml-1">(5/5)</span>
                                    </div>
                                    {/* plus button removed as requested */}
                                </div>
                            </div>

                            {/* Overlapping Info Box */}
                            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[90%] z-20">
                                <div className="w-full rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-2xl border border-white/5 transition-colors duration-500 bg-[#183625] group-hover:bg-[#254634]">
                                    <h3 className="text-sm md:text-base font-[family-name:var(--font-playfair)] text-white mb-1 truncate w-full text-center">
                                        {product.name}
                                    </h3>
                                    <span className="text-white/80 font-bold text-sm mb-4">₹ 250.00</span>
                                    <button 
                                        onClick={() => setSelectedProduct(product)}
                                        className="bg-[#F4D160] text-[#0A1612] text-xs font-bold px-8 py-2.5 rounded-full hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(244,209,96,0.3)]"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    )})
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">No products found</h3>
                        <p className="text-white/50 text-lg">Try adjusting your search or category filter.</p>
                        <button onClick={() => setSelectedCategory('All')} className="mt-8 px-6 py-2.5 bg-[#F4D160] text-[#0A1612] rounded-full font-medium">Reset filters</button>
                    </div>
                )}
            </div>

            {/* Premium WhatsApp Order Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>

                    <div className="relative w-full max-w-md bg-[#0A1612] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh]">
                        {/* Header */}
                        <div className="relative bg-[#183625] px-8 py-6 text-center shrink-0 border-b border-white/5 flex items-center justify-between">                            
                            <h3 className="relative z-10 text-xl font-[family-name:var(--font-playfair)] text-white drop-shadow-md tracking-wide">Checkout</h3>
                            <button onClick={() => setSelectedProduct(null)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="overflow-y-auto flex-grow custom-scrollbar p-6 md:p-8">
                            
                            {/* Product Info & Quantity Selector */}
                            <div className="flex items-center justify-between bg-[#183625] p-3 md:p-4 rounded-[1.5rem] border border-white/5 mb-8 shadow-inner">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-white/5 shrink-0 border border-white/5">
                                        <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain p-1" />
                                    </div>
                                    <div className="max-w-[120px] md:max-w-[150px]">
                                        <h4 className="font-[family-name:var(--font-playfair)] text-white text-sm md:text-base leading-tight truncate">{selectedProduct.name}</h4>
                                        <div className="text-[#F4D160] font-bold text-xs mt-1">₹ 250.00</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-[#0A1612] px-2 md:px-3 py-1.5 rounded-full border border-white/5 shadow-sm">
                                    <button type="button" onClick={() => setFormData(prev => ({...prev, quantity: Math.max(1, prev.quantity - 1)}))} className="text-white/50 hover:text-white w-6 h-6 flex items-center justify-center text-xl leading-none transition-colors">−</button>
                                    <span className="text-white font-bold w-6 text-center text-sm">{formData.quantity}</span>
                                    <button type="button" onClick={() => setFormData(prev => ({...prev, quantity: prev.quantity + 1}))} className="text-[#F4D160] hover:text-[#F4D160]/80 w-6 h-6 flex items-center justify-center text-xl leading-none transition-colors">+</button>
                                </div>
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                                <div className="space-y-2 relative group">
                                    <label className="block text-[10px] font-bold text-[#F4D160]/80 uppercase tracking-widest pl-1">Full Name</label>
                                    <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3.5 bg-[#183625] border border-white/5 rounded-2xl focus:border-[#F4D160]/50 focus:bg-white/5 focus:ring-1 focus:ring-[#F4D160]/50 outline-none text-white text-sm font-medium placeholder:text-white/20 transition-all shadow-inner" />
                                </div>
                                
                                <div className="space-y-2 relative group">
                                    <label className="block text-[10px] font-bold text-[#F4D160]/80 uppercase tracking-widest pl-1">Phone Number</label>
                                    <input type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-3.5 bg-[#183625] border border-white/5 rounded-2xl focus:border-[#F4D160]/50 focus:bg-white/5 focus:ring-1 focus:ring-[#F4D160]/50 outline-none text-white text-sm font-medium placeholder:text-white/20 transition-all shadow-inner" />
                                </div>
                                
                                <div className="space-y-2 relative group">
                                    <label className="block text-[10px] font-bold text-[#F4D160]/80 uppercase tracking-widest pl-1">Delivery Address</label>
                                    <textarea required rows={3} placeholder="Enter your full shipping address..." value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-5 py-3.5 bg-[#183625] border border-white/5 rounded-2xl focus:border-[#F4D160]/50 focus:bg-white/5 focus:ring-1 focus:ring-[#F4D160]/50 outline-none text-white text-sm font-medium placeholder:text-white/20 transition-all resize-none shadow-inner" />
                                </div>

                                <div className="space-y-2 relative group">
                                    <label className="block text-[10px] font-bold text-[#F4D160]/80 uppercase tracking-widest pl-1">Pincode</label>
                                    <input type="text" required placeholder="Ex: 686514" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} className="w-full px-5 py-3.5 bg-[#183625] border border-white/5 rounded-2xl focus:border-[#F4D160]/50 focus:bg-white/5 focus:ring-1 focus:ring-[#F4D160]/50 outline-none text-white text-sm font-medium placeholder:text-white/20 transition-all shadow-inner" />
                                </div>

                                <button type="submit" className="w-full mt-6 bg-[#25D366] text-[#0A1612] font-extrabold py-4 px-6 rounded-2xl hover:bg-[#20BE5A] transition-all duration-300 shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:-translate-y-1 flex items-center justify-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                                    Checkout by WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
