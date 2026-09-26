import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { business } from '../config/business';
import BrandLogo from './BrandLogo';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onQuoteClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

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

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
            ? 'bg-white/95 dark:bg-[#0e1117]/95 backdrop-blur-md py-3 shadow-md shadow-slate-200/60 dark:shadow-black/40 border-b border-slate-200 dark:border-white/10'
            : 'bg-white/85 dark:bg-[#0e1117]/85 backdrop-blur-sm py-3.5 sm:py-4 border-b border-slate-200/60 dark:border-white/5 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group min-w-0"
              aria-label="Walunj Brother's RMC Home"
            >
              <BrandLogo size="md" theme={isDark ? 'dark' : 'light'} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 hover:bg-blue-50/80 dark:hover:bg-white/5 rounded-lg transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions & Theme Switcher (Icon Only) */}
            <div className="hidden lg:flex items-center">
              <ThemeSwitcher variant="toggle" />
            </div>

            {/* Mobile Actions: Theme Switcher (Icon Only) + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <ThemeSwitcher variant="toggle" />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg border border-slate-200 dark:border-white/10 active:scale-95"
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
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-white dark:bg-[#14171d] border-l border-slate-200 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto lg:hidden pt-[calc(1.25rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <BrandLogo size="sm" theme={isDark ? 'dark' : 'light'} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Theme Switcher in mobile drawer */}
                <div className="pt-3.5 pb-2 border-b border-slate-200/80 dark:border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
                    Theme Preference
                  </span>
                  <ThemeSwitcher variant="segmented" />
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-1 py-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between px-3.5 py-2.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-white/5 rounded-lg transition-colors min-h-[44px] active:bg-blue-100 dark:active:bg-white/10"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-medium">
                  Walunj Brother's RMC • Pune
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
