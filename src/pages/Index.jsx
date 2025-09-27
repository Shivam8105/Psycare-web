import { useEffect } from 'react';
import HeroSection from '../component/Hero.jsx';
import TestimonialsSection from '../component/Testimonial.jsx';
import FeaturesSection from '../component/Features.jsx';
import FAQSection from '../component/FAQ.jsx';
import useScrollAnimations from '../hooks/useScrollAnimations.js';
import Footer from '../component/Footer.jsx';


const LandingPage = () => {
  // Initialize scroll animations
  useScrollAnimations();
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.className = 'font-poppins';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen relative bg-white">
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;