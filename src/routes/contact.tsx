import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, User, ArrowRight, Check, AlertCircle, Clock, MapPin, ShieldCheck, Settings, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.srinivasasteelcorporation.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://www.srinivasasteelcorporation.com/contact"
    }
  ]
};

const contactSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  companyName: z.string().optional(),
  phoneNumber: z.string().regex(/^[\d\s\+\-\(\)]+$/, "Please enter a valid phone number (numbers only)"),
  emailAddress: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().optional(),
  size: z.string().optional(),
  deliveryLocation: z.string().optional(),
  message: z.string().min(5, "Please provide more details about your requirement"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      product: (search['product'] as string) || "",
    };
  },
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Srinivasa Steel Corporation | Vijayawada & Gannavaram" },
      { name: "description", content: "Contact Srinivasa Steel Corporation for bulk steel, TMT rebars, and industrial decoiling requirements in Vijayawada and Gannavaram." },
      { property: "og:title", content: "Contact Srinivasa Steel Corporation | Vijayawada & Gannavaram" },
      { property: "og:description", content: "Contact Srinivasa Steel Corporation for bulk steel, TMT rebars, and industrial decoiling requirements in Vijayawada and Gannavaram." },
      { property: "og:url", content: "https://www.srinivasasteelcorporation.com/contact" },
      { property: "og:image", content: "https://www.srinivasasteelcorporation.com/hero/hero-5.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.srinivasasteelcorporation.com/contact" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
    ]
  }),
});

const team = [
  { name: "M.S.V. BHASKAR", designation: "Managing Director", phone: "9440170453" },
  { name: "M.V. RAMANA KUMAR", designation: "Director", phone: "9849600403" },
  { name: "M.K.M.M. YESWANTH", designation: "Director", phone: "9849742773" },
];

/* ─── Andhra Pradesh Map SVG (simplified outline) ─── */
const APMapSVG = () => (
  <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a2d4a" />
        <stop offset="50%" stopColor="#0f1f35" />
        <stop offset="100%" stopColor="#162842" />
      </linearGradient>
      <linearGradient id="mapEdge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a4a6e" />
        <stop offset="100%" stopColor="#1a3050" />
      </linearGradient>
      <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
      </filter>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Extrusion / depth layer (shifted down/right for 3D effect) */}
    <path
      d="M80,180 L95,155 L110,140 L130,125 L155,110 L175,100 L200,85 L225,78 L250,72 L275,68 L300,70 L325,75 L345,82 L365,92 L380,105 L395,120 L410,140 L420,160 L425,180 L420,200 L410,218 L395,232 L380,245 L365,255 L345,262 L325,268 L305,272 L285,275 L265,280 L245,285 L225,290 L205,295 L185,298 L165,295 L145,288 L125,275 L110,260 L95,240 L85,220 L80,200 Z"
      fill="#0a1520"
      transform="translate(5, 12)"
      opacity="0.7"
    />
    <path
      d="M80,180 L95,155 L110,140 L130,125 L155,110 L175,100 L200,85 L225,78 L250,72 L275,68 L300,70 L325,75 L345,82 L365,92 L380,105 L395,120 L410,140 L420,160 L425,180 L420,200 L410,218 L395,232 L380,245 L365,255 L345,262 L325,268 L305,272 L285,275 L265,280 L245,285 L225,290 L205,295 L185,298 L165,295 L145,288 L125,275 L110,260 L95,240 L85,220 L80,200 Z"
      fill="#0d1a2a"
      transform="translate(3, 8)"
      opacity="0.8"
    />

    {/* Main map surface */}
    <path
      d="M80,180 L95,155 L110,140 L130,125 L155,110 L175,100 L200,85 L225,78 L250,72 L275,68 L300,70 L325,75 L345,82 L365,92 L380,105 L395,120 L410,140 L420,160 L425,180 L420,200 L410,218 L395,232 L380,245 L365,255 L345,262 L325,268 L305,272 L285,275 L265,280 L245,285 L225,290 L205,295 L185,298 L165,295 L145,288 L125,275 L110,260 L95,240 L85,220 L80,200 Z"
      fill="url(#mapGrad)"
      stroke="url(#mapEdge)"
      strokeWidth="1.5"
      filter="url(#mapShadow)"
    />

    {/* Internal terrain/geographic lines */}
    <path d="M130,125 L180,160 L230,175 L280,170 L330,155 L365,140" stroke="#1e3a5a" strokeWidth="0.7" opacity="0.5" />
    <path d="M110,200 L160,210 L220,220 L280,215 L340,220 L395,232" stroke="#1e3a5a" strokeWidth="0.5" opacity="0.4" />
    <path d="M155,110 L200,145 L250,160 L310,155 L365,170" stroke="#1e3a5a" strokeWidth="0.5" opacity="0.3" />
    <path d="M145,250 L200,240 L260,245 L320,250 L365,255" stroke="#1e3a5a" strokeWidth="0.5" opacity="0.3" />

    {/* Subtle highlight edge (top-left) */}
    <path
      d="M80,180 L95,155 L110,140 L130,125 L155,110 L175,100 L200,85 L225,78 L250,72"
      fill="none"
      stroke="#3a6090"
      strokeWidth="1"
      opacity="0.4"
    />

    {/* ── Location Pin 1: VIJAYAWADA ── */}
    <g>
      <circle cx="195" cy="185" r="8" fill="#D9A928" opacity="0.2" filter="url(#glow)" />
      <circle cx="195" cy="185" r="5" fill="#D9A928" opacity="0.5" />
      <circle cx="195" cy="185" r="3" fill="#fff" opacity="0.9" />
      <line x1="195" y1="178" x2="165" y2="140" stroke="#D9A928" strokeWidth="0.8" opacity="0.6" />
    </g>

    {/* ── Location Pin 2: GANNAVARAM ── */}
    <g>
      <circle cx="215" cy="168" r="8" fill="#D9A928" opacity="0.2" filter="url(#glow)" />
      <circle cx="215" cy="168" r="5" fill="#D9A928" opacity="0.5" />
      <circle cx="215" cy="168" r="3" fill="#fff" opacity="0.9" />
      <line x1="215" y1="161" x2="260" y2="95" stroke="#D9A928" strokeWidth="0.8" opacity="0.6" />
    </g>

    {/* ── Location Pin 3: VISAKHAPATNAM ── */}
    <g>
      <circle cx="330" cy="130" r="8" fill="#D9A928" opacity="0.2" filter="url(#glow)" />
      <circle cx="330" cy="130" r="5" fill="#D9A928" opacity="0.5" />
      <circle cx="330" cy="130" r="3" fill="#fff" opacity="0.9" />
      <line x1="330" y1="123" x2="355" y2="85" stroke="#D9A928" strokeWidth="0.8" opacity="0.6" />
    </g>

    {/* ── Label: VIJAYAWADA ── */}
    <g>
      <rect x="85" y="118" width="120" height="36" rx="6" fill="#0B1929" fillOpacity="0.9" stroke="#2a4a6e" strokeWidth="0.8" />
      <text x="145" y="132" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">VIJAYAWADA</text>
      <text x="145" y="145" textAnchor="middle" fill="#D9A928" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.3">H.O. BHAVANIPURAM</text>
    </g>

    {/* ── Label: GANNAVARAM YARD ── */}
    <g>
      <rect x="200" y="72" width="130" height="36" rx="6" fill="#0B1929" fillOpacity="0.9" stroke="#2a4a6e" strokeWidth="0.8" />
      <text x="265" y="86" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">GANNAVARAM YARD</text>
      <text x="265" y="99" textAnchor="middle" fill="#D9A928" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.3">B.O. GANNAVARAM</text>
    </g>

    {/* ── Label: VISAKHAPATNAM ── */}
    <g>
      <rect x="300" y="58" width="130" height="36" rx="6" fill="#0B1929" fillOpacity="0.9" stroke="#2a4a6e" strokeWidth="0.8" />
      <text x="365" y="72" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">VISAKHAPATNAM</text>
      <text x="365" y="85" textAnchor="middle" fill="#D9A928" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.3">B.O. AE PALAGANTIVADA</text>
    </g>
  </svg>
);

/* ─── Social Icon Components ─── */
const SocialIcon = ({ type }: { type: 'fb' | 'ig' | 'li' }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {type === 'fb' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
    {type === 'ig' && (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    )}
    {type === 'li' && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />}
  </svg>
);

function ContactPage() {
  const search = Route.useSearch() as { product?: string };
  const product = search['product'];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      product: product || "",
    },
  });

  useEffect(() => {
    if (product) {
      setValue("product", product);
    }
  }, [product, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const template = `*New Quote Request*
-----------------------------
*Name:* ${data.fullName}
*Phone:* ${data.phoneNumber}
*Email:* ${data.emailAddress || "N/A"}
*Product:* ${data.product}
*Message:* ${data.message}
-----------------------------
*Via Website Contact Form*`;

      const encoded = encodeURIComponent(template);
      const adminPhone = "919440170453"; // M.S.V. BHASKAR
      window.open(`https://wa.me/${adminPhone}?text=${encoded}`, "_blank");
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#071525] min-h-screen">

      {/* ════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#071525] flex flex-col pt-[72px] sm:pt-[80px] md:pt-[84px]">
        
        {/* Background Map Image with Overlays */}
        <div className="absolute inset-0 flex flex-col justify-end lg:flex-row lg:items-center overflow-hidden pointer-events-none">
          
          {/* MOBILE IMAGE WRAPPER (Portrait) */}
          <div 
            className="relative pointer-events-auto flex-shrink-0 block lg:hidden mt-auto mx-auto"
            style={{ 
              aspectRatio: '682/1024',
              height: 'min(80vh, 900px)',
              maxWidth: '100%'
            }}
          >
            <img src="/hero/contact-hero-map-mobile.jpg" alt="Srinivasa Steel Locations Map" className="w-full h-full object-contain object-bottom" />
            
            {/* Interactive Overlay: Vijayawada (Mobile) */}
            <div 
              className="absolute group cursor-pointer flex items-center justify-center transition-all duration-300"
              style={{ top: '66.8%', left: '24.9%', width: '10%', height: '7%' }}
              onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <div className="absolute inset-[-50%] bg-[#D9A928] opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-full" />
              <div className="w-full h-full rounded-full active:scale-150 active:bg-[#D9A928] active:shadow-[0_0_25px_#D9A928] transition-all duration-200" />
            </div>

            {/* Interactive Overlay: Gannavaram (Mobile) */}
            <div 
              className="absolute group cursor-pointer flex items-center justify-center transition-all duration-300"
              style={{ top: '59.5%', left: '51.3%', width: '10%', height: '7%' }}
              onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <div className="absolute inset-[-50%] bg-[#D9A928] opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-full" />
              <div className="w-full h-full rounded-full active:scale-150 active:bg-[#D9A928] active:shadow-[0_0_25px_#D9A928] transition-all duration-200" />
            </div>

            {/* Interactive Overlay: Visakhapatnam (Mobile) */}
            <div 
              className="absolute group cursor-pointer flex items-center justify-center transition-all duration-300"
              style={{ top: '52.2%', left: '77.7%', width: '10%', height: '7%' }}
              onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <div className="absolute inset-[-50%] bg-[#D9A928] opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-full" />
              <div className="w-full h-full rounded-full active:scale-150 active:bg-[#D9A928] active:shadow-[0_0_25px_#D9A928] transition-all duration-200" />
            </div>
          </div>

          {/* DESKTOP IMAGE WRAPPER (Landscape) */}
          <div className="relative w-[85%] max-w-[1400px] pointer-events-auto flex-shrink-0 hidden lg:block ml-auto">
            <img src="/hero/contact-hero-map-full.png" alt="Srinivasa Steel Locations Map" className="w-full h-auto object-contain" />
            
            {/* Interactive Overlay: Vijayawada (Desktop) */}
            <div 
              className="absolute group cursor-pointer flex items-center justify-center transition-all duration-300"
              style={{ top: '48%', left: '50.5%', width: '4%', height: '7%' }}
              onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <div className="absolute inset-[-50%] bg-[#D9A928] opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-full" />
              <div className="w-full h-full rounded-full active:scale-150 active:bg-[#D9A928] active:shadow-[0_0_25px_#D9A928] transition-all duration-200" />
            </div>

            {/* Interactive Overlay: Gannavaram (Desktop) */}
            <div 
              className="absolute group cursor-pointer flex items-center justify-center transition-all duration-300"
              style={{ top: '35%', left: '63.5%', width: '4%', height: '7%' }}
              onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <div className="absolute inset-[-50%] bg-[#D9A928] opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-full" />
              <div className="w-full h-full rounded-full active:scale-150 active:bg-[#D9A928] active:shadow-[0_0_25px_#D9A928] transition-all duration-200" />
            </div>

            {/* Interactive Overlay: Visakhapatnam (Desktop) */}
            <div 
              className="absolute group cursor-pointer flex items-center justify-center transition-all duration-300"
              style={{ top: '22%', left: '80%', width: '4%', height: '7%' }}
              onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <div className="absolute inset-[-50%] bg-[#D9A928] opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-full" />
              <div className="w-full h-full rounded-full active:scale-150 active:bg-[#D9A928] active:shadow-[0_0_25px_#D9A928] transition-all duration-200" />
            </div>
          </div>
        </div>

        {/* Dark gradient overlay to ensure text readability without covering the map */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#071525] from-30% lg:from-10% via-[#071525]/90 via-50% lg:via-40% to-transparent to-70% lg:to-65% pointer-events-none z-10" />

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-20 flex-1 flex flex-col justify-start lg:justify-center pb-8 lg:pb-0 pt-[8vh] sm:pt-[12vh] lg:pt-0 mt-4 lg:mt-0">
          
          {/* LEFT: Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] xl:w-[40%] relative"
          >
            <span className="text-[11px] sm:text-[12px] font-[700] text-[#D9A928] uppercase tracking-[0.2em] mb-4 block">
              GET IN TOUCH
            </span>
            <h1 className="text-[clamp(2.5rem,4.5vw,4rem)] font-[900] leading-[1] tracking-tighter mb-5 uppercase">
              <span className="text-white block">LET'S</span>
              <span className="text-[#D9A928] block">CONNECT</span>
            </h1>
            <div className="w-12 h-[3px] bg-[#D9A928] mb-5" />
            <p className="text-[14px] sm:text-[15px] text-white/80 max-w-[380px] leading-[1.6] font-medium">
              Have a steel, TMT or decoiling requirement?<br />
              Share your requirement with our team<br />
              for quotes, orders or facility visits.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FORM + CONTACT INFO SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F2F3F5] py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* ── LEFT: Inquiry Form Card ── */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-[#071525]/[0.06] text-center"
                  >
                    <div className="w-20 h-20 bg-[#D9A928]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-[#D9A928]" size={40} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-[800] text-[#071525] mb-6 uppercase tracking-tight">
                      REQUEST RECEIVED.
                    </h2>
                    <p className="text-[15px] text-[#071525]/60 mb-10 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Srinivasa Steel Corporation. Our team will review your requirement and get in touch with you.
                    </p>
                    <Button asChild>
                      <Link to="/">BACK TO HOME</Link>
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#071525]/[0.06]"
                  >
                    {/* Heading with icon */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-[#071525] flex items-center justify-center shrink-0">
                        <Mail className="text-[#D9A928]" size={18} strokeWidth={1.5} />
                      </div>
                      <h2 id="quote-form" className="text-[16px] sm:text-[18px] font-[800] text-[#071525] uppercase tracking-wide">
                        REQUEST A QUOTE
                      </h2>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      {/* Row 1: Full Name + Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Input 
                            {...register("fullName")}
                            id="fullName"
                            placeholder="Full Name *" 
                            className={`h-13 rounded-xl border-[#071525]/10 bg-[#F7F8FA] focus:bg-white transition-all text-[#071525] text-[14px] placeholder:text-[#071525]/40 ${errors.fullName ? 'border-red-500' : ''}`} 
                          />
                          {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.fullName.message}</p>}
                        </div>
                        <div>
                          <Input 
                            {...register("phoneNumber")}
                            id="phoneNumber"
                            type="tel" 
                            placeholder="Phone Number *" 
                            className={`h-13 rounded-xl border-[#071525]/10 bg-[#F7F8FA] focus:bg-white transition-all text-[#071525] text-[14px] placeholder:text-[#071525]/40 ${errors.phoneNumber ? 'border-red-500' : ''}`} 
                          />
                          {errors.phoneNumber && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.phoneNumber.message}</p>}
                        </div>
                      </div>

                      {/* Row 2: Email + Product */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Input 
                            {...register("emailAddress")}
                            id="emailAddress"
                            type="email" 
                            placeholder="Email Address *" 
                            className={`h-13 rounded-xl border-[#071525]/10 bg-[#F7F8FA] focus:bg-white transition-all text-[#071525] text-[14px] placeholder:text-[#071525]/40 ${errors.emailAddress ? 'border-red-500' : ''}`} 
                          />
                          {errors.emailAddress && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.emailAddress.message}</p>}
                        </div>
                        <div>
                          <Select 
                            onValueChange={(val) => setValue("product", val)} 
                            value={product || ""}
                          >
                            <SelectTrigger id="product" className={`h-13 rounded-xl border-[#071525]/10 bg-[#F7F8FA] focus:bg-white transition-all text-[#071525] text-[14px] ${errors.product ? 'border-red-500' : ''}`}>
                              <SelectValue placeholder="Requirement / Product *" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-[#071525]/10 text-black">
                              <SelectItem value="TMT REBARS" className="text-[13px] text-black">TMT Rebars</SelectItem>
                              <SelectItem value="BINDING WIRE" className="text-[13px] text-black">Binding Wire</SelectItem>
                              <SelectItem value="GI WIRE" className="text-[13px] text-black">GI Wire</SelectItem>
                              <SelectItem value="OIL RODS" className="text-[13px] text-black">Oil Rods</SelectItem>
                              <SelectItem value="DECOILED STEEL" className="text-[13px] text-black">Decoiled Steel</SelectItem>
                              <SelectItem value="PIPES & TUBES" className="text-[13px] text-black">Pipes & Tubes</SelectItem>
                              <SelectItem value="STRUCTURAL STEEL" className="text-[13px] text-black">Structural Steel</SelectItem>
                              <SelectItem value="OTHER STEEL REQUIREMENT" className="text-[13px] text-black">Other Steel Requirement</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.product && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.product.message}</p>}
                        </div>
                      </div>

                      {/* Row 3: Message */}
                      <div>
                        <Textarea 
                          {...register("message")}
                          id="message"
                          placeholder="Your Message / Additional Information" 
                          className={`min-h-[120px] rounded-xl border-[#071525]/10 bg-[#F7F8FA] focus:bg-white transition-all text-[#071525] text-[14px] placeholder:text-[#071525]/40 resize-none ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.message.message}</p>}
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
                          <AlertCircle size={20} />
                          <div className="text-sm font-medium">
                            We couldn't send your request. Please try again or contact our team directly.
                          </div>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-xl bg-[#D9A928] hover:bg-[#c48e1f] text-[#071525] font-[800] text-[13px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all disabled:opacity-70 shadow-md hover:shadow-lg"
                      >
                        {isSubmitting ? "SENDING..." : "SEND ENQUIRY"} <ArrowRight size={18} strokeWidth={2.5} />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── RIGHT: Contact Information Card ── */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#071525]/[0.06]"
              >
                <h3 className="text-[16px] sm:text-[18px] font-[800] text-[#071525] uppercase tracking-wide mb-8">
                  GET IN TOUCH WITH US
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#071525] flex items-center justify-center">
                      <Phone className="text-[#D9A928]" size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <a href="tel:08662436357" className="text-[16px] font-[700] text-[#071525] hover:text-[#D9A928] transition-colors block">
                        0866-XXXXXXX
                      </a>
                      <span className="text-[12px] text-[#071525]/50 font-medium">Landline</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#071525] flex items-center justify-center">
                      <Mail className="text-[#D9A928]" size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-[15px] font-[700] text-[#071525] hover:text-[#D9A928] transition-colors block break-all">
                        info@srinivasasteel.com
                      </a>
                      <span className="text-[12px] text-[#071525]/50 font-medium">Email</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#071525] flex items-center justify-center">
                      <Clock className="text-[#D9A928]" size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[16px] font-[700] text-[#071525]">
                        Mon – Sat : 8:30 AM – 6:30 PM
                      </p>
                      <span className="text-[12px] text-[#071525]/50 font-medium">Working Hours</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-[#071525]/[0.06]">
                  <h4 className="text-[13px] font-[800] text-[#071525] uppercase tracking-wider mb-5">
                    FOLLOW US
                  </h4>
                  <div className="flex items-center gap-4">
                    <a href="#" className="w-11 h-11 rounded-full border border-[#071525]/10 flex items-center justify-center text-[#071525]/70 hover:bg-[#071525] hover:text-white hover:border-[#071525] transition-all">
                      <SocialIcon type="fb" />
                    </a>
                    <a href="#" className="w-11 h-11 rounded-full border border-[#071525]/10 flex items-center justify-center text-[#071525]/70 hover:bg-[#071525] hover:text-white hover:border-[#071525] transition-all">
                      <SocialIcon type="ig" />
                    </a>
                    <a href="#" className="w-11 h-11 rounded-full border border-[#071525]/10 flex items-center justify-center text-[#071525]/70 hover:bg-[#071525] hover:text-white hover:border-[#071525] transition-all">
                      <SocialIcon type="li" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* ════════════════════════════════════════════════
              CONTACT PERSONS STRIP
          ════════════════════════════════════════════════ */}
          <div className="mt-12 lg:mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#D9A928]" />
              <h3 className="text-[13px] font-[800] text-[#071525] uppercase tracking-wider">
                OUR CONTACT PERSONS
              </h3>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-[#071525]/[0.06] p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                {team.map((person, index) => (
                  <div 
                    key={person.phone} 
                    className={`flex items-center gap-4 ${index < team.length - 1 ? 'md:border-r md:border-[#071525]/[0.06] md:pr-8' : ''} ${index > 0 ? 'md:pl-8' : ''}`}
                  >
                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#F2F3F5] flex items-center justify-center border border-[#071525]/[0.06]">
                      <User className="text-[#071525]/40" size={22} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-[800] text-[#071525] tracking-tight">{person.name}</span>
                      <span className="text-[11px] font-[600] text-[#D9A928] uppercase tracking-wider mb-1">{person.designation}</span>
                      <a 
                        href={`tel:${person.phone}`} 
                        className="flex items-center gap-2 text-[13px] text-[#071525]/70 hover:text-[#D9A928] transition-colors"
                      >
                        <Phone size={12} strokeWidth={2} />
                        {person.phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TRUST / FEATURE STRIP
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0B1929] py-8 lg:py-10">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4 lg:pr-6 xl:pr-8 lg:border-r border-white/[0.08]">
              <div className="w-11 h-11 shrink-0 rounded-full bg-[#102238] border border-[#D9A928]/30 flex items-center justify-center">
                <ShieldCheck className="text-[#D9A928]" size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-white font-[800] text-[11px] uppercase tracking-wider mb-0.5">PREMIUM QUALITY</h5>
                <p className="text-white/50 text-[12px]">Tested & Certified</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 lg:px-6 xl:px-8 lg:border-r border-white/[0.08]">
              <div className="w-11 h-11 shrink-0 rounded-full bg-[#102238] border border-[#D9A928]/30 flex items-center justify-center">
                <Settings className="text-[#D9A928]" size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-white font-[800] text-[11px] uppercase tracking-wider mb-0.5">PRECISION ENGINEERED</h5>
                <p className="text-white/50 text-[12px]">For Maximum Strength</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 lg:px-6 xl:px-8 lg:border-r border-white/[0.08]">
              <div className="w-11 h-11 shrink-0 rounded-full bg-[#102238] border border-[#D9A928]/30 flex items-center justify-center">
                <Factory className="text-[#D9A928]" size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-white font-[800] text-[11px] uppercase tracking-wider mb-0.5">WIDE PRODUCT RANGE</h5>
                <p className="text-white/50 text-[12px]">TMT, Pipes, Wire & More</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 lg:pl-6 xl:pl-8">
              <div className="w-11 h-11 shrink-0 rounded-full bg-[#102238] border border-[#D9A928]/30 flex items-center justify-center">
                <Truck className="text-[#D9A928]" size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-white font-[800] text-[11px] uppercase tracking-wider mb-0.5">ON-TIME DELIVERY</h5>
                <p className="text-white/50 text-[12px]">Reliable. Efficient. Always.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
