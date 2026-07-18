"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Share2 } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { contactInfo, socialLinks } from "@/data/siteData";

const contactIconMap: Record<string, any> = {
  Email: Mail,
  "Call us": Phone,
  Location: MapPin,
};

const socialIconMap: Record<string, any> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  Twitter: Twitter,
};

export default function Contact() {
  return (
    <section id="contact" className="bg-backgroundLight py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Contact Us</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-heading sm:text-4xl">
              Let&apos;s Start Your Next Big{" "}
              <span className="bg-[var(--button-gradient)] bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-[var(--button-gradient)]" />
            <p className="mt-6 max-w-md text-paragraph">
              Have a project in mind or want to know more about how we can help your business?
              Get in touch with us today!
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => {
                const IconComponent = contactIconMap[item.title] || Mail;
                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="icon-3d-wrap shrink-0">
                      <div className="icon-3d flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/5 border border-brand/10 text-primary">
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading">{item.title}</p>
                      <p className="text-sm text-paragraph">{item.value}</p>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center gap-4">
                <div className="icon-3d-wrap shrink-0">
                  <div className="icon-3d flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/5 border border-brand/10 text-primary">
                    <Share2 size={20} strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">Follow us</p>
                  <div className="mt-2.5 flex gap-3">
                    {socialLinks.map((social) => {
                      const SocialIcon = socialIconMap[social.label] || Share2;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="icon-3d-wrap"
                        >
                          <div className="icon-3d flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-[#ECECFF] text-[#4C4C57] transition-all hover:bg-brand hover:border-brand hover:text-white hover:shadow-sm">
                            <SocialIcon size={15} strokeWidth={2} />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="glow-card rounded-[18px] border border-[#ECECFF] bg-white p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-5 w-full rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="mt-5 w-full rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="mt-5 w-full resize-none rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#8E8EDC_0%,#0000FF_100%)] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(59,67,255,0.55)] transition-transform hover:-translate-y-0.5"
              >
                Send Message <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
