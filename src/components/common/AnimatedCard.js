import React, { useRef, useEffect, useState } from 'react';

const AnimatedCard = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp', 
  delay = 0,
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimated || !triggerOnce) {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) {
                  setHasAnimated(true);
                }
              }, delay);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay, threshold, triggerOnce, hasAnimated]);

  const animationClasses = {
    fadeInUp: isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8',
    slideInLeft: isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8',
    slideInRight: isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-8',
    scaleIn: isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95',
    fadeIn: isVisible ? 'opacity-100' : 'opacity-0',
    bounceIn: isVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-800 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </div>
  );
};

export default AnimatedCard;
