 // Products data

export const featuredProducts = [
    {
      id: 1,
      title: 'Diseño de venta',
      category: 'Colección',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Silla moderna con diseño minimalista y acabados de alta calidad.',
      price: 299,
      image: '/images/chair-yellow.jpg',
      features: ['Diseño ergonómico', 'Materiales premium', 'Garantía 5 años'],
      delay: '0ms'
    },
    {
      id: 2,
      title: 'Silla nueva',
      category: 'Colección',
      color: 'from-orange-400 to-orange-600',
      description: 'Silla contemporánea perfecta para espacios modernos.',
      price: 349,
      image: '/images/chair-orange.jpg',
      features: ['Estructura resistente', 'Tapizado premium', 'Fácil mantenimiento'],
      delay: '200ms'
    }
  ];
  
  export const productCategories = [
    {
      id: 'sillas',
      name: 'Sillas',
      description: 'Diseños únicos para el máximo confort',
      icon: 'chair',
      count: 25
    },
    {
      id: 'mesas',
      name: 'Mesas',
      description: 'Elegancia funcional para tu hogar',
      icon: 'table',
      count: 18
    },
    {
      id: 'sofas',
      name: 'Sofás',
      description: 'Comodidad y estilo en cada pieza',
      icon: 'sofa',
      count: 12
    },
    {
      id: 'accesorios',
      name: 'Accesorios',
      description: 'Detalles que marcan la diferencia',
      icon: 'lamp',
      count: 35
    }
  ];
  
  export const allProducts = [
    {
      id: 1,
      name: 'Silla Moderna Azul',
      category: 'sillas',
      price: 299,
      image: '/images/chair-blue.jpg',
      colors: ['azul', 'gris', 'negro'],
      inStock: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Silla Elegante Amarilla',
      category: 'sillas',
      price: 349,
      image: '/images/chair-yellow.jpg',
      colors: ['amarillo', 'verde', 'rojo'],
      inStock: true,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Silla Clásica Naranja',
      category: 'sillas',
      price: 279,
      image: '/images/chair-orange.jpg',
      colors: ['naranja', 'beige', 'café'],
      inStock: false,
      rating: 4.7,
      reviews: 156
    }
  ];
  
  export const productFilters = [
    {
      id: 'category',
      name: 'Categoría',
      options: [
        { value: 'all', label: 'Todos' },
        { value: 'sillas', label: 'Sillas' },
        { value: 'mesas', label: 'Mesas' },
        { value: 'sofas', label: 'Sofás' },
        { value: 'accesorios', label: 'Accesorios' }
      ]
    },
    {
      id: 'price',
      name: 'Precio',
      options: [
        { value: 'all', label: 'Todos' },
        { value: '0-200', label: '$0 - $200' },
        { value: '200-500', label: '$200 - $500' },
        { value: '500-1000', label: '$500 - $1000' },
        { value: '1000+', label: '$1000+' }
      ]
    },
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'all', label: 'Todos' },
        { value: 'azul', label: 'Azul' },
        { value: 'amarillo', label: 'Amarillo' },
        { value: 'naranja', label: 'Naranja' },
        { value: 'verde', label: 'Verde' },
        { value: 'rojo', label: 'Rojo' }
      ]
    }
  ];
