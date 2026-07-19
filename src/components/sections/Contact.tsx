"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    const whatsappNumber = "916260324715";
    const text =
      `*New Inquiry from TechRytham Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone || "Not provided"}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📌 *Subject:* ${formData.subject}\n\n` +
      `💬 *Message:*\n${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

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
                    {item.title === "Call us" ? (
                      <a
                        href="https://wa.me/916260324715"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-3d-wrap shrink-0 block"
                        title="Chat on WhatsApp"
                      >
                        <div className="icon-3d flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/5 border border-brand/10 text-primary hover:bg-brand/10 hover:border-brand/30 transition-all">
                          <IconComponent size={20} strokeWidth={2} />
                        </div>
                      </a>
                    ) : (
                      <div className="icon-3d-wrap shrink-0">
                        <div className="icon-3d flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/5 border border-brand/10 text-primary">
                          <IconComponent size={20} strokeWidth={2} />
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-heading">{item.title}</p>
                      {item.title === "Call us" ? (
                        <p className="text-sm text-paragraph">
                          <a
                            href="https://wa.me/916260324715"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors font-medium underline decoration-brand/20 decoration-2 underline-offset-2"
                          >
                            +91-6260324715
                          </a>
                          {" / "}
                          <a
                            href="https://wa.me/919039135773"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors font-medium underline decoration-brand/20 decoration-2 underline-offset-2"
                          >
                            +91-9039135773
                          </a>
                        </p>
                      ) : (
                        <p className="text-sm text-paragraph">{item.value}</p>
                      )}
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
            onSubmit={handleSubmit}
            className="glow-card rounded-[18px] border border-[#ECECFF] bg-white p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="mt-5 w-full rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject *"
              required
              className="mt-5 w-full rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              required
              rows={5}
              className="mt-5 w-full resize-none rounded-xl border border-border bg-backgroundLight px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />

            {error && (
              <div className="mt-5 text-sm font-semibold text-red-600 bg-red-50 border border-red-200 px-4 py-2.5 rounded-xl text-center">
                {error}
              </div>
            )}

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
