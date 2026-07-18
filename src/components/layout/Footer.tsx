import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Share2 } from "lucide-react";
import {
  quickLinks,
  footerServices,
  supportLinks,
  socialLinks,
  contactInfo,
} from "@/data/siteData";

const footerSocialOrder = ["Instagram", "LinkedIn", "Facebook", "Twitter"];
const supportHrefs: Record<string, string> = {
  FAQ: "/faq",
  "Privacy Policy": "/privacy-policy",
  "Terms & Conditions": "/terms-and-conditions",
  "Refund Policy": "/refund-policy",
  "Support Center": "/support-center",
};

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

export default function Footer() {
  const orderedSocial = footerSocialOrder
    .map((label) => socialLinks.find((s) => s.label === label))
    .filter(Boolean) as typeof socialLinks;

  return (
    <footer className="bg-backgroundLight px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[18px] border border-[#ECECFF] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <div className="p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-0">
              {/* Brand */}
              <div className="lg:border-r lg:border-border lg:pr-8">
                <Link href="/">
                  <Logo />
                </Link>
                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-paragraph">
                  We build digital solutions that help businesses grow, engage their audience
                  and achieve long-term success.
                </p>
                <div className="mt-5 flex gap-2.5">
                  {orderedSocial.map((social) => {
                    const SocialIcon = socialIconMap[social.label] || Share2;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/5 border border-brand/10 text-primary transition-all hover:bg-brand hover:border-brand hover:text-white hover:shadow-sm"
                      >
                        <SocialIcon size={16} strokeWidth={2} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:px-8">
                <h4 className="mb-4 text-sm font-bold text-heading">Quick Links</h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-paragraph transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="lg:px-8">
                <h4 className="mb-4 text-sm font-bold text-heading">Services</h4>
                <ul className="space-y-2.5">
                  {footerServices.map((s) => (
                    <li key={s}>
                      <Link
                        href="/#services"
                        className="text-sm text-paragraph transition-colors hover:text-primary"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="lg:border-r lg:border-border lg:px-8">
                <h4 className="mb-4 text-sm font-bold text-heading">Support</h4>
                <ul className="space-y-2.5">
                  {supportLinks.map((s) => (
                    <li key={s}>
                      <Link
                        href={supportHrefs[s]}
                        className="text-sm text-paragraph transition-colors hover:text-primary"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="lg:pl-8">
                <h4 className="mb-4 text-sm font-bold text-heading">Contact info</h4>
                <ul className="space-y-4">
                  {contactInfo.map((item) => {
                    const IconComponent = contactIconMap[item.title] || Mail;
                    return (
                      <li key={item.title} className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/5 border border-brand/10 text-primary">
                          <IconComponent size={15} strokeWidth={2} />
                        </div>
                        <span className="text-sm leading-relaxed text-paragraph">{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-paragraph sm:flex-row">
              <p>© 2025 Techrytham. All rights reserved.</p>
              <p>
                Made with <span className="text-red-500">❤️</span> by Techrytham Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
