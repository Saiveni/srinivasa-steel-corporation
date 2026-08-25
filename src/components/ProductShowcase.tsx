import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const products = [
  {
    index: "01",
    id: "TMT REBARS",
    name: "TMT Rebars",
    description: "Premium bundles of ribbed TMT reinforcement steel bars. Available in 5mm, 5.5mm, and 6mm TMT specifications.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
    alt: "Bundles of high-quality ribbed TMT reinforcement bars in a professional steel yard"
  },
  {
    index: "02",
    id: "BINDING WIRE",
    name: "Binding Wire",
    description: "Industrial grade steel wire and binding wire coils designed for precise reinforcement anchoring.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "High-quality industrial steel wire and binding wire coils"
  },
  {
    index: "03",
    id: "OIL RODS",
    name: "Oil Rods",
    description: "High-performance steel oil rods engineered for specialized industrial and mechanical applications.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    alt: "Professional grade industrial steel rods"
  },
  {
    index: "04",
    id: "DECOILED STEEL",
    name: "Decoiled Steel",
    description: "Precision steel coil processing (2mm–4.5mm), straightening and cut-to-length services (10–40 feet).",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "Industrial steel decoiling machine processing a large steel coil"
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[450px] w-full perspective-1000"
    >
      <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-12">
        {/* Main Card Surface */}
        <div className="absolute inset-0 bg-white rounded-[24px] border border-ssc-navy/10 shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
          {/* Top 3D Indicator */}
          <div className="absolute top-6 right-8 z-20">
            <span className="text-micro text-ssc-gold-dark">
              {product.index}
            </span>
          </div>

          {/* Image Area with 3D Float Effect */}
          <div className="h-[240px] w-full overflow-hidden relative bg-[#F8FAFC]">
            <motion.img 
              src={product.image} 
              alt={product.alt}
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated Industrial Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 relative">
            {/* 3D Label */}
            <div className="inline-block px-3 py-1 rounded-full bg-ssc-gold-dark/10 mb-4">
              <span className="text-micro text-ssc-gold-dark uppercase">
                PREMIUM GRADE
              </span>
            </div>
            
            <h3 className="text-ssc-navy mb-3 group-hover:text-ssc-gold-dark transition-colors duration-500">
              {product.name}
            </h3>
            
            <p className="text-body text-ssc-gray-body line-clamp-2">
              {product.description}
            </p>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ssc-gold-dark/0 to-transparent group-hover:via-ssc-gold-dark/40 transition-all duration-700" />
          </div>
        </div>

        {/* 3D Depth Shadows */}
        <div className="absolute -inset-2 bg-black/5 blur-2xl -z-10 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4" />
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="relative section-spacing bg-white overflow-hidden">
      {/* Architectural Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, var(--ssc-navy) 1px, transparent 1px),
            linear-gradient(to bottom, var(--ssc-navy) 1px, transparent 1px)
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;