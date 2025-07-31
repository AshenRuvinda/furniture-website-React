 // Animation utility functions

export const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  export const slideInLeftVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };
  
  export const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };
  
  export const scaleInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Easing functions
  export const easings = {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    anticipate: [0.215, 0.61, 0.355, 1],
    backOut: [0.34, 1.56, 0.64, 1]
  };
  
  // Animation utilities
  export const getStaggerDelay = (index, baseDelay = 0.1) => {
    return index * baseDelay;
  };
  
  export const getRandomDelay = (min = 0, max = 0.5) => {
    return Math.random() * (max - min) + min;
  };
  
  export const createParallaxTransform = (scrollY, speed = 0.5) => {
    return `translateY(${scrollY * speed}px)`;
  };
  
  export const createHoverAnimation = (scale = 1.05, duration = 0.3) => {
    return {
      scale,
      transition: { duration, ease: easings.easeOut }
    };
  };
  
  export const createPulseAnimation = (scale = 1.1, duration = 2) => {
    return {
      scale: [1, scale, 1],
      transition: {
        duration,
        repeat: Infinity,
        ease: easings.easeInOut
      }
    };
  };
