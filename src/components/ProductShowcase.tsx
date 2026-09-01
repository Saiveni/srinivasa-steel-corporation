import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const products = [
  {
    index: "01",
    id: "TMT REBARS",
    name: "TMT Rebars",
    description: "Premium bundles of ribbed TMT reinforcement steel bars. Available in 5mm, 5.5mm, and 6mm TMT specifications.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
    alt: "Bundles of high-quality ribbed TMT reinforcement bars at Srinivasa Steel Corporation yard",
    meta: [{label: "GRADE", value: "FE 550D"}, {label: "SIZES", value: "5MM - 6MM"}]
  },
  {
    index: "02",
    id: "BINDING WIRE",
    name: "Binding Wire",
    description: "Industrial grade steel wire and binding wire coils designed for precise reinforcement anchoring.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "High-quality industrial steel binding wire supplied by Srinivasa Steel Corporation",
    meta: [{label: "MATERIAL", value: "MILD STEEL"}, {label: "GAUGE", value: "16-18 SWG"}]
  },
  {
    index: "03",
    id: "OIL RODS",
    name: "Oil Rods",
    description: "High-performance steel oil rods engineered for specialized industrial and mechanical applications.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    alt: "Professional grade industrial steel oil rods from Srinivasa Steel Corporation",
    meta: [{label: "APPLICATION", value: "INDUSTRIAL"}, {label: "STRENGTH", value: "HIGH YIELD"}]
  },
  {
    index: "04",
    id: "DECOILED STEEL",
    name: "Decoiled Steel",
    description: "Precision steel coil processing (2mm–4.5mm), straightening and cut-to-length services (10–40 feet).",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop",
    alt: "Industrial steel decoiling machine processing steel at Srinivasa Steel Corporation",
    meta: [{label: "THICKNESS", value: "2MM - 4.5MM"}, {label: "LENGTH", value: "10FT - 40FT"}]
  },
  {
    index: "05",
    id: "STEEL COILS",
    name: "Steel Coils",
    description: "Hot-rolled and cold-rolled steel coils available in bulk quantities for immediate dispatch and industrial manufacturing.",
    image: "/hero/hero-5.jpg", 
    alt: "Massive industrial steel coils supplied by Srinivasa Steel Corporation",
    meta: [{label: "TYPE", value: "HR / CR"}, {label: "AVAILABILITY", value: "BULK READY"}]
  },
  {
    index: "06",
    id: "STRUCTURAL STEEL",
    name: "Structural Steel",
    description: "Heavy-duty I-beams, channels, and angles designed for large-scale construction and framework.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
    alt: "Structural steel beams and channels available at Srinivasa Steel Corporation",
    meta: [{label: "CATEGORY", value: "HEAVY DUTY"}, {label: "USE", value: "FRAMEWORK"}]
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      {/* Specification Panel Surface */}
      <div className="relative h-full bg-ssc-steel-dark rounded-[14px] border border-ssc-on-dark-primary/10 overflow-hidden flex flex-col shadow-premium-soft transition-all duration-300 lg:group-hover:-translate-y-2 lg:group-hover:border-ssc-gold/30 lg:group-hover:shadow-premium-medium transform-gpu">
        
        {/* Brushed Metal Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none z-10" />

        {/* Image Area */}
        <div className="relative h-[160px] sm:h-[180px] lg:h-[240px] overflow-hidden shrink-0 bg-white">
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ssc-steel-dark via-transparent to-transparent" />

          {/* Index Chip */}
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-ssc-navy/70 backdrop-blur-md border border-ssc-on-dark-primary/10 rounded-full px-2 py-1 lg:group-hover:border-ssc-gold/40 transition-colors duration-500 z-20">
            <span className="text-ssc-gold text-[10px] lg:text-micro">
              {product.index}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-20 flex-1 flex flex-col p-4 sm:p-5 lg:p-7 pt-2 lg:pt-2 overflow-hidden">
          <h3 className="text-base lg:text-h4 text-ssc-on-dark-primary mb-2 lg:mb-3 lg:group-hover:text-ssc-gold transition-colors duration-500 uppercase font-bold">
            {product.name}
          </h3>

          <p className="text-xs lg:text-body text-ssc-on-dark-body flex-1 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {product.description}
          </p>

          {/* Industrial Metadata Row */}
          <div className="flex items-center gap-4 lg:gap-6 pt-3 lg:pt-4 border-t border-ssc-on-dark-primary/10 mt-3 lg:mt-0">
            {product.meta.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-ssc-on-dark-body text-[9px] lg:text-micro">
                  {m.label}
                </span>
                <span className="text-ssc-gold text-[10px] lg:text-small font-semibold uppercase mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Accent Hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ssc-gold/0 to-transparent lg:group-hover:via-ssc-gold/60 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = products.length;

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 16; // gap-4 is 16px
      const targetScroll = index * (cardWidth + gap);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(totalCards - 1, activeIndex + 1);
    scrollToIndex(nextIndex);
  };

  const onScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      const cardWidth = offsetWidth * 0.85;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      if (index !== activeIndex && index >= 0 && index < totalCards) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="products" className="relative section-spacing bg-gradient-to-br from-[#E2E6E9] via-[#ECEFF1] to-[#D9E0E3] overflow-hidden shadow-inner">
      {/* Architectural Background Grid - More visible against the metallic background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #94A3B8 1px, transparent 1px),
            linear-gradient(to bottom, #94A3B8 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} 
      />

      <div className="container-wide relative z-10 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-20 gap-8">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-micro mb-4 block">
                INDUSTRIAL SOLUTIONS
              </span>
              <h2 className="text-ssc-navy mb-6">
                Explore Our <span className="text-ssc-gold-dark">Products</span>
              </h2>
              <p className="text-body text-ssc-gray-body max-w-[560px]">
                High-performance steel products engineered for demanding applications. Consistent quality and reliable supply for construction and manufacturing.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-end text-right border-l border-ssc-navy/10 pl-10"
          >
            <span className="text-[11px] font-body uppercase tracking-[0.2em] text-ssc-gray-secondary mb-2">SSC / PRODUCT SPECIFICATIONS</span>
            <span className="text-[11px] font-body uppercase tracking-[0.2em] text-ssc-gold-dark/60 font-bold">EST. 1994</span>
          </motion.div>
        </div>
        
        {/* Premium Mobile Slider (Hidden on Desktop) */}
        <div className="lg:hidden w-full mt-6 -mx-4 px-4">
          <div 
            ref={containerRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth pb-6 pt-2 touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div 
                key={product.index} 
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {/* Indicators */}
            <div className="flex justify-center items-center gap-2">
              {products.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    activeIndex === idx 
                      ? 'w-8 bg-ssc-navy' 
                      : 'w-2 bg-ssc-navy/20'
                  }`}
                />
              ))}
            </div>

            {/* Premium Interactive Arrows */}
            <div className="flex items-center gap-12">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`w-14 h-14 rounded-full flex items-center justify-center border border-ssc-navy/10 bg-white shadow-sm transition-all active:scale-95 ${
                  activeIndex === 0 ? 'opacity-30' : 'hover:border-ssc-gold active:bg-ssc-navy active:text-white text-ssc-navy'
                }`}
                aria-label="Previous card"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={handleNext}
                disabled={activeIndex === totalCards - 1}
                className={`w-14 h-14 rounded-full flex items-center justify-center border border-ssc-navy/10 bg-white shadow-sm transition-all active:scale-95 ${
                  activeIndex === totalCards - 1 ? 'opacity-30' : 'hover:border-ssc-gold active:bg-ssc-navy active:text-white text-ssc-navy'
                }`}
                aria-label="Next card"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;