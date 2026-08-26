import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tmtRebars from '@/assets/tmt-rebars.jpg';

const businessAreas = [
  {
    index: "01",
    code: "EXP-40Y",
    title: "40+ YEARS EXPERIENCE",
    description: "A legacy of trust and excellence in the steel industry since 1994, delivering unmatched reliability across South India.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200", // Foundation rebar
    alt: "Premium steel industrial facility representing 40 years of excellence",
    meta: [
      { label: "ESTABLISHED", value: "1994" },
      { label: "LEGACY", value: "4 DECADES" }
    ]
  },
  {
    index: "02",
    code: "LOG-DEL",
    title: "DELIVERY ON TIME",
    description: "Reliable and timely delivery to keep your projects moving without unnecessary delays.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200", // Heavy truck transport
    alt: "Heavy truck transporting steel materials for reliable delivery",
    meta: [
      { label: "LOGISTICS", value: "EFFICIENT" },
      { label: "TIMELINE", value: "ON-SCHEDULE" }
    ]
  },
  {
    index: "03",
    code: "WGT-FAC",
    title: "WEIGHMENT FACILITY",
    description: "Accurate weighment facility for transparent and reliable steel quantity verification.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200", // Industrial weighing facility
    alt: "Industrial weighbridge facility for accurate steel weighment",
    meta: [
      { label: "ACCURACY", value: "PRECISION" },
      { label: "PROCESS", value: "VERIFIED" }
    ]
  },
  {
    index: "04",
    code: "CRN-LDG",
    title: "CRANE LOADING & UNLOADING",
    description: "Crane loading and unloading capability for safe, efficient and faster material handling.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=1200", // Crane / loading
    alt: "Industrial crane safely handling and loading heavy steel materials",
    meta: [
      { label: "HANDLING", value: "MECHANIZED" },
      { label: "SAFETY", value: "ENHANCED" }
    ]
  },
  {
    index: "05",
    code: "CUT-SVC",
    title: "ALL SIZE CUTTINGS AVAILABLE",
    description: "Steel cutting available in all required sizes from 10 ft to 40 ft.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200", // Steel cutting / sparks
    alt: "Precision steel cutting equipment in operation",
    meta: [
      { label: "RANGE", value: "10 FT - 40 FT" },
      { label: "SERVICE", value: "CUSTOM SIZING" }
    ]
  },
  {
    index: "06",
    code: "BLK-QTY",
    title: "BULK QUANTITY AVAILABLE",
    description: "Steel materials available in flexible quantities, from smaller requirements of 1–2 tons to larger bulk orders.",
    image: tmtRebars,
    alt: "Large organized inventory of bulk TMT steel bars in stockyard",
    meta: [
      { label: "CAPACITY", value: "HIGH VOL" },
      { label: "ORDER SIZE", value: "FLEXIBLE" }
    ]
  }
];

const SpecCard = ({ area, index }: { area: typeof businessAreas[0] & { logos?: string[] }, index: number }) => {
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

        {/* Image / Logos Area */}
        <div className="relative h-[160px] sm:h-[180px] lg:h-[240px] overflow-hidden shrink-0 bg-white">
          {area.logos ? (
            <div className="w-full h-full flex items-center justify-center gap-4 px-4 bg-white">
              {area.logos.map((logo, idx) => (
                <div key={idx} className="flex-1 flex items-center justify-center h-full max-h-[100px]">
                  <img src={logo} alt={`Partner logo ${idx + 1}`} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <img
                src={area.image}
                alt={area.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ssc-steel-dark via-transparent to-transparent" />
            </>
          )}

          {/* Index Chip */}
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-ssc-navy/70 backdrop-blur-md border border-ssc-on-dark-primary/10 rounded-full px-2 py-1 lg:group-hover:border-ssc-gold/40 transition-colors duration-500 z-20">
            <span className="text-ssc-gold text-[10px] lg:text-micro">
              {area.index}
            </span>
          </div>

          {/* Technical Code */}
          <div className="absolute top-3 right-3 z-20">
            <span className="text-ssc-on-dark-primary/40 text-[10px] lg:text-micro lg:group-hover:text-ssc-gold/70 transition-colors duration-500 mix-blend-difference">
              {area.code}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-20 flex-1 flex flex-col p-4 sm:p-5 lg:p-7 pt-2 lg:pt-2 overflow-hidden">
          <h3 className="text-base lg:text-h4 text-ssc-on-dark-primary mb-2 lg:mb-3 lg:group-hover:text-ssc-gold transition-colors duration-500 uppercase font-bold">
            {area.title}
          </h3>

          <p className="text-xs lg:text-body text-ssc-on-dark-body flex-1 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {area.description}
          </p>

          {/* Industrial Metadata Row */}
          <div className="flex items-center gap-4 lg:gap-6 pt-3 lg:pt-4 border-t border-ssc-on-dark-primary/10 mt-3 lg:mt-0">
            {area.meta.map((m) => (
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

const MobileCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = businessAreas.length;

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 16; // 4 * 4 (gap-4)
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
    <div className="lg:hidden w-full overflow-hidden mt-10">
      <div 
        ref={containerRef}
        onScroll={onScroll}
        className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {businessAreas.map((area, index) => (
          <div 
            key={area.index} 
            className="flex-shrink-0 w-[85%] snap-center"
          >
            <SpecCard area={area} index={index} />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col items-center gap-6 mt-10">
        {/* Indicators */}
        <div className="flex justify-center items-center gap-2">
          {businessAreas.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 transition-all duration-500 rounded-full ${
                activeIndex === idx 
                  ? 'w-8 bg-ssc-gold' 
                  : 'w-2 bg-ssc-on-dark-primary/10'
              }`}
            />
          ))}
        </div>

        {/* Premium Industrial Arrows */}
        <div className="flex items-center gap-12">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center border border-ssc-on-dark-primary/10 bg-ssc-steel-dark shadow-premium-medium transition-all active:scale-95 ${
              activeIndex === 0 ? 'opacity-30' : 'active:border-ssc-gold/50'
            }`}
            aria-label="Previous card"
          >
            <ChevronLeft className={`w-6 h-6 ${activeIndex === 0 ? 'text-ssc-on-dark-primary/20' : 'text-ssc-gold'}`} />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === totalCards - 1}
            className={`w-14 h-14 rounded-full flex items-center justify-center border border-ssc-on-dark-primary/10 bg-ssc-steel-dark shadow-premium-medium transition-all active:scale-95 ${
              activeIndex === totalCards - 1 ? 'opacity-30' : 'active:border-ssc-gold/50'
            }`}
            aria-label="Next card"
          >
            <ChevronRight className={`w-6 h-6 ${activeIndex === totalCards - 1 ? 'text-ssc-on-dark-primary/20' : 'text-ssc-gold'}`} />
          </button>
        </div>
      </div>
      
      {/* Technical Data End */}
      <div className="mt-8 px-6 pb-2 opacity-[0.05] border-t border-ssc-on-dark-primary/10 pt-4 mb-2">
        <div className="w-8 h-[1px] bg-ssc-on-dark-primary mb-2" />
        <span className="text-micro text-ssc-on-dark-primary">END-SYS-OUTPUT</span>
      </div>
    </div>
  );
};

export const AboutBusinessCards = () => {
  return (
    <section id="business-areas" className="relative py-12 lg:py-28 bg-ssc-navy overflow-hidden">
      {/* Engineered Background System */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, var(--ssc-on-dark-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--ssc-on-dark-primary) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/20 to-transparent" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-ssc-gold/[0.04] blur-[120px]" />
      </div>

      <div className="container-wide relative z-10 max-w-[1400px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[640px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-ssc-gold" />
              <span className="text-ssc-gold text-micro uppercase">
                DISCOVER OUR CAPABILITIES
              </span>
            </div>
            <h2 className="text-h2 text-ssc-on-dark-primary mb-8 uppercase">
              ENGINEERED <span className="text-ssc-gold">STEEL</span> SOLUTIONS.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-end text-right border-l border-ssc-on-dark-primary/10 pl-8"
          >
            <span className="text-ssc-on-dark-secondary/30 text-micro mb-2">SSC / BUSINESS AREAS</span>
            <span className="text-ssc-gold text-micro font-bold">06 DIVISIONS — EST. 1994</span>
          </motion.div>
        </div>

        {/* Desktop/Tablet Specification Panel Grid (Locked) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">


          {businessAreas.map((area, index) => (
            <SpecCard key={area.index} area={area} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <MobileCarousel />
      </div>
    </section>
  );
};
