import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "9440170453"; // Reusing M.S.V. Bhaskar's number from contact.tsx
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const actionButtonClass = `
    w-12 h-12 rounded-full flex items-center justify-center
    bg-[#25D366] text-white border-none
    shadow-[0_0_15px_rgba(37,211,102,0.4)]
    transition-all duration-300 hover:scale-110 active:scale-95
    hover:bg-[#128C7E]
  `;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 max-w-[calc(100vw-48px)]">

      {/* Back to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-[#1c222f] to-[#0a101d] text-ssc-gold border-[1px] border-ssc-gold/40 shadow-[0_5px_15px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-110 hover:border-ssc-gold hover:shadow-[0_8px_25px_rgba(212,175,55,0.25),inset_0_2px_4px_rgba(255,255,255,0.15)] active:scale-95 group relative overflow-hidden"
            aria-label="Back to top"
            title="Back to Top"
          >
            {/* Subtle metallic sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            <ArrowUp size={20} strokeWidth={2.5} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        href={`tel:+91${phoneNumber}`}
        className={actionButtonClass}
        aria-label="Call Srinivasa Steel Corporation"
        title="Call Us"
      >
        <Phone size={24} fill="currentColor" stroke="currentColor" strokeWidth={1} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        href={`https://wa.me/91${phoneNumber}?text=Hello%20Srinivasa%20Steel%20Corporation%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20steel%20products%20and%20services.%0A%0APlease%20share%20the%20relevant%20details%2C%20availability%2C%20and%20pricing.%0A%0AThank%20you.`}
        target="_blank"
        rel="noopener noreferrer"
        className={actionButtonClass}
        aria-label="Chat with Srinivasa Steel Corporation on WhatsApp"
        title="WhatsApp Us"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
};
