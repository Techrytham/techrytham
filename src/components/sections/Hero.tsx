"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { stats } from "@/data/siteData";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="hidden lg:block">
          <Image src="/assets/bg-1.png" alt="decor" width={900} height={900} className="hero-decor hero-decor-right" priority />
          <Image src="/assets/bg-2.jpg" alt="decor-2" width={640} height={640} className="hero-decor hero-decor-left" priority />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Eyebrow>INOVATION • IMPLEMENT • INSPIRE</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Empowering your{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Digital</span>{" "}
            journey.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted"
          >
            At <span className="font-semibold text-brand">Techrytham</span>, we build modern
            websites, scalable web applications, mobile apps, and custom{" "}
            <span className="font-semibold text-ink">software solutions</span> that help
            businesses grow faster and smarter.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#contact" icon={<ArrowRight size={16} />}>
              Book Call
            </Button>
            <Button href="#services" variant="outline">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap gap-8"
          >
            {stats.map((s, idx) => {
              return (
                <div key={s.label} className="flex items-center gap-3">
                  {idx === 0 && (
                    <div className="flex -space-x-3">
                      {/* Logo 1: Purple Galaxy KSD */}
                      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-[9px] font-extrabold text-[#b876f9] tracking-tighter shadow-sm shrink-0">
                        KSD
                      </div>
                      {/* Logo 2: Yellow Peak */}
                      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#FFD700] text-black shadow-sm shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                          <path d="M12 4L3 18H21L12 4ZM12 8.5L17.5 16H6.5L12 8.5Z" />
                        </svg>
                      </div>
                      {/* Logo 3: Green Safari */}
                      <div className="relative flex flex-col h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0e1611] text-[4.5px] leading-[6px] font-black text-[#22c55e] text-center tracking-tighter shadow-sm shrink-0">
                        <span>Travel to</span>
                        <span className="text-[5.5px]">SAFARI</span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E7EB] border border-[#D1D5DB] shadow-sm shrink-0 text-blue-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <rect x="7" y="7" width="10" height="10" rx="1.5" />
                        <path d="M10 7V4M14 7V4M10 17v3M14 17v3M17 10h3M17 14h3M4 10h3M4 14h3" />
                        <circle cx="10" cy="3.5" r="0.5" fill="currentColor" />
                        <circle cx="14" cy="3.5" r="0.5" fill="currentColor" />
                        <circle cx="10" cy="20.5" r="0.5" fill="currentColor" />
                        <circle cx="14" cy="20.5" r="0.5" fill="currentColor" />
                        <circle cx="20.5" cy="10" r="0.5" fill="currentColor" />
                        <circle cx="20.5" cy="14" r="0.5" fill="currentColor" />
                        <circle cx="3.5" cy="10" r="0.5" fill="currentColor" />
                        <circle cx="3.5" cy="14" r="0.5" fill="currentColor" />
                        <path d="M10 10h4v4h-4z" fill="currentColor" />
                      </svg>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E7EB] border border-[#D1D5DB] shadow-sm shrink-0 text-blue-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-600">
                        <circle cx="12" cy="7" r="3.5" stroke="currentColor" />
                        <circle cx="10.5" cy="6.5" r="0.5" fill="currentColor" />
                        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
                        <path d="M10.5 8.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeLinecap="round" />
                        
                        <path d="M7 12h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4.5l-1.5 1.5L10.5 18H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" fill="currentColor" className="text-blue-600" />
                        <circle cx="9.5" cy="15" r="0.6" fill="white" />
                        <circle cx="12.0" cy="15" r="0.6" fill="white" />
                        <circle cx="14.5" cy="15" r="0.6" fill="white" />
                      </svg>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-bold text-ink leading-tight">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-muted leading-tight mt-0.5">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
  
      </div>
    </section>
  );
}
