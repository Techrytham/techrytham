"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const visible = [testimonials[index % testimonials.length], testimonials[(index + 1) % testimonials.length]];

  const next = () => setIndex((v) => (v + 1) % testimonials.length);
  const prev = () => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-backgroundLight py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-heading sm:text-4xl">
              What Our{" "}
              <span className="bg-[var(--button-gradient)] bg-clip-text">Clients</span>
              <br /> Say About Us
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-[var(--button-gradient)]" />
            <p className="mt-6 text-paragraph">
              We take pride in building long-term relationships by delivering exceptional
              results and ensuring client satisfaction.
            </p>
            <div className="mt-7">
              <Button href="#contact" variant="outline">
                View All Reviews
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-6 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visible.map((t) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[18px] border border-[#ECECFF] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_30px_rgba(59,67,255,0.15)]"
                  >
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-4 text-sm italic leading-relaxed text-heading/80">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-heading">{t.name}</p>
                        <p className="text-xs text-paragraph">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
