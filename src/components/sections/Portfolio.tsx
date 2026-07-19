"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { portfolioItems } from "@/data/siteData";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // Increased duration to 7 seconds for smoother, relaxed reading
    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const setSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "30%" : "-30%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "30%" : "-30%",
      opacity: 0,
    }),
  };

  const activeItem = portfolioItems[activeIndex];

  return (
    <section id="portfolio" className="bg-white pb-20 overflow-hidden">
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

        {/* Slider Container */}
        <div className="relative mt-14 mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[24px] border border-[#ECECFF] bg-[#FBFBFF] shadow-sm min-h-[460px] md:min-h-[400px] flex items-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                  opacity: { duration: 0.4 },
                }}
                className="w-full grid md:grid-cols-2 gap-6 lg:gap-10 p-6 sm:p-8 items-center"
              >
                {/* Image Section */}
                <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden rounded-2xl shadow-sm border border-black/5 bg-white">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center text-left">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase bg-brand/5 self-start px-2.5 py-1 rounded-full">
                    {activeItem.category}
                  </span>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-heading">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-paragraph">
                    {activeItem.description}
                  </p>
                  
                  <div className="mt-5">
                    <span className="inline-block text-xs font-bold text-primary px-3 py-1 bg-brand/5 border border-brand/10 rounded-full uppercase tracking-wider">
                      {activeItem.tag}
                    </span>
                  </div>

                  <div className="mt-7">
                    <Button href="#contact" icon={<ArrowRight size={16} />}>
                      Discuss Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 pointer-events-none hidden sm:flex">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#ECECFF] text-heading hover:bg-primary hover:text-white transition-all shadow-md -translate-x-1/2 hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#ECECFF] text-heading hover:bg-primary hover:text-white transition-all shadow-md translate-x-1/2 hover:scale-110 active:scale-95"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Mobile controls & Dots indicators */}
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {portfolioItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-primary" : "w-2.5 bg-black/10 hover:bg-black/20"
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex gap-3 sm:hidden mt-2">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#ECECFF] text-heading hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#ECECFF] text-heading hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
