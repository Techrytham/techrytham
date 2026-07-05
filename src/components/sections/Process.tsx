"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { processSteps } from "@/data/siteData";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-gradient-soft p-8 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-3d animate-floatSlow">
              <Rocket size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">Ready to Grow Your Business?</h3>
              <p className="text-sm text-muted">
                Partner with <span className="font-semibold text-brand">Techrytham</span> and
                take your business to the next level with our expert solutions.
              </p>
            </div>
          </div>
          <Button href="#contact" icon={<ArrowRight size={16} />}>
            Let&apos;s Work Together
          </Button>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
            Our Process. Your{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Success</span>.
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-brand-gradient" />
          <p className="mt-6 text-muted">
            We follow a proven process to deliver high-quality digital solutions that are
            aligned with your goals and built to scale.
          </p>
        </div>

        {/* Step number rail */}
        <div className="mt-14 hidden items-center justify-between lg:flex">
          {processSteps.map((step, i) => (
            <div key={step.number} className="flex flex-1 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-bold text-brand"
              >
                {step.number}
              </motion.div>
              {i < processSteps.length - 1 && (
                <div className="mx-2 h-px flex-1 bg-brand/30" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card rounded-2xl border border-black/5 bg-white p-6 text-center shadow-card"
            >
              <div className="icon-3d-wrap mx-auto w-fit">
                <div className="icon-3d relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient-soft overflow-hidden">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{step.title}</h3>
              <span className="mx-auto mt-2 block h-0.5 w-6 rounded-full bg-brand-gradient" />
              <p className="mt-3 text-xs leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Eyebrow>Portfolio</Eyebrow>
        </div>
      </div>
    </section>
  );
}
