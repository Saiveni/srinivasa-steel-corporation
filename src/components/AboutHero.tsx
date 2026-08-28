import React from 'react';
import { motion, Variants } from 'framer-motion';

const categories = ["STEEL", "TMT", "SUPPLY", "DECOILING"];

export const AboutHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const headlineVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.25 + (i * 0.12),
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const visualVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.04,
      clipPath: 'inset(0 100% 0 0)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      {/* SECTION 1 — PREMIUM OPENING */}
      <section className="relative bg-ssc-navy flex items-center overflow-hidden pt-12 lg:pt-24 pb-12 lg:pb-24">
        {/* Foundation Background — Engineering Grid + Gold Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--ssc-on-dark-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--ssc-on-dark-primary) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
          {/* Warm metallic glow */}
          <div className="absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-ssc-gold/[0.05] blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[300px] rounded-full bg-ssc-gold/[0.03] blur-[100px]" />
          {/* Brushed steel texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
          {/* Technical edge lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-on-dark-primary/10 to-transparent" />
        </div>

        <div className="container-wide relative z-10 w-full mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          >

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[45%] text-left">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5 lg:mb-7">
                <div className="w-10 h-[1px] bg-ssc-gold" />
                <span className="text-ssc-gold text-micro uppercase">
                  ABOUT SRINIVASA STEEL CORPORATION
                </span>
              </motion.div>

              <div className="mb-7 lg:mb-10 overflow-hidden">
                <motion.h1
                  custom={0}
                  variants={headlineVariants}
                  className="text-h1 text-ssc-on-dark-primary mb-0 uppercase max-w-[650px]"
                >
                  BUILD ON STEEL. <br />
                  <span className="text-ssc-gold">BUILT ON TRUST.</span>
                </motion.h1>
              </div>

              {/* Category Strip — Technical Specification Row */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 mb-7 lg:mb-10 pb-5 lg:pb-8 border-b border-ssc-on-dark-primary/10"
              >
                {categories.map((cat, i) => (
                  <div key={cat} className="flex items-center gap-4 lg:gap-6">
                    <span className="text-ssc-gold/80 text-micro uppercase tracking-[0.12em] text-[12px] lg:text-[13px]">
                      {cat}
                    </span>
                    {i < categories.length - 1 && (
                      <span className="w-0.5 h-0.5 rounded-full bg-ssc-gold/40" />
                    )}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-[560px]">
                <p className="text-ssc-on-dark-body text-body-large mb-10 lg:mb-16">
                  An established steel supplier serving construction and industrial requirements with over four decades of engineering excellence — from TMT reinforcement to precision decoiling.
                </p>

                <div className="flex items-center gap-6 lg:gap-12 pb-8">
                  <div className="flex flex-col">
                    <span className="text-[28px] lg:text-[36px] font-bold text-ssc-on-dark-primary leading-none">40+</span>
                    <span className="text-ssc-on-dark-secondary text-[11px] lg:text-[12px] uppercase tracking-wider mt-2 font-medium">Years Experience</span>
                  </div>
                  <div className="w-[1px] h-12 bg-ssc-on-dark-primary/10" />
                  <div className="flex flex-col">
                    <span className="text-[28px] lg:text-[36px] font-bold text-ssc-on-dark-primary leading-none">3</span>
                    <span className="text-ssc-on-dark-secondary text-[11px] lg:text-[12px] uppercase tracking-wider mt-2 font-medium">Regional Yards</span>
                  </div>
                  <div className="w-[1px] h-12 bg-ssc-on-dark-primary/10" />
                  <div className="flex flex-col">
                    <span className="text-[28px] lg:text-[36px] font-bold text-ssc-gold leading-none">MoU</span>
                    <span className="text-ssc-gold text-[11px] lg:text-[12px] uppercase tracking-wider mt-2 font-medium">Dealer Status</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="w-full lg:w-[55%] relative">
              <motion.div
                variants={visualVariants}
                className="relative aspect-[3/2] lg:aspect-[1.2/1] rounded-[12px] lg:rounded-[14px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-ssc-on-dark-primary/10"
              >
                <img
                  src="/about/about-hero-rods.jpg"
                  alt="Srinivasa Steel Corporation industrial steel warehouse with stacked TMT reinforcement bars"
                  className="w-full h-full object-cover contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/70 via-transparent to-ssc-navy/20 z-10" />

                {/* Machined EST Badge */}
                <div className="absolute top-5 left-5 z-30 flex items-center gap-3 bg-ssc-navy/80 backdrop-blur-md border border-ssc-gold/30 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ssc-gold animate-pulse" />
                  <span className="text-ssc-gold text-micro">
                    EST. 1994
                  </span>
                </div>

                {/* Spec Chip */}
                <div className="absolute bottom-5 right-5 z-30 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-ssc-gold" />
                  <span className="text-ssc-gold text-micro">
                    SYS-VERIFIED-SPEC
                  </span>
                </div>
              </motion.div>

              {/* Floating depth shadow plate */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[24px] border border-ssc-gold/10 -z-10 hidden lg:block" />
            </div>
          </motion.div>
        </div>

        {/* Curve Transition into Company Story */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] lg:h-[60px] fill-white">
            <path d="M0,120 C300,100 900,100 1200,120 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — COMPANY STORY */}
      <section id="company-story" className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--ssc-navy) 1px, transparent 1px), linear-gradient(to bottom, var(--ssc-navy) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container-wide relative z-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[45%]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-ssc-gold-dark" />
                <span className="text-micro text-ssc-gold-dark uppercase">
                  COMPANY STORY
                </span>
              </div>
              <h2 className="text-h2 text-ssc-navy mb-8 uppercase">
                A LEGACY BUILT ON <span className="text-ssc-gold-dark">PRECISION.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[55%]"
            >
              <div className="max-w-[560px]">
                <p className="text-body text-ssc-gray-body mb-8 lg:mb-12">
                  Since our inception, Srinivasa Steel Corporation has been at the forefront of the steel industry, bridging the gap between quality manufacturing and reliable construction supply. Our journey is defined by a commitment to excellence, technological adoption in decoiling, and fostering long-term partnerships with India's leading steel producers.
                </p>

                <div className="grid grid-cols-2 gap-6 lg:gap-10 pt-8 lg:pt-10 border-t border-ssc-navy/10">
                  <div>
                    <span className="text-h3 text-ssc-navy font-bold">100k+</span>
                    <span className="text-ssc-navy/70 text-[11px] lg:text-[12px] uppercase tracking-wider block mt-2 font-medium">Tons Delivered</span>
                  </div>
                  <div>
                    <span className="text-h3 text-ssc-navy font-bold">500+</span>
                    <span className="text-ssc-navy/70 text-[11px] lg:text-[12px] uppercase tracking-wider block mt-2 font-medium">Major Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
