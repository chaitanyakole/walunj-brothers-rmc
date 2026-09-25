import React from 'react';
import { HardHat, MapPin, Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { business } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#0c0e12] border-t border-white/10 text-slate-300 pt-12 sm:pt-16 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white block uppercase tracking-wider">
                  Walunj Brother's RMC
                </span>
                <span className="text-[11px] text-orange-400 font-bold uppercase tracking-widest">
                  Ready-Mix Concrete Supplier
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable Ready-Mix Concrete supply and transportation for construction projects across Pune and surrounding areas.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={getWhatsAppUrl("Hello Walunj Brother's RMC, I am reaching out from your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-all"
                  aria-label="Walunj Brother's RMC WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>

                {business.instagram ? (
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-pink-400 border border-white/10 flex items-center justify-center transition-all"
                    aria-label="Walunj Brother's RMC Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                ) : (
                  <a
                    href="#instagram"
                    onClick={(e) => handleNavClick(e, '#instagram')}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-pink-400 border border-white/10 flex items-center justify-center transition-all"
                    aria-label="Walunj Brother's RMC Instagram Channel"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'RMC Grades', href: '#grades' },
                { label: 'Projects', href: '#projects' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-slate-600">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Ready-Mix Concrete Supply',
                'RMC Transportation',
                'Site Delivery Coordination',
                'Residential Projects',
                'Commercial Projects',
                'Infrastructure Projects',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-slate-600">›</span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2.5">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Business Address:</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Gate No. 218, Lonikand Lohagaon Road, Bhawadi Post, Wagholi, Haveli, Pune, Maharashtra, India.
                  </p>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-orange-400 hover:underline mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="text-xs text-slate-300 hover:text-orange-400 transition-colors break-all"
                >
                  {business.email}
                </a>
              </li>

              {business.phone ? (
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a
                    href={`tel:${business.phone}`}
                    className="text-xs text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    {business.phone}
                  </a>
                </li>
              ) : null}

              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl("Hello Walunj Brother's RMC, I am reaching out from your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline"
                >
                  WhatsApp Quick Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Walunj Brother's RMC. All Rights Reserved.</p>
          <p className="text-slate-400">
            Ready-Mix Concrete Supplier • Wagholi, Pune, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
