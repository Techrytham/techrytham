"use client";

import { motion } from "framer-motion";
import AssetIcon from "@/components/ui/AssetIcon";
import { whyChooseUs } from "@/data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="bg-backgroundLight py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Why Choose{" "}
            <span className=" text-[#0000FF] bg-[var(--button-gradient)] bg-clip-text text-transparent">
              Techrytham
            </span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[var(--button-gradient)]" />
          <p className="mt-6 text-paragraph">
            We combine expertise, innovation, and dedication to deliver high-quality solutions
            that help your{" "}
            <span className="font-semibold text-primary">business</span> grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className="glow-card rounded-[18px] border border-[#ECECFF] bg-white p-7"
            >
              <AssetIcon src={item.iconSrc} alt={item.title} size="lg" />
              <h3 className="mt-5 text-base font-semibold text-heading">{item.title}</h3>
              <span className="mt-2 block h-0.5 w-8 rounded-full bg-[var(--button-gradient)]" />
              <p className="mt-3 text-sm leading-relaxed text-paragraph">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
