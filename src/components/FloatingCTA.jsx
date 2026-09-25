import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, FileText, X } from 'lucide-react';
import { business } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingCTA({ onQuoteClick }) {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide floating desktop tooltip automatically after 7 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = getWhatsAppUrl(
    "Hello Walunj Brother's RMC, I am reaching out from your website to enquire about Ready-Mix Concrete supply."
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <div className="relative flex items-center">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="absolute right-16 mr-3 bg-[#181c24] text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-xl border border-emerald-500/30 whitespace-nowrap flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Chat with us on WhatsApp</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                  }}
                  className="text-slate-400 hover:text-white ml-1"
                  aria-label="Dismiss message"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all border-2 border-emerald-400/40 relative group"
            aria-label="Contact Walunj Brother's RMC via WhatsApp"
          >
            <MessageSquare className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />
            <span className="sr-only">Chat on WhatsApp</span>
          </motion.a>
        </div>
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#13161c]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* WhatsApp Action */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
          </a>

          {/* Call Action */}
          {business.phone ? (
            <a
              href={`tel:${business.phone}`}
              className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5 mb-0.5 text-orange-400" />
              <span className="text-[11px] font-bold tracking-tight">Call Now</span>
            </a>
          ) : (
            <button
              onClick={onQuoteClick}
              className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5 mb-0.5 text-orange-400" />
              <span className="text-[11px] font-bold tracking-tight">Contact</span>
            </button>
          )}

          {/* Get Quote Action */}
          <button
            onClick={onQuoteClick}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold active:scale-95 transition-transform shadow-md shadow-orange-500/20"
          >
            <FileText className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-extrabold tracking-tight">Get Quote</span>
          </button>
        </div>
      </div>
    </>
  );
}
