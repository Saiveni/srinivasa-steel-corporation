import { motion } from "framer-motion";
import { Award, ShieldCheck, TrendingUp, Gem } from "lucide-react";

interface CredibilityCardProps {
  title: string;
  description: string;
  icon: any;
  index: number;
}

const CredibilityCard = ({ title, description, icon: Icon, index }: CredibilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-ssc-steel-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 hover:border-ssc-gold/30 transition-all duration-300 shadow-premium-soft"
    >
      {/* Gold Accent Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute top-[-1px] right-[-1px] w-[1px] h-4 bg-ssc-gold/50" />
        <div className="absolute top-[-1px] right-[-1px] w-4 h-[1px] bg-ssc-gold/50" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-ssc-navy border border-ssc-gold/20 text-ssc-gold group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <div>
          <h4 className="text-white mb-2 group-hover:text-ssc-gold transition-colors duration-300">
            {title}
          </h4>
          <p className="text-small text-ssc-gray-muted line-clamp-3">
            {description}
          </p>
        </div>
      </div>
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export const TrustStatsBar = () => {
  const items = [
    {
      title: "30+ YEARS EXPERIENCE",
      description: "Established in 1994, building a legacy of excellence in the steel industry across generations.",
      icon: Award
    },
    {
      title: "TRUSTED STEEL SUPPLY",
      description: "Reliable distribution partner for India's leading steel brands, ensuring material integrity.",
      icon: ShieldCheck
    },
    {
      title: "REGIONAL PRESENCE",
      description: "Strategically located facilities in Vijayawada, Vizag, and Gannavaram to serve you better.",
      icon: TrendingUp
    },
    {
      title: "QUALITY & RELIABILITY",
      description: "Stringent quality benchmarks and commitment to timely delivery for every project scale.",
      icon: Gem
    }
  ];

  return (
    <section className="w-full bg-ssc-navy py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ 
             backgroundImage: 'radial-gradient(var(--ssc-gold) 0.5px, transparent 0.5px)',
             backgroundSize: '32px 32px'
           }} 
      />

      <div className="container-wide relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-micro mb-4"
          >
            CORPORATE EXCELLENCE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl"
          >
            OUR COMMITMENT TO <span className="text-ssc-gold">INDUSTRY STANDARDS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <CredibilityCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
