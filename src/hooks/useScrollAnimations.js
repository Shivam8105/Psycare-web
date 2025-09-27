import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    // Auto-trigger hero animations after a short delay
    setTimeout(() => {
      const heroAnimations = document.querySelectorAll('.fade-in-up');
      heroAnimations.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('in-view');
        }
      });
    }, 300);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimations;