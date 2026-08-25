import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, ImageIcon } from 'lucide-react';
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

const galleryItems = [
  {
    id: 1,
    category: "TMT REBARS",
    image: assets.rebarStraight,
    title: "Straight Length TMT Rebars",
    size: "large", // Feature image
  },
  {
    id: 2,
    category: "WIRE PRODUCTS",
    image: assets.wireProducts,
    title: "Binding Wire Coils",
    size: "medium",
  },
  {
    id: 4,
    category: "DECOILING",
    image: assets.steelCoils,
    title: "Steel Coil Processing",
    size: "wide",
  },
  {
    id: 5,
    category: "STOCK & YARD",
    image: assets.rebarWarehouse,
    title: "Organized Steel Warehouse",
    size: "medium",
  },
  {
    id: 6,
    category: "STEEL PRODUCTS",
    image: assets.steelStock,
    title: "Industrial Steel Rods",
    size: "medium",
  },
  {
    id: 7,
    category: "TMT REBARS",
    image: assets.rebarCoils,
    title: "Bundled Reinforcement Steel",
    size: "wide",
  },
  {
    id: 8,
    category: "STOCK & YARD",
    image: assets.steelLoading,
    title: "Supply Operations & Loading",
    size: "tall",
  }
];

const categories = ["ALL", "TMT REBARS", "STEEL PRODUCTS", "WIRE PRODUCTS", "DECOILING", "STOCK & YARD"];

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

  const galleryGrid = (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12 border-b border-ssc-navy/5 pb-4 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-micro transition-all duration-300 relative py-2 whitespace-nowrap ${
              filter === cat ? "text-ssc-navy" : "text-ssc-navy/30 hover:text-ssc-navy/60"
            }`}
          >
            {cat}
            {filter === cat && (
              <motion.div 
                layoutId="filter-accent"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-ssc-gold-dark"
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[200px]">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedImage(item.id)}
              className={`group relative rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500
                ${item.size === 'large' ? 'lg:col-span-8 lg:row-span-2' : ''}
                ${item.size === 'medium' ? 'lg:col-span-4 lg:row-span-2' : ''}
                ${item.size === 'tall' ? 'lg:col-span-4 lg:row-span-3' : ''}
                ${item.size === 'wide' ? 'lg:col-span-8 lg:row-span-2' : ''}
              `}
            >
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[500ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-background/5 flex items-center justify-center">
                  <ImageIcon className="text-foreground/20" size={48} />
                </div>
              )}
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-micro text-ssc-gold uppercase mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
            className="absolute top-8 right-8 text-white/50 hover:text-primary transition-colors z-[110]"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-primary transition-colors z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-primary transition-colors z-[110]"
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
            <div className="mt-8 text-center">
              <span className="text-micro text-ssc-gold uppercase mb-2 block">
                {currentItem.category}
              </span>
              <h3 className="text-white text-h3 uppercase">
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
      <section className="bg-ssc-steel-light/30">
        <div className="container-wide">
          {galleryGrid}
        </div>
        <Lightbox />
      </section>
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