"use client";

import { motion } from "framer-motion";
import { Laptop, Phone, Megaphone, Palette, ArrowRight, CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";

const detailedServices = [
  {
    title: "Website Development",
    description: "Fast, responsive, and SEO-friendly websites built using modern front-end and back-end architectures. We deliver high-performing web apps designed to scale and attract organic search traffic.",
    icon: Laptop,
    benefits: [
      "Custom React & Next.js Development",
      "Headless CMS Integration (Sanity, Strapi)",
      "E-commerce Platforms (Shopify, Custom)",
      "High performance & Speed Optimization"
    ],
    bg: "from-blue-500/10 to-indigo-500/10",
    text: "text-blue-600"
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile application development for iOS and Android. We build responsive and secure mobile products that offer clean, modern UX workflows.",
    icon: Phone,
    benefits: [
      "Cross-platform Flutter & React Native",
      "Native Swift & Kotlin Development",
      "Seamless API & Third-party Integrations",
      "App Store & Google Play Deployment"
    ],
    bg: "from-purple-500/10 to-pink-500/10",
    text: "text-purple-600"
  },
  {
    title: "Digital Marketing",
    description: "Performance-driven growth marketing strategies to increase brand search visibility, generate leads, and accelerate commercial revenue streams.",
    icon: Megaphone,
    benefits: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Ad Management (PPC)",
      "Social Media & Content Strategy",
      "Conversion Rate Optimization (CRO)"
    ],
    bg: "from-orange-500/10 to-red-500/10",
    text: "text-orange-600"
  },
  {
    title: "Graphics Designing",
    description: "Beautiful, interactive, and user-centered UI/UX web designs that translate complex business concepts into clean and engaging visual interfaces.",
    icon: Palette,
    benefits: [
      "User Interface Design (UI)",
      "User Experience Wireframing (UX)",
      "Corporate Branding & Logo Assets",
      "Interactive Prototyping in Figma"
    ],
    bg: "from-green-500/10 to-emerald-500/10",
    text: "text-green-600"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pb-20">
        
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-backgroundLight py-14 lg:py-24 border-b border-[#ECECFF]">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_70%_120%,rgba(59,67,255,0.08)_0%,transparent_50%)]" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-paragraph hover:text-brand transition-colors uppercase tracking-wider"
            >
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <div className="mt-8 max-w-3xl">
              <Eyebrow>OUR SERVICES</Eyebrow>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl tracking-tight">
                Premium Digital Solutions <br />
                Tailored for Your <span className="bg-brand-gradient bg-clip-text text-transparent">Growth</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-paragraph max-w-2xl">
                We combine industry-leading engineering, premium user experiences, and performance marketing strategies to build future-ready products.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Section List */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-24">
          {detailedServices.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image/Mockup Placeholder Column */}
                <div className={`relative flex justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className={`relative h-[300px] w-full max-w-[450px] sm:h-[350px] rounded-3xl bg-gradient-to-br ${service.bg} border border-[#ECECFF] flex items-center justify-center p-8 shadow-sm`}>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] rounded-3xl pointer-events-none" />
                    <div className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white border border-[#ECECFF] ${service.text} shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                      <Icon size={44} strokeWidth={1.8} />
                    </div>
                    {/* Decorative Blobs */}
                    <div className="absolute top-8 right-8 h-12 w-12 rounded-full border border-dashed border-[#B8BEFF] opacity-60" />
                    <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full border border-dashed border-[#B8BEFF] opacity-60" />
                  </div>
                </div>

                {/* Content Details Column */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 border border-brand/10 ${service.text} mb-6`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-paragraph">
                    {service.description}
                  </p>
                  
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5 text-xs sm:text-sm text-heading/85 font-medium">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                    >
                      Inquire About {service.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-5xl px-6">
          <div className="rounded-[24px] border border-[#ECECFF] bg-[linear-gradient(135deg,#EEF0FF_0%,#F8F9FF_100%)] p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight">
              Ready to Launch Your Project?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-paragraph max-w-xl mx-auto">
              Get in touch with our team of specialists today to discuss your project requirements and receive a customized quote.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-light px-8 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5"
              >
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
