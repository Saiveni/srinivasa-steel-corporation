import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, ArrowRight, 
  Grid, Hammer, Package, CircleDashed, RotateCw, Warehouse, ShieldCheck, Play, Users, Clock, Truck
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

// Business-accurate assets from src/assets/
const assets = {
  rebarCoils: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  rebarDetail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  rebarStraight: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  rebarWarehouse: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  steelCoils: "/hero/hero-5.jpg", // Changed to local asset for better industrial look
  steelStock: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  steelLoading: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  wireProducts: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop",
};

const categoriesMap = [
  { id: "ALL", label: "ALL GALLERY", icon: Grid },
  { id: "TMT REBARS", label: "TMT REBARS", icon: Hammer },
  { id: "STEEL PRODUCTS", label: "STEEL PRODUCTS", icon: Package },
  { id: "WIRE PRODUCTS", label: "WIRE PRODUCTS", icon: CircleDashed },
  { id: "DECOILING", label: "DECOILING", icon: RotateCw },
  { id: "STOCK & YARD", label: "STOCK & YARD", icon: Warehouse }
];

const galleryItems = [
  {
    id: 1,
    category: "STOCK & YARD",
    image: assets.rebarWarehouse,
    title: "Stockyard Overview",
    desc: "Organized inventory ready for immediate supply.",
    isWide: true // Used for layout
  },
  {
    id: 2,
    category: "STEEL PRODUCTS",
    image: assets.steelStock,
    title: "Industrial Beams",
    desc: "Heavy-duty structural steel.",
  },
  {
    id: 3,
    category: "TMT REBARS",
    image: assets.rebarStraight,
    title: "High-Strength TMT",
    desc: "Premium quality TMT rebars for construction.",
  },
  {
    id: 4,
    category: "STEEL PRODUCTS",
    image: assets.steelLoading,
    title: "Dispatch Area",
    desc: "Efficient loading and supply network.",
  },
  {
    id: 5,
    category: "WIRE PRODUCTS",
    image: assets.wireProducts,
    title: "Wire Coils",
    desc: "Flexible and durable wire products.",
    isWide: true // Used for layout
  },
  {
    id: 6,
    category: "DECOILING",
    image: assets.steelCoils,
    title: "Steel Decoiling",
    desc: "Precision decoiling operations.",
  }
];

export const SteelGallery = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const [filter, setFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = filter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const currentItem = selectedImage !== null 
    ? galleryItems.find(item => item.id === selectedImage) 
    : null;

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex < 0) nextIndex = galleryItems.length - 1;
    if (nextIndex >= galleryItems.length) nextIndex = 0;
    
    const nextItem = galleryItems[nextIndex];
    if (nextItem) {
      setSelectedImage(nextItem.id);
    }
  };

  const Lightbox = () => (
    <AnimatePresence>
      {currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#050A13]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
        >
          {/* Close Area */}
          <div className="absolute inset-0 z-0" onClick={() => setSelectedImage(null)} />

          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-ssc-navy rounded-full flex items-center justify-center transition-colors z-[210] backdrop-blur-sm"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[210] backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[210] backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative z-10 w-full h-[85vh] max-w-7xl flex items-center justify-center pointer-events-none">
            <AnimatePresence>
              <motion.div
                key={currentItem.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
              >
                <img 
                  src={currentItem.image} 
                  alt={`${currentItem?.title} - Srinivasa Steel Corporation`}
                  className="max-h-[70vh] w-auto object-contain drop-shadow-2xl"
                />
                
                <div className="mt-6 text-center bg-black/40 px-8 py-4 rounded-2xl backdrop-blur-md border border-white/10 w-auto shadow-2xl">
                  <span className="text-xs text-ssc-gold uppercase tracking-[0.2em] font-bold mb-2 block">
                    {currentItem.category}
                  </span>
                  <h3 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    {currentItem.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const galleryGrid = (
    <div className={`relative z-20 pb-20 overflow-hidden ${!isHomePage ? "bg-white rounded-t-[32px] sm:rounded-t-[48px] -mt-16 sm:-mt-32 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]" : ""}`}>
      <div className="container-wide pt-12 sm:pt-16">
        
        {/* Premium Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categoriesMap.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all duration-300 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest border ${
                  isActive 
                    ? "bg-ssc-navy text-white border-ssc-navy shadow-lg" 
                    : "bg-white text-ssc-navy border-black/10 hover:border-ssc-navy/30 hover:bg-[#F8FAFC]"
                }`}
              >
                <Icon size={16} className={isActive ? "text-ssc-gold" : "text-ssc-navy/60"} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Dynamic Grid for all items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout="position"
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item.id)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 bg-ssc-navy aspect-[4/3]`}
                >
                    <img 
                      src={item.image} 
                      alt={`${item.title} - Srinivasa Steel Corporation`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/90 via-ssc-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Reveal Content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transform transition-transform duration-500">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[9px] sm:text-[10px] font-bold text-ssc-gold uppercase tracking-[0.2em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {item.category}
                        </span>
                        <h4 className="text-white font-bold text-lg sm:text-xl mb-1 uppercase tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      
                      {/* Floating Expand Icon */}
                      <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 border border-white/20">
                        <ArrowRight size={18} className="-rotate-45" />
                      </div>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Stats & Trust Bar (Integrated at the bottom of the white section) */}
        {!isHomePage && (
          <div className="mt-16 sm:mt-24">
            <div className="bg-[#0b1320] rounded-[24px] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_60px_-15px_rgba(11,19,32,0.5)]">
              {/* Stats Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 p-6 sm:p-0">
                {[
                  { value: "40+", label: "YEARS OF TRUST & QUALITY", icon: ShieldCheck },
                  { value: "1000+", label: "PRODUCTS IN STOCK", icon: Package },
                  { value: "500+", label: "HAPPY CUSTOMERS", icon: Users }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-6 sm:p-10 text-center group">
                    <stat.icon size={28} className="text-ssc-gold/50 group-hover:text-ssc-gold transition-colors mb-4" />
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</span>
                    <span className="text-[10px] sm:text-[11px] text-white/60 font-bold uppercase tracking-[0.2em] max-w-[120px] leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* CTA Area */}
              <div className="lg:w-[400px] bg-[#050a13] p-8 sm:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none mix-blend-overlay" />
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-8 leading-tight">
                    BUILT ON STRENGTH.<br />
                    <span className="text-ssc-gold">DRIVEN BY TRUST.</span>
                  </h4>
                  <Link to="/products">
                    <Button className="w-full h-14 bg-ssc-gold hover:bg-white text-ssc-navy font-bold uppercase text-[12px] tracking-[0.15em] rounded-lg transition-all duration-300">
                      EXPLORE PRODUCTS <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );

  if (isHomePage) {
    return (
      <div className="bg-[#F8FAFC]">
        {galleryGrid}
        <Lightbox />
      </div>
    );
  }

  return (
    <div className="bg-[#050A13] min-h-screen flex flex-col font-poppins">
      
      {/* 
        ========================================================
        PREMIUM CINEMATIC HERO
        ========================================================
      */}
      <section className="relative w-full pt-[90px] sm:pt-[100px] pb-16 sm:pb-24 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.steelCoils} 
            alt={`${currentItem?.title || 'Gallery image'} - Srinivasa Steel Corporation`}
            className="w-full h-full object-cover object-[center_30%]"
            loading="eager"
          />
          {/* Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A13]/95 via-[#050A13]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A13] via-transparent to-[#050A13]/40" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
        </div>
        
        {/* Hero Content */}
        <div className="container-wide relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] sm:text-[12px] text-ssc-gold font-bold uppercase tracking-[0.25em] mb-6 block flex items-center gap-4"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-ssc-gold" /> OUR GALLERY
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-4 uppercase leading-[1.05] tracking-tighter drop-shadow-lg"
            >
              Crafted with <span className="text-ssc-gold">Strength.</span><br />
              Captured with <span className="text-ssc-gold">Precision.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed font-medium"
            >
              From raw steel to finished stockyards, explore our products, facilities, inventory and operations. We deliver quality in every stage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Gallery Experience */}
      {galleryGrid}
      
      {/* Lightbox Component */}
      <Lightbox />

    </div>
  );
};