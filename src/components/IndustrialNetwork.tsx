import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Warehouse, Factory } from 'lucide-react';

const locations = [
  {
    id: "vijayawada",
    city: "VIJAYAWADA",
    type: "HEAD OFFICE & GODOWN",
    icon: Building2,
    address: "Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012",
    coords: { x: "50%", y: "65%" },
  },
  {
    id: "gannavaram",
    city: "GANNAVARAM",
    type: "YARD",
    icon: Warehouse,
    address: "Gannavaram Yard, Nuzividu Road, Gannavaram – 521101",
    coords: { x: "52%", y: "68%" },
  },
  {
    id: "vizag",
    city: "VIZAG",
    type: "YARD",
    icon: Factory,
    address: "S. No. 156, Plot No. 163A, 163B, AIE Pedagantyada, Vizag – 530044",
    coords: { x: "62%", y: "55%" },
  }
];

export const IndustrialNetwork = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="locations" className="relative py-16 lg:py-24 bg-ssc-navy overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '100px 100px' 
             }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05)_0%,rgba(5,10,20,1)_80%)]" />
      </div>

      <div className="container-wide relative z-10 mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5 lg:mb-7">
              <div className="w-8 h-[1px] bg-ssc-gold-dark/40" />
              <span className="text-ssc-gold-dark text-micro tracking-[0.16em]">
                Regional Presence
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold-dark/40" />
            </div>
            <h2 className="text-ssc-on-dark-primary italic uppercase">
              STEEL SUPPLY <span className="text-ssc-gold">NETWORK</span>
            </h2>
          </motion.div>
        </div>

        {/* Network Map / Interactive Visualization - Desktop Only */}
        <div className="relative w-full aspect-[16/9] lg:h-[700px] bg-white/[0.02] border border-white/10 rounded-[24px] overflow-hidden group/map shadow-premium-strong hidden lg:block">
          {/* India Map Background - Adjusted scaling and positioning */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center translate-y-20">
            <svg viewBox="0 0 1024 1024" className="w-full h-full fill-transparent stroke-ssc-gold/20">

              <path 
                d="M4040 10225 c-14 -8 -40 -14 -58 -15 -64 0 -119 -22 -173 -66 -57 -47 -124 -77 -199 -89 -25 -4 -89 -29 -142 -56 l-97 -49 -17 -56 c-9 -33 -30 -71 -49 -92 -31 -34 -35 -36 -121 -42 -71 -5 -104 -13 -158 -38 -83 -39 -130 -40 -211 -7 -33 14 -91 30 -130 36 -38 6 -86 19 -106 29 -46 24 -69 26 -152 16 -65 -8 -68 -10 -82 -43 -21 -50 -19 -76 10 -103 16 -15 25 -35 25 -54 0 -17 7 -40 15 -50 22 -30 18 -58 -12 -82 -27 -21 -27 -24 -16 -65 10 -38 9 -50 -8 -88 -10 -24 -19 -51 -19 -60 0 -9 28 -44 63 -77 101 -97 102 -98 156 -95 54 2 47 11 67 -89 5 -26 12 -32 57 -44 29 -8 69 -17 90 -21 43 -7 49 -28 18 -66 -15 -19 -30 -24 -84 -27 -62 -4 -67 -6 -95 -42 -17 -20 -45 -43 -63 -50Z" 
                transform="scale(0.1) translate(-500, -9000)" 
                strokeWidth="3"
              />

            </svg>
          </div>

          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 50% 65% Q 58% 65% 62% 55%"
              fill="none"
              stroke="rgba(212,175,55,0.3)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Markers & Interaction Nodes */}
          {locations.map((loc) => {
            const Icon = loc.icon;
            const isActive = activeId === loc.id;
            
            return (
              <div 
                key={loc.id}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: loc.coords.x, top: loc.coords.y }}
              >
                <div 
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActiveId(loc.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(isActive ? null : loc.id)}
                >
                  {/* Machined Metallic Marker */}
                    <motion.div 
                      animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                      className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-ssc-steel-dark border-2 border-ssc-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center relative z-10 transition-all"
                    >
                    <Icon size={isActive ? 20 : 16} className="text-ssc-gold" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-ssc-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  {/* Marker Pulse */}
                  <motion.div 
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-[-10px] rounded-full border border-ssc-gold/40 z-0"
                  />

                  {/* Desktop Hover Card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className={`absolute z-[100] w-[280px] sm:w-[340px] bg-ssc-steel-dark border border-primary/30 p-6 rounded-[12px] shadow-premium-strong pointer-events-none hidden lg:block
                          ${parseFloat(loc.coords.x) > 50 ? '-left-[360px]' : 'left-20'}
                          ${parseFloat(loc.coords.y) > 70 ? 'bottom-0' : 'top-0'}
                        `}
                      >
                        {/* Connecting visual line */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-[1px] bg-ssc-gold/30 ${parseFloat(loc.coords.x) > 60 ? '-right-8' : '-left-8'}`} />
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1 h-3 bg-ssc-gold" />
                          <span className="text-ssc-gold text-micro">
                            {loc.type}
                          </span>
                        </div>
                        <h4 className="text-ssc-on-dark-primary italic text-2xl mb-2 uppercase">
                          {loc.city}
                        </h4>
                        <p className="text-ssc-on-dark-body text-small italic mb-4">
                          {loc.address}
                        </p>
                        <div className="flex items-center gap-2 text-micro text-ssc-gold-dark/40 italic">
                          INDUSTRIAL CORE • {loc.id === 'vijayawada' ? 'ZONE 01' : 'ZONE 02'}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Locations List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:hidden">

          {locations.map((loc, idx) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-ssc-steel-dark border border-white/10 p-6 lg:p-10 rounded-[12px] shadow-premium-soft relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-ssc-gold/10 rounded-tr-[12px]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-ssc-gold/5 flex items-center justify-center border border-ssc-gold/10 group-hover:border-ssc-gold/30 transition-colors">
                    <Icon size={20} className="text-ssc-gold/60 group-hover:text-ssc-gold transition-colors" />
                  </div>

                  <div>
                    <span className="text-ssc-gold-dark text-micro">
                      {loc.type}
                    </span>
                    <h4 className="text-ssc-on-dark-primary text-xl uppercase italic">
                      {loc.city}
                    </h4>
                  </div>
                </div>
                <p className="text-ssc-on-dark-body text-small italic">
                  {loc.address}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
