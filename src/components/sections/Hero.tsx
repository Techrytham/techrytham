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
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-white bg-brand-gradient"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{s.value}</p>
                  <p className="text-xs text-muted">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
  
      </div>
    </section>
  );
}
