import { useState, useEffect } from 'react';

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getParallaxOffset = (speed = 0.5) => scrollY * speed;

  return {
    scrollY,
    isScrolled,
    getParallaxOffset
  };
};

export default useScrollAnimation;
