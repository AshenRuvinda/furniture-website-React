import React from 'react';
import Button from '../common/Button';
import AnimatedCard from '../common/AnimatedCard';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatedCard animation="fadeInUp" delay={200}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Diseño que</span>
                <span className="block">transforma</span>
                <span className="block text-amber-600">espacios,</span>
              </h1>
            </AnimatedCard>

            <AnimatedCard animation="fadeInUp" delay={400}>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-700 mb-6">
                Simplicidad y elegancia en cada pieza
              </h2>
            </AnimatedCard>

            <AnimatedCard animation="fadeInUp" delay={600}>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </AnimatedCard>

            <AnimatedCard animation="fadeInUp" delay={800}>
              <Button variant="primary" size="lg" className="shadow-xl">
                Ver catálogo
              </Button>
            </AnimatedCard>
          </div>

          {/* Right Content - Room Mockup */}
          <div className="relative">
            <AnimatedCard animation="slideInRight" delay={400}>
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
                
                {/* Room Interior */}
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  
                  {/* Background with Japanese screen and shelf */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200">
                    
                    {/* Japanese screen pattern */}
                    <div className="absolute left-4 top-4 bottom-4 w-16 bg-gray-800 rounded-lg opacity-80">
                      <div className="grid grid-cols-3 gap-1 p-2 h-full">
                        {[...Array(15)].map((_, i) => (
                          <div key={i} className="bg-amber-100 rounded-sm opacity-60"></div>
                        ))}
                      </div>
                    </div>

                    {/* Shelf with items */}
                    <div className="absolute top-8 left-24 right-8 h-16 bg-amber-800 rounded-lg shadow-lg">
                      
                      {/* Bonsai tree */}
                      <div className="absolute left-8 -top-4 w-12 h-16">
                        <div className="w-8 h-8 bg-green-600 rounded-full mx-auto mb-2"></div>
                        <div className="w-1 h-6 bg-amber-900 mx-auto"></div>
                        <div className="w-6 h-2 bg-amber-700 rounded-full mx-auto"></div>
                      </div>

                      {/* Decorative vases */}
                      <div className="absolute right-12 -top-2 flex space-x-2">
                        <div className="w-4 h-8 bg-amber-700 rounded-full"></div>
                        <div className="w-4 h-10 bg-amber-800 rounded-full"></div>
                        <div className="w-3 h-6 bg-amber-900 rounded-full"></div>
                      </div>

                      {/* Lamps */}
                      <div className="absolute left-32 -top-6 w-6 h-12 bg-amber-200 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mx-auto mt-2"></div>
                      </div>
                      <div className="absolute right-32 -top-6 w-6 h-12 bg-amber-200 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mx-auto mt-2"></div>
                      </div>
                    </div>

                    {/* Floor area with furniture */}
                    <div className="absolute bottom-4 left-4 right-4 h-32">
                      
                      {/* Round coffee table */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-amber-600 rounded-full shadow-lg"></div>
                      
                      {/* Chair */}
                      <div className="absolute bottom-8 right-12 w-16 h-20">
                        <div className="w-full h-12 bg-cream rounded-t-2xl"></div>
                        <div className="w-full h-8 bg-cream rounded-b-lg"></div>
                        <div className="absolute inset-2 bg-gray-100 rounded-xl shadow-inner"></div>
                      </div>

                      {/* Palm plant */}
                      <div className="absolute bottom-4 right-4 w-8 h-16">
                        <div className="w-full h-8 bg-green-500 rounded-t-full"></div>
                        <div className="w-4 h-8 bg-amber-800 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
