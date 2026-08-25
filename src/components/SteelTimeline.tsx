import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: "1994",
    title: "ESTABLISHED",
    description: "Founded Srinivasa Steel Corporation in Hyderabad.",
  },
  {
    year: "2000s",
    title: "EXPANDED TO VIZAG",
    description: "Expanded operations to the Visakhapatnam steel market.",
  },
  {
    year: "2010s",
    title: "MOU DEALER STATUS",
    description: "Became MOU Dealer for Vizag Steel Plant.",
  },
  {
    year: "TODAY",
    title: "REGIONAL PRESENCE",
    description: "3 locations. 30+ years of trust. Thousands of tons delivered.",
  }
];

export const SteelTimeline = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animated position for the gold dot
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" ref={containerRef} className="relative py-16 lg:py-24 legacy-grid-bg overflow-visible bg-[#f5f6f7] z-[50]">
      <div className="container-wide relative z-10 mx-auto sm:pt-20 pt-[120px]">
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5 lg:mb-7">
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
                <span className="text-micro text-ssc-gold/80">
                  Corporate Evolution
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
            </div>
            <h2 className="text-ssc-navy">
              COMPANY <span className="text-ssc-gold">LEGACY</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Version - Horizontal Structural Design */}
        <div className="hidden lg:block relative mt-24 mb-32">
          {/* Main Horizontal Steel Line - Positioned ABOVE cards */}
          <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-b from-[#b8bec7] via-[#e6e8ec] to-[#b8bec7] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] z-20">
            {/* Animated Progress Overlay */}
            <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="absolute inset-0 bg-gradient-to-r from-ssc-gold via-ssc-gold to-ssc-gold-dark rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            />
            
            {/* Moving Gold Focus Node */}
            <motion.div 
              style={{ left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-ssc-gold shadow-[0_0_20px_rgba(212,175,55,0.6)] z-30 border-2 border-white"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10 pt-1">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative flex flex-col items-center pt-20">
                {/* Structural Hanging Hook Connector */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-[#e6e8ec] to-[#b8bec7] z-0" />
                
                {/* Hook Head Visual */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-5 h-5 z-20">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-ssc-gold drop-shadow-md">
                    <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Node Point on the line */}
                <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-ssc-gold-dark z-30 shadow-sm" />
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="w-full mt-4"
                >
                  <div className="bg-white border border-ssc-navy/5 p-7 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 group relative overflow-hidden">
                    {/* Subtle metallic corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-ssc-gold/5 to-transparent pointer-events-none" />
                    
                    <span className="text-micro text-ssc-gold block mb-3 uppercase font-bold tracking-[0.2em]">
                      {ms.year}
                    </span>
                    <h4 className="text-ssc-navy mb-3 text-lg font-bold tracking-tight">
                      {ms.title}
                    </h4>
                    <p className="text-[14px] text-ssc-gray-body leading-relaxed">
                      {ms.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version - Vertical */}
        <div className="lg:hidden relative flex flex-col items-center pt-8 pb-12">
          {/* Silver Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-ssc-navy/10 -translate-x-1/2 z-0">
            {/* Animated Silver Path */}
            <motion.div 
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-200 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
            {/* Moving Gold Dot */}
            <motion.div 
              style={{ top: dotY }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-ssc-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20 border-2 border-[#f5f6f7]"
            />
          </div>
          
          <div className="flex flex-col gap-10 w-full relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex items-start w-full pl-6 group pt-4"
              >
                {/* Hanging Hook for Mobile */}
                <div className="absolute left-[24px] top-0 w-[2px] h-10 bg-gradient-to-b from-ssc-navy/10 to-ssc-navy/30 -translate-x-1/2 z-0" />
                
                {/* Static Milestone Dot / Hook Base */}
                <div className="absolute left-[24px] top-10 -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-ssc-gold z-10 shadow-sm" />
                
                <div className="bg-white border border-ssc-navy/5 p-6 rounded-[12px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] w-full ml-10 overflow-hidden">
                  <span className="text-micro text-ssc-gold block mb-1 uppercase font-bold tracking-widest">
                    {ms.year}
                  </span>
                  <h4 className="text-ssc-navy mb-2 text-base font-bold">
                    {ms.title}
                  </h4>
                  <p className="text-sm text-ssc-gray-body leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};