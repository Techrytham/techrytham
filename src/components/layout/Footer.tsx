import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { quickLinks, footerServices, supportLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              We build digital solutions that help businesses grow, engage their audience and
              achieve long-term success.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-ink">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-ink">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted hover:text-brand">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-ink">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-muted hover:text-brand">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-black/5 pt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3 text-sm text-muted">
            <Mail size={16} className="text-brand" /> techrytham.com@gmail.com
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Phone size={16} className="text-brand" /> +91-9685933664 / +91-9039135773
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <MapPin size={16} className="text-brand" /> Nagpur, Maharashtra (M.H) India
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 text-xs text-muted sm:flex-row">
          <p>© 2025 Techrytham. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">♥</span> by Techrytham Team
          </p>
        </div>
      </div>
    </footer>
  );
}
