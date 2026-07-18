"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { portfolioItems } from "@/data/siteData";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeItem = portfolioItems[activeIndex];
  const otherItems = portfolioItems.filter((_, idx) => idx !== activeIndex);

  return (
    <section id="portfolio" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Portfolio</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-heading sm:text-4xl">
            Featured{" "}
            <span className=" text-[#0000FF] bg-[var(--button-gradient)] bg-clip-text">
              Projects
            </span>{" "}
            We&apos;re Proud Of
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[var(--button-gradient)]" />
          <p className="mt-6 text-paragraph">
            Here are some of the amazing projects we&apos;ve worked on, helping brands grow and
            succeed in the{" "}
            <span className="font-semibold text-primary">digital world.</span>
          </p>
        </div>

        {/* Layout with 1 Large Card and 2 Small Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 items-stretch min-h-[500px]">
          {/* Large Card Column */}
          <div className="h-full">
            <motion.div
              layout
              layoutId={`card-${activeItem.title}`}
              key={activeItem.title}
              transition={{ type: "spring", stiffness: 65, damping: 20, mass: 1.1 }}
              className="glow-card overflow-hidden rounded-[18px] border border-[#ECECFF] bg-white h-full flex flex-col justify-between shadow-sm"
            >
              <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary/80 tracking-wider uppercase">
                  {activeItem.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-heading">{activeItem.title}</h3>
                <p className="mt-2 text-sm text-paragraph leading-relaxed">{activeItem.description}</p>
                <span className="mt-3 inline-block text-xs font-bold text-primary px-3 py-1 bg-brand/5 rounded-full uppercase tracking-wider">
                  {activeItem.tag}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Small Cards Column */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {otherItems.map((item) => (
              <motion.div
                layout
                layoutId={`card-${item.title}`}
                key={item.title}
                transition={{ type: "spring", stiffness: 65, damping: 20, mass: 1.1 }}
                className="glow-card flex overflow-hidden rounded-[18px] border border-[#ECECFF] bg-white h-full shadow-sm"
              >
                <div className="relative h-full w-2/5 min-h-[140px] overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </div>
                <div className="w-3/5 p-5 flex flex-col justify-center">
                  <span className="text-[10px] font-semibold text-primary/80 tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-heading">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-paragraph line-clamp-2">{item.description}</p>
                  <span className="mt-2 text-[10px] font-bold text-primary/70">
                    {item.tag}
                  </span>
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
