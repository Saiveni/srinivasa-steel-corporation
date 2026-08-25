import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const ScrollReveal = ({ 
  children, 
  className, 
  delay = 0,
  direction = "up"
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionContainer = ({ 
  children, 
  className,
  id,
  accent = false
}: { 
  children: ReactNode; 
  className?: string;
  id?: string;
  accent?: boolean;
}) => (
  <section 
    id={id} 
    className={cn(
      "py-24 px-6",
      accent ? "bg-ssc-steel-dark" : "bg-transparent",
      className
    )}
  >
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

export const AnimatedCard = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={cn(
      "bg-white rounded-[12px] p-8 shadow-premium hover:shadow-premium-hover transition-shadow border border-white/20",
      className
    )}
  >
    {children}
  </motion.div>
);
