import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroSteelWarehouse from "@/assets/images/hero-steel-warehouse.png.asset.json";
import heroSteelRebar from "@/assets/images/hero-steel-rebar.png.asset.json";
import heroSteelWire from "@/assets/images/hero-steel-wire.png.asset.json";
import heroTmtSteel from "@/assets/images/hero-tmt-steel.png.asset.json";

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
    url: heroSteelWarehouse.url,
    alt: "Industrial steel rebar warehouse with high-quality stock",
    position: {
      desktop: "center center",
      mobile: "center center"
    }
  },
  {
    url: heroSteelWire.url,
    alt: "Industrial steel wire coils in distribution center",
    position: {
      desktop: "center center",
      mobile: "45% center"
    }
  },
  {
    url: heroTmtSteel.url,
    alt: "Close-up cinematic shot of TMT 550D steel rebar stacked",
    position: {
      desktop: "center center",
      mobile: "40% center"
    }
  },
  {
    url: heroSteelRebar.url,
    alt: "Premium bundles of ribbed TMT reinforcement steel bars",
    position: {
      desktop: "center center",
      mobile: "65% center"
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
    <section className="relative w-full bg-ssc-navy pt-0 lg:h-[calc(100vh-72px)] min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Full-Screen, Full-Width Hero Background (Full Bleed Carousel) */}
      <div className="absolute inset-0 z-0">
        {imageElement}
        
        {/* Cinematic Dark Navy Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(90deg, rgba(11,19,32,0.9) 0%, rgba(11,19,32,0.6) 40%, rgba(11,19,32,0.1) 100%)'
          }} 
          />
        {/* Bottom Fade for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ssc-navy to-transparent z-10" />
      </div>

      <div className="container-ssc relative z-20 h-full">
        <div className="flex flex-col lg:flex-row items-center h-full pt-[80px] sm:pt-[90px] lg:pt-0">
          
          {/* Content Area: Left 45% Width on Desktop */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center py-16 lg:py-12 lg:px-0 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[650px]"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-5 lg:mb-7">
                <span className="text-micro text-white/80">
                  ENGINEERED FOR STRENGTH
                </span>
                <span className="text-white/20">—</span>
                <span className="text-micro text-ssc-gold-dark">
                  EST. 1994
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-white mb-7 lg:mb-10 leading-[1.1]">
                <span className="block mb-1">BUILDING</span>
                <span className="block mb-1">STRENGTH.</span>
                <span className="block">
                  SHAPING <span className="text-ssc-gold">TOMORROW.</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-body-large text-white/80 max-w-[500px] mb-8 lg:mb-12">
                Engineered steel products for construction and industrial requirements. Reliable supply across Andhra Pradesh since 1994.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-start">
                <Link to="/products">
                  <Button className="w-full sm:w-auto bg-ssc-gold text-ssc-navy hover:bg-ssc-gold/90 border-none">
                    EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" search={{ product: "" }}>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
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