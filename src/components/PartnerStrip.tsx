import { ScrollReveal } from "./SharedLayout";

const partners = [
  { 
    name: "Vizag Steel", 
    brand: "VIZAG STEEL", 
    tagline: "RINL",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 opacity-50">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.24l-8 4-8-4V8.76l8-4 8 4v7.48z" />
        <path d="M12 7l-5 2.5v5l5 2.5 5-2.5v-5L12 7z" />
      </svg>
    )
  },
  { 
    name: "Jindal Panther", 
    brand: "JINDAL PANTHER", 
    tagline: "TMT REBARS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 opacity-50">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" />
      </svg>
    )
  },
  { 
    name: "Simhadri TMT", 
    brand: "SIMHADRI TMT", 
    tagline: "STEEL",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 opacity-50">
        <path d="M13 2v8h8V2h-8zm6 6h-4V4h4v4zm-6 4v10h8V12h-8zm6 8h-4v-6h4v6zM2 12h8v10H2V12zm2 8h4v-6H4v6zM2 2h8v8H2V2zm2 6h4V4H4v4z" />
      </svg>
    )
  },
];

export const PartnerStrip = () => {
  return (
    <div className="w-full bg-ssc-steel-light py-20 border-y border-ssc-navy/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[10px] font-body font-bold text-ssc-navy uppercase tracking-[0.4em] px-4 block">
              Trusted By Industrial Leaders
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-32">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="group flex items-center transition-all duration-700 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <div className="flex items-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100">
                  {partner.icon}
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-body leading-none text-ssc-navy tracking-tighter">
                      {partner.brand}
                    </span>
                    <span className="text-[8px] font-body font-bold text-ssc-gold-dark tracking-[0.2em] mt-1">
                      {partner.tagline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};