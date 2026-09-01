import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Handshake, MapPin } from 'lucide-react';

const milestones = [
  {
    num: "01",
    year: "1994",
    title: "ESTABLISHED",
    description: "Founded Srinivasa Steel Corporation in Hyderabad.",
    icon: Building2
  },
  {
    num: "02",
    year: "2000s",
    title: "EXPANDED TO VIZAG",
    description: "Expanded operations to the Visakhapatnam steel market.",
    icon: Factory
  },
  {
    num: "03",
    year: "2010s",
    title: "MOU DEALER STATUS",
    description: "Became MOU Dealer for Vizag Steel Plant.",
    icon: Handshake
  },
  {
    num: "04",
    year: "TODAY",
    title: "REGIONAL PRESENCE",
    description: "3 locations. 40+ years of trust. Thousands of tons delivered.",
    icon: MapPin
  }
];

export const SteelTimeline = () => {
  return (
    <section id="timeline" className="relative py-20 lg:py-32 bg-white overflow-hidden z-[50]">
      {/* Subtle background grid pattern to emphasize precision on white */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #0000000a 1px, transparent 1px), linear-gradient(to bottom, #0000000a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container-wide relative z-10 mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5 lg:mb-7">
              <div className="w-8 h-[1px] bg-ssc-gold/60" />
                <span className="text-[10px] lg:text-micro tracking-[0.2em] font-bold text-ssc-gold-dark uppercase">
                  Our Journey
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/60" />
            </div>
            <h2 className="text-ssc-navy text-[32px] sm:text-[40px] md:text-[50px] font-black leading-[1.1] tracking-tight uppercase">
              COMPANY <span className="text-ssc-gold">LEGACY</span>
            </h2>
            <p className="mt-6 text-[15px] sm:text-[17px] text-ssc-gray-body max-w-2xl mx-auto font-medium">
              From a strong beginning in 1994 to becoming a trusted steel supplier across multiple locations, our journey is built on quality, trust and consistent delivery.
            </p>
          </motion.div>
        </div>

        {/* 
          =======================================
          DESKTOP VERSION (Horizontal Timeline) 
          =======================================
        */}
        <div className="hidden lg:block relative mt-16 mb-24 max-w-6xl mx-auto">
          
          {/* Main 3D Steel Bar */}
          <div className="relative w-full h-[40px] rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-20 overflow-visible">
            
            {/* The Steel Surface Gradient (Silver Realistic TMT) */}
            <div className="absolute inset-0 rounded-[20px] border-y border-white/40" 
              style={{
                background: `
                  linear-gradient(180deg, 
                    #8a9098 0%, 
                    #d9dcde 15%, 
                    #f0f2f5 25%, 
                    #b3b8c0 40%, 
                    #6b7079 60%, 
                    #464a51 85%, 
                    #8f959e 96%, 
                    #444850 100%
                  )
                `,
              }}
            >
              {/* TMT Bar Ribbing Overlay (CSS Pattern) */}
              <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay rounded-[20px]" 
                style={{
                  backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 15px, #000 15px, #000 18px, #fff 18px, #fff 21px, transparent 21px)`
                }}
              />
              
              {/* Embossed SSC Text on the bar */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] font-black tracking-[0.4em] opacity-90"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                  textShadow: '0px 1px 1px rgba(255,255,255,0.6), 0px -1px 1px rgba(0,0,0,0.6)'
                }}>
                SSC TMT 500 D
              </div>
            </div>

            {/* Layout Grid aligned exactly with the cards */}
            <div className="absolute inset-0 grid grid-cols-4 z-30">
              {milestones.map((ms, idx) => (
                <div key={idx} className="relative w-full h-full">
                  {/* Gold Ring wrapped around the steel bar */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[52px] rounded-[10px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_5px_10px_rgba(0,0,0,0.5)]" 
                    style={{
                      background: `linear-gradient(90deg, #8b6914 0%, #d4af37 20%, #ffdf73 50%, #d4af37 80%, #684a05 100%)`
                    }}
                  >
                    <div className="absolute left-[4px] right-[4px] top-[2px] bottom-[2px] rounded-[6px] shadow-[inset_0_0_8px_rgba(0,0,0,0.7)]" 
                      style={{
                        background: `linear-gradient(90deg, #684a05 0%, #aa841f 20%, #e6c552 50%, #aa841f 80%, #4a3402 100%)`
                      }}
                    />
                  </div>
                  
                  {/* Gold Connector Chain/Hook dropping down */}
                  <div className="absolute left-1/2 top-[46px] -translate-x-1/2 w-[6px] h-[44px] z-10 shadow-[2px_2px_5px_rgba(0,0,0,0.3)]" 
                    style={{
                      background: `linear-gradient(90deg, #684a05 0%, #ffdf73 40%, #d4af37 60%, #4a3402 100%)`,
                      borderRadius: '0 0 4px 4px'
                    }}
                  />
                  {/* Hook Loop attachment to card */}
                  <div className="absolute left-1/2 top-[80px] -translate-x-1/2 w-[24px] h-[24px] border-[5px] rounded-full z-0" 
                    style={{
                      borderColor: '#d4af37',
                      borderBottomColor: '#aa841f',
                      borderRightColor: '#aa841f',
                      borderLeftColor: '#ffdf73',
                      borderTopColor: '#ffdf73',
                      boxShadow: '0 5px 8px rgba(0,0,0,0.2), inset 0 2px 5px rgba(0,0,0,0.4)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-4 gap-6 xl:gap-10 relative z-10 pt-[64px]">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col items-center"
              >
                {/* The Card */}
                <div className="w-full bg-[#111318] border-[1px] border-ssc-gold/30 rounded-[14px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-7 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_30px_50px_rgba(212,175,55,0.15)] hover:border-ssc-gold/60 transition-all duration-500">
                  {/* Subtle Top Metallic Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/40 to-transparent" />
                  
                  {/* Subtle Internal Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                  
                  {/* Bottom Gold Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-ssc-gold opacity-30 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_#d4af37]" />

                  {/* 01 Number */}
                  <span className="text-[16px] font-black text-ssc-gold tracking-widest mb-4">
                    {ms.num}
                  </span>
                  
                  {/* Icon */}
                  <div className="mb-5 text-ssc-gold opacity-90 group-hover:scale-110 transition-transform duration-500">
                    <ms.icon size={44} strokeWidth={1} />
                  </div>

                  {/* Year */}
                  <h3 className="text-white text-[24px] font-bold mb-1 tracking-wider">
                    {ms.year}
                  </h3>
                  
                  {/* Title */}
                  <h4 className="text-ssc-gold text-[11px] font-black tracking-[0.15em] mb-4 uppercase">
                    {ms.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[#a1a1a1] text-[13px] leading-relaxed max-w-[200px]">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 
          =======================================
          MOBILE VERSION (Vertical Timeline) 
          =======================================
        */}
        <div className="lg:hidden relative px-3 sm:px-8 mt-10 mb-16 w-full max-w-lg mx-auto">
          
          {/* Main 3D Steel Bar (Vertical) */}
          <div className="absolute left-[24px] sm:left-[50px] top-0 bottom-0 w-[20px] sm:w-[30px] rounded-[10px] sm:rounded-[15px] shadow-[15px_0_30px_rgba(0,0,0,0.15)] z-20">
            {/* The Steel Surface Gradient (Silver Realistic TMT) */}
            <div className="absolute inset-0 rounded-[10px] sm:rounded-[15px] border-x border-white/40" 
              style={{
                background: `
                  linear-gradient(90deg, 
                    #8a9098 0%, 
                    #d9dcde 15%, 
                    #f0f2f5 25%, 
                    #b3b8c0 40%, 
                    #6b7079 60%, 
                    #464a51 85%, 
                    #8f959e 96%, 
                    #444850 100%
                  )
                `,
              }}
            >
              {/* TMT Bar Ribbing Overlay */}
              <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay rounded-[10px] sm:rounded-[15px]" 
                style={{
                  backgroundImage: `repeating-linear-gradient(-20deg, transparent, transparent 15px, #000 15px, #000 18px, #fff 18px, #fff 21px, transparent 21px)`
                }}
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-8 sm:gap-10 relative z-10 w-full pt-4">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center pl-[56px] sm:pl-[100px] w-full"
              >
                {/* Horizontal Gold Connectors connecting the vertical steel bar to the card */}
                {/* Gold Ring wrapped around vertical bar */}
                <div className="absolute left-[14px] sm:left-[40px] top-1/2 -translate-y-1/2 w-[40px] sm:w-[50px] h-[16px] sm:h-[20px] rounded-[6px] sm:rounded-[8px] shadow-[inset_2px_0_4px_rgba(255,255,255,0.4),3px_0_8px_rgba(0,0,0,0.5)] z-30" 
                  style={{
                    background: `linear-gradient(180deg, #8b6914 0%, #d4af37 20%, #ffdf73 50%, #d4af37 80%, #684a05 100%)`
                  }}
                >
                  <div className="absolute left-[2px] right-[2px] top-[3px] bottom-[3px] rounded-[4px] sm:rounded-[5px] shadow-[inset_0_0_6px_rgba(0,0,0,0.7)]" 
                    style={{
                      background: `linear-gradient(180deg, #684a05 0%, #aa841f 20%, #e6c552 50%, #aa841f 80%, #4a3402 100%)`
                    }}
                  />
                </div>
                
                {/* Gold Connector Rod branching right */}
                <div className="absolute left-[52px] sm:left-[84px] top-1/2 -translate-y-1/2 w-[12px] sm:w-[22px] h-[4px] sm:h-[5px] z-10 shadow-[2px_2px_4px_rgba(0,0,0,0.3)]" 
                  style={{
                    background: `linear-gradient(180deg, #ffdf73 0%, #d4af37 50%, #684a05 100%)`,
                    borderRadius: '0 2px 2px 0'
                  }}
                />
                
                {/* The Card */}
                <div className="w-full bg-[#111318] border-[1px] border-ssc-gold/30 rounded-[12px] sm:rounded-[14px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] p-4 sm:p-6 flex flex-row items-center gap-3 sm:gap-5 relative overflow-hidden">
                  {/* Subtle Metallic Highlights */}
                  <div className="absolute top-0 left-0 w-1 bg-ssc-gold opacity-60 shadow-[0_0_10px_#d4af37] bottom-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none" />

                  {/* Left Side: Number & Icon */}
                  <div className="flex flex-col items-center shrink-0 w-[42px] sm:w-[50px]">
                    <span className="text-[11px] sm:text-[12px] font-black text-ssc-gold tracking-widest mb-1.5 sm:mb-2">
                      {ms.num}
                    </span>
                    <div className="text-ssc-gold opacity-90">
                      <ms.icon className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex flex-col flex-1 border-l border-white/10 pl-4 sm:pl-5 min-w-0">
                    <h3 className="text-white text-[16px] sm:text-[20px] font-bold mb-1 tracking-wider leading-none truncate">
                      {ms.year}
                    </h3>
                    <h4 className="text-ssc-gold text-[8px] sm:text-[10px] font-black tracking-[0.1em] mb-1.5 sm:mb-2 uppercase truncate w-full">
                      {ms.title}
                    </h4>
                    <p className="text-[#a1a1a1] text-[11px] sm:text-[12px] leading-relaxed line-clamp-3">
                      {ms.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};