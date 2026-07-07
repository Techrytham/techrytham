"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceSpriteIcon from "@/components/ui/ServiceSpriteIcon";
import { services } from "@/data/siteData";
import Image from "next/image";
export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-heading sm:text-4xl">
            End-to-End Digital Solution for Your{" "}
            <span className="text-[#0000FF] bg-[var(--button-gradient)] bg-clip-text">
              Business
            </span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[var(--button-gradient)]" />
          <p className="mt-6 text-paragraph">
            At <span className="font-semibold text-primary">Techrytham</span>, we combine
            creativity, technology, and strategy to deliver digital solutions that help
            businesses grow faster and smarter.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card rounded-[18px] border border-[#ECECFF] bg-white p-7"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-12 w-12 object-contain"
              />
              <h3 className="mt-5 text-base font-semibold text-heading">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paragraph">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            LEARN MORE <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
