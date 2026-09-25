import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, MessageSquare, Send, CheckCircle2, Navigation, ArrowUpRight, AlertCircle, Building2 } from 'lucide-react';
import { business } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = "Please enter a valid 10-digit number.";
    }
    if (!formData.message.trim()) errs.message = "Please enter your message or project requirements.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 bg-[#121418] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Connect & Coordinate</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 sm:mb-5">
            Let's Build Something Strong
          </h2>

          <p className="text-slate-400 text-sm sm:text-lg leading-relaxed">
            Reach out to our batching and operations desk for quotations, batch scheduling, technical mix advice, or site inspection coordination.
          </p>
        </div>

        {/* 2-Column: Contact Details / Map Card + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Google Maps Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Card */}
            <div className="p-5 sm:p-8 rounded-2xl bg-[#181c24] border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {business.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-orange-400 font-bold mt-1">
                  Ready-Mix Concrete Supplier
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Address Card */}
                <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-black/30 border border-white/5">
                  <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                      Business Address
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {business.address.line1},<br />
                      {business.address.line2},<br />
                      {business.address.line3}, {business.address.country}.
                    </p>
                    <a
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold mt-2.5 min-h-[36px] py-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-black/30 border border-white/5">
                  <Mail className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">
                      Email
                    </span>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-sm text-slate-200 hover:text-orange-400 font-medium transition-colors break-all"
                    >
                      {business.email}
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                {business.phone ? (
                  <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-black/30 border border-white/5">
                    <Phone className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">
                        Direct Phone / Order Line
                      </span>
                      <a
                        href={`tel:${business.phone}`}
                        className="text-sm text-white hover:text-orange-400 font-bold transition-colors tracking-wide inline-block py-0.5"
                      >
                        {business.phone}
                      </a>
                    </div>
                  </div>
                ) : null}

                {/* WhatsApp & Call Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Walunj Brother's RMC, I am reaching out from your contact page.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 min-h-[48px] rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/25 flex flex-col items-center justify-center text-center transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-5 h-5 mb-1 text-emerald-400" />
                    <span className="text-xs font-bold">WhatsApp</span>
                  </a>

                  {business.phone ? (
                    <a
                      href={`tel:${business.phone}`}
                      className="p-3 sm:p-3.5 min-h-[48px] rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 flex flex-col items-center justify-center text-center transition-all active:scale-[0.98]"
                    >
                      <Phone className="w-5 h-5 mb-1 text-orange-400" />
                      <span className="text-xs font-bold">Call Now</span>
                    </a>
                  ) : (
                    <a
                      href={`mailto:${business.email}?subject=Walunj%20Brothers%20RMC%20Enquiry`}
                      className="p-3 sm:p-3.5 min-h-[48px] rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 flex flex-col items-center justify-center text-center transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-5 h-5 mb-1 text-orange-400" />
                      <span className="text-xs font-bold">Email Us</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#181c24] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-8 md:p-10 shadow-xl">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Have a question about RMC supply, customized grade proportions, or delivery schedules? Send a message directly.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 sm:py-12 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-2">
                    Enquiry Received
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Our dispatch team has received your enquiry and will respond promptly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-xs uppercase font-bold tracking-wider text-orange-400 hover:underline min-h-[44px] px-4 py-2"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Anand Shinde"
                      className={`w-full bg-[#13161c] border rounded-xl px-4 py-3 min-h-[48px] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                        errors.name ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Mobile Number <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="10-digit mobile"
                        className={`w-full bg-[#13161c] border rounded-xl px-4 py-3 min-h-[48px] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-slate-500 lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 min-h-[48px] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Message / Project Details <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share your site location, concrete grade required, or questions..."
                      className={`w-full bg-[#13161c] border rounded-xl p-3.5 sm:p-4 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                        errors.message ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-heading font-extrabold text-sm min-h-[48px] py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-98 transition-all"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
