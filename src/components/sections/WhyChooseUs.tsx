"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import IconBadge3D from "@/components/ui/IconBadge3D";
import { whyChooseUs } from "@/data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Why Choose{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Techrytham</span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-brand-gradient" />
          <p className="mt-6 text-muted">
            We combine expertise, innovation, and dedication to deliver high-quality solutions
            that help your <span className="font-semibold text-brand">business</span> grow.
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
              className="glow-card rounded-2xl border border-black/5 bg-white p-7 shadow-card"
            >
              <IconBadge3D icon={item.icon} gradient={item.gradient} />
              <h3 className="mt-5 flex items-center gap-2 text-base font-semibold text-ink">
                <CheckCircle size={16} className="text-brand" /> {item.title}
              </h3>
              <span className="mt-2 block h-0.5 w-8 rounded-full bg-brand-gradient" />
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
