import React from 'react';
import { motion } from 'framer-motion';
import vizagAsset from '@/assets/vizag-steel-logo.jpg.asset.json';
import jindalAsset from '@/assets/jindal-panther-logo.jpg.asset.json';
import simhadriAsset from '@/assets/simhadri-tmt-logo.jpg.asset.json';

export const BrandStrip = () => {
  const brands = [
    { 
      name: "VIZAG STEEL", 
      logo: vizagAsset.url, 
      subtitle: "MOU DEALER" 
    },
    { 
      name: "JINDAL PANTHER", 
      logo: jindalAsset.url, 
      subtitle: "TMT REBARS DEALER" 
    },
    { 
      name: "SIMHADRI TMT", 
      logo: simhadriAsset.url, 
      subtitle: "SUPPLY PARTNER" 
    }
  ];

  return (
    <section className="section-padding bg-ssc-navy border-y border-ssc-gold/10 overflow-hidden relative">
      {/* Subtle industrial background effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-micro mb-4 block">
            STRATEGIC PARTNERSHIPS
          </span>
          <h2 className="text-ssc-on-dark-primary">
            TRUSTED DEALER RELATIONSHIPS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-center">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center p-6 md:p-8 rounded-xl bg-white border border-ssc-gold/20 shadow-premium-soft hover:shadow-premium-medium hover:border-ssc-gold/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle metallic sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Increased Logo Size with White Background Card */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 flex items-center justify-center mb-6">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                />
              </div>

              {/* 3. PARTNER NAME — Strong Title */}
              <h3 className="text-body-large font-bold text-ssc-navy tracking-tight mb-2 transition-colors duration-300 group-hover:text-ssc-gold">
                {brand.name}
              </h3>

              {/* 4. PARTNERSHIP TYPE — Gold accent label */}
              <div className="inline-block px-3 py-1 rounded-full bg-ssc-gold/5 border border-ssc-gold/10">
                <span className="text-[10px] font-bold text-ssc-gold uppercase tracking-[0.15em]">
                  {brand.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};