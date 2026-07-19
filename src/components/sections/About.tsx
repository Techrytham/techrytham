"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import AssetIcon from "@/components/ui/AssetIcon";
import { aboutCards } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-heading sm:text-4xl">
              We&apos;re More Than Just A{" "}
              <span className=" text-[#0000FF] bg-[var(--button-gradient)] bg-clip-text">
                Digital Agency
              </span>
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-[var(--button-gradient)]" />
            <p className="mt-6 text-paragraph">
              Techrytham is a team of passionate developers, designers and strategists who
              believe in building digital experiences that make an impact. We combine
              creativity, technology and strategy to deliver solutions that drive results.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button href="#contact">Learn More About Us</Button>
              <a
                href="https://youtube.com/@techrytham?si=8KV6UAIizMiAlciO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-heading hover:text-primary"
              >
                <PlayCircle size={22} className="text-primary" /> Watch Our Story
              </a>
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
                className="glow-card rounded-[18px] border border-[#ECECFF] bg-white p-6"
              >
                <AssetIcon
                  src={card.iconSrc}
                  alt={card.title}
                  size={card.title === "Our Mission" || card.title === "Our Vision" ? "2xl" : "lg"}
                />
                <h3 className="mt-4 text-sm font-semibold text-heading">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-paragraph">{card.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs font-semibold text-primary hover:underline"
                >
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
