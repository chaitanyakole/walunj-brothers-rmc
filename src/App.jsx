import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TrustStrip from './sections/TrustStrip';
import About from './sections/About';
import Services from './sections/Services';
import RmcGrades from './sections/RmcGrades';
import WhyChooseUs from './sections/WhyChooseUs';
import HowItWorks from './sections/HowItWorks';
import QualityTestingGuide from './components/QualityTestingGuide';
import ProjectTypes from './sections/ProjectTypes';
import Gallery from './sections/Gallery';
import ServiceArea from './sections/ServiceArea';
import QuoteForm from './sections/QuoteForm';
import Testimonials from './components/Testimonials';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import InstagramSection from './sections/Instagram';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const scrollToQuote = () => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGrade = (grade) => {
    setSelectedGrade(grade);
    scrollToQuote();
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    scrollToQuote();
  };

  const handleSelectArea = (areaName) => {
    setSelectedLocation(areaName);
    scrollToQuote();
  };

  return (
    <div className="relative min-h-screen bg-[#121417] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onQuoteClick={scrollToQuote} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <About onQuoteClick={scrollToQuote} />

        {/* 4. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. RMC Grades Section (with interactive IS Specs Modal) */}
        <RmcGrades onSelectGrade={handleSelectGrade} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. How It Works (Timeline) */}
        <HowItWorks onQuoteClick={scrollToQuote} />

        {/* Quality Testing Protocol & IS Standards */}
        <QualityTestingGuide />

        {/* 8. Project Types */}
        <ProjectTypes onQuoteClick={scrollToQuote} />

        {/* 9. Gallery & Lightbox */}
        <Gallery />

        {/* 10. Service Area & Transit Estimator */}
        <ServiceArea onSelectArea={handleSelectArea} />

        {/* 11. Quote Request Form (with integrated Concrete Volume Calculator) */}
        <QuoteForm
          preselectedGrade={selectedGrade}
          preselectedService={selectedService}
          preselectedLocation={selectedLocation}
        />

        {/* 12. Testimonials (stays cleanly hidden if no genuine reviews exist) */}
        <Testimonials />

        {/* 13. FAQ Section */}
        <Faq />

        {/* 14. Instagram Section */}
        <InstagramSection />

        {/* 15. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA (Desktop WhatsApp & Mobile Fixed Action Bar) */}
      <FloatingCTA onQuoteClick={scrollToQuote} />
    </div>
  );
}
