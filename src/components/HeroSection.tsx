import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";


interface HeroImage {
  url: string;
  alt: string;
  position: {
    desktop: string;
    mobile: string;
  };
}

const HERO_IMAGES: HeroImage[] = [
  {
    url: "/hero/hero-1.jpg",
    alt: "Industrial steel wire coils in Srinivasa Steel Corporation distribution center",
    position: {
      desktop: "center center",
      mobile: "45% center"
    }
  },
  {
    url: "/hero/hero-2.jpg",
    alt: "Premium bundles of ribbed TMT reinforcement steel bars supplied by Srinivasa Steel Corporation",
    position: {
      desktop: "center center",
      mobile: "center center"
    }
  },
  {
    url: "/hero/hero-3.jpg",
    alt: "Industrial steel facility with wire coils ready for dispatch",
    position: {
      desktop: "center center",
      mobile: "40% center"
    }
  },
  {
    url: "/hero/hero-4.jpg",
    alt: "Heavy duty TMT steel rebar stock at Srinivasa Steel Corporation yard",
    position: {
      desktop: "center center",
      mobile: "65% center"
    }
  },
  {
    url: "/hero/hero-5.jpg",
    alt: "Extensive inventory of premium quality steel rebar coils in Vijayawada",
    position: {
      desktop: "center center",
      mobile: "50% center"
    }
  }
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    HERO_IMAGES.forEach((img) => {
      const image = new Image();
      image.src = img.url;
    });

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const currentImage = HERO_IMAGES[currentIndex] as HeroImage | undefined;
  const firstImage = HERO_IMAGES[0] as HeroImage;
  const imageUrl = currentImage?.url ?? firstImage.url;
  const imageAlt = currentImage?.alt ?? firstImage.alt;
  const imagePos = isMobile 
    ? (currentImage?.position.mobile ?? firstImage.position.mobile) 
    : (currentImage?.position.desktop ?? firstImage.position.desktop);

  const imageElement = (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      >
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: "linear" }}
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.9]"
          style={{ objectPosition: imagePos }}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          fetchPriority={currentIndex === 0 ? "high" : "low"}
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="relative w-full bg-ssc-navy pt-0 h-[100dvh] flex items-center overflow-hidden">
      {/* Full-Screen, Full-Width Hero Background (Full Bleed Carousel) */}
      <div className="absolute inset-0 z-0">
        {imageElement}
        
        {/* Cinematic Dark Navy Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(90deg, rgba(11,19,32,0.95) 0%, rgba(11,19,32,0.7) 50%, rgba(11,19,32,0.2) 100%)'
          }} 
          />
        {/* Bottom Fade for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-ssc-navy to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container-ssc relative z-20 h-full">
        {/* Mobile: justify-center to balance vertical space. Desktop: exactly as before (pt-[120px]) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start h-full pt-[60px] lg:pt-[120px] pb-[40px] lg:pb-0">
          
          {/* Content Area */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[650px]"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4 lg:mb-6">
                <span className="text-[9px] sm:text-[10px] lg:text-[12px] text-white/80 tracking-widest font-semibold uppercase">
                  ENGINEERED FOR STRENGTH
                </span>
                <span className="text-white/20">—</span>
                <span className="text-[9px] sm:text-[10px] lg:text-[12px] text-ssc-gold-dark tracking-widest font-semibold uppercase">
                  EST. 1994
                </span>
              </div>
              
              {/* Headline - Controlled font size for mobile, exact same for desktop */}
              <h1 className="text-[38px] sm:text-[46px] lg:text-[72px] font-black text-white mb-4 lg:mb-7 leading-[1.0] lg:leading-[0.95] tracking-tight">
                BUILDING<br />
                STRENGTH.<br />
                SHAPING <span className="text-ssc-gold">TOMORROW.</span>
              </h1>
              
              {/* Description */}
              <p className="text-[14px] sm:text-[15px] lg:text-[18px] text-white/80 max-w-[480px] mb-6 sm:mb-8 lg:mb-10 leading-snug">
                Engineered steel products for construction and industrial requirements. Reliable supply across Andhra Pradesh since 1994.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start w-full sm:w-auto">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button className="w-full bg-ssc-gold text-ssc-navy hover:bg-ssc-gold/90 border-none h-12 lg:h-14 px-8 font-semibold">
                    EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" search={{ product: "" }} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 h-12 lg:h-14 px-8 font-semibold"
                  >
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right side remains empty to show the TMT steel imagery in the background */}
          <div className="hidden lg:block lg:w-[55%] h-full" />
        </div>
      </div>
    </section>
  );
};