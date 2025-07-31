import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import HeroSection from './components/sections/HeroSection';
import SimplicitySection from './components/sections/SimplicitySection';
import ProductsGrid from './components/sections/ProductsGrid';
import AboutSection from './components/sections/AboutSection';
import StatsSection from './components/sections/StatsSection';
import QualitySection from './components/sections/QualitySection';
import Footer from './components/common/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <SimplicitySection />
                <ProductsGrid />
                <StatsSection />
                <AboutSection />
                <QualitySection />
              </>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
