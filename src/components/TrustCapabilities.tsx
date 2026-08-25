import { motion, useScroll, useTransform, Variants, Easing } from "framer-motion";
import { useRef } from "react";

export const TrustCapabilities = () => {
  const containerRef = useRef<HTMLElement>(null);
  const steelImageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Custom easing for smooth cinematic feel
  const cubicBezier: Easing = [0.16, 1, 0.3, 1];

  const imageReveal: Variants = {
    hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
    visible: { 
      clipPath: "inset(0% 0% 0% 0%)", 
      opacity: 1,
      transition: { duration: 1.6, ease: cubicBezier }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-ssc-navy py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Parallax Geometry */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[15%] right-[5%] w-[1px] h-[60%] bg-ssc-on-dark-primary/5" />
        <div className="absolute top-[30%] right-[-10%] w-[120%] h-[1px] bg-ssc-on-dark-primary/5 transform -rotate-6" />
        
        {/* Subtle abstract rods */}
        <div className="absolute -bottom-20 -left-10 w-80 h-80 opacity-[0.04] blur-sm">
          <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-ssc-on-dark-primary to-transparent transform rotate-45 mb-6" />
          <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-ssc-on-dark-primary to-transparent transform rotate-45 mb-6 ml-12" />
        </div>
      </motion.div>

      <div className="container-wide relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* CONTENT BLOCK */}
          <div className="w-full lg:w-[45%] order-1 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col"
            >
              {/* Eyebrow - Reveal 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } }
                }}
                className="flex items-center gap-4 mb-5 lg:mb-7"
              >
                <span className="text-micro text-ssc-gold uppercase tracking-[0.16em]">
                  CORE STRENGTHS
                </span>
                <div className="w-8 lg:w-12 h-[1px] bg-ssc-gold/40" />
              </motion.div>

              {/* Heading - Reveal 2 */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: cubicBezier, delay: 0.4 } }
                }}
                className="text-ssc-on-dark-primary mb-7 lg:mb-10 uppercase tracking-[-0.02em] leading-[1.05]"
              >
                CONSISTENT QUALITY. <br />
                <span className="text-ssc-gold">RELIABLE</span> <br />
                SUPPLY.
              </motion.h2>

              {/* Description - Reveal 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.6 } }
                }}
                className="relative pl-6 lg:pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ssc-gold to-transparent" />
                <p className="text-body text-ssc-on-dark-body max-w-[560px]">
                  Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in TMT rebars, steel products, wire products and decoiling solutions.
                </p>
                
                {/* Mobile Editorial Detail */}
                <div className="mt-8 lg:mt-12 flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-micro text-ssc-gold uppercase mb-1">Established</span>
                    <span className="text-body-large font-bold text-ssc-on-dark-primary tracking-wider">1994</span>
                  </div>
                  <div className="w-[1px] h-6 bg-ssc-on-dark-primary/10" />
                  <div className="flex flex-col">
                    <span className="text-micro text-ssc-gold uppercase mb-1">Focus</span>
                    <span className="text-body-large font-bold text-ssc-on-dark-primary tracking-wider uppercase">Steel Supply</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* VISUAL BLOCK */}
          <div className="w-full lg:w-[55%] order-2 lg:order-2 mt-8 lg:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <motion.div
                variants={imageReveal}
                className="relative aspect-[16/10] lg:aspect-[14/11] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] group"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}
              >
                <motion.img 
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1, transition: { duration: 2.5, ease: "easeOut" } }}
                  viewport={{ once: true }}
                  src={steelImageUrl} 
                  alt="Premium Industrial Steel" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B33]/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Technical Marker Desktop Only */}
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                <span className="text-[8px] font-body text-ssc-on-dark-primary/20 tracking-[0.5em] uppercase block transform rotate-90 origin-center whitespace-nowrap">
                  VERIFIED_MATERIAL_SPEC // 2026
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};