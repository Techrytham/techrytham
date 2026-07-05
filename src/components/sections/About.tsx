"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import IconBadge3D from "@/components/ui/IconBadge3D";
import { aboutCards } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
              We&apos;re More Than Just A{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Digital Agency
              </span>
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-brand-gradient" />
            <p className="mt-6 text-muted">
              Techrytham is a team of passionate developers, designers and strategists who
              believe in building digital experiences that make an impact. We combine
              creativity, technology and strategy to deliver solutions that drive results.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button href="#contact">Learn More About Us</Button>
              <button className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand">
                <PlayCircle size={22} className="text-brand" /> Watch Our Story
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glow-card rounded-2xl border border-black/5 bg-white p-6 shadow-card"
              >
                <IconBadge3D icon={card.icon} gradient={card.gradient} size="sm" />
                <h3 className="mt-4 text-sm font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{card.description}</p>
                <a href="#" className="mt-3 inline-block text-xs font-semibold text-brand hover:underline">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
