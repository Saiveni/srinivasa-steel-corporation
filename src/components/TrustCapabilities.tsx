import { motion } from "framer-motion";
import { ShieldCheck, CalendarDays, Target } from "lucide-react";

export const TrustCapabilities = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#E7EBEF] to-[#C8CED4] pt-24 lg:pt-32 pb-32 lg:pb-40 overflow-visible">
      
      {/* Subtle brushed metal diagonal texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, #071525 0, #071525 1px, transparent 0, transparent 8px)',
           }} 
      />

      {/* RIGHT IMAGE AREA with Architectural Geometry */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-none">
        
        {/* SVG Border Lines for precise geometric transition */}
        <div className="absolute inset-0 z-20">
           <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
             {/* Dark Navy Structural Edge */}
             <polyline points="58,0 42,48 55,100" fill="none" stroke="#0B1929" strokeWidth="16" vectorEffect="non-scaling-stroke" />
             {/* Gold Accent Line (only on top diagonal) */}
             <polyline points="58,0 42,48" fill="none" stroke="#D9A928" strokeWidth="3" vectorEffect="non-scaling-stroke" />
           </svg>
        </div>

        {/* Clipped Image Container */}
        <div className="absolute inset-0 pointer-events-auto">
          <style>{`
            @media (min-width: 1024px) {
              .clip-chevron {
                clip-path: polygon(58% 0, 100% 0, 100% 100%, 55% 100%, 42% 48%);
              }
              .clip-feature-card {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
              }
            }
          `}</style>
          
          <img 
            src="/hero/products-bg-1.jpg"
            alt="Premium TMT steel rebars"
            className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1] clip-chevron"
          />
          <div className="absolute inset-0 bg-[#071525]/10 mix-blend-multiply clip-chevron" />
        </div>

        {/* Floating Feature Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute z-30 bg-[#0B1929] w-[360px] p-8 pl-10 clip-feature-card pointer-events-auto shadow-2xl"
          style={{ top: '48%', left: '42%' }}
        >
          {/* Slanted Gold Left Border implemented via SVG inside the clipped card */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="0" y1="0" x2="15%" y2="100%" stroke="#D9A928" strokeWidth="8" />
          </svg>

          <div className="flex items-start gap-4 mb-3 relative z-10">
            <ShieldCheck className="text-[#D9A928] shrink-0" size={28} strokeWidth={1.5} />
            <div>
              <h4 className="text-white font-[800] text-[13px] tracking-widest uppercase leading-tight mb-1">
                BUILDING STRENGTH.
              </h4>
              <h4 className="text-[#D9A928] font-[800] text-[13px] tracking-widest uppercase leading-tight">
                DELIVERING TRUST.
              </h4>
            </div>
          </div>
          <p className="text-white/70 text-[14px] font-medium leading-relaxed relative z-10">
            Premium steel products<br/>for a stronger tomorrow.
          </p>
        </motion.div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="container-wide relative z-20 mx-auto px-4 sm:px-6 lg:px-[6vw] h-full">
        
        <div className="flex flex-col lg:flex-row relative h-full">
          
          {/* LEFT TEXT AREA */}
          {/* Reduced width from w-[50%] to w-[42%] to ensure text never overlaps the 42vw diagonal on smaller laptops */}
          <div className="w-full lg:w-[42%] xl:w-[40%] relative z-20 pt-8 pb-12 pr-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[12px] font-[800] text-[#071525] uppercase tracking-[0.2em]">
                  CORE STRENGTHS
                </span>
                <div className="w-12 h-[2px] bg-[#D9A928]" />
              </div>

              {/* Headline */}
              <h2 className="text-[clamp(2rem,3.5vw,4.2rem)] font-[900] leading-[1.05] tracking-tighter mb-8 text-[#071525] uppercase">
                CONSISTENT QUALITY.<br />
                <span className="text-[#D9A928]">RELIABLE</span><br />
                SUPPLY.
              </h2>

              {/* Description */}
              <p className="text-[15px] xl:text-[17px] text-[#102238]/90 max-w-[480px] leading-[1.7] font-medium mb-12">
                Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in TMT rebars, steel products, wire products and decoiling solutions.
              </p>

              {/* Company Facts */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 xl:gap-12">
                
                {/* Established */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-lg bg-[#0B1929] flex items-center justify-center shadow-lg">
                    <CalendarDays className="text-[#D9A928]" size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#071525] uppercase tracking-widest mb-1">ESTABLISHED</span>
                    <span className="text-[22px] xl:text-[26px] font-[900] text-[#071525] tracking-tight leading-none">1994</span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-[1px] h-10 bg-[#071525]/20" />

                {/* Focus */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-lg bg-[#0B1929] flex items-center justify-center shadow-lg">
                    <Target className="text-[#D9A928]" size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#071525] uppercase tracking-widest mb-1">FOCUS</span>
                    <span className="text-[22px] xl:text-[26px] font-[900] text-[#071525] tracking-tight leading-none uppercase">STEEL SUPPLY</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* MOBILE IMAGE AREA (Visible only on smaller screens) */}
          <div className="w-full lg:hidden relative z-10 mt-12 overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative w-full h-[400px]">
              <img 
                src="/hero/products-bg-1.jpg"
                alt="Premium TMT steel rebars"
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-[#071525]/20 mix-blend-multiply" />
              
              {/* Floating Feature Card over Mobile Image */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-[320px] z-30 
                             bg-[#0B1929] border-l-4 border-[#D9A928] p-6 
                             shadow-[0_10px_20px_rgba(0,0,0,0.4)]
                             rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <ShieldCheck className="text-[#D9A928] shrink-0" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-white font-[800] text-[11px] tracking-widest uppercase leading-tight mb-1">
                      BUILDING STRENGTH.
                    </h4>
                    <h4 className="text-[#D9A928] font-[800] text-[11px] tracking-widest uppercase leading-tight">
                      DELIVERING TRUST.
                    </h4>
                  </div>
                </div>
                <p className="text-white/70 text-xs font-medium leading-relaxed">
                  Premium steel products<br/>for a stronger tomorrow.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};