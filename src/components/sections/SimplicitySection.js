import React from 'react';
import Button from '../common/Button';
import AnimatedCard from '../common/AnimatedCard';

const SimplicitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Text */}
          <AnimatedCard animation="slideInLeft" delay={200} className="order-2 lg:order-1">
            <div className="bg-amber-600 text-white p-12 rounded-3xl shadow-xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Simplicidad en cada detalle
              </h2>
              
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <Button 
                variant="white" 
                size="lg"
                className="text-amber-600 hover:bg-amber-50 shadow-lg"
              >
                Explorar colección
              </Button>
            </div>
          </AnimatedCard>

          {/* Right Content - Chair Image */}
          <AnimatedCard animation="slideInRight" delay={400} className="order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 shadow-xl overflow-hidden">
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300 rounded-full -ml-12 -mb-12 opacity-30"></div>
              
              {/* Chair representation */}
              <div className="relative z-10 flex items-center justify-center h-80">
                <div className="relative">
                  
                  {/* Chair base and legs */}
                  <div className="relative w-48 h-56">
                    
                    {/* Chair seat */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-blue-600 rounded-2xl shadow-lg"></div>
                    
                    {/* Chair back */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-32 bg-blue-600 rounded-t-3xl shadow-lg"></div>
                    
                    {/* Chair legs */}
                    <div className="absolute bottom-0 left-6 w-3 h-16 bg-amber-800 rounded-full"></div>
                    <div className="absolute bottom-0 right-6 w-3 h-16 bg-amber-800 rounded-full"></div>
                    <div className="absolute bottom-0 left-6 transform translate-y-4 w-3 h-12 bg-amber-800 rounded-full rotate-12"></div>
                    <div className="absolute bottom-0 right-6 transform translate-y-4 w-3 h-12 bg-amber-800 rounded-full -rotate-12"></div>
                    
                    {/* Chair details */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-blue-500 rounded-t-2xl opacity-80"></div>
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-blue-500 rounded-xl opacity-80"></div>
                    
                    {/* Shadow */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-black opacity-10 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-12 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-24 left-12 w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default SimplicitySection;
