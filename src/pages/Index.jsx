import { useEffect } from 'react';
import HeroSection from '../component/Hero.jsx';
import TestimonialSection from '../component/Testimonial.jsx';
import FeaturesSection from '../component/Features.jsx';
import FAQSection from '../component/FAQ.jsx';
import useScrollAnimations from '../hooks/useScrollAnimations.js';


const LandingPage = () => {
  // Initialize scroll animations
  useScrollAnimations();

  useEffect(() => {
    // Lenis will handle scroll behavior, so we don't need to set it manually
    document.body.className = 'font-poppins';
    document.documentElement.classList.add('lenis');
  }, []);

  return (
    <main className="w-full min-h-screen relative bg-white">
      <div className="w-full relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <FAQSection />
      </div>
    </main>
  );
};

export default LandingPage;