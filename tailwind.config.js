 /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'warm-brown': '#8B6F47',
          'light-beige': '#F5F5DC',
          'dark-brown': '#654321',
          'accent-blue': '#4A90E2',
          'accent-yellow': '#F4D03F'
        },
        fontFamily: {
          'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
          'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'slide-in-left': 'slideInLeft 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
          'slide-in-right': 'slideInRight 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
          'scale-in': 'scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'pulse-glow': {
            '0%, 100%': { boxShadow: '0 0 20px rgba(139, 111, 78, 0.5)' },
            '50%': { boxShadow: '0 0 30px rgba(139, 111, 78, 0.8)' },
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.8)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
        },
        backdropBlur: {
          xs: '2px',
        }
      },
    },
    plugins: [],
  }
