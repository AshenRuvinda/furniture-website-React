import React from 'react';

const Footer = () => {
  const footerLinks = {
    enlaces: [
      { name: 'Catálogo', href: '#catalogo' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Proyectos', href: '#proyectos' },
      { name: 'Blog', href: '#blog' }
    ],
    legal: [
      { name: 'Términos de uso', href: '#terminos' },
      { name: 'Política de privacidad', href: '#privacidad' },
      { name: 'Cookies', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
    { name: 'LinkedIn', icon: 'linkedin' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Logo</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformando espacios con diseño excepcional. Simplicidad y elegancia en cada pieza.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces</h4>
            <ul className="space-y-3">
              {footerLinks.enlaces.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-amber-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-400">info@empresa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-amber-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-400">+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-amber-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-400">123 Design Street, City</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Suscríbete para recibir las últimas novedades en diseño.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
              />
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Logo. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
