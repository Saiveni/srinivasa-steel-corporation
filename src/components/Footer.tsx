import { Link } from "@tanstack/react-router";
const sscLogo = { url: "/logo.svg" };
import { Mail, Phone, MapPin, ShieldCheck, Truck, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lucide-react sometimes has issues with specific exports depending on version, 
// using generic SVG paths for social icons to ensure build stability and match the visual reference perfectly.
const SocialIcon = ({ type }: { type: 'fb' | 'li' | 'ig' | 'yt' }) => {
  const paths = {
    fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    li: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
    ig: "rect width='20' height='20' x='2' y='2' rx='5' ry='5' / path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' / line x1='17.5' x2='17.51' y1='6.5' y2='6.5' /",
    yt: "path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' / polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' /"
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      width="16" 
      height="16" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {type === 'ig' ? (
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </>
      ) : type === 'yt' ? (
        <>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
        </>
      ) : (
        <path d={paths[type as 'fb' | 'li']} />
      )}
    </svg>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const products = [
    { name: "TMT Rebars", path: "/products" as const },
    { name: "Structural Steel", path: "/products" as const },
    { name: "Steel Pipes", path: "/products" as const },
    { name: "Steel Coils", path: "/products" as const },
    { name: "Accessories", path: "/products" as const },
  ];

  const quickLinks = [
    { name: "Home", path: "/" as const },
    { name: "About Us", path: "/about" as const },
    { name: "Products", path: "/products" as const },
    { name: "Gallery", path: "/gallery" as const },
    { name: "Contact Us", path: "/contact" as const },
  ];

  return (
    <footer className="w-full font-poppins bg-[#050B15] text-white overflow-hidden">
      {/* DESKTOP FOOTER */}
      <div className="hidden lg:block container-wide pt-20 pb-16 relative">
        <div className="grid grid-cols-12 gap-8 relative z-10">
          
          {/* COLUMN 1: BRAND */}
          <div className="col-span-4 pr-6 flex flex-col">
            <Link to="/" className="flex items-center gap-4 group mb-6">
              <img src={sscLogo.url} alt="SSC Logo" className="h-16 w-16 xl:h-20 xl:w-20 object-contain brightness-110 shrink-0" />
              <div className="flex flex-col border-l border-white/20 pl-4 py-1">
                <span className="text-[18px] xl:text-[22px] font-bold tracking-[0.08em] uppercase text-white leading-tight">
                  SRINIVASA <span className="text-ssc-gold">STEEL</span>
                </span>
                <span className="text-[9px] xl:text-[11px] tracking-[0.2em] text-white/60 uppercase leading-none mt-1.5 font-semibold">
                  CORPORATION
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-[13px] leading-relaxed max-w-[320px] mb-8">
              Trusted steel and TMT supplier serving construction and industrial requirements since 1994.
            </p>
            <div className="flex gap-4">
              {(['fb', 'li', 'ig', 'yt'] as const).map((type) => (
                <a key={type} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-ssc-gold hover:text-ssc-navy transition-all">
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="col-span-2">
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-8 relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 hover:text-ssc-gold text-[14px] flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-ssc-gold group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR PRODUCTS */}
          <div className="col-span-3">
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-8 relative inline-block">
              OUR PRODUCTS
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" />
            </h4>
            <ul className="space-y-4">
              {products.map((p) => (
                <li key={p.name}>
                  <Link to={p.path} className="text-white/70 hover:text-ssc-gold text-[14px] flex items-center gap-2">
                    <span className="text-ssc-gold opacity-80">›</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div className="col-span-3">
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-8 relative inline-block">
              CONTACT US
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-ssc-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest text-ssc-gold/80 uppercase mb-1.5">HEAD OFFICE</span>
                  <a href="https://maps.google.com/?q=Srinivasa+Steel+Corporation+Vijayawada" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-[13px] leading-relaxed">
                    Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada - 520012
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Phone size={20} className="text-ssc-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2.5">
                  <a href="tel:+919440170453" className="text-white/70 hover:text-ssc-gold text-[13px] flex flex-col">
                    <span className="font-bold">+91 9440170453 <span className="text-[10px] text-white/40 uppercase font-normal ml-1">(Bhaskar)</span></span>
                  </a>
                  <a href="tel:+919849600403" className="text-white/70 hover:text-ssc-gold text-[13px] flex flex-col">
                    <span className="font-bold">+91 9849600403 <span className="text-[10px] text-white/40 uppercase font-normal ml-1">(Ramana Kumar)</span></span>
                  </a>
                  <a href="tel:+918125397453" className="text-white/70 hover:text-ssc-gold text-[13px] flex flex-col">
                    <span className="font-bold">+91 8125397453 <span className="text-[10px] text-white/40 uppercase font-normal ml-1">(Yeshwanth)</span></span>
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail size={20} className="text-ssc-gold shrink-0 mt-0.5" />
                <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-white/70 hover:text-ssc-gold text-[13px] pt-0.5 break-all">
                  srinivasasteelcorporationvja@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET FOOTER */}
      <div className="lg:hidden container-wide pt-16 pb-12 space-y-12">
        {/* BRAND */}
        <div className="flex flex-col items-center sm:items-start">
          <Link to="/" className="flex items-center gap-4 group mb-6">
            <img src={sscLogo.url} alt="SSC Logo" className="h-14 w-14 sm:h-16 sm:w-16 object-contain brightness-110 shrink-0" />
            <div className="flex flex-col border-l border-white/20 pl-4 py-1">
              <span className="text-[16px] sm:text-[18px] font-bold tracking-[0.08em] uppercase text-white leading-tight">
                SRINIVASA <span className="text-ssc-gold">STEEL</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/60 uppercase leading-none mt-1 font-semibold">
                CORPORATION
              </span>
            </div>
          </Link>
          <p className="text-white/70 text-[13px] leading-relaxed max-w-[320px] text-center sm:text-left mb-8">
            Trusted steel and TMT supplier serving construction and industrial requirements since 1994.
          </p>
          <div className="flex gap-4">
            {(['fb', 'li', 'ig', 'yt'] as const).map((type) => (
              <a key={type} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-ssc-gold hover:text-ssc-navy transition-all">
                <SocialIcon type={type} />
              </a>
            ))}
          </div>
        </div>

        {/* ACCORDIONS / LINKS */}
        <div className="space-y-4">
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <button onClick={() => toggleAccordion('quick')} className="w-full flex justify-between items-center p-4 text-ssc-gold font-bold text-[13px] tracking-widest uppercase bg-white/5">
              QUICK LINKS
              {activeAccordion === 'quick' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {activeAccordion === 'quick' && (
                <motion.ul initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-[#03070E] px-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="block py-3.5 text-white/70 text-[14px] border-b border-white/5 last:border-0">{link.name}</Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <button onClick={() => toggleAccordion('prod')} className="w-full flex justify-between items-center p-4 text-ssc-gold font-bold text-[13px] tracking-widest uppercase bg-white/5">
              OUR PRODUCTS
              {activeAccordion === 'prod' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {activeAccordion === 'prod' && (
                <motion.ul initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-[#03070E] px-4">
                  {products.map((p) => (
                    <li key={p.name}>
                      <Link to={p.path} className="flex items-center gap-2 py-3.5 text-white/70 text-[14px] border-b border-white/5 last:border-0">
                        <span className="text-ssc-gold opacity-80">›</span>{p.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <button onClick={() => toggleAccordion('contact')} className="w-full flex justify-between items-center p-4 text-ssc-gold font-bold text-[13px] tracking-widest uppercase bg-white/5">
              CONTACT US
              {activeAccordion === 'contact' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {activeAccordion === 'contact' && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-[#03070E] p-5 space-y-6">
                  <div className="flex gap-4 items-start">
                    <MapPin size={20} className="text-ssc-gold shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-widest text-ssc-gold/80 uppercase mb-1">HEAD OFFICE</span>
                      <p className="text-white/70 text-[13px] leading-relaxed">Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada - 520012</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone size={20} className="text-ssc-gold shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-3">
                      <a href="tel:+919440170453" className="text-white/70 text-[13px]">+91 9440170453 (Bhaskar)</a>
                      <a href="tel:+919849600403" className="text-white/70 text-[13px]">+91 9849600403 (Ramana Kumar)</a>
                      <a href="tel:+918125397453" className="text-white/70 text-[13px]">+91 8125397453 (Yeshwanth)</a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail size={20} className="text-ssc-gold shrink-0 mt-0.5" />
                    <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-white/70 text-[13px] break-all pt-0.5">srinivasasteelcorporationvja@gmail.com</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* TRUST / VALUE STRIP */}
      <div className="border-t border-white/10 py-10 bg-[#050B15]">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              { id: 'qa', title: 'QUALITY ASSURED', desc: 'Tested. Certified. Trusted.', icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
              { id: 'rs', title: 'RELIABLE SUPPLY', desc: 'Consistent quality supply.', icon: <Truck size={28} strokeWidth={1.5} /> },
              { id: 'otd', title: 'ON-TIME DELIVERY', desc: 'Delivered every time.', icon: <Users size={28} strokeWidth={1.5} /> },
              { id: 'cf', title: 'CUSTOMER FOCUSED', desc: 'Long-term trust.', icon: <Users size={28} strokeWidth={1.5} /> }
            ].map((item, i) => (
              <div key={item.id} className={`flex items-start gap-4 ${i !== 0 ? 'lg:pl-8' : ''}`}>
                <div className="text-ssc-gold shrink-0 mt-0.5">{item.icon}</div>
                <div className="flex flex-col">
                  <h5 className="text-[12px] font-bold tracking-widest text-white uppercase mb-1.5">{item.title}</h5>
                  <p className="text-[11px] text-white/50 uppercase leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* BOTTOM LEGAL / COPYRIGHT AREA */}
      <div className="bg-[#03070E] py-8 border-t border-white/5">
        <div className="container-wide flex flex-col gap-6">
          
          {/* Main Legal Row */}
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6">
            <p className="text-[11px] text-white/50 tracking-widest uppercase text-center md:text-left">
              © {currentYear} SRINIVASA STEEL CORPORATION. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 justify-center">
              <Link to="/contact" search={{ product: "" }} className="text-[11px] text-white/50 hover:text-white tracking-widest uppercase transition-colors">
                PRIVACY POLICY
              </Link>
              <Link to="/contact" search={{ product: "" }} className="text-[11px] text-white/50 hover:text-white tracking-widest uppercase transition-colors">
                TERMS & CONDITIONS
              </Link>
            </div>
          </div>

          {/* Subtle Developer Credit */}
          <div className="flex justify-center border-t border-white/5 pt-5">
            <p className="text-[9px] text-white/20 tracking-[0.2em] uppercase">
              DESIGNED AND DEVELOPED BY <a href="https://www.thedreamteamservices.com/" target="_blank" rel="noopener noreferrer" className="text-ssc-gold hover:text-white transition-colors underline decoration-ssc-gold/30 hover:decoration-white/50 underline-offset-4 ml-1">DREAM TEAM SERVICES</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};