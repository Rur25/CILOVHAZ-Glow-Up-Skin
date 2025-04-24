import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "CILOVHAZ Beauty | Produk Perawatan Kulit Alami";
    
    // Add scroll behavior for smooth scrolling to sections
    const handleScrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const sectionId = target.getAttribute('href');
        const section = document.querySelector(sectionId || '');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleScrollToSection);
    
    return () => {
      document.removeEventListener('click', handleScrollToSection);
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;