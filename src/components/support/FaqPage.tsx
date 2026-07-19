"use client";

import { useState } from "react";
import { ChevronDown, HandHeart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import HelpIllustration from "@/components/support/HelpIllustration";

const faqs = [
  ["What services does Techrytham provide?", "Techrytham offers Website Development, Mobile App Development, UI/UX Design, Digital Marketing, SEO Optimization, Branding, AI Solutions, Software Development, and IT Consulting."],
  ["How long does it take to complete a project?", "Project timelines depend on the scope and requirements. After understanding your goals, we share a clear delivery plan and keep you updated throughout."],
  ["Do you provide support after project delivery?", "Yes. We offer ongoing maintenance and support so your product stays secure, updated, and ready to grow with your business."],
  ["How do I get started?", "Send us your requirement through the contact form or reach out directly. Our team will schedule a discovery conversation and outline the next steps."],
  ["Can I request custom features?", "Absolutely. Every engagement is tailored around your business needs, audience, and technical requirements."],
  ["What technologies do you use?", "We use modern, reliable technologies including React, Next.js, Node.js, Python, Flutter, MongoDB, Firebase, and AWS."],
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return <>
    <Navbar />
    <main className="overflow-hidden bg-white pt-[72px]">
      <section className="mx-auto grid max-w-7xl items-center gap-4 px-6 pb-12 pt-14 sm:px-10 lg:grid-cols-[1.1fr_.9fr] lg:pb-16 lg:pt-16">
        <div className="max-w-[650px]"><Eyebrow>FAQ</Eyebrow><h1 className="mt-6 text-[42px] font-bold leading-[1.07] tracking-[-0.04em] text-black sm:text-5xl lg:text-[56px]">Frequently Asked<br /><span className="text-primary">Questions</span></h1><p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#272730] sm:text-lg">Have questions? We&apos;ve answered the most common queries about our services, process, pricing, and support.</p></div>
        <HelpIllustration kind="faq" />
      </section>
     <section className="px-6 pb-10 sm:px-10 lg:pb-16" aria-label="Frequently asked questions">
  <div className="mx-auto flex max-w-[1000px] flex-col gap-5 sm:gap-6">
    {faqs.map(([question, answer], index) => {
      const expanded = open === index;
      const id = `faq-panel-${index}`;
      return (
        <article
          key={question}
          className="rounded-[20px] border border-[#ECECFF] bg-white shadow-[0_8px_17px_rgba(20,20,40,0.09)]"
        >
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={id}
            onClick={() => setOpen(expanded ? null : index)}
            className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-12"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center ">
              <img
                src="/assets/icon.png"
                alt=""
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="flex-1 text-lg font-semibold text-heading sm:text-xl">
              {question}
            </span>
            <ChevronDown
              className={`shrink-0 text-primary transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
          {expanded && (
            <div
              id={id}
              className="px-6 pb-6 pl-[92px] pr-12 text-[15px] leading-relaxed text-[#4C4C57] sm:text-[17px]"
            >
              {answer}
            </div>
          )}
        </article>
      );
    })}
  </div>
</section>
    </main><Footer />
  </>;
}
