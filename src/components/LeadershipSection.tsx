import React from 'react';
import { motion } from 'framer-motion';
import { User, MoveRight } from 'lucide-react';

const leaders = [
  {
    name: "M.S.V. BHASKAR",
    designation: "MANAGING PARTNER",
    description: "Visionary leader driving the strategic growth and industrial excellence of Srinivasa Steel Corporation.",
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
      className="relative group w-full h-full"
    >
      {/* 3D Animated Card */}
      <motion.div 
        whileHover={{ translateY: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-[#131A26] rounded-[16px] p-8 border-t border-l border-r border-white/5 border-b-[3px] border-b-ssc-gold flex flex-col items-center text-center h-full z-10 overflow-hidden"
      >
        {/* Card Surface Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
        
        {/* User Icon Placeholder */}
        <div className="relative w-[84px] h-[84px] mb-8 flex items-center justify-center rounded-full border border-white/20">
          <div className="absolute inset-0 rounded-full border-t-[2px] border-r-[2px] border-transparent border-t-ssc-gold transform -rotate-[60deg]" />
          <User className="w-8 h-8 text-white/80" strokeWidth={1.5} />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center flex-1 w-full">
          <h3 className="text-[18px] lg:text-[20px] text-white mb-4 font-bold tracking-tight uppercase">
            {leader.name}
          </h3>
          
          <div className="flex items-center w-[85%] mb-6">
            <div className="flex-1 h-[1px] bg-white/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold mx-3 shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
            <div className="flex-1 h-[1px] bg-white/20"></div>
          </div>

          <div className="inline-block px-8 py-1.5 border border-ssc-gold/60 rounded-[100px] mb-6 hover:bg-ssc-gold/10 transition-colors">
            <span className="text-[11px] text-ssc-gold font-bold tracking-[0.1em] uppercase">
              {leader.designation}
            </span>
          </div>
          
          <p className="text-[14px] text-ssc-gray-muted leading-relaxed max-w-[280px]">
            {leader.description}
          </p>
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

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-12 max-w-[1200px] mx-auto relative items-stretch px-4 md:px-0 py-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {leaders.map((leader, idx) => (
            <div key={leader.name} className="w-[80vw] sm:w-[350px] md:w-auto snap-center shrink-0">
              <LeaderCard leader={leader} index={idx} />
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-2 mb-12 opacity-80">
          <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Swipe to view</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <MoveRight className="w-4 h-4 text-ssc-gold" />
          </motion.div>
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
