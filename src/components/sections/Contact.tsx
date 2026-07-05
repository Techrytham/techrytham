"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Send } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";

const infoItems = [
  {
    icon: Mail,
    title: "Email",
    value: "Techrytham.com@gmail.com",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "+91-9685933664 / +91-9039135773",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nagpur, Maharashtra (M.H) India",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Contact Us</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
              Let&apos;s Start Your Next Big{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">Project</span>
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-brand-gradient" />
            <p className="mt-6 max-w-md text-muted">
              Have a project in mind or want to know more about how we can help your business?
              Get in touch with us today!
            </p>

            <div className="mt-8 space-y-6">
              {infoItems.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="icon-3d-wrap">
                    <div className="icon-3d flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-3d">
                      <item.icon size={18} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="text-sm text-muted">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4">
                <div className="icon-3d-wrap">
                  <div className="icon-3d flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-3d">
                    <Instagram size={18} />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Follow us</p>
                  <div className="flex gap-3 text-sm text-muted">
                    <a href="#" className="hover:text-brand">@techrytham</a>
                    <a href="#" className="hover:text-brand">techrythamX</a>
                    <a href="#" className="hover:text-brand">techrytham</a>
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
            className="rounded-3xl border border-black/5 bg-white p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-5 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="mt-5 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="mt-5 w-full resize-none rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
            />
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(59,47,224,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
