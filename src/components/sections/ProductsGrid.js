import React from 'react';
import AnimatedCard from '../common/AnimatedCard';
import Button from '../common/Button';

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      title: 'Diseño de venta',
      category: 'Colección',
      bgColor: 'from-yellow-400 to-yellow-600',
      chairColor: 'bg-yellow-500',
      description: 'Silla moderna con diseño único y acabados premium.',
      delay: 0
    },
    {
      id: 2,
      title: 'Silla nueva',
      category: 'Nueva',
      bgColor: 'from-orange-400 to-red-500',
      chairColor: 'bg-orange-500',
      description: 'Diseño contemporáneo con máximo confort.',
      delay: 200
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedCard animation="fadeInUp" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Colección
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre piezas únicas que transformarán tu espacio
            </p>
          </div>
        </AnimatedCard>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {products.map((product, index) => (
            <AnimatedCard 
              key={product.id} 
              animation="scaleIn" 
              delay={product.delay}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                
                {/* Product Header */}
                <div className={`relative bg-gradient-to-br ${product.bgColor} p-8 h-80`}>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Chair Illustration */}
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                    <div className="relative w-32 h-40 group-hover:scale-110 transition-transform duration-500">
                      
                      {/* Chair shadow */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black/20 rounded-full blur-md"></div>
                      
                      {/* Chair back */}
                      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-24 ${product.chairColor} rounded-t-3xl shadow-lg`}>
                        <div className="absolute inset-2 bg-white/20 rounded-t-3xl"></div>
                      </div>
                      
                      {/* Chair seat */}
                      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-16 ${product.chairColor} rounded-2xl shadow-lg`}>
                        <div className="absolute inset-2 bg-white/20 rounded-xl"></div>
                      </div>
                      
                      {/* Chair legs */}
                      <div className="absolute bottom-0 left-1/4 w-2 h-12 bg-amber-800 rounded-full"></div>
                      <div className="absolute bottom-0 right-1/4 w-2 h-12 bg-amber-800 rounded-full"></div>
                      <div className="absolute bottom-2 left-1/4 w-2 h-8 bg-amber-800 rounded-full transform rotate-12"></div>
                      <div className="absolute bottom-2 right-1/4 w-2 h-8 bg-amber-800 rounded-full transform -rotate-12"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="md"
                    className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300"
                  >
                    Conocer detalles
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Product Card */}
          <AnimatedCard animation="slideInLeft" delay={400}>
            <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl p-8 h-64 overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-yellow-800 font-medium text-sm">Colección</span>
                  <h3 className="text-2xl font-bold text-yellow-900 mt-2">
                    Diseño de venta
                  </h3>
                </div>
                
                <Button 
                  variant="dark" 
                  size="sm"
                  className="self-start group-hover:scale-105 transition-transform duration-300"
                >
                  Conocer detalles
                </Button>
              </div>

              {/* Yellow Chair */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-24 h-32 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-20 bg-yellow-600 rounded-t-2xl shadow-lg">
                  <div className="absolute inset-2 bg-yellow-400 rounded-t-xl"></div>
                </div>
                <div className="w-full h-12 bg-yellow-600 rounded-b-xl shadow-lg mt-2">
                  <div className="absolute inset-x-2 bottom-2 h-8 bg-yellow-400 rounded-lg"></div>
                </div>
                <div className="absolute bottom-0 left-2 w-1 h-8 bg-amber-800 rounded-full"></div>
                <div className="absolute bottom-0 right-2 w-1 h-8 bg-amber-800 rounded-full"></div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
            </div>
          </AnimatedCard>

          {/* Right Product Card */}
          <AnimatedCard animation="slideInRight" delay={600}>
            <div className="relative bg-gradient-to-br from-orange-300 to-red-400 rounded-3xl p-8 h-64 overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-orange-800 font-medium text-sm">Nueva Colección</span>
                  <h3 className="text-2xl font-bold text-orange-900 mt-2">
                    Silla nueva
                  </h3>
                </div>
                
                <Button 
                  variant="dark" 
                  size="sm"
                  className="self-start group-hover:scale-105 transition-transform duration-300"
                >
                  Conocer detalles
                </Button>
              </div>

              {/* Orange Chair */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-24 h-32 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-20 bg-orange-600 rounded-t-2xl shadow-lg">
                  <div className="absolute inset-2 bg-orange-400 rounded-t-xl"></div>
                </div>
                <div className="w-full h-12 bg-orange-600 rounded-b-xl shadow-lg mt-2">
                  <div className="absolute inset-x-2 bottom-2 h-8 bg-orange-400 rounded-lg"></div>
                </div>
                <div className="absolute bottom-0 left-2 w-1 h-8 bg-amber-800 rounded-full"></div>
                <div className="absolute bottom-0 right-2 w-1 h-8 bg-amber-800 rounded-full"></div>
              </div>

              {/* Background decoration */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
