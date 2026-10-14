'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Menu, 
  X, 
  Gem, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  Clock, 
  MapPinHouse 
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: 'tops' | 'dresses' | 'coord';
  image: string;
  badge: string;
  type: string;
  description: string;
}

export default function SoniFashionCollection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: '' });

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    msg: '',
  });

  const showToastMessage = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3500);
  };

  const handleInquireProduct = (productName: string) => {
    const phone = "919711434725";
    const text = encodeURIComponent(`Hello Soni Fashion Collection, I am interested in inquiring about "${productName}" shown on your website. Please share availability and details.`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    showToastMessage(`Opening WhatsApp for ${productName}...`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storePhone = "919711434725";
    const text = encodeURIComponent(`Hello Soni Fashion Collection,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.msg}`);
    window.open(`https://wa.me/${storePhone}?text=${text}`, '_blank');
    showToastMessage('Redirecting to WhatsApp with your inquiry!');
    setFormData({ name: '', phone: '', msg: '' });
  };

  const products: Product[] = [
    {
      id: 1,
      name: 'Classic Ribbed Black V-Neck Top',
      category: 'tops',
      image: '/images/Screenshot 2026-10-14 231307.png',
      badge: 'Bestseller',
      type: 'Ribbed Collection',
      description: 'Sleek button-down ribbed top with a classic collar and flattering silhouette. Perfect for casual & semi-formal styling.'
    },
    {
      id: 2,
      name: 'Blue Tie-Dye Puff Sleeve Crop Top & Trousers',
      category: 'coord',
      image: '/images/Screenshot 2026-10-14 231327.png',
      badge: 'Trending Set',
      type: 'Matching Set',
      description: 'Stunning square-neck puff sleeve tie-dye blouse paired with vibrant yellow wide-leg trousers for a chic modern look.'
    },
    {
      id: 3,
      name: 'Pink "Gorgeous" Tie-Dye Oversized Tee',
      category: 'tops',
      image: '/images/Screenshot 2026-10-14 231340.png',
      badge: 'Casual Wear',
      type: 'Graphic Tees',
      description: 'Super-soft oversized cotton tie-dye t-shirt featuring bold typography. Ideal for relaxed everyday streetwear styling.'
    },
    {
      id: 4,
      name: 'Sleeveless Mock-Neck Ribbed Zip Dress',
      category: 'dresses',
      image: '/images/Screenshot 2026-10-14 231352.png',
      badge: 'Party Ready',
      type: 'Bodycon Dresses',
      description: 'Chic pastel pink ribbed bodycon dress with a stylish front zip collar. Comfortable stretch fabric for all-day elegance.'
    },
    {
      id: 5,
      name: '"Unstoppable Women" Monochrome Tee',
      category: 'tops',
      image: '/images/Screenshot 2026-10-14 231405.png',
      badge: 'Empower Edit',
      type: 'Graphic Tees',
      description: 'Monochrome tie-dye cotton t-shirt with empowering pink slogan print. High-grade breathable fabric for effortless styling.'
    },
    {
      id: 6,
      name: 'Classic Black Ribbed Polo Crop Top',
      category: 'tops',
      image: '/images/Screenshot 2026-10-14 231418.png',
      badge: 'Essential',
      type: 'Polo Collection',
      description: 'Sophisticated slim-fit black polo with button placket. Pairs brilliantly with denim skirts, jeans, or trousers.'
    },
    {
      id: 7,
      name: 'Slate Blue Ruched Front Long-Sleeve Top',
      category: 'coord',
      image: '/images/Screenshot 2026-10-14 231428.png',
      badge: 'Elegant',
      type: 'Designer Blouses',
      description: 'Graceful square-neck blouse with front drawstring ruching and voluminous sleeves for an ultra-sophisticated look.'
    },
    {
      id: 8,
      name: 'Sleeveless Black Ribbed Zip-Neck Dress',
      category: 'dresses',
      image: '/images/Screenshot 2026-10-14 231439.png',
      badge: 'Best Seller',
      type: 'Little Black Dress',
      description: 'The ultimate versatile wardrobe essential. High mock-neck with silver zip detail and body-hugging rib texture.'
    },
    {
      id: 9,
      name: 'Black One-Shoulder Ring-Detail Jumpsuit',
      category: 'coord',
      image: '/images/Screenshot 2026-10-14 231510.png',
      badge: 'Statement',
      type: 'Luxury Sets',
      description: 'Sophisticated one-shoulder top with chic ring accent paired with matching wide-leg trousers. Pure evening elegance.'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0A0A0A] text-[#E5E5E5] antialiased selection:bg-[#D4AF37] selection:text-black font-sans min-h-screen">
      
      {/* Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
        <CheckCircle2 className="w-5 h-5 text-black" />
        <span>{toast.message}</span>
      </div>

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-black/60 shadow-inner group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-[#D4AF37] text-lg">SFC</span>
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent block leading-tight">
                Soni Fashion Collection
              </span>
              <span className="text-[10px] tracking-widest text-[#D4AF37]/70 uppercase">SFC • New Delhi</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#collection" className="hover:text-[#D4AF37] transition-colors">Collection</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
            <a href="#location" className="hover:text-[#D4AF37] transition-colors">Visit Store</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </nav>

          {/* Call CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+919711434725" className="px-5 py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37] font-medium text-sm hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 shadow-[0_10px_30px_-5px_rgba(212,175,55,0.2)]">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 97114 34725</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-[#D4AF37] text-2xl focus:outline-none p-2" 
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141414] border-b border-[#D4AF37]/20 px-6 py-6 space-y-4 shadow-xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors">Collection</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors">About Us</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors">Visit Store</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors">Contact</a>
            <div className="pt-4 border-t border-[#D4AF37]/10">
              <a href="tel:+919711434725" className="w-full py-3 rounded-md bg-[#D4AF37] text-black font-semibold text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Now: +91 97114 34725
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Logo Emblem */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-[#D4AF37]/60 p-2 shadow-2xl bg-black/40 backdrop-blur-md flex items-center justify-center relative group">
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 animate-pulse"></div>
              <img 
                src="/images/sfclogo.jpg" 
                alt="SFC Logo" 
                className="w-full h-full object-cover rounded-full" 
                onError={(e)=>{ (e.target as HTMLImageElement).src='https://placehold.co/200x200/0A0A0A/D4AF37?text=SFC'; }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 text-[#D4AF37] text-xs uppercase tracking-widest">
              <Gem className="w-3.5 h-3.5" /> Exclusive Women's Boutique • New Delhi
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-tight">
              Redefining <span className="bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent">Women's Fashion</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              From young girls to elegant women — discover premium shirts, chic dresses, trendy jeans, and statement everyday wear crafted for every occasion.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#collection" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold tracking-wide hover:bg-[#F3E5AB] transition-all shadow-[0_10px_30px_-5px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3 group">
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/919711434725?text=Hello%20Soni%20Fashion%20Collection,%20I%20would%20like%20to%20inquire%20about%20your%20clothing%20collection." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] font-semibold tracking-wide hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Highlights ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#D4AF37]/10 text-center">
            <div className="p-3">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">Girls to Women</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">All Age Groups</span>
            </div>
            <div className="p-3">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">Premium Fabric</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Finest Quality</span>
            </div>
            <div className="p-3">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">Chhatarpur</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Store Location</span>
            </div>
            <div className="p-3">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">Latest Trends</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Daily Arrivals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]/50 border-t border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Handpicked Curation</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white">Featured Fashion Collection</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Explore our exclusive lineup of premium tops, chic dresses, co-ord sets, and statement western wear available at our boutique.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { key: 'all', label: 'All Items' },
                { key: 'tops', label: 'Tops & Tees' },
                { key: 'dresses', label: 'Dresses' },
                { key: 'coord', label: 'Outfits & Sets' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                    activeCategory === tab.key 
                      ? 'bg-[#D4AF37] text-black' 
                      : 'bg-black/60 border border-[#D4AF37]/40 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-900">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e)=>{ (e.target as HTMLImageElement).src='https://placehold.co/600x750/141414/D4AF37?text=SFC+Fashion'; }}
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">{product.type}</span>
                    <h3 className="font-serif text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
                  </div>
                  <div className="pt-4 border-t border-[#D4AF37]/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">In-Store & Delivery</span>
                      <span className="font-serif text-lg font-bold text-[#D4AF37]">Latest Arrival</span>
                    </div>
                    <button 
                      onClick={() => handleInquireProduct(product.name)} 
                      className="px-4 py-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] font-medium text-xs hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" /> Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">About Soni Fashion Collection</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              Curated Elegance for <span className="bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent">Every Generation</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Located in the heart of Chhatarpur Extension, New Delhi, <strong className="text-white">Soni Fashion Collection (SFC)</strong> is your trusted neighborhood boutique for high-quality, trendy, and stylish women's apparel. Whether you are a young girl looking for casual everyday streetwear or an elegant woman seeking sophisticated dresses and co-ord sets, we handpick every piece to match your unique style.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[#D4AF37] pl-4 space-y-1">
                <h4 className="font-serif font-bold text-white text-lg">Wide Age Range</h4>
                <p className="text-sm text-gray-400">Styles specifically curated from young girls to adult women.</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-4 space-y-1">
                <h4 className="font-serif font-bold text-white text-lg">Quality Assured</h4>
                <p className="text-sm text-gray-400">Premium fabrics, breathable textures, and durable stitching.</p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <a href="tel:+919711434725" className="px-6 py-3 rounded-full bg-[#D4AF37] text-black font-semibold text-sm hover:bg-[#F3E5AB] transition-all flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Store Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 opacity-30 blur-lg"></div>
            <div className="relative bg-[#141414] border border-[#D4AF37]/30 p-8 sm:p-12 rounded-2xl space-y-8 text-center shadow-2xl">
              <div className="w-24 h-24 mx-auto rounded-full border border-[#D4AF37] flex items-center justify-center bg-black">
                <span className="font-serif font-bold text-[#D4AF37] text-2xl">SFC</span>
              </div>
              <blockquote className="font-serif italic text-xl text-gray-200">
                "Fashion is not just about clothes; it's about confidence, expression, and grace. Visit our store to experience the finest collection in South Delhi."
              </blockquote>
              <div>
                <span className="font-bold text-[#D4AF37] block text-sm uppercase tracking-widest">Soni Fashion Collection</span>
                <span className="text-xs text-gray-400">Chhatarpur Extension, New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location & Hours Section */}
      <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]/30 border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Visit Our Store</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white">Store Address & Timings</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Drop by our boutique in Chhatarpur Extension to explore our complete collection in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Address Details Card */}
            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 space-y-6 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 text-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg">Store Location</h3>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                      B-301, Nanda Rd, Block A1, Chhatarpur Extension, Chhatarpur, New Delhi, Delhi 110074
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 text-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg">Direct Phone</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      <a href="tel:+919711434725" className="text-[#D4AF37] hover:underline font-semibold">+91 97114 34725</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 text-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg">Business Hours</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Monday – Sunday: 10:00 AM – 9:00 PM<br />
                      <span className="text-[#D4AF37] text-xs">Open all 7 days for our customers!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row gap-4">
                <a href="https://maps.google.com/?q=B-301,+Nanda+Rd,+Block+A1,+Chhatarpur+Extension,+New+Delhi,+110074" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold text-center text-xs uppercase tracking-wider hover:bg-[#F3E5AB] transition-all flex items-center justify-center gap-2">
                  <MapPinHouse className="w-4 h-4" /> Open in Google Maps
                </a>
                <a href="https://wa.me/919711434725" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-lg border border-[#D4AF37] text-[#D4AF37] font-semibold text-center text-xs uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div id="contact" className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 space-y-6 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-white text-2xl">Quick Store Inquiry</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Looking for a specific size, outfit, or wholesale inquiry? Send us a message directly.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/60 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37]" 
                    placeholder="Enter your full name" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/60 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37]" 
                    placeholder="Enter your mobile number" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Message / Requirements</label>
                  <textarea 
                    rows={3} 
                    required 
                    value={formData.msg} 
                    onChange={(e) => setFormData({...formData, msg: e.target.value})}
                    className="w-full bg-black/60 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37]" 
                    placeholder="Which dress or clothing item are you looking for?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-lg bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#F3E5AB] transition-all shadow-lg">
                  Send Inquiry via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#D4AF37]/10">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#0A0A0A]">
                <span className="font-serif font-bold text-[#D4AF37] text-lg">SF</span>
              </div>
              <span className="font-serif font-bold text-white text-lg tracking-wider">SFC</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Soni Fashion Collection (SFC) offers the finest women's fashion material, shirts, jeans, and dresses from young girls to adult women.
            </p>
            <div className="flex items-center gap-3 text-[#D4AF37] text-lg pt-2">
              <a href="https://wa.me/919711434725" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="tel:+919711434725" className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://maps.google.com/?q=B-301,+Nanda+Rd,+Block+A1,+Chhatarpur+Extension,+New+Delhi,+110074" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#collection" className="hover:text-[#D4AF37] transition-colors">Featured Collection</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-[#D4AF37] transition-colors">Store Location</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white uppercase tracking-wider text-xs">Fashion Categories</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li><span className="text-gray-400">Ribbed Tops & Polos</span></li>
              <li><span className="text-gray-400">Tie-Dye Oversized Tees</span></li>
              <li><span className="text-gray-400">Chic Party Dresses</span></li>
              <li><span className="text-gray-400">Co-ord Sets & Jumpsuits</span></li>
              <li><span className="text-gray-400">Girls & Women Wear</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white uppercase tracking-wider text-xs">Contact & Address</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p><strong className="text-[#D4AF37]">Address:</strong> B-301, Nanda Rd, Block A1, Chhatarpur Extension, Chhatarpur, New Delhi, Delhi 110074</p>
              <p><strong className="text-[#D4AF37]">Phone:</strong> <a href="tel:+919711434725" className="hover:underline">+91 97114 34725</a></p>
              <p><strong className="text-[#D4AF37]">Timing:</strong> 10:00 AM – 9:00 PM (All Days)</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; 2026 Soni Fashion Collection (SFC). All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">Designed with Luxury & Elegance for New Delhi shoppers.</p>
        </div>
      </footer>

    </div>
  );
}