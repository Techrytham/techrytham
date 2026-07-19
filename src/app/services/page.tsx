"use client";

import { motion } from "framer-motion";
import { Laptop, Phone, Megaphone, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pb-20 pt-[72px]">

        {/* Hero Section — matches blog hero */}
        <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-[#ECECFF]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Breadcrumb — matches blog detail page style */}
            <nav className="flex items-center gap-2 text-xs font-semibold tracking-wide text-paragraph uppercase">
              <Link href="/" className="hover:text-brand transition-colors">Home</Link>
              <span className="text-paragraph/40">/</span>
              <span className="text-brand">Services</span>
            </nav>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              {/* Left Text */}
              <div>
                <Eyebrow>OUR SERVICES</Eyebrow>
                <h1 className="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Premium Digital Solutions <br className="hidden sm:inline" />
                  Tailored for Your{" "}
                  <span className="bg-brand-gradient bg-clip-text text-transparent">Growth</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-paragraph max-w-2xl">
                  We combine industry-leading engineering, premium user experiences, and performance
                  marketing strategies to build future-ready products.
                </p>
              </div>

              {/* Right — Service Illustration (pure CSS/SVG, no images) */}
              <div className="relative flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                  }}
                  className="relative w-full max-w-[400px]"
                >
                  {/* Main card — browser/dashboard mockup */}
                  <div className="rounded-[24px] border border-[#ECECFF] bg-white shadow-[0_12px_40px_rgba(59,67,255,0.08)] overflow-hidden">
                    
                    {/* Browser top bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#F8F9FF] border-b border-[#ECECFF]">
                      <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                      <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                      <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                      <div className="ml-3 flex-1 h-5 rounded-full bg-[#ECECFF] flex items-center px-3">
                        <span className="text-[9px] text-paragraph/50 font-medium">techrytham.com/services</span>
                      </div>
                    </div>

                    {/* Dashboard content */}
                    <div className="p-5 space-y-4">

                      {/* Top stats row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "Projects", value: "120+", color: "bg-brand/10 text-brand" },
                          { label: "Clients", value: "80+",  color: "bg-[#E8FFF3] text-emerald-600" },
                          { label: "Services", value: "4",   color: "bg-[#FFF4E5] text-orange-500" },
                        ].map((stat) => (
                          <div key={stat.label} className={`rounded-2xl px-3 py-3 text-center ${stat.color}`}>
                            <p className="text-base font-extrabold leading-none">{stat.value}</p>
                            <p className="text-[9px] font-semibold mt-1 opacity-70">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Service rows */}
                      {[
                        { Icon: Laptop,   label: "Website Development", pct: 88 },
                        { Icon: Phone,    label: "App Development",     pct: 75 },
                        { Icon: Megaphone,label: "Digital Marketing",   pct: 82 },
                        { Icon: Palette,  label: "Graphics Designing",  pct: 70 },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/5 border border-brand/10 text-brand">
                            <item.Icon size={14} strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] font-semibold text-heading truncate">{item.label}</span>
                              <span className="text-[10px] font-bold text-brand ml-2">{item.pct}%</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-[#ECECFF] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.pct}%` }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                className="h-full rounded-full bg-brand-gradient"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* Floating badge — client satisfaction */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl bg-white border border-[#ECECFF] px-4 py-2.5 shadow-[0_8px_24px_rgba(59,67,255,0.10)]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 size={15} />
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold text-heading leading-none">100% Satisfaction</p>
                      <p className="text-[9px] text-paragraph mt-0.5">Trusted by 80+ clients</p>
                    </div>
                  </motion.div>

                  {/* Floating badge top-right — live indicator */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-4 -right-4 flex items-center gap-1.5 rounded-2xl bg-white border border-[#ECECFF] px-3 py-2 shadow-[0_8px_24px_rgba(59,67,255,0.08)]"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-bold text-heading">Live Projects</span>
                  </motion.div>

                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Section List */}
        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14 space-y-14">
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
                className="grid gap-12 lg:grid-cols-2 lg:items-center"
              >
                {/* Visual Placeholder Column */}
                <div className={`relative flex justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative h-[300px] w-full max-w-[450px] sm:h-[360px] rounded-[24px] bg-[#F8F9FF] border border-[#ECECFF] flex items-center justify-center p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    {/* Decorative circles */}
                    <div className="absolute top-8 right-8 h-12 w-12 rounded-full border border-dashed border-[#ECECFF]" />
                    <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full border border-dashed border-[#ECECFF]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-brand/5 border border-brand/10" />
                    {/* Icon */}
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[20px] bg-white border border-[#ECECFF] text-brand shadow-[0_8px_24px_rgba(59,67,255,0.10)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(59,67,255,0.15)]">
                      <Icon size={44} strokeWidth={1.6} />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  {/* Small icon badge — matches blog card category badge style */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 border border-brand/10 text-brand mb-6">
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
                      <li
                        key={benefit}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-heading/85 font-medium"
                      >
                        <CheckCircle2 size={16} className="text-brand shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-light transition-colors"
                    >
                      Inquire About {service.title}{" "}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Closing CTA — matches blog's card style */}
        <section className="mx-auto max-w-5xl px-6">
          <div className="rounded-[24px] border border-[#ECECFF] bg-[#F8F9FF] p-8 sm:p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <span className="eyebrow bg-[#ECECFF] text-brand">GET STARTED</span>
            <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-heading tracking-tight">
              Ready to Launch Your Project?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-paragraph max-w-xl mx-auto">
              Get in touch with our team of specialists today to discuss your project requirements
              and receive a customized quote.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-light px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(59,67,255,0.25)] transition-all hover:-translate-y-0.5"
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
