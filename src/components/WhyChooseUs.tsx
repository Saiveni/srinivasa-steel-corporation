import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const strengths = [
  {
    title: "40+ YEARS EXPERIENCE",
    description: "Built on a foundation of trust and industrial expertise since 1994.",
    label: "FOUNDATION-94",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200", // Foundation / Industrial yard
    alt: "Premium steel stockyard representing 40 years of excellence"
  },
  {
    title: "STEEL & TMT SUPPLY",
    description: "Comprehensive range of high-grade construction and structural steel.",
    label: "SPEC-550D",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop", // TMT Rebars
    alt: "High-quality TMT reinforcement steel rebars"
  },
  {
    title: "WIRE PRODUCTS",
    description: "Extensive inventory of high-quality industrial and construction wire.",
    label: "WIRE-SEC-01",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", // Wire coils
    alt: "Industrial steel wire coils"
  },
  {
    title: "DECOILING SOLUTIONS",
    description: "Precision engineered processing for custom industrial requirements.",
    label: "PROC-DECOIL",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Processing / Machinery
    alt: "Industrial steel processing machinery"
  },
  {
    title: "MOU / DEALER RELATIONS",
    description: "Direct supply relationships ensuring material authenticity and availability.",
    label: "PARTNER-CERT",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop", // Professional distribution
    alt: "Professional steel distribution and warehouse"
  },
  {
    title: "REGIONAL PRESENCE",
    description: "Strategically located yards in Vijayawada, Gannavaram, and Vizag.",
    label: "DIST-NETWORK",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Logistics
    alt: "Steel logistics and regional distribution center"
  }
];

const StrengthCard = ({ item, isMobile = false }: { item: typeof strengths[0], isMobile?: boolean }) => (
  <div className={`bg-white border border-ssc-navy/10 rounded-xl shadow-premium-soft flex flex-col group ${isMobile ? 'h-auto min-h-[380px] overflow-hidden' : 'h-full overflow-hidden'}`}>
    <div className={`relative ${isMobile ? 'h-36 overflow-hidden' : 'h-48 sm:h-56 overflow-hidden'}`}>
      <img 
        src={item.image} 
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/20 to-transparent opacity-60" />
    </div>
    <div className={`${isMobile ? 'p-4' : 'p-6'} flex flex-col flex-1`}>
      <span className="text-micro text-ssc-gold-dark mb-1">
        {item.label}
      </span>
      <h4 className={`text-ssc-navy font-bold mb-2 ${isMobile ? 'text-base' : 'text-lg'}`}>
        {item.title}
      </h4>
      <p className={`text-ssc-gray-body leading-relaxed mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>
        {item.description}
      </p>
      
      {/* Small specification details (existing from context, though not explicitly in previous file view, user asked to keep) */}
      <div className="mt-auto pt-3 border-t border-ssc-navy/5 flex items-center justify-between">
        <span className="text-[10px] font-bold text-ssc-navy/40 uppercase tracking-tighter">Verified Quality</span>
        <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold-dark/40" />
      </div>
    </div>
  </div>
);

export const WhyChooseUs = () => {
  useEffect(() => {
    // Add scroll padding to HTML for accurate scroll-to-id behavior
    document.documentElement.style.scrollPaddingTop = '100px';
    return () => {
      document.documentElement.style.scrollPaddingTop = '';
    };
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = strengths.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / width);
      if (index !== activeIndex && index >= 0 && index < totalCards) {
        setActiveIndex(index);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cards = Array.from(scrollRef.current.children);
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollTo(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(totalCards - 1, activeIndex + 1);
    scrollTo(nextIndex);
  };

  return (
    <section id="why-ssc" className="relative py-12 lg:py-24 bg-white overflow-visible z-[50]">
      {/* Structural Background Detail */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(var(--ssc-navy) 1px, transparent 1px), linear-gradient(90deg, var(--ssc-navy) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 mx-auto px-6 sm:pt-20 pt-[120px]">
        {/* Unified Heading Composition */}
        <div className="max-w-2xl mb-8 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-micro text-ssc-gold-dark mb-4 block">
              BUSINESS STRENGTHS
            </span>
            <h2 className="text-ssc-navy mb-6">
              WHY BUILD WITH <br />
              <span className="text-ssc-gold-dark">SRINIVASA STEEL?</span>
            </h2>
            <p className="text-ssc-gray-body max-w-xl text-lg">
              From premium TMT rebar to industrial decoiling, we provide the physical foundation for regional infrastructure development.
            </p>
          </motion.div>
        </div>

        {/* Desktop Grid (Locked) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
          {strengths.map((item) => (
            <StrengthCard key={item.title} item={item} />
          ))}
        </div>

        <div className="lg:hidden -mx-6 px-6 relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-8 px-4"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollPaddingLeft: '1rem',
              scrollPaddingRight: '1rem'
            }}
          >
            {strengths.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <StrengthCard item={item} isMobile={true} />
              </div>
            ))}
            {/* Spacer for proper alignment of the last card */}
            <div className="flex-shrink-0 w-4" />
          </div>
          
          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              {strengths.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    activeIndex === idx ? 'w-6 bg-ssc-gold-dark' : 'w-2 bg-ssc-navy/10'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex items-center gap-12">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`w-14 h-14 rounded-full flex items-center justify-center border border-ssc-navy/10 bg-white shadow-premium-medium transition-all active:scale-95 ${
                  activeIndex === 0 ? 'opacity-30' : 'active:border-ssc-gold-dark/50'
                }`}
                aria-label="Previous card"
              >
                <ChevronLeft className={`w-6 h-6 ${activeIndex === 0 ? 'text-ssc-navy/20' : 'text-ssc-gold-dark'}`} />
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex === totalCards - 1}
                className={`w-14 h-14 rounded-full flex items-center justify-center border border-ssc-navy/10 bg-white shadow-premium-medium transition-all active:scale-95 ${
                  activeIndex === totalCards - 1 ? 'opacity-30' : 'active:border-ssc-gold-dark/50'
                }`}
                aria-label="Next card"
              >
                <ChevronRight className={`w-6 h-6 ${activeIndex === totalCards - 1 ? 'text-ssc-navy/20' : 'text-ssc-gold-dark'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 lg:mt-32 relative bg-ssc-navy rounded-[24px] overflow-hidden shadow-premium-strong border border-white/10"
        >
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left p-10 lg:p-20">
            <div>
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                READY TO <span className="text-ssc-gold">STRENGTHEN</span><br />
                YOUR PROJECTS?
              </h3>
              <p className="text-white/40 text-micro">
                40+ Years of Proven Industrial Quality
              </p>
            </div>
            
            <Link to="/contact" search={{ product: "" }} className="whitespace-nowrap bg-ssc-gold text-ssc-navy px-12 py-5 rounded-lg font-bold text-sm uppercase hover:bg-white transition-all duration-500 shadow-premium-medium hover:scale-105 cursor-pointer flex items-center justify-center">
              GET A CUSTOM QUOTE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
