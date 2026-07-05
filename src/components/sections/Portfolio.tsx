"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { portfolioItems } from "@/data/siteData";

export default function Portfolio() {
  const [large, ...rest] = portfolioItems;

  return (
    <section id="portfolio" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Featured{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Projects</span> We&apos;re
            Proud Of
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-brand-gradient" />
          <p className="mt-6 text-muted">
            Here are some of the amazing projects we&apos;ve worked on, helping brands grow and
            succeed in the <span className="font-semibold text-brand">digital world.</span>
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glow-card overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card"
          >
            <div className="relative h-64 w-full">
              <Image src={large.image} alt={large.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-ink">{large.title}</h3>
              <p className="mt-2 text-sm text-muted">{large.description}</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-brand hover:underline">
                {large.category}
              </a>
            </div>
          </motion.div>

          <div className="grid grid-rows-2 gap-6">
            {rest.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glow-card flex overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card"
              >
                <div className="relative h-full w-2/5 min-h-[130px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="w-3/5 p-5">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.description}</p>
                  <a href="#" className="mt-2 inline-block text-xs font-semibold text-brand hover:underline">
                    {item.category}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#about" variant="outline" icon={<ArrowRight size={16} />}>
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
