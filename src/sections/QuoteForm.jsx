import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, MessageSquare, CheckCircle2, AlertCircle, Calendar, MapPin, Layers, Phone, User, Mail, FileText } from 'lucide-react';
import { business } from '../config/business';
import { rmcGrades } from '../data/rmcGrades';
import { buildQuoteWhatsAppMessage, getWhatsAppUrl, getQuoteMailtoUrl } from '../utils/whatsapp';

export default function QuoteForm({
  preselectedGrade,
  preselectedService,
  preselectedLocation,
  onSubmissionSuccess
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: preselectedService || 'Residential',
    location: preselectedLocation || '',
    grade: preselectedGrade || 'M20',
    quantity: '',
    deliveryDate: '',
    notes: ''
  });

  const [prevGrade, setPrevGrade] = useState(preselectedGrade);
  const [prevService, setPrevService] = useState(preselectedService);
  const [prevLocation, setPrevLocation] = useState(preselectedLocation);

  if (preselectedGrade !== prevGrade) {
    setPrevGrade(preselectedGrade);
    if (preselectedGrade) {
      setFormData(prev => ({ ...prev, grade: preselectedGrade }));
    }
  }

  if (preselectedService !== prevService) {
    setPrevService(preselectedService);
    if (preselectedService) {
      setFormData(prev => ({ ...prev, projectType: preselectedService }));
    }
  }

  if (preselectedLocation !== prevLocation) {
    setPrevLocation(preselectedLocation);
    if (preselectedLocation) {
      setFormData(prev => ({ ...prev, location: preselectedLocation }));
    }
  }

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    
    // Validate phone number: at least 10 digits
    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your mobile number.";
    } else if (cleanedPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.location.trim()) {
      errs.location = "Please enter your site location (e.g. Wagholi, Kharadi).";
    }

    if (!formData.grade) {
      errs.grade = "Please select the required RMC grade.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleStandardSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      if (onSubmissionSuccess) onSubmissionSuccess(formData);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const message = buildQuoteWhatsAppMessage(formData);
      const url = getWhatsAppUrl(message);
      window.open(url, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Residential',
      location: '',
      grade: 'M20',
      quantity: '',
      deliveryDate: '',
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="quote-section" className="py-20 md:py-28 bg-[#121418] relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Concrete Quotation</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Need RMC for Your Project?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your concrete requirement and our team can get back to you with competitive rates and delivery schedules.
          </p>
        </div>

        {/* Card Form Container */}
        <div className="bg-[#181c24] rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                  Thank You, {formData.name}!
                </h3>

                <p className="text-slate-300 text-base max-w-lg mx-auto mb-6 leading-relaxed">
                  Your enquiry for <strong className="text-orange-400">{formData.grade}</strong> concrete for your site at <strong className="text-white">{formData.location}</strong> has been logged.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto mb-8 text-xs text-slate-400 text-left space-y-1.5">
                  <p><strong className="text-slate-200">Mobile:</strong> {formData.phone}</p>
                  <p><strong className="text-slate-200">Quantity:</strong> {formData.quantity ? `${formData.quantity} m³` : 'To be confirmed'}</p>
                  <p><strong className="text-slate-200">Delivery Date:</strong> {formData.deliveryDate || 'Flexible'}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send directly to WhatsApp</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="text-xs uppercase font-bold tracking-wider text-slate-400 hover:text-white px-4 py-3"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleStandardSubmit} noValidate className="space-y-6">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patil"
                        className={`w-full bg-[#13161c] border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                          errors.name ? 'border-red-500 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Mobile Number <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-[#13161c] border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                          errors.phone ? 'border-red-500 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-slate-500 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                    >
                      <option value="Residential">Residential Construction (House / Apartment)</option>
                      <option value="Commercial">Commercial Project (Shop / Office / Mall)</option>
                      <option value="Industrial">Industrial Project (Factory / Warehouse Floor)</option>
                      <option value="Infrastructure">Infrastructure Project (Road / Bridge / Drain)</option>
                      <option value="Other">Other Construction Work</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Site Location & RMC Grade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Site Location / Area <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Wagholi, Lonikand, Kharadi..."
                        className={`w-full bg-[#13161c] border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                          errors.location ? 'border-red-500 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                    </div>
                    {errors.location && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.location}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      RMC Grade Required <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Layers className="w-4 h-4" />
                      </div>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      >
                        {rmcGrades.map((g) => (
                          <option key={g.grade} value={g.grade}>
                            {g.grade} ({g.tag} - {g.characteristicStrength})
                          </option>
                        ))}
                        <option value="Need Advice">Need Assistance / Unsure of Grade</option>
                      </select>
                    </div>
                    {errors.grade && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.grade}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Quantity & Delivery Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Quantity (m³) <span className="text-slate-500 font-normal lowercase">(cubic meters)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        step="0.5"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 12 or 24"
                        className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                      <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-xs text-slate-400 font-medium">
                        m³
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Required Delivery Date <span className="text-slate-500 font-normal lowercase">(preferred date)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 5: Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Additional Requirements / Pump Details <span className="text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="E.g., Boom pump required, concrete casting at 4th floor, preferred morning timing, narrow road access notes..."
                    className="w-full bg-[#13161c] border border-white/10 hover:border-white/20 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
                </div>

                {/* Dual Action Buttons: Request a Quote & Send via WhatsApp */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Primary Form Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-heading font-extrabold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-xl shadow-orange-500/20 active:scale-98 transition-all"
                  >
                    <FileText className="w-5 h-5 text-slate-950" />
                    <span>Request a Quote</span>
                  </button>

                  {/* Dynamic Pre-filled WhatsApp Button */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-slate-400">
                    Prefer direct email? Send specs to{' '}
                    <a
                      href={getQuoteMailtoUrl(formData)}
                      className="text-orange-400 hover:underline"
                    >
                      {business.email}
                    </a>
                  </p>
                </div>

              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
