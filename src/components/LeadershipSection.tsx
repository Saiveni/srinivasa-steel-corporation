import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: "M.S.V. BHASKAR",
    designation: "MANAGING PARTNER",
    description: "Visionary leader driving the strategic growth and industrial excellence of Srinivasa Steel Corporation since inception.",
    image: "/__l5e/assets-v1/2ed039f3-80e9-44e2-86ee-359f130097a9/leader-bhaskar.png"
  },
  {
    name: "M.V. RAMANAKUMAR",
    designation: "PARTNER",
    description: "Expert in supply chain optimization and steel procurement, ensuring the highest standards of material quality.",
    image: "/__l5e/assets-v1/2ed039f3-80e9-44e2-86ee-359f130097a9/leader-raman.png"
  },
  {
    name: "M.V.N.M. YESHUVANTH",
    designation: "PARTNER",
    description: "Focusing on modern engineering solutions and expanding the company's footprint across new industrial sectors.",
    image: "/__l5e/assets-v1/2ed039f3-80e9-44e2-86ee-359f130097a9/leader-yeshu.png"
  }
];

const LeaderCard = ({ leader, index }: { leader: typeof leaders[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8, 
        ease: [0.21, 1, 0.36, 1] 
      }}
      className="relative group w-full"
    >
      {/* 3D Animated Card */}
      <motion.div 
        whileHover={{ rotateY: 8, rotateX: -5, translateZ: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-[#1C2533] rounded-[16px] p-8 border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center h-full z-10 overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Surface Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
        
        {/* Net/Square Image Implementation */}
        <div className="relative w-40 h-40 mb-8 overflow-hidden rounded-[12px] shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-700">
          <img 
            src={leader.image} 
            alt={leader.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle light sweep */}
          <motion.div 
             animate={{ x: ['-100%', '200%'] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
           />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center flex-1">
          <h3 className="text-[20px] lg:text-[22px] text-white mb-2 font-bold tracking-tight uppercase">
            {leader.name}
          </h3>
          
          <div className="inline-block px-4 py-1.5 bg-ssc-gold/10 border border-ssc-gold/20 rounded-full mb-6">
            <span className="text-[11px] text-ssc-gold font-bold tracking-[0.1em] uppercase">
              {leader.designation}
            </span>
          </div>
          
          <p className="text-[14px] text-ssc-gray-muted leading-relaxed max-w-[280px]">
            {leader.description}
          </p>
        </div>

        {/* Bottom Detail */}
        <div className="mt-8 pt-6 border-t border-white/5 w-full">
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-1 h-1 rounded-full bg-ssc-gold/30" />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="relative py-24 lg:py-32 bg-[#0F1621] overflow-visible z-[50]">
      {/* Dynamic Geometric Technical Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.2) 1px, transparent 0)', 
               backgroundSize: '40px 40px' 
             }} />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" 
             style={{ 
               backgroundImage: 'linear-gradient(45deg, transparent 48%, #fff 50%, transparent 52%)',
               backgroundSize: '100px 100px'
             }} />
      </div>

      <div className="container-wide relative z-10 mx-auto sm:pt-20 pt-[120px]">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5 lg:mb-7">
              <div className="w-8 h-[1px] bg-ssc-gold-dark/40" />
              <span className="text-micro text-ssc-gold-dark uppercase tracking-[0.16em]">
                LEADERSHIP TEAM
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold-dark/40" />
            </div>
            <h2 className="text-h2 text-white uppercase tracking-tight">
              OUR <span className="text-ssc-gold">LEADERSHIP</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-12 max-w-[1200px] mx-auto relative items-stretch px-6 md:px-0 py-8">
          {leaders.map((leader, idx) => (
            <LeaderCard key={leader.name} leader={leader} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-center mt-20"
        >
          <span className="text-white/10 text-[10px] font-body font-bold tracking-[0.6em] uppercase">
            THREE PEOPLE • ONE FOUNDATION • ONE ORGANIZATION
          </span>
        </motion.div>
      </div>
    </section>

  );
};
