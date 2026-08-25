import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, User, ArrowRight, CheckCircle2, MapPin, Check, AlertCircle } from "lucide-react";
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

const contactSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  companyName: z.string().optional(),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
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
      { title: "Contact Srinivasa Steel Corporation | Get a Quote" },
      { name: "description", content: "Contact Srinivasa Steel Corporation for TMT, steel product and decoiling requirements." },
      { property: "og:title", content: "Contact Srinivasa Steel Corporation | Get a Quote" },
      { property: "og:description", content: "Contact Srinivasa Steel Corporation for TMT, steel product and decoiling requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const team = [
  { name: "M.S.V. Bhaskar", phone: "9440170453" },
  { name: "M.V. Ramana Kumar", phone: "9849600403" },
  { name: "M.V.N.M. Yeshwanth", phone: "8125397453" },
];

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
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroImageUrl = "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="bg-ssc-navy min-h-screen">
      {/* Contact Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden bg-background pt-[62px] sm:pt-[68px] md:pt-[72px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            alt="Srinivasa Steel Corporation industrial yard" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ssc-navy via-ssc-navy/80 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-micro text-ssc-gold uppercase mb-6 block">
              CONTACT SRINIVASA STEEL CORPORATION
            </span>
            <h1 className="text-h1 text-white mb-8 uppercase">
              LET'S TALK <br />
              <span className="text-ssc-gold">STEEL.</span>
            </h1>
            <p className="text-body-large text-white/70 max-w-xl">
              Have a steel, TMT or decoiling requirement? Share your requirement with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form & Team Info */}
      <section className="section-spacing bg-ssc-steel-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Quote Form - Left Column */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-[24px] p-8 lg:p-12 shadow-sm border border-black/5 text-center"
                  >
                    <div className="w-20 h-20 bg-ssc-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-ssc-gold" size={40} />
                    </div>
                    <h2 className="text-h2 text-foreground mb-6 uppercase">
                      REQUEST RECEIVED.
                    </h2>
                    <p className="text-body text-foreground/60 mb-10 max-w-md mx-auto">
                      Thank you for contacting Srinivasa Steel Corporation. Our team will review your requirement and get in touch with you.
                    </p>
                    <Button 
                      asChild
                    >
                      <Link to="/">BACK TO HOME</Link>
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[24px] p-6 sm:p-8 md:p-12 shadow-sm border border-black/5"
                  >
                    <h2 id="quote-form" className="text-h2 text-foreground mb-10 uppercase">
                      REQUEST A QUOTE
                    </h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="text-micro text-ssc-navy/40 uppercase ml-1">Full Name *</label>
                          <Input 
                            {...register("fullName")}
                            id="fullName"
                            placeholder="YOUR NAME" 
                            className={`h-14 rounded-xl border-black/5 bg-white focus:bg-ssc-steel-light transition-all text-ssc-navy ${errors.fullName ? 'border-red-500' : ''}`} 
                          />
                          {errors.fullName && <p className="text-red-500 text-[10px] font-body uppercase mt-1">{errors.fullName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="companyName" className="text-[10px] font-body font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Company Name</label>
                          <Input 
                            {...register("companyName")}
                            id="companyName"
                            placeholder="ORGANIZATION NAME" 
                            className="h-14 rounded-xl border-black/5 bg-white focus:bg-ssc-steel-light transition-all text-ssc-navy" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phoneNumber" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Phone Number *</label>
                          <Input 
                            {...register("phoneNumber")}
                            id="phoneNumber"
                            type="tel" 
                            placeholder="10-DIGIT NUMBER" 
                            className={`h-14 rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground ${errors.phoneNumber ? 'border-red-500' : ''}`} 
                          />
                          {errors.phoneNumber && <p className="text-red-500 text-[10px] font-body uppercase mt-1">{errors.phoneNumber.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="emailAddress" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Email Address</label>
                          <Input 
                            {...register("emailAddress")}
                            id="emailAddress"
                            type="email" 
                            placeholder="EMAIL@DOMAIN.COM" 
                            className={`h-14 rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground ${errors.emailAddress ? 'border-red-500' : ''}`} 
                          />
                          {errors.emailAddress && <p className="text-red-500 text-[10px] font-body uppercase mt-1">{errors.emailAddress.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="product" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Product / Requirement *</label>
                        <Select 
                          onValueChange={(val) => setValue("product", val)} 
                          value={product || ""}
                        >
                            <SelectTrigger id="product" className={`h-14 rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground uppercase text-[12px] tracking-wide ${errors.product ? 'border-red-500' : ''}`}>
                              <SelectValue placeholder="SELECT PRODUCT" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-black/5">
                              <SelectItem value="TMT REBARS" className="uppercase text-[12px]">TMT Rebars</SelectItem>
                              <SelectItem value="BINDING WIRE" className="uppercase text-[12px]">Binding Wire</SelectItem>
                              <SelectItem value="GI WIRE" className="uppercase text-[12px]">GI Wire</SelectItem>
                              <SelectItem value="OIL RODS" className="uppercase text-[12px]">Oil Rods</SelectItem>
                              <SelectItem value="DECOILED STEEL" className="uppercase text-[12px]">Decoiled Steel</SelectItem>
                              <SelectItem value="OTHER STEEL REQUIREMENT" className="uppercase text-[12px]">Other Steel Requirement</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.product && <p className="text-red-500 text-[10px] font-body uppercase mt-1">{errors.product.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="quantity" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Quantity</label>
                          <Input 
                            {...register("quantity")}
                            id="quantity"
                            placeholder="E.G. 10 TONS" 
                            className="h-14 rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="size" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Required Size / Length</label>
                          <Input 
                            {...register("size")}
                            id="size"
                            placeholder="SPECIFICATIONS" 
                            className="h-14 rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="deliveryLocation" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Delivery Location</label>
                          <Input 
                            {...register("deliveryLocation")}
                            id="deliveryLocation"
                            placeholder="CITY / YARD" 
                            className="h-14 rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-[10px] font-body font-bold text-foreground/40 uppercase tracking-widest ml-1">Message / Requirement *</label>
                        <Textarea 
                          {...register("message")}
                          id="message"
                          placeholder="TELL US ABOUT YOUR PROJECT REQUIREMENTS..." 
                          className={`min-h-[120px] rounded-xl border-black/5 bg-[#E6E8EC] focus:bg-white transition-all text-foreground resize-none ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && <p className="text-red-500 text-[10px] font-body uppercase mt-1">{errors.message.message}</p>}
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
                          <AlertCircle size={20} />
                          <div className="text-sm font-medium uppercase tracking-tight">
                            WE COULDN'T SEND YOUR REQUEST. Please try again or contact our team directly.
                          </div>
                        </div>
                      )}

                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 disabled:opacity-70"
                      >
                        {isSubmitting ? "SENDING..." : "REQUEST QUOTE"} <ArrowRight size={20} className="text-[#0B1B33]" />
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Team & Info - Right Column */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-micro text-primary uppercase mb-8">
                  CONTACT OUR TEAM
                </h3>
                <div className="space-y-6">
                  {team.map((person) => (
                    <div key={person.phone} className="flex items-center gap-5 p-6 bg-white rounded-[24px] border border-ssc-navy/5 hover:border-ssc-gold/30 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-ssc-navy/5 flex items-center justify-center group-hover:bg-ssc-navy transition-colors">
                        <User size={20} className="text-ssc-navy group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-micro text-ssc-navy/40 uppercase tracking-tight">{person.name}</p>
                        <a href={`tel:${person.phone}`} className="text-body text-ssc-navy hover:text-ssc-gold-dark transition-colors block leading-tight mt-1 min-h-[44px] flex items-center">
                          {person.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-5 p-6 bg-white rounded-[24px] border border-ssc-navy/5 hover:border-ssc-gold/30 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-ssc-navy/5 flex items-center justify-center group-hover:bg-ssc-navy transition-colors">
                      <Mail size={20} className="text-ssc-navy group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-micro text-ssc-navy/40 uppercase tracking-tight">Email Inquiries</p>
                      <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-body text-ssc-navy hover:text-ssc-gold-dark transition-colors break-all block leading-tight mt-1 min-h-[44px] flex items-center">
                        srinivasasteelcorporationvja@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-ssc-navy p-10 rounded-[32px] text-ssc-on-dark-primary shadow-premium-deep"
              >
                <h3 className="text-h4 text-ssc-on-dark-primary mb-8 uppercase">Requirement Scope</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-micro text-ssc-gold uppercase mb-4">TMT REBARS</h4>
                    <ul className="grid grid-cols-2 gap-3 text-small text-ssc-on-dark-body">
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> 5 mm</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> 5.5 mm</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> 5.5 mm TMT</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> 6 mm TMT</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-micro text-primary uppercase mb-4">DECOILING</h4>
                    <p className="text-small text-white/70 leading-relaxed">
                      Custom cutting and straightening for applicable steel sizes and lengths.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary text-[10px] font-body font-bold tracking-[0.2em] uppercase mb-4">OTHER PRODUCTS</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Binding wire</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Oil rods</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Other steel requirements</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-24 bg-white border-t border-ssc-navy/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-body font-bold text-ssc-navy mb-4 tracking-tight uppercase">
              OUR <span className="text-ssc-gold-dark">LOCATIONS</span>
            </h2>
            <div className="w-20 h-1 bg-ssc-gold-dark mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-ssc-steel-light p-10 rounded-[32px] border border-ssc-navy/5 hover:border-ssc-gold/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-ssc-navy/5 flex items-center justify-center mb-8 group-hover:bg-ssc-navy transition-colors">
                <MapPin size={24} className="text-ssc-navy group-hover:text-white" />
              </div>
              <h3 className="text-[12px] font-body font-bold tracking-[0.2em] text-ssc-gold-dark uppercase mb-6">HEAD OFFICE</h3>
              <p className="text-ssc-navy font-body font-medium leading-relaxed">
                Plot No. 90,<br />
                Iron Complex,<br />
                Godown Block No. 36/3,<br />
                Bhavanipuram,<br />
                Vijayawada – 520012
              </p>
            </motion.div>

            {/* Gannavaram Yard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-ssc-steel-light p-10 rounded-[32px] border border-ssc-navy/5 hover:border-ssc-gold/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-ssc-navy/5 flex items-center justify-center mb-8 group-hover:bg-ssc-navy transition-colors">
                <MapPin size={24} className="text-ssc-navy group-hover:text-white" />
              </div>
              <h3 className="text-[12px] font-body font-bold tracking-[0.2em] text-ssc-gold-dark uppercase mb-6">GANNAVARAM YARD</h3>
              <p className="text-ssc-navy font-body font-medium leading-relaxed">
                Gannavaram Yard,<br />
                Nuzividu Road,<br />
                Gannavaram – 521101
              </p>
            </motion.div>

            {/* Vizag Branch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-ssc-steel-light p-10 rounded-[32px] border border-ssc-navy/5 hover:border-ssc-gold/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-ssc-navy/5 flex items-center justify-center mb-8 group-hover:bg-ssc-navy transition-colors">
                <MapPin size={24} className="text-ssc-navy group-hover:text-white" />
              </div>
              <h3 className="text-[12px] font-body font-bold tracking-[0.2em] text-ssc-gold-dark uppercase mb-6">VIZAG BRANCH</h3>
              <p className="text-ssc-navy font-body font-medium leading-relaxed">
                S. No. 156,<br />
                Plot No. 163A, 163B,<br />
                Vakalapudi,<br />
                Kakinada – 533005
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
