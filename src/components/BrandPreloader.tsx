import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import sscLogo3D from "@/assets/ssc-logo-3d.png.asset.json";

// @ts-ignore
import rebarCoils from "@/assets/rebar-coils.jpg.asset.json";
// @ts-ignore

// @ts-ignore
import rebarWarehouse from "@/assets/rebar-warehouse.jpg.asset.json";
// @ts-ignore
import rebarDetail from "@/assets/rebar-detail.jpg.asset.json";

const HERO_IMAGES = [
  (rebarCoils as any)?.url,
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  (rebarWarehouse as any)?.url,
  (rebarDetail as any)?.url,
].filter(Boolean);

interface PreloaderProps {
  onComplete?: () => void;
  showIntro?: boolean;
}

export const BrandPreloader = ({ onComplete, showIntro = true }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Preload images (Browser-only)
    const preloadAssets = async () => {
      if (typeof window === "undefined") return;
      const promises = HERO_IMAGES.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      await Promise.all(promises);
    };

    preloadAssets();

    // Progress animation (approx 4.5s total)
    // 0.8s to start, finishes around 4.3s
    const startTime = Date.now();
    const duration = 3500; // 3.5 seconds for the actual bar growth
    const delay = 800; // start after 0.8s

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < delay) {
        setProgress(0);
      } else {
        const p = Math.min(100, ((elapsed - delay) / duration) * 100);
        setProgress(p);
        
        if (elapsed >= 4500) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 200);
        }
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] flex items-center justify-center mb-8"
            >
              <img
                src={sscLogo.url}
                alt="SSC Logo"
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6, 
                duration: 1, 
                ease: "easeOut" 
              }}
              className="flex flex-col items-center mb-10"
            >
              <h1 className="text-white text-[24px] sm:text-[32px] font-body font-bold tracking-[0.1em] leading-tight uppercase">
                SRINIVASA <span className="font-medium opacity-90">STEEL</span>
              </h1>
              <h2 className="text-[#D4AF37] text-[12px] sm:text-[15px] font-body font-bold tracking-[0.45em] leading-tight uppercase mt-3">
                CORPORATION
              </h2>
            </motion.div>

            {/* Loading Line */}
            <div className="w-[180px] sm:w-[240px] h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#D4AF37]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
