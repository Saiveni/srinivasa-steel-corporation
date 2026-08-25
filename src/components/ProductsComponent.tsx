import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Phone, Mail, FileText, Shield, Zap, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

// @ts-ignore
import rebarCoils from "@/assets/rebar-coils.jpg.asset.json";
// @ts-ignore
import rebarDetail from "@/assets/rebar-detail.jpg.asset.json";
// @ts-ignore
import rebarWarehouse from "@/assets/rebar-warehouse.jpg.asset.json";

const products = [
  {
    id: "tmt-rebars",
    name: "TMT REBARS",
    description: "Steel products for construction and structural requirements.",
    longDescription: "High-strength TMT rebars engineered for superior bonding with concrete and earthquake resistance. Our stock includes a comprehensive range of sizes suitable for residential, commercial, and industrial infrastructure projects.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
    alt: "Highly realistic close-up photograph of ribbed TMT reinforcement bars",
    specs: ["5 mm", "5.5 mm", "5.5 mm TMT", "6 mm TMT", "TMT rebars"]
  },
  {
    id: "binding-wire",
    name: "BINDING WIRE",
    description: "Steel binding wire for reinforcement and construction applications.",
    longDescription: "Premium grade annealed steel binding wire. Designed for maximum flexibility and strength to ensure secure anchoring of reinforcement bars in all types of concrete structures.",
    image: (rebarCoils as any)?.url || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "Realistic photograph of tightly coiled binding wire",
    specs: ["Annealed Quality", "High Flexibility", "Corrosion Resistant"]
  },
  {
    id: "oil-rods",
    name: "OIL RODS",
    description: "Steel rods supplied for relevant industrial and construction requirements.",
    longDescription: "High-performance steel oil rods engineered for specialized mechanical and industrial applications. We provide consistent quality to meet rigorous industrial standards.",
    image: (rebarDetail as any)?.url || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    alt: "Realistic photograph of steel rods",
    specs: ["Industrial Grade", "Precision Manufactured", "Multi-industry Application"]
  },
  {
    id: "decoiled-steel",
    name: "DECOILED STEEL",
    description: "Decoiled steel solutions prepared to meet specific project requirements.",
    longDescription: "Precision processed decoiled steel. We offer professional straightening and cut-to-length services to provide steel that is ready for immediate application in your specific project.",
    image: (rebarWarehouse as any)?.url || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "Realistic photograph showing decoiled steel / straightened steel products",
    specs: ["2mm–4.5mm Material", "10–36 Feet Lengths", "Custom Cut-to-length"]
  }
];

const brands = [
  { name: "VIZAG STEEL", subtitle: "MoU Dealer" },
  { name: "SIMHADRI TMT", subtitle: "Dealer" },
  { name: "JINDAL PANTHER", subtitle: "Dealer" }
];

export const ProductsComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <div className="bg-ssc-steel-light min-h-screen">
      {/* Product Page Hero */}
      <section className="relative pt-24 pb-14 lg:pt-36 lg:pb-24 overflow-hidden bg-white border-b border-black/5">
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
             style={{ 
               backgroundImage: 'linear-gradient(to right, var(--ssc-navy) 1px, transparent 1px), linear-gradient(to bottom, var(--ssc-navy) 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }} 
        />
        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-micro text-ssc-gold-dark uppercase mb-4 block">
                  INDUSTRIAL SOLUTIONS
                </span>
                <h1 className="text-h1 text-ssc-navy mb-8 uppercase">
                  STEEL PRODUCTS BUILT <br />
                  <span className="text-ssc-gold-dark">FOR PERFORMANCE.</span>
                </h1>
                <p className="text-body text-ssc-gray-body max-w-[540px] mb-10">
                  High-performance steel products engineered for demanding applications. Consistent quality and reliable supply across the region.
                </p>
                <Button 
                  onClick={() => document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-ssc-gold text-ssc-navy hover:bg-ssc-gold/90"
                >
                  VIEW CATALOGUE <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] lg:aspect-[5/4] rounded-[24px] overflow-hidden border border-black/5 shadow-2xl shadow-ssc-navy/5"
              >
                <img 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop" 
                  alt="Premium steel reinforcement rebar bundles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ssc-navy/10 mix-blend-multiply" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Category Grid */}
      <section id="product-grid" className="section-spacing">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="bg-white rounded-[24px] border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] group-hover:-translate-y-1">
                  <div className="aspect-[16/9] overflow-hidden bg-[#F8FAFC]">
                    <motion.img 
                      src={product.image} 
                      alt={product.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.8 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-h3 text-ssc-navy mb-4 uppercase">
                      {product.name}
                    </h3>
                    <p className="text-body text-ssc-gray-body mb-8">
                      {product.description}
                    </p>
                    <Link to="/contact" search={{ product: product.name }} className="text-micro text-ssc-gold-dark hover:text-ssc-navy transition-colors uppercase">
                      REQUEST A QUOTE <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decoiling Feature Section */}
      <section className="relative section-spacing bg-ssc-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={(rebarCoils as any)?.url || "/placeholder.svg"} 
            alt="Steel decoiling machine processing stock"
            className="w-full h-full object-cover opacity-10 grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ssc-navy via-ssc-navy/90 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-micro text-ssc-gold uppercase mb-4 block">
                CORE CAPABILITIES
              </span>
              <h2 className="text-h2 text-ssc-on-dark-primary mb-8 uppercase">
                DECOILING FOR <br />
                <span className="text-ssc-gold">PRECISION.</span>
              </h2>
              <p className="text-body text-ssc-on-dark-body mb-10">
                Precision automated decoiling and straightening services from 2mm to 4.5mm with technical accuracy.
              </p>
              <Link to="/contact" search={{ product: "DECOILED STEEL" }}>
                <Button className="w-full sm:w-auto bg-ssc-gold text-ssc-navy hover:bg-ssc-gold/90">
                  ENQUIRE ABOUT DECOILING <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands / Supply Partners */}
      <section className="py-14 bg-white border-y border-ssc-navy/5">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-micro text-ssc-gold-dark uppercase mb-4 block">
              SUPPLY NETWORK
            </span>
            <h2 className="text-h3 text-ssc-navy mb-16 uppercase">
              TRUSTED DEALER RELATIONSHIPS
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-body font-bold text-ssc-navy tracking-tighter uppercase mb-2">
                  {brand.name}
                </div>
                <div className="text-micro text-ssc-gold-dark uppercase">
                  {brand.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Quality Section */}
      <section className="section-spacing bg-ssc-steel-light">
        <div className="container-wide">
          <div className="text-center mb-20">
            <h2 className="text-h2 text-ssc-navy uppercase">
              QUALITY. AVAILABILITY. <span className="text-ssc-gold-dark">SUPPLY.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: Shield, title: "QUALITY", desc: "Products aligned with construction and industrial requirements." },
              { icon: Zap, title: "AVAILABILITY", desc: "Focused on dependable product supply." },
              { icon: Truck, title: "SERVICE", desc: "Clear coordination from enquiry to delivery." }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-[12px] flex items-center justify-center mx-auto mb-8 shadow-sm border border-ssc-navy/5">
                  <item.icon className="w-8 h-8 text-ssc-gold-dark" />
                </div>
                <h3 className="text-h4 text-ssc-navy mb-4 uppercase">{item.title}</h3>
                <p className="text-body text-ssc-gray-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-ssc-navy relative overflow-hidden text-ssc-on-dark-primary text-center">
        <div className="absolute inset-0 z-0 opacity-10"
             style={{ 
               backgroundImage: 'radial-gradient(circle at center, rgba(212,175,55,0.1) 0%, transparent 70%)',
             }} 
        />
        <div className="container-wide relative z-10 flex flex-col items-center">
          <h2 className="text-h2 text-ssc-on-dark-primary mb-8 uppercase">
            REQUEST A <span className="text-ssc-gold">QUOTE.</span>
          </h2>
          <p className="text-ssc-on-dark-body text-body mb-12 max-w-[600px] mx-auto">
            Tell us your requirement and our team can help you with the appropriate steel product or decoiling solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" search={{ product: "" }} className="w-full sm:w-auto">
              <Button 
                className="w-full bg-ssc-gold text-ssc-navy hover:bg-ssc-gold/90"
              >
                GET A QUOTE <ArrowRight className="ml-3" size={20} />
              </Button>
            </Link>
            <Link to="/contact" search={{ product: "" }} className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="w-full border-ssc-on-dark-primary/20 hover:bg-white/5 text-ssc-on-dark-primary"
              >
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[700px] p-0 overflow-hidden bg-white rounded-[16px] border-none shadow-2xl">
          <DialogClose className="absolute right-6 top-6 z-50 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X size={20} />
          </DialogClose>
          
          <div className="flex flex-col">
            <div className="aspect-[16/9] w-full overflow-hidden relative bg-[#F8FAFC]">
              <img 
                src={selectedProduct?.image} 
                alt={selectedProduct?.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-ssc-gold text-[10px] font-body font-bold tracking-[0.3em] uppercase mb-2 block">
                  PRODUCT SPECIFICATIONS
                </span>
                <DialogTitle className="text-h3 text-ssc-on-dark-primary uppercase m-0">
                  {selectedProduct?.name}
                </DialogTitle>
              </div>
            </div>
            
            <div className="p-8 lg:p-10">
              <p className="text-body text-foreground/70 mb-8">
                {selectedProduct?.longDescription}
              </p>
              
              <div className="mb-10">
                <h4 className="text-micro text-ssc-navy uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-ssc-gold-dark" />
                  Technical Details
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct?.specs.map((spec) => (
                    <div key={spec} className="px-5 py-2.5 bg-ssc-steel-light border border-black/[0.03] rounded-full text-foreground text-small font-bold uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-ssc-gold-dark" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/contact" search={{ product: selectedProduct?.name || "" }} onClick={() => setSelectedProduct(null)}>
                <Button className="w-full h-16 bg-ssc-navy hover:bg-ssc-navy/90 text-ssc-on-dark-primary font-body font-bold uppercase text-lg tracking-[0.2em] rounded-xl shadow-xl shadow-ssc-navy/10 transition-all flex items-center justify-center gap-3">
                  REQUEST QUOTE <ArrowRight size={20} className="text-ssc-gold" />
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
