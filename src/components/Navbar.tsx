import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, X, Home, Info, ShoppingBag, Image as ImageIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const sscLogo = { url: "/logo.svg" };
import steelIconsAssetV2 from "@/assets/steel-nav-icons-v2.png.asset.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.searchStr]);

  const navLinks = [
    { name: "HOME", href: "/", Icon: Home },
    { name: "ABOUT", href: "/about", Icon: Info },
    { name: "PRODUCTS", href: "/products", Icon: ShoppingBag },
    { name: "GALLERY", href: "/gallery", Icon: ImageIcon },
    { name: "CONTACT", href: "/contact", Icon: Phone },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as any,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
      className="fixed left-0 right-0 z-[100] transition-all duration-500 top-0 px-3 sm:px-4 md:px-0 pt-3 sm:pt-4 md:pt-4 pointer-events-none"
    >
      {/* Premium Engineered Steel Header Panel - Unified Global Design */}
      <div className={`
        relative mx-auto w-full md:max-w-[94%] lg:max-w-[1360px] flex items-center justify-between px-4 sm:px-6 md:px-8
        transition-all duration-500 ease-in-out pointer-events-auto
        ${scrolled 
          ? "h-[60px] sm:h-[68px] md:h-[76px] shadow-[0_12px_40px_rgba(0,0,0,0.3)]" 
          : "h-[60px] sm:h-[68px] md:h-[76px] shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
        }
        rounded-[12px] border border-white/40
      `}>
        {/* Background Wrapper with Overflow Hidden for rounded corners */}
        <div className="absolute inset-0 rounded-[12px] overflow-hidden pointer-events-none z-[0]">
        {/* User Provided Header Background */}
        <div 
          className="absolute inset-0 z-[1]" 
          style={{ 
            backgroundImage: `url('/headerbars.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }} 
        />
        
        {/* Refined Metallic Bevel Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/80 z-[4]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.2px] bg-black/20 z-[4]" />
        </div>

        {/* Logo & Brand Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
          <Link 
            to="/" 
            className="flex items-center gap-1 sm:gap-2 relative group shrink-0 cursor-pointer"
          >
            <div className="h-[80px] w-[80px] sm:h-[92px] sm:w-[92px] shrink-0 drop-shadow-md bg-transparent relative z-10 flex items-center justify-center">
              <img
                src={sscLogo.url}
                alt="SSC Logo"
                className="h-full w-full object-contain mix-blend-screen"
              />
            </div>
            
            {/* Removed vertical divider to reduce space as requested */}

            <div className="flex flex-col justify-center">
              <span className="text-[17px] sm:text-[24px] font-bold text-ssc-navy leading-none uppercase tracking-tight">
                SRINIVASA <span className="font-bold">STEEL</span>
              </span>
              <span className="text-[10px] sm:text-[13px] text-ssc-gold-dark leading-none mt-1 uppercase drop-shadow-sm font-semibold tracking-widest">
                CORPORATION
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Navigation & CTA Section */}
        <div className="flex items-center gap-4 xl:gap-10 relative z-10">
          {/* Desktop Navigation Links - Unified Surface */}
          <div className="hidden md:flex items-center px-2 py-1.5 bg-[#0B1320]/80 backdrop-blur-md border border-white/20 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <div key={link.name} className="flex items-center">
                  {i > 0 && <div className="h-5 w-[1px] bg-white/20 mx-1" />}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i }}>
                    <Link
                      to={link.href}
                      activeOptions={{ exact: link.href === '/' }}
                      className={`relative text-micro transition-all duration-300 py-1.5 px-4 rounded-[6px] whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 ${
                        isActive 
                          ? "text-white font-medium bg-white/10 shadow-inner" 
                          : "text-white/80 hover:text-white hover:bg-white/10 hover:-translate-y-[1px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      <link.Icon size={16} className={isActive ? "text-ssc-gold" : "text-ssc-gold/80"} strokeWidth={2} />
                      <span className="tracking-wide">{link.name}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-4 right-4 h-[2px] bg-ssc-gold rounded-full shadow-[0_1px_3px_rgba(212,175,55,0.3)]"
                        />
                      )}
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden md:block">
            <Link to="/contact" search={{ product: "" }}>
              <Button size="sm" className="bg-ssc-navy text-ssc-on-dark-primary hover:bg-ssc-navy/90 border-none shadow-premium-soft">
                GET A QUOTE
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Machined Gold Menu Trigger - Mobile ONLY */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden relative z-[120] group outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            <div className={`
              relative w-11 h-10 sm:w-13 sm:h-12 rounded-[6px]
              flex flex-col items-center justify-center
              transition-all duration-300
              ${isOpen ? 'rotate-90' : 'hover:-translate-y-[1px] active:translate-y-[0.5px]'}
              bg-gradient-to-b from-[#e1b35b] via-[#c29640] to-[#9a7024]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_6px_rgba(0,0,0,0.4)]
              border border-[#845b14]
            `}>
              {/* Machined Bevel Inset */}
              <div className="absolute inset-[1px] rounded-[5px] border border-white/20 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div 
                    key="hamburger"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col gap-[5px]"
                  >
                    <span className="w-[22px] h-[2px] bg-[#111] rounded-full block" />
                    <span className="w-[22px] h-[2px] bg-[#111] rounded-full block" />
                    <span className="w-[22px] h-[2px] bg-[#111] rounded-full block" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                  >
                    <X className="text-ssc-navy w-6 h-6" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Premium Engineered Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[110] bg-[#f8f9fa] flex flex-col pointer-events-auto"
          >
            {/* Subtle Hexagonal Background Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none z-[0]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '40px'
              }} 
            />

            {/* Overlay Header */}
            <div className="h-[90px] w-full flex items-center justify-between px-6 relative z-10 shrink-0">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 cursor-pointer">
                <div className="h-[60px] w-[60px] flex items-center justify-center shrink-0">
                  <img src={sscLogo.url} alt="SSC" className="h-full w-full object-contain" />
                </div>
                <div className="flex flex-col text-left justify-center pt-1">
                  <span className="text-[17px] font-black text-ssc-navy uppercase leading-none tracking-tight">SRINIVASA STEEL</span>
                  <span className="text-[10px] text-ssc-gold-dark uppercase mt-1 tracking-widest font-bold">CORPORATION</span>
                </div>
              </Link>

              {/* Close Button Trigger */}
              <button 
                onClick={() => setIsOpen(false)}
                type="button"
                className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors shadow-sm relative z-10 cursor-pointer"
              >
                <X className="text-[#333] w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative flex flex-col px-8">
              
              {/* Navigation Items */}
              <div className="relative z-10 flex-1 flex flex-col justify-center py-6 max-h-[450px]">
                
                <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
                  {/* Vertical Gold Line connecting items */}
                  <div className="absolute left-[23.5px] top-[24px] bottom-[24px] w-[1px] bg-ssc-gold/40 z-[-1]" />

                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          activeOptions={{ exact: link.href === '/' }}
                          className={`group flex items-center gap-6 cursor-pointer`}
                        >
                          {/* Circular Icon */}
                          <div className={`
                            w-12 h-12 flex items-center justify-center rounded-full shrink-0 relative
                            border-[1.5px] transition-all duration-300 z-10
                            ${isActive 
                              ? "border-[#d5a53a] bg-[#d5a53a] shadow-[0_4px_12px_rgba(212,175,55,0.3)]" 
                              : "border-gray-300 bg-[#f8f9fa] group-hover:border-ssc-gold/50"
                            }
                          `}>
                            <link.Icon 
                              size={20} 
                              className={isActive ? "text-white" : "text-[#333]"}
                              strokeWidth={isActive ? 2 : 1.5}
                            />
                          </div>
                          
                          <div className="flex flex-col justify-center pt-1">
                            <span className={`text-[15px] font-bold tracking-wider uppercase leading-none ${
                              isActive ? "text-ssc-navy" : "text-ssc-navy/80"
                            }`}>
                              {link.name}
                            </span>
                            {isActive && (
                              <motion.div 
                                layoutId="mobileActiveUnderline"
                                className="h-[2px] mt-1.5 w-[80%] bg-[#d5a53a]"
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Section: CTA */}
              <div className="relative z-20 pb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-[54px] text-[15px] font-bold 
                                     bg-[#d5a53a] text-ssc-navy hover:bg-[#d5a53a]/90 rounded-xl shadow-[0_6px_16px_rgba(212,175,55,0.25)] transition-all uppercase border-none">
                      GET A QUOTE <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

            </div>
            
            {/* Decorative Diagonal Steel Image at bottom right */}
            <div className="absolute bottom-0 left-0 right-0 h-[220px] z-[5] pointer-events-none overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('/mobile-menu-steel.jpg')`,
                  clipPath: 'polygon(15% 100%, 100% 100%, 100% 30%)',
                }}
              />
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line x1="15%" y1="100%" x2="100%" y2="30%" stroke="#D4AF37" strokeWidth="3" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
