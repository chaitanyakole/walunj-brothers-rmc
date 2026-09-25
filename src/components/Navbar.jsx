import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, HardHat, FileText, ChevronRight } from 'lucide-react';
import { business } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar({ onQuoteClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'RMC Grades', href: '#grades' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121418]/95 backdrop-blur-md py-3 shadow-xl shadow-black/30 border-b border-white/10'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group"
              aria-label="Walunj Brother's RMC Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shadow-inner group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <HardHat className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-white leading-tight uppercase group-hover:text-orange-400 transition-colors">
                  Walunj Brother's
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.22em] text-orange-500 font-bold uppercase">
                  Ready-Mix Concrete
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-md transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Hello Walunj Brother's RMC, I would like to enquire about RMC supply.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
                title="Direct WhatsApp"
                aria-label="Direct WhatsApp Enquiry"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </a>

              {business.phone ? (
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-colors border border-white/5 text-xs font-bold"
                  title="Call Us Directly"
                  aria-label="Call Walunj Brother's RMC"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="hidden xl:inline">{business.phone}</span>
                </a>
              ) : null}

              <button
                onClick={onQuoteClick}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-heading font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onQuoteClick}
                className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-md flex items-center gap-1 active:scale-95 transition-all"
                aria-label="Quick Quote"
              >
                <span>Quote</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10 active:scale-95"
                aria-label="Toggle Mobile Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-[#14171d] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading font-extrabold text-sm text-white">
                        WALUNJ BROTHER'S
                      </span>
                      <span className="text-[10px] text-orange-500 font-semibold tracking-wider">
                        READY-MIX CONCRETE
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-1.5 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between px-3.5 py-2.5 text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-600" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Actions in Drawer */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-heading font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-98"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request an RMC Quote</span>
                </button>

                <a
                  href={getWhatsAppUrl("Hello Walunj Brother's RMC, I would like to enquire about RMC supply for my construction project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Enquiry</span>
                </a>

                {business.phone ? (
                  <a
                    href={`tel:${business.phone}`}
                    className="w-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span>Call: {business.phone}</span>
                  </a>
                ) : null}

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  Serving Wagholi, Pune & Surrounding Corridors
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
