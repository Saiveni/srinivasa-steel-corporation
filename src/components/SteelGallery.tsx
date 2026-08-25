import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, ArrowRight, ImageIcon,
  Grid, Hammer, Package, CircleDashed, RotateCw, Warehouse, ShieldCheck
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

// Business-accurate assets from src/assets/
const assets = {
  rebarCoils: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  rebarDetail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  rebarStraight: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  rebarWarehouse: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  // Fallbacks for variety using specific Unsplash steel imagery that meets the "Steel visible" rule
  steelCoils: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
  steelStock: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  steelLoading: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  wireProducts: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop",
};

const categoriesMap = [
  { id: "ALL", label: "ALL", icon: Grid },
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
    title: "STOCK & YARD",
    desc: "Organized. Efficient. Always Ready.",
  },
  {
    id: 2,
    category: "STEEL PRODUCTS",
    image: assets.steelStock, // Will act as Steel Plant for visual
    title: "STEEL PLANT",
    desc: "Powering progress with precision and strength.",
  },
  {
    id: 3,
    category: "TMT REBARS",
    image: assets.rebarStraight,
    title: "TMT REBARS",
    desc: "Stronger foundations. Stronger tomorrow.",
  },
  {
    id: 4,
    category: "STEEL PRODUCTS",
    image: assets.steelLoading,
    title: "STEEL PRODUCTS",
    desc: "Built to shape a stronger world.",
  },
  {
    id: 5,
    category: "WIRE PRODUCTS",
    image: assets.wireProducts,
    title: "WIRE PRODUCTS",
    desc: "Flexible solutions. Reliable strength.",
  },
  {
    id: 6,
    category: "DECOILING",
    image: assets.steelCoils,
    title: "DECOILING",
    desc: "Precision uncoiling. Perfect results.",
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

  const getCategoryIcon = (categoryName: string) => {
    const cat = categoriesMap.find(c => c.id === categoryName);
    return cat ? cat.icon : Grid;
  };

  const galleryGrid = (
    <>
      {/* Premium Horizontal Navigation */}
      <div className="flex flex-nowrap items-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-4 pt-1 px-1 -mx-4 sm:mx-0 sm:px-0">
        {/* Safe left padding for mobile scroll */}
        <div className="w-1 shrink-0 sm:hidden" />
        
        {categoriesMap.map((cat) => {
          const Icon = cat.icon;
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 shrink-0 relative overflow-hidden group border ${
                isActive 
                  ? "bg-ssc-navy text-white border-ssc-navy shadow-[0_10px_20px_rgba(11,19,32,0.15)]" 
                  : "bg-white text-ssc-navy border-ssc-navy/10 hover:border-ssc-gold/40 hover:bg-ssc-gold/5"
              }`}
            >
              {/* Active gold indicator line */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-ssc-gold shadow-[0_0_10px_#d4af37]" />
              )}
              
              <Icon 
                size={20} 
                className={`transition-colors duration-300 ${isActive ? "text-ssc-gold" : "text-ssc-navy/60 group-hover:text-ssc-gold"}`} 
              />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                {cat.label}
              </span>
            </button>
          )
        })}
        
        {/* Safe right padding for mobile scroll */}
        <div className="w-4 shrink-0 sm:hidden" />
      </div>

      {/* 
        ==============================
        DESKTOP LAYOUT (3-Column Grid)
        ==============================
      */}
      <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 auto-rows-[380px] mb-12">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => {
            const ItemIcon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(item.id)}
                className="group relative rounded-[20px] overflow-hidden cursor-pointer shadow-premium-soft hover:shadow-premium-strong transition-all duration-500 bg-ssc-navy"
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Permanent Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-[#0b1320]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Card Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start transform transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Category Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#1c222f] border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center justify-center mb-5 group-hover:border-ssc-gold/50 transition-colors duration-300">
                    <ItemIcon size={20} className="text-ssc-gold" />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-white font-bold text-xl mb-2 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                  
                  {/* Arrow Right - Slides in on hover */}
                  <div className="absolute bottom-8 right-8 text-ssc-gold transform translate-x-0 opacity-70 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* 
        ==============================
        MOBILE LAYOUT (Vertical List)
        ==============================
      */}
      <div className="lg:hidden flex flex-col gap-4 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => {
            const ItemIcon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(item.id)}
                className="group relative bg-white border border-ssc-navy/10 rounded-[16px] shadow-sm flex items-center p-4 gap-4 overflow-hidden active:scale-[0.98] transition-transform"
              >
                {/* Left: Dark Circular Badge */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-ssc-navy flex items-center justify-center shadow-inner">
                  <ItemIcon size={20} className="text-ssc-gold" />
                </div>
                
                {/* Center: Text Content */}
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="text-ssc-navy font-bold text-sm tracking-wide uppercase truncate mb-1">
                    {item.title}
                  </h3>
                  <p className="text-ssc-gray-body text-[11px] leading-tight line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                
                {/* Right: Square Thumbnail + Arrow */}
                <div className="shrink-0 flex items-center gap-3">
                  <ArrowRight size={16} className="text-ssc-gold opacity-80 hidden sm:block" />
                  <div className="w-16 h-16 rounded-[10px] overflow-hidden relative shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ssc-navy/10" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Trust Strip */}
      <div className="bg-[#0b1320] rounded-[20px] sm:rounded-[24px] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl border border-white/5">
        
        {/* Subtle steel/rebar texture on right side */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 opacity-10 pointer-events-none"
             style={{
               backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, #fff 10px, #fff 12px)`,
               maskImage: 'linear-gradient(to right, transparent, black)'
             }}
        />

        {/* Left Side Content */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10 w-full lg:w-auto">
          {/* Gold Shield Icon */}
          <div className="w-16 h-16 shrink-0 rounded-2xl border border-ssc-gold/30 bg-gradient-to-br from-[#1c222f] to-[#0a101d] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <ShieldCheck size={32} className="text-ssc-gold" strokeWidth={1.5} />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg sm:text-xl tracking-wider mb-2">
              BUILT ON TRUST. DRIVEN BY QUALITY.
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Srinivasa Steel Corporation — Building a stronger tomorrow, with steel that stands the test of time.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const Lightbox = () => (
    <AnimatePresence>
      {currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-6xl w-full flex flex-col items-center">
            <motion.img 
              key={currentItem.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={currentItem.image} 
              alt={currentItem.title}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="text-xs text-ssc-gold uppercase tracking-widest font-bold mb-2 block">
                {currentItem.category}
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide">
                {currentItem.title}
              </h3>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isHomePage) {
    return (
      <>
        {galleryGrid}
        <Lightbox />
      </>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-14 lg:pb-24 bg-ssc-steel-light">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-micro text-ssc-gold-dark uppercase mb-6 block">
                OUR GALLERY
              </span>
              <h1 className="text-h1 text-ssc-navy mb-8 uppercase">
                STEEL. <br />
                IN ITS ELEMENT.
              </h1>
              <p className="text-body text-ssc-gray-body max-w-md">
                A closer look at our products, steel stock and decoiling capabilities.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] rounded-[24px] overflow-hidden shadow-2xl shadow-ssc-navy/5">
              <img 
                src={assets.rebarWarehouse} 
                alt="Srinivasa Steel Stock and Warehouse Operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="mb-12">
             <p className="text-body text-ssc-gray-body border-l-2 border-ssc-gold-dark pl-6 py-1 max-w-2xl">
              From reinforcement steel to decoiling and stock handling, every image reflects the materials and capabilities behind Srinivasa Steel Corporation.
            </p>
          </div>

          {galleryGrid}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-ssc-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ssc-gold/[0.05] to-transparent" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-h2 text-ssc-on-dark-primary uppercase mb-6">
            REQUEST A <span className="text-ssc-gold">QUOTE.</span>
          </h2>
          <p className="text-ssc-on-dark-body text-body-large max-w-2xl mx-auto mb-12">
            Talk to Srinivasa Steel Corporation about TMT, steel products and decoiling requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              asChild
              className="w-full sm:w-auto"
            >
              <Link to="/contact" search={{ product: "" }}>GET A QUOTE <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="w-full sm:w-auto border-ssc-on-dark-primary/20 text-ssc-on-dark-primary hover:bg-ssc-on-dark-primary/10"
            >
              <Link to="/products" search={{ product: "" }}>VIEW PRODUCTS</Link>
            </Button>
          </div>
        </div>
      </section>
      <Lightbox />
    </div>
  );
};